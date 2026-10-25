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
      uris: { mobile: "genshin://", pc: "hyp-global://launchgame?gamebiz=hk4e_global&openGame=true" },
      downloads: { android: "https://hoyo.link/euHgFDAL", ios: "https://hoyo.link/euHgFDAL", pc: HOYO_PLAY_GLOBAL },
      ui: { 
        lang: "en", 
        mobile: "Opening Genshin Impact...", pc: "Opening HoYoPlay...", 
        error: "If the game fails to open, please download it " 
      }
    },
    cn: {
      uris: { mobile: "yuanshen://", pc: "hyp-cn://launchgame?gamebiz=hk4e_cn&openGame=true" },
      downloads: { ios: "https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/android_default", android: "https://ys-api.mihoyo.com/event/download_porter/link/ys_cn/official/android_default", pc: HOYO_PLAY_CN },
      ui: { lang: "zh", mobile: "启动原神...", pc: "启动米哈游启动器...", error: "如果游戏无法打开，请前往官网下载 " }
    },
    vn: {
      uris: { mobile: "genshinvn://", pc: "hyp-global://launchgame?gamebiz=hk4e_global&openGame=true" },
      downloads: { android: "https://hoyo.link/6uHgFEAL", ios: "https://hoyo.link/6uHgFEAL", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "vi", mobile: "Đang mở Genshin Impact - Funtap...", pc: "Đang mở HoYoPlay...", error: "Nếu trò chơi không mở, vui lòng tải tại " }
    }
  },

  sr: {
    global: {
      uris: { mobile: "honkaistarrail://", pc: "hyp-global://launchgame?gamebiz=hkrpg_global&openGame=true" },
      downloads: { android: "https://hoyo.link/dvHgFCAL", ios: "https://hoyo.link/dvHgFCAL", pc: HOYO_PLAY_GLOBAL },
      ui: { 
        lang: "en", 
        mobile: "Opening Honkai: Star Rail...", pc: "Opening HoYoPlay...", 
        error: "If the game fails to open, please download it " 
      }
    },
    cn: {
      uris: { mobile: "starrailmihoyo://", pc: "hyp-cn://launchgame?gamebiz=hkrpg_cn&openGame=true" },
      downloads: { ios: "https://act-api-takumi.mihoyo.com/event/download_porter/link/hkrpg_cn/official/android_default", android: "https://act-api-takumi.mihoyo.com/event/download_porter/link/hkrpg_cn/official/android_default", pc: HOYO_PLAY_CN },
      ui: { lang: "zh", mobile: "启动崩坏：星穹铁道...", pc: "启动米哈游启动器...", error: "如果游戏无法打开，请前往官网下载 " }
    },
    vn: {
      uris: { mobile: "honkaistarrailvn://", pc: "hyp-global://launchgame?gamebiz=hkrpg_global&openGame=true" },
      downloads: { android: "https://hoyo.link/9OieFBAL", ios: "https://hoyo.link/9OieFBAL", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "vi", mobile: "Đang mở Honkai: Star Rail - 3T Online...", pc: "Đang mở HoYoPlay...", error: "Nếu trò chơi không mở, vui lòng tải tại " }
    }
  },

  zzz: {
    global: {
      uris: { mobile: "zenlessglobal://", pc: "hyp-global://launchgame?gamebiz=nap_global&openGame=true" },
      downloads: { android: "https://hoyo.link/0y5jFBAL", ios: "https://hoyo.link/0y5jFBAL", pc: HOYO_PLAY_GLOBAL },
      ui: { 
        lang: "en", 
        mobile: "Opening Zenless Zone Zero...", pc: "Opening HoYoPlay...", 
        error: "If the game fails to open, please download it " 
      }
    },
    cn: {
      uris: { mobile: "zenless://", pc: "hyp-cn://launchgame?gamebiz=nap_cn&openGame=true" },
      downloads: { ios:"https://api-takumi.mihoyo.com/event/download_porter/link/nap_cn/official/android_ldy", android: "https://api-takumi.mihoyo.com/event/download_porter/link/nap_cn/official/android_ldy", pc: HOYO_PLAY_CN },
      ui: { lang: "zh", mobile: "启动绝区零...", pc: "启动米哈游启动器...", error: "如果游戏无法打开，请前往官网下载 " }
    },
    vn: {
      uris: { mobile: "zenlessvn://", pc: "hyp-global://launchgame?gamebiz=nap_global&openGame=true" },
      downloads: { android: "https://hoyo.link/5y5jFCAL", ios: "https://hoyo.link/9OieFBAL", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "vi", mobile: "Đang mở Zenless Zone Zero - Gamota...", pc: "Đang mở HoYoPlay...", error: "Nếu trò chơi không mở, vui lòng tải tại " }
    }
  },

  // =========================
  // HONKAI IMPACT 3RD
  // =========================
  bh3: {
    // Standardized the 'overseas' servers to fit the same region pattern
    sea: {
      uris: { mobile: "bh3overseas://", pc: "hyp-global://launchgame?gamebiz=bh3_global&package=overseas_official&openGame=true" },
      downloads: { mobile: "http://hoyo.link/55ra3U3qx", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "en", mobile: "Opening HI3 - Southeast Asia...", pc: "Opening HoYoPlay...", error: "Download the game " }
    },
    cn: {
      uris: { mobile: "bh3game://", pc: "hyp-cn://launchgame?gamebiz=bh3_cn&openGame=true" },
      downloads: { android: "https://mhyurl.cn/bh3_cn_android", ios: "https://mhyurl.cn/bh3_cn_ios", pc: HOYO_PLAY_CN },
      ui: { lang: "zh", mobile: "启动崩坏3...", pc: "启动米哈游启动器...", error: "请前往官网下载 " }
    },
    america: {
      uris: { mobile: "bh3global://", pc: "hyp-global://launchgame?gamebiz=bh3_global&package=glb_official&openGame=true" },
      downloads: { mobile: "https://hoyo.link/hLh5Eekel", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "en", mobile: "Opening HI3 - America and Europe...", pc: "Opening HoYoPlay...", error: "Download the game " }
    },
    asia: {
      uris: { mobile: "bh3asia://", pc: "hyp-global://launchgame?gamebiz=bh3_global&package=asia_official&openGame=true" },
      downloads: { mobile: "https://hoyo.link/hLh5Eekel", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "cn", mobile: "启动崩坏3...", pc: "启动HoYoPlay...", error: "Download the game " }
    },
    kr: {
      uris: { mobile: "bh3kr://", pc: "hyp-global://launchgame?gamebiz=bh3_global&package=kr_official&openGame=true" },
      downloads: { mobile: "https://hoyo.link/hLh5Eekel", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "en", mobile: "Opening HI3 - Korean Server...", pc: "Opening HoYoPlay...", error: "Download the game " }
    },
    jp: {
      uris: { mobile: "bh3jp://", pc: "hyp-global://launchgame?gamebiz=bh3_global&package=jp_official&openGame=true" },
      downloads: { mobile: "https://hoyo.link/hLh5Eekel", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "en", mobile: "Opening HI3 - Japanese Server...", pc: "Opening HoYoPlay...", error: "Download the game " }
    },
    vn: {
      uris: { mobile: "bh3vn://", pc: "hyp-global://launchgame?gamebiz=bh3_global&package=overseas_official&openGame=true" },
      downloads: { mobile: "http://hoyo.link/55ra3U3qx", pc: HOYO_PLAY_GLOBAL },
      ui: { lang: "vi", mobile: "Đang mở HI3 - Funtap...", pc: "Đang mở HoYoPlay...", error: "Tải game về " }
    }
  },

  // =========================
  // CLOUD GAMES (Normalized)
  // =========================
  cg_ys: {
    cn: {
      uris: { mobile: "yscloud://", pc: "https://ys.mihoyo.com/cloud" },
      downloads: { ios:"https://api-takumi.mihoyo.com/event/download_porter/link/clgm_cn/official/ios_default", android: "https://api-takumi.mihoyo.com/event/download_porter/link/clgm_cn/official/android_web", pc: "https://ys.mihoyo.com/cloud" },
      ui: { lang: "zh", text: "启动云·原神...", error: "如果无法打开，请访问 " },
      cgui: { lang: "zh", text: "启动云·原神...", error: "如果无法打开，请访问 " }
    },
    global: {
      uris: { mobile: "cloudgenshin://", pc: "https://cloudgenshin.hoyoverse.com" },
      downloads: { ios: "https://hoyo.link/4BDfFBAL", android: "https://hoyo.link/4BDfFBAL", pc: "https://hoyo.link/4BDfFBAL" },
      ui: { lang: "en", text: "Opening Genshin Impact - Cloud...", error: "Please access via " },
      cgui: { lang: "en", text: "Download Genshin Impact - Cloud", error: "Please access via " }
    }
  },
  cg_sr: {
    cn: {
      uris: { mobile: "srcloud://", pc: "https://sr.mihoyo.com/cloud" },
      downloads: { ios:"https://act-api-takumi.mihoyo.com/event/download_porter/link/clgm_hkrpg-cn/official/android_default", android: "https://act-api-takumi.mihoyo.com/event/download_porter/link/clgm_hkrpg-cn/official/android_default", pc: "https://sr.mihoyo.com/cloud" },
      ui: { lang: "zh", text: "启动云·星穹铁道...", error: "如果无法打开，请访问 " },
      cgui: { lang: "zh", text: "启动云·星穹铁道...", error: "如果无法打开，请访问 " }
    }
  },
  cg_nap: {
    cn: {
      uris: { mobile: "cloudnap://", pc: "https://ys.mihoyo.com/cloud" },
      downloads: { ios:"https://act-api-takumi.mihoyo.com/event/download_porter/link/clgm_nap-cn/official/android_cloudgame", android: "https://act-api-takumi.mihoyo.com/event/download_porter/link/clgm_nap-cn/official/android_cloudgame", pc: "https://api-takumi.mihoyo.com/event/download_porter/link/clgm_nap-cn/official/pc_ldytest2" },
      ui: { lang: "zh", text: "启动云·绝区零...", error: "如果无法打开，请访问 " },
      cgui: { lang: "zh", text: "启动云·绝区零...", error: "如果无法打开，请访问 " }
    },
    global: {
      uris: { mobile: "cloudnapglobal://", pc: "https://zenless.hoyoverse.com" },
      downloads: { ios: "https://sg-public-api.hoyoverse.com/event/download_porter/link/clgm_nap-global/official/android_default", android: "https://sg-public-api.hoyoverse.com/event/download_porter/link/clgm_nap-global/official/android_default", pc: "https://sg-public-api.hoyoverse.com/event/download_porter/link/clgm_nap-global/official/pc_ldy" },
      ui: { lang: "en", text: "Opening Zenless Zone Zero - Cloud...", error: "Please access via " },
      cgui: { lang: "en", text: "Download Zenless Zone Zero - Cloud", error: "Please access via " }
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
    },
    cn: { // Added 'cn'
      uris: { mobile: "sky-dev://", pc: "fevergames://mygame/?gameId=63" },
      downloads: { 
        android: "https://adl.netease.com/d/g/sky/c/gw?type=android", 
        ios: "https://adl.netease.com/d/g/sky/c/gw?type=ios",
        steam: "https://loadingbaycn.webapp.163.com/app/v1/download_client/windows/mkt-ma75-official/url"
      },
      ui: { lang: "zh", mobile: "Opening Sky...", pc: "启动光·遇...", error: "Please download at " }
    }
  }
};

export default redirectConfig;