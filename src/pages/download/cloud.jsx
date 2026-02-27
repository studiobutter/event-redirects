import { useEffect } from "react"; // eslint-disable-line no-unused-vars

function Cloud() {
  const queryParams = new URLSearchParams(window.location.search);
  const game = queryParams.get("game");

  const links = {
    hk4e_cg_glb: "https://sg-public-api.hoyoverse.com/event/download_porter/trace/clgm_global/genshincloud/default",
    hk4e_cg_cn: "https://api-takumi.mihoyo.com/event/download_porter/link/clgm_cn/official/pc_web",
    nap_cg_glb: "https://sg-public-api.hoyoverse.com/event/download_porter/link/clgm_nap-global/official/pc_ldy",
    nap_cg_cn: "https://act-api-takumi.mihoyo.com/event/download_porter/link/clgm_nap-cn/official/pc_cloudgame"
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
      {!isValid && <p>Invalid Cloud Game</p>}
    </div>
  );
}

export default Cloud;
