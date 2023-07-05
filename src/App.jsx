import React, { useEffect } from 'react';
import './App.css';
import $ from 'jquery';
import { useTranslation } from 'react-i18next';

import { NavBar, Footer, Animation, BannerWord } from './components/indexComponent';
import { Accueil, Services, RecentWork, Team, OurMission, ContactUs } from './components/sections/indexSection';


function App() {
  /* Traduction */
  const { i18n } = useTranslation();

  $(window).scroll(() => {
    if ($(window).scrollTop() > 0) {
      $('.indexMenu').addClass('navbar-scrolled');
    } else {
      $('.indexMenu').removeClass('navbar-scrolled');
    }
  });

  useEffect(() => {
    i18n.on('languageChanged', (lng) => {
      localStorage.setItem('userLanguage', lng);
    });
  
    return () => {
      i18n.off('languageChanged');
    };
  }, [i18n]);

  

  return (
    <div>
      <Animation />
      <NavBar />

      <Accueil />

      <BannerWord />

      <Services />

      <RecentWork />

      <Team />

      <OurMission />

      <ContactUs />

      <Footer />
    </div>
  );

}

export default App;
