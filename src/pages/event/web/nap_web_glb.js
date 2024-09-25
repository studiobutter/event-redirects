import React, { useEffect } from 'react';

function NapWebGlobal() {
  useEffect(() => {
    const mobileUrl = 'hoyolab://openURL?url=https%3A%2F%2Fhoyo.link%2F6ekkFEAL';
    const MainUrl = 'https://hoyo.link/6ekkFEAL';

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
