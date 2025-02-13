import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudSRCN() {
    useEffect(() => { 
      window.location.href = 'srcloud://';
      }, []);
    return (
      <div>
        <p>启动云·星穹铁道...</p>

        <p>如果应用程序无法打开或出现无效错误，请<a href='https://sr.mihoyo.com/cloud/m/#/download'>此处</a>下载应用程序</p>
      </div>
    );
}

export default CloudSRCN;
