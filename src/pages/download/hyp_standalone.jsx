import { useEffect } from "react"; // eslint-disable-line no-unused-vars

function HYPStandalone() {
  const queryParams = new URLSearchParams(window.location.search);
  const game = queryParams.get("game");

  const links = {
    bh3_global_asia: "https://cdn.studiobutter.io.vn/hoyo_dl/bh3_global-asia.exe",
    bh3_global_global: "https://cdn.studiobutter.io.vn/hoyo_dl/bh3_global-glb.exe",
    bh3_global_jp: "https://cdn.studiobutter.io.vn/hoyo_dl/bh3_global-jp.exe",
    bh3_global_kr: "https://cdn.studiobutter.io.vn/hoyo_dl/bh3_global-kr.exe",
    bh3_global_overseas: "https://cdn.studiobutter.io.vn/hoyo_dl/bh3_global-overseas.exe",
  };

  // determine if the region query param is one of our known links
  const isValid = game && links[game];

  useEffect(() => {
    if (isValid) {
      window.location.href = links[game];
    }
  }, [isValid, game]);

  return (
    <div>
      {!isValid && <p>Invalid Game</p>}
    </div>
  );
}

export default HYPStandalone;
