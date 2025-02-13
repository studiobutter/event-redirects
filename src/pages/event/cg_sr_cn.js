import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars

function CloudSRCN() {
    useEffect(() => { 
      window.location.href = 'srcloud://';
      }, []);
    return (
      <div>
        <p>启动云·星穹铁道...</p>

        <p>如果游戏无法打开或出现无效错误，则您可能没有该游戏。请在<a href='https://sr.mihoyo.com/cloud/m/#/download'>此处</a>下载游戏.</p>
      </div>
    );
}

export default CloudSRCN;
