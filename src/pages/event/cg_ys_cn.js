import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudYSCN() {
    useEffect(() => { 
      window.location.href = 'yscloud://';
      }, []);
    return (
      <div>
        <p>启动云·原神...</p>
      </div>
    );
}

export default CloudYSCN;
