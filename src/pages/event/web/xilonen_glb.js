import React, { useEffect } from 'react';

function XilonenEvent() {
  useEffect(() => {
    const mobileUrl = 'hoyolab://openURL?url=https%3A%2F%2Fact.hoyoverse.com%2Fys%2Fevent%2Fe20241004xilonen-aevsua%2Findex.html%3Fgame_biz%3Dhk4e_global%26hyl_presentation_style%3Dfullscreen%26hyl_auth_required%3Dtrue%26hyl_landscape%3Dtrue%26hyl_hide_status_bar%3Dtrue%26utm_source%3Dhoyolab%26utm_medium%3Dtool%26lang%3Den-us%26bbs_theme%3Ddark%26bbs_theme_device%3D1';
    const MainUrl = 'https://act.hoyoverse.com/ys/event/e20241004xilonen-aevsua/index.html?game_biz=hk4e_global&hyl_presentation_style=fullscreen&hyl_auth_required=true&hyl_landscape=true&hyl_hide_status_bar=true&utm_source=hoyolab&utm_medium=tool&lang=en-us&bbs_theme=dark&bbs_theme_device=1';

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
      <p>If HoYoLAB isn't installed on your phone, <a href="https://act.hoyoverse.com/ys/event/e20241004xilonen-aevsua/index.html?game_biz=hk4e_global&hyl_presentation_style=fullscreen&hyl_auth_required=true&hyl_landscape=true&hyl_hide_status_bar=true&utm_source=hoyolab&utm_medium=tool&lang=en-us&bbs_theme=dark&bbs_theme_device=1">Click here.</a></p>
      <p>This link opens in HoYoLAB which if your HoYoverse account already logged in. No need to login again. Otherwise Login is required.</p>
      <p>User on PC should be automatically be redirected. Login is required.</p>
    </div>
  );
}

export default XilonenEvent;
