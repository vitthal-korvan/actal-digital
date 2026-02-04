import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./CaseStudies.module.css";

export default function CaseStudies() {
  const { currentLang } = useLanguage();
  // 1. Translations Dictionary
  const translations = {
    EN: {
      title: "Our Services",
      descHighlight: "Selected engagements from the last 24 months ",
      descSub: "across fintech, SaaS, and culture-driven brands.",
      disclaimer: "All projects shown are client-approved",
      featuredBadge: "Featured",
      awardedBadge: "Awarded",
      projects: [
        { title: "Web Development", img: "/web.h.png", featured: true, link: "/services/webDevelopment" },
        { title: "Digital Marketing", img: "/digital.h.png", link: "/services/DigitalMarketing" },
        { title: "Social Media", img: "/social.h.png", link: "/services/SocialMedia" },
        { title: "Graphic Design", img: "/graphic.h.png", featured: true, badge: "Awarded", link: "/services/GraphicDesign" },
        { title: "Creative Content", img: "/creative.h.png", link: "/services/CreativeContent" },
        { title: "Search Engine Optimization (SEO)", img: "/seo.h.png", link: "/services/SEO" },
        { title: "Branding", img: "/branding.h.png", link: "/services/ORM" },
      ]
    },
    AR: {
      title: "خدماتنا",
      descHighlight: "مشاريع مختارة من آخر 24 شهرًا ",
      descSub: "عبر التكنولوجيا المالية، البرمجيات، والعلامات التجارية الثقافية.",
      disclaimer: "جميع المشاريع المعروضة معتمدة من قبل العملاء",
      featuredBadge: "مميز",
      awardedBadge: "حائز على جائزة",
      projects: [
        { title: "تطوير المواقع", img: "/web.h.png", featured: true, link: "/services/webDevelopment" },
        { title: "التسويق الرقمي", img: "/digital.h.png", link: "/services/DigitalMarketing" },
        { title: "وسائل التواصل الاجتماعي", img: "/social.h.png", link: "/services/SocialMedia" },
        { title: "التصميم الجرافيكي", img: "/graphic.h.png", featured: true, badge: "Awarded", link: "/services/GraphicDesign" },
        { title: "المحتوى الإبداعي", img: "/creative.h.png", link: "/services/CreativeContent" },
        { title: "تحسين محركات البحث (SEO)", img: "/seo.h.png", link: "/services/SEO" },
        { title: "العلامة التجارية", img: "/branding.h.png", link: "/services/ORM" },
      ]
    }
  };

  const t = translations[currentLang] || translations["EN"];

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.mobileHeader}>
            <p className={styles.desc}>
              <span className={styles.descHighlight}>{t.descHighlight}</span>
              <span className="block">{t.descSub}</span>
            </p>
            <p className={styles.disclaimer}>{t.disclaimer}</p>
          </div>

          <div className={styles.desktopSticky}>
            <h2 className={styles.title}>{t.title}</h2>
            <p className={styles.desc}>
              <span className={styles.descHighlight}>{t.descHighlight}</span>
              <span className="block">{t.descSub}</span>
            </p>
            <p className={styles.disclaimer}>{t.disclaimer}</p>
            <div className={styles.divider}></div>
          </div>
        </div>

        {/* Listings */}
        <div className={styles.listings}>
          {t.projects.map((p, i) => (
            <div key={i} className={styles.item}>
              <Link href={p.link || "#"} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                  <Image src={p.img} className={styles.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 50vw" />
                  {(p.featured || p.badge) && (
                    <div className={styles.badge}>
                      {p.badge === "Awarded" ? t.awardedBadge : t.featuredBadge}
                    </div>
                  )}
                </div>
              </Link>

              <div className={styles.itemHeader}>
                <div>
                  <h3 className={styles.itemTitle}>{p.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}