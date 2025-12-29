import { useEffect } from "react";

export default function GenshinPatch() {
  useEffect(() => {
    const WEB_URL = "https://m.hoyolab.com/toBBS.html?id=2";
    const OPEN_URL = `openURL?url=${encodeURIComponent(WEB_URL)}`;

    let appOpened = false;

    // Detect app switch (page hidden)
    const onVisibilityChange = () => {
      if (document.hidden) {
        appOpened = true;
        try {
          window.close();
        } catch (e) {
          // Ignore
        }
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    // Try to open HoYoLAB app
    window.location.href = OPEN_URL;

    // Fallback if app did not open
    const fallbackTimer = setTimeout(() => {
      if (!appOpened) {
        window.location.href = WEB_URL;
      }
    }, 1200);

    return () => {
      clearTimeout(fallbackTimer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <p>Opening HoYoLAB app…</p>
      <p>If nothing happens, you will be redirected.</p>
    </div>
  );
}
