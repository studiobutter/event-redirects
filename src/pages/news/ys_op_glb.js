import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

function HYLYSOP() {
    useEffect(() => {
      const mobileUrl = 'hoyolab://openURL?url=https%3A%2F%2Fhoyo.link%2F50ikFCAL';
      const Url = 'https://hoyo.link/50ikFCAL';
  
      try {
        if (isMobile) {
          // Attempt to redirect to the mobile URL scheme
          window.location.href = mobileUrl;
        } else {
          // Attempt to redirect to the desktop URL scheme
          window.location.href = Url;
        }
      } catch (error) {
        console.error('Error:', error);
        if (error.message.includes('scheme does not have a registered handler')) {
          // If the URL scheme doesn't work, redirect to the fallback URL
          window.location.href = Url;
        }
      }
    }, []);
  
    return (
      <div>
        <p>Redirecting...</p>
      </div>
    );
  }

export default HYLYSOP;
