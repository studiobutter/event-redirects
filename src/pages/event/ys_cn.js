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
        <p>启动原神...</p>
        <p>{isMobile ? "启动原神..." : "启动米哈游启动器..."}</p>
      </div>
    );
}

export default YScn;
