import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Main Page
import Home from './pages/home';
import Status from './pages/status';

// miHoYo
import YSglobal from './pages/event/ys_global';
import YScn from './pages/event/ys_cn';
import YSvn from './pages/event/ys_vn';

import SRglobal from './pages/event/sr_global';
import SRcn from './pages/event/sr_cn';
import SRvn from './pages/event/sr_vn';

import NAPglobal from './pages/event/nap_global';
import NAPcn from './pages/event/nap_cn';
import NAPvn from './pages/event/nap_vn';

import BH3Glb from './pages/event/bh3';
import BH3cn from './pages/event/bh3_cn';

// miHoYo Cloud
import CloudYSCN from './pages/event/cg_ys_cn';
import CloudSRCN from './pages/event/cg_sr_cn';
import CloudYSGlobal from './pages/event/cg_ys_global';
import CloudNAPCN from './pages/event/cg_nap_cn';

import GenshinPatch from './pages/patch/hk4e_global.jsx';
import HSRPatch from './pages/patch/hkrpg_global.jsx';
import ZZZPatch from './pages/patch/nap_global.jsx';
import HonkaiPatch from './pages/patch/bh3_cn.jsx';
import ZenlessPatch from './pages/patch/zenless_cn.jsx';
import SRPatch from './pages/patch/hkrpg_cn.jsx';
import YSPatch from './pages/patch/hk4e_cn.jsx';

// TGC
import Sky from './pages/event/sky';
import Yu from './pages/event/yu';

// Miliastra Wonderland Level Sharing
import UGCWonderland from './pages/ugc/ugc_global';
import UGCBeyond from './pages/ugc/ugc_cn';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Home />} />
        <Route path="/status" element={<Status />} />
        
        <Route path="/event/genshin" element={<YSglobal />} />
        <Route path="/event/ysvn" element={<YSvn />} />
        <Route path="/event/yuanshen" element={<YScn />} />

        <Route path="/event/hsr" element={<SRglobal />} />
        <Route path="/event/sr" element={<SRcn />} />
        <Route path="/event/hsrvn" element={<SRvn />} />

        <Route path="/event/zzz" element={<NAPglobal />} />
        <Route path="/event/nap" element={<NAPcn />} />
        <Route path="/event/zzzvn" element={<NAPvn />} />

        <Route path="/event/hi3" element={<BH3Glb />} />
        <Route path="/event/bh3" element={<BH3cn />} />

        <Route path="/event/sky" element={<Sky />} />
        <Route path="/event/guangyu" element={<Yu />} />

        <Route path="/event/ys_cg" element={<CloudYSCN />} />
        <Route path="/event/sr_cg" element={<CloudSRCN />} />
        <Route path="/event/nap_cg" element={<CloudNAPCN />} />
        <Route path="/event/genshin_cloud" element={<CloudYSGlobal />} />

        <Route path="/ugc/wonderland" element={<UGCWonderland />} />
        <Route path="/ugc/beyond" element={<UGCBeyond />} />

        <Route path="/patch/genshin" element={<GenshinPatch />} />
        <Route path="/patch/starrail" element={<HSRPatch />} />
        <Route path="/patch/zenless" element={<ZZZPatch />} />
        <Route path="/patch/honkai3" element={<HonkaiPatch />} />
        <Route path="/patch/zzz" element={<ZenlessPatch />} />
        <Route path="/patch/sr" element={<SRPatch />} />
        <Route path="/patch/ys" element={<YSPatch />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
