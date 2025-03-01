import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import InAppBrowserRedirectZH from './components/InAppBrowserRedirect_zh-Hans';

iOS_Url = 'https://apps.apple.com/cn/app/id6475038985'
Android_Url = 'https://act-api-takumi.mihoyo.com/event/download_porter/link/clgm_hkrpg-cn/official/android_default'

function CloudSRCN() {
    useEffect(() => { 
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = 'srcloud://';
      } else {
        window.location.href = 'https://sr.mihoyo.com/cloud';
      }
      }, []);
    return (
      <div>
      <InAppBrowserRedirectZH />
      <p>启动云·星穹铁道...</p>

      <p>如果游戏无法打开或出现无效错误，则您可能没有该游戏。请在<a href={/Mobi|Android/i.test(navigator.userAgent) ? Android_Url : iOS_Url}>此处</a>下载游戏.</p>
      </div>
    );
}

export default CloudSRCN;
