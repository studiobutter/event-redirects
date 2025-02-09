import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudNAPCN() {
    useEffect(() => { 
      window.location.href = 'cloudnap://';
      }, []);
    return (
      <div>
        <p>启动云·绝区零...</p>
      </div>
    );
}

export default CloudSRCN;
