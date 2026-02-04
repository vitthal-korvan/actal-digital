"use client";

import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState("EN");

  useEffect(() => {
    document.documentElement.lang = currentLang.toLowerCase();
    document.documentElement.dir = "ltr"; 
    // We can extend this for RTL support later if needed, though current code hardcodes 'ltr'
  }, [currentLang]);

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
