"use client";
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Web Development", href: "/services/webDevelopment" },
    { name: "Digital Marketing", href: "/services/DigitalMarketing" },
    { name: "Social Media", href: "/services/SocialMedia" },
    { name: "Graphic Design", href: "/services/GraphicDesign" },
    { name: "Creative Content", href: "/services/CreativeContent" },
    { name: "SEO", href: "/services/SEO" },
    { name: "Branding", href: "/services/branding" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/actaldigital", icon: Facebook },
    { name: "Instagram", href: "https://www.instagram.com/actal_digital/", icon: Instagram },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/actaldigital/", icon: Linkedin },
  ];

  return (
    <footer className={styles.footer}>
      {/* Dark CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Let's build something<br />great together
          </h2>
          <p className={styles.ctaSubtitle}>
            Get in touch to explore how we can help your business reach its full potential.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get Started Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={styles.wrapper}>
          <div className={styles.footerGrid}>
            {/* Brand Column */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/logo3.png"
                  alt="Actal Digital"
                  width={140}
                  height={48}
                  style={{ objectFit: 'contain' }}
                />
              </Link>
              <p className={styles.brandDesc}>
                We help businesses succeed in the digital space by creating thoughtful solutions that combine smart design, reliable technology, and a deep understanding of what your users really need.
              </p>
              <div className={styles.socials}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.name}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Email Column */}
            <div className={styles.emailCol}>
              <span className={styles.emailLabel}>You can also email us at:</span>
              <a href="mailto:contact@actaldigital.com" className={styles.emailLink}>
                contact@actaldigital.com
              </a>
            </div>

            {/* Services Column */}
            <div className={styles.navCol}>
              <span className={styles.colLabel}>Services</span>
              <nav className={styles.footerNav}>
                {serviceLinks.map((link) => (
                  <Link key={link.name} href={link.href} className={styles.navLink}>
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Navigation Column */}
            <div className={styles.navCol}>
              <span className={styles.colLabel}>Company</span>
              <nav className={styles.footerNav}>
                {navLinks.map((link) => (
                  <Link key={link.name} href={link.href} className={styles.navLink}>
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={styles.bottomBar}>
            <span className={styles.copyright}>© 2026 Actal Digital. All Rights Reserved.</span>
            <div className={styles.legalLinks}>
              <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
              <Link href="/terms" className={styles.legalLink}>Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}