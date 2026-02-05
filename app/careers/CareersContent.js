"use client";
import { ArrowRight, Clock, MapPin, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useLanguage } from "../context/LanguageContext";
import styles from "./page.module.css";

export default function CareersContent() {
      const { currentLang } = useLanguage();
      const [activeJob, setActiveJob] = useState(null);

      const translations = {
            EN: {
                  heroTitle: "Join Our",
                  heroHighlight: "Team",
                  heroSubtext: "Work with a digital agency focused on clarity and senior execution.",
                  jobOverview: "Job Overview:",
                  responsibilities: "Key Responsibilities:",
                  skills: "Skills Required:",
                  applyBtn: "Apply Now",
                  jobs: [
                        {
                              title: "Business Development",
                              location: "Bandra, Mumbai",
                              type: "Full-time",
                              overview: "We are seeking a driven Business Development Executive to help grow our client base and expand our market presence.",
                              resList: [
                                    "Identify and pursue new business opportunities.",
                                    "Build and maintain strong client relationships.",
                                    "Prepare and present business proposals and pitch decks.",
                                    "Achieve monthly and quarterly sales targets."
                              ],
                              skillList: ["1–3 years experience in Sales", "Strong communication skills", "Digital marketing knowledge"]
                        },
                        {
                              title: "Social Media Manager",
                              location: "Bandra, Mumbai",
                              type: "Full-time",
                              overview: "Creative Social Media Manager to manage clients' online presence and engage with communities.",
                              resList: [
                                    "Develop and implement social media strategies.",
                                    "Create engaging content calendars.",
                                    "Monitor social media analytics and reporting."
                              ],
                              skillList: ["Brand management experience", "Excellent copywriting", "Proficiency with SMM tools"]
                        },
                        {
                              title: "Graphic Designer",
                              location: "Bandra, Mumbai",
                              type: "Full-time",
                              overview: "Visual storyteller to create stunning designs that align with clients' brand identities.",
                              resList: [
                                    "Create visual concepts for web and social media.",
                                    "Ensure brand consistency across projects.",
                                    "Collaborate with marketing teams for assets."
                              ],
                              skillList: ["Adobe Creative Suite (Ps, Ai)", "Strong creative portfolio", "Ability to meet tight deadlines"]
                        },
                        {
                              title: "Video Editor",
                              location: "Bandra, Mumbai",
                              type: "Full-time",
                              overview: "Skilled Video Editor to transform raw footage into high-quality visual stories.",
                              resList: [
                                    "Edit videos for social media and advertisements.",
                                    "Incorporate motion graphics and sound design.",
                                    "Maintain a clear and engaging narrative style."
                              ],
                              skillList: ["Premiere Pro / After Effects", "Understanding of pacing & music", "Color grading skills"]
                        },
                        {
                              title: "App Developer",
                              location: "Bandra, Mumbai",
                              type: "Full-time",
                              overview: "Full-stack Developer to build and maintain high-performance mobile applications.",
                              resList: [
                                    "Develop cross-platform apps (React Native/Flutter).",
                                    "Integrate REST APIs and backend services.",
                                    "Fix bugs and optimize app performance."
                              ],
                              skillList: ["React Native or Flutter", "State management (Redux/Zustand)", "API Integration"]
                        }
                  ]
            },
            AR: {
                  heroTitle: "انضم إلى",
                  heroHighlight: "فريقنا",
                  heroSubtext: "اعمل مع وكالة رقمية تركز على الوضوح والتنفيذ الاحترافي.",
                  jobOverview: "نبذة عن الوظيفة:",
                  responsibilities: "المسؤوليات الرئيسية:",
                  skills: "المهارات المطلوبة:",
                  applyBtn: "قدم الآن",
                  jobs: [
                        {
                              title: "تطوير الأعمال",
                              location: "باندرا، مومباي",
                              type: "دوام كامل",
                              overview: "نحن نبحث عن مسؤول تطوير أعمال طموح للمساعدة في تنمية قاعدة عملائنا وتوسيع حضورنا في السوق.",
                              resList: [
                                    "تحديد ومتابعة فرص العمل الجديدة.",
                                    "بناء وتحسين علاقات قوية مع العملاء.",
                                    "إعداد وتقديم العروض التجارية.",
                                    "تحقيق أهداف المبيعات الشهرية والربع سنوية."
                              ],
                              skillList: ["خبرة 1-3 سنوات في المبيعات", "مهارات تواصل قوية", "معرفة بالتسويق الرقمي"]
                        },
                        {
                              title: "مدير وسائل التواصل الاجتماعي",
                              location: "باندرا، مومباي",
                              type: "دوام كامل",
                              overview: "مدير محتوى مبدع لإدارة التواجد الرقمي للعملاء والتفاعل مع المجتمعات.",
                              resList: [
                                    "تطوير وتنفيذ استراتيجيات التواصل الاجتماعي.",
                                    "إنشاء تقويم محتوى جذاب.",
                                    "مراقبة تحليلات وسائل التواصل وإعداد التقارير."
                              ],
                              skillList: ["خبرة في إدارة العلامات التجارية", "مهارات كتابة إعلانية ممتازة", "إتقان أدوات SMM"]
                        },
                        {
                              title: "مصمم جرافيك",
                              location: "باندرا، مومباي",
                              type: "دوام كامل",
                              overview: "راوٍ بصري لإنشاء تصميمات مذهلة تتماشى مع هويات العلامات التجارية للعملاء.",
                              resList: [
                                    "إنشاء مفاهيم بصرية للويب ووسائل التواصل.",
                                    "ضمان اتساق العلامة التجارية عبر المشاريع.",
                                    "التعاون مع فرق التسويق للأصول البصرية."
                              ],
                              skillList: ["Adobe Creative Suite (Ps, Ai)", "ملف أعمال إبداعي قوي", "القدرة على الالتزام بالمواعيد النهائية"]
                        },
                        {
                              title: "محرر فيديو",
                              location: "باندرا، مومباي",
                              type: "دوام كامل",
                              overview: "محرر فيديو ماهر لتحويل اللقطات الخام إلى قصص بصرية عالية الجودة.",
                              resList: [
                                    "تحرير مقاطع الفيديو لوسائل التواصل والإعلانات.",
                                    "دمج الرسوم المتحركة والتصميم الصوتي.",
                                    "الحفاظ على أسلوب سردي واضح وجذاب."
                              ],
                              skillList: ["Premiere Pro / After Effects", "فهم الإيقاع والموسيقى", "مهارات تصحيح الألوان"]
                        },
                        {
                              title: "مطور تطبيقات",
                              location: "باندرا، مومباي",
                              type: "دوام كامل",
                              overview: "مطور Full-stack لبناء وصيانة تطبيقات محمولة عالية الأداء.",
                              resList: [
                                    "تطوير تطبيقات متعددة المنصات (React Native/Flutter).",
                                    "دمج واجهات برمجة التطبيقات REST والخدمات الخلفية.",
                                    "إصلاح الأخطاء وتحسين أداء التطبيقات."
                              ],
                              skillList: ["React Native أو Flutter", "إدارة الحالة (Redux/Zustand)", "دمج APIs"]
                        }
                  ]
            }
      };

      const t = translations[currentLang] || translations["EN"];

      const toggleJob = (index) => {
            setActiveJob(activeJob === index ? null : index);
      };

      return (
            <main className={styles.main}>
                  <Navbar />

                  <section className={styles.careerHero}>
                        <div className={styles.heroContainer}>
                              <div className={styles.heroContent}>
                                    <h1 className={styles.joinTitle}>
                                          {t.heroTitle} <br className={styles.mobileBr} />
                                          <span className={styles.teamHighlight}>{t.heroHighlight}</span>
                                    </h1>
                                    <p className={styles.heroSubtext}>{t.heroSubtext}</p>
                              </div>
                        </div>
                  </section>

                  <section className={styles.jobSection}>
                        <div className={styles.jobContainer}>
                              {t.jobs.map((job, index) => (
                                    <div key={index} className={`${styles.jobWrapper} ${activeJob === index ? styles.active : ""}`}>
                                          <div className={styles.jobHeader} onClick={() => toggleJob(index)}>
                                                <span className={styles.jobTitle}>{job.title}</span>
                                                <div className={styles.iconCircle}>
                                                      {activeJob === index ? <Minus size={18} /> : <Plus size={18} />}
                                                </div>
                                          </div>

                                          {activeJob === index && (
                                                <div className={styles.jobDetails}>
                                                      <div className={styles.metaInfo}>
                                                            <span><MapPin size={16} /> {job.location}</span>
                                                            <span><Clock size={16} /> {job.type}</span>
                                                      </div>

                                                      <div className={styles.contentGrid}>
                                                            <div className={styles.detailSection}>
                                                                  <h4>{t.jobOverview}</h4>
                                                                  <p>{job.overview}</p>
                                                            </div>

                                                            <div className={styles.detailSection}>
                                                                  <h4>{t.responsibilities}</h4>
                                                                  <ul>
                                                                        {job.resList.map((res, i) => <li key={i}>{res}</li>)}
                                                                  </ul>
                                                            </div>

                                                            <div className={styles.detailSection}>
                                                                  <h4>{t.skills}</h4>
                                                                  <ul>
                                                                        {job.skillList.map((skill, i) => <li key={i}>{skill}</li>)}
                                                                  </ul>
                                                            </div>
                                                      </div>

                                                      <Link href="/contact" className={styles.innerApplyBtn}>
                                                            {t.applyBtn} <ArrowRight size={18} />
                                                      </Link>
                                                </div>
                                          )}
                                    </div>
                              ))}
                        </div>
                  </section>

                  {/* FIXED: Footer uses context internally */}
                  <Footer />
            </main>
      );
}
