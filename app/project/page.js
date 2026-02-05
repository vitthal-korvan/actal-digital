"use client";
import { useForm, ValidationError } from '@formspree/react';
import { ArrowRight, Check, MessageSquare, Phone } from "lucide-react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { useLanguage } from "../context/LanguageContext";
import styles from "./page.module.css";

export default function ProjectPage() {
  const { currentLang } = useLanguage();
  const [state, handleSubmit] = useForm("xdaeglal");

  // Translations dictionary
  const translations = {
    EN: {
      title: "Contact",
      titleUs: "Us",
      desc: "A short form to understand your needs and determine fit.",
      nameLabel: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email",
      emailPlaceholder: "abc@gmail.com",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter a Number",
      helpLabel: "Where can we help?",
      messageLabel: "Message",
      messagePlaceholder: "Tell me your requirement",
      send: "Send Request",
      sending: "Sending...",
      successTitle: "Request Sent!",
      successDesc: "Thanks for reaching out. We'll get back to you within 48 hours.",
      sendAnother: "Send Another",
      directIndia: "Direct Contact (India)",
      directUAE: "Direct Contact (U.A.E)",
      emailTitle: "Email",
      services: ['Web Development', 'Digital Marketing', 'Social Media', 'Graphic Design','Creative Content','SEO','Branding','Other']
    },
    AR: {
      title: "اتصل",
      titleUs: "بنا",
      desc: "نموذج قصير لفهم احتياجاتك وتحديد مدى الملاءمة.",
      nameLabel: "الاسم",
      namePlaceholder: "اسمك",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "example@mail.com",
      phoneLabel: "رقم الهاتف",
      phonePlaceholder: "أدخل الرقم",
      helpLabel: "كيف يمكننا مساعدتك؟",
      messageLabel: "الرسالة",
      messagePlaceholder: "أخبرنا بمتطلباتك",
      send: "إرسال الطلب",
      sending: "جاري الإرسال...",
      successTitle: "تم إرسال الطلب!",
      successDesc: "شكراً لتواصلك معنا. سنرد عليك خلال 48 ساعة.",
      sendAnother: "إرسال طلب آخر",
      directIndia: "اتصال مباشر (الهند)",
      directUAE: "اتصال مباشر (الإمارات)",
      emailTitle: "البريد الإلكتروني",
      services: ['تطوير المواقع', 'التسويق الرقمي', 'وسائل التواصل', 'التصميم الجرافيكي','المحتوى الإبداعي','SEO','العلامة التجارية','أخرى']
    }
  };

  const t = translations[currentLang];

  // SUCCESS STATE
  if (state.succeeded) {
    return (
      <div className={styles.main}>
        <Navbar />
        <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
          <h2 className={styles.title}>{t.successTitle}</h2>
          <p className={styles.description}>{t.successDesc}</p>
          <button onClick={() => window.location.reload()} className={styles.submitBtn}>{t.sendAnother}</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.noise}></div>
      
      {/* Navbar with language state */}
      <Navbar />

      <main className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Left Column */}
            <div className={styles.leftCol}>
              <h1 className={styles.title}>
                {t.title}<br />
                <span className={styles.titleDim}>{t.titleUs}</span>
              </h1>
              <p className={styles.description}>{t.desc}</p>

              <div className={styles.contactInfo}>
                <div>
                  <h3 className={styles.infoTitle}>{t.directIndia}</h3>
                  <a href="tel:+919820730548" className={styles.contactLink}><Phone size={14}/> +91 9820730548</a>
                  <a href="https://wa.me/919820715452" target="_blank" className={styles.contactLink}><MessageSquare size={14} style={{color: '#25D366'}}/> +91 9820715452</a>
                </div>

                <div>
                  <h3 className={styles.infoTitle}>{t.directUAE}</h3>
                  <a href="tel:+971506758040" className={styles.contactLink}><Phone size={14}/> +971 50 6758040</a>
                  <a href="https://wa.me/971503330548" target="_blank" className={styles.contactLink}><MessageSquare size={14} style={{color: '#25D366'}}/> +971 50 3330548</a>
                </div>

                <div>
                  <h3 className={styles.infoTitle}>{t.emailTitle}</h3>
                  <a href="mailto:info@actaldigital.com" className={styles.emailLink}>info@actaldigital.com</a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className={styles.rightCol}>
              <form onSubmit={handleSubmit} className={styles.formStack}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>{t.nameLabel}</label>
                    <input name="name" type="text" placeholder={t.namePlaceholder} className={styles.input} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>{t.emailLabel}</label>
                    <input name="email" type="email" placeholder={t.emailPlaceholder} className={styles.input} required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>{t.phoneLabel}</label>
                  <input name="phone" type="tel" placeholder={t.phonePlaceholder} className={styles.input} />
                </div>

                <div>
                  <label className={styles.label} style={{marginBottom: '1.5rem'}}>{t.helpLabel}</label>
                  <div className={styles.checkboxGrid}>
                     {t.services.map((service) => (
                        <label key={service} className={styles.checkboxLabel}>
                           <input type="checkbox" name="services" value={service} className={styles.checkboxInput} />
                           <div className={styles.checkboxBox}>
                              <span className={styles.checkboxText}>{service}</span>
                              <Check size={16} className={styles.checkIcon} />
                           </div>
                        </label>
                     ))}
                  </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>{t.messageLabel}</label>
                    <textarea name="message" rows={4} placeholder={t.messagePlaceholder} className={`${styles.input} ${styles.textarea}`} required></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <div className={styles.submitSection}>
                    <button type="submit" disabled={state.submitting} className={styles.submitBtn}>
                      {state.submitting ? t.sending : t.send} <ArrowRight size={18} />
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with currentLang prop - THIS FIXES THE ISSUE */}
      <Footer />
    </div>
  );
}