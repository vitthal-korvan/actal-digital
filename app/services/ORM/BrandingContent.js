"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./page.module.css";

export default function BrandingContent() {
      const { language } = useLanguage();
      const [selectedImg, setSelectedImg] = useState(null);

      const translations = {
            EN: {
                  heroTitle: "Branding",
                  heroDescHighlight: "We start by understanding your business, market, and audience to uncover what makes your brand unique.",
                  expertiseTitle: "Our Expertise",
                  infoText: "Each engagement below represents a close collaboration, typically spanning 4–12 weeks.",
                  services: [
                        "Discovery & Research", "Brand Strategy Definition", "Positioning & Messaging",
                        "Visual Identity Design", "Brand Guidelines Creation", "Touchpoint Application",
                        "Launch & Implementation", "Review, Measure & Refine"
                  ],
                  workItems: [
                        { title: "Discovery & Research", img: "/images/services/branding/branding-discovery.png" },
                        { title: "Vantage Studio", img: "/images/services/branding/branding-vantage.png" },
                        { title: "Zenith Creative", img: "/images/services/branding/branding-zenith.png" },
                        { title: "Arcane Lab", img: "/images/services/branding/branding-arcane.png" },
                        { title: "Nexus Collective", img: "/images/services/branding/branding-nexus.png" },
                  ]
            },
            AR: {
                  heroTitle: "العلامة التجارية",
                  heroDescHighlight: "نبدأ بفهم عملك وسوقك وجمهورك للكشف عن ما يجعل علامتك التجارية فريدة من نوعها.",
                  expertiseTitle: "خبراتنا",
                  infoText: "يمثل كل مشروع أدناه تعاوناً وثيقاً، يمتد عادةً من 4 إلى 12 أسبوعاً.",
                  services: [
                        "الاستكشاف والبحث", "تحديد استراتيجية العلامة", "تحديد المكانة والرسائل",
                        "تصميم الهوية البصرية", "إنشاء أدلة العلامة التجارية", "تطبيق نقاط الاتصال",
                        "الإطلاق والتنفيذ", "المراجعة والقياس والتحسين"
                  ],
                  workItems: [
                        { title: "الاستكشاف والبحث", img: "/images/services/branding/branding-discovery.png" },
                        { title: "فانتاج ستوديو", img: "/images/services/branding/branding-vantage.png" },
                        { title: "زنيث كريتيف", img: "/images/services/branding/branding-zenith.png" },
                        { title: "أركين لاب", img: "/images/services/branding/branding-arcane.png" },
                        { title: "نيكسوس كوليكتيف", img: "/images/services/branding/branding-nexus.png" },
                  ]
            }
      };

      const t = translations[currentLang] || translations["EN"];

      return (
            <main className={styles.main}>
                  <Navbar />

                  {/* Pop-up Image Modal */}
                  {selectedImg && (
                        <div className={styles.modalOverlay} onClick={() => setSelectedImg(null)}>
                              <button className={styles.closeBtn}>
                                    <X size={32} color="white" />
                              </button>
                              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                                    <img src={selectedImg} className={styles.fullImage} alt="Brand Preview" />
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

                                                <div className={styles.cardHeader}>
                                                      <h2 className={styles.cardTitle}>{item.title}</h2>
                                                      <ArrowUpRight size={24} className={styles.cardArrow} />
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>

                  <Footer currentLang={currentLang} />
            </main>
      );
}
