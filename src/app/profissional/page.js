import React from "react";
import { Briefcase, Calendar, ChevronRight, Terminal, Star, Hammer } from "lucide-react";
import styles from "./profissional.module.css";

export const metadata = {
  title: "Experiência Profissional | João Victor Chaves",
  description: "Trabalhos práticos de João Victor: desenvolvimento web freelancer, protótipos de automação física e contribuições open source.",
};

export default function Profissional() {
  const experiencias = [
    {
      role: "Desenvolvedor Fullstack Freelancer",
      company: "Projetos Independentes & Desenvolvimento Web",
      period: "Março 2024 - Presente",
      desc: "Criação de páginas institucionais, landpages e painéis web sob medida para pequenos comércios locais e profissionais autônomos.",
      activities: [
        "Criação de telas responsivas usando Next.js e React com foco em usabilidade e boa velocidade de carregamento.",
        "Programação de rotas de API em JavaScript e modelagem inicial de banco de dados SQL.",
        "Integrações de formulários de contato e disparo de mensagens automáticas de confirmação.",
        "Hospedagem de sites e monitoramento básico na Vercel."
      ],
      tags: ["React", "Next.js", "Node.js", "APIs REST", "Bancos de Dados", "Vercel", "Git"],
      icon: <Hammer size={18} />
    },
    {
      role: "Projetos de Automação & IoT",
      company: "Protótipos de Sistemas Conectados (UFPE / Autônomo)",
      period: "Junho 2024 - Presente",
      desc: "Montagem física de circuitos de teste e programação de chips para medição remota de dados ambientais e acionamento de cargas.",
      activities: [
        "Programação de firmwares em linguagem C/C++ para placas ESP32 e microcontroladores Arduino.",
        "Coleta de dados de sensores físicos (temperatura, umidade, presença) e envio de dados via protocolo MQTT.",
        "Testes práticos de lógica de controle simples em CLPs industriais seguindo esquemas lógicos ladder.",
        "Montagem básica de circuitos em protoboard e placas de ensaio."
      ],
      tags: ["C/C++", "ESP32", "Arduino", "IoT", "MQTT", "Lógica CLP", "Circuitos"],
      icon: <Terminal size={18} />
    },
    {
      role: "Projetos Pessoais & Open Source",
      company: "Comunidade e Repositórios Próprios",
      period: "Janeiro 2023 - Presente",
      desc: "Organização de scripts locais de utilidade prática e escrita de guias e tutoriais de uso no GitHub.",
      activities: [
        "Desenvolvimento de pequenos scripts Node.js e Bash para automatizar a criação de pastas e arquivos de teste.",
        "Escrita de READMEs detalhados com tutoriais fáceis em Markdown nos meus repositórios do GitHub.",
        "Refatoração de trechos de código buscando boa legibilidade e organização modular limpa."
      ],
      tags: ["Node.js", "Bash Script", "Git & GitHub", "Markdown", "Clean Code"],
      icon: <Star size={18} />
    }
  ];

  return (
    <div className={styles.container}>
      {/* Cabeçalho */}
      <section className={styles.header}>
        <h1 className={`${styles.title} gradient-text`}>Trajetória Profissional</h1>
        <p className={styles.subtitle}>
          Meus projetos práticos desenvolvidos, consultorias autônomas de web e estudos de IoT aplicados.
        </p>
      </section>

      {/* Timeline das Experiências */}
      <section className={styles.timeline}>
        {experiencias.map((exp, index) => (
          <div key={exp.role} className={styles.timelineItem}>
            {/* Ponto na linha lateral */}
            <div className={styles.timelineDot} />

            {/* Card com a Experiência */}
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

                {/* Lista de Atividades */}
                <div className={styles.activitiesList}>
                  {exp.activities.map((act, idx) => (
                    <div key={idx} className={styles.activityItem}>
                      <ChevronRight size={16} className={styles.activityIcon} />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>

                {/* Tecnologias Usadas */}
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
