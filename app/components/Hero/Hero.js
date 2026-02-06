"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Hero.module.css";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  // Rotating words logic
  const animatedWords = [t("growth"), t("websites"), t("product"), t("marketing")];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate OUT
      gsap.to(`.${styles.accentWord}`, {
        y: -30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          // Update State (Text)
          setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
        }
      });
    }, 2500); // Interval includes animation time
    return () => clearInterval(interval);
  }, [animatedWords.length]);

  // Initial Animation Sequence
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

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
      .to([`.${styles.subtitle}`, `.${styles.ctaWrapper}`, `.${styles.statsWrapper}`, `.${styles.servicesWrapper}`], {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
      }, "-=0.8");

  }, { scope: containerRef });

  // Animation IN for the changing word
  useGSAP(() => {
    // This runs whenever currentWordIndex changes (after exit completes)
    gsap.fromTo(`.${styles.accentWord}`,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
    );
  }, [currentWordIndex]);

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={styles.container}>

        {/* LEFT SIDE: Impact Title */}
        <div className={styles.leftContent}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>
              {/* Splitting text for animation */}
              <span className={styles.titleLine}>
                <span className={styles.titleWord}>{t("heroTitle")}</span>
              </span>
              <span className={styles.titleLine}>
                <span className={styles.titleWord}>{t("heroTitleLine")}</span>{" "}
                <span className={`${styles.titleWord} ${styles.accentWord}`}>
                  {animatedWords[currentWordIndex]}
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

        {/* Services List (Restored) */}
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
