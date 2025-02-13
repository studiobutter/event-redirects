import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudYSCN() {
    useEffect(() => { 
      window.location.href = 'yscloud://';
      }, []);
    return (
      <div>
        <p>启动云·原神...</p>

        <p>如果游戏无法打开、出现无效错误或您尝试在 PC 上打开此游戏，则可能是您没有该游戏。请<a href='https://ys.mihoyo.com/cloud/m/#/download'>此处</a>下载游戏或在 PC 上打开云·原神</p>
      </div>
    );
}

export default CloudYSCN;
