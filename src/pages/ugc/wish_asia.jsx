import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

import InAppBrowserRedirect from '../components/InAppBrowserRedirect';

function MWWishSim() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'genshin://?deferred_deeplink=event_type%3Dugc_level_info%26source%3Dbbs%26activity_id%3D24895436376';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-global://launchgame?gamebiz=hk4e_global&openGame=true&deferredDeeplink=event_type%3Dugc_level_info%26activity_id%3D24895436376%26source%3Dbbs&uapc_md5=c1373fe940ff7c2d';
        }
      }, []);
    return (
      <div>
        <InAppBrowserRedirect />
        <p>{isMobile ? "Opening Genshin Impact..." : "Opening HoYoPlay..."}</p>

        <p style={{ display: 'inline', marginRight: '1px' }}>If the game fails to open or throws an invalid error, then you might not have the game. Please download the game </p>
        {isMobile ? (
          <a href='https://hoyo.link/euHgFDAL'>here</a>
           ) : (
           <a href='https://sg-public-api.hoyoverse.com/event/download_porter/trace/hyp_global/hyphoyoverse/default'>here</a>
           )}
        <p>Wonderland Level ID: 24895436376</p>
      </div>
    );
}

export default MWWishSim;
