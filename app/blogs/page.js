"use client";
import { useState } from "react";
import { ArrowRight, Target, Users, Award, Play } from "lucide-react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./page.module.css";

export default function AboutPage() {
  // 1. Language State Add Kara
  const [currentLang, setCurrentLang] = useState("EN");

  // 2. Translations Dictionary
  const translations = {
    EN: {
      heroTitle: "About us",
      heroDesc: "We Bridge the Gap Between Technology and Creativity. At Actal Digital, we combine innovative technology with creative solutions to elevate your brand. GCC & India, we are a full-service digital agency committed to transforming businesses into industry leaders.",
      storyTitle: "Our Story",
      storyText: "Actal Digital was born from a simple observation: businesses need more than just a website; they need a digital partner. We started as a small team of developers and creators with a shared passion for high-performance code and stunning visuals.",
      storyQuote: "Success is not just about the launch; it's about building a sustainable system.",
      missionTitle: "Our Mission & Vision",
      missionText: "Mission: To empower businesses with strategic digital solutions. Vision: To be the most trusted digital partner for brands globally.",
      wayTitle: "The 'Actal' Way",
      wayText: "Discovery: Deep dive into brand identity. Strategy: Custom ROI roadmap. Execution: Experts bring it to life. Growth: Continuous monitoring.",
    },
    AR: {
      heroTitle: "من نحن",
      heroDesc: "نحن نسد الفجوة بين التكنولوجيا والإبداع. في أكتال ديجيتال، نجمع بين التكنولوجيا المبتكرة والحلول الإبداعية للارتقاء بعلامتك التجارية. في دول الخليج والهند، نحن وكالة رقمية متكاملة الخدمات.",
      storyTitle: "قصتنا",
      storyText: "ولدت أكتال ديجيتال من ملاحظة بسيطة: الشركات تحتاج إلى أكثر من مجرد موقع إلكتروني؛ إنهم بحاجة إلى شريك رقمي. بدأنا كفريق صغير من المطورين والمبدعين.",
      storyQuote: "النجاح لا يقتصر فقط على الإطلاق؛ بل يتعلق ببناء نظام مستدام ينمو معك.",
      missionTitle: "مهمتنا ورؤيتنا",
      missionText: "المهمة: تمكين الشركات بحلول رقمية استراتيجية. الرؤية: أن نكون الشريك الرقمي الأكثر ثقة للعلامات التجارية عالمياً.",
      wayTitle: "طريقة 'أكتال'",
      wayText: "الاكتشاف: التعمق في هوية العلامة التجارية. الاستراتيجية: خارطة طريق مخصصة للعائد على الاستثمار. التنفيذ: الخبراء يجسدونها على أرض الواقع.",
    }
  };

  const t = translations[currentLang] || translations["EN"];

  return (
    <main className={styles.main}>
      {/* 3. Navbar la PROPS dya (Most Important) */}
      <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t.heroTitle}</h1>
          <p className={styles.heroDesc}>{t.heroDesc}</p>
        </div>

        <div className={styles.imageGrid}>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" alt="Team 1" className={styles.gridImg} />
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&q=80" alt="Team 2" className={styles.gridImg} />
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" alt="Team 3" className={styles.gridImg} />
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80" alt="Team 4" className={styles.gridImg} />
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Team 5" className={styles.gridImg} />
        </div>
      </section>

      {/* Our Story Section */}
      <section className={styles.sectionContainer}>
        <div className={styles.empowerGrid}>
          <div className={styles.videoPlaceholder}>
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" alt="Our Office" />
             <div className={styles.founderCard}>
                <p>"Building for the future"</p>
                <span>Actal Story</span>
             </div>
          </div>
          <div className={styles.empowerContent}>
            <h1 className={styles.sectionHeading}>{t.storyTitle}</h1>
            <p className={styles.textGray}>{t.storyText}</p>
            <blockquote className={styles.quote}>"{t.storyQuote}"</blockquote>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={styles.sectionContainer}>
        <div className={styles.empowerGrid}>
          <div className={styles.videoPlaceholder}>
             <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" alt="Team Strategy" />
             <div className={styles.founderCard}>
                <p>"Clarity in every pixel"</p>
                <span>Mission & Vision</span>
             </div>
          </div>
          <div className={styles.empowerContent}>
            <h1 className={styles.sectionHeading}>{t.missionTitle}</h1>
            <p className={styles.textGray}>{t.missionText}</p>
          </div>
        </div>
      </section>

      {/* The Actal Way Section */}
      <section className={styles.sectionContainer}>
        <div className={styles.empowerGrid}>
          <div className={styles.videoPlaceholder}>
             <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80" alt="Process" />
             <div className={styles.founderCard}>
                <p>"Excellence in execution"</p>
                <span>The Actal Way</span>
             </div>
          </div>
          <div className={styles.empowerContent}>
            <h1 className={styles.sectionHeading}>{t.wayTitle}</h1>
            <p className={styles.textGray}>{t.wayText}</p>
          </div>
        </div>
      </section>

      {/* FIXED: Passing currentLang to Footer */}
                  <Footer currentLang={currentLang} />
    </main>
  );
}