"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sorteos", label: "Sorteos" },
  { href: "/articulos", label: "Artículos" },
  { href: "/resultados", label: "Resultados" },
  { href: "/bases", label: "Bases" },
  { href: "/contacto", label: "Contacto" }
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
          paddingTop: 16,
          paddingBottom: 16
        }}
      >
        {/* Marca más grande y moderna */}
        <Link
          href="/"
          className="brand-name"
          style={{
            fontWeight: 900,
            letterSpacing: 0.4,
            fontSize: "clamp(22px, 3.2vw, 32px)",
            lineHeight: 1,
            background:
              "linear-gradient(90deg, var(--brand), color-mix(in oklab, var(--brand), #60a5fa 45%))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "uppercase"
          }}
        >
          GridialHub
        </Link>

        {/* Nav dentro de un marco redondeado */}
        <div className="nav-pill">
          <nav style={{ display: "flex", gap: 8, alignItems: "center", padding: 4 }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? "navlink active" : "navlink"}
                style={{
                  padding: "8px 12px",
                  borderRadius: 12,
                  fontWeight: 600,
                  fontSize: 14
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div style={{ height: 1, background: "var(--border)" }} />
    </header>
  );
}

