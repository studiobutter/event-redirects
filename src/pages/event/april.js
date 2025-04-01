import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

const Url = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0';

function April() {
  useEffect(() => { 
    const timeout = setTimeout(() => {
      window.location.href = Url;
    }, 5000); // Redirect after 3 seconds

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);

  return (
    <div>
      <p>Claiming your prize...</p>
      <iframe
        width="0"
        height="0"
        style={{ display: 'none' }}
        src={Url}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default April;
