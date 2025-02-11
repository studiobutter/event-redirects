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
      </div>
    );
}

export default NAPcn;
