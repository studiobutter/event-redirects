import { useEffect } from "react"; // eslint-disable-line no-unused-vars
import { isMobile } from "react-device-detect";
import InAppBrowserRedirect from "../components/InAppBrowserRedirect";

function UGCWonderland() {
  const queryParams = new URLSearchParams(window.location.search);
  const ugcId = queryParams.get("ugc_id");
  const server = queryParams.get("server");
  const isCloud = queryParams.get("is_cloud") === "1";

  // Mapping between server keys and readable names
  const serverNames = {
    os_asia: "Asia",
    os_usa: "America",
    os_euro: "Europe",
    os_cht: "HK/TW/MO",
  };

  const validServers = Object.keys(serverNames);
  const isValid = ugcId && validServers.includes(server);
  const serverDisplayName = serverNames[server] || server;

  useEffect(() => {
    if (!isValid) {
      document.title = "400 Bad Request";
      try {
        window.history.replaceState({}, "", "/400");
      } catch (e) {
        console.warn("Could not set 400 state:", e);
      }
      return;
    }

    const encodedDeeplink = `event_type%3Dugc_level_info%26activity_id%3D${ugcId}%26source%3Dbbs`;

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/i.test(userAgent);
    const isFacebook = /FBAN|FBAV/i.test(userAgent);
    const isInApp = isInstagram || isFacebook;

    if (!isInApp) {
      if (isMobile) {
        const mobileUri = isCloud
          ? `cloudgenshin://?deferred_deeplink=${encodedDeeplink}`
          : `genshin://?deferred_deeplink=${encodedDeeplink}`;
        window.location.href = mobileUri;
      } else {
        const desktopUri = `hyp-global://launchgame?gamebiz=hk4e_global&openGame=true&deferredDeeplink=${encodedDeeplink}&uapc_md5=c1373fe940ff7c2d`;
        window.location.href = desktopUri;
      }
    }
  }, [isValid, ugcId, isCloud, server]);

  if (!isValid) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: "40px" }}>
        <h1>400 — Bad Request</h1>
        <p>
          Please provide both <b>ugc_id</b> and <b>server</b> in the URL.
        </p>
        <p>Example:</p>
        <code>?ugc_id=24895436376&server=os_asia</code>
      </div>
    );
  }

  return (
    <div>
      <InAppBrowserRedirect />
      <p>
        {isMobile
          ? `Opening Genshin Impact${isCloud ? " - Cloud" : ""}...`
          : "Opening HoYoPlay..."}
      </p>

      <p style={{ display: "inline", marginRight: "1px" }}>
        If the game fails to open or throws an invalid error, then you might not
        have the game. Please download the game{" "}
      </p>
      {isMobile ? (
        <a href="https://hoyo.link/euHgFDAL">here</a>
      ) : (
        <a href="https://sg-public-api.hoyoverse.com/event/download_porter/trace/hyp_global/hyphoyoverse/default">
          here
        </a>
      )}

      {isMobile && !isCloud && (
        <p>
          If you use Genshin Impact - Cloud, click{" "}
          <a href={`?ugc_id=${ugcId}&server=${server}&is_cloud=1`}>here</a> to
          open Cloud instead.
        </p>
      )}

      <p>Wonderland Level ID: {ugcId}</p>
      <p>Server: {serverDisplayName}</p>
      <p></p>
      <p>
        If you are viewing this in an in-app browser like Twitter, please open
        this link in your device's browser.
      </p>
    </div>
  );
}

export default UGCWonderland;
