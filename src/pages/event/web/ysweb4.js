import React, { useEffect } from 'react';

function Genshin4th() {
  useEffect(() => {
    const mobileUrl = 'hoyolab://openURL?url=https%3A%2F%2Fhoyo.link%2F6WlkFHAL';
    const MainUrl = 'https://hoyo.link/6WlkFHAL';

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
      <p>If HoYoLAB isn't installed on your phone, <a href="https://hoyo.link/6WlkFHAL">Click here.</a></p>
      <p>This link opens in HoYoLAB which if your HoYoverse account already logged in. No need to login again. Otherwise Login is required.</p>
      <p>User on PC should be automatically be redirected.</p>
    </div>
  );
}

export default Genshin4th;