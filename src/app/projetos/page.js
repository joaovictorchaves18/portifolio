"use client";

import React, { useState, useEffect } from "react";
import { Search, ExternalLink, Star, GitFork, FolderCode, Terminal, Sparkles, AlertCircle } from "lucide-react";
import { Github } from "@/components/Icons";
import styles from "./projetos.module.css";

// Projetos em destaque pré-configurados (representam os grandes marcos do João Victor)
const FEATURED_PROJECTS = [
  {
    id: "feat-comedoria",
    name: "Flávia Oliveira Comedoria na Copa",
    description: "Plataforma web avançada para venda automatizada de ingressos e gestão de eventos. Inclui painel administrativo com analytics em tempo real, controle de bilheteria, geração de QR Codes para check-in e envio automático de mensagens de confirmação integradas com a API do WhatsApp.",
    html_url: "https://github.com/joaovictorchaves18", // Link base do github
    homepage: "http://localhost:3000/",
    language: "JavaScript / Next.js",
    stargazers_count: 8,
    forks_count: 3,
    isFeatured: true,
  },
  {
    id: "feat-estufa",
    name: "Estufa Automatizada IoT",
    description: "Sistema embarcado baseado em ESP32 que monitora temperatura, umidade do ar e umidade do solo em tempo real. Os dados são enviados via protocolo MQTT para um painel web que aciona de forma automatizada bombas d'água e coolers de refrigeração.",
    html_url: "https://github.com/joaovictorchaves18",
    homepage: null,
    language: "C++ / IoT",
    stargazers_count: 5,
    forks_count: 1,
    isFeatured: true,
  },
  {
    id: "feat-robotic-arm",
    name: "Controlador de Braço Robótico",
    description: "Firmware de controle físico para robô manipulador industrial de 3 graus de liberdade. Implementa algoritmos de cinemática inversa e acionamento preciso de servos motores, sincronizando o hardware dinamicamente com uma HMI web de controle manual.",
    html_url: "https://github.com/joaovictorchaves18",
    homepage: null,
    language: "C++ / Arduino",
    stargazers_count: 4,
    forks_count: 2,
    isFeatured: true,
  }
];

export default function Projetos() {
  const [gitHubRepos, setGitHubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setApiError(false);
      try {
        // Chamada assíncrona da API do GitHub para buscar repositórios públicos
        const res = await fetch("https://api.github.com/users/joaovictorchaves18/repos?sort=updated&per_page=10");
        if (!res.ok) {
          throw new Error("Erro de limites ou API inativa");
        }
        const data = await res.json();
        if (Array.isArray(data)) {
          // Filtramos repositórios que possam ter o mesmo nome dos nossos destaques para evitar duplicidade
          const filteredData = data.filter(
            (repo) => !FEATURED_PROJECTS.some((feat) => feat.name.toLowerCase() === repo.name.toLowerCase())
          );
          setGitHubRepos(filteredData);
        } else {
          throw new Error("Formato de retorno inválido");
        }
      } catch (err) {
        console.error("Falha ao consultar API do GitHub:", err);
        setApiError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Combina os projetos em destaque e os repositórios dinâmicos do GitHub
  const allProjects = [...FEATURED_PROJECTS, ...gitHubRepos];

  // Filtra projetos com base no termo de busca digitado pelo usuário
  const filteredProjects = allProjects.filter((project) => {
    const nameMatch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const descMatch = (project.description || "").toLowerCase().includes(searchTerm.toLowerCase());
    const langMatch = (project.language || "").toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || descMatch || langMatch;
  });

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.header}>
        <h1 className={`${styles.title} gradient-text`}>Projetos Desenvolvidos</h1>
        <p className={styles.subtitle}>
          Galeria de trabalhos combinando aplicações web em destaque e repositórios obtidos dinamicamente pela API do GitHub.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <section className={`${styles.filterBar} glass-panel`}>
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Filtrar por nome ou tecnologia..."
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* API Indicator */}
        <div
          className={`${styles.apiSourceTag} ${
            apiError ? styles.fallback : ""
          }`}
        >
          {loading ? (
            <>
              <Terminal size={14} />
              <span>CARREGANDO API GITHUB...</span>
            </>
          ) : apiError ? (
            <>
              <AlertCircle size={14} style={{ color: "var(--neon-purple)" }} />
              <span>MODO COMPATIBILIDADE ATIVO (FALLBACK)</span>
            </>
          ) : (
            <>
              <Sparkles size={14} />
              <span>LIVE GITHUB API ATIVA ({gitHubRepos.length} REPOS)</span>
            </>
          )}
        </div>
      </section>

      {/* Projects Grid Display */}
      {loading && gitHubRepos.length === 0 && !apiError ? (
        <div className={styles.loaderContainer}>
          <FolderCode className={styles.loadingIcon} size={48} />
          <div className={styles.loadingText}>Buscando repositórios do João Victor na nuvem do GitHub...</div>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className={`${styles.noResults} glass-panel`}>
          <AlertCircle size={32} style={{ color: "var(--text-muted)" }} />
          <h3 className={styles.noResultsTitle}>Nenhum projeto encontrado</h3>
          <p className={styles.noResultsDesc}>
            Tente digitar outros termos como "Next.js", "C++", "IoT" ou confira a grafia.
          </p>
        </div>
      ) : (
        <section className={styles.projectsGrid}>
          {filteredProjects.map((project) => {
            const isFeatured = project.isFeatured || false;
            return (
              <div
                key={project.id || project.name}
                className={`${styles.projectCard} glass-panel`}
              >
                <div className={styles.cardGlowBorder} />

                {/* Card Top */}
                <div className={styles.cardHeader}>
                  <div className={styles.projectIconContainer}>
                    {isFeatured ? <Sparkles size={20} /> : <Github size={20} />}
                  </div>

                  <div className={styles.cardLinks}>
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkIcon}
                      aria-label="Código no GitHub"
                    >
                      <Github size={16} />
                    </a>
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkIcon}
                        aria-label="Site Publicado"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Title & Bio */}
                <div>
                  <h3 className={styles.projectName}>
                    {project.name}
                    {isFeatured && " 🚀"}
                  </h3>
                </div>

                <p className={styles.projectDesc}>
                  {project.description || "Nenhuma descrição fornecida pelo autor do repositório público."}
                </p>

                {/* Project Stats (Forks/Stars) */}
                <div className={styles.statsRow}>
                  {project.language && (
                    <div className={styles.statItem}>
                      <span
                        className={`${styles.langDot} ${
                          project.language.toLowerCase().includes("c++")
                            ? styles.purple
                            : project.language.toLowerCase().includes("iot")
                            ? styles.emerald
                            : ""
                        }`}
                      />
                      <span>{project.language}</span>
                    </div>
                  )}

                  <div className={styles.statItem}>
                    <Star size={12} className={styles.statIcon} />
                    <span>{project.stargazers_count}</span>
                  </div>

                  <div className={styles.statItem}>
                    <GitFork size={12} className={styles.statIcon} />
                    <span>{project.forks_count}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}
