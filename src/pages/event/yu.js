import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function Sky() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'sky-dev://';
        } else {
          // Redirect to desktop page
          window.location.href = 'fevergames://mygame/?gameId=63';
        }
      }, []);
    return (
      <div>
        <p>启动光·遇...</p>
        <p>如果应用程序无法打开或出现无效错误，请<a href='https://sky.163.com'>此处</a>下载应用程序</p>
      </div>
    );
}

export default Sky;
