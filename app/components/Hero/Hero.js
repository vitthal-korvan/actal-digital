import { Play } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>
        Visual
        <br />
        <span className={styles.strokeText}>Language</span>
      </h1>

      <div className={styles.subtitleWrapper}>
        <div className={styles.subtitleLeft}>
          <p>
            <span className={styles.subtitleHighlight}>
              Digital-first branding agency.
            </span>
            <span className={styles.subtitleBlock}>
              Crafting identities for future-tech leaders.
            </span>
          </p>
        </div>
        <div className={styles.subtitleRight}>
          <p>
            <span className={styles.subtitleHighlight}>
              We build systems, not just pages.
            </span>
            <span className={styles.subtitleBlock}>
              London based, globally connected.
            </span>
          </p>
        </div>
      </div>
      
      <p className={styles.workingWith}>
        Working with funded startups, scale-ups, and ambitious brands
      </p>

      {/* Hero Slider */}
      <div className={styles.sliderContainer}>
        <div className={styles.heroSlideshow}>
          {/* Note: In Next.js, use standard img for simple animations or Image component if optimized. 
              Since logic is CSS animation on keyframes, standard img is easier to apply classes directly without wrapper issues. 
              However, next/image is recommended. Let's try standard img for fidelity to CSS logic first. 
          */}
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68c70ed3-3617-478c-b904-4a86ef50ff12_3840w.webp"
            className={styles.heroSlide}
            alt="Abstract 3D Design"
          />
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/feda1066-8c70-434c-9899-9f49ec90da32_3840w.webp"
            className={styles.heroSlide}
            alt="Liquid Metal"
          />
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad12226b-9c56-48b6-81b8-bf1ef9f0cb87_3840w.webp"
            className={styles.heroSlide}
            alt="Dark Architecture"
          />
        </div>

        <div className={styles.showreelBtnWrapper}>
          <button className={styles.showreelBtn}>
            View Showreel
            <div className={styles.playIconWrapper}>
              <Play size={12} fill="currentColor" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
