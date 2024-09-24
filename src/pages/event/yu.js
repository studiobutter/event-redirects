import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function Yu() {
    useEffect(() => { 
      window.location.href = 'sky-dev://';
      }, []);
    return (
      <div>
        <p>Opening Sky: Children of the Light...</p>
      </div>
    );
}

// Why Dev?????????

export default Yu;
