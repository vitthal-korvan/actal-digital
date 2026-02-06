"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const animatedWords = ["Branding", "Websites", "Marketing", "Growth"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Hero Content */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            We design solutions
            <br />
            <span className={styles.titleLine}>
              that drive <span className={styles.animatedWord} key={currentWordIndex}>{animatedWords[currentWordIndex]}</span>
            </span>
          </h1>

          <div className={styles.rightContent}>
            <p className={styles.subtitle}>
              We believe great design isn't just about aesthetics – it's about creating work that drives results for your business.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className={styles.servicesWrapper}>
          <div className={styles.servicesList}>
            <span className={styles.serviceItem}>Branding</span>
            <span className={styles.serviceDot}>•</span>
            <span className={styles.serviceItem}>Website Design</span>
            <span className={styles.serviceDot}>•</span>
            <span className={styles.serviceItem}>Product Design</span>
            <span className={styles.serviceDot}>•</span>
            <span className={styles.serviceItem}>Development</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaWrapper}>
          <Link href="/contact" className={styles.ctaButton}>
            Start a Project
            <ArrowRight size={18} />
          </Link>

        </div>
      </div>
    </section>
  );
}