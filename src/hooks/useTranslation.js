// import { useState, useEffect } from "react";
// import i18n from "i18next";

// const useTranslation = () => {
//   const [language, setLanguage] = useState(
//     () => localStorage.getItem("language") || "en"
//   );

//   useEffect(() => {
//     i18n.changeLanguage(language);
//     localStorage.setItem("language", language);
//   }, [language]);

//   const changeLanguage = (newLanguage) => {
//     setLanguage(newLanguage);
//   };

//   return {
//     language,
//     changeLanguage,
//   };
// };

// export default useTranslation;
import { useState, useEffect } from "react";
import i18n from "i18next";

function useTranslation() {
  const [t, setT] = useState(() => i18n.t);

  useEffect(() => {
    const onChange = () => {
      setT(i18n.t);
    };
    i18n.on("languageChanged", onChange);
    return () => {
      i18n.off("languageChanged", onChange);
    };
  }, []);

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang); // save language preference to local storage
  }

  return { t, changeLanguage };
}

// Initialize i18next with translations
const lang = localStorage.getItem("lang") || "en"; // get language preference from local storage or default to English
i18n.init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to my app!",
        about: "About us",
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue sur mon application !",
        about: "À propos de nous",
      },
    },
  },
  lng: lang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default useTranslation;
