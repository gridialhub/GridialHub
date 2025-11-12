// app/layout.jsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "GridialHub — Comunidad & Sorteos Gaming",
    template: "%s | GridialHub",
  },
  description:
    "Comunidad gamer con sorteos, artículos de videojuegos/tecnología y eventos en vivo.",
  metadataBase: new URL("https://gridialhub.com"),
  robots: { index: true, follow: true },
  openGraph: {
    title: "GridialHub — Comunidad & Sorteos Gaming",
    description:
      "Sorteos transparentes, artículos, tecnología y comunidad gamer global.",
    url: "https://gridialhub.com",
    siteName: "GridialHub",
    images: [{ url: "https://gridialhub.com/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GridialHub — Comunidad & Sorteos Gaming",
    images: ["https://gridialhub.com/og-image.jpg"],
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics (ID CORRECTO con cero): G-Z0WQVNBZMH */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z0WQVNBZMH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z0WQVNBZMH');
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />

        {/* Script de reveal (lo dejo como lo tenías) */}
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
