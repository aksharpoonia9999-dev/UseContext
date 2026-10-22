import { createContext, useState } from "react";

const LangContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangContext, LanguageProvider };
