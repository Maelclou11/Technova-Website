import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import navbar_en from './traduction/en/navbar_en.json';
import navbar_fr from './traduction/fr/navbar_fr.json';
import home_en from './traduction/en/home_en.json';
import home_fr from './traduction/fr/home_fr.json';
import footer_en from './traduction/en/footer_en.json';
import footer_fr from './traduction/fr/footer_fr.json';

const resources = {
  en: {
    navbar: navbar_en,
    home: home_en,
    footer: footer_en
  },
  fr: {
    navbar: navbar_fr,
    home: home_fr,
    footer: footer_fr
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('userLanguage') || 'en', // Utilisez la langue stockée ou 'en' par défaut
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
