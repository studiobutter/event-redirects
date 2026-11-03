import { useEffect } from "react"; // eslint-disable-line no-unused-vars

function HYPStandalone() {
  const queryParams = new URLSearchParams(window.location.search);
  const game = queryParams.get("game");

  const links = {
    hk4e_cn_b: "https://pkg.biligame.com/games/umfgRO5gh5_1.12.0.322_14_0_bilibili_prod_202601301041_wCjtOgbg/074433/umfgRO5gh5_1.12.0.322_14_0_bilibili_prod_202601301041_wCjtOgbg.exe",
    hkrpg_cn_b: "https://pkg.biligame.com/games/StarRail_bilibili_0130/641066/StarRail_bilibili_0130.exe",
    nap_cn_b: "https://pkg.biligame.com/games/ZenlessZoneZero_setup_202601300327/642157/ZenlessZoneZero_setup_202601300327.exe",
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
