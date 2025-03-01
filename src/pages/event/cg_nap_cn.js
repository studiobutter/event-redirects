import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import InAppBrowserRedirectZH from './components/InAppBrowserRedirect_zh-Hans';

const iOS_Url = "https://act-api-takumi.mihoyo.com/event/download_porter/link/clgm_nap-cn/official/ios_default"
const Android_Url = "https://act-api-takumi.mihoyo.com/event/download_porter/link/clgm_nap-cn/official/android_cloudgame"

function CloudNAPCN() {
    useEffect(() => { 
      window.location.href = 'cloudnap://';
      }, []);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const downloadUrl = isIOS ? iOS_Url : Android_Url;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    return (
      <div>
      {isMobile ? (
      <>
      <InAppBrowserRedirectZH />
      <p>启动云·绝区零...</p>
      <p>如果游戏无法打开或出现无效错误，则您可能没有该游戏。请在<a href={downloadUrl}>此处</a>下载游戏。</p>
      </>
      ) : (
      <p>不支持在PC上使用</p>
      )}
      </div>
    );
}

export default CloudNAPCN;
