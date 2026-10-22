import { useContext } from "react";
import { LangContext } from "../context/LangContext";

const LangToggle = () => {
  const { language, setLanguage } = useContext(LangContext);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hi" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 h-11.5 flex items-center justify-center w-25 rounded-full border border-solid border-white/30 bg-white/10 text-white font-medium text-sm sm:text-base cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/20 hover:border-white/60 active:scale-95"
    >
      {language === "en" ? "हिन्दी" : "English"}
    </button>
  );
};

export default LangToggle;
