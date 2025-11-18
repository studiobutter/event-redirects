import { useEffect } from "react"; // eslint-disable-line no-unused-vars
import { isMobile } from "react-device-detect";

import InAppBrowserRedirectZH from "../components/InAppBrowserRedirect_zh-Hans";

function SRcn() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/i.test(userAgent);
    const isFacebook = /FBAN|FBAV/i.test(userAgent);
    const isInApp = isInstagram || isFacebook;

    if (!isInApp) {
      if (isMobile) {
        window.location.href = "starrailmihoyo://";
      } else {
        window.location.href =
          "hyp-cn://launchgame?gamebiz=hkrpg_cn&openGame=true";
      }
    }
  }, []);

  return (
    <div>
      <InAppBrowserRedirectZH />
      <p>{isMobile ? "启动崩坏：星穹铁道..." : "启动米哈游启动器..."}</p>

      <p style={{ display: "inline", marginRight: "1px" }}>
        如果游戏无法打开或出现无效错误，则您可能没有该游戏。请在
      </p>

      {isMobile ? (
        <a href="https://act-api-takumi.mihoyo.com/event/download_porter/link/hkrpg_cn/official/android_default">
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

export default SRcn;
