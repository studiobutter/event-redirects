import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function YSvn() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'genshinvn://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-global://launchgame?gamebiz=hk4e_global';
        }
      }, []);
    return (
      <div>
        <p>Opening Genshin Impact...</p>
      </div>
    );
}

export default YSvn;
