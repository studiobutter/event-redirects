import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Main Page
import Home from './pages/home';
import Status from './pages/status';

// Combined Event Redirect
import EventRedirect from './pages/event';

import GenshinPatch from './pages/patch/hk4e_global.jsx';
import HSRPatch from './pages/patch/hkrpg_global.jsx';
import ZZZPatch from './pages/patch/nap_global.jsx';
import HonkaiPatch from './pages/patch/bh3_cn.jsx';
import ZenlessPatch from './pages/patch/nap_cn.jsx';
import SRPatch from './pages/patch/hkrpg_cn.jsx';
import YSPatch from './pages/patch/hk4e_cn.jsx';

// Miliastra Wonderland Level Sharing
import UGCWonderland from './pages/ugc/ugc_global';
import UGCBeyond from './pages/ugc/ugc_cn';

// Download Redirects
import HoYoPlay from './pages/download/hoyoplay';
import HYPStandalone from './pages/download/hyp_standalone';
import Cloud from './pages/download/cloud';
import Apps from './pages/download/apps';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<EventRedirect />} />
        <Route path="/event/genshin" element={<Navigate to="/event?game=ys&region=global" replace />} />
        <Route path="/event/ysvn" element={<Navigate to="/event?game=ys&region=vn" replace />} />
        <Route path="/event/yuanshen" element={<Navigate to="/event?game=ys&region=cn" replace />} />
        <Route path="/event/hsr" element={<Navigate to="/event?game=sr&region=global" replace />} />
        <Route path="/event/sr" element={<Navigate to="/event?game=sr&region=cn" replace />} />
        <Route path="/event/hsrvn" element={<Navigate to="/event?game=sr&region=vn" replace />} />
        <Route path="/event/zzz" element={<Navigate to="/event?game=zzz&region=global" replace />} />
        <Route path="/event/nap" element={<Navigate to="/event?game=zzz&region=cn" replace />} />
        <Route path="/event/zzzvn" element={<Navigate to="/event?game=zzz&region=vn" replace />} />
        <Route path="/event/hi3" element={<Navigate to="/event?game=bh3" replace />} />
        <Route path="/event/bh3" element={<Navigate to="/event?game=bh3&region=cn" replace />} />
        <Route path="/event/sky" element={<Navigate to="/event?game=sky&region=global" replace />} />
        <Route path="/event/guangyu" element={<Navigate to="/event?game=sky&region=cn" replace />} />
        <Route path="/event/ys_cg" element={<Navigate to="/event?game=cg_ys&region=cn" replace />} />
        <Route path="/event/sr_cg" element={<Navigate to="/event?game=cg_sr&region=cn" replace />} />
        <Route path="/event/nap_cg" element={<Navigate to="/event?game=cg_nap&region=cn" replace />} />
        <Route path="/event/genshin_cloud" element={<Navigate to="/event?game=cg_ys&region=global" replace />} />
        <Route path="/event/zenless_cloud" element={<Navigate to="/event?game=cg_nap&region=global" replace />} />
        <Route path="/status" element={<Status />} />

        <Route path="/ugc/wonderland" element={<UGCWonderland />} />
        <Route path="/ugc/beyond" element={<UGCBeyond />} />

        <Route path="/patch/genshin" element={<GenshinPatch />} />
        <Route path="/patch/starrail" element={<HSRPatch />} />
        <Route path="/patch/zenless" element={<ZZZPatch />} />
        <Route path="/patch/honkai3" element={<HonkaiPatch />} />
        <Route path="/patch/zzz" element={<ZenlessPatch />} />
        <Route path="/patch/sr" element={<SRPatch />} />
        <Route path="/patch/ys" element={<YSPatch />} />

        <Route path="/download/hoyoplay" element={<HoYoPlay />} />
        <Route path="/download/hoyoplay/standalone" element={<HYPStandalone />} />
        <Route path="/download/cloud" element={<Cloud />} />
        <Route path="/download/apps" element={<Apps />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
