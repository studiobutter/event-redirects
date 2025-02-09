import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudSRCN() {
    useEffect(() => { 
      window.location.href = 'srcloud://';
      }, []);
    return (
      <div>
        <p>启动云·星穹铁道...</p>
      </div>
    );
}

export default CloudSRCN;
