import { useEffect } from "react"; // eslint-disable-line no-unused-vars

function HoYoPlay() {
  const queryParams = new URLSearchParams(window.location.search);
  const region = queryParams.get("region");

  const links = {
    global: "https://sg-public-api.hoyoverse.com/event/download_porter/trace/hyp_global/hyphoyoverse/default",
    cn: "https://mhyurl.cn/Ztkut6sBd"
  };

  // determine if the region query param is one of our known links
  const isValid = region && links[region];

  useEffect(() => {
    if (isValid) {
      window.location.href = links[region];
    }
  }, [isValid, region]);

  return (
    <div>
      {!isValid && <p>Invalid Region</p>}
    </div>
  );
}

export default HoYoPlay;
