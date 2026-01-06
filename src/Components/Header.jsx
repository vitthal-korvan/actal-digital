

import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoGroup}>
          <Link to="/">
            <img src="/images/logo.png" alt="Company Logo" className={styles.logoImage} />
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><Link to="/" className={styles.link}>HOME</Link></li>
            <li><Link to="/founder" className={styles.link}>FOUNDER</Link></li>
            {/* <li>FOUNDER</li> */}
            {/* Redirects to About page */}
            <li><Link to="/about" className={styles.link}>ABOUT US</Link></li>

            <li className={styles.dropdown}>
              OUR SERVICES <span className={styles.arrow}>▾</span>
              <ul className={styles.dropdownMenu}>
                <li>
    <Link to="/digital" className={styles.link}>Digital Marketing</Link>
  </li>
                 <li>
    <Link to="/content" className={styles.link}>Content Marketing</Link>
  </li>
                <li>
    <Link to="/socialmedia" className={styles.link}>Social Media Marketing</Link>
  </li>
                <li>
    <Link to="/graphic" className={styles.link}>Graphic Designer</Link>
  </li>
                <li>
    <Link to="/seo" className={styles.link}>Search Engine Optimization</Link>
  </li>
                 <li>
    <Link to="/webdesign" className={styles.link}>Website Design And Development</Link>
  </li>
                
                <li>
    <Link to="/video" className={styles.link}>Video Editing</Link>
  </li>
                {/* Add more as needed */}
              </ul>
            </li>
            <li><Link to="/careers" className={styles.link}>CAREERS</Link></li>                 
            
          </ul>
        </nav>

       

        <Link to="/Contact">
          <button
            className={styles.contactBtn} >
            Contact us
          </button>
        </Link>

      </div>
    </header>
  );
};

export default Header;