import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Expertise.module.css";

export default function Expertise() {
  const { currentLang } = useLanguage();
  // 1. Translations Dictionary
  const translations = {
    EN: {
      title: "Our Process",
      btnText: "All Services",
      services: [
        {
          title: "Research",
          desc: "We understand your business objectives and audience to create strategies that are purposeful.",
          img: "/research.png",
        },
        {
          title: "Goal-Focused",
          desc: "We align every creative decision with your ultimate business goals for maximum impact.",
          img: "/goal.png",
        },
        {
          title: "Real Results",
          desc: "We focus on getting real results that help your business grow, like more leads and traffic.",
          img: "/Result.png",
        },
        {
          title: "Smart Targeting",
          desc: "We make sure your message reaches the right people who are most likely to convert.",
          img: "/Targeting.png",
        },
      ],
    },
    AR: {
      title: "عمليتنا",
      btnText: "جميع الخدمات",
      services: [
        {
          title: "البحث والتحليل",
          desc: "نحن نفهم أهداف عملك وجمهورك لإنشاء استراتيجيات هادفة وفعالة.",
          img: "/research.png",
        },
        {
          title: "التركيز على الأهداف",
          desc: "نحن نربط كل قرار إبداعي بأهداف عملك النهائية لتحقيق أقصى قدر من التأثير.",
          img: "/goal.png",
        },
        {
          title: "نتائج حقيقية",
          desc: "نحن نركز على تحقيق نتائج ملموسة تساعد عملك على النمو، مثل زيادة العملاء والزيارات.",
          img: "/Result.png",
        },
        {
          title: "استهداف ذكي",
          desc: "نحن نضمن وصول رسالتك إلى الأشخاص المناسبين الأكثر عرضة للاهتمام بخدماتك.",
          img: "/Targeting.png",
        },
      ],
    },
  };

  // 2. Current Language नुसार डेटा निवडणे
  const t = translations[currentLang] || translations["EN"];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>{t.title}</h2>
          <Link href="/services" className={styles.linkButton}>
            {t.btnText}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className={styles.grid}>
        {t.services.map((s, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src={s.img} className={styles.cardImage} alt={s.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDescription}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}