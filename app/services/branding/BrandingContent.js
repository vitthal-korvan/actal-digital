"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./page.module.css";

export default function BrandingContent() {
      const [currentLang, setCurrentLang] = useState("EN");
      const [selectedImg, setSelectedImg] = useState(null);

      const translations = {
            EN: {
                  heroTitle: "Branding & Identity",
                  heroDescHighlight: "More than a logo. A lasting impression.",
                  heroDescSub: "We craft identities that resonate and endure.",
                  expertiseTitle: "Our Expertise",
                  infoText: "Building a brand is about storytelling. We help you find your voice.",
                  services: [
                        "Brand Strategy", "Visual Identity", "Logo Design",
                        "Brand Guidelines", "Rebranding", "Art Direction",
                        "Packaging Design", "Naming", "Brand Audit"
                  ],
                  workItems: [
                        { title: "Minimalist Identity", industry: "Tech Startup", img: "/work1.png" },
                        { title: "Luxury Rebrand", industry: "Fashion", img: "/work2.png" },
                        { title: "Corporate System", industry: "Finance", img: "/work3.png" },
                        { title: "Visual Language", industry: "Healthcare", img: "/work4.png" },
                        { title: "Packaging", industry: "Food & Bev", img: "/work5.png" },
                        { title: "Brand Guidelines", industry: "SaaS", img: "/work6.png" },
                  ]
            },
            AR: {
                  heroTitle: "العلامة التجارية والهوية",
                  heroDescHighlight: "أكثر من مجرد شعار. انطباع دائم.",
                  heroDescSub: "نصنع هويات تتردد صداها وتدوم.",
                  expertiseTitle: "خبراتنا",
                  infoText: "بناء العلامة التجارية يدور حول سرد القصص. نساعدك في العثور على صوتك.",
                  services: [
                        "استراتيجية العلامة التجارية", "الهوية البصرية", "تصميم الشعار",
                        "إرشادات العلامة التجارية", "إعادة تسمية العلامة التجارية", "الإخراج الفني",
                        "تصميم التغليف", "التسمية", "تدقيق العلامة التجارية"
                  ],
                  workItems: [
                        { title: "هوية مبسطة", industry: "تكنولوجيا", img: "/work1.png" },
                        { title: "إعادة تسمية فاخرة", industry: "أزياء", img: "/work2.png" },
                        { title: "نظام شركات", industry: "مالية", img: "/work3.png" },
                        { title: "لغة بصرية", industry: "رعاية صحية", img: "/work4.png" },
                        { title: "تغليف", industry: "أغذية ومشروبات", img: "/work5.png" },
                        { title: "إرشادات العلامة التجارية", industry: "برمجيات", img: "/work6.png" },
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

                  <Footer currentLang={currentLang} />
            </main>
      );
}
