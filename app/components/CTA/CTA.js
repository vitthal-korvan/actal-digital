import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./CTA.module.css";

export default function CTA() {
  const { currentLang } = useLanguage();
  // 1. Translations Dictionary
  const translations = {
    EN: {
      label: "ACTAL DIGITAL – PARTNERSHIP FOR GROWTH",
      title: "Ready to build something remarkable?",
      desc: "Tell us about your business, and our Mumbai team will craft your roadmap for success.",
      btnText: "Start a Project"
    },
    AR: {
      label: "أكتال ديجيتال – شراكة من أجل النمو",
      title: "هل أنت مستعد لبناء شيء مذهل؟",
      desc: "أخبرنا عن عملك، وسيقوم فريقنا في مومباي برسم خارطة الطريق لنجاحك.",
      btnText: "ابدأ مشروعك"
    }
  };

  const t = translations[currentLang] || translations["EN"];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.label}>{t.label}</span>
            <h2 className={styles.title}>{t.title}</h2>
            <p className={styles.desc}>{t.desc}</p>
          </div>
          <div className={styles.actions}>
            <Link href="/project" className={styles.btn}>
              {t.btnText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}