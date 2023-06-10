import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { BiWorld } from "react-icons/bi";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <main className="bg-slate-300 container mx-auto mt-20 flex flex-col items-center  gap-2 ">
      <h1>Multi-language app</h1>
      <BiWorld size={44} />

      <h1>{t("Home")}</h1>
    </main>
  );
};
export default About;
// ??????????????????????
// import useTranslation from "../../hooks/useTranslation";

// function About() {
//   const { language, changeLanguage } = useTranslation();

//   const handleClick = () => {
//     if (language === "en") {
//       changeLanguage("فارسی");
//     } else {
//       changeLanguage("en");
//     }
//   };

//   return (
//     <div className="flex flex-col justify-center">
//       <p>Current language: {language}</p>
      // <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-1 mx-96 border border-blue-500 hover:border-transparent rounded"  onClick={handleClick}>Change language</button>
//     </div>
//   );
// }
// export default About;
// ?????????????????????
// !!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!






