"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Translations dictionary
const translations = {
  EN: {
    branding: "Branding",
    websites: "Websites",
    marketing: "Marketing",
    growth: "Growth",
    heroTitle: "We Build",
    heroTitleLine: "Digital",
    heroSubtitle: "Digital-first branding agency. Crafting identities for future-tech leaders.",
    heroService1: "Branding",
    heroService2: "Web Design",
    heroService3: "Development",
    heroService4: "Marketing",
    startProject: "Start a Project"
  },
  AR: {
    branding: "العلامة التجارية",
    websites: "المواقع الإلكترونية",
    marketing: "التسويق",
    growth: "النمو",
    heroTitle: "نحن نبني",
    heroTitleLine: "رقمي",
    heroSubtitle: "وكالة علامات تجارية رقمية أولاً. صياغة هويات قادة التكنولوجيا المستقبلية.",
    heroService1: "العلامة التجارية",
    heroService2: "تصميم المواقع",
    heroService3: "تطوير",
    heroService4: "التسويق",
    startProject: "ابدأ مشروعاً"
  }
};

const LanguageContext = createContext({
  language: "EN",
  currentLang: "EN",
  setCurrentLang: () => { },
  t: (key) => translations.EN[key] || key
});

export function LanguageProvider({ children }) {
  const [currentLang, setCurrentLang] = useState("EN");

  const t = (key) => {
    const langData = translations[currentLang] || translations.EN;
    return langData[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = currentLang.toLowerCase();
    document.documentElement.dir = "ltr";
  }, [currentLang]);

  return (
    <LanguageContext.Provider value={{ language: currentLang, currentLang, setCurrentLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
