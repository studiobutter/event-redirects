import { useEffect, useRef, useState } from "react";

export default function GenshinPatch() {
  const isAppOpened = useRef(false);
  const [status, setStatus] = useState("redirecting");

  useEffect(() => {
    const WEB_URL = "https://m.hoyolab.com/toBBS.html?id=2";
    // Standard Deep Link
    const SCHEME_URL = `hoyolab://openURL?url=${encodeURIComponent(WEB_URL)}`;
    
    // Android "Intent" URL (The Magic Fix)
    // This format tells Android: Use the 'hoyolab' scheme, but if it fails, 
    // fall back to S.browser_fallback_url (WEB_URL).
    // Note: We use package 'com.mihoyo.hoyolab' (HoyoLAB's package ID)
    const ANDROID_INTENT = `intent://openURL?url=${encodeURIComponent(WEB_URL)}#Intent;scheme=hoyolab;package=com.mihoyo.hyperion;S.browser_fallback_url=${encodeURIComponent(WEB_URL)};end`;

    const isAndroid = /Android/i.test(navigator.userAgent);

    // --- ANDROID STRATEGY ---
    if (isAndroid) {
      // Android handles fallback natively via the Intent URL.
      // We don't need timers or checks. The OS does it all.
      window.location.href = ANDROID_INTENT;
      
      // We can just assume success/redirect happens immediately
      setStatus("success");
      return; 
    }

    // --- IOS / DESKTOP STRATEGY (Your existing code) ---
    
    const TIMEOUT_DURATION = 2500;

    const handleVisibilityChange = () => {
      if (document.hidden || document.webkitHidden) {
        isAppOpened.current = true;
        setStatus("success");
        try { window.close(); } catch (e) {} 
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handleVisibilityChange);

    const startTime = Date.now();
    window.location.href = SCHEME_URL;

    const fallbackTimer = setTimeout(() => {
      const timeElapsed = Date.now() - startTime;
      if (timeElapsed > TIMEOUT_DURATION + 500) {
        setStatus("success");
        try { window.close(); } catch (e) {}
        return;
      }
      if (document.hidden || isAppOpened.current) return;

      window.location.href = WEB_URL;
    }, TIMEOUT_DURATION);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handleVisibilityChange);
    };
  }, []);

  if (status === "success") {
    return (
      <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
        <p>Opened in App.</p>
        <button 
          onClick={() => window.close()}
          style={{ marginTop: "1rem", padding: "10px 20px", background: "#eee", border: "none", borderRadius: "8px" }}
        >
          Close Tab
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
      <p>Opening HoYoLAB...</p>
    </div>
  );
}