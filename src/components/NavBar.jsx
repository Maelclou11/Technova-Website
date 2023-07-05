import React from 'react';
import '../CSS/components.css';
import { imgLogoNavBar } from '../img/index.js';
import { useTranslation } from 'react-i18next';
import Animation from './Animation';

function NavBar() {
    /*  Ouvrir le Menu */
    const ToggleMenu = () => {
        const menuToggle = document.querySelector('.toggle');
        const sidebar = document.querySelector('.sidebar');
        menuToggle.classList.toggle('active');
        sidebar.classList.toggle('active');
    }

    /* Traduction */
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

  return (
    <div>
      <Animation />
      <header className="indexMenu">
        <div className="menu">
          <div className="left hidden tleft delay-100">
            <a href="/index.html" className="logo" aria-label="Home">
              <img className="logo-banner" src={imgLogoNavBar} alt="logo" />
            </a>
            <div className="navlangwrap">
            {i18n.language !== 'fr' && (
                <button
                className="langButton fr"
                onClick={() => {
                    ToggleMenu();
                    changeLanguage('fr');
                }}
                >
                &nbsp;Fr
                </button>
            )}
            {i18n.language !== 'en' && (
                <button
                className="langButton en"
                onClick={() => {
                    ToggleMenu();
                    changeLanguage('en');
                }}
                >
                &nbsp;En
                </button>
            )}
            </div>
          </div>
          <div className="right">
            <ul className="naviguation">
              <li className='hidden tright delay-400'>
                <a href="#home">
                    {t('navbar:home')}
                </a>
              </li>
              <li className='hidden tright delay-300'>
                <a href="#service">
                    {t('navbar:services')}
                </a>
              </li>
              <li className='hidden tright delay-200'>
                <a href="#recentWork">
                    {t('navbar:recentWorks')}
                </a>
              </li>
              <li className='hidden tright delay-100'>
                <a href="#contactUs">
                    {t('navbar:startAProject')}{' '}
                    <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </li>
            </ul>

            <div className="toggle menuToggle" onClick={ToggleMenu}>
              <button
                className="hamburgerIcon"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navmenu"
                aria-label="Menu"
              >
                <span className="toggler-icon top-bar"></span>
                <span className="toggler-icon middle-bar"></span>
                <span className="toggler-icon bottom-bar"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-void" onClick={ToggleMenu}></div>
          <div className="langwrap">
            <button
              className="langButton"
              onClick={() => {
                ToggleMenu();
                changeLanguage('en');
              }}
            >
              En&nbsp;
            </button>
            <p>/</p>
            <button
              className="langButton"
              onClick={() => {
                ToggleMenu();
                changeLanguage('fr');
              }}
            >
              &nbsp;Fr
            </button>
          </div>
          <ul className="sideMenu">
            <li>
              <a href="#home" onClick={ToggleMenu}>
                {t('navbar:home')}
              </a>
            </li>
            <li>
              <a href="#service" onClick={ToggleMenu}>
                {t('navbar:services')}
              </a>
            </li>
            <li>
              <a href="#recentWork" onClick={ToggleMenu}>
                {t('navbar:recentWorks')}
              </a>
            </li>
            <li>
              <a href="#contactUs" onClick={ToggleMenu}>
                {t('navbar:startAProject')}{' '}
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
