import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.slogan}>Design for the digital age</div>

      <div className={styles.wrapper}>
        <div className={styles.mainGrid}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLogo}>
              <div className={styles.logoDot}></div>
              <span className={styles.logoText}>STUDIO</span>
            </Link>
            <p className={styles.brandDesc}>
              We help ambitious companies build future-proof brands and digital
              products that stand the test of time.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}>
                <Instagram size={18} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Twitter size={18} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.linksTitle}>Sitemap</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/project" className={styles.linkItem}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.linkItem}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/studio" className={styles.linkItem}>
                  Studio
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.linksTitle}>Socials</h4>
            <ul className={styles.linksList}>
              <li>
                <a href="#" className={styles.linkItem}>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className={styles.linkItem}>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className={styles.linkItem}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / New Business */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.linksTitle}>New Business</h4>
            <p className={styles.newsletterDesc}>
              Currently accepting new projects for Q3 2024. Let's build
              something great.
            </p>
            <a href="mailto:hello@studio.com" className={styles.emailLink}>
              hello@studio.com
            </a>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.legalLinks}>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms
            </Link>
          </div>
          <span>© 2025 Studio Inc.</span>
        </div>
      </div>
    </footer>
  );
}
