"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw, Sparkles, Terminal, GraduationCap, Code2, Globe } from "lucide-react";
import styles from "./page.module.css";

// Banco de conselhos de backup caso a API falhe ou dê limite de requisições
const FALLBACK_ADVICES = [
  "Se o código funciona e você não sabe por que, não toque nele. Se não funciona e você não sabe por que, bem-vindo à programação.",
  "Simplificar é o primeiro passo para a robustez de um sistema de automação e de software.",
  "O melhor hardware precisa de um software incrível, e o melhor software ganha vida através do hardware.",
  "Estudar Sistemas para Internet e Engenharia de Controle e Automação é dominar o software que move o mundo virtual e físico.",
  "A melhor maneira de prever o futuro é automatizá-lo.",
  "Dê a um homem um programa e você o frustrará por um dia. Ensine-o a programar e você o frustrará por toda a vida.",
  "Antes de automatizar, certifique-se de que você entende o processo manual perfeitamente.",
];

export default function Home() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshSpin, setRefreshSpin] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    setRefreshSpin(true);
    setError(false);
    try {
      // Usamos no-cache para obter um conselho diferente a cada clique
      const res = await fetch("https://api.adviceslip.com/advice", { cache: "no-store" });
      if (!res.ok) throw new Error("Erro na API");
      const data = await res.json();
      if (data && data.slip && data.slip.advice) {
        setAdvice(data.slip.advice);
      } else {
        throw new Error("Formato inválido");
      }
    } catch (err) {
      console.error("Falha ao buscar conselho:", err);
      // Fallback local randômico
      const randomIndex = Math.floor(Math.random() * FALLBACK_ADVICES.length);
      setAdvice(FALLBACK_ADVICES[randomIndex]);
      setError(true);
    } finally {
      setLoading(false);
      setTimeout(() => setRefreshSpin(false), 600);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.intro}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>Sistemas + Automação</span>
          </div>
          <h1 className={styles.title}>
            Olá, eu sou o <br />
            <span className="gradient-text-full">João Victor Chaves</span>
          </h1>
          <p className={styles.subtitle}>
            Tenho <span className={styles.highlightText}>19 anos</span> e atuo na intersecção do mundo digital e físico. 
            Sou estudante de <span className={styles.highlightText}>Sistemas para Internet na UNICAP</span> e de{" "}
            <span className={styles.highlightText}>Engenharia de Controle e Automação na Federal (UFPE)</span>.
          </p>
          <div className={styles.ctas}>
            <Link href="/projetos" className={styles.btnPrimary}>
              Ver Projetos <ArrowRight size={16} />
            </Link>
            <Link href="/sobre" className={styles.btnSecondary}>
              Conhecer Tecnologia do App
            </Link>
          </div>
        </div>

        {/* Animated Cyber Hologram */}
        <div className={styles.avatarContainer}>
          <div className={styles.hologram}>
            <div className={styles.hologramRing1} />
            <div className={styles.hologramRing2} />
            <div className={styles.hologramRing3} />
            <div className={styles.hologramCore}>
              <span className={styles.coreLabel}>AGE</span>
              <span className={styles.coreValue}>19</span>
              <span className={styles.coreLabel}>YEARS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className={styles.stats}>
        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statHeader}>
            <Code2 className={styles.statIcon} size={20} />
            <span className={styles.statTitle}>Fullstack Software</span>
          </div>
          <div className={styles.statValue}>UNICAP</div>
          <p className={styles.statDesc}>
            Desenvolvimento Web, arquitetura escalável e sistemas modernos baseados em nuvem.
          </p>
        </div>

        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statHeader}>
            <Terminal className={styles.statIcon} size={20} />
            <span className={styles.statTitle}>Controle &amp; IoT</span>
          </div>
          <div className={styles.statValue}>UFPE</div>
          <p className={styles.statDesc}>
            Robótica, microcontroladores, lógica industrial, eletrônica e automação física.
          </p>
        </div>

        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statHeader}>
            <Globe className={styles.statIcon} size={20} />
            <span className={styles.statTitle}>Híbrido Único</span>
          </div>
          <div className={styles.statValue}>2 Cursos</div>
          <p className={styles.statDesc}>
            Ampla capacidade técnica unindo hardware (eletrônica) com alta performance em software.
          </p>
        </div>
      </section>

      {/* Dynamic Advice/Quote API Widget */}
      <section className={`${styles.adviceWidget} glass-panel`}>
        <div className={styles.adviceLabel}>
          <Terminal size={14} />
          <span>DICA DE DEV DOCK / CONSELHO DINÂMICO (INTEGRAÇÃO DE API)</span>
        </div>

        {loading ? (
          <div className={styles.adviceLoader}>
            <RefreshCw className={styles.spin} size={20} />
            <span>Consultando banco de dados cósmico de conselhos...</span>
          </div>
        ) : (
          <>
            <p className={styles.adviceText}>
              "{advice}"
            </p>
            <button
              onClick={fetchAdvice}
              className={styles.btnRefresh}
              disabled={refreshSpin}
              aria-label="Carregar conselho"
            >
              <RefreshCw className={refreshSpin ? styles.spin : ""} size={14} />
              {error ? "Gerar Outra Dica Local" : "Próxima Dica (API)"}
            </button>
          </>
        )}
      </section>
    </div>
  );
}
