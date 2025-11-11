import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: "GridialHub — Comunidad & Sorteos Gaming",
  description: "Sorteos transparentes, artículos y comunidad gaming global.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        <PageTransition>
          <main className="container">{children}</main>
        </PageTransition>
        <Footer />

        {/* Script para revelar elementos al hacer scroll */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const revealEls = document.querySelectorAll('.reveal');
              const reveal = () => {
                const vh = window.innerHeight * 0.85;
                revealEls.forEach(el => {
                  const rect = el.getBoundingClientRect();
                  if (rect.top < vh) el.classList.add('visible');
                });
              };
              document.addEventListener('scroll', reveal);
              window.addEventListener('load', reveal);
            `,
          }}
        />
      </body>
    </html>
  );
}
