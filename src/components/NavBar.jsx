import React from 'react';
import '../CSS/components.css';
import { imgLogoNavBar } from '../img/index.js';
import { useTranslation } from 'react-i18next';
import Animation from './Animation';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function NavBar({isWhite}) {
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

    $(window).scroll(() => {
      if ($(window).scrollTop() > 0) {
        $('.indexMenu').addClass('navbar-scrolled');
      } else {
        $('.indexMenu').removeClass('navbar-scrolled');
      }
    });

    /* Scroller jusqu'a l'id */
    const scrollToElement = (elementId) => {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    };

  return (
    <div>
      <Animation />
      <header className="indexMenu" style={isWhite ? {background: "white"} : {background: ""}}>
        <div className="menu">
          <div className="left hidden tleft delay-100">
            <Link to="/" className="logo" aria-label="Home">
                <img className="logo-banner" src={imgLogoNavBar} alt="logo" />
            </Link>
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
                <Link to="/" onClick={() => scrollToElement('home')}>
                    {t('navbar:home')}
                </Link>
              </li>
              <li className='hidden tright delay-300'>
                <Link to="/" onClick={() => scrollToElement('service')}>
                    {t('navbar:services')}
                </Link>
              </li>
              <li className='hidden tright delay-200'>
                <Link to="/realisations" onClick={() => {ToggleMenu()}}>
                  {t('navbar:recentWorks')}
                </Link>
              </li>
              <li className='hidden tright delay-100'>
                <Link to="/" onClick={() => scrollToElement('contactUs')}>
                    {t('navbar:startAProject')}{' '}
                    <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
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
              <Link to="/" onClick={() => {scrollToElement('home'); ToggleMenu()}}>
                {t('navbar:home')}
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => {scrollToElement('service'); ToggleMenu()}}>
                {t('navbar:services')}
              </Link>
            </li>
            <li>
              <Link to="/realisations" onClick={() => {ToggleMenu()}}>
                {t('navbar:recentWorks')}
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => {scrollToElement('contactUs'); ToggleMenu()}}>
                {t('navbar:startAProject')}{' '}
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
