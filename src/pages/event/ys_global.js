import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function YSglobal() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'genshin://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-global://launchgame?gamebiz=hk4e_global';
        }
      }, []);
    return (
      <div>
        <p>{isMobile ? "Opening Genshin Impact" : "Opening HoYoPlay"}</p>

        <p style={{ display: 'inline', marginRight: '1px' }}>If the game fails to open or throws an invalid error, then you might not have the game. Please download the game </p>
        {isMobile ? (
          <a href='https://hoyo.link/euHgFDAL'>here</a>
           ) : (
           <a href='https://sg-public-api.hoyoverse.com/event/download_porter/trace/hyp_global/hyphoyoverse/default'>here</a>
           )}
      </div>
    );
}

export default YSglobal;
