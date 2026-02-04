"use client";

import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Footer from "../../components/Footer/Footer"; 
import Navbar from "../../components/Navbar/Navbar"; 
import styles from "./page.module.css";

export default function GraphicDesignPage() {
  const [currentLang, setCurrentLang] = useState("EN");
  const [selectedImg, setSelectedImg] = useState(null);

  const translations = {
    EN: {
      heroTitle: "Graphic Design",
      heroDescHighlight: "Creating premium visuals. Designs that define your brand identity.",
      heroDescSub: "Making your brand stand out everywhere.",
      expertiseTitle: "Our Expertise",
      infoText: "Each engagement below represents a close collaboration, typically spanning 4–12 weeks.",
      services: [
        "Logo & Brand Identity Design", "Marketing & Promotional Materials", "Social Media Graphics",
        "Infographics & Data Visualization", "Brochures, Flyers & Posters", "Packaging Design",
        "Presentation & Pitch Deck Design", "UI/UX Design Elements", "Motion Graphics & Animation",
        "Print & Digital Design Solutions"
      ],
      workItems: [
        { title: "Logo Design", industry: "Corporate", img: "/9.jpg" },
        { title: "Packaging Design", industry: "FMCG", img: "/10.jpg" },
        { title: "Marketing Collaterals", industry: "Real Estate", img: "/11.jpg" },
        { title: "Social Media Kits", industry: "Lifestyle", img: "/12.jpg" },
        { title: "Social Media Posts", industry: "Startup", img: "/13.jpg" },
      ]
    },
    AR: {
      heroTitle: "التصميم الجرافيكي",
      heroDescHighlight: "إنشاء مرئيات متميزة. تصاميم تحدد هوية علامتك التجارية.",
      heroDescSub: "جعل علامتك التجارية تبرز في كل مكان.",
      expertiseTitle: "خبراتنا",
      infoText: "يمثل كل مشروع أدناه تعاوناً وثيقاً، يمتد عادةً من 4 إلى 12 أسبوعاً.",
      services: [
        "تصميم الهوية والشعار", "المواد التسويقية والترويجية", "رسومات وسائل التواصل",
        "الإنفوجرافيك وتصور البيانات", "الكتيبات والملصقات", "تصميم التغليف",
        "تصميم العروض التقديمية", "عناصر تصميم واجهة المستخدم", "الموشن جرافيك والتحريك",
        "حلول التصميم المطبوع والرقمي"
      ],
      workItems: [
        { title: "تصميم الشعار", industry: "الشركات", img: "/9.jpg" },
        { title: "تصميم التغليف", industry: "السلع الاستهلاكية", img: "/10.jpg" },
        { title: "المواد التسويقية", industry: "العقارات", img: "/11.jpg" },
        { title: "أطقم الوسائط الاجتماعية", industry: "أسلوب الحياة", img: "/12.jpg" },
        { title: "منشورات الوسائط الاجتماعية", industry: "شركة ناشئة", img: "/13.jpg" },
      ]
    }
  };

  const t = translations[currentLang] || translations["EN"];

  return (
    <main className={styles.main}>
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />

      {/* Pop-up Image Modal */}
      {selectedImg && (
        <div className={styles.modalOverlay} onClick={() => setSelectedImg(null)}>
          <button className={styles.closeBtn}>
            <X size={32} color="white" />
          </button>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg} className={styles.fullImage} alt="Design Preview" />
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
          
          <div className={styles.sidebar}>
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
          </div>

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
                    <ArrowUpRight size={24} className={styles.cardArrow} />
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