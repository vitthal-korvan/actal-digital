"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Hero.module.css";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Separate the title and animated words logic slightly for the new layout
  // We can keep the rotating word, or simplify for the "Impact" look.
  // Let's keep the rotating word but integrate it into the GSAP flow.

  const animatedWords = [t("branding"), t("websites"), t("marketing"), t("growth")];

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial Reveal Sequence
    tl.to(`.${styles.titleWord}`, {
      y: 0,
      duration: 1.2,
      stagger: 0.1,
    })
      .to(`.${styles.heroTagline}`, {
        y: 0,
        opacity: 1,
        duration: 1,
      }, "-=0.8")
      .to([`.${styles.subtitle}`, `.${styles.ctaWrapper}`, `.${styles.statsWrapper}`], {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
      }, "-=0.8");

  }, { scope: containerRef });

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.container}>

        {/* LEFT SIDE: Impact Title */}
        <div className={styles.leftContent}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              {/* Splitting text for animation */}
              <span className={styles.titleLine}>
                <span className={styles.titleWord}>{t("heroTitle")}</span>{" "}
                <span className={styles.titleWord}>{t("heroTitleLine")}</span>
              </span>
              <span className={styles.titleLine}>
                <span className={`${styles.titleWord} ${styles.accentWord}`}>
                  {/* For now, just static "Growth" or similar from translation to keep it simple and impactful, 
                       or use the array if we really want rotation. 
                       Let's use the first word of the array for the static impact, and maybe rotate later.
                       Actually, let's keep it simple: "We Build Digital Growth" (matches previous somewhat) */}
                  {t("growth")}
                </span>
              </span>
            </h1>
          </div>

          <div className={styles.taglineWrapper}>
            <p className={styles.heroTagline}>
              {t("heroTagline")}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Context & Actions */}
        <div className={styles.rightContent}>
          <p className={styles.subtitle}>
            {t("heroSubtitle")}
          </p>

          <div className={styles.ctaWrapper}>
            <Link href="/contact" className={styles.ctaButton}>
              {t("startProject")}
              <ArrowRight size={20} />
            </Link>
          </div>

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
    </section>
  );
}
