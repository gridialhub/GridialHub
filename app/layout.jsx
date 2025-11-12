// app/layout.jsx
import "./globals.css";
import Script from "next/script";
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
      <body>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZWQVNBZMH"
        />
        <Script id="ga-setup" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZWQVNBZMH');
          `}
        </Script>

        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
