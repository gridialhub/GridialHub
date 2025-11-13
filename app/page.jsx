import Link from "next/link";
import { posts } from "./articulos/data";

export default function HomePage() {
  const latestPosts = posts.slice(0, 2); // Mostrar los 2 más recientes

  return (
    <div className="container" style={{ paddingBottom: 80 }}>
      
      {/* TÍTULO PRINCIPAL */}
      <h1 style={{ fontSize: "clamp(26px, 4vw, 42px)", marginBottom: 10 }}>
        Bienvenido a GridialHub
      </h1>

      {/* INTRO */}
      <p style={{ maxWidth: 700, opacity: 0.85, marginBottom: 40 }}>
        Bienvenido a <b>GridialHub</b>, tu espacio digital donde lo gaming, la tecnología y la creatividad se juntan.
        Aquí encontrarás artículos, análisis, guías, novedades y contenido pensado para la comunidad.
        Si juegas, creas contenido o simplemente te encanta la tecnología, estás en casa.
      </p>

      {/* ÚLTIMOS ARTÍCULOS */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Últimos artículos</h2>
        <Link href="/articulos" className="button">
          Ver todos
        </Link>
      </div>

      <div className="post-grid" style={{ marginTop: 16 }}>
        {latestPosts.map((post) => (
          <Link
            key={post.id}
            href={`/articulos/${post.slug}`}
            className="post-card"
            style={{ textDecoration: "none" }}
          >
            <article>
              {/* MINIATURA */}
              <div
                className="post-thumb"
                style={{
                  background:
                    post.cover
                      ? `url(${post.cover}) center/cover no-repeat`
                      : "var(--gradient-card)"
                }}
              />

              {/* CUERPO */}
              <div className="post-body">
                <h4>{post.title}</h4>
                <p className="meta">
                  {new Date(post.date).toLocaleDateString("es-VE")} • {post.readingTime}
                </p>
                <p className="meta">{post.excerpt}</p>

                {/* TAGS */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {post.tags.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
