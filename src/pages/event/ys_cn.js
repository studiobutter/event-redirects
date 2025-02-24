import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

import InAppBrowserRedirectZH from './components/InAppBrowserRedirect_zh-Hans';

function YScn() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'yuanshen://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-cn://launchgame?gamebiz=hk4e_cn';
        }
      }, []);
    return (
      <div>
        ,<InAppBrowserRedirectZH />
        <p>{isMobile ? "启动原神..." : "启动米哈游启动器..."}</p>

        <p style={{ display: 'inline', marginRight: '1px' }} >如果游戏无法打开或出现无效错误，则您可能没有该游戏。请在</p>

        {isMobile ? 
        (<a href='https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/android_default'>此处</a>
        ) : (
        <a href='https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/pc_default'>此处</a>)}
        <p style={{ display: 'inline', marginRight: '1px' }}>下载游戏</p>
      </div>
    );
}

export default YScn;
