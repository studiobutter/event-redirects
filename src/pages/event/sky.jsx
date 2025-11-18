import { useEffect } from "react"; // eslint-disable-line no-unused-vars
import { isMobile } from "react-device-detect";

import InAppBrowserRedirect from "../components/InAppBrowserRedirect";

const Url =
  "https://store.steampowered.com/app/2325290/Sky_Children_of_the_Light/";
const Android_Url =
  "https://play.google.com/store/apps/details?id=com.tgc.sky.android";
const iOS_Url =
  "https://apps.apple.com/us/app/sky-children-of-the-light/id1462117269";

function Sky() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/i.test(userAgent);
    const isFacebook = /FBAN|FBAV/i.test(userAgent);
    const isInApp = isInstagram || isFacebook;
    const isMobile = /Mobi|Android/i.test(userAgent);

    if (!isInApp) {
      if (isMobile) {
        window.location.href = "sky://";
      } else {
        window.location.href = "steam://rungameid/232529;";
      }
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
      <p>
        {isMobile
          ? "Opening Sky: Children of the Light... "
          : "Opening Sky: Children of the Light in Steam..."}
      </p>
      <p>
        If the game fails to open or throws an invalid error, then you might not
        have the game. Please download the game <a href={downloadUrl}>here</a>
      </p>
    </div>
  );
}

export default Sky;
