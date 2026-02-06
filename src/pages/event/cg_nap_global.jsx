import { useEffect } from "react"; // eslint-disable-line no-unused-vars
import InAppBrowserRedirect from "../components/InAppBrowserRedirect";

const MobileUrl =
  "https://sg-public-api.hoyoverse.com/event/download_porter/link/clgm_nap-global/official/android_default";
const PCUrl =
  "https://sg-public-api.hoyoverse.com/event/download_porter/link/clgm_nap-global/official/pc_ldy";

function CloudNAPGlobal() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/i.test(userAgent);
    const isFacebook = /FBAN|FBAV/i.test(userAgent);
    const isInApp = isInstagram || isFacebook;

    if (!isInApp) {
      window.location.href = "cloudnapglobal://";
    }
  }, []);
  const getDownloadUrl = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      return MobileUrl;
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return MobileUrl;
    }

    if (/Macintosh|Mac OS X/i.test(userAgent)) {
      return MobileUrl;
    }

    return PCUrl;
  };

  return (
    <div>
      <InAppBrowserRedirect />
      <p>Opening Zenless Zone Zero - Cloud...</p>

      <p>
        If the game fails to open, throws an invalid error or you trying to open
        the game on PC, please download the game <a href={getDownloadUrl()}>here</a>{" "}
        or Open "Zenless Zone Zero - Cloud" on PC
      </p>
    </div>
  );
}

export default CloudNAPGlobal;
