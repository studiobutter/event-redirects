import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function SRcn() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'starrailmihoyo://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-cn://launchgame?gamebiz=hkrpg_cn';
        }
      }, []);
    return (
      <div>
        <p>开幕崩坏：星穹铁道...</p>
      </div>
    );
}

export default SRcn;
