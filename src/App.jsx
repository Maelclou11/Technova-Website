import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Accueil from './pages/Accueil';
import VisitesVirtuelles from './pages/Services/VisitesVirtuelles';
import CyberSecurite from './pages/Services/CyberSecurite';
import WorksPortfolio from './pages/WorksPortfolio';
import WebDesign from './pages/Services/WebDesign';

function App(){
  const { pathname } = useLocation();  

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services/cybersecurite" element={<CyberSecurite />} />
        <Route path="/services/visite-virtuelle" element={<VisitesVirtuelles />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/realisations" element={<WorksPortfolio />} /> {/* /services/visite-virtuelle */}
    </Routes>
  )
};

export default App;