import { ArrowDown } from "lucide-react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./page.module.css";

export default function StudioPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero */}
      <div 
        className={styles.heroSection}
        style={{backgroundImage: "url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8de1f873-0a6c-4f85-811e-8fc361da012a_3840w.webp')"}}
      >
        <div className={styles.heroBlur}></div>
        
        <div className={styles.heroTop}>
           <h1 className={styles.heroTitle}>
             Actal<span className={styles.heroTitleDot}>Digital.</span>
           </h1>
           <div className={styles.spinnerContainer}>
              <div className={styles.spinningText}>
                 <svg viewBox="0 0 100 100" className={styles.spinningSvg}>
                    <path id="textPath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent"></path>
                    <text className={styles.textPath}>
                       <textPath href="#textPath" startOffset="0%">
                         • Systems • Design • Strategy • Clarity
                       </textPath>
                    </text>
                 </svg>
              </div>
              <ArrowDown size={24} color="#D6FF4F" strokeWidth={2} />
           </div>
        </div>

        <div className={styles.heroContent}>
           <div className={styles.colSpan5}>
              <div className={styles.statusBadge}>
                 <span className={styles.pingDot}>
                    <span className={styles.pingAnimate}></span>
                    <span className={styles.pingStatic}></span>
                 </span>
                 Accepting New Work
              </div>
           </div>
           <div className={styles.colSpan7}>
              <p className={styles.heroTagline}>
                A digital agency focused on <span style={{color: '#D6FF4F'}}>clarity</span> over volume.
              </p>
              <div className={styles.heroDescGrid}>
                 <p className={styles.textRelaxed}>
                   We’re systems-first and opinionated by design. We choose the constraints that keep the work honest—and say no to what doesn’t fit.
                 </p>
                 <p className={styles.textRelaxed}>
                   No layers, no handoffs, no fluff. Just senior practitioners solving core problems with coherent design systems.
                 </p>
              </div>
           </div>
        </div>
      </div>

      {/* Why This Exists */}
      <section className={styles.sectionContainer}>
         <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>01 — WHY THIS EXISTS</span>
            <h2 className={styles.sectionTitle}>The model is small on purpose</h2>
         </div>
         <div className={styles.grid12}>
            <div className={styles.colSpan5}>
               <p className={styles.textRelaxed}>
                 We didn’t build this to become a typical agency. We built it to stay close to the decisions that shape outcomes—language, structure, systems.
               </p>
            </div>
            <div className={styles.colSpan7}>
               <div className={styles.whyContent}>
                  <p className={styles.whyText}>
                    Scale introduces distance: layers, handoffs, and diluted accountability. We prefer fewer projects with deeper involvement, where the work can be coherent from first principle to final detail.
                  </p>
                  <p className={styles.whyText}>
                    Systems matter because they outlive any single deliverable. They make decisions repeatable, teams faster, and products easier to evolve.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Principles */}
      <section className={styles.principlesSection}>
         <div className={styles.sectionContainer}>
             <div className={styles.sectionHeader}>
                <span className={styles.sectionLabel}>02 — PRINCIPLES</span>
                <h2 className={styles.sectionTitle}>The rules we don’t bend</h2>
             </div>
             <div className={styles.principlesGrid}>
                {/* 1 */}
                <div className={styles.principleCard}>
                   <h3 className={styles.principleTitle}>Focus beats scale</h3>
                   <p className={styles.textRelaxed}>
                     We’d rather do fewer things with total attention than ship volume for its own sake.
                   </p>
                </div>
                {/* 2 */}
                <div className={styles.principleCard}>
                   <h3 className={styles.principleTitle}>Senior execution only</h3>
                   <p className={styles.textRelaxed}>
                     The people in the room are the people doing the work—no relays, no proxies.
                   </p>
                </div>
                {/* 3 */}
                <div className={styles.principleCard}>
                   <h3 className={styles.principleTitle}>Systems over assets</h3>
                   <p className={styles.textRelaxed}>
                     We optimize for durable structures: language, components, patterns, and decision logic.
                   </p>
                </div>
                {/* 4 */}
                <div className={styles.principleCard}>
                   <h3 className={styles.principleTitle}>Depth earns taste</h3>
                   <p className={styles.textRelaxed}>
                     We get close enough to your product to make calls that feel inevitable, not ornamental.
                   </p>
                </div>
             </div>
         </div>
      </section>

      {/* Boundaries */}
      <section className={styles.boundariesSection}>
         <div className="max-w-[1550px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
               <div className="md:col-span-4">
                  <span className={styles.sectionLabel} style={{color: '#D6FF4F'}}>03 — BOUNDARIES</span>
                  <h2 className={styles.sectionTitle} style={{marginBottom: '1.5rem'}}>What we optimize for—and what we don’t</h2>
                  <p className={styles.boundariesDesc}>
                    Trust is built through constraints. Here’s what we’re willing to trade off to keep the work sharp.
                  </p>
               </div>
               
               <div className="md:col-span-8">
                  <div className={styles.boundariesLists}>
                     {/* We Choose */}
                     <div>
                        <h3 className={styles.listTitle}>
                           <div className={styles.dotGreen}></div>
                           We choose
                        </h3>
                        <ul className={styles.list}>
                           <li className={styles.listGroupItem}>
                              <span className={styles.groupItemTitle}>Coherence over coverage</span>
                              <span className={styles.groupItemDesc}>One strong system beats ten disconnected outputs.</span>
                           </li>
                           <li className={styles.listGroupItem}>
                              <span className={styles.groupItemTitle}>Clear decisions over consensus</span>
                              <span className={styles.groupItemDesc}>We’d rather be accountable than broadly agreeable.</span>
                           </li>
                           <li className={styles.listGroupItem}>
                              <span className={styles.groupItemTitle}>Longevity over novelty</span>
                              <span className={styles.groupItemDesc}>We avoid trends that make maintenance harder six months later.</span>
                           </li>
                        </ul>
                     </div>

                     {/* We Don't */}
                     <div>
                        <h3 className={`${styles.listTitle} ${styles.listTitleDim}`}>
                           <div className={styles.dotDark}></div>
                           We don’t
                        </h3>
                        <ul className={`${styles.list} ${styles.listOpacity}`}>
                           <li className={styles.listGroupItem}>
                              <span className={styles.strikeTitle}>Chase volume</span>
                              <span className={styles.strikeDesc}>We keep capacity intentionally limited.</span>
                           </li>
                           <li className={styles.listGroupItem}>
                              <span className={styles.strikeTitle}>Sell “more” for its own sake</span>
                              <span className={styles.strikeDesc}>If the right answer is less, we’ll say it.</span>
                           </li>
                           <li className={styles.listGroupItem}>
                              <span className={styles.strikeTitle}>Pretend to be a big team</span>
                              <span className={styles.strikeDesc}>No inflated org charts. Just responsibility.</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Accountability */}
      <section className={styles.accountabilitySection}>
         <div className={styles.sectionContainer}>
             <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-5">
                   <span className={styles.sectionLabel}>04 — ACCOUNTABILITY</span>
                   <h2 className={styles.sectionTitle} style={{marginBottom: '1.5rem'}}>Senior by default</h2>
                   <p className={styles.boundariesDesc}>
                     This agency is founder-led and senior-only. The point isn’t headcount—it’s ownership.
                   </p>
                </div>
                <div className="md:col-span-7">
                   <div className={styles.accountabilityCard}>
                      <p className={styles.textRelaxed}>
                        You’ll work directly with the people responsible for the outcome. We keep the circle tight so decisions stay consistent and the work stays true to the intent.
                      </p>
                   </div>
                </div>
             </div>
         </div>
      </section>

      {/* Evolution */}
      <section className={styles.evolutionSection}>
         <div className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
               <span className={styles.sectionLabel}>05 — EVOLUTION</span>
               <h2 className={styles.sectionTitle}>A living system</h2>
            </div>
            <div className={styles.evolutionGrid}>
               <div className={styles.evolutionCard}>
                  <h3 className={styles.evolutionTitle}>Continuous refinement</h3>
                  <p className={styles.textRelaxed}>
                    We update our thinking when the evidence changes—tools, patterns, language, and judgment.
                  </p>
               </div>
               <div className={styles.evolutionCard}>
                  <h3 className={styles.evolutionTitle}>Learn from each engagement</h3>
                  <p className={styles.textRelaxed}>
                    Every project teaches us what holds up under real constraints—and what doesn’t.
                  </p>
               </div>
               <div className={styles.evolutionCard}>
                  <h3 className={styles.evolutionTitle}>No templates</h3>
                  <p className={styles.textRelaxed}>
                    We reuse principles, not outputs. The work should fit your product—not our portfolio.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA Next */}
      <section className={styles.ctaSection}>
         <div className={styles.ctaContainer}>
            <span className={styles.ctaLabel}>06 — NEXT</span>
            <h2 className={styles.ctaHeading}>If this way of working resonates</h2>
            <div className={styles.ctaContent}>
               <a href="/services" className={styles.ctaButton}>View Services</a>
               <span className={styles.ctaSub}>No urgency · Just alignment</span>
               <span className={styles.ctaContact}>
                  Prefer to reach out directly? <a href="mailto:info@actaldigital.com" className={styles.ctaLink}>info@actaldigital.com</a>
               </span>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
