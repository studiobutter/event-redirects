import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudYSGlobal() {
    useEffect(() => { 
      window.location.href = 'cloudgenshin://';
      }, []);
    return (
      <div>
        <p>Opening Genshin Impact - Cloud</p>
      </div>
    );
}

export default CloudYSGlobal;
