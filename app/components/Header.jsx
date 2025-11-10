"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/sorteos", label: "Sorteos" },
  { href: "/articulos", label: "Artículos" },
  { href: "/resultados", label: "Resultados" },
  { href: "/bases", label: "Bases" },
  { href: "/privacidad", label: "Privacidad" },
  { href: "/terminos", label: "Términos" },
  { href: "/contacto", label: "Contacto" }
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header style={{borderBottom:"1px solid var(--border)"}}>
      <div className="container" style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:16}}>
        <Link href="/" className="logo" style={{fontWeight:900, fontSize:20}}>GridialHub</Link>
        <nav style={{display:"flex", gap:12, flexWrap:"wrap"}}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className={pathname===l.href ? "active" : ""}>{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
