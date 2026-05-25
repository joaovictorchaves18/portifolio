import React from "react";
import { GraduationCap, Calendar, Compass, ShieldAlert, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import styles from "./academico.module.css";

export const metadata = {
  title: "Experiência Acadêmica | João Victor Chaves",
  description: "Linha do tempo acadêmica dupla: Sistemas para Internet na UNICAP e Engenharia de Controle e Automação na UFPE.",
};

export default function Academico() {
  const academicDegrees = [
    {
      name: "Sistemas para Internet",
      institution: "UNICAP (Universidade Católica de Pernambuco)",
      period: "2024 - Presente",
      desc: "Curso focado no desenvolvimento de aplicações web completas, do design da experiência do usuário (UI/UX) à arquitetura e segurança de bancos de dados e servidores.",
      skills: ["React", "Next.js", "Javascript (ES6+)", "HTML5 & CSS3", "APIs RESTful", "Bancos de Dados SQL", "Arquitetura Nuvem"],
      highlights: [
        "Desenvolvimento de aplicações web completas de ponta a ponta.",
        "Aprofundamento em metodologias ágeis de desenvolvimento (Scrum e Kanban).",
        "Concepção de interfaces de usuário com foco em acessibilidade e design responsivo.",
      ],
      isPurple: false,
    },
    {
      name: "Engenharia de Controle e Automação",
      institution: "UFPE (Universidade Federal de Pernambuco)",
      period: "2024 - Presente",
      desc: "Graduação em engenharia com foco no controle de processos industriais dinâmicos, robótica, programação de hardware, automação residencial e lógica industrial.",
      skills: ["Programação C/C++", "Arduino & ESP32", "Sistemas Embarcados", "CLPs (Lógica Industrial)", "Eletrônica Analógica/Digital", "Modelagem Matemática", "IoT"],
      highlights: [
        "Modelagem matemática e controle de sistemas físicos dinâmicos.",
        "Programação de microcontroladores para leitura de sensores e controle de atuadores físicos.",
        "Implementação de protocolos de comunicação industrial e Internet das Coisas (IoT).",
      ],
      isPurple: true,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.header}>
        <h1 className={`${styles.title} gradient-text`}>Trajetória Acadêmica</h1>
        <p className={styles.subtitle}>
          A jornada dupla de formação unindo a velocidade da internet com a precisão física da automação industrial.
        </p>
      </section>

      {/* Degrees Grid */}
      <section className={styles.degreesGrid}>
        {academicDegrees.map((degree) => (
          <div
            key={degree.name}
            className={`${styles.degreeCard} ${degree.isPurple ? styles.purple : ""} glass-panel`}
          >
            <div className={styles.degreeHeader}>
              <div className={styles.degreeMeta}>
                <span className={styles.institution}>{degree.institution}</span>
                <span className={styles.period}>
                  <Calendar size={14} />
                  {degree.period}
                </span>
              </div>
              <h2 className={styles.degreeName}>{degree.name}</h2>
            </div>

            <p className={styles.degreeDescription}>{degree.desc}</p>

            {/* Disciplinas e Competências */}
            <div className={styles.skillsSection}>
              <h3 className={styles.skillsTitle}>Áreas de Foco</h3>
              <div className={styles.skillsList}>
                {degree.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`tech-tag ${degree.isPurple ? "purple" : ""}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Destaques Acadêmicos */}
            <div className={styles.highlightsSection}>
              <h3 className={styles.highlightsTitle}>Destaques Acadêmicos</h3>
              <div className={styles.highlightsSectionList}>
                {degree.highlights.map((highlight, idx) => (
                  <div key={idx} className={styles.highlightItem}>
                    <CheckCircle2 size={16} className={styles.highlightIcon} />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Major Synergy Section (Cyber-premium design point) */}
      <section className={`${styles.synergyCard} glass-panel`}>
        <div className={styles.synergyHeader}>
          <Sparkles className={styles.synergyIcon} size={24} />
          <h2 className={styles.synergyTitle}>Sinergia Multidisciplinar</h2>
        </div>
        <p className={styles.synergyDesc}>
          A combinação de Sistemas para Internet e Engenharia de Controle e Automação gera um conjunto de competências único e extremamente valioso no mercado tecnológico atual:
        </p>

        <div className={styles.synergyGrid}>
          <div className={styles.synergyItem}>
            <h3 className={styles.synergyItemTitle}>1. IoT de Ponta a Ponta</h3>
            <p className={styles.synergyItemDesc}>
              A capacidade de projetar o circuito físico (sensores, placas de circuito em Controle) e, ao mesmo tempo, escrever o painel de monitoramento web reativo (Sistemas para Internet) para gerenciar o dispositivo à distância via internet.
            </p>
          </div>

          <div className={styles.synergyItem}>
            <h3 className={styles.synergyItemTitle}>2. IHM Baseadas em Web</h3>
            <p className={styles.synergyItemDesc}>
              As Interfaces Homem-Máquina industriais legadas são pesadas e limitadas. Usar tecnologias web modernas (Next.js/React) para criar painéis de controle de plantas industriais bonitos, responsivos e acessíveis de qualquer dispositivo móvel.
            </p>
          </div>

          <div className={styles.synergyItem}>
            <h3 className={styles.synergyItemTitle}>3. Algoritmos Inteligentes</h3>
            <p className={styles.synergyItemDesc}>
              União de conceitos matemáticos avançados de controle com estruturas de dados complexas em software. Habilidade ideal para criar lógica inteligente de automação preditiva e otimização de fluxos de dados em nuvem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
