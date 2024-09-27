import React, { useEffect } from 'react';

function Yuanshen4() {
  useEffect(() => {
    const mobileUrl = 'mihoyobbs://openURL?url=https%3A%2F%2Fact.mihoyo.com%2Fys%2Fevent%2F20240927gift-delivery-xmyq9b%2Findex.html%3Fgame_biz%3Dhk4e_cn%26mhy_presentation_style%3Dfullscreen%26mhy_auth_required%3Dtrue%26mhy_landscape%3Dtrue%26mhy_hide_status_bar%3Dtrue';
    const MainUrl = 'https://act.mihoyo.com/ys/event/20240927gift-delivery-xmyq9b/index.html?game_biz=hk4e_cn&mhy_presentation_style=fullscreen&mhy_auth_required=true&mhy_landscape=true&mhy_hide_status_bar=true';

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
      <p>Starting Web Event...</p>
      <p>If Hyperion (miHoYo BBS) isn't installed on your phone, <a href="https://act.mihoyo.com/ys/event/20240927gift-delivery-xmyq9b/index.html?game_biz=hk4e_cn&mhy_presentation_style=fullscreen&mhy_auth_required=true&mhy_landscape=true&mhy_hide_status_bar=true">Click here.</a></p>
      <p>This link opens in HoYoLAB which if your HoYoverse account already logged in. No need to login again. Otherwise Login is required.</p>
      <p>User on PC should be automatically be redirected. Login is required</p>
    </div>
  );
}

export default Yuanshen4;
