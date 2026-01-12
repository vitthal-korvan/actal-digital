import { ArrowRight } from "lucide-react";
import styles from "./CaseStudies.module.css";

const projects = [
  {
    title: "Nexus Protocol",
    cat: "Fintech / Web3",
    time: "4 Weeks",
    cost: "$50k — $80k",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c55b9091-b0ca-4842-92d7-7be239f76440_800w.webp",
    featured: true,
  },
  {
    title: "Aether Labs",
    cat: "AI Research",
    time: "8 Weeks",
    cost: "$100k+",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3d4d588-f8cc-4129-8a9b-d0f004d15ab4_800w.webp",
  },
  {
    title: "Mono Objects",
    cat: "E-Commerce",
    time: "6 Weeks",
    cost: "$30k — $50k",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d80181f-00cd-4e1e-9a4b-d2a9c4811268_800w.webp",
  },
  {
    title: "Lumina",
    cat: "SaaS Platform",
    time: "12 Weeks",
    cost: "$80k — $120k",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce5b89c0-9457-4f7b-8448-33b0e21f643a_800w.webp",
    featured: true,
    badge: "Awarded"
  },
  {
    title: "Carbon",
    cat: "Sustainability",
    time: "5 Weeks",
    cost: "$40k — $60k",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/809511d8-3f42-4b75-a11a-ae6515af0d22_800w.webp",
  },
  {
    title: "Vanguard",
    cat: "Architecture",
    time: "10 Weeks",
    cost: "$90k+",
    img: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function CaseStudies() {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.mobileHeader}>
            <p className={styles.desc}>
              <span className={styles.descHighlight}>
                Selected engagements from the last 24 months
              </span>
              <span className="block">
                across fintech, SaaS, and culture-driven brands.
              </span>
            </p>
            <p className={styles.disclaimer}>
              All projects shown are client-approved
            </p>
          </div>

          <div className={styles.desktopSticky}>
            <span className={styles.label}>02 — WORK</span>
            <h2 className={styles.title}>Selected Case Studies</h2>
            <p className={styles.desc}>
              <span className={styles.descHighlight}>
                Selected engagements from the last 24 months
              </span>
              <span className="block">
                across fintech, SaaS, and culture-driven brands.
              </span>
            </p>
            <p className={styles.disclaimer}>
              All projects shown are client-approved
            </p>
            <div className={styles.divider}></div>
          </div>

          <div className={styles.archiveBtnWrapper}>
            <button className={styles.archiveBtn}>
              View Archive
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Listings */}
        <div className={styles.listings}>
          {projects.map((p, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.imageWrapper}>
                <img src={p.img} className={styles.image} alt={p.title} />
                {(p.featured || p.badge) && (
                  <div className={styles.badge}>
                     {p.badge ? p.badge : "Featured"}
                  </div>
                )}
              </div>
              <div className={styles.itemHeader}>
                <div>
                  <h3 className={styles.itemTitle}>{p.title}</h3>
                  <p className={styles.itemCategory}>{p.cat}</p>
                </div>
              </div>
              <div className={styles.itemMeta}>
                <span className={styles.metaLabel}>{p.time}</span>
                <span className={styles.metaValue}>{p.cost}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
