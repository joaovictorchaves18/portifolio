# 🚀 Portfólio & Currículo Premium - João Victor Chaves

Um site de portfólio profissional e currículo acadêmico de altíssimo impacto visual, desenvolvido com **React** e **Next.js** (App Router), estilizado com **Vanilla CSS (CSS Modules)** premium e com integrações ativas a **APIs Públicas REST**.

---

## 🎨 Características Visuais & Funcionalidades

- **Visual Cyber-Premium**: Estética futurista escura (deep dark) com gradientes elétricos (ciano, roxo, verde esmeralda) e efeitos de **Glassmorphism** (`backdrop-filter`).
- **Navegação Fluida & Responsiva**: Barra de navegação flutuante com indicação de página ativa e suporte a dispositivos móveis através de menu colapsável.
- **5 Páginas OBRIGATÓRIAS**:
  1. **Home (`/`)**: Hero section impactante com avatar holográfico circular animado e um widget dinâmico de consumo de API.
  2. **Sobre (`/sobre`)**: Biografia acadêmica detalhada e uma seção técnica exibindo de forma transparente todos os módulos do aplicativo (atendendo ao requisito).
  3. **Experiência Acadêmica (`/academico`)**: Timeline dupla ilustrando os cursos concomitantes (Sistemas para Internet na UNICAP & Engenharia de Controle e Automação na Federal - UFPE) com uma matriz de sinergia entre software e hardware.
  4. **Experiência Profissional (`/profissional`)**: Linha do tempo profissional contendo experiências freelancer fullstack, projetos físicos IoT e contribuições open source.
  5. **Projetos Desenvolvidos (`/projetos`)**: Caixa de busca de alta performance integrada com a **API oficial do GitHub** para carregar seus repositórios públicos em tempo real, além de um fallback local para projetos selecionados (incluindo o app bilheteria Flávia Oliveira Comedoria!).
- **SEO Otimizado**: Metadados customizados para melhorar o rastreamento em buscadores (Google, Bing).

---

## 🛠️ Tecnologias e Módulos Empregados

- **Next.js 15+** (App Router)
- **React 19** (State Hooks: `useState`, `useEffect`)
- **Vanilla CSS** (CSS Modules de alta fidelidade)
- **Lucide React** (Ícones modernos)
- **GitHub REST API** (Consumo dinâmico de projetos)
- **Advice Slip API** (Consumo dinâmico de dicas de programação na Home)

---

## 💻 Como Rodar o Projeto Localmente

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

3. **Gerar build de produção**:
   ```bash
   npm run build
   ```

---

## 📦 Como Publicar no GitHub e Implantar na Vercel (Guia Passo a Passo)

Para concluir a entrega do seu trabalho, siga os passos abaixo para colocar seu código no ar:

### Passo 1: Enviar o Código para o GitHub

1. Vá até o seu perfil no GitHub (https://github.com/) e crie um **Novo Repositório Público** com o nome `portifolio` (não selecione README, .gitignore ou licenças adicionais, pois o projeto já os possui).
2. No seu terminal, dentro da pasta `/Users/joaovictordeoliveirachaves/portifolio`, execute os comandos abaixo para associar e enviar o projeto:
   ```bash
   # O projeto já possui repositório Git inicializado localmente. Basta fazer o commit:
   git add .
   git commit -m "feat: first premium commit of my portfolio website"
   
   # Renomear a branch principal para main
   git branch -M main
   
   # Adicionar o seu repositório remoto (Substitua pelo seu link se necessário)
   git remote add origin https://github.com/joaovictordeoliveirachaves/portifolio.git
   
   # Enviar os arquivos
   git push -u origin main
   ```

### Passo 2: Publicar seu site na Vercel (Gratuito)

1. Acesse o painel da **Vercel** (https://vercel.com/) e faça login utilizando a sua conta do GitHub.
2. No painel principal da Vercel, clique no botão **"Add New"** no canto superior direito e selecione **"Project"**.
3. Na lista de repositórios que aparecerá (após autorizar o GitHub), localize o repositório `portifolio` e clique em **"Import"**.
4. Nas configurações do projeto, a Vercel detectará automaticamente que é um projeto Next.js. **Não altere nenhuma configuração**.
5. Clique no botão **"Deploy"**!
6. Em cerca de 1 minuto, a Vercel gerará o link oficial do seu site publicado.

---

*Desenvolvido com carinho para o João Victor de Oliveira Chaves. Sucesso nas suas graduações na UNICAP e UFPE! 🚀*
