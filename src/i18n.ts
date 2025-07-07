import i18next from 'i18next';
import en from './locales/en.json';
import es from './locales/es.json';

const language = localStorage.getItem('i18next') || 'es';

i18next.init({
  interpolation: { escapeValue: false },
  lng: language,
  resources: {
    en: {
      common: en
    },
    es: {
      common: es
    }
  },
})