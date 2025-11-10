"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sorteos", label: "Sorteos" },
  { href: "/articulos", label: "Artículos" },
  { href: "/resultados", label: "Resultados" },
  { href: "/bases", label: "Bases" },
  { href: "/contacto", label: "Contacto" } // ← solo una vez
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "saturate(180%) blur(8px)",
        background: "color-mix(in oklab, var(--bg) 92%, transparent)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          paddingTop: 14,
          paddingBottom: 14
        }}
      >
        {/* Logo de texto estable */}
        <Link
          href="/"
          className="logo"
          style={{
            fontWeight: 900,
            fontSize: 22,
            letterSpacing: 0.3,
            background:
              "linear-gradient(90deg, var(--brand), color-mix(in oklab, var(--brand), #9333ea 50%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          GridialHub
        </Link>

        <nav style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active navlink" : "navlink"}
              style={{
                fontWeight: 600,
                fontSize: 14,
                opacity: pathname === l.href ? 1 : 0.85,
                color: pathname === l.href ? "var(--brand)" : "var(--fg)",
                transition: "color .2s ease, opacity .2s ease"
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div style={{ height: 1, background: "var(--border)" }} />
    </header>
  );
}








