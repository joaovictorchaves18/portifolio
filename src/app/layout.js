import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "João Victor | Portfólio & Currículo Premium",
  description: "Portfólio profissional e currículo acadêmico de João Victor de Oliveira Chaves, desenvolvedor Fullstack e engenheiro de controle e automação.",
  keywords: ["João Victor", "Portfólio", "Currículo", "Sistemas para Internet", "Engenharia de Controle e Automação", "UNICAP", "UFPE", "Desenvolvedor Fullstack", "Automação Industrial"],
  authors: [{ name: "João Victor de Oliveira Chaves" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="app-container">
          <Navbar />
          <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 80px - 100px)" }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
