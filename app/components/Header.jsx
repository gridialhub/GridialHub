"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

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
    <header style={{position:"sticky", top:0, zIndex:50, backdropFilter:"saturate(180%) blur(8px)", background:"color-mix(in oklab, var(--bg) 92%, transparent)"}}>
      <div className="container" style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, paddingTop:14, paddingBottom:14}}>
        <Link href="/" className="logo" style={{fontWeight:900, fontSize:20, letterSpacing:.3}}>GridialHub</Link>
        <nav style={{display:"flex", gap:14, flexWrap:"wrap", alignItems:"center"}}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname===l.href ? "active navlink" : "navlink"}
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
      <div style={{height:1, background:"var(--border)"}} />
    </header>
  );
}
