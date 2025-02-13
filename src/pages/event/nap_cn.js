import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function NAPcn() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'zenless://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-cn://launchgame?gamebiz=nap_cn';
        }
      }, []);
    return (
      <div>
        <p>{isMobile ? "启动绝区零..." : "启动米哈游启动器..."}</p>

        <p style={{ display: 'inline', marginRight: '1px' }} >如果游戏无法打开或出现无效错误，则您可能没有该游戏。请在</p>
        
        {isMobile ? 
        (<a href='https://api-takumi.mihoyo.com/event/download_porter/link/nap_cn/official/android_ldy'>此处</a>
        ) : (
        <a href='https://api-takumi.mihoyo.com/event/download_porter/link/nap_cn/official/pc_ldy'>此处</a>)}
        <p style={{ display: 'inline', marginRight: '1px' }}>下载游戏</p>
      </div>
    );
}

export default NAPcn;
