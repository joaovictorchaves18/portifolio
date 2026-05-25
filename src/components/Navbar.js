"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, User, GraduationCap, Briefcase, FolderGit2 } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", icon: <Home size={16} /> },
    { href: "/sobre", label: "Sobre", icon: <User size={16} /> },
    { href: "/academico", label: "Acadêmico", icon: <GraduationCap size={16} /> },
    { href: "/profissional", label: "Profissional", icon: <Briefcase size={16} /> },
    { href: "/projetos", label: "Projetos", icon: <FolderGit2 size={16} /> },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoTag}>&lt;</span>
          <span className="gradient-text">JOÃO VICTOR</span>
          <span className={styles.logoTag}> /&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
              >
                <span className={styles.navIcon}>{link.icon}</span>
                {link.label}
                {isActive && <span className={styles.activeDot} />}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className={styles.mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className={styles.mobileNavContainer}>
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${isActive ? styles.mobileActive : ""}`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className={styles.mobileNavIcon}>{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
