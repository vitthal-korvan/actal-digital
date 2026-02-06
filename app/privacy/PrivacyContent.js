"use client";
import { MessageCircle, Phone } from "lucide-react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useLanguage } from "../context/LanguageContext";
import styles from './privacy.module.css';

export default function PrivacyContent() {
      const { language } = useLanguage();

      const translations = {
            EN: {
                  label: "DATA PROTECTION",
                  title: "Privacy Policy",
                  intro: "This policy explains how Actal Digital collects, uses, and protects any information you provide when using our website.",
                  sections: [
                        {
                              title: "Our Commitment",
                              content: "Actal Digital is committed to protecting your privacy. If we ask you to provide any information that can identify you, you can be confident that it will only be used in accordance with this privacy policy.",
                              date: "Effective from: January 2026"
                        },
                        {
                              title: "What We Collect",
                              content: "We may ask you to provide the following information:",
                              list: [
                                    "Name and job title",
                                    "Contact details including email address",
                                    "Demographic information (postcode, preferences, and interests)",
                                    "Other information relevant to customer surveys and/or offers"
                              ]
                        },
                        {
                              title: "How We Use Your Information",
                              content: "We collect this information to better understand your needs and provide you with improved services, specifically for internal record keeping and improving our products."
                        },
                        {
                              title: "Security",
                              content: "We take your privacy seriously and have implemented appropriate physical, electronic, and managerial safeguards to protect your information from unauthorized access or disclosure."
                        },
                        {
                              title: "Controlling Your Personal Information",
                              content: "We will never sell, share, or lease your personal information to third parties without your consent unless required by law. If you believe any information we hold is incorrect, please contact us promptly."
                        }
                  ],
                  queryText: "For any privacy-related queries, reach out to us:",
                  india: "INDIA",
                  uae: "U.A.E"
            },
            AR: {
                  label: "حماية البيانات",
                  title: "سياسة الخصوصية",
                  intro: "توضح هذه السياسة كيفية قيام أكتال ديجيتال بجمع واستخدام وحماية أي معلومات تقدمها عند استخدام موقعنا الإلكتروني.",
                  sections: [
                        {
                              title: "التزامنا",
                              content: "تلتزم أكتال ديجيتال بحماية خصوصيتك. إذا طلبنا منك تقديم أي معلومات يمكن أن تحدد هويتك، فيمكنك أن تكون واثقاً من أنها لن تُستخدم إلا وفقاً لسياسة الخصوصية هذه.",
                              date: "سارٍ من: يناير 2026"
                        },
                        {
                              title: "ما نجلبه من معلومات",
                              content: "قد نطلب منك تقديم المعلومات التالية:",
                              list: [
                                    "الاسم والمسمى الوظيفي",
                                    "تفاصيل الاتصال بما في ذلك عنوان البريد الإلكتروني",
                                    "المعلومات الديموغرافية (الرمز البريدي، التفضيلات، والاهتمامات)",
                                    "معلومات أخرى ذات صلة باستطلاعات العملاء و/أو العروض"
                              ]
                        },
                        {
                              title: "كيف نستخدم معلوماتك",
                              content: "نحن نجمع هذه المعلومات لفهم احتياجاتك بشكل أفضل وتزويدك بخدمات محسنة، وتحديداً لأغراض حفظ السجلات الداخلية وتحسين منتجاتنا."
                        },
                        {
                              title: "الأمان",
                              content: "نحن نأخذ خصوصيتك على محمل الجد وقد قمنا بتنفيذ ضمانات مادية وإلكترونية وإدارية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو الكشف عنها."
                        },
                        {
                              title: "التحكم في معلوماتك الشخصية",
                              content: "لن نقوم أبداً ببيع أو مشاركة أو تأجير معلوماتك الشخصية لأطراف ثالثة دون موافقتك ما لم يقتض القانون ذلك. إذا كنت تعتقد أن أي معلومات نحتفظ بها غير صحيحة، يرجى الاتصال بنا على الفور."
                        }
                  ],
                  queryText: "لأي استفسارات تتعلق بالخصوصية، تواصل معنا:",
                  india: "الهند",
                  uae: "الإمارات"
            }
      };

      const t = translations[currentLang] || translations["EN"];

      return (
            <>
                  <Navbar />
                  <main className={styles.privacyPage}>
                        <div className={styles.container}>
                              <header className={styles.header}>
                                    <span className={styles.label}>{t.label}</span>
                                    <h1 className={styles.mainTitle}>{t.title}</h1>
                                    <p className={styles.intro}>{t.intro}</p>
                              </header>

                              <section className={styles.contentSection}>
                                    {t.sections.map((article, index) => (
                                          <div key={index} className={styles.article}>
                                                <h2>{article.title}</h2>
                                                <p>{article.content}</p>
                                                {article.list && (
                                                      <ul className={styles.dataList}>
                                                            {article.list.map((item, i) => (
                                                                  <li key={i}>{item}</li>
                                                            ))}
                                                      </ul>
                                                )}
                                                {article.date && <p className={styles.effectiveDate}>{article.date}</p>}
                                          </div>
                                    ))}
                              </section>

                              <div className={styles.contactNotice}>
                                    <p className={styles.contactText}>{t.queryText}</p>

                                    <div className={styles.contactGrid}>
                                          <div className={styles.contactBox}>
                                                <span className={styles.countryLabel}>{t.india}</span>
                                                <div className={styles.contactLinks}>
                                                      <a href="tel:+919820730548" className={styles.contactLink}>
                                                            <Phone size={18} /> +91 98207 30548
                                                      </a>
                                                      <a href="https://wa.me/919820715452" target="_blank" className={styles.contactLink}>
                                                            <MessageCircle size={18} className={styles.waIcon} /> +91 98207 15452
                                                      </a>
                                                </div>
                                          </div>

                                          <div className={styles.contactBox}>
                                                <span className={styles.countryLabel}>{t.uae}</span>
                                                <div className={styles.contactLinks}>
                                                      <a href="tel:+971506758040" className={styles.contactLink}>
                                                            <Phone size={18} /> +971 50 675 8040
                                                      </a>
                                                      <a href="https://wa.me/971503330548" target="_blank" className={styles.contactLink}>
                                                            <MessageCircle size={18} className={styles.waIcon} /> +971 50 333 0548
                                                      </a>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </main>
                  <Footer currentLang={currentLang} />
            </>
      );
}
