"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./page.module.css";

export default function BrandingContent() {
      const [currentLang, setCurrentLang] = useState("EN");
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
                        { title: "Discovery & Research", img: "/brand1.png" },
                        { title: "Vantage Studio", img: "/brand2.png" },
                        { title: "Zenith Creative", img: "/brand3.png" },
                        { title: "Arcane Lab", img: "/brand4.png" },
                        { title: "Nexus Collective", img: "/brand5.png" },
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
                        { title: "الاستكشاف والبحث", img: "/brand1.png" },
                        { title: "فانتاج ستوديو", img: "/brand2.png" },
                        { title: "زنيث كريتيف", img: "/brand3.png" },
                        { title: "أركين لاب", img: "/brand4.png" },
                        { title: "نيكسوس كوليكتيف", img: "/brand5.png" },
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
                                    <img src={selectedImg} className={styles.fullImage} alt="Brand Preview" />
                              </div>
                        </div>
                  )}

                  <div className={styles.heroSection}>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                              <div className="md:col-span-8 lg:col-span-7">
                                    <h1 className={styles.heroTitle}>{t.heroTitle}</h1>
                                    <p className={styles.heroDesc}>
                                          <span className={styles.heroDescHighlight}>{t.heroDescHighlight}</span>
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
