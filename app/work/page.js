import { ArrowRight, ArrowUpRight, ChevronDown, Lock } from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./page.module.css";

const workItems = [
  {
    title: "Atlas One",
    industry: "AI / B2B SaaS",
    engagement: "Platform",
    duration: "12 Weeks",
    budget: "$100k — $120k",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8d8880b-9089-4e4c-a2eb-1b0090d179d5_3840w.webp?w=800&q=80",
    featured: true,
    fullWidth: true,
  },
  {
    title: "Axis Commerce",
    industry: "E-Commerce",
    engagement: "Full System",
    duration: "10 Weeks",
    budget: "$60k — $95k",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b5079f4-4ddd-433b-a936-fc8f7dea9df0_3840w.webp?w=800&q=80",
    featured: true,
  },
  {
    title: "Helio Health",
    industry: "Healthcare",
    engagement: "Launch",
    duration: "7 Weeks",
    budget: "$45k — $70k",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4bab4f49-337a-442a-b05d-cf03ea4a11c6_3840w.webp?w=800&q=80",
    featured: true,
    badge: "Awarded"
  },
  {
    title: "Northwind Capital",
    industry: "Fintech",
    engagement: "Design Sprint",
    duration: "4 Weeks",
    budget: "$35k — $55k",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/685434ff-bb15-4b85-8b97-4f7f40f43ac1_3840w.webp?w=800&q=80",
  },
  {
    title: "Redwood Studio",
    industry: "Creative",
    engagement: "Platform",
    duration: "6 Weeks",
    budget: "$25k — $45k",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7757574-686b-45a4-bdb2-6afccac45088_3840w.webp?w=800&q=80",
  },
  {
    title: "Meridian Energy",
    industry: "Sustainability",
    engagement: "Launch",
    duration: "5 Weeks",
    budget: "$40k — $60k",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a572bd2-eb60-4c9c-a466-264ea1eb7261_3840w.webp?w=800&q=80",
  },
  {
    title: "Northwind Capital",
    industry: "Fintech",
    engagement: "Design Sprint",
    duration: "4 Weeks",
    budget: "$35k — $55k",
    img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/685434ff-bb15-4b85-8b97-4f7f40f43ac1_3840w.webp?w=800&q=80",
  },
];

