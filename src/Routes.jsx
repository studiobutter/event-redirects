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
