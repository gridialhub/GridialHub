import Link from "next/link";
import { posts } from "./data";

export const metadata = {
  title: "Artículos | GridialHub",
  description: "Noticias, guías y novedades de la comunidad GridialHub.",
};

export default function ArticulosPage() {
  return (
    <div className="card" style={{ padding: 16 }}>
      {/* ENCABEZADO */}
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

      {/* GRID DE ARTÍCULOS */}
      <div className="post-grid" style={{ marginTop: 14 }}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/articulos/${post.slug}`}
            className="post-card-link"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <article className="post-card">
              {/* MINIATURA */}
              {post.thumbnail ? (
                <div
                  style={{
                    width: "100%",
                    height: 160,
                    overflow: "hidden",
                    borderRadius: "14px 14px 0 0",
                  }}
                >
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              ) : (
                <div
                  className="post-thumb thumb-game"
                  style={{ borderRadius: "14px 14px 0 0" }}
                />
              )}

              {/* CUERPO DEL ARTÍCULO */}
              <div className="post-body">
                <h4>{post.title}</h4>

                <p className="meta">
                  {new Date(post.date).toLocaleDateString("es-VE")} •{" "}
                  {post.readingTime ?? ""}
                </p>

                <p className="meta">{post.excerpt}</p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
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
