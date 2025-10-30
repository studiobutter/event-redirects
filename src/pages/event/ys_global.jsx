import React, { useEffect } from "react"; // eslint-disable-line no-unused-vars
import { isMobile } from "react-device-detect";

import InAppBrowserRedirect from "../components/InAppBrowserRedirect";

function YSglobal() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/i.test(userAgent);
    const isFacebook = /FBAN|FBAV/i.test(userAgent);
    const isInApp = isInstagram || isFacebook;

    if (!isInApp) {
      if (isMobile) {
        window.location.href = "genshin://";
      } else {
        window.location.href =
          "hyp-global://launchgame?gamebiz=hk4e_global&openGame=true";
      }
    }
  }, []);

  return (
    <div>
      <InAppBrowserRedirect />
      <p>{isMobile ? "Opening Genshin Impact..." : "Opening HoYoPlay..."}</p>

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
    </div>
  );
}

export default YSglobal;
