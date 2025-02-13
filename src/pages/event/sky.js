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
        <p>{isMobile ? "Opening Sky: Children of the Light..." : "Opening Sky: Children of the Light in Steam..."}</p>

        <p>If the game fails to open or throws an invalid error, then you might not have the game. Please download the game <a href='https://www.thatskygame.com/'>here</a></p>
      </div>
    );
}

export default Sky;
