import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import YSglobal from './pages/event/ys_global';
import YScn from './pages/event/ys_cn';
import SRglobal from './pages/event/sr_global';
import SRcn from './pages/event/sr_cn';
import NAPglobal from './pages/event/nap_global';
import NAPcn from './pages/event/nap_cn';
import Sky from './pages/event/sky';
import Yu from './pages/event/yu';
// Testing

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Home />} />
        
        <Route path="/event/genshin" element={<YSglobal />} />
        <Route path="/event/yuanshen" element={<YScn />} />
        <Route path="/event/hsr" element={<SRglobal />} />
        <Route path="/event/srmihoyo" element={<SRcn />} />
        <Route path="/event/zzz" element={<NAPglobal />} />
        <Route path="/event/nap" element={<NAPcn />} />
        
        <Route path="/event/sky" element={<Sky />} />
        <Route path="/event/guangyu" element={<Yu />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
