import { useEffect } from "react"; // eslint-disable-line no-unused-vars
import { isMobile, isMacOs } from "react-device-detect";
import InAppBrowserRedirect from "../components/InAppBrowserRedirect";

function BH3Glb() {
  const queryParams = new URLSearchParams(window.location.search);
  const server = queryParams.get("server");

  // Mapping between server keys and readable names
  const regionNames = {
    overseas_official: "Southeast Asia",
    vn_official: "Vietnam",
    glb_official: "America",
    jp_official: "Japan",
    kr_official: "Korea",
    asia_official: "HK/TW/MO",
  };

  const PCServers = {
    overseas_official: "overseas_official",
    vn_official: "overseas_official",
    glb_official: "glb_official",
    jp_official: "jp_official",
    kr_official: "kr_official",
    asia_official: "asia_official",
  };

  const MobileURI = {
    overseas_official: "bh3overseas://",
    vn_official: "bh3vn://",
    glb_official: "bh3global://",
    jp_official: "bh3jp://",
    kr_official: "bh3kr://",
    asia_official: "bh3asia://",
  }

  const MobileStore = {
    overseas_official: "http://hoyo.link/55ra3U3qx",
    vn_official: "https://hoyo.link/d92yCBAd",
    glb_official: "https://hoyo.link/hLh5Eekel",
    jp_official: "http://hoyo.link/OEJEZWbFJ",
    kr_official: "http://hoyo.link/Au2zOLSty",
    asia_official: "https://hoyo.link/8bsICEAd",
  }
  
  const validServers = Object.keys(regionNames);
  const isValid = validServers.includes(server);
  const serverDisplayName = regionNames[server] || server;

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

    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/i.test(userAgent);
    const isFacebook = /FBAN|FBAV/i.test(userAgent);
    const isInApp = isInstagram || isFacebook;

    if (!isInApp) {
      if (isMobile || isMacOs) {
        const mobileUri = MobileURI[server];
        window.location.href = mobileUri;
      } else {
        const pcPackage = PCServers[server];
        const desktopUri = `hyp-global://launchgame?gamebiz=bh3_global&package=${pcPackage}&openGame=true`;
        window.location.href = desktopUri;
      }
    }
  }, [server, isValid]);
  
  if (!isValid) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: "40px" }}>
        <h1>400 — Bad Request</h1>
        <p>
          Please provide <b>server</b> in the URL.
        </p>
        <p>Example:</p>
        <code>?server=overseas_official</code>
      </div>
    );
  }

  return (
    <div>
      <InAppBrowserRedirect />
      <p>{(isMobile || isMacOs) ? "Opening Honkai Impact 3rd..." : "Opening HoYoPlay..."}</p>

      <p style={{ display: "inline", marginRight: "1px" }}>
        If the game fails to open or throws an invalid error, then you might not
        have the game. Please download the game{" "}
      </p>
      {(isMobile || isMacOs) ? (
        <a href={MobileStore[server]}>here</a>
      ) : (
        <a href="https://sg-public-api.hoyoverse.com/event/download_porter/trace/hyp_global/hyphoyoverse/default">
          here
        </a>
      )}

      <p>Server: {serverDisplayName}</p>
    </div>
  );
}

export default BH3Glb;
