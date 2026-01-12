import { ArrowRight, Feather } from "lucide-react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./page.module.css";

export default function BlogsPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <div className="w-full mt-32">
        {/* Hero */}
        <div className={styles.heroSection}>
          <span className={styles.heroLabel}>INTELLECTUAL SURFACE AREA</span>
          <h1 className={styles.heroTitle}>Blogs</h1>
          <p className={styles.heroDesc}>
            Notes on systems, design, and decision-making.
          </p>
        </div>

        {/* Featured Essay */}
        <div className={styles.sectionContainer}>
          <div className={styles.featuredSection}>
            <div className={styles.separator}></div>
            <article className={styles.featuredCard}>
              <div className={styles.featuredContent}>
                <div className={styles.featuredMeta}>
                   <span className={styles.featuredBadge}>Featured</span>
                   <span className={styles.featuredReadTime}>8 Min Read</span>
                </div>
                <h2 className={styles.featuredTitle}>
                   Why systems fail when ownership fragments
                </h2>
                <p className={styles.featuredDesc}>
                  We often blame the tools or the documentation when a design system rots. But the real failure point usually happens in the org chart, not Figma. Here is why distributed ownership creates design debt.
                </p>
                <div className={styles.readLink}>
                   Read Essay <ArrowRight size={16} />
                </div>
              </div>
              <div className={styles.featuredImageContainer}>
                 <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, #23252B, #0E0F11)'}}></div>
                 <img 
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b22b4c39-8a88-42ad-b41e-6ad95c041bd5_3840w.jpg?w=800&q=80" 
                    alt="Abstract editorial image" 
                    className={styles.featuredImage}
                 />
                 <div className={styles.featuredOverlay}></div>
              </div>
              <a href="#" className={styles.cardLinkOverlay} aria-label="Read full essay"></a>
            </article>
          </div>
        </div>

        {/* Filter */}
        <div className={styles.filterSticky}>
           <div className={styles.filterContainer}>
              <span className={styles.filterLabel}>Filter:</span>
              <button className={styles.filterBtnActive}>All</button>
              <button className={styles.filterBtnInactive}>Systems</button>
              <button className={styles.filterBtnInactive}>Process</button>
              <button className={styles.filterBtnInactive}>Perspective</button>
              <button className={styles.filterBtnInactive}>Reflections</button>
           </div>
        </div>

        {/* Journal Grid */}
        <div className={styles.sectionContainer}>
           <div className={styles.gridSection}>
              <div className={styles.journalGrid}>
                 {/* 1 */}
                 <article className={styles.journalCard}>
                    <div>
                       <div className={styles.cardTop}>
                          <span className={`${styles.cardTag} ${styles.cardTagProcess}`}>Process</span>
                          <span className={styles.cardTime}>6 Min</span>
                       </div>
                       <h3 className={styles.journalTitle}>Designing for longevity instead of launches</h3>
                       <p className={styles.cardDesc}>
                         The launch party is one night. The product has to live for years. Why we prioritize maintainable structures over "wow" moments that degrade by week two.
                       </p>
                    </div>
                    <div className={styles.cardFooter}>
                       <div className={styles.readMore}>Read <ArrowRight size={12} /></div>
                    </div>
                    <a href="#" className={styles.cardLinkOverlay} aria-label="Read article"></a>
                 </article>

                 {/* 2 */}
                 <article className={styles.journalCard}>
                    <div>
                       <div className={styles.cardTop}>
                          <span className={`${styles.cardTag} ${styles.cardTagReflections}`}>Reflections</span>
                          <span className={styles.cardTime}>5 Min</span>
                       </div>
                       <h3 className={styles.journalTitle}>What a “full system” engagement actually solves</h3>
                       <p className={styles.cardDesc}>
                         Most brands think they need a UI refresh. What they usually lack is a shared vocabulary between engineering and design.
                       </p>
                    </div>
                    <div className={styles.cardFooter}>
                       <div className={styles.readMore}>Read <ArrowRight size={12} /></div>
                    </div>
                    <a href="#" className={styles.cardLinkOverlay} aria-label="Read article"></a>
                 </article>

                 {/* 3 */}
                 <article className={styles.journalCard}>
                    <div>
                       <div className={styles.cardTop}>
                          <span className={`${styles.cardTag} ${styles.cardTagPerspective}`}>Perspective</span>
                          <span className={styles.cardTime}>4 Min</span>
                       </div>
                       <h3 className={styles.journalTitle}>When branding becomes a product problem</h3>
                       <p className={styles.cardDesc}>
                         Brand guidelines often die when they meet the constraints of a React component. How to bridge the gap between marketing fluff and product utility.
                       </p>
                    </div>
                    <div className={styles.cardFooter}>
                       <div className={styles.readMore}>Read <ArrowRight size={12} /></div>
                    </div>
                    <a href="#" className={styles.cardLinkOverlay} aria-label="Read article"></a>
                 </article>

                 {/* 4 */}
                 <article className={styles.journalCard}>
                    <div>
                       <div className={styles.cardTop}>
                          <span className={`${styles.cardTag} ${styles.cardTagProcess}`}>Process</span>
                          <span className={styles.cardTime}>7 Min</span>
                       </div>
                       <h3 className={styles.journalTitle}>Why we avoid templates (and what we reuse instead)</h3>
                       <p className={styles.cardDesc}>
                         Templates encourage sameness. Patterns encourage consistency. The subtle difference that defines whether a brand feels "premium" or "purchased".
                       </p>
                    </div>
                    <div className={styles.cardFooter}>
                       <div className={styles.readMore}>Read <ArrowRight size={12} /></div>
                    </div>
                    <a href="#" className={styles.cardLinkOverlay} aria-label="Read article"></a>
                 </article>

                 {/* 5 */}
                 <article className={styles.journalCard}>
                    <div>
                       <div className={styles.cardTop}>
                          <span className={`${styles.cardTag} ${styles.cardTagPerspective}`}>Perspective</span>
                          <span className={styles.cardTime}>5 Min</span>
                       </div>
                       <h3 className={styles.journalTitle}>Why more feedback often makes work worse</h3>
                       <p className={styles.cardDesc}>
                         Design by committee regresses to the mean. We discuss why small, empowered core teams ship better product than large, consensus-driven ones.
                       </p>
                    </div>
                    <div className={styles.cardFooter}>
                       <div className={styles.readMore}>Read <ArrowRight size={12} /></div>
                    </div>
                    <a href="#" className={styles.cardLinkOverlay} aria-label="Read article"></a>
                 </article>

                 {/* 6 */}
                 <article className={styles.journalCard}>
                    <div>
                       <div className={styles.cardTop}>
                          <span className={`${styles.cardTag} ${styles.cardTagPerspective}`}>Perspective</span>
                          <span className={styles.cardTime}>4 Min</span>
                       </div>
                       <h3 className={styles.journalTitle}>Why "clean UI" is often a design failure</h3>
                       <p className={styles.cardDesc}>
                         "Clean" is often code for "empty." We explore why information density, when managed correctly, is superior to minimalism for complex tools.
                       </p>
                    </div>
                    <div className={styles.cardFooter}>
                       <div className={styles.readMore}>Read <ArrowRight size={12} /></div>
                    </div>
                    <a href="#" className={styles.cardLinkOverlay} aria-label="Read article"></a>
                 </article>
              </div>
           </div>
        </div>

        {/* Editorial Note */}
        <div className={styles.editorialSection}>
           <div className={styles.editorialContainer}>
              <Feather className={styles.editorialIcon} size={24} />
              <p className={styles.editorialText}>
                "We write to clarify our thinking. Not everything here is a conclusion."
              </p>
              <span className={styles.editorialLabel}>Editorial Policy</span>
           </div>
        </div>

        {/* Soft CTA */}
        <section className={styles.softCta}>
           <div className={styles.softCtaContainer}>
              <h2 className={styles.softCtaTitle}>Does this thinking align with your needs?</h2>
              <div className={styles.softCtaLinks}>
                 <a href="#" className={styles.softLink}>See how we work <ArrowRight size={16} /></a>
                 <span className={styles.softPipe}>|</span>
                 <a href="/work" className={styles.softLink}>View selected work <ArrowRight size={16} /></a>
              </div>
           </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
