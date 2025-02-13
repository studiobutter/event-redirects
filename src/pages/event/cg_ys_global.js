import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudYSGlobal() {
    useEffect(() => { 
      window.location.href = 'cloudgenshin://';
      }, []);
    return (
      <div>
        <p>Opening Genshin Impact - Cloud</p>

        <p>If the application fails to open or throws an invalid error, please download the application <a href='https://cloudgenshin.hoyoverse.com/'>here</a></p>
      </div>
    );
}

export default CloudYSGlobal;
