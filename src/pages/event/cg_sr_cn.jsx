import { useEffect } from 'react';
import InAppBrowserRedirectZH from '../components/InAppBrowserRedirect_zh-Hans';

const iOS_Url = 'https://apps.apple.com/cn/app/id6475038985';
const Android_Url = 'https://act-api-takumi.mihoyo.com/event/download_porter/link/clgm_hkrpg-cn/official/android_default';
const Desktop_Url = 'https://sr.mihoyo.com/cloud';

function CloudSRCN() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isInstagram = /Instagram/i.test(userAgent);
    const isFacebook = /FBAN|FBAV/i.test(userAgent);
    const isInApp = isInstagram || isFacebook;
    const isMobile = /Mobi|Android/i.test(userAgent);

    if (!isInApp) {
      if (isMobile) {
        window.location.href = 'srcloud://';
      } else {
        window.location.href = Desktop_Url;
      }
    }
  }, []);

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const downloadUrl = isIOS ? iOS_Url : Android_Url;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div>
      <InAppBrowserRedirectZH />
      {isMobile ? (
        <>
          <p>启动云·星穹铁道...</p>
          <p>
            如果游戏无法打开或出现无效错误，则您可能没有该游戏。
            请在<a href={downloadUrl}>此处</a>下载游戏。
          </p>
        </>
      ) : (
        <p>重定向中...</p>
      )}
    </div>
  );
}

export default CloudSRCN;
