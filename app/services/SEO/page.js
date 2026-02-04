"use client";

import { useState } from "react";
import { X } from "lucide-react"; 
import Footer from "../../components/Footer/Footer"; 
import Navbar from "../../components/Navbar/Navbar"; 
import styles from "./page.module.css";

export default function WebDevelopmentPage() {
  const [currentLang, setCurrentLang] = useState("EN");
  const [selectedImg, setSelectedImg] = useState(null);

  const translations = {
    EN: {
      heroTitle: "Search Engine Optimization",
      heroDescHighlight: "Driving organic, “free” traffic. By dominating search rankings.",
      heroDescSub: "And turning visibility into consistent growth.",
      expertiseTitle: "Our Expertise",
      infoText: "Each engagement below represents a close collaboration, typically spanning 4–12 weeks.",
      services: [
        "Keyword Research & Strategy", "On-Page SEO", "Technical SEO",
        "Off-Page SEO & Link Building", "Local SEO", "E-commerce SEO",
        "Content Optimization", "SEO Audits", "Competitor Analysis"
      ],
      workItems: [
        { title: "Organic Growth", industry: "E-commerce", img: "/seo1.png" },
        { title: "Search Dominance", industry: "SaaS", img: "/seo2.png" },
        { title: "Technical Audit", industry: "Corporate", img: "/seo3.png" },
        { title: "Local Visibility", industry: "Retail", img: "/seo4.png" },
        { title: "Backlink Strategy", industry: "Tech Blog", img: "/seo5.png" },
        { title: "Content Authority", industry: "Education", img: "/seo6.png" },
      ]
    },
    AR: {
      heroTitle: "تحسين محركات البحث ",
      heroDescHighlight: "جذب زوار مجانيين وعضويين. من خلال السيطرة على نتائج البحث.",
      heroDescSub: "وتحويل الظهور الرقمي إلى نمو مستمر.",
      expertiseTitle: "خبراتنا",
      infoText: "يمثل كل مشروع أدناه تعاوناً وثيقاً، يمتد عادةً من 4 إلى 12 أسبوعاً.",
      services: [
        "بحث واستراتيجية الكلمات المفتاحية", "سيو داخلي (On-Page)", "السيو التقني (Technical)",
        "بناء الروابط (Link Building)", "السيو المحلي", "سيو التجارة الإلكترونية",
        "تحسين المحتوى", "تدقيق السيو", "تحليل المنافسين"
      ],
      workItems: [
        { title: "النمو العضوي", industry: "تجارة إلكترونية", img: "/seo1.png" },
        { title: "السيطرة على البحث", industry: "برمجيات SaaS", img: "/seo2.png" },
        { title: "التدقيق التقني", industry: "شركات", img: "/seo3.png" },
        { title: "الظهور المحلي", industry: "تجارة التجزئة", img: "/seo4.png" },
        { title: "استراتيجية الروابط", industry: "مدونة تقنية", img: "/seo5.png" },
        { title: "سلطة المحتوى", industry: "تعليم", img: "/seo6.png" },
      ]
    }
  };

  const t = translations[currentLang] || translations["EN"];

  return (
    <main className={styles.main}>
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />

      {/* Pop-up Modal */}
      {selectedImg && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImg(null)}>
          <button className={styles.closeBtn}>
            <X size={32} color="white" />
          </button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg} className={styles.fullImage} alt="Preview" />
          </div>
        </div>
      )}

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
          
          <aside className={styles.sidebar}>
            <div className="space-y-6">
              <div className={styles.filterLabel}>{t.expertiseTitle}</div>
              <div className="flex flex-col">
                {t.services.map((service, index) => (
                  <div key={index} className={styles.filterOption}>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className={styles.listings}>
            <div className={`${styles.infoBlock} ${styles.fullCard}`}>
              <div className={styles.infoContent}>
                <p className={styles.infoText}>{t.infoText}</p>
              </div>
            </div>

            {t.workItems.map((item, i) => (
              <div 
                key={i} 
                className={styles.card}
                onClick={() => setSelectedImg(item.img)}
                style={{ cursor: 'pointer' }}
              >
                <div className={styles.cardImageWrapper}>
                  <img src={item.img} className={styles.cardImage} alt={item.title} />
                </div>

                <div className="flex flex-col gap-6">
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>{item.title}</h2>
                  </div>
                  <div className={styles.cardGrid}>
                    <div className={styles.metaBlock}>
                       <span className={styles.metaValue}>{item.industry}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* FIXED: Passing currentLang to Footer */}
           <Footer currentLang={currentLang} />
    </main>
  );
}