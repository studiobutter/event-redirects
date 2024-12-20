import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function SRvn() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'honkaistarrailvn://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-global://launchgame?gamebiz=hkrpg_global';
        }
      }, []);
    return (
      <div>
        <p>Đang mở Honkai: Star Rail - 3T Online...</p>
      </div>
    );
}

export default SRvn;
