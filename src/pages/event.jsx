import { useEffect, useMemo } from "react";
import { isMobile, isMacOs, isAndroid, isIOS, isWindows } from "react-device-detect";
import redirectConfig from "./components/redirectConfig";
import InAppBrowserRedirect from "./components/InAppBrowserRedirect";

function EventRedirect() {
  const queryParams = new URLSearchParams(window.location.search);
  const game = queryParams.get("game");
  const region = queryParams.get("region") || queryParams.get("server");

  // 1. Memoize Config Resolution
  const config = useMemo(() => {
    const gameConfig = redirectConfig[game];
    if (!gameConfig) return null;

    // Handle game-specific nesting (bh3 vs others)
    let resolved = gameConfig[region] || gameConfig;

    // Fallback for bh3 specific server structure in your original code
    if (game === "bh3" && region !== "cn" && gameConfig.servers?.[region]) {
      resolved = {
        ...gameConfig.servers[region],
        mobileText: `Opening Honkai Impact 3rd - ${gameConfig.servers[region].name}...`,
        pcText: "Opening HoYoPlay...",
      };
    }

    return resolved;
  }, [game, region]);

  // 2. Standardized Download URL Logic
  const downloadUrl = useMemo(() => {
    if (!config) return null;
    const { downloads, download } = config;

    // Normalize different config styles into one lookup
    const source = downloads || download || config;

    if (typeof source === "string") return source;
    if (isMacOs) return source.ios || source.pc;
    if (isMobile) return isAndroid ? source.android : source.ios;
    return source.pc || source.android || source.ios;
  }, [config]);

  // 3. Redirect Effect
  useEffect(() => {
    // if (import.meta.env.DEV || !config) return;
    if (!config?.uris) return;
    
    const ua = navigator.userAgent;
    const isInApp =
      /FBAN|FBAV|Instagram|Twitter|TwitterAndroid|TikTok|Line/i.test(ua);
    if (isInApp && isMobile) return;


    const redirectUri =
      isMobile || (game === "bh3" && region === "cn" && isMacOs)
        ? config.uris.mobile
        : config.uris.pc || config.uris.mobile;

    let downloadTimer;

    if (game && game.startsWith("cg_") && isWindows) {
      if (game === "cg_sr") {
        window.location.href = redirectUri;
      } else {
        return;
      }
    }

    const attemptRedirect = () => {
      // 1. Attempt to open the App

      window.location.href = redirectUri;

      // 2. Fallback Logic: Only trigger if the page stays in focus
      const shouldAutoDownload = isIOS || (isAndroid && region === "global");

      if (shouldAutoDownload && downloadUrl) {
        downloadTimer = setTimeout(() => {
          // If the user is still looking at this page (document not hidden),
          // it means the app likely didn't open.
          if (!document.hidden) {
            if (!isWindows) {
              window.location.href = downloadUrl;
            } else {
              // For Windows users, show a prompt instead of auto-downloading
              alert(
                "It seems the app didn't open. Please click OK to download the game."
              );
              window.location.href = downloadUrl;
            }
          }
        }, 5000); // Increased timeout to give the OS time to show the prompt
      }
    };

    // Delay the initial attempt to ensure the UI is rendered
    const initialTimer = setTimeout(attemptRedirect, 1000);

    // CLEANUP: If the user leaves the page (app opens), cancel the download
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(downloadTimer);
        if (!isWindows) {
          window.close(); // Attempt to close the page if the app opened successfully
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(downloadTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [config, downloadUrl, game, region]);

  if (!config) {
    return (
      <div>
        <p>Invalid game or region specified.</p>
        <p>Supported: {Object.keys(redirectConfig).join(", ")}</p>
      </div>
    );
  }

  const showUI = !isIOS && (isAndroid ? region !== "global" : true);
  const displayText =
    config.text ||
    (isMobile ? config.mobileText : config.pcText) ||
    "Opening...";

  if (game && game.startsWith("cg_")) {
    if (game == "cg_sr") {return} else return (
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontFamily: "sans-serif",
        }}
      >
        <InAppBrowserRedirect language={config.cgui.lang || "en"} />

        {!isMobile && (
          <button
            onClick={() =>
              (window.location.href = config.uris.pc || config.uris.mobile)
            }
            style={{
              padding: "10px 20px",
              margin: "20px 0",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {config.cgui.text || "Download the game"}
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "sans-serif",
      }}
    >
      <InAppBrowserRedirect language={config.ui.lang || "en"} />

      <p style={{ fontSize: "1.2rem" }}>{displayText}</p>

      {/* Manual Launch Button for PC/Edge users if the prompt doesn't show */}
      {!isMobile && (
        <button
          onClick={() =>
            (window.location.href = config.uris.pc || config.uris.mobile)
          }
          style={{
            padding: "10px 20px",
            margin: "20px 0",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Click here if the game doesn't open
        </button>
      )}

      {showUI && config.ui.error && downloadUrl && (
        <p style={{ color: "#666", fontSize: "0.9rem" }}>
          {config.ui.error}{" "}
          <a href={downloadUrl} style={{ color: "#007bff" }}>
            here
          </a>
          {game === "yu" && " 下载游戏"}
          {game === "sky" && !isMobile && ' or Open "Sky" on PC'}
        </p>
      )}
    </div>
  );
}

export default EventRedirect;
