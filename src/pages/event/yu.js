import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

import InAppBrowserRedirectZH from './components/InAppBrowserRedirect_zh-Hans';

const Url = 'https://loadingbaycn.webapp.163.com/app/v1/download_client/windows/mkt-ma75-official/url'
const Android_Url = 'https://adl.netease.com/d/g/sky/c/gw?type=android'
const iOS_Url = 'https://adl.netease.com/d/g/sky/c/gw?type=ios'

function Yu() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'sky-dev://';
        } else {
          // Redirect to desktop page
          window.location.href = 'fevergames://mygame/?gameId=63';
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
        <InAppBrowserRedirectZH />
        <p>启动光·遇...</p>
        <p>如果游戏无法打开或出现无效错误，则您可能没有该游戏。请从<a href={downloadUrl}>此处</a>下载游戏</p>
      </div>
    );
}

export default Yu;
