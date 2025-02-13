import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudYSGlobal() {
    useEffect(() => { 
      window.location.href = 'cloudgenshin://';
      }, []);
    return (
      <div>
        <p>Opening Genshin Impact - Cloud</p>

        <p>If the game fails to open, throws an invalid error or you trying to open the game on PC, please download the game <a href='https://cloudgenshin.hoyoverse.com/'>here</a> or Open "Genshin Impact - Cloud" on PC</p>
      </div>
    );
}

export default CloudYSGlobal;
