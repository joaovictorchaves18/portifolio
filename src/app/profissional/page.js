import React from "react";
import { Briefcase, Calendar, ChevronRight, Terminal, Star, Hammer } from "lucide-react";
import styles from "./profissional.module.css";

export const metadata = {
  title: "Experiência Profissional | João Victor Chaves",
  description: "Histórico profissional de João Victor como desenvolvedor Fullstack Freelancer, engenheiro de IoT e automação e contribuidor open-source.",
};

export default function Profissional() {
  const experiences = [
    {
      role: "Desenvolvedor Fullstack Freelancer",
      company: "Projetos Independentes & Consultoria Web",
      period: "Março 2024 - Presente",
      desc: "Concepção, arquitetura e desenvolvimento de soluções digitais de alto desempenho e interfaces modernas sob medida para empresas locais e profissionais liberais.",
      activities: [
        "Desenvolvimento de plataformas web robustas utilizando Next.js (App Router) e React, focando em UX fluida e excelente pontuação de SEO.",
        "Modelagem de bancos de dados relacionais e criação de rotas de APIs REST seguras e otimizadas.",
        "Desenvolvimento de painéis administrativos de gestão para visualização rápida de métricas financeiras e de conversão de clientes.",
        "Deploy automatizado e monitoramento contínuo de aplicações em plataformas na nuvem como Vercel."
      ],
      tags: ["React", "Next.js", "Node.js", "REST APIs", "PostgreSQL", "Vercel", "Git"],
      icon: <Hammer size={18} />
    },
    {
      role: "Desenvolvedor de Automação & IoT",
      company: "Projetos Integrados & Automação Inteligente (UFPE / Freelance)",
      period: "Junho 2024 - Presente",
      desc: "Prototipagem de sistemas físicos conectados (Internet das Coisas) e integração de sensores analógicos/digitais para sensoriamento remoto e monitoramento em tempo real.",
      activities: [
        "Desenvolvimento de firmwares reativos de alto desempenho em C/C++ para microcontroladores ESP32 e placas Arduino.",
        "Integração física e lógica de sensores industriais (temperatura, umidade, presença, corrente) com envio de telemetria via protocolos MQTT e HTTP.",
        "Programação básica de Controladores Lógicos Programáveis (CLPs) seguindo a norma IEC 61131 para sequenciamento lógico industrial.",
        "Desenvolvimento de interfaces HMI integradas com a web para monitoramento remoto do estado do hardware."
      ],
      tags: ["C/C++", "ESP32", "Arduino", "IoT", "MQTT", "CLPs", "Eletrônica Aplicada"],
      icon: <Terminal size={18} />
    },
    {
      role: "Contribuidor Open Source & Projetos de Software",
      company: "Comunidade de Desenvolvimento Independente",
      period: "Janeiro 2023 - Presente",
      desc: "Criação de scripts utilitários, automações de setups locais e contribuição ativa em repositórios abertos de ferramentas comunitárias.",
      activities: [
        "Desenvolvimento de pacotes de automação simples e scripts bash/Node.js para otimizar setups de ambientes de desenvolvimento.",
        "Criação de documentações ricas, READMEs organizados e tutoriais passo a passo em markdown para projetos open source no GitHub.",
        "Refatoração constante de algoritmos buscando otimização de tempo de execução, modularização elegante e conformidade com clean code."
      ],
      tags: ["Node.js", "Bash Scripting", "Git & GitHub", "Markdown", "Clean Code"],
      icon: <Star size={18} />
    }
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.header}>
        <h1 className={`${styles.title} gradient-text`}>Trajetória Profissional</h1>
        <p className={styles.subtitle}>
          Projetos executados, consultorias em desenvolvimento web e protótipos de automação física e IoT.
        </p>
      </section>

      {/* Timeline of Experience */}
      <section className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={exp.role} className={styles.timelineItem}>
            {/* Timeline pulsing dot */}
            <div className={styles.timelineDot} />

            {/* Experience Glass Card */}
            <div className={`${styles.experienceCard} glass-panel`}>
              <div className={styles.cardHeader}>
                <div>
                  <h2 className={styles.roleTitle}>{exp.role}</h2>
                  <span className={styles.company}>{exp.company}</span>
                </div>
                <span className={styles.period}>
                  <Calendar size={14} style={{ marginRight: "4px" }} />
                  {exp.period}
                </span>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.description}>{exp.desc}</p>

                {/* Activities lists */}
                <div className={styles.activitiesList}>
                  {exp.activities.map((act, idx) => (
                    <div key={idx} className={styles.activityItem}>
                      <ChevronRight size={16} className={styles.activityIcon} />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags used in work */}
                <div className={styles.techTags}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`tech-tag ${index % 2 !== 0 ? "purple" : ""}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
