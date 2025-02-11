import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function NAPglobal() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'zenlessglobal://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-global://launchgame?gamebiz=nap_global';
        }
      }, []);
    return (
      <div>
        <p>{isMobile ? "Opening Zenless Zone Zero" : "Opening HoYoPlay"}</p>
      </div>
    );
}

export default NAPglobal;
