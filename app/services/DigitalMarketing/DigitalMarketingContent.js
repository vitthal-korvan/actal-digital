"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./page.module.css";

export default function DigitalMarketingContent() {
      const { language } = useLanguage();
      const [selectedImg, setSelectedImg] = useState(null);

      const translations = {
            // ... keep existing translations ...
            EN: {
                  heroTitle: "Digital Marketing",
                  heroDescHighlight: "Leverage data-driven strategies. Optimize every campaign for results.",
                  heroDescSub: "Maximize your ROI with precision.",
                  expertiseTitle: "Our Expertise",
                  infoText: "Each campaign represents a tailored strategy for growth and engagement.",
                  featured: "Featured",
                  services: [
                        "Social Media Marketing (SMM)", "Search Engine Marketing (SEM)", "Content Marketing",
                        "Influencer Marketing", "Affiliate Marketing", "Marketing Analytics",
                        "Video Marketing", "Conversion Rate Optimization (CRO)"
                  ],
                  workItems: [
                        { title: "Social Growth Campaign", industry: "Brand Strategy", img: "/images/services/social/social-growth.png", featured: true, fullWidth: true },
                        { title: "Content Excellence", industry: "Social Media", img: "/images/services/social/social-content.png" },
                        { title: "Engagement Booster", industry: "Marketing", img: "/images/services/social/social-engagement.png" },
                        { title: "Digital Presence", industry: "SEO / SEM", img: "/images/services/social/social-presence.png" },
                        { title: "Creative Visuals", industry: "Design", img: "/images/services/social/social-visuals.png" },
                  ]
            },
            AR: {
                  heroTitle: "التسويق الرقمي",
                  heroDescHighlight: "استفد من الاستراتيجيات القائمة على البيانات. تحسين كل حملة للنتائج.",
                  heroDescSub: "ضاعف عائد الاستثمار بدقة متناهية.",
                  expertiseTitle: "خبراتنا",
                  infoText: "تمثل كل حملة استراتيجية مخصصة للنمو والتفاعل.",
                  featured: "متميز",
                  services: [
                        "التسويق عبر وسائل التواصل الاجتماعي", "التسويق عبر محركات البحث", "تسويق المحتوى",
                        "التسويق عبر المؤثرين", "التسويق بالعمولة", "تحليلات التسويق",
                        "التسويق عبر الفيديو", "تحسين معدل التحويل"
                  ],
                  workItems: [
                        { title: "حملة النمو الاجتماعي", industry: "استراتيجية العلامة التجارية", img: "/images/services/social/social-growth.png", featured: true, fullWidth: true },
                        { title: "التميز في المحتوى", industry: "وسائل التواصل الاجتماعي", img: "/images/services/social/social-content.png" },
                        { title: "معزز التفاعل", industry: "التسويق", img: "/images/services/social/social-engagement.png" },
                        { title: "التواجد الرقمي", industry: "تحسين محركات البحث", img: "/images/services/social/social-presence.png" },
                        { title: "المرئيات الإبداعية", industry: "التصميم", img: "/images/services/social/social-visuals.png" },
                  ]
            }
      };

      const t = translations[language] || translations["EN"];

      return (
            <main className={styles.main}>
                  <Navbar />

                  {selectedImg && (
                        <div className={styles.modalOverlay} onClick={() => setSelectedImg(null)}>
                              <button className={styles.closeBtn}><X size={32} color="white" /></button>
                              <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                                    <img src={selectedImg} className={styles.fullImage} alt="Preview" />
                              </div>
                        </div>
                  )}

                  <section className={styles.heroSection}>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                              <div className="md:col-span-8 lg:col-span-7">
                                    <h1 className={styles.heroTitle}>{t.heroTitle}</h1>
                                    <p className={styles.heroDesc}>
                                          <span className={styles.heroDescHighlight}>{t.heroDescHighlight}</span> {t.heroDescSub}
                                    </p>
                              </div>
                        </div>
                  </section>

                  <div className={styles.contentWrapper}>
                        <div className={styles.gridContainer}>
                              <aside className={styles.sidebar}>
                                    <div className="space-y-6">
                                          <div className={styles.filterLabel}>{t.expertiseTitle}</div>
                                          <div className="flex flex-col">
                                                {t.services.map((service, index) => (
                                                      <div key={index} className={styles.filterOption} style={{ cursor: 'default', pointerEvents: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.75rem 0', color: 'var(--foreground)' }}>{service}</div>
                                                ))}
                                          </div>
                                    </div>
                              </aside>

                              <div className={styles.listings}>
                                    <div className={`${styles.infoBlock} ${styles.fullCard}`}>
                                          <p className={styles.infoText}>{t.infoText}</p>
                                    </div>

                                    {t.workItems.map((item, i) => (
                                          <div key={i} className={`${styles.card} ${item.fullWidth ? styles.fullCard : ''}`}
                                                onClick={() => setSelectedImg(item.img)} style={{ cursor: 'pointer' }}>
                                                <div className={styles.cardImageWrapper}>
                                                      <img src={item.img} className={styles.cardImage} alt={item.title} />
                                                      {item.featured && <div className={styles.featuredBadge}>{t.featured}</div>}
                                                </div>
                                                <div className={styles.cardFooter}>
                                                      <div className={styles.textGroup}>
                                                            <h2 className={styles.cardTitle}>{item.title}</h2>
                                                            <span className={styles.cardSubTitle}>{item.industry}</span>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </div>

                  <Footer />
            </main>
      );
}
