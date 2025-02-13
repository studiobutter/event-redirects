import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function YSvn() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'genshinvn://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-global://launchgame?gamebiz=hk4e_global';
        }
      }, []);
    return (
      <div>
        <p>{isMobile ? "Đang mở Genshin Impact - Funtap" : "Đang mở HoYoPlay"}</p>

        <p style={{ display: 'inline', marginRight: '1px' }}>Nếu trò chơi không mở hoặc hiện lên ghi lỗi không xác đình, thì chắc là bạn không có trò chơi đó. Vui lòng tải trò chơi </p>
          {isMobile ? (
          <a href='https://hoyo.link/6uHgFEAL'>tại đây</a>
          ) : (
          <a href='https://sg-public-api.hoyoverse.com/event/download_porter/trace/hyp_global/hyphoyoverse/default'>tại đây</a>
          )}
      </div>
    );
}

export default YSvn;
