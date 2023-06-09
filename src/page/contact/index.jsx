import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-slate-300 container mx-auto mt-20 flex flex-col items-center  gap-2" >
      <h1>{t("Contact")}</h1>
    </div>
  );
};

export default Contact;
