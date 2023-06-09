import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { BiWorld } from "react-icons/bi";
import "./home.css"
const Home = () => {
  const { t, i18n } = useTranslation();
  const [languageCode, setLanguageCode] = useState("en");

  const handleLanguageChange = (event) => {
    const newLanguageCode = event.target.value;
    i18n.changeLanguage(newLanguageCode);
  };
  return (
    <main className="bg-slate-300 container mx-auto mt-20 flex flex-col items-center  gap-2 ">
      {" "}
      <h1>Multi-language app</h1>
      <BiWorld size={44} />
      <span>Select another language!</span>
      <select value={i18n.language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="fa">Farsi</option>
        <option value="fa">arabi</option>
      </select>

      <p>{t("Home")}</p>
      <p>{t("total", { value: <div>123</div> })}</p>
    </main>
  );
};
export default Home;




