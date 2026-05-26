import React from "react";
import { Cpu, Terminal, Layers, Settings, Globe2, Sparkles, Code2 } from "lucide-react";
import styles from "./sobre.module.css";

export const metadata = {
  title: "Sobre | João Victor Chaves",
  description: "Conheça a história de João Victor e os módulos e tecnologias que foram utilizados para o desenvolvimento deste site.",
};

export default function Sobre() {
  const modulosProjeto = [
    {
      name: "Next.js 15+ (App Router)",
      role: "Framework Principal",
      desc: "Estrutura principal do site. O App Router gerencia as páginas (/sobre, /academico, etc.) de forma rápida, com carregamento otimizado e metadados organizados para navegadores.",
      icon: <Cpu size={22} />,
      tags: ["Roteamento", "Meta tags", "Next.js"],
    },
    {
      name: "React 19",
      role: "Biblioteca Base",
      desc: "Responsável pela criação dos componentes e atualização dinâmica da tela (como buscar dados das APIs de conselhos e do GitHub) usando hooks como useState e useEffect.",
      icon: <Code2 size={22} />,
      tags: ["Componentes", "Hooks", "React19"],
    },
    {
      name: "Vanilla CSS & Modules",
      role: "Estilização Personalizada",
      desc: "CSS puro e isolado para cada componente através de CSS Modules. Define as cores neon, efeitos de glassmorphism (desfoque de fundo), gradientes e animações suaves.",
      icon: <Layers size={22} />,
      tags: ["Glassmorphism", "CSS Puro", "Animações"],
    },
    {
      name: "GitHub REST API",
      role: "Integração de Dados",
      desc: "Utilizado na página de Projetos para fazer requisições dinâmicas em tempo real para os repositórios públicos oficiais do autor e exibi-los em cards.",
      icon: <Globe2 size={22} />,
      tags: ["API do GitHub", "Fetch API", "JSON"],
    },
    {
      name: "Advice Slip API",
      role: "Integração de Dados",
      desc: "API pública e gratuita que retorna dicas motivacionais de desenvolvimento na página inicial, mudando de conselho a cada clique no botão.",
      icon: <Sparkles size={22} />,
      tags: ["API Pública", "Fetch API", "Conselhos"],
    },
    {
      name: "Lucide React",
      role: "Pacote de Ícones",
      desc: "Conjunto de ícones leves no formato SVG para ilustrar os botões, menus e seções do site, melhorando o visual do portfólio.",
      icon: <Settings size={22} />,
      tags: ["Ícones SVG", "Design System"],
    },
  ];

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.title}>Sobre Mim &amp; Arquitetura</h1>
        <p className={styles.subtitle}>
          Conheça minha trajetória de estudos e os detalhes de programação usados para construir este site.
        </p>
      </section>

      <section className={styles.bioSection}>
        <div className={styles.bioContent}>
          <h2 className={styles.sectionTitle}>
            <Terminal className={styles.sectionTitleIcon} size={22} />
            Quem é João Victor?
          </h2>
          <p className={styles.bioParagraph}>
            Olá! Meu nome é <span className={styles.highlight}>João Victor de Oliveira Chaves</span>, tenho <span className={styles.highlight}>19 anos</span> e gosto muito de programar tanto softwares quanto hardwares físicos. 
            Moro em Pernambuco e divido minha rotina diária em duas graduações intensas e muito interessantes:
          </p>
          <p className={styles.bioParagraph}>
            Na UNICAP, curso <span className={styles.highlight}>Sistemas para Internet</span>, onde aprendo a desenvolver sites e sistemas web modernos, lógica de programação front-end/back-end, banco de dados e design de interfaces responsivas.
          </p>
          <p className={styles.bioParagraph}>
            Na Federal (UFPE), curso <span className={styles.highlight}>Engenharia de Controle e Automação</span>. Aqui, o foco são circuitos eletrônicos, microcontroladores (como Arduino e ESP32), controle de sistemas físicos, robótica e Internet das Coisas (IoT).
          </p>
          <p className={styles.bioParagraph}>
            Esta união me dá facilidade para criar sites bonitos e modernos e, ao mesmo tempo, saber programar chips físicos para enviar e receber informações através da internet.
          </p>

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
              <span className={styles.metaLabel}>Faculdade 1</span>
              <span className={styles.metaValue}>UNICAP</span>
            </div>
            <div className={`${styles.metaItem} glass-panel`}>
              <span className={styles.metaLabel}>Faculdade 2</span>
              <span className={styles.metaValue}>UFPE (Federal)</span>
            </div>
          </div>
        </div>

        <div className={styles.graphicContainer}>
          <div className={`${styles.techHologram} glass-panel`}>
            <div className={styles.hologramHeader}>
              <span className={styles.hologramCode}>TERMINAL_JOAO_v1.0</span>
              <Cpu size={16} className={styles.sectionTitleIcon} />
            </div>
            <div className={styles.hologramTerminal}>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.terminalOutput}>quem_sou_eu</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;</span>
                <span className={styles.terminalOutput}>joao_victor_chaves</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.terminalOutput}>cat curso_1.txt</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;</span>
                <span className={styles.terminalOutput} style={{ color: "var(--accent-color)" }}>Sistemas para Internet</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.terminalOutput}>cat curso_2.txt</span>
              </div>
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>&gt;</span>
                <span className={styles.terminalOutput} style={{ color: "var(--accent-secondary)" }}>Controle e Automação</span>
              </div>
            </div>
            <div className={styles.hologramHeader}>
              <span className={styles.hologramCode} style={{ color: "var(--text-muted)" }}>STATUS: ATIVO</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.techShowcase}>
        <h2 className={styles.sectionTitle}>
          <Layers className={styles.sectionTitleIcon} size={22} />
          Módulos e Tecnologias do Site
        </h2>
        <p className={styles.bioParagraph} style={{ maxWidth: "800px" }}>
          Como parte das especificações do trabalho prático, veja abaixo as ferramentas e integrações externas utilizadas para programar e publicar este site:
        </p>

        <div className={styles.techGrid}>
          {modulosProjeto.map((modulo) => (
            <div key={modulo.name} className={`${styles.techCard} glass-panel`}>
              <div className={styles.cardGlowBorder} />
              <div className={styles.techHeader}>
                <div className={styles.techIconContainer}>{modulo.icon}</div>
                <div>
                  <h3 className={styles.techName}>{modulo.name}</h3>
                  <span className={styles.techRole}>{modulo.role}</span>
                </div>
              </div>
              <p className={styles.techDesc}>{modulo.desc}</p>
              <div className={styles.techTags}>
                {modulo.tags.map((tag) => (
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
