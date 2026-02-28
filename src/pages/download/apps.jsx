import { useEffect } from "react"; // eslint-disable-line no-unused-vars

function Apps() {
  const queryParams = new URLSearchParams(window.location.search);
  const apps = queryParams.get("apps");

  const links = {
    mihoyobbs: "https://download-bbs.miyoushe.com/app/mihoyobbs_2.102.1_miyousheluodi.apk",
    n0va_android: "https://n0va-static.mihoyo.com/app/dp-android/5fb3a4be22442c475fb6745e/N0vaDesktop-app-d97ae33f-891796-publish-release-v2.2.1.73-20250430-184836_mihoyo.apk",
    n0va_pc: "https://n0va-static.mihoyo.com/app/dp/5f17af398d20e6ddc9767e5a/20250411150105/N0vaDesktop_2.2.1.4_mihoyo.exe",
    bilibili_android: "https://dl.hdslb.com/mobile/latest/android64/iBiliPlayer-bili.apk",
    bilibili_pc: "https://dl.hdslb.com/mobile/fixed/bili_win/bili_win-install.exe",
    bilibili_mac: "https://dl.hdslb.com/mobile/fixed/pc_electron_mac/bili_mac.dmg"
  };

  // determine if the region query param is one of our known links
  const isValid = apps && links[apps];

  useEffect(() => {
    if (isValid) {
      window.location.href = links[apps];
    }
  }, [isValid, apps]);

  return (
    <div>
      {!isValid && <p>Invalid App</p>}
    </div>
  );
}

export default Apps;
