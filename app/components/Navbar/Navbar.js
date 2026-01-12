"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <button onClick={toggleMenu} className={styles.closeBtn}>
          <X size={32} />
        </button>
        <nav className={styles.mobileNav}>
          <Link href="/work" className={styles.mobileLink} onClick={toggleMenu}>
            Work
          </Link>
          <Link href="/services" className={styles.mobileLink} onClick={toggleMenu}>
            Services
          </Link>
          <Link href="/studio" className={styles.mobileLink} onClick={toggleMenu}>
            Studio
          </Link>
          <Link href="/blogs" className={styles.mobileLink} onClick={toggleMenu}>
            Blogs
          </Link>
          <Link href="/project" className={styles.mobileCta} onClick={toggleMenu}>
            Start a Project
          </Link>
          <span className="mt-3 text-[10px] font-sans uppercase tracking-[0.2em] text-[#A1A1A6]">
            Brief form · 48h response
          </span>
        </nav>
      </div>

      {/* Floating Navigation */}
      <div className={styles.navbarWrapper}>
        <nav className={styles.navbar}>
          {/* Desktop Left Nav */}
          <div className={styles.navLinks}>
            <Link href="/work" className={`${styles.link} hover:text-[#D6FF4F]`}>
              Work
            </Link>
            <Link href="/services" className={styles.link}>
              Services
            </Link>
            <Link href="/studio" className={styles.link}>
              Studio
            </Link>
            <Link href="/blogs" className={styles.link}>
              Blogs
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button onClick={toggleMenu} className={styles.mobileMenuBtn}>
            <Menu size={24} />
          </button>

          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoDot}></div>
              <span className={styles.logoText}>ACTAL DIGITAL</span>
            </Link>
          </div>

          {/* Desktop Right Nav */}
          <div className={styles.navLinks}>
            <Link href="/project" className={styles.ctaButton}>
              Start a Project
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
