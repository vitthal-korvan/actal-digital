import Link from "next/link";
import styles from "./CTA.module.css";

export default function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.content}>
            <span className={styles.label}>07 — NEW BUSINESS</span>
            <h2 className={styles.title}>Ready to start a project?</h2>
            <p className={styles.desc}>
              Tell us what you’re building — we’ll reply with next steps.
            </p>
          </div>
          <div className={styles.actions}>
            <Link href="/project" className={styles.btn}>
              Start a Project
            </Link>
            <span className={styles.note}>Brief form · 48h response</span>
          </div>
        </div>
      </div>
    </section>
  );
}