export default function WorkPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero */}
      <div className={styles.heroSection}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 lg:col-span-7">
            <h1 className={styles.heroTitle}>Selected Work</h1>
            <p className={styles.heroDesc}>
              <span className={styles.heroDescHighlight}>
                A selection of projects where strategy, design, and execution
                aligned.
              </span>{" "}
              We build systems, not just pages, for ambitious brands ready to
              define their category.
            </p>

            <div className={styles.confidentialNote}>
              <Lock size={12} className="text-[#D6FF4F]" />
              Full case studies available upon request for confidential work.
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Layout */}
      <div className={styles.contentWrapper}>
        <div className={styles.gridContainer}>
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className="space-y-6">
              <h2 className="sr-only">Filters</h2>
              <div className={styles.filterLabel}>Filter by</div>

              <div className="space-y-2">
                <details className={styles.details} open>
                  <summary className={styles.summary}>
                    <span>Discipline</span>
                    <ChevronDown size={14} className={styles.chevron} />
                  </summary>
                  <div className={styles.filterOptions}>
                    <Link href="#" className={styles.filterOption}>Brand Identity</Link>
                    <Link href="#" className={styles.filterOption}>Product Design</Link>
                    <Link href="#" className={styles.filterOption}>Web Development</Link>
                    <Link href="#" className={styles.filterOption}>Motion</Link>
                  </div>
                </details>

                <details className={styles.details}>
                  <summary className={styles.summary}>
                    <span>Industry</span>
                    <ChevronDown size={14} className={styles.chevron} />
                  </summary>
                  <div className={styles.filterOptions}>
                    <Link href="#" className={styles.filterOption}>Fintech</Link>
                    <Link href="#" className={styles.filterOption}>SaaS / B2B</Link>
                  </div>
                </details>
              </div>
            </div>

            <div className={styles.archiveLinks}>
              <Link href="/work" className={styles.archiveLink}>
                <div>
                  <div className={styles.archiveTextTitle}>Archive</div>
                  <div className={styles.archiveTextDesc}>Older projects & experiments</div>
                </div>
                <ArrowRight size={14} className="text-[#A1A1A6]" />
              </Link>

              <Link href="/work" className={styles.archiveLink}>
                <div>
                  <div className={styles.archiveTextTitle}>Confidential</div>
                  <div className={styles.archiveTextDesc}>NDAs & Internal Tools</div>
                </div>
                <Lock size={12} className="text-[#A1A1A6]" />
              </Link>
            </div>
          </div>

          {/* Listings */}
          <div className={styles.listings}>
            {/* Info Block */}
            <div className={`${styles.infoBlock} ${styles.fullCard}`}>
              <div className={styles.infoContent}>
                <p className={styles.infoText}>
                  Each engagement below represents a close collaboration,
                  typically spanning 4–12 weeks.
                </p>
              </div>
            </div>

            {/* Work Items */}
            {workItems.map((item, i) => (
              <Link href="/project" key={i} className={`${styles.card} ${item.fullWidth ? styles.fullCard : ''}`}>
                <div className={styles.cardImageWrapper}>
                  <img src={item.img} className={styles.cardImage} alt={item.title} />
                  {(item.featured || item.badge) && (
                     <div className={styles.featuredBadge}>
                       {item.badge ? item.badge : "Featured"}
                     </div>
                  )}
                </div>

                <div className="flex flex-col gap-6">
                  <div className={styles.cardHeader}>
                    <h2 className={styles.cardTitle}>{item.title}</h2>
                    <ArrowUpRight size={24} className={styles.cardArrow} />
                  </div>

                  <div className={styles.cardGrid}>
                    <div className={styles.metaBlock}>
                       <span className={styles.metaLabel}>Industry</span>
                       <span className={styles.metaValue}>{item.industry}</span>
                    </div>
                    <div className={styles.metaBlock}>
                       <span className={styles.metaLabel}>Engagement</span>
                       <span className={styles.metaValue}>{item.engagement}</span>
                    </div>
                    <div className={styles.metaBlock}>
                       <span className={styles.metaLabel}>Duration</span>
                       <span className={styles.metaValue}>{item.duration}</span>
                    </div>
                    <div className={styles.metaBlock}>
                       <span className={styles.metaLabel}>Budget</span>
                       <span className={`${styles.metaValue} ${styles.metaValueHighlight}`}>
                         {item.budget}
                       </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

             {/* Bottom Info */}
             <div className={`${styles.infoBlock} ${styles.fullCard}`}>
              <div className={styles.endSection}>
                 <div className={styles.endHeader}>
                    <div className={styles.endDivider}></div>
                    <div className={styles.endLabel}>End of selected work</div>
                    <div className={styles.endDivider}></div>
                 </div>
                 <div className={styles.endContent}>
                    <p className={styles.infoText}>More work available in the archive.</p>
                    <Link href="/work" className={styles.viewArchiveBtn}>
                       <span className={styles.archiveTextTitle}>View Archive</span>
                       <ArrowRight size={14} className="text-[#A1A1A6]" />
                    </Link>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Who This Is For */}
      <section className={styles.whoSection}>
         <div className={styles.whoContainer}>
            <div className="max-w-2xl">
               <div className={styles.filterLabel}>Who This Work Is For</div>
               <ul className={styles.whoList}>
                  <li className={styles.whoItem}>
                     <span className={styles.dot}></span>
                     <span>Funded startups preparing for launch</span>
                  </li>
                  <li className={styles.whoItem}>
                     <span className={styles.dot}></span>
                     <span>Scale-ups refining their product narrative</span>
                  </li>
                  <li className={styles.whoItem}>
                     <span className={styles.dot}></span>
                     <span>Teams who value systems over surface design</span>
                  </li>
               </ul>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
