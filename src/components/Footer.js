import React from "react";
import { Mail, Cpu } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.copyright}>
            &copy; {currentYear} <span className={styles.highlight}>João Victor de Oliveira Chaves</span>
          </p>
          <p className={styles.subtext}>
            Sistemas para Internet (UNICAP) &amp; Eng. de Controle e Automação (UFPE)
          </p>
        </div>

        <div className={styles.statusContainer}>
          <span className={styles.statusPulse} />
          <span className={styles.statusText}>
            <Cpu size={12} />
            STATUS: PORTFÓLIO ONLINE
          </span>
        </div>

        <div className={styles.socials}>
          <a
            href="https://github.com/joaovictorchaves18"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/joaovictordeoliveirachaves"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:joaovictor.doc@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
