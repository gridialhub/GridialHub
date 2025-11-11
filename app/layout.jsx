import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: {
    default: "GridialHub — Comunidad & Sorteos Gaming",
    template: "%s | GridialHub",
  },
  description:
    "Comunidad gamer donde encontrarás sorteos, artículos sobre videojuegos, tecnología y eventos exclusivos. ¡Únete y participa en los mejores giveaways de la comunidad Gridial!",
  keywords: [
    "Gridial",
    "GridialHub",
    "sorteos gaming",
    "giveaways Steam",
    "juegos PC",
    "RTX 5070",
    "Twitch sorteos",
    "TikTok gaming",
    "tecnología y videojuegos",
  ],
  authors: [{ name: "Gridial" }],
  creator: "Gridial",
  metadataBase: new URL("https://gridialhub.com"),
  openGraph: {
    title: "GridialHub — Comunidad & Sorteos Gaming",
    description:
      "Sorteos transparentes, artículos, tecnología y comunidad gamer global.",
    url: "https://gridialhub.com",
    siteName: "GridialHub",
    images: [
      {
        url: "https://gridialhub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GridialHub — Comunidad & Sorteos Gaming",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GridialHub — Comunidad & Sorteos Gaming",
    description:
      "Sorteos, tecnología y comunidad gamer. ¡Participa en giveaways y entérate de lo nuevo!",
    creator: "@Gridial",
    images: ["https://gridialhub.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
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

