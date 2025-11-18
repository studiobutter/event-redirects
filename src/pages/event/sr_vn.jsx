import { useEffect } from "react"; // eslint-disable-line no-unused-vars
import { isMobile } from "react-device-detect";

import InAppBrowserRedirectVI from "../components/InAppBrowserRedirect_vi";

function SRvn() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/i.test(userAgent);
    const isFacebook = /FBAN|FBAV/i.test(userAgent);
    const isInApp = isInstagram || isFacebook;

    if (!isInApp) {
      if (isMobile) {
        window.location.href = "honkaistarrailvn://";
      } else {
        window.location.href =
          "hyp-global://launchgame?gamebiz=hkrpg_global&openGame=true";
      }
    }
  }, []);

  return (
    <div>
      <InAppBrowserRedirectVI />
      <p>
        {isMobile
          ? "Đang mở Honkai: Star Rail - 3T Online"
          : "Đang mở HoYoPlay"}
      </p>

      <p style={{ display: "inline", marginRight: "1px" }}>
        Nếu trò chơi không mở hoặc hiện lên ghi lỗi không xác đình, thì chắc là
        bạn không có trò chơi đó. Vui lòng tải trò chơi{" "}
      </p>
      {isMobile ? (
        <a href="https://hoyo.link/9OieFBAL">tại đây</a>
      ) : (
        <a href="https://sg-public-api.hoyoverse.com/event/download_porter/trace/hyp_global/hyphoyoverse/default">
          tại đây
        </a>
      )}
    </div>
  );
}

export default SRvn;
