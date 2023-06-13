import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enlng from "./en";
import falng from "./fa";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fa: { translation: { ...falng } },
    en: { translation: { ...enlng } },
  },
});

export default i18n;
