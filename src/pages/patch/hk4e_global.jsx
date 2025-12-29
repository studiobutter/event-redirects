import { useEffect, useRef } from "react";

export default function GenshinPatch() {
  // Use a ref to track state across the async timer
  const isAppOpened = useRef(false);

  useEffect(() => {
    const WEB_URL = "https://m.hoyolab.com/toBBS.html?id=2";
    const OPEN_URL = `hoyolab://openURL?url=${encodeURIComponent(WEB_URL)}`;
    const TIMEOUT_DURATION = 2500; // Increased to give user time to read the prompt

    // 1. Hook into visibility changes (Standard + Safari specific)
    const handleVisibilityChange = () => {
      if (document.hidden || document.webkitHidden) {
        isAppOpened.current = true;
      }
    };

    // 'pagehide' is often more reliable on mobile Safari than 'visibilitychange'
    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handleVisibilityChange);

    // 2. Record the start time
    const startTime = Date.now();

    // 3. Try to open the app
    window.location.href = OPEN_URL;

    // 4. Set the fallback timer
    const fallbackTimer = setTimeout(() => {
      // Calculate how much time actually passed
      const timeElapsed = Date.now() - startTime;

      // If the app opened, the browser process was likely suspended/frozen.
      // So, if the timer fires and significantly MORE time has passed than we asked for,
      // it means the user was away (in the app). We should NOT redirect.
      // Threshold: Timeout + 500ms buffer.
      if (timeElapsed > TIMEOUT_DURATION + 500) {
        return; 
      }

      // If the document is currently hidden, do not redirect
      if (document.hidden || document.webkitHidden || isAppOpened.current) {
        return;
      }

      // Fallback: App didn't open, redirect to Web
      window.location.href = WEB_URL;
      
    }, TIMEOUT_DURATION);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handleVisibilityChange);
    };
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h3>Opening HoYoLAB...</h3>
      <p style={{ marginTop: "1rem", color: "#666" }}>
        If the app prompt appears, please tap <b>Open</b>.
      </p>
      <p style={{ marginTop: "1rem", fontSize: "0.9rem" }}>
        Stuck? <a href="https://m.hoyolab.com/toBBS.html?id=2">Click here to continue to browser</a>
      </p>
    </div>
  );
}
