/**
 * CONSTANTS: Update these once to update everywhere
 */
const HOYO_PLAY_GLOBAL = "https://sg-public-api.hoyoverse.com/event/download_porter/trace/hyp_global/hyphoyoverse/default";
const HOYO_PLAY_CN = "https://mhyurl.cn/Ztkut6sBd";
const IN_APP_REDIRECT = "InAppBrowserRedirect";

const redirectConfig = {
  // =========================
  // GENSHIN IMPACT
  // =========================
  ys: {
    global: {
      uris: { mobile: "yuanshen://", pc: "hyp-global://launchgame?gamebiz=hk4e_global&openGame=true" },
      downloads: { android: "https://hoyo.link/dvHgFCAL", ios: "https://hoyo.link/dvHgFCAL", pc: HOYO_PLAY_GLOBAL },
      ui: { 
        lang: "en", 
        mobile: "Opening Genshin Impact...", pc: "Opening HoYoPlay...", 
        error: "If the game fails to open, please download it " 
      }
    },
    cn: {
      uris: { mobile: "yuanshen://", pc: "hyp-cn://launchgame?gamebiz=hk4e_cn&openGame=true" },
      downloads: { android: "https://mhyurl.cn/ys_cn_android", pc: HOYO_PLAY_CN },
      ui: { lang: "zh", mobile: "启动原神...", pc: "启动米哈游启动器...", error: "如果游戏无法打开，请前往官网下载 " }
    },
    vn: {
      uris: { mobile: "genshinvn://", pc: "hyp-global://launchgame?gamebiz=hk4e_global&openGame=true" },
      downloads: { android: "https://hoyo.link/6uHgFEAL", ios: "https://hoyo.link/6uHgFEAL", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "vi", mobile: "Đang mở Genshin Impact...", pc: "Đang mở HoYoPlay...", error: "Nếu trò chơi không mở, vui lòng tải tại " }
    }
  },

  // =========================
  // HONKAI IMPACT 3RD
  // =========================
  bh3: {
    // Standardized the 'overseas' servers to fit the same region pattern
    sea: {
      uris: { mobile: "bh3overseas://", pc: "hyp-global://launchgame?gamebiz=bh3_global&openGame=true" },
      downloads: { mobile: "http://hoyo.link/55ra3U3qx", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "en", mobile: "Opening HI3 - SEA...", pc: "Opening HoYoPlay...", error: "Download the game " }
    },
    cn: {
      uris: { mobile: "bh3game://", pc: "hyp-cn://launchgame?gamebiz=bh3_cn&openGame=true" },
      downloads: { android: "https://mhyurl.cn/bh3_cn_android", ios: "https://mhyurl.cn/bh3_cn_ios", pc: HOYO_PLAY_CN },
      ui: { lang: "zh", mobile: "启动崩坏3...", pc: "启动米哈游启动器...", error: "请前往官网下载 " }
    },
    america: {
      uris: { mobile: "bh3global://", pc: "hyp-global://launchgame?gamebiz=bh3_global&openGame=true" },
      downloads: { mobile: "https://hoyo.link/hLh5Eekel", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "en", mobile: "Opening HI3 - Global...", pc: "Opening HoYoPlay...", error: "Download the game " }
    }
  },

  // =========================
  // CLOUD GAMES (Normalized)
  // =========================
  cg_ys: {
    cn: {
      uris: { mobile: "cloudgenshin://", pc: "https://ys.mihoyo.com/cloud" },
      downloads: { android: "https://mhyurl.cn/clgm_ys_cn", pc: "https://ys.mihoyo.com/cloud" },
      ui: { lang: "zh", text: "启动云·原神...", error: "如果无法打开，请访问 " }
    },
    global: {
      uris: { mobile: "cloudgenshin://", pc: "https://hoyo.link/4BDfFBAL" },
      downloads: { mobile: "https://hoyo.link/4BDfFBAL", pc: "https://hoyo.link/4BDfFBAL" },
      ui: { lang: "en", text: "Opening Genshin Impact - Cloud...", error: "Please access via " }
    }
  },

  // =========================
  // SKY: CHILDREN OF THE LIGHT
  // =========================
  sky: {
    global: { // Added 'global' to maintain schema
      uris: { mobile: "sky://", pc: "steam://rungameid/232529;" },
      downloads: { 
        android: "https://play.google.com/store/apps/details?id=com.tgc.sky.android", 
        ios: "https://apps.apple.com/us/app/sky-children-of-the-light/id1462117269",
        steam: "https://store.steampowered.com/app/2325290/"
      },
      ui: { lang: "en", mobile: "Opening Sky...", pc: "Opening Sky on Steam...", error: "Please download at " }
    }
  }
};

export default redirectConfig;