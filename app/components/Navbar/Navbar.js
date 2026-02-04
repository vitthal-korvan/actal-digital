"use client";

import { ChevronDown, ChevronUp, Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { currentLang, setCurrentLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const translations = {
    EN: {
      about: "About Us",
      services: "Services",
      careers: "Careers",
      contact: "Contact Us",
      servicesList: [
        { name: "Web Development", href: "/services/webDevelopment" },
        { name: "Digital Marketing", href: "/services/DigitalMarketing" },
        { name: "Social Media", href: "/services/SocialMedia" },
        { name: "Graphic Design", href: "/services/GraphicDesign" },
        { name: "Creative Content", href: "/services/CreativeContent" },
        { name: "Search Engine Optimization (SEO)", href: "/services/SEO" },
        { name: "Branding", href: "/services/ORM" },
      ]
    },
    AR: {
      about: "من نحن",
      services: "خدماتنا",
      careers: "وظائف",
      contact: "اتصل بنا",
      servicesList: [
        { name: "تطوير المواقع", href: "/services/webDevelopment" },
        { name: "التسويق الرقمي", href: "/services/DigitalMarketing" },
        { name: "وسائل التواصل الاجتماعي", href: "/services/SocialMedia" },
        { name: "التصميم الجرافيكي", href: "/services/GraphicDesign" },
        { name: "المحتوى الإبداعي", href: "/services/CreativeContent" },
        { name: "تحسين محركات البحث", href: "/services/SEO" },
        { name: "الهوية التجارية", href: "/services/ORM" },
      ]
    }
  };

  const t = translations[currentLang] || translations["EN"];

  useEffect(() => {
    document.documentElement.lang = currentLang.toLowerCase();
    document.documentElement.dir = "ltr"; // Layout stable thevnyasathi
  }, [currentLang]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsServicesOpen(false);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  const toggleServices = (e) => {
    e.preventDefault();
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <button onClick={toggleMenu} className={styles.closeBtn} aria-label="Close menu"><X size={32} /></button>
        <nav className={styles.mobileNav}>
          <Link href="/blogs" className={styles.mobileLink} onClick={toggleMenu}>{t.about}</Link>
          <div className={styles.mobileDropdownWrapper}>
            <button className={styles.mobileLink} onClick={toggleServices}>
              {t.services} {isServicesOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <div className={`${styles.mobileSubMenu} ${isServicesOpen ? styles.show : ""}`}>
              {t.servicesList.map((service) => (
                <Link key={service.name} href={service.href} className={styles.mobileSubLink} onClick={toggleMenu}>{service.name}</Link>
              ))}
            </div>
          </div>
          <Link href="/studio" className={styles.mobileLink} onClick={toggleMenu}>{t.careers}</Link>
          <div className={styles.mobileLangSection}>
             <button onClick={() => setCurrentLang("EN")} className={currentLang === "EN" ? styles.activeLang : ""}>EN</button>
             <span className={styles.separator}>|</span>
             <button onClick={() => setCurrentLang("AR")} className={currentLang === "AR" ? styles.activeLang : ""}>AR</button>
          </div>
          <div className={styles.mobileFooter}>
            <Link href="/project" className={styles.mobileCta} onClick={toggleMenu}>{t.contact}</Link>
          </div>
        </nav>
      </div>

      <div className={styles.navbarWrapper}>
        <nav className={styles.navbar}>
          <div className={styles.navLinks}>
            <Link href="/blogs" className={styles.link}>{t.about}</Link>
            <div className={styles.dropdown}>
              <button className={styles.link} style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'none', border: 'none', cursor: 'pointer' }}>
                {t.services} <ChevronDown size={14} />
              </button>
              <div className={styles.dropdownMenu}>
                {t.servicesList.map((service) => (
                  <Link key={service.name} href={service.href} className={styles.dropdownItem}>{service.name}</Link>
                ))}
              </div>
            </div>
            <Link href="/studio" className={styles.link}>{t.careers}</Link>
          </div>

          <button onClick={toggleMenu} className={styles.mobileMenuBtn} aria-label="Open menu"><Menu size={24} /></button>

          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoImageWrapper}>
                 <Image src="/logo3.png" alt="Actal Digital Logo" fill style={{ objectFit: 'contain' }} priority />
              </div>
            </Link>
          </div>

          <div className={styles.navLinks}>
            <div className={styles.langWrapper}>
              <button className={styles.langBtn}>
                <Globe size={16} />
                <span>{currentLang === "EN" ? "English" : "العربية"}</span>
                <ChevronDown size={12} />
              </button>
              <div className={styles.langDropdown}>
                <button onClick={() => setCurrentLang("EN")} className={styles.langOption}>India (EN)</button>
                <button onClick={() => setCurrentLang("AR")} className={styles.langOption}>UAE (AR)</button>
              </div>
            </div>
            <Link href="/project" className={styles.ctaButton}>{t.contact}</Link>
          </div>
        </nav>
      </div>
    </>
  );
}