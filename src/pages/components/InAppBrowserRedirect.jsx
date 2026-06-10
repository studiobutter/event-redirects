// src/components/InAppBrowserRedirect.js
import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

// Language configurations
const languageConfigs = {
  en: {
    title: "Open in Your Browser",
    h1: "Cannot Launch",
    p1: "Cannot open this page in this app, please open the page in your browser.",
    button: "Copy Link",
    p2: "Paste the link into your browser's address bar.",
    p3: "Or press the <strong>...</strong> button in your app and choose open in (external) browser.",
    alert: "Link copied to clipboard!"
  },
  zh: {
    title: "在浏览器中打开",
    h1: "无法启动",
    p1: "无法在此应用中打开此页面，请在浏览器中打开该页面。",
    button: "复制链接",
    p2: "将链接粘贴到浏览器的地址栏中。",
    alert: "链接已复制到剪贴板！"
  },
  vi: {
    title: "Mở trong trình duyệt",
    h1: "Không thể mở",
    p1: "Ứng dụng không thể mở, Vui lòng mở ứng dụng này trong trình duyệt của bạn.",
    button: "Sao chép Link",
    p2: "Dán đường link này vào thanh địa chỉ.",
    alert: "Đã sao chép đường link!"
  }
};

const InAppBrowserRedirect = ({ language = 'en' }) => {
  const [fallbackVisible, setFallbackVisible] = useState(false);
  const currentUrl = window.location.href;
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Get language config, default to English if not found
  const langConfig = languageConfigs[language] || languageConfigs.en;

  // Detect if the user agent is one of the miHoYo in-app browsers.
  const isMiHoYo = /miHoYoBBS/i.test(userAgent) || /miHoYoBBSOversea/i.test(userAgent);
  const isInstagramInApp = /Instagram/i.test(userAgent);
  // Added explicit Twitter detection to cover UAs like:
  // "Twitter for iPhone/11.34" and similar variants.
  const isTwitterInApp = /Twitter|Twitter for iPhone|TwitterAndroid/i.test(userAgent);
  // Treat Instagram or Twitter similarly for fallback on iOS.
  const isInstagramOrTwitter = isInstagramInApp || isTwitterInApp;
  const isIOS = /iPad|iPhone|iPod/i.test(userAgent);
  const isAndroid = /Android/i.test(userAgent);
  // Updated common in-app regex to explicitly include Twitter variants.
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
      if (isMiHoYo || (isIOS && isInstagramOrTwitter)) {
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
            <title>${langConfig.title}</title>
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
              <h1>${langConfig.h1}</h1>
              <p>${langConfig.p1}</p>
              <button class="btn" id="copyBtn">${langConfig.button}</button>
              <p>${langConfig.p2}</p>
              ${langConfig.p3 ? `<p>${langConfig.p3}</p>` : ''}
            </div>
            <script>
              document.getElementById('copyBtn').addEventListener('click', function() {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                  navigator.clipboard.writeText(window.location.href).then(function() {
                    alert('${langConfig.alert}');
                  }).catch(function() {
                    fallbackCopy(window.location.href);
                  });
                } else {
                  fallbackCopy(window.location.href);
                }
              });
              function fallbackCopy(text) {
                var textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.top = '0';
                textarea.style.left = '0';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                try {
                  document.execCommand('copy');
                  alert('${langConfig.alert}');
                } catch (err) {
                  alert('Failed to copy link');
                }
                document.body.removeChild(textarea);
              }
            </script>
          </body>
        </html>
      `;
      document.open();
      document.write(fallbackHTML);
      document.close();
    }
  }, [fallbackVisible, langConfig]);

  // Render nothing if no fallback is needed.
  return null;
};

// Pre-configured components for each language (for backward compatibility)
export const InAppBrowserRedirectZH = () => <InAppBrowserRedirect language="zh" />;
export const InAppBrowserRedirectVI = () => <InAppBrowserRedirect language="vi" />;

export default InAppBrowserRedirect;
