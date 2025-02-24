import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import InAppBrowserRedirectZH from './components/InAppBrowserRedirect_zh-Hans';

function CloudNAPCN() {
    useEffect(() => { 
      window.location.href = 'cloudnap://';
      }, []);
    return (
      <div>
        <InAppBrowserRedirectZH />
        <p>启动云·绝区零...</p>

        <p>如果游戏无法打开或出现无效错误，则您可能没有该游戏。请在<a href='https://zzz.mihoyo.com/cloud-feat/m/'>此处</a>下载游戏.</p>
      </div>
    );
}

export default CloudNAPCN;
