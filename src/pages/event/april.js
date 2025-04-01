import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

const Url = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0';

function April() {

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
