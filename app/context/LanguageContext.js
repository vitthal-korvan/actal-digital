"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Translations dictionary
const translations = {
  EN: {
    branding: "Branding",
    websites: "Websites",
    marketing: "Marketing",
    product: "Product",
    growth: "Growth",
    heroTitle: "We design solutions",
    heroTitleLine: "that drive", // heroHeadline removed to match user preference structure
    heroTagline: "Transforming ambitious ideas into dominant digital realities. We don't just design; we define industry standards.",
    heroSubtitle: "Digital-first branding agency. Crafting identities for future-tech leaders. We fuse creativity with technology to build immersive web experiences, data-driven marketing campaigns, and scalable digital solutions.",
    heroService1: "Branding",
    heroService2: "Web Design",
    heroService3: "Development",
    heroService4: "Marketing",
    startProject: "Start a Project",
    stat1Value: "50+",
    stat1Label: "Projects Delivered",
    stat2Value: "98%",
    stat2Label: "Client Satisfaction",
    stat3Value: "10+",
    stat3Label: "Countries Served"
  },
  AR: {
    branding: "العلامة التجارية",
    websites: "المواقع الإلكترونية",
    marketing: "التسويق",
    product: "المنتج",
    growth: "النمو",
    heroTitle: "نحن نهندس",
    heroTitleLine: "رقمي",
    heroTagline: "تحويل الأفكار الطموحة إلى واقع رقمي مسيطر. نحن لا نصمم فحسب؛ بل نضع معايير الصناعة.",
    heroSubtitle: "وكالة علامات تجارية رقمية أولاً. صياغة هويات قادة التكنولوجيا المستقبلية. نمزج الإبداع بالتكنولوجيا لبناء تجارب ويب غامرة وحملات تسويقية تعتمد على البيانات وحلول رقمية قابلة للتطوير.",
    heroService1: "العلامة التجارية",
    heroService2: "تصميم المواقع",
    heroService3: "تطوير",
    heroService4: "التسويق",
    startProject: "ابدأ مشروعاً",
    stat1Value: "٥٠+",
    stat1Label: "مشروع منجز",
    stat2Value: "٩٨٪",
    stat2Label: "رضا العملاء",
    stat3Value: "١٠+",
    stat3Label: "دول نخدمها"
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
