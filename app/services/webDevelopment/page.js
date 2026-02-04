"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";
import Footer from "../../components/Footer/Footer"; 
import Navbar from "../../components/Navbar/Navbar"; 
import styles from "./page.module.css";

export default function WebDevelopmentPage() {
  // 1. Language State Add Kara
  const [currentLang, setCurrentLang] = useState("EN");

  // 2. Translations Object
  const translations = {
    EN: {
      heroTitle: "Web Development",
      heroDescHighlight: "We don’t just build websites. We build high-speed digital engines",
      heroDescSub: "Designed to drive growth, leads, and results.",
      expertiseTitle: "Our Expertise",
      infoText: "Each engagement below represents a close collaboration, typically spanning 4–12 weeks.",
      services: [
        "Custom Web Applications", "E-commerce Development", "UI/UX Research & Design",
        "CMS Development & Management", "Website Design & Development", "Landing Page Development",
        "Performance Optimization", "SEO-Ready Development", "API Development & Integration",
        "Payment Gateway Integration"
      ],
      metaLabels: { industry: "Industry", engagement: "Engagement", duration: "Duration" }
    },
    AR: {
      heroTitle: "تطوير المواقع",
      heroDescHighlight: "نحن لا نبني مواقع إلكترونية فحسب. نحن نبني محركات رقمية عالية السرعة",
      heroDescSub: "مصممة لتحقيق النمو والنتائج.",
      expertiseTitle: "خبراتنا",
      infoText: "يمثل كل مشروع أدناه تعاوناً وثيقاً، يمتد عادةً من 4 إلى 12 أسبوعاً.",
      services: [
        "تطبيقات الويب المخصصة", "تطوير التجارة الإلكترونية", "أبحاث وتصميم تجربة المستخدم",
        "تطوير وإدارة أنظمة إدارة المحتوى", "تصميم وتطوير المواقع", "تطوير صفحات الهبوط",
        "تحسين الأداء", "تطوير جاهز لمحركات البحث", "تطوير وتكامل البرمجيات (API)",
        "تكامل بوابات الدفع"
      ],
      metaLabels: { industry: "الصناعة", engagement: "التعاون", duration: "المدة" }
    }
  };

  const t = translations[currentLang] || translations["EN"];

  const workItems = [
    { title: "Stanford Capital", industry: "Finance & Management", engagement: "Platform", duration: "4 Weeks", img: "/stanford.JPG", url: "https://www.stanfordcapital.in/", featured: true, fullWidth: true },
    { title: "Sana Bakers", industry: "E-Commerce", engagement: "Full System", duration: "2 Weeks", img: "/sana.JPG", url: "https://sanabakers.actaldigital.com/", featured: true },
    { title: "Arab Jewels", industry: "Gold & Diamond", engagement: "Launch", duration: "1 Weeks", img: "/arab.JPG", url: "https://arabjewels.actaldigital.com/", featured: true, badge: "Awarded" },
    { title: "Megha Gold", industry: "Jewellery", engagement: "Design Sprint", duration: "1 Weeks", img: "/megha.JPG", url: "https://meghagold.actaldigital.com/" },
    { title: "Aswan Real Estate", industry: "Real Estate", engagement: "Platform", duration: "4 Weeks", img: "/aswan.JPG", url: "https://aswanrealestate.actaldigital.com/" },
  ];

  return (
    <main className={styles.main}>
      {/* 3. Navbar la PROPS dya */}
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />

      <div className={styles.heroSection}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 lg:col-span-7">
            <h1 className={styles.heroTitle}>{t.heroTitle}</h1>
            <p className={styles.heroDesc}>
              <span className={styles.heroDescHighlight}>{t.heroDescHighlight}</span>{" "}
              {t.heroDescSub}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.gridContainer}>
          
          <div className={styles.sidebar}>
            <div className="space-y-6">
              <div className={styles.filterLabel}>{t.expertiseTitle}</div>
              <div className="flex flex-col">
                {t.services.map((service, index) => (
                  <div key={index} className={styles.filterOption} style={{ cursor: 'default', pointerEvents: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.75rem 0', color: 'var(--foreground)' }}>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.listings}>
            <div className={`${styles.infoBlock} ${styles.fullCard}`}>
              <div className={styles.infoContent}>
                <p className={styles.infoText}>{t.infoText}</p>
              </div>
            </div>

            {workItems.map((item, i) => (
              <a href={item.url} key={i} target="_blank" rel="noopener noreferrer" className={`${styles.card} ${item.fullWidth ? styles.fullCard : ''}`}>
                <div className={styles.cardImageWrapper}>
                  <img src={item.img} className={styles.cardImage} alt={item.title} />
                  {(item.featured || item.badge) && (
                     <div className={styles.featuredBadge}>{item.badge ? item.badge : "Featured"}</div>
                  )}
                </div>

                <div className="flex flex-col gap-6">
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>{item.title}</h2>
                    <ArrowUpRight size={24} className={styles.cardArrow} />
                  </div>

                  <div className={styles.cardGrid}>
                    <div className={styles.metaBlock}>
                       <span className={styles.metaLabel}>{t.metaLabels.industry}</span>
                       <span className={styles.metaValue}>{item.industry}</span>
                    </div>
                    <div className={styles.metaBlock}>
                       <span className={styles.metaLabel}>{t.metaLabels.engagement}</span>
                       <span className={styles.metaValue}>{item.engagement}</span>
                    </div>
                    <div className={styles.metaBlock}>
                       <span className={styles.metaLabel}>{t.metaLabels.duration}</span>
                       <span className={styles.metaValue}>{item.duration}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FIXED: Passing currentLang to Footer */}
      <Footer currentLang={currentLang} />
    </main>
  );
}