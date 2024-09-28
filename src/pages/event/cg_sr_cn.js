import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudSRCN() {
    useEffect(() => { 
      window.location.href = 'srcloud://';
      }, []);
    return (
      <div>
        <p>Opening Genshin Impact - Cloud</p>
      </div>
    );
}

export default CloudSRCN;
