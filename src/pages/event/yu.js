import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function Yu() {
    useEffect(() => { 
      window.location.href = 'sky://';
      }, []);
    return (
      <div>
        <p>Opening Sky: Children of the Light...</p>
      </div>
    );
}

export default Yu;
