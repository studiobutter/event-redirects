import { useEffect } from "react"; // eslint-disable-line no-unused-vars
import { isMobile } from "react-device-detect";
import InAppBrowserRedirectZH from "../components/InAppBrowserRedirect_zh-Hans";

function UGCBeyond() {
  const queryParams = new URLSearchParams(window.location.search);
  const ugcId = queryParams.get("ugc_id");
  const server = queryParams.get("server");
  const isCloud = queryParams.get("is_cloud") === "1";

  // Mapping between server keys and readable names
  const serverNames = {
    cn_gf01: "天空岛",
    cn_qd01: "世界树"
  };

  const validServers = Object.keys(serverNames);
  const isValid = ugcId && validServers.includes(server) && !(isCloud && server === "cn_qd01");
  const serverDisplayName = serverNames[server] || server;

  useEffect(() => {
    if (!isValid) {
      document.title = "400 错误的请求";
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
          ? `yscloud://?deferred_deeplink=${encodedDeeplink}`
          : `yuanshen://?deferred_deeplink=${encodedDeeplink}`;
        window.location.href = mobileUri;
      } else {
        const desktopUri = server === "cn_qd01"
          ? `hyp-cn-14-0-hk4e-cn-umfgRO5gh5://launchgame?gamebiz=hk4e_cn&openGame=true&deferredDeeplink=${encodedDeeplink}&uapc_md5=c1373fe940ff7c2d`
          : `hyp-cn://launchgame?gamebiz=hk4e_cn&openGame=true&deferredDeeplink=${encodedDeeplink}&uapc_md5=c1373fe940ff7c2d`;
        window.location.href = desktopUri;
      }
    }
  }, [isValid, ugcId, isCloud, server]);

  if (!isValid) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: "40px" }}>
        <h1>400 — 错误的请求</h1>
        <p>
          请在 URL 中提供 <b>ugc_id (GUID)</b> 和 <b>server (服务器)</b>。
        </p>
        <p>示例:</p>
        <code>?ugc_id=24895436376&server=cn_gf01</code>
      </div>
    );
  }

  return (
    <div>
      <InAppBrowserRedirectZH />
      <p>
        {isCloud
          ? isMobile
            ? "启动原神 - 云游戏..."
            : "启动米哈游启动器 (云)..."
          : isMobile
          ? "启动原神..."
          : "启动米哈游启动器..."}
      </p>

      <p style={{ display: "inline", marginRight: "1px" }}>
        如果游戏无法打开或出现无效错误，则您可能没有该游戏。请在
      </p>
      {isMobile ? (
        <a href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/android_default">此处</a>
      ) : (
        <a href="https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/pc_default">
          此处
        </a>
      )}

      {isMobile && !isCloud && server !== "cn_qd01" && (
        <p>
          如果您使用原神 - 云游戏，请点击{" "}
          <a href={`?ugc_id=${ugcId}&server=${server}&is_cloud=1`}>此处</a>{" "}
          以改为打开云游戏。
        </p>
      )}

      <p>GUID: {ugcId}</p>
      <p>服务器: {serverDisplayName}</p>
    </div>
  );
}

export default UGCBeyond;
