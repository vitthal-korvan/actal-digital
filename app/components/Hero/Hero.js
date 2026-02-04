"use client";

import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { currentLang } = useLanguage();
  const translations = {
    EN: {
      titlePart1: "Your Vision,",
      titlePart2: "Our Digital Precision.",
      subLeftHighlight: "Digital-first branding agency.",
      subLeftBlock: "Crafting identities for future-tech leaders.",
      subRightHighlight: "Welcome to the future of your brand's growth.",
      subRightBlock: "Globally connected.",
      workingWith: "Working with funded startups, scale-ups, and ambitious brands"
    },
    AR: {
      titlePart1: "رؤيتك،",
      titlePart2: "دقتنا الرقمية.",
      subLeftHighlight: "وكالة علامة تجارية رقمية أولاً.",
      subLeftBlock: "صياغة الهويات لقادة تكنولوجيا المستقبل.",
      subRightHighlight: "مرحباً بك في مستقبل نمو علامتك التجارية.",
      subRightBlock: "متصلون عالمياً.",
      workingWith: "نعمل مع الشركات الناشئة الممولة، والشركات المتوسعة، والعلامات التجارية الطموحة"
    }
  };

  const t = translations[currentLang] || translations["EN"];

  return (
    <div className={styles.section}>
      <h1 className={styles.title}>
        {t.titlePart1}
        <br />
        <span className={styles.strokeText}>{t.titlePart2}</span>
      </h1>

      <div className={styles.subtitleWrapper}>
        <div className={styles.subtitleLeft}>
          <p>
            <span className={styles.subtitleHighlight}>{t.subLeftHighlight}</span>
            <span className={styles.subtitleBlock}>{t.subLeftBlock}</span>
          </p>
        </div>
        <div className={styles.subtitleRight}>
          <p>
            <span className={styles.subtitleHighlight}>{t.subRightHighlight}</span>
            <span className={styles.subtitleBlock}>{t.subRightBlock}</span>
          </p>
        </div>
      </div>
      
      <p className={styles.workingWith}>{t.workingWith}</p>

      <div className={styles.sliderContainer}>
        <div className={styles.heroSlideshow}>
          <div className={styles.heroSlide}>
            <Image src="/b1.png" alt="Design 1" fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div className={styles.heroSlide}>
            <Image src="/b2.png" alt="Design 2" fill style={{ objectFit: 'cover' }} priority />
          </div>
          <div className={styles.heroSlide}>
            <Image src="/b3.png" alt="Design 3" fill style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      </div>
    </div>
  );
}