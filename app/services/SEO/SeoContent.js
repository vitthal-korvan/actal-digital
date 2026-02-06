"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./page.module.css";

export default function SeoContent() {
      const { language } = useLanguage();
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
                  infoText: "SEO is a long-term game. Our strategies are built for sustainable growth.",
                  services: [
                        "Organic Growth", "Search Dominance", "Technical Audit",
                        "Local Visibility", "Backlink Strategy", "Content Authority"
                  ],
                  metaLabels: { industry: "Industry" }
            },
            AR: {
                  heroTitle: "تحسين محركات البحث",
                  heroDescHighlight: "كن مرئياً للأشخاص المهمين.",
                  heroDescSub: "نحن نبني استراتيجيات سيو تقود الزيارات، السلطة، والإيرادات.",
                  expertiseTitle: "خبراتنا",
                  infoText: "تحسين محركات البحث هو لعبة طويلة الأمد. استراتيجياتنا مبنية للنمو المستدام.",
                  services: [
                        "النمو العضوي", "السيطرة على البحث", "التدقيق التقني",
                        "الظهور المحلي", "استراتيجية الروابط", "سلطة المحتوى"
                  ],
                  metaLabels: { industry: "الصناعة" }
            }
      };

      const t = translations[language] || translations["EN"];

      const workItems = [
            { title: "Organic Growth", industry: "E-commerce", img: "/images/services/seo/seo-growth.png" },
            { title: "Search Dominance", industry: "SaaS", img: "/images/services/seo/seo-dominance.png" },
            { title: "Technical Audit", industry: "Corporate", img: "/images/services/seo/seo-audit.png" },
            { title: "Local Visibility", industry: "Retail", img: "/images/services/seo/seo-local.png" },
            { title: "Backlink Strategy", industry: "Tech Blog", img: "/images/services/seo/seo-backlinks.png" },
            { title: "Content Authority", industry: "Education", img: "/images/services/seo/seo-content.png" },
      ];

      return (
            <main className={styles.main}>
                  <Navbar />

                  {/* Pop-up Modal */}
                  {selectedImg && (
                        <div className={styles.modalOverlay} onClick={() => setSelectedImg(null)}>
                              <button className={styles.closeBtn}>
                                    <ArrowUpRight size={32} color="white" />
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

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                          {workItems.map((item, i) => (
                                                <div
                                                      key={i}
                                                      className={styles.card}
                                                      onClick={() => setSelectedImg(item.img)}
                                                      style={{ cursor: 'pointer' }}
                                                >
                                                      <div className={styles.cardImageWrapper}>
                                                            <img src={item.img} className={styles.cardImage} alt={item.title} />
                                                      </div>
                                                      <div className="flex flex-col gap-6 p-6">
                                                            <div className={styles.cardHeader}>
                                                                  <h2 className={styles.cardTitle}>{item.title}</h2>
                                                            </div>
                                                            <div className={styles.cardGrid}>
                                                                  <div className={styles.metaBlock}>
                                                                        <span className={styles.metaLabel}>{t.metaLabels.industry}</span>
                                                                        <span className={styles.metaValue}>{item.industry}</span>
                                                                  </div>
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
