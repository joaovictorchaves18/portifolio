import React from "react";
import { GraduationCap, Calendar, Compass, ShieldAlert, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import styles from "./academico.module.css";

export const metadata = {
  title: "Experiência Acadêmica | João Victor Chaves",
  description: "Cursos superiores em andamento: Sistemas para Internet na UNICAP e Engenharia de Controle e Automação na UFPE.",
};

export default function Academico() {
  const cursos = [
    {
      name: "Sistemas para Internet",
      institution: "UNICAP (Universidade Católica de Pernambuco)",
      period: "2024 - Em Andamento",
      desc: "Graduação focada no desenvolvimento de sistemas web completos, lógica de programação front-end/back-end, banco de dados, design responsivo e arquiteturas baseadas em nuvem.",
      skills: ["React", "Next.js", "Javascript", "HTML5 & CSS3", "APIs REST", "Bancos de Dados", "Hospedagem Nuvem"],
      highlights: [
        "Desenvolvimento de páginas completas do zero.",
        "Trabalho prático usando metodologias ágeis (Scrum / Kanban).",
        "Criação de telas intuitivas com foco em design responsivo e acessibilidade.",
      ],
      isPurple: false,
    },
    {
      name: "Engenharia de Controle e Automação",
      institution: "UFPE (Universidade Federal de Pernambuco)",
      period: "2024 - Em Andamento",
      desc: "Curso focado no controle de processos físicos e robóticos, lógica de automação industrial, microcontroladores, instrumentação e circuitos eletrônicos.",
      skills: ["Linguagem C/C++", "Arduino & ESP32", "Sistemas Embarcados", "Programação CLP", "Eletrônica Aplicada", "Matemática & Física", "IoT"],
      highlights: [
        "Modelagem matemática de malhas de controle analógico e digital.",
        "Programação de chips para leitura de sensores físicos e envio de dados.",
        "Práticas de automação industrial e Internet das Coisas (IoT).",
      ],
      isPurple: true,
    },
  ];

  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <section className={styles.header}>
        <h1 className={`${styles.title} gradient-text`}>Trajetória Acadêmica</h1>
        <p className={styles.subtitle}>
          Minhas duas graduações: unindo o desenvolvimento de software web à precisão física da automação industrial.
        </p>
      </section>

      {/* Grid com Cursos */}
      <section className={styles.degreesGrid}>
        {cursos.map((degree) => (
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

            {/* Áreas de Foco */}
            <div className={styles.skillsSection}>
              <h3 className={styles.skillsTitle}>Focos de Aprendizado</h3>
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

            {/* Pontos de Destaque */}
            <div className={styles.highlightsSection}>
              <h3 className={styles.highlightsTitle}>Destaques do Curso</h3>
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

      {/* Sinergia de Cursos */}
      <section className={`${styles.synergyCard} glass-panel`}>
        <div className={styles.synergyHeader}>
          <Sparkles className={styles.synergyIcon} size={24} />
          <h2 className={styles.synergyTitle}>Sinergia entre as Áreas</h2>
        </div>
        <p className={styles.synergyDesc}>
          Combinar Sistemas para Internet com Engenharia de Controle me ajuda a ter uma visão muito completa do desenvolvimento tecnológico moderno:
        </p>

        <div className={styles.synergyGrid}>
          <div className={styles.synergyItem}>
            <h3 className={styles.synergyItemTitle}>1. IoT e Cidades Inteligentes</h3>
            <p className={styles.synergyItemDesc}>
              Habilidade para criar a placa e programar o firmware físico do chip (Controle e Automação) e, ao mesmo tempo, codificar a tela de monitoramento reativa na web (Sistemas para Internet) para controle à distância.
            </p>
          </div>

          <div className={styles.synergyItem}>
            <h3 className={styles.synergyItemTitle}>2. Telas de Controle Modernas</h3>
            <p className={styles.synergyItemDesc}>
              A maioria das telas industriais antigas (IHMs) tem design ruim e ultrapassado. Posso usar as tecnologias web modernas (React/Next.js) para criar interfaces industriais limpas, responsivas e de fácil uso.
            </p>
          </div>

          <div className={styles.synergyItem}>
            <h3 className={styles.synergyItemTitle}>3. Lógica e Algoritmos</h3>
            <p className={styles.synergyItemDesc}>
              Os conhecimentos matemáticos de modelagem física ajudam na criação de códigos otimizados, lógica de controle preditiva e melhor processamento de fluxos de dados complexos em sistemas web.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
