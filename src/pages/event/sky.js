import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

import InAppBrowserRedirect from './components/InAppBrowserRedirect';

function Sky() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
            setTimeout(() => {
            window.location.href = 'sky://';
            }, 5000);
        } else {
          // Redirect to desktop page
          setTimeout(() => {
            window.location.href = 'steam://rungameid/232529';
            }, 5000);
        }
      }, []);
    const [countdown, setCountdown] = React.useState(5);

    useEffect(() => {
      const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    return (
      <div>
      <InAppBrowserRedirect />
      <p>{isMobile ? "Opening Sky: Children of the Light... " : "Opening Sky: Children of the Light in Steam..."}</p>
      <p>Opening in {countdown} seconds...</p>
      <p>If the game fails to open or throws an invalid error, then you might not have the game. Please download the game <a href='https://www.thatskygame.com/'>here</a></p>
      </div>
    );
}

export default Sky;
