import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "./Expertise.module.css";

const services = [
  {
    title: "Branding",
    desc: "Positioning, identity systems, brand architecture",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46281a5c-f67e-419c-9644-02c7d3b25deb_800w.webp",
  },
  {
    title: "Product",
    desc: "UX strategy, design systems, SaaS interfaces",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bde9069b-1960-4868-9138-c74f2a623acd_800w.webp",
  },
  {
    title: "Motion",
    desc: "Brand motion, launch assets, micro-interactions",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/039a9170-346c-47e5-8218-e281b3d525dd_800w.webp",
  },
  {
    title: "Web",
    desc: "High-performance websites, marketing platforms",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/981546c5-4246-4dec-90f8-8fba1e9dd71d_800w.webp",
  },
];

export default function Expertise() {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.label}>01 — EXPERTISE</span>
          <h2 className={styles.title}>Core Capabilities</h2>
          <Link href="/services" className={styles.linkButton}>
            All Services
            <ArrowRight size={16} />
          </Link>
        </div>
        <p className={styles.description}>
          <span className="block">Holistic design systems for brands</span>
          <span className="block">ready to define their category.</span>
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s, i) => (
          <Link href="/services" key={i} className={styles.card}>
            <img src={s.img} className={styles.cardImage} alt={s.title} />
            <div className={styles.cardOverlay}></div>
            <div className={styles.cardContent}>
              <span className={styles.cardLabel}>Category</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDescription}>{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
