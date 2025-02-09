import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Main Page
import Home from './pages/home';

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

// miHoYo Cloud
import CloudYSCN from './pages/event/cg_ys_cn';
import CloudSRCN from './pages/event/cg_sr_cn';
import CloudYSGlobal from './pages/event/cg_ys_global';
import CloudNAPCN from './pages/event/cg_nap_cn';

// TGC
import Sky from './pages/event/sky';
import SkyBeta from './pages/event/sky-beta';
import Yu from './pages/event/yu';
// Testing

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Home />} />
        
        <Route path="/event/genshin" element={<YSglobal />} />
        <Route path="/event/ysvn" element={<YSvn />} />
        <Route path="/event/yuanshen" element={<YScn />} />
        <Route path="/event/hsr" element={<SRglobal />} />
        <Route path="/event/sr" element={<SRcn />} />
        <Route path="/event/hsrvn" element={<SRvn />} />
        <Route path="/event/zzz" element={<NAPglobal />} />
        <Route path="/event/nap" element={<NAPcn />} />
        <Route path="/event/zzzvn" element={<NAPvn />} />
        
        <Route path="/event/sky" element={<Sky />} />
        <Route path="/event/skybeta" element={<SkyBeta />} />
        <Route path="/event/guangyu" element={<Yu />} />

        <Route path="/event/ys_cg" element={<CloudYSCN />} />
        <Route path="/event/sr_cg" element={<CloudSRCN />} />
        <Route path="/event/nap_cg" element={<CloudNAPCN />} />
        <Route path="/event/genshin_cloud" element={<CloudYSGlobal />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
