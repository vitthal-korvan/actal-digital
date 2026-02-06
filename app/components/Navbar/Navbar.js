"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Web Development", href: "/services/webDevelopment" },
        { name: "Digital Marketing", href: "/services/DigitalMarketing" },
        { name: "Social Media", href: "/services/SocialMedia" },
        { name: "Graphic Design", href: "/services/GraphicDesign" },
        { name: "Creative Content", href: "/services/CreativeContent" },
        { name: "SEO", href: "/services/SEO" },
        { name: "Branding", href: "/services/branding" },
      ]
    },
    { name: "Projects", href: "/work" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.mobileLogo} onClick={toggleMenu}>
            <Image src="/logo3.png" alt="Actal Digital" width={120} height={40} style={{ objectFit: 'contain' }} />
          </Link>
          <button onClick={toggleMenu} className={styles.closeBtn} aria-label="Close menu">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.mobileLink}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileFooter}>
          <p className={styles.mobileEmail}>hello@actaldigital.com</p>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo3.png"
              alt="Actal Digital"
              width={140}
              height={48}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <div key={link.name} className={styles.navItem}>
                <Link href={link.href} className={styles.navLink}>
                  {link.name}
                  {link.dropdown && <span className={styles.dropdownArrow}>▾</span>}
                </Link>
                {link.dropdown && (
                  <div className={styles.dropdownMenu}>
                    {link.dropdown.map((subLink) => (
                      <Link key={subLink.name} href={subLink.href} className={styles.dropdownLink}>
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className={styles.menuBtn}
            aria-label="Open menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </nav>
      </header>
    </>
  );
}