import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function Sky() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'sky://';
        } else {
          // Redirect to desktop page
          window.location.href = 'steam://rungameid/2325290';
        }
      }, []);
    return (
      <div>
        <p>Opening Sky: Children of the Light...</p>

        <p>If the application fails to open or throws an invalid error, please download the application <a href='https://www.thatskygame.com/'>here</a></p>
      </div>
    );
}

export default Sky;
