import { ArrowRight, Check, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import styles from "./page.module.css";

export default function ProjectPage() {
  return (
    <div className={styles.main}>
      <div className={styles.background}></div>
      <div className={styles.noise}></div>
      
      <Navbar />

      <main className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Left Column */}
            <div className={styles.leftCol}>
              <span className={styles.sectionLabel}>01 — INTAKE</span>
              <h1 className={styles.title}>
                Start a<br />
                <span className={styles.titleDim}>Project</span>
              </h1>
              <p className={styles.description}>
                A short form to understand your needs and determine fit.
              </p>

              <div className={styles.contactInfo}>
                <div>
                  <h3 className={styles.infoTitle}>Our Process</h3>
                  <p className={styles.infoText}>
                    We engage with a limited number of clients per year to ensure maximum focus and impact. We review every request personally.
                  </p>
                </div>
                <div>
                  <h3 className={styles.infoTitle}>Direct Contact</h3>
                  <a href="mailto:info@actaldigital.com" className={styles.emailLink}>info@actaldigital.com</a>
                  <p className={styles.infoText} style={{color: '#52525B'}}>London, UK</p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className={styles.rightCol}>
              <form className={styles.formStack}>
                {/* Personal Info */}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Name</label>
                    <input type="text" placeholder="Jane Doe" className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input type="email" placeholder="jane@company.com" className={styles.input} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label}>Company Website</label>
                  <input type="url" placeholder="company.com" className={styles.input} />
                </div>

                {/* Services */}
                <div>
                  <label className={styles.label} style={{marginBottom: '1.5rem'}}>Where can we help?</label>
                  <div className={styles.checkboxGrid}>
                     {['Branding & Identity', 'Digital Product (UX/UI)', 'Marketing Website', 'Motion System'].map((service) => (
                        <label key={service} className={styles.checkboxLabel}>
                           <input type="checkbox" className={styles.checkboxInput} />
                           <div className={styles.checkboxBox}>
                              <span className={styles.checkboxText}>{service}</span>
                              <Check size={16} className={styles.checkIcon} />
                           </div>
                        </label>
                     ))}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className={styles.formGrid}>
                   <div className={styles.formGroup}>
                      <label className={styles.label}>Budget Range (USD)</label>
                      <div className={styles.selectWrapper}>
                         <select className={`${styles.input} ${styles.select}`} defaultValue="">
                            <option value="" disabled className="text-[#23252B]">Select range</option>
                            <option value="30-50" style={{backgroundColor: '#15171B', color: '#A1A1A6'}}>$30k — $50k</option>
                            <option value="50-100" style={{backgroundColor: '#15171B', color: '#A1A1A6'}}>$50k — $100k</option>
                            <option value="100+" style={{backgroundColor: '#15171B', color: '#A1A1A6'}}>$100k +</option>
                         </select>
                         <ChevronDown className={styles.selectIcon} size={20} />
                      </div>
                   </div>
                   <div className={styles.formGroup}>
                      <label className={styles.label}>Ideal Timeline</label>
                      <div className={styles.selectWrapper}>
                         <select className={`${styles.input} ${styles.select}`} defaultValue="">
                            <option value="" disabled className="text-[#23252B]">Select timeline</option>
                            <option value="asap" style={{backgroundColor: '#15171B', color: '#A1A1A6'}}>As soon as possible</option>
                            <option value="1-2" style={{backgroundColor: '#15171B', color: '#A1A1A6'}}>1 - 2 Months</option>
                            <option value="3-4" style={{backgroundColor: '#15171B', color: '#A1A1A6'}}>3 - 4 Months</option>
                            <option value="flexible" style={{backgroundColor: '#15171B', color: '#A1A1A6'}}>Flexible</option>
                         </select>
                         <ChevronDown className={styles.selectIcon} size={20} />
                      </div>
                   </div>
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                   <label className={styles.label}>Project Details</label>
                   <textarea rows={4} placeholder="Tell us about your vision, goals, and any specific challenges..." className={`${styles.input} ${styles.textarea}`}></textarea>
                </div>

                {/* Submit */}
                <div className={styles.submitSection}>
                   <button type="button" className={styles.submitBtn}>
                      Send Request <ArrowRight size={18} />
                   </button>
                   <div className={styles.submitNote}>
                      <span className={styles.noteDot}></span>
                      <p className={styles.noteText}>Brief form · 48h response</p>
                   </div>
                </div>

              </form>
            </div>

          </div>
        </div>
      </main>

      <footer className={styles.footer}>
         <div className={styles.footerContainer}>
            <div>© 2025 Actal Digital.</div>
            <div className={styles.footerLinks}>
               <a href="#" className={styles.footerLink}>Privacy</a>
               <a href="#" className={styles.footerLink}>Terms</a>
               <a href="mailto:info@actaldigital.com" className={styles.footerLink}>Support</a>
            </div>
         </div>
      </footer>
    </div>
  );
}
