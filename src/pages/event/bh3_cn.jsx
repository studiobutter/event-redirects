import { useEffect } from "react"; // eslint-disable-line no-unused-vars
import { isMobile , isMacOs } from "react-device-detect";

import InAppBrowserRedirectZH from "../components/InAppBrowserRedirect_zh-Hans";

function BH3cn() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/i.test(userAgent);
    const isFacebook = /FBAN|FBAV/i.test(userAgent);
    const isInApp = isInstagram || isFacebook;

    if (!isInApp) {
      if (isMobile || isMacOs) {
        window.location.href = "bh3game://";
      } else {
        window.location.href =
          "hyp-cn://launchgame?gamebiz=bh3_cn&openGame=true";
      }
    }
  }, []);

  return (
    <div>
      <InAppBrowserRedirectZH />
      <p>{(isMobile || isMacOs) ? "启动原神..." : "启动米哈游启动器..."}</p>

      <p style={{ display: "inline", marginRight: "1px" }}>
        如果游戏无法打开或出现无效错误，则您可能没有该游戏。请在
      </p>

      {(isMobile || isMacOs) ? (
        <a href={isMacOs ? "https://act-api-takumi.mihoyo.com/event/download_porter/link/bh3_cn/bh3/ios_official" : "https://act-api-takumi.mihoyo.com/event/download_porter/link/bh3_cn/bh3/android_official"}>
          此处
        </a>
      ) : (
        <a href="https://mhyurl.cn/Ztkut6sBd">
          此处
        </a>
      )}
      <p style={{ display: "inline", marginRight: "1px" }}>下载游戏</p>
    </div>
  );
}

export default BH3cn;