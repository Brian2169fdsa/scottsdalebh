import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MentalHealth from './pages/MentalHealth';
import SubstanceAbuse from './pages/SubstanceAbuse';
import DualDiagnosis from './pages/DualDiagnosis';
import Programs from './pages/Programs';
import OurTeam from './pages/OurTeam';
import Insurance from './pages/Insurance';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/substance-abuse" element={<SubstanceAbuse />} />
        <Route path="/dual-diagnosis" element={<DualDiagnosis />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
