import React, { useEffect } from 'react';

function YuanshenSL() {
  useEffect(() => {
    const mobileUrl = 'mihoyobbs://openURL?url=https%3A%2F%2Fact.mihoyo.com%2Fys%2Fevent%2Fe20240928review-k6pzqq%2Findex.html%3Fgame_biz%3Dhk4e_cn%26mhy_presentation_style%3Dfullscreen%26mhy_auth_required%3Dtrue%26mhy_landscape%3Dtrue%26mhy_hide_status_bar%3Dtrue%26utm_source%3Dmkt%26utm_medium%3Dweb%26utm_campaign%3Dbili';
    const MainUrl = 'https://act.mihoyo.com/ys/event/e20240928review-k6pzqq/index.html?game_biz=hk4e_cn&mhy_presentation_style=fullscreen&mhy_auth_required=true&mhy_landscape=true&mhy_hide_status_bar=true&utm_source=mkt&utm_medium=web&utm_campaign=bili';

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
      <p>正在启动网络事件...</p>
      <p>I如果你的手机没有安装米游社，<a href="https://act.mihoyo.com/ys/event/e20240928review-k6pzqq/index.html?game_biz=hk4e_cn&mhy_presentation_style=fullscreen&mhy_auth_required=true&mhy_landscape=true&mhy_hide_status_bar=true&utm_source=mkt&utm_medium=web&utm_campaign=bili">请点击这里.</a></p>
      <p>此链接在米游社打开，前提是你的miHoYo账号已经登录。无需再次登录。否则需要登录。</p>
      <p>PC 上的用户应自动重定向。需要登录。</p>
    </div>
  );
}

export default YuanshenSL;
