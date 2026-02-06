"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useLanguage();
  const animatedWords = [t("branding"), t("websites"), t("marketing"), t("growth")];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [animatedWords]); // Added dependency to update when language changes

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Hero Content */}
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <h1 className={styles.title}>
              {t("heroTitle")}
              <br />
              <span className={styles.titleLine}>
                {t("heroTitleLine")} <span className={styles.animatedWord} key={currentWordIndex}>{animatedWords[currentWordIndex]}</span>
              </span>
            </h1>
            <p className={styles.heroTagline}>{t("heroTagline")}</p>
          </div>

          <div className={styles.rightContent}>
            <p className={styles.subtitle}>
              {t("heroSubtitle")}
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              {t("startProject")}
              <ArrowRight size={18} />
            </Link>

            <div className={styles.statsWrapper}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{t("stat1Value")}</span>
                <span className={styles.statLabel}>{t("stat1Label")}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{t("stat2Value")}</span>
                <span className={styles.statLabel}>{t("stat2Label")}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{t("stat3Value")}</span>
                <span className={styles.statLabel}>{t("stat3Label")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className={styles.servicesWrapper}>
          <div className={styles.servicesList}>
            <span className={styles.serviceItem}>{t("heroService1")}</span>
            <span className={styles.serviceDot}>•</span>
            <span className={styles.serviceItem}>{t("heroService2")}</span>
            <span className={styles.serviceDot}>•</span>
            <span className={styles.serviceItem}>{t("heroService3")}</span>
            <span className={styles.serviceDot}>•</span>
            <span className={styles.serviceItem}>{t("heroService4")}</span>
          </div>
        </div>

      </div>
    </section>
  );
}