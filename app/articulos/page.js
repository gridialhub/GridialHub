// app/articulos/page.js
import Link from "next/link";

const posts = [
  {
    slug: "ia-fps",
    title: "Cómo usar IA para subir FPS en tus juegos",
    meta: "14 de noviembre de 2025 · 5 min",
    excerpt:
      "Guía paso a paso para mejorar el rendimiento de tus juegos usando herramientas de IA sin perder calidad.",
    // 👉 Ruta real del artículo
    href: "/articulos/ia-fps",
    // 👉 Miniatura que ya renombramos sin espacios ni '+'
    image: "/articulos/mitad-ia-fps.png",
    thumbClass: "thumb-pc",
  },
  {
    slug: "ark-raiders",
    title: "Primeras impresiones de Ark Raiders",
    meta: "14 de noviembre de 2025 · 6 min",
    excerpt:
      "Probamos Ark Raiders y te contamos qué tal se siente en 2025, tanto en gameplay como en rendimiento.",
    href: "/articulos/ark-raiders",
    image: "/articulos/thumbnail_ark_raiders_600x400.png",
    thumbClass: "thumb-game",
  },
];

export default function ArticulosPage() {
  return (
    <main className="container page-fade">
      {/* TÍTULO CENTRADO */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: 24,
          fontSize: "clamp(32px, 4vw, 42px)",
        }}
      >
        Artículos
      </h1>

      {/* CONTENEDOR PRINCIPAL */}
      <section className="card" style={{ marginTop: 0 }}>
        <h2 style={{ marginBottom: 8 }}>Últimos artículos</h2>

        {/* GRID DE FICHAS */}
        <div className="post-grid">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="post-card-link clickable-card"
            >
              <article className="post-card">
                {/* MINIATURA: imagen real si existe, si no degradé */}
                {post.image ? (
                  <div className="post-thumb with-img">
                    <img src={post.image} alt={post.title} />
                  </div>
                ) : (
                  <div className={`post-thumb ${post.thumbClass || ""}`} />
                )}

                {/* CONTENIDO DE LA FICHA */}
                <div className="post-body">
                  <h4>{post.title}</h4>
                  <p className="meta">{post.meta}</p>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
