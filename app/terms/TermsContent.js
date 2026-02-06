"use client";
import { MessageCircle, Phone } from "lucide-react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useLanguage } from "../context/LanguageContext";
import styles from './terms.module.css';

export default function TermsContent() {
      const { language } = useLanguage();

      const translations = {
            EN: {
                  label: "LEGAL FRAMEWORK",
                  title: "Terms and Conditions",
                  intro: "Welcome to Actal Digital. Please read these terms carefully before using our services.",
                  sections: [
                        {
                              title: "What We Do",
                              content: "These Terms and Conditions outline our obligations to you regarding the use of our website and set the rules for using Actal Digital’s services. By accessing or using this site (actaldigital.com), you agree to comply with these Terms and Conditions. In these Terms, “we,” “us,” and “site” refer to Actal Digital."
                        },
                        {
                              title: "Use of Our Website",
                              content: "You are permitted to use this website for your personal or business purposes, including printing, downloading, and sharing material, provided that you do not modify any content without our explicit permission.",
                              extra: "No material on this website may be republished or distributed, online or offline, without prior consent. All copyright and intellectual property rights for the content on this site belong to Actal Digital.",
                              note: "The information on this website is provided for general purposes only. While we strive for accuracy, any reliance you place on this information is at your own risk."
                        },
                        {
                              title: "Visitor Conduct",
                              content: "Any material you submit or post to this site, except for personal information covered under our Privacy Policy, will be considered non-confidential. We reserve the right to use, copy, and distribute any submitted content.",
                              prohibited: "Strictly Prohibited: Do not post material that is discriminatory, obscene, defamatory, illegal, invasive of privacy, or otherwise harmful. Any conduct that violates laws is strictly prohibited."
                        },
                        {
                              title: "Site Availability",
                              content: "We aim to keep this site accessible 24/7, but technical or server issues may cause temporary downtime. Actal Digital is not liable if the website becomes unavailable at any time."
                        },
                        {
                              title: "Governing Law",
                              content: "These Terms and Conditions are governed by the laws of India (Maharashtra), and any disputes will be resolved under these laws."
                        }
                  ],
                  queryText: "If you have any questions, please contact us at:",
                  india: "INDIA",
                  uae: "U.A.E"
            },
            AR: {
                  label: "الإطار القانوني",
                  title: "الشروط والأحكام",
                  intro: "مرحباً بكم في أكتال ديجيتال. يرجى قراءة هذه الشروط بعناية قبل استخدام خدماتنا.",
                  sections: [
                        {
                              title: "ماذا نفعل",
                              content: "تحدد هذه الشروط والأحكام التزاماتنا تجاهك فيما يتعلق باستخدام موقعنا الإلكتروني وتضع القواعد لاستخدام خدمات أكتال ديجيتال. من خلال الدخول إلى هذا الموقع أو استخدامه، فإنك توافق على الامتثال لهذه الشروط والأحكام. في هذه الشروط، تشير كلمات 'نحن' و'موقعنا' إلى أكتال ديجيتال."
                        },
                        {
                              title: "استخدام موقعنا الإلكتروني",
                              content: "يُسمح لك باستخدام هذا الموقع لأغراضك الشخصية أو التجارية، بما في ذلك طباعة المواد وتنزيلها ومشاركتها، بشرط عدم تعديل أي محتوى دون إذن صريح منا.",
                              extra: "لا يجوز إعادة نشر أو توزيع أي مادة من هذا الموقع، عبر الإنترنت أو خارجها، دون موافقة مسبقة. جميع حقوق الطبع والنشر والملكية الفكرية للمحتوى على هذا الموقع تعود لأكتال ديجيتال.",
                              note: "المعلومات الواردة في هذا الموقع مقدمة لأغراض عامة فقط. بينما نسعى جاهدين لتحقيق الدقة، فإن أي اعتماد تضعه على هذه المعلومات يكون على مسؤوليتك الخاصة."
                        },
                        {
                              title: "سلوك الزوار",
                              content: "أي مادة ترسلها أو تنشرها على هذا الموقع، باستثناء المعلومات الشخصية المشمولة بسياسة الخصوصية الخاصة بنا، ستُعتبر غير سرية. ونحن نحتفظ بالحق في استخدام ونسخ وتوزيع أي محتوى مقدم.",
                              prohibited: "ممنوع منعاً باتاً: لا تنشر مواد تمييزية أو فاحشة أو تشهيرية أو غير قانونية أو منتهكة للخصوصية أو ضارة بأي شكل آخر. أي سلوك ينتهك القوانين محظور تماماً."
                        },
                        {
                              title: "توفر الموقع",
                              content: "نهدف إلى الحفاظ على إمكانية الوصول إلى هذا الموقع على مدار الساعة طوال أيام الأسبوع، ولكن قد تؤدي المشكلات الفنية أو المتعلقة بالخادم إلى تعطل مؤقت. لا تتحمل أكتال ديجيتال المسؤولية في حال أصبح الموقع غير متاح في أي وقت."
                        },
                        {
                              title: "القانون المعمول به",
                              content: "تخضع هذه الشروط والأحكام لقوانين الهند (ماهاراشترا)، وسيتم حل أي نزاعات بموجب هذه القوانين."
                        }
                  ],
                  queryText: "إذا كان لديك أي أسئلة، يرجى الاتصال بنا على:",
                  india: "الهند",
                  uae: "الإمارات"
            }
      };

      const t = translations[currentLang] || translations["EN"];

      return (
            <>
                  <Navbar />
                  <main className={styles.termsPage}>
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
                                                {article.extra && <p>{article.extra}</p>}
                                                {article.note && <p className={styles.note}>{article.note}</p>}
                                                {article.prohibited && <p><strong>{article.prohibited}</strong></p>}
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
                                                            <Phone size={16} /> +91 98207 30548
                                                      </a>
                                                      <a href="https://wa.me/919820715452" target="_blank" className={styles.contactLink}>
                                                            <MessageCircle size={16} className={styles.waIcon} /> +91 98207 15452
                                                      </a>
                                                </div>
                                          </div>

                                          <div className={styles.contactBox}>
                                                <span className={styles.countryLabel}>{t.uae}</span>
                                                <div className={styles.contactLinks}>
                                                      <a href="tel:+971506758040" className={styles.contactLink}>
                                                            <Phone size={16} /> +971 50 675 8040
                                                      </a>
                                                      <a href="https://wa.me/971503330548" target="_blank" className={styles.contactLink}>
                                                            <MessageCircle size={16} className={styles.waIcon} /> +971 50 333 0548
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
