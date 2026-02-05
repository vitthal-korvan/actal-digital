"use client";

import { X } from "lucide-react";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./page.module.css";

export default function SocialMediaContent() {
      const [currentLang, setCurrentLang] = useState("EN");
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
                        { title: "Stanford Capital", img: "/4.jpg" },
                        { title: "Poonam Bakery", img: "/5.jpg" },
                        { title: "Bombay Trading Company", img: "/6.jpg" },
                        { title: "Sana Bakers", img: "/7.jpg" },
                        { title: "Unlisted Equity", img: "/8.jpg" },
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
                        { title: "ستانفورد كابيتال", img: "/4.jpg" },
                        { title: "مخبز بونام", img: "/5.jpg" },
                        { title: "شركة بومباي التجارية", img: "/6.jpg" },
                        { title: "سناء بيكرز", img: "/7.jpg" },
                        { title: "الأسهم غير المدرجة", img: "/8.jpg" },
                  ]
            }
      };

      const t = translations[currentLang] || translations["EN"];

      const openModal = (imgSrc) => setSelectedImg(imgSrc);
      const closeModal = () => setSelectedImg(null);

      return (
            <main className={styles.main}>
                  <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />

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
                                                onClick={() => openModal(item.img)}
                                                style={{ cursor: 'pointer' }}
                                          >
                                                <div className={styles.cardImageWrapper}>
                                                      <img src={item.img} className={styles.cardImage} alt={item.title} />
                                                </div>

                                                <div className="flex flex-col gap-6">
                                                      <div className={styles.cardHeader}>
                                                            <h2 className={styles.cardTitle}>{item.title}</h2>
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
