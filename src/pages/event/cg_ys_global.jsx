import { useEffect } from "react"; // eslint-disable-line no-unused-vars
import InAppBrowserRedirect from "../components/InAppBrowserRedirect";

const Url = "https://hoyo.link/4BDfFBAL";

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

  return (
    <div>
      <InAppBrowserRedirect />
      <p>Opening Genshin Impact - Cloud...</p>

      <p>
        If the game fails to open, throws an invalid error or you trying to open
        the game on PC, please download the game <a href={Url}>here</a>{" "}
        or Open "Genshin Impact - Cloud" on PC
      </p>
    </div>
  );
}

export default CloudYSGlobal;
