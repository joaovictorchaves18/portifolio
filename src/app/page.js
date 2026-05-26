"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCw, Sparkles, Terminal, GraduationCap, Code2, Globe } from "lucide-react";
import styles from "./page.module.css";

const CONSELHOS_BACKUP = [
  "Se o código funciona e você não sabe por que, não toque nele. Se não funciona e você não sabe por que, bem-vindo à programação.",
  "Simplificar é o primeiro passo para a robustez de um sistema de automação e de software.",
  "O melhor hardware precisa de um software incrível, e o melhor software ganha vida através do hardware.",
  "Estudar Sistemas para Internet e Engenharia de Controle e Automação é dominar o software que move o mundo virtual e físico.",
  "A melhor maneira de prever o futuro é automatizá-lo.",
  "Antes de automatizar, certifique-se de que você entende o processo manual perfeitamente.",
];

export default function Home() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [refreshSpin, setRefreshSpin] = useState(false);

  const carregarConselho = async () => {
    setLoading(true);
    setRefreshSpin(true);
    setError(false);
    try {
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
      const randomIndex = Math.floor(Math.random() * CONSELHOS_BACKUP.length);
      setAdvice(CONSELHOS_BACKUP[randomIndex]);
      setError(true);
    } finally {
      setLoading(false);
      setTimeout(() => setRefreshSpin(false), 600);
    }
  };

  useEffect(() => {
    carregarConselho();
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.intro}>
          <div className={styles.badge}>
            <Sparkles size={14} />
            <span>Sistemas + Automação</span>
          </div>
          <h1 className={styles.title}>
            Olá, eu sou o <br />
            <span>João Victor Chaves</span>
          </h1>
          <p className={styles.subtitle}>
            Tenho 19 anos e estudo a intersecção do mundo digital e físico. 
            Sou estudante de Sistemas para Internet na UNICAP e de 
            Engenharia de Controle e Automação na Federal (UFPE).
          </p>
          <div className={styles.ctas}>
            <Link href="/projetos" className={styles.btnPrimary}>
              Ver Projetos <ArrowRight size={16} />
            </Link>
            <Link href="/sobre" className={styles.btnSecondary}>
              Sobre o Portfólio
            </Link>
          </div>
        </div>

        <div className={styles.avatarContainer}>
          <div className={styles.hologram}>
            <div className={styles.hologramCore}>
              <span className={styles.coreLabel}>ESTUDANTE</span>
              <span className={styles.coreValue}>J V</span>
              <span className={styles.coreLabel}>UNICAP / UFPE</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statHeader}>
            <Code2 className={styles.statIcon} size={20} />
            <span className={styles.statTitle}>Desenvolvimento Web</span>
          </div>
          <div className={styles.statValue}>UNICAP</div>
          <p className={styles.statDesc}>
            Desenvolvimento Web, front-end responsivo, lógica de programação e bancos de dados.
          </p>
        </div>

        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statHeader}>
            <Terminal className={styles.statIcon} size={20} />
            <span className={styles.statTitle}>Controle &amp; IoT</span>
          </div>
          <div className={styles.statValue}>UFPE</div>
          <p className={styles.statDesc}>
            Robótica, microcontroladores, lógica de automação, eletrônica e sistemas físicos.
          </p>
        </div>

        <div className={`${styles.statCard} glass-panel`}>
          <div className={styles.statHeader}>
            <Globe className={styles.statIcon} size={20} />
            <span className={styles.statTitle}>Perfil Híbrido</span>
          </div>
          <div className={styles.statValue}>2 Cursos</div>
          <p className={styles.statDesc}>
            Facilidade em programar microcontroladores físicos e criar painéis web conectados.
          </p>
        </div>
      </section>

      <section className={`${styles.adviceWidget} glass-panel`}>
        <div className={styles.adviceLabel}>
          <Terminal size={14} />
          <span>DICA DE PROGRAMAÇÃO (INTEGRAÇÃO COM API PÚBLICA)</span>
        </div>

        {loading ? (
          <div className={styles.adviceLoader}>
            <RefreshCw className={styles.spin} size={20} />
            <span>Buscando nova dica na API...</span>
          </div>
        ) : (
          <>
            <p className={styles.adviceText}>
              "{advice}"
            </p>
            <button
              onClick={carregarConselho}
              className={styles.btnRefresh}
              disabled={refreshSpin}
              aria-label="Carregar conselho"
            >
              <RefreshCw className={refreshSpin ? styles.spin : ""} size={14} />
              {error ? "Outra Dica Local" : "Próxima Dica (API)"}
            </button>
          </>
        )}
      </section>
    </div>
  );
}
