import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function SkyBeta() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'sky-beta://';
        } else {
          // Redirect to desktop page
          window.location.href = 'steam://rungameid/2434520';
        }
      }, []);
    return (
      <div>
        <p>Opening [BETA] Sky: Children of the Light...</p>
      </div>
    );
}

export default SkyBeta;
