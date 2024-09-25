import React, { useEffect } from 'react';

function NapWebGlobal() {
  useEffect(() => {
    const mobileUrl = 'hoyolab://openURL?urlhttps%3A%2F%2Fact.hoyoverse.com%2Fzzz%2Fevent%2Fe20240925reunion-qxioxj%2Findex.html%3Fgame_biz%3Dnap_global%26hyl_auth_required%3Dtrue%26hyl_hide_status_bar%3Dtrue%26hyl_landscape%3Dtrue%26hyl_presentation_style%3Dfullscreen%26s_c%3DGJKCD9LG2K%26utm_campaign%3Dweb%26utm_medium%3Dlink%26utm_source%3Dshare';
    const MainUrl = 'https://act.hoyoverse.com/zzz/event/e20240925reunion-qxioxj/index.html?game_biz=nap_global&hyl_auth_required=true&hyl_hide_status_bar=true&hyl_landscape=true&hyl_presentation_style=fullscreen&s_c=GJKCD9LG2K&utm_campaign=web&utm_medium=link&utm_source=share';

    const redirect = (url, fallbackUrl, delay) => {
        try {
          window.location.href = url;
          setTimeout(() => {
            window.location.href = fallbackUrl;
          }, delay);
        } catch (error) {
          console.error('Error:', error);
          setTimeout(() => {
            window.location.href = fallbackUrl;
          }, delay);
        }
      };
  
      redirect(mobileUrl, MainUrl, 3000);
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

export default NapWebGlobal;
