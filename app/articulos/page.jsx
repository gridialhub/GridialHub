import Link from "next/link";

export default function Articulos() {
  const posts = [
    // Rellena con tus artículos reales
    // { slug:"setup-streaming", title:"Mi setup de streaming", meta:"OBS, bitrate, filtros", date:"2025-11-01" }
  ];

  return (
    <div className="card">
      <h1>Artículos</h1>
      {posts.length === 0 ? (
        <p className="meta">Pronto estaré publicando artículos de gaming, guías y novedades.</p>
      ) : (
        <ul>
          {posts.map(p=>(
            <li key={p.slug}>
              <Link href={`/articulos/${p.slug}`}>{p.title}</Link>
              <div className="meta">{p.meta} · {p.date}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
