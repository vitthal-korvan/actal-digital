import { Code2, MessageSquare, PenTool, Telescope } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Methodology.module.css";

export default function Methodology() {
  const { currentLang } = useLanguage();
  // 1. Translations Dictionary
  const translations = {
    EN: {
      title: "WHY CHOOSE US",
      steps: [
        {
          icon: <Telescope size={24} />,
          title: "Data-Driven Results",
          descLine1: "Every design and campaign is backed,",
          descLine2: "by real-time analytics."
        },
        {
          icon: <PenTool size={24} />,
          title: "Tailored Strategies",
          descLine1: "No \"one-size-fits-all\",",
          descLine2: "We build solutions specific to your business goals."
        },
        {
          icon: <MessageSquare size={24} />,
          title: "Transparent Communication",
          descLine1: "Regular reports and a dedicated",
          descLine2: "account manager for your project."
        },
        {
          icon: <Code2 size={24} />,
          title: "Expert Team",
          descLine1: "Access to Mumbai’s top developers,",
          descLine2: "designers, and marketing strategists."
        }
      ]
    },
    AR: {
      title: "لماذا تختارنا",
      steps: [
        {
          icon: <Telescope size={24} />,
          title: "نتائج قائمة على البيانات",
          descLine1: "كل تصميم وحملة مدعومة",
          descLine2: "بتحليلات فورية ودقيقة."
        },
        {
          icon: <PenTool size={24} />,
          title: "استراتيجيات مخصصة",
          descLine1: "لا نؤمن بالحلول الموحدة،",
          descLine2: "نبني حلولاً مخصصة لأهداف عملك."
        },
        {
          icon: <MessageSquare size={24} />,
          title: "تواصل شفاف",
          descLine1: "تقارير منتظمة ومدير حساب",
          descLine2: "مخصص لمتابعة مشروعك."
        },
        {
          icon: <Code2 size={24} />,
          title: "فريق من الخبراء",
          descLine1: "الوصول إلى أفضل المطورين والمصممين",
          descLine2: "واستراتيجيي التسويق في مومباي."
        }
      ]
    }
  };

  const t = translations[currentLang] || translations["EN"];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t.title}</h2>

        <div className={styles.grid}>
          {/* Connector Line */}
          <div className={styles.connector}></div>

          {t.steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.iconWrapper}>
                {step.icon}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>
                <span className="block">{step.descLine1}</span>
                <span className="block">{step.descLine2}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}