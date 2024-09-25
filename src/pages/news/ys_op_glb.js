import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

function HYLYSOP() {
  useEffect(() => {
    const mobileUrl = 'hoyolab://openURL?url=https%3A%2F%2Fhoyo.link%2F50ikFCAL';
    const Url = 'https://www.example.com/desktop';

    try {
      if (isMobile) {
        // Attempt to redirect to the mobile URL
        window.location.href = mobileUrl;
      } else {
        // Attempt to redirect to the desktop URL
        window.location.href = Url;
      }
    } catch (error) {
      // If the URL scheme doesn't work, redirect to the fallback URL
      window.location.href = Url;
    }
  }, []);

  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}

export default HYLYSOP;
