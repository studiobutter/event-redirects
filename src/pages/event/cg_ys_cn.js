import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudYSCN() {
    useEffect(() => { 
      window.location.href = 'yscloud://';
      }, []);
    return (
      <div>
        <p>云·原神开幕...</p>
      </div>
    );
}

export default CloudYSCN;
