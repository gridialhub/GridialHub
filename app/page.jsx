"use client";

import Link from "next/link";
import { posts } from "./articulos/data";

export default function Home() {
  // Últimos 2 artículos (puedes cambiar a 3 si quieres)
  const latestPosts = posts.slice(0, 2);

  return (
    <main style={{ padding: "24px" }}>
      {/* ------------------------------ */}
      {/* HERO O CONTENIDO PRINCIPAL     */}
      {/* ------------------------------ */}
      <section style={{ marginBottom: 50 }}>
        <h1>Bienvenido a GridialHub</h1>
        <p>Comunidad gaming, artículos, sorteos y mucho más.</p>
      </section>

      {/* ------------------------------ */}
      {/* ÚLTIMOS ARTÍCULOS               */}
      {/* ------------------------------ */}
      <section style={{ marginTop: 20 }}>
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ margin: 0 }}>Últimos artículos</h2>

          <Link href="/articulos" className="btn">
            Ver todos
          </Link>
        </header>

        <div className="post-grid" style={{ marginTop: 20 }}>
          {latestPosts.map((post) => (
            <article key={post.slug} className="post-card clickable-card">
              {/* Miniatura (funciona igual que en /articulos) */}
              <div
                className={`post-thumb ${post.cover ? "" : "thumb-game"}`}
                style={
                  post.cover
                    ? {
                        backgroundImage: `url(${post.cover})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: 180,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      }
                    : {
                        height: 180,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      }
                }
              />

              <div className="post-body">
                <h4>
                  <Link href={`/articulos/${post.slug}`}>{post.title}</Link>
                </h4>

                <p className="meta">
                  {new Date(post.date).toLocaleDateString("es-VE")} • {post.readingTime}
                </p>

                <p>{post.excerpt}</p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
                  {post.tags?.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------ */}
      {/* OTRO CONTENIDO DE TU HOME      */}
      {/* ------------------------------ */}
      {/* Si tienes banners, secciones o links debajo, colócalos aquí */}
    </main>
  );
}
