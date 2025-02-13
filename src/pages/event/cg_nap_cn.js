import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudNAPCN() {
    useEffect(() => { 
      window.location.href = 'cloudnap://';
      }, []);
    return (
      <div>
        <p>启动云·绝区零...</p>

        <p>如果应用程序无法打开或出现无效错误，请<a href='https://zzz.mihoyo.com/cloud-feat/m/'>此处</a>下载应用程序</p>
      </div>
    );
}

export default CloudNAPCN;
