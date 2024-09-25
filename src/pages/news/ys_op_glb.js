import React, { useEffect } from 'react';

function HYLYSOP() {
  useEffect(() => {
    const mobileUrl = 'hoyolab://openURL?url=https%3A%2F%2Fhoyo.link%2F50ikFCAL';
    const MainUrl = 'https://hoyo.link/50ikFCAL';

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

export default HYLYSOP;
