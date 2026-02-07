"use client";

import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about-us" },
    {
      name: "Services",
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
    { name: "Careers", href: "/careers" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setServicesOpen(false); // Reset services dropdown when menu closes
    document.body.style.overflow = !isOpen ? "hidden" : "";
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.mobileLogo} onClick={toggleMenu}>
            <Image src="/nav-logo.png" alt="Actal Digital" width={150} height={112} style={{ objectFit: 'contain' }} />
          </Link>
          <button onClick={toggleMenu} className={styles.closeBtn} aria-label="Close menu">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.dropdown ? (
                <>
                  <button
                    className={styles.mobileLink}
                    onClick={toggleServices}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {link.name}
                    <ChevronDown
                      size={20}
                      style={{
                        transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>
                  <div
                    className={styles.mobileDropdown}
                    style={{
                      maxHeight: servicesOpen ? '500px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                      paddingLeft: '1.5rem'
                    }}
                  >
                    {link.dropdown.map((subLink) => (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        className={styles.mobileLink}
                        style={{ fontSize: '1.25rem', borderBottom: 'none', padding: '0.5rem 0' }}
                        onClick={toggleMenu}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={toggleMenu}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className={styles.mobileFooter}>
          <Link href="/contact" className={styles.mobileContactBtn} onClick={toggleMenu}>
            Contact Us
            <ArrowRight size={18} />
          </Link>
          <p className={styles.mobileEmail}>info@actaldigital.com</p>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={styles.header}>
        <nav className={styles.navbar}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image
              src="/nav-logo.png"
              alt="Actal Digital"
              width={133}
              height={100}
              className={styles.logoImage}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navLinks.map((link) => (
              <div key={link.name} className={styles.navItem}>
                {link.href ? (
                  <Link href={link.href} className={styles.navLink}>
                    {link.name}
                    {link.dropdown && <span className={styles.dropdownArrow}>▾</span>}
                  </Link>
                ) : (
                  <span className={styles.navLink} style={{ cursor: 'default' }}>
                    {link.name}
                    {link.dropdown && <span className={styles.dropdownArrow}>▾</span>}
                  </span>
                )}
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

          {/* Contact CTA Button */}
          <Link href="/contact" className={styles.contactBtn}>
            Contact
            <ArrowRight size={16} />
          </Link>

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
