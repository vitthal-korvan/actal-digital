

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import actalLogo from "../../images/logo_footer.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          {/* Logo now wraps in a Link to redirect to Home ("/") */}
          <Link to="/">
            <img src={actalLogo} alt="Actal Logo" className={styles.logo} />
          </Link>
          <p>
            Helping businesses grow with smart digital strategies and
            performance-driven solutions.
          </p>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/digital">Services</Link></li>
              <li><Link to="/careers">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/digital">Digital Marketing</Link></li>
              <li><Link to="/seo">SEO</Link></li>
              <li><Link to="/content">Content Marketing</Link></li>
              <li><Link to="/webdesign">Web Development</Link></li>
              <li><Link to="/graphic">Graphic Designer</Link></li>
              <li><Link to="/socialmedia">Social Media Marketing</Link></li>
              <li><Link to="/video">Video Editing</Link></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Actal Digital. All rights reserved.</p>
        <div className={styles.socials}>
          <a href="https://www.facebook.com/actaldigital" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/actal_digital/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/company/109101988/admin/dashboard/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>

      <div className={styles.bigText}>ACTAL &nbsp;DIGITAL</div>
    </footer>
  );
}

export default Footer;