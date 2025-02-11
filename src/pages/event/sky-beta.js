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
        <p>{isMobile ? "Opening [BETA] Sky: Children of the Light..." : "Opening [BETA] Sky: Children of the Light in Steam..."}</p>
        <p>If this didn't (ask you to) open Sky Beta or you encounter an error prompting link is invalid, you may not have the game installed. As such, please join the official <a href='https://discord.gg/thatskygame'>Discord Server</a> to get the Beta Testing invitation.</p>
      </div>
    );
}

export default SkyBeta;
