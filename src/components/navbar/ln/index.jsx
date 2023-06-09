import React, { useState } from "react";
import { useTranslation } from "react-i18next";


const Languagec = () => {
  const { t, i18n } = useTranslation();
  const [languageCode, setLanguageCode] = useState("en");

  const handleLanguageChange = (event) => {
    const newLanguageCode = event.target.value;
    i18n.changeLanguage(newLanguageCode);
  };
  return (

      <select value={i18n.language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fa">Farsi</option>
        <option value="fa">arabi</option>
      </select>

  );
};
export default Languagec;
