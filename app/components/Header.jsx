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
          paddingTop: 14,
          paddingBottom: 14
        }}
      >
        {/* LOGO (usa /public/logo-gridial.png) */}
        <Link href="/" className="logo" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/logo-gridial.png"
            alt="Logo Gridial"
            style={{
              height: "48px",
              width: "auto",
              // Brillo suave en azul y rojo (ajusta intensidades si quieres)
              filter:
                "drop-shadow(0 0 10px rgba(0,255,255,.55)) drop-shadow(0 0 14px rgba(255,0,0,.35))"
            }}
            onError={(e) => {
              // Fallback a texto si faltara la imagen
              const link = e.currentTarget.parentElement;
              link.innerHTML = `<span style="
                font-weight:900;
                font-size:20px;
                letter-spacing:.3px;
                background:linear-gradient(90deg, var(--brand), color-mix(in oklab, var(--brand), #9333ea 50%));
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
              ">GRIDIAL</span>`;
            }}
          />
        </Link>

        {/* NAV */}
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


