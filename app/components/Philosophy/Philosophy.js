import { Diamond, ScanFace, Zap } from "lucide-react";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        {/* Text Area */}
        <div className={styles.content}>
          <div className={styles.innerContent}>
            <span className={styles.label}>04 — PHILOSOPHY</span>
            <h2 className={styles.title}>The Actal Standard</h2>
            <p className={styles.subtitle}>
              Good design is quiet. Bad design is expensive.
            </p>
            <p className={styles.desc}>
              We believe in design that serves a function. No fluff, no
              templates. Just rigorous attention to detail and a commitment to
              future-proof aesthetics.
            </p>

            <div className={styles.list}>
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <ScanFace size={24} />
                </div>
                <div>
                  <h3 className={styles.itemTitle}>User Centric</h3>
                  <p className={styles.itemDesc}>
                    Every pixel is placed with intent. We design for the human on
                    the other side of the screen.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Diamond size={24} />
                </div>
                <div>
                  <h3 className={styles.itemTitle}>Pixel Perfection</h3>
                  <p className={styles.itemDesc}>
                    We obsess over the details that others miss. Typography,
                    spacing, and micro-interactions.
                  </p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className={styles.itemTitle}>Performance First</h3>
                  <p className={styles.itemDesc}>
                    Beauty means nothing if it doesn't load instantly. We
                    optimize for speed and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images Grid */}
        <div className={styles.imagesGrid}>
          <div className={styles.imageContainer}>
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a795a8d9-4bac-4f56-b06c-0cfaba3dbc9a_1600w.webp"
              className={styles.image}
              alt="Workspace"
            />
            <div className={styles.imageCaption}>Fig. 01 — Workspace</div>
          </div>

          <div className={styles.stackedImages}>
            <div className={styles.imageContainer}>
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9fdfc28-8272-467a-b305-f09454abb35a_1600w.webp"
                className={styles.image}
                alt="Materials"
              />
              <div className={styles.imageCaption}>Fig. 02 — Materials</div>
            </div>
            <div className={styles.imageContainer}>
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a6e12d2-345b-4681-a0ae-d817646753f8_1600w.webp"
                className={styles.image}
                alt="Output"
              />
              <div className={styles.imageCaption}>Fig. 03 — Output</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
