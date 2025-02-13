import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { isMobile } from 'react-device-detect'

function SRvn() {
    useEffect(() => { 
        if (isMobile) {
          // Redirect to mobile page
          window.location.href = 'honkaistarrailvn://';
        } else {
          // Redirect to desktop page
          window.location.href = 'hyp-global://launchgame?gamebiz=hkrpg_global';
        }
      }, []);
    return (
      <div>
        <p>{isMobile ? "Đang mở Honkai: Star Rail - 3T Online" : "Đang mở HoYoPlay"}</p>

        <p style={{ display: 'inline', marginRight: '1px' }}>Nếu trò chơi không mở hoặc hiện lên ghi lỗi không xác đình, thì chắc là bạn không có trò chơi đó. Vui lòng tải trò chơi </p>
          {isMobile ? (
          <a href='https://hoyo.link/9OieFBAL'>tại đây</a>
          ) : (
          <a href='https://sg-public-api.hoyoverse.com/event/download_porter/trace/hyp_global/hyphoyoverse/default'>tại đây</a>
          )}
      </div>
    );
}

export default SRvn;
