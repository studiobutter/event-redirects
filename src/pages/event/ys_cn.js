import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

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
        <p>{isMobile ? "启动原神..." : "启动米哈游启动器..."}</p>

        <p>{isMobile ? "如果应用程序无法打开或出现无效错误，请<a href='https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/android_default'>此处</a>下载应用程序" : "如果应用程序无法打开或出现无效错误，请<a href='https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/pc_default'>此处</a>下载应用程序"}</p>
      </div>
    );
}

export default YScn;
