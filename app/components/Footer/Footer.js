import { Facebook, Instagram, Linkedin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const { currentLang } = useLanguage();
  const translations = {
    EN: {
      brandDesc: "Actal Digital is a full-service digital marketing agency committed to helping businesses achieve lasting success online through strategic, data-driven solutions.",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About Us",
      careers: "Careers",
      contact: "Contact Us",
      servicesTitle: "Our Services",
      connectTitle: "Connect With Us",
      india: "India:",
      uae: "U.A.E:",
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
      copy: "© 2026 Actal Digital.",
      serviceList: [
        { name: "Web Development", path: "/services/webDevelopment" },
        { name: "Digital Marketing", path: "/services/DigitalMarketing" },
        { name: "Social Media", path: "/services/SocialMedia" },
        { name: "Graphic Design", path: "/services/GraphicDesign" },
        { name: "Creative Content", path: "/services/CreativeContent" },
        { name: "SEO", path: "/services/SEO" },
        { name: "Branding", path: "/services/ORM" },
      ]
    },
    AR: {
      brandDesc: "أكتال ديجيتال هي وكالة تسويق رقمي متكاملة الخدمات ملتزمة بمساعدة الشركات على تحقيق نجاح دائم عبر الإنترنت من خلال حلول استراتيجية قائمة على البيانات.",
      quickLinks: "روابط سريعة",
      home: "الرئيسية",
      about: "من نحن",
      careers: "الوظائف",
      contact: "اتصل بنا",
      servicesTitle: "خدماتنا",
      connectTitle: "تواصل معنا",
      india: "الهند:",
      uae: "الإمارات:",
      terms: "الشروط والأحكام",
      privacy: "سياسة الخصوصية",
      copy: "© 2026 أكتال ديجيتال.",
      serviceList: [
        { name: "تطوير المواقع", path: "/services/webDevelopment" },
        { name: "التسويق الرقمي", path: "/services/DigitalMarketing" },
        { name: "وسائل التواصل", path: "/services/SocialMedia" },
        { name: "التصميم الجرافيكي", path: "/services/GraphicDesign" },
        { name: "المحتوى الإبداعي", path: "/services/CreativeContent" },
        { name: "سيو (SEO)", path: "/services/SEO" },
        { name: "العلامة التجارية", path: "/services/ORM" },
      ]
    }
  };

  const t = translations[currentLang] || translations["EN"];

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.mainGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLogo}>
              <div className={styles.logoDot}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    src="/logo3.png"
                    alt="Actal Digital Logo"
                    width={270}
                    height={135}
                    className={styles.logoImage}
                    priority
                  />
                </div>
              </div>
            </Link>

            <p className={styles.brandDesc}>{t.brandDesc}</p>

            <div className={styles.socials}>
              <a href="https://www.instagram.com/actal_digital/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/actaldigital" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/company/actaldigital/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.linksTitle}>{t.quickLinks}</h4>
            <ul className={styles.linksList}>
              <li><Link href="/" className={styles.linkItem}>{t.home}</Link></li>
              <li><Link href="/blogs" className={styles.linkItem}>{t.about}</Link></li>
              <li><Link href="/studio" className={styles.linkItem}>{t.careers}</Link></li>
              <li><Link href="/project" className={styles.linkItem}>{t.contact}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linksCol}>
            <h4 className={styles.linksTitle}>{t.servicesTitle}</h4>
            <ul className={styles.linksList}>
              {t.serviceList.map((service, index) => (
                <li key={index}>
                  <Link href={service.path} className={styles.linkItem}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.linksTitle}>{t.connectTitle}</h4>
            <div className={styles.contactDetails}>
              <div className={styles.countryGroup}>
                <span className={styles.countryLabel}>{t.india}</span>
                <a href="tel:+919820730548" className={styles.contactLinkIcon}>
                  <Phone size={16} /> +91 9820730548
                </a>
                <a href="https://wa.me/919820715452" target="_blank" rel="noopener noreferrer" className={styles.contactLinkIcon}>
                  <MessageCircle size={16} className={styles.waIcon} /> +91 9820715452
                </a>
              </div>

              <div className={styles.countryGroup}>
                <span className={styles.countryLabel}>{t.uae}</span>
                <a href="tel:+971506758040" className={styles.contactLinkIcon}>
                  <Phone size={16} /> +971 50 6758040
                </a>
                <a href="https://wa.me/971503330548" target="_blank" rel="noopener noreferrer" className={styles.contactLinkIcon}>
                  <MessageCircle size={16} className={styles.waIcon} /> +971 50 3330548
                </a>
              </div>

              <a href="mailto:info@actaldigital.com" className={styles.emailLinkUnderline}>
                info@actaldigital.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.legalLinks}>
            <Link href="/terms" className={styles.linkItem}>{t.terms}</Link>
            <Link href="/privacy" className={styles.linkItem}>{t.privacy}</Link>
          </div>
          <span>{t.copy}</span>
        </div>
      </div>
    </footer>
  );
}