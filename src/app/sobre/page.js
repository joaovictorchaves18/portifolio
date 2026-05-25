import React from "react";
import { Cpu, Terminal, BookOpen, Layers, Settings, Globe2, Sparkles, Code2 } from "lucide-react";
import styles from "./sobre.module.css";

export const metadata = {
  title: "Sobre | João Victor Chaves",
  description: "Conheça a história de João Victor e os módulos/tecnologias que foram utilizados para o desenvolvimento deste aplicativo.",
};

export default function Sobre() {
  const techModules = [
    {
      name: "Next.js 15+ (App Router)",
      role: "Framework Web Principal",
      desc: "Utilizado como a espinha dorsal do projeto. O App Router gerencia as rotas (/sobre, /academico, etc.) de forma extremamente veloz, suportando renderização híbrida e metadados otimizados para SEO.",
      icon: <Cpu size={22} />,
      tags: ["Routing", "Metadata", "Next.js"],
    },
    {
      name: "React 19",
      role: "Biblioteca UI",
      desc: "Responsável pela lógica reativa dos componentes. Permite o gerenciamento de estados dinâmicos (como as requisições assíncronas às APIs externas) através de hooks declarativos como useState e useEffect.",
      icon: <Code2 size={22} />,
      tags: ["State Hook", "Virtual DOM", "React19"],
    },
    {
      name: "Vanilla CSS & Modules",
      role: "Estilização & Design System",
      desc: "CSS puro de alto desempenho organizado via CSS Modules. Contém variáveis personalizadas (custom properties), efeitos de Glassmorphism (backdrop-filter), gradientes elétricos e animações suaves por keyframes.",
      icon: <Layers size={22} />,
      tags: ["Glassmorphism", "Variables", "Keyframes"],
    },
    {
      name: "GitHub REST API",
      role: "Integração com API Externa",
      desc: "Integração dinâmica na página de Projetos que faz requisições em tempo real à API REST oficial do GitHub para buscar, filtrar e exibir os repositórios públicos mais relevantes do autor.",
      icon: <Globe2 size={22} />,
      tags: ["REST API", "Fetch", "JSON"],
    },
    {
      name: "Advice Slip API",
      role: "Integração com API Externa",
      desc: "API pública e gratuita consumida de forma dinâmica na página Home para injetar conselhos ou dicas inspiradoras aos desenvolvedores a cada carregamento ou clique do usuário.",
      icon: <Sparkles size={22} />,
      tags: ["REST API", "Fetch", "Advice"],
    },
    {
      name: "Lucide React",
      role: "Pacote de Ícones",
      desc: "Biblioteca de ícones vetorizados leves e altamente customizáveis que enriquecem o apelo estético visual e a legibilidade das seções do portfólio.",
      icon: <Settings size={22} />,
      tags: ["SVG Icons", "Design System"],
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.header}>
        <h1 className={`${styles.title} gradient-text`}>Sobre Mim &amp; Arquitetura</h1>
        <p className={styles.subtitle}>
          Uma exploração sobre quem sou eu e os detalhes da engenharia de software aplicada para desenvolver este aplicativo.
        </p>
      </section>

      {/* Biography and Visual Info */}
      <section className={styles.bioSection}>
        <div className={styles.bioContent}>
          <h2 className={styles.sectionTitle}>
            <Terminal className={styles.sectionTitleIcon} size={22} />
            Quem é João Victor?
          </h2>
          <p className={styles.bioParagraph}>
            Olá! Meu nome é <span className={styles.highlight}>João Victor de Oliveira Chaves</span>, tenho <span className={styles.highlight}>19 anos</span> e sou movido pela curiosidade intelectual de entender como o software e o hardware convergem. 
            Moro em Pernambuco e divido minha rotina diária em dois eixos acadêmicos intensos e complementares:
          </p>
          <p className={styles.bioParagraph}>
            Pelo lado de software, curso <span className={styles.highlight}>Sistemas para Internet na UNICAP</span>, onde aprimoro minhas habilidades de design de interface, arquitetura de sistemas web escaláveis, computação em nuvem e desenvolvimento Fullstack com foco em JavaScript e ecossistemas modernos (como React e Next.js).
          </p>
          <p className={styles.bioParagraph}>
            Pelo lado físico, curso <span className={styles.highlight}>Engenharia de Controle e Automação na Universidade Federal (UFPE)</span>. Aqui, meu foco gira em torno de equações de estado, sistemas realimentados, lógica industrial (CLPs), circuitos analógicos/digitais, microcontroladores e Internet das Coisas (IoT). 
          </p>
          <p className={styles.bioParagraph}>
            Essa sinergia me permite projetar sites de alta fidelidade visual e, simultaneamente, entender a física e eletrônica necessárias para automatizar processos reais. 
            Minha meta é atuar na vanguarda da automação inteligente e sistemas conectados.
          </p>

          {/* Quick Meta Data */}
          <div className={styles.metaGrid}>
            <div className={`${styles.metaItem} glass-panel`}>
              <span className={styles.metaLabel}>Idade</span>
              <span className={styles.metaValue}>19 Anos</span>
            </div>
            <div className={`${styles.metaItem} glass-panel`}>
              <span className={styles.metaLabel}>Localização</span>
              <span className={styles.metaValue}>Recife, PE</span>
            </div>
            <div className={`${styles.metaItem} glass-panel`}>
              <span className={styles.metaLabel}>Instituição 1</span>
              <span className={styles.metaValue}>UNICAP</span>
            </div>
            <div className={`${styles.metaItem} glass-panel`}>
              <span className={styles.metaLabel}>Instituição 2</span>
              <span className={styles.metaValue}>UFPE (Federal)</span>
            </div>
          </div>
        </div>

        {/* Animated Cyber graphic representing double major */}
        <div className={styles.graphicContainer}>
          <div className={`${styles.techHologram} glass-panel`}>
            <div className={styles.hologramHeader}>
              <span className={styles.hologramCode}>SYSTEMS_CTRL_v1.0</span>
              <Cpu size={16} className={styles.sectionTitleIcon} />
            </div>
            <div className={styles.hologramTerminal}>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.terminalOutput}>whoami</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;</span>
                <span className={styles.terminalOutput}>joao_victor_chaves</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.terminalOutput}>cat major_1.txt</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;</span>
                <span className={styles.terminalOutput} style={{ color: "var(--neon-cyan)" }}>Sistemas para Internet</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.terminalOutput}>cat major_2.txt</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;</span>
                <span className={styles.terminalOutput} style={{ color: "var(--neon-purple)" }}>Controle e Automação</span>
              </div>
            </div>
            <div className={styles.hologramHeader}>
              <span className={styles.hologramCode} style={{ color: "var(--text-muted)" }}>STATUS: FULLY_ACTIVE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Modules list */}
      <section className={styles.techShowcase}>
        <h2 className={styles.sectionTitle}>
          <Layers className={styles.sectionTitleIcon} size={22} />
          Módulos e Tecnologias do Aplicativo
        </h2>
        <p className={styles.bioParagraph} style={{ maxWidth: "800px" }}>
          Como parte do requisito do trabalho, aqui estão detalhadas todas as tecnologias, bibliotecas e integrações externas utilizadas para conceber, desenvolver e rodar este portfólio.
        </p>

        <div className={styles.techGrid}>
          {techModules.map((module) => (
            <div key={module.name} className={`${styles.techCard} glass-panel`}>
              <div className={styles.cardGlowBorder} />
              <div className={styles.techHeader}>
                <div className={styles.techIconContainer}>{module.icon}</div>
                <div>
                  <h3 className={styles.techName}>{module.name}</h3>
                  <span className={styles.techRole}>{module.role}</span>
                </div>
              </div>
              <p className={styles.techDesc}>{module.desc}</p>
              <div className={styles.techTags}>
                {module.tags.map((tag) => (
                  <span key={tag} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
