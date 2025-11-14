// app/articulos/page.jsx
import Link from "next/link";
import { posts } from "./posts";

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
          gap: 12,
          marginBottom: 12,
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
            className="clickable-card-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article className="post-card clickable-card">
              {/* Miniatura */}
              <div
                className={`post-thumb ${post.cover ? "" : "thumb-game"}`}
                style={
                  post.cover
                    ? {
                        backgroundImage: `url(${post.cover})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : {}
                }
              />

              {/* Contenido */}
              <div className="post-body">
                <h4 style={{ marginBottom: 4 }}>{post.title}</h4>

                <p className="meta">
                  {new Date(post.date).toLocaleDateString("es-VE")} •{" "}
                  {post.readingTime}
                </p>

                <p className="meta" style={{ marginTop: 4 }}>
                  {post.excerpt}
                </p>

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
