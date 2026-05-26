"use client";

import React, { useState, useEffect } from "react";
import { Search, ExternalLink, Star, GitFork, FolderCode, Terminal, Sparkles, AlertCircle } from "lucide-react";
import { Github } from "@/components/Icons";
import styles from "./projetos.module.css";

const PROJETOS_DESTAQUES = [
  {
    id: "destaque-comedoria",
    name: "Flávia Oliveira Comedoria na Copa",
    description: "Sistema web completo para reserva de ingressos e controle de eventos. Possui painel de gerenciamento administrativo para acompanhamento de vendas em tempo real, geração de QR Codes para check-in no portão e disparo de mensagens automáticas via WhatsApp API.",
    html_url: "https://github.com/joaovictorchaves18",
    homepage: "http://localhost:3000/",
    language: "JavaScript / Next.js",
    stargazers_count: 8,
    forks_count: 3,
    isFeatured: true,
  },
  {
    id: "destaque-estufa",
    name: "Estufa Inteligente IoT",
    description: "Protótipo baseado em ESP32 que faz a leitura física de sensores de temperatura e umidade e envia os dados via rede MQTT para um painel web, que por sua vez aciona automaticamente motores de ventilação e irrigação.",
    html_url: "https://github.com/joaovictorchaves18",
    homepage: null,
    language: "C++ / IoT",
    stargazers_count: 5,
    forks_count: 1,
    isFeatured: true,
  },
  {
    id: "destaque-arm",
    name: "Braço Robótico Articulado",
    description: "Programação de hardware para controle físico de motores de passo em um mini manipulador robótico industrial. O firmware calcula a cinemática e atualiza a posição dos eixos, sincronizando o robô com um painel de controle simples.",
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
    const buscarRepositorios = async () => {
      setLoading(true);
      setApiError(false);
      try {
        const res = await fetch("https://api.github.com/users/joaovictorchaves18/repos?sort=updated&per_page=10");
        if (!res.ok) {
          throw new Error("Erro ao consultar a API");
        }
        const data = await res.json();
        if (Array.isArray(data)) {
          const filteredData = data.filter(
            (repo) => !PROJETOS_DESTAQUES.some((feat) => feat.name.toLowerCase() === repo.name.toLowerCase())
          );
          setGitHubRepos(filteredData);
        } else {
          throw new Error("Formato incorreto");
        }
      } catch (err) {
        console.error("Falha ao carregar repositórios do GitHub:", err);
        setApiError(true);
      } finally {
        setLoading(false);
      }
    };

    buscarRepositorios();
  }, []);

  const todosProjetos = [...PROJETOS_DESTAQUES, ...gitHubRepos];

  const projetosFiltrados = todosProjetos.filter((projeto) => {
    const nameMatch = projeto.name.toLowerCase().includes(searchTerm.toLowerCase());
    const descMatch = (projeto.description || "").toLowerCase().includes(searchTerm.toLowerCase());
    const langMatch = (projeto.language || "").toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || descMatch || langMatch;
  });

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1 className={styles.title}>Projetos Desenvolvidos</h1>
        <p className={styles.subtitle}>
          Galeria de trabalhos unindo projetos de destaque e repositórios obtidos dinamicamente pela API do GitHub.
        </p>
      </section>

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

        <div
          className={`${styles.apiSourceTag} ${
            apiError ? styles.fallback : ""
          }`}
        >
          {loading ? (
            <>
              <Terminal size={14} />
              <span>CONECTANDO AO GITHUB...</span>
            </>
          ) : apiError ? (
            <>
              <AlertCircle size={14} style={{ color: "var(--accent-secondary)" }} />
              <span>MODO OFFLINE (PROJETOS LOCAIS)</span>
            </>
          ) : (
            <>
              <Sparkles size={14} />
              <span>CONEXÃO GITHUB: ATIVA ({gitHubRepos.length} PROJETOS)</span>
            </>
          )}
        </div>
      </section>

      {loading && gitHubRepos.length === 0 && !apiError ? (
        <div className={styles.loaderContainer}>
          <FolderCode className={styles.loadingIcon} size={48} />
          <div className={styles.loadingText}>Conectando ao GitHub para ler repositórios...</div>
        </div>
      ) : projetosFiltrados.length === 0 ? (
        <div className={`${styles.noResults} glass-panel`}>
          <AlertCircle size={32} style={{ color: "var(--text-muted)" }} />
          <h3 className={styles.noResultsTitle}>Nenhum projeto encontrado</h3>
          <p className={styles.noResultsDesc}>
            Tente digitar outros termos como "Next.js", "C++" ou "IoT".
          </p>
        </div>
      ) : (
        <section className={styles.projectsGrid}>
          {projetosFiltrados.map((projeto) => {
            const isFeatured = projeto.isFeatured || false;
            return (
              <div
                key={projeto.id || projeto.name}
                className={`${styles.projectCard} glass-panel`}
              >
                <div className={styles.cardGlowBorder} />

                <div className={styles.cardHeader}>
                  <div className={styles.projectIconContainer}>
                    {isFeatured ? <Sparkles size={20} /> : <Github size={20} />}
                  </div>

                  <div className={styles.cardLinks}>
                    <a
                      href={projeto.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkIcon}
                      aria-label="Código no GitHub"
                    >
                      <Github size={16} />
                    </a>
                    {projeto.homepage && (
                      <a
                        href={projeto.homepage}
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

                <div>
                  <h3 className={styles.projectName}>
                    {projeto.name}
                    {isFeatured && " 🚀"}
                  </h3>
                </div>

                <p className={styles.projectDesc}>
                  {projeto.description || "Nenhuma descrição fornecida para este repositório no GitHub."}
                </p>

                <div className={styles.statsRow}>
                  {projeto.language && (
                    <div className={styles.statItem}>
                      <span
                        className={`${styles.langDot} ${
                          projeto.language.toLowerCase().includes("c++")
                            ? styles.purple
                            : projeto.language.toLowerCase().includes("iot")
                            ? styles.emerald
                            : ""
                        }`}
                      />
                      <span>{projeto.language}</span>
                    </div>
                  )}

                  <div className={styles.statItem}>
                    <Star size={12} className={styles.statIcon} />
                    <span>{projeto.stargazers_count}</span>
                  </div>

                  <div className={styles.statItem}>
                    <GitFork size={12} className={styles.statIcon} />
                    <span>{projeto.forks_count}</span>
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
