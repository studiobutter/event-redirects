import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function NAPvn() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'zenlessvn://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-global://launchgame?gamebiz=nap_global';
        }
      }, []);
    return (
      <div>
        <p>Opening Zenless Zone Zero...</p>
      </div>
    );
}

export default NAPvn;
