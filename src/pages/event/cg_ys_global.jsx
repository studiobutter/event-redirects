import React, { useEffect } from "react"; // eslint-disable-line no-unused-vars
import InAppBrowserRedirect from "../components/InAppBrowserRedirect";

const iOS_Url =
  "https://apps.apple.com/sg/app/genshin-impact-cloud/id6446889955";
const Android_Url =
  "https://play.google.com/store/apps/details?id=com.hoyoverse.cloudgames.GenshinImpact";
const Url =
  "https://sg-public-api.hoyoverse.com/event/download_porter/trace/clgm_global/genshincloud/default";

function CloudYSGlobal() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/i.test(userAgent);
    const isFacebook = /FBAN|FBAV/i.test(userAgent);
    const isInApp = isInstagram || isFacebook;

    if (!isInApp) {
      window.location.href = "cloudgenshin://";
    }
  }, []);
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  let downloadUrl = Url;
  if (/android/i.test(userAgent)) {
    downloadUrl = Android_Url;
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    downloadUrl = iOS_Url;
  }

  return (
    <div>
      <InAppBrowserRedirect />
      <p>Opening Genshin Impact - Cloud...</p>

      <p>
        If the game fails to open, throws an invalid error or you trying to open
        the game on PC, please download the game <a href={downloadUrl}>here</a>{" "}
        or Open "Genshin Impact - Cloud" on PC
      </p>
    </div>
  );
}

export default CloudYSGlobal;
