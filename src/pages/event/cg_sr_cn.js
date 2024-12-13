import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudSRCN() {
    useEffect(() => { 
      window.location.href = 'srcloud://';
      }, []);
    return (
      <div>
        <p>云·星穹铁道开幕...</p>
      </div>
    );
}

export default CloudSRCN;
