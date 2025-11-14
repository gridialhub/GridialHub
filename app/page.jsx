// app/page.jsx
"use client";

import Link from "next/link";
import { posts } from "./articulos/data";

export default function Home() {
  // Tomamos los 2 artículos más recientes
  const latestPosts = posts.slice(0, 2);

  return (
    <div className="home" style={{ display: "grid", gap: 24 }}>
      {/* HERO CENTRADO */}
      <section
        className="card"
        style={{ position: "relative", overflow: "hidden", padding: 0 }}
      >
        <div className="hero__bg" aria-hidden="true" />

        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // centrado horizontal
            textAlign: "center", // centrado del texto
            gap: 24,
            padding: 60,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", margin: 0 }}>
            Bienvenido a GridialHub
          </h1>

          <p
            className="intro-text"
            style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 720 }}
          >
            GridialHub es un espacio creado para gamers, creadores de contenido
            y amantes de la tecnología. Aquí encontrarás artículos, guías,
            novedades, noticias, análisis y sorteos pensados para ayudarte a
            mejorar tu experiencia de juego y mantenerte al día con lo último
            en el mundo gaming.
            <br />
            <br />
            Nuestro objetivo es construir una comunidad donde cada visita aporte
            valor: información clara, contenido útil y un ambiente donde todos
            puedan participar, aprender y crecer.
          </p>

          <Link
            href="/sorteos"
            className="btn"
            style={{ fontSize: 18, padding: "12px 28px", borderRadius: 12 }}
          >
            Participar en sorteos
          </Link>
        </div>
      </section>

      {/* ÚLTIMOS ARTÍCULOS */}
      <section className="card" style={{ padding: 16 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3 style={{ margin: 0 }}>Últimos artículos</h3>

          <Link href="/articulos" className="btn btn-secondary">
            Ver todos
          </Link>
        </div>

        {/* GRID DE ARTÍCULOS */}
        <div className="post-grid" style={{ marginTop: 14 }}>
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/articulos/${post.slug}`}
              className="post-card clickable-card"
              style={{ textDecoration: "none" }}
            >
              {/* MINIATURA DEL ARTÍCULO */}
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

              {/* CONTENIDO */}
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
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
