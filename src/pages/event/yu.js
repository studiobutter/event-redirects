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
      </div>
    );
}

export default Sky;
