import { Check, X } from "lucide-react";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import styles from "./page.module.css";

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero */}
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Services</h1>

        <div className={styles.heroContent}>
          <div className={styles.heroTextCol}>
            <p className={styles.heroSubtitle}>
               We partner with teams at critical moments — when clarity,
               systems, and execution matter most.
            </p>
            <p className={styles.heroDesc}>
               Our engagements are designed to be focused, collaborative, and
               outcome-driven. No philosophy. No hype. Just intent.
            </p>
          </div>
        </div>
      </div>

      {/* Engagement Models */}
      <section className={styles.modelsSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>01 — ENGAGEMENT MODELS</span>
          <h2 className={styles.sectionTitle}>How we work together</h2>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardNumber}>01</div>
              <div className={styles.cardDuration}>4–6 Weeks</div>
            </div>
            <h3 className={styles.cardTitle}>Design Sprint</h3>
            <p className={styles.cardDesc}>
              Best for early-stage clarity, alignment, and direction. We turn
              abstract ideas into tangible directions.
            </p>
            <div className="flex-1">
              <span className={styles.includesLabel}>Includes</span>
              <ul className={styles.includesList}>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> Strategy workshops</li>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> UX structure & flows</li>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> Visual direction</li>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> Key screens or concepts</li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <p className={styles.cardFooterText}>A clear foundation to move forward with confidence.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card} style={{borderColor: '#D6FF4F'}}>
            <div className={styles.cardTop}>
              <div className={styles.cardNumber} style={{backgroundColor: '#D6FF4F', color: '#0E0F11'}}>02</div>
              <div className={styles.cardDuration}>8–12 Weeks</div>
            </div>
            <h3 className={styles.cardTitle}>Full System</h3>
            <p className={styles.cardDesc}>
              Best for companies building or evolving a complete product or
              brand system.
            </p>
            <div className="flex-1">
              <span className={styles.includesLabel}>Includes</span>
              <ul className={styles.includesList}>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> Brand & product architecture</li>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> Comprehensive Design System</li>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> Core product / platform design</li>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> Launch-ready assets</li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <p className={styles.cardFooterText}>A scalable system, not a collection of screens.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.cardNumber}>03</div>
              <div className={styles.cardDuration}>6–8 Weeks</div>
            </div>
            <h3 className={styles.cardTitle}>Launch</h3>
            <p className={styles.cardDesc}>
              Best for new products, rebrands, or major releases requiring a
              high-impact entry.
            </p>
            <div className="flex-1">
              <span className={styles.includesLabel}>Includes</span>
              <ul className={styles.includesList}>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> Positioning refinement</li>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> Visual & motion assets</li>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> Web & marketing surfaces</li>
                <li className={styles.includesItem}><Check size={16} className={styles.checkIcon} /> Launch coordination</li>
              </ul>
            </div>
            <div className={styles.cardFooter}>
              <p className={styles.cardFooterText}>A cohesive, confident market entry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <div className={styles.capabilities}>
        <div className={styles.capabilitiesContainer}>
           <span className={styles.capLabel}>Core Capabilities</span>
              <span className={styles.capItem}>Digital Marketing</span>
              <span className={styles.capDivider}>/</span>
              <span className={styles.capItem}>Content Marketing</span>
              <span className={styles.capDivider}>/</span>
              <span className={styles.capItem}>Social Media Marketing</span>
              <span className={styles.capDivider}>/</span>
              <span className={styles.capItem}>Online Reputation Management</span>
              <span className={styles.capDivider}>/</span>
              <span className={styles.capItem}>Graphic Designing</span>
              <span className={styles.capDivider}>/</span>
              <span className={styles.capItem}>Search Engine Optimization</span>
              <span className={styles.capDivider}>/</span>
              <span className={styles.capItem}>Website Design And Development</span>
              <span className={styles.capDivider}>/</span>
              <span className={styles.capItem}>Video Editing</span>
           <div className="hidden md:block w-24"></div>
        </div>
      </div>

      {/* Operations */}
      <section className={styles.operations}>
        <div className={styles.opsContainer}>
          <div className={styles.opsGrid}>
            <div className={styles.opsLeft}>
               <span className={styles.sectionLabel} style={{color: '#D6FF4F'}}>02 — OPERATIONS</span>
               <h2 className={styles.opsTitle}>Collaboration, not hand-offs.</h2>
               <p className={styles.opsDesc}>
                 We integrate with your team to maintain velocity. Our process
                 is designed to cut through noise and deliver value weekly.
               </p>
            </div>

            <div className={styles.opsRight}>
               {/* What to expect */}
               <div>
                  <h3 className={styles.colHeader}>
                    <div className={styles.dotGreen}></div>
                    What to expect
                  </h3>
                  <div className={styles.listGroup}>
                     <div className={styles.listGroupItem}>
                        <span className={styles.itemTitle}>Small, senior team</span>
                        <span className={styles.itemDesc}>Direct access to the people doing the work.</span>
                     </div>
                     <div className={styles.listGroupItem}>
                        <span className={styles.itemTitle}>Direct collaboration</span>
                        <span className={styles.itemDesc}>Slack connect channels and async video updates.</span>
                     </div>
                     <div className={styles.listGroupItem}>
                        <span className={styles.itemTitle}>Weekly checkpoints</span>
                        <span className={styles.itemDesc}>Consistent momentum with no dark periods.</span>
                     </div>
                  </div>
               </div>

               {/* What we avoid */}
               <div>
                  <h3 className={styles.colHeader} style={{color: '#52525B'}}>
                    <div className={styles.dotDark}></div>
                    What we avoid
                  </h3>
                  <div className={styles.listGroup} style={{opacity: 0.6}}>
                     <div className={styles.listGroupItem}>
                        <span className={styles.itemTitleStrike}>Endless revisions</span>
                        <span className={styles.itemDescDim}>We focus on making the right decisions early.</span>
                     </div>
                     <div className={styles.listGroupItem}>
                        <span className={styles.itemTitleStrike}>Bloated teams</span>
                        <span className={styles.itemDescDim}>No account managers filtering your feedback.</span>
                     </div>
                     <div className={styles.listGroupItem}>
                        <span className={styles.itemTitleStrike}>Design-by-committee</span>
                        <span className={styles.itemDescDim}>We guide the process to prevent dilution.</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <div className={styles.pricing}>
         <p className={styles.pricingText}>
           Most engagements fall between <span className={styles.pricingHighlight}>$35k</span> and <span className={styles.pricingHighlight}>$120k</span>, depending on scope and timeline.
         </p>
         <p className={styles.pricingNote}>We’ll always define expectations upfront. No hidden fees.</p>
      </div>

      {/* Who Grid */}
      <section className={styles.whoGridSection}>
        <div className={styles.whoGridContainer}>
           <div className={styles.whoGrid}>
              {/* Good Fit */}
              <div className={`${styles.whoCard} ${styles.whoCardGood}`}>
                 <div className={styles.whoHeader}>
                    <div className={`${styles.whoIconBox} ${styles.goodIcon}`}>
                       <Check size={16} />
                    </div>
                    <h3 className={styles.whoTitle}>Who these engagements work best for</h3>
                 </div>
                 <ul className={styles.whoList}>
                    <li className={styles.whoListItem}><div className={styles.whoDot}></div> Projects without internal ownership.</li>
                    <li className={styles.whoListItem}><div className={styles.whoDot}></div> Tight deadlines without flexibility.</li>
                    <li className={styles.whoListItem}><div className={styles.whoDot}></div> Execution-only requests without context.</li>
                 </ul>
              </div>

              {/* Bad Fit */}
              <div className={`${styles.whoCard} ${styles.whoCardBad}`}>
                 <div className={styles.whoHeader}>
                    <div className={`${styles.whoIconBox} ${styles.badIcon}`}>
                       <X size={16} />
                    </div>
                    <h3 className={`${styles.whoTitle} ${styles.whoTitleBad}`}>Not a fit if...</h3>
                 </div>
                 <ul className={styles.whoList}>
                    <li className={styles.whoListItem}><div className={styles.whoDot}></div> You’re looking for quick fixes or patches.</li>
                    <li className={styles.whoListItem}><div className={styles.whoDot}></div> You need overnight delivery without strategy.</li>
                    <li className={styles.whoListItem}><div className={styles.whoDot}></div> You want execution without context.</li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
