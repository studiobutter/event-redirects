// src/components/InAppBrowserRedirect.js
import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

const InAppBrowserRedirectVI = () => {
  const [fallbackVisible, setFallbackVisible] = useState(false);
  const currentUrl = window.location.href;
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Detect if the user agent is one of the miHoYo in-app browsers.
  const isMiHoYo = /miHoYoBBS/i.test(userAgent) || /miHoYoBBSOversea/i.test(userAgent);
  const isTwitterInApp = /Twitter|Twitter for iPhone|TwitterAndroid/i.test(userAgent);
  const isInstagramInApp = /Instagram/i.test(userAgent);
  // Treat Instagram or Twitter similarly for fallback on iOS.
  const isInstagramOrTwitter = isInstagramInApp || isTwitterInApp;
  const isIOS = /iPad|iPhone|iPod/.test(userAgent);
  const isAndroid = /Android/.test(userAgent);
  const isCommonInApp = /FBAN|FBAV|Twitter|Twitter for iPhone|TwitterAndroid|Snapchat|TikTok|Line|MicroMessenger|MQQBrowser|Weibo|ByteDance|NewsArticle|BiliApp|Bili|XHS|NetEaseDashen|Zalo/i.test(userAgent);
  // Consider Twitter as part of in-app browsers.
  const isInApp = isMiHoYo || isCommonInApp || isInstagramOrTwitter;

  useEffect(() => {
    if (isMobile && isInApp) {
      if (isMiHoYo || (isIOS && isInstagramOrTwitter)) {
        setFallbackVisible(true);
      } else if (isAndroid) {
        openInSystemBrowser();
      }
    }
  }, []);

  useEffect(() => {
    // Only act if we are on mobile and in an in-app browser.
    if (isMobile && isInApp) {
      if (isMiHoYo) {
        // For sandboxed miHoYo browsers, show fallback UI.
        setFallbackVisible(true);
      } else if (isCommonInApp) {
        // For common in-app browsers, attempt auto-redirection.
        openInSystemBrowser();
      }
    }
    // If not in an in-app browser, do nothing (system browser).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openInSystemBrowser = () => {
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);

    if (isIOS) {
      // Force Safari using the x-safari-https: scheme.
      window.location.href = `x-safari-${currentUrl}`;
    } else if (isAndroid) {
      // Check if the device appears to be using Chrome.
      const isChrome = /Chrome/.test(userAgent);
      if (isChrome) {
        // Use the Android intent scheme for Chrome.
        const chromeIntent = `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end;`;
        window.location.href = chromeIntent;
        // Set a timeout to show fallback UI if the intent is blocked.
        setTimeout(() => {
          if (!document.hidden) {
            setFallbackVisible(true);
          }
        }, 1500);
      } else {
        // If not Chrome, do a simple redirect.
        window.location.href = currentUrl;
      }
    }
  };

  // When fallback is needed, overwrite the document with fallback UI.
  useEffect(() => {
    if (fallbackVisible) {
      const fallbackHTML = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Mở trong trình duyệt</title>
            <style>
              body {
                font-family: sans-serif;
                background: #fff3cd;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
              }
              .container {
                text-align: center;
                padding: 20px;
                border: 1px solid #ffeeba;
                border-radius: 8px;
                background: white;
              }
              .btn {
                padding: 10px 20px;
                background: #007bff;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Không thể mở</h1>
              <p>Ứng dụng không thể mở, Vui lòng mở ứng dụng này trong trình duyệt của bạn.</p>
              <button class="btn" id="copyBtn">Sao chép Link</button>
              <p>Dán đường link này vào thanh địa chỉ.</p>
            </div>
            <script>
              document.getElementById('copyBtn').addEventListener('click', function() {
                navigator.clipboard.writeText(window.location.href).then(function() {
                  alert('Đã sao chép đường link!');
                });
              });
            </script>
          </body>
        </html>
      `;
      document.open();
      document.write(fallbackHTML);
      document.close();
    }
  }, [fallbackVisible]);

  // Render nothing if no fallback is needed.
  return null;
};

export default InAppBrowserRedirectVI;
