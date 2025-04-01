import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

const Url = 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=1_dtZGeKhSwWiTN8';

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
        <iframe width="560" height="315" src={Url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      )}
    </div>
  );
}

export default April;
