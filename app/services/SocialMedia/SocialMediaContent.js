"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./page.module.css";

export default function SocialMediaContent() {
      const { language } = useLanguage();
      const [selectedImg, setSelectedImg] = useState(null);

      const translations = {
            EN: {
                  heroTitle: "Social Media",
                  heroDescHighlight: "Building engaged communities. Driving viral growth for your brand.",
                  heroDescSub: "Turning followers into loyal customers.",
                  expertiseTitle: "Our Expertise",
                  infoText: "Each engagement below represents a close collaboration, typically spanning 4–12 weeks.",
                  services: [
                        "Social Media Strategy & Planning", "Content Creation & Curation", "Community Management",
                        "Social Media Advertising", "Influencer Collaboration", "Social Media Analytics & Reporting",
                        "Viral Campaigns & Trends", "Profile Optimization", "Online Reputation Management (ORM)"
                  ],
                  workItems: [
                        { title: "Stanford Capital", img: "/images/services/social/social-stanford.jpg" },
                        { title: "Poonam Bakery", img: "/images/services/social/social-poonam.jpg" },
                        { title: "Bombay Trading Company", img: "/images/services/social/social-bombay.jpg" },
                        { title: "Sana Bakers", img: "/images/services/social/social-sana.jpg" },
                        { title: "Unlisted Equity", img: "/images/services/social/social-unlisted.jpg" },
                  ]
            },
            AR: {
                  heroTitle: "وسائل التواصل الاجتماعي",
                  heroDescHighlight: "بناء مجتمعات متفاعلة. دفع النمو الفيروسي لعلامتك التجارية.",
                  heroDescSub: "تحويل المتابعين إلى عملاء مخلصين.",
                  expertiseTitle: "خبراتنا",
                  infoText: "يمثل كل مشروع أدناه تعاوناً وثيقاً، يمتد عادةً من 4 إلى 12 أسبوعاً.",
                  services: [
                        "استراتيجية وتخطيط وسائل التواصل", "صناعة وتنظيم المحتوى", "إدارة المجتمعات",
                        "إعلانات وسائل التواصل الاجتماعي", "التعاون مع المؤثرين", "التحليلات والتقارير الاجتماعية",
                        "الحملات الفيروسية والترندات", "تحسين الملفات الشخصية", "إدارة السمعة عبر الإنترنت (ORM)"
                  ],
                  workItems: [
                        { title: "ستانفورد كابيتال", img: "/images/services/social/social-stanford.jpg" },
                        { title: "مخبز بونام", img: "/images/services/social/social-poonam.jpg" },
                        { title: "شركة بومباي التجارية", img: "/images/services/social/social-bombay.jpg" },
                        { title: "سناء بيكرز", img: "/images/services/social/social-sana.jpg" },
                        { title: "الأسهم غير المدرجة", img: "/images/services/social/social-unlisted.jpg" },
                  ]
            }
      };

      const t = translations[language] || translations["EN"];

      const openModal = (imgSrc) => setSelectedImg(imgSrc);
      const closeModal = () => setSelectedImg(null);

      return (
            <main className={styles.main}>
                  {/* Navbar with props */}
                  <Navbar />

                  {selectedImg && (
                        <div className={styles.modalOverlay} onClick={closeModal}>
                              <button className={styles.closeBtn} onClick={closeModal}>
                                    <X size={32} color="white" />
                              </button>
                              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                                    <img src={selectedImg} className={styles.fullImage} alt="Social Work Preview" />
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
                                    <div className={`${styles.infoBlock} ${styles.fullCard} `}>
                                          <div className={styles.infoContent}>
                                                <p className={styles.infoText}>{t.infoText}</p>
                                          </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                          {t.workItems.map((item, i) => (
                                                <div key={i} className={styles.card}>
                                                      <div className={styles.cardImageWrapper}>
                                                            <img src={item.img} className={styles.cardImage} alt={item.title} />
                                                      </div>
                                                      <div className="flex flex-col gap-6 p-6">
                                                            <div className={styles.cardHeader}>
                                                                  <h2 className={styles.cardTitle}>{item.title}</h2>
                                                            </div>
                                                      </div>
                                                </div>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>

                  <Footer />
            </main>
      );
}
