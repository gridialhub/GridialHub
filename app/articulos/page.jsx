import Link from "next/link";

const posts = [
  { slug:"mejores-mouses-2025", title:"Los mejores mouses gaming (2025)", summary:"Guía rápida para escoger tu mouse sin gastar de más.", date:"2025-11-01" },
  { slug:"subir-fps-1080", title:"Cómo subir FPS en 1080p sin perder calidad", summary:"Ajustes clave y trucos para sacarle jugo a tu GPU.", date:"2025-11-05" }
];

export default function Articulos() {
  return (
    <div className="grid" style={{gap:16}}>
      <div className="card">
        <h1>Artículos</h1>
        <p className="meta">Noticias, reseñas y guías gaming</p>
      </div>
      <div className="grid grid-2">
        {posts.map(p => (
          <Link key={p.slug} href={`/articulos/${p.slug}`} className="card">
            <h3>{p.title}</h3>
            <p className="meta">{p.date}</p>
            <p>{p.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
