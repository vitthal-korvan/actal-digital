import { Diamond, ScanFace, Users, Zap } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Philosophy.module.css";

export default function Philosophy() {
  const { currentLang } = useLanguage();
  // 1. Translations Dictionary
  const translations = {
    EN: {
      title: "About Us",
      storyTitle: "Our Story",
      storyDesc: "Founded in Mumbai to bridge the gap between technology and creative marketing.",
      missionTitle: "Mission",
      missionDesc: "To empower businesses with strategic digital solutions that drive growth.",
      teamTitle: "The Team",
      teamDesc: "Led by Nizamuddin Shaikh and a core team of digital specialists.",
      valuesTitle: "Core Values",
      valuesDesc: "Transparency, Collaboration, and Continuous Improvement.",
      fig1: "Fig. 01 — Workspace",
      fig2: "Fig. 02 — Materials",
      fig3: "Fig. 03 — Output"
    },
    AR: {
      title: "من نحن",
      storyTitle: "قصتنا",
      storyDesc: "تأسست في مومباي لسد الفجوة بين التكنولوجيا والتسويق الإبداعي.",
      missionTitle: "مهمتنا",
      missionDesc: "تمكين الشركات من خلال حلول رقمية استراتيجية تدفع عجلة النمو.",
      teamTitle: "الفريق",
      teamDesc: "بقيادة نظام الدين شيخ وفريق أساسي من المتخصصين الرقميين.",
      valuesTitle: "قيمنا الجوهرية",
      valuesDesc: "الشفافية، التعاون، والتحسين المستمر.",
      fig1: "شكل 01 — مساحة العمل",
      fig2: "شكل 02 — المواد",
      fig3: "شكل 03 — المخرجات"
    }
  };

  const t = translations[currentLang] || translations["EN"];

  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        {/* Text Area */}
        <div className={styles.content}>
          <div className={styles.innerContent}>
            <h2 className={styles.title}>{t.title}</h2>

            <div className={styles.list}>
              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <ScanFace size={24} />
                </div>
                <div>
                  <h3 className={styles.itemTitle}>{t.storyTitle}</h3>
                  <p className={styles.itemDesc}>{t.storyDesc}</p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Diamond size={24} />
                </div>
                <div>
                  <h3 className={styles.itemTitle}>{t.missionTitle}</h3>
                  <p className={styles.itemDesc}>{t.missionDesc}</p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Users size={24} />
                </div>
                <div>
                  <h3 className={styles.itemTitle}>{t.teamTitle}</h3>
                  <p className={styles.itemDesc}>{t.teamDesc}</p>
                </div>
              </div>

              <div className={styles.item}>
                <div className={styles.itemIcon}>
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className={styles.itemTitle}>{t.valuesTitle}</h3>
                  <p className={styles.itemDesc}>{t.valuesDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Images Grid */}
        <div className={styles.imagesGrid}>
          <div className={styles.imageContainer}>
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a795a8d9-4bac-4f56-b06c-0cfaba3dbc9a_1600w.webp"
              className={styles.image}
              alt="Workspace"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className={styles.imageCaption}>{t.fig1}</div>
          </div>

          <div className={styles.stackedImages}>
            <div className={styles.imageContainer}>
              <Image
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9fdfc28-8272-467a-b305-f09454abb35a_1600w.webp"
                className={styles.image}
                alt="Materials"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.imageCaption}>{t.fig2}</div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a6e12d2-345b-4681-a0ae-d817646753f8_1600w.webp"
                className={styles.image}
                alt="Output"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.imageCaption}>{t.fig3}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}