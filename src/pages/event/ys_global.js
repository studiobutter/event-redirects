import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function YSglobal() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'genshin://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-global://launchgame?gamebiz=hk4e_global';
        }
      }, []);
    return (
      <div>
        <p>{isMobile ? "Opening Genshin Impact" : "Opening HoYoPlay"}</p>
      </div>
    );
}

export default YSglobal;
