"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./page.module.css";

export default function CreativeContentContent() {
      const { language } = useLanguage();
      const [selectedImg, setSelectedImg] = useState(null);

      const translations = {
            // ... keep existing translations ...
            EN: {
                  heroTitle: "Creative Content",
                  heroDescHighlight: "Crafting compelling stories. Content that captures attention.",
                  heroDescSub: "Building trust and connection with your audience.",
                  expertiseTitle: "Our Expertise",
                  infoText: "Each engagement below represents a close collaboration, typically spanning 4–12 weeks.",
                  services: [
                        "Blog & Article Writing", "Website & Landing Page Content", "Social Media Content",
                        "Video Scripts & Storyboarding", "Copywriting & Brand Messaging", "Email & Newsletter Content",
                        "Infographics & Visual Content", "Case Studies & Whitepapers", "Content Strategy & Planning",
                        "SEO-Optimized Content"
                  ],
                  workItems: [
                        { title: "The Urban Story", industry: "Brand Content", img: "/images/services/creative/creative-story.png", fullWidth: true },
                        { title: "Digital Horizon", industry: "Social Media", img: "/images/services/creative/creative-horizon.png" },
                        { title: "Modern Minimalist", industry: "Publishing", img: "/images/services/creative/creative-modern.png" },
                        { title: "Creative Pulse", industry: "Marketing", img: "/images/services/creative/creative-pulse.png" },
                        { title: "Video Script", industry: "Marketing", img: "/images/services/creative/creative-video.png" },
                  ]
            },
            AR: {
                  heroTitle: "المحتوى الإبداعي",
                  heroDescHighlight: "صياغة قصص مقنعة. محتوى يجذب الانتباه.",
                  heroDescSub: "بناء الثقة والتواصل مع جمهورك.",
                  expertiseTitle: "خبراتنا",
                  infoText: "يمثل كل مشروع أدناه تعاوناً وثيقاً، يمتد عادةً من 4 إلى 12 أسبوعاً.",
                  services: [
                        "كتابة المدونات والمقالات", "محتوى المواقع وصفحات الهبوط", "محتوى وسائل التواصل",
                        "سيناريوهات الفيديو", "كتابة الإعلانات والرسائل التسويقية", "محتوى البريد الإلكتروني",
                        "الإنفوجرافيك والمحتوى المرئي", "دراسات الحالة والتقارير", "استراتيجية وتخطيط المحتوى",
                        "محتوى متوافق مع محركات البحث"
                  ],
                  workItems: [
                        { title: "قصة المدينة", industry: "محتوى العلامة التجارية", img: "/images/services/creative/creative-story.png", fullWidth: true },
                        { title: "الأفق الرقمي", industry: "وسائل التواصل", img: "/images/services/creative/creative-horizon.png" },
                        { title: "العصر الحديث", industry: "النشر", img: "/images/services/creative/creative-modern.png" },
                        { title: "النبض الإبداعي", industry: "التسويق", img: "/images/services/creative/creative-pulse.png" },
                        { title: "سيناريو فيديو", industry: "التسويق", img: "/images/services/creative/creative-video.png" },
                  ]
            }
      };

      const t = translations[language] || translations["EN"];

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
                                                      <div key={index} className={styles.filterOption} style={{ cursor: 'default', pointerEvents: 'none', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0.75rem 0', color: 'var(--foreground)' }}>
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
                                                className={`${styles.card} ${item.fullWidth ? styles.fullCard : ''}`}
                                                onClick={() => setSelectedImg(item.img)}
                                                style={{ cursor: 'pointer' }}
                                          >
                                                <div className={styles.cardImageWrapper}>
                                                      <img src={item.img} className={styles.cardImage} alt={item.title} />
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
