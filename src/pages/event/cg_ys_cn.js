import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudYSCN() {
    useEffect(() => { 
      window.location.href = 'yscloud://';
      }, []);
    return (
      <div>
        <p>启动云·原神...</p>

        <p>如果应用程序无法打开、抛出无效错误或在 PC 上访问，请<a href='https://ys.mihoyo.com/cloud/m/#/download'>此处</a>下载应用程序</p>
      </div>
    );
}

export default CloudYSCN;
