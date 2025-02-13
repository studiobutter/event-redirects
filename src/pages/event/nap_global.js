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

        <p style={{ display: 'inline', marginRight: '1px' }}>If the game fails to open or throws an invalid error, then you might not have the game. Please download the game </p>
        {isMobile ? (
          <a href='https://hoyo.link/0y5jFBAL'>here</a>
           ) : (
           <a href='https://sg-public-api.hoyoverse.com/event/download_porter/trace/hyp_global/hyphoyoverse/default'>here</a>
           )}
      </div>
    );
}

export default NAPglobal;
