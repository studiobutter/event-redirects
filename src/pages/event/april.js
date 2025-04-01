import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

const Url = 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=1_dtZGeKhSwWiTN8&autoplay=1&mute=0&showinfo=0';

function April() {

  const [showIframe, setShowIframe] = React.useState(false);
  const [showText, setShowText] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIframe(true);
      setShowText(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showText && <p>Claiming your prize...</p>}
      {showIframe && (
        <iframe
          width="560"
          height="315"
          src={Url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}

export default April;
