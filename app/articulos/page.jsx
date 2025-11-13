// app/articulos/page.jsx
import Link from "next/link";
import { posts } from "./data";

export const metadata = {
  title: "Artículos | GridialHub",
  description: "Noticias, guías y novedades de la comunidad GridialHub.",
};

export default function ArticulosPage() {
  return (
    <div className="card" style={{ padding: 16 }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>Artículos</h1>
        <span className="badge">Total: {posts.length}</span>
      </header>

      <div className="post-grid" style={{ marginTop: 14 }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/articulos/${post.slug}`}
            className="post-card-link"
          >
            <article className="post-card">
              {/* MINIATURA / PORTADA */}
              {post.cover ? (
                <div className="post-thumb with-img">
                  <img src={post.cover} alt={post.title} />
                </div>
              ) : (
                <div className="post-thumb thumb-game" />
              )}

              {/* CUERPO DE LA TARJETA */}
              <div className="post-body">
                <h4>{post.title}</h4>

                <p className="meta">
                  {new Date(post.date).toLocaleDateString("es-VE")} •{" "}
                  {post.readingTime}
                </p>

                <p className="meta">{post.excerpt}</p>

                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginTop: 8,
                  }}
                >
                  {post.tags?.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
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
