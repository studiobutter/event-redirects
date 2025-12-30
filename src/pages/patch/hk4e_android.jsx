import { useEffect, useRef, useState } from "react";

export default function GenshinPatchAndroid() {
  const isAppOpened = useRef(false);
  // State to update UI if the user returns to this tab later
  const [status, setStatus] = useState("redirecting"); 

  useEffect(() => {
    const WEB_URL = "https://m.hoyolab.com/toBBS.html?id=2";
    const OPEN_URL = `hoyolab://openURL?url=${encodeURIComponent(WEB_URL)}`;
    const TIMEOUT_DURATION = 2500;

    const handleVisibilityChange = () => {
      // If page becomes hidden, we assume the app launched
      if (document.hidden || document.webkitHidden) {
        isAppOpened.current = true;
        setStatus("success"); // Update UI for when/if they return

        // --- ATTEMPT TO CLOSE ---
        try {
          // This will likely be ignored by Safari, but valid to try
          window.close();
        } catch (e) {
          console.log("Could not auto-close tab");
        }
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handleVisibilityChange);

    const startTime = Date.now();
    window.location.href = OPEN_URL;

    const fallbackTimer = setTimeout(() => {
      const timeElapsed = Date.now() - startTime;
      
      // If time elapsed is huge, the user was away (app opened)
      // so we don't redirect.
      if (timeElapsed > TIMEOUT_DURATION + 500) {
        setStatus("success");
        return; 
      }

      if (document.hidden || isAppOpened.current) {
        return;
      }

      // Fallback redirect
      window.location.href = WEB_URL;
    }, TIMEOUT_DURATION);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handleVisibilityChange);
    };
  }, []);

  // Render different UI based on state
  if (status === "success") {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h3>Opened in HoYoLAB!</h3>
        <p>You can close this tab.</p>
        <button onClick={() => window.close()}>Close Tab</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h3>Opening HoYoLAB...</h3>
      <p>Redirecting you to the app.</p>
    </div>
  );
}
