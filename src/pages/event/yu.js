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
        <p>如果游戏无法打开或出现无效错误，则您可能没有该游戏。请从<a href='https://sky.163.com/'>此处</a>下载游戏</p>
      </div>
    );
}

export default Sky;
