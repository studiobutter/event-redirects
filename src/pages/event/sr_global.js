import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function SRglobal() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'honkaistarrail://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-global://launchgame?gamebiz=hkrpg_global';
        }
      }, []);
    return (
      <div>
        <p>Opening Honkai: Star Rail...</p>
      </div>
    );
}

export default SRglobal;
