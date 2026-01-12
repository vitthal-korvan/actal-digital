import { Code2, PenTool, Telescope } from "lucide-react";
import styles from "./Methodology.module.css";

export default function Methodology() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>03 — METHODOLOGY</span>
        <h2 className={styles.title}>Precision in Process</h2>

        <div className={styles.grid}>
          {/* Connector Line */}
          <div className={styles.connector}></div>

          <div className={styles.step}>
            <div className={styles.iconWrapper}>
              <Telescope size={24} />
            </div>
            <h3 className={styles.stepTitle}>Strategy</h3>
            <p className={styles.stepDesc}>
              <span className="block">We challenge assumptions,</span>
              <span className="block">not just collect requirements.</span>
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.iconWrapper}>
              <PenTool size={24} />
            </div>
            <h3 className={styles.stepTitle}>Design</h3>
            <p className={styles.stepDesc}>
              <span className="block">Systems first,</span>
              <span className="block">screens second.</span>
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.iconWrapper}>
              <Code2 size={24} />
            </div>
            <h3 className={styles.stepTitle}>Develop</h3>
            <p className={styles.stepDesc}>
              <span className="block">Built for scale,</span>
              <span className="block">not demos.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
