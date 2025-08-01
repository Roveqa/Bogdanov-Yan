import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',

    ns: ['index', 'header', 'footer', 'about', 'work', 'project', 'contact', 'seo'],
    defaultNS: 'index',

    backend: {
      loadPath: '/Locales/{{lng}}/{{ns}}.json',
    },

    interpolation: {
      escapeValue: false,
    },

    detection: {

      order: ['localStorage', 'cookie', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],

      checkWhitelist: true,
    },

    react: {
      useSuspense: true,
    },
  });

const savedLang = localStorage.getItem('i18nextLng');
if (!savedLang) {
  i18n.changeLanguage('en');
}

export default i18n;