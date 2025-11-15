// app/articulos/page.js
import Link from "next/link";

// Metemos los artículos directo aquí para evitar enredos con imports
const posts = [
  {
    slug: "ia-fps",
    title: "Cómo usar IA para subir FPS en tus juegos",
    meta: "14 de noviembre de 2025 · 5 min",
    excerpt:
      "Guía paso a paso para mejorar el rendimiento de tus juegos usando herramientas de IA sin perder calidad.",
    href: "/articulos/posts/ia_fps", // ruta REAL de tu artículo
    thumbClass: "thumb-pc",         // usa una de las clases de miniatura de tu CSS
  },
  {
    slug: "ark-raiders",
    title: "Primeras impresiones de Ark Raiders",
    meta: "14 de noviembre de 2025 · 6 min",
    excerpt:
      "Probamos Ark Raiders y te contamos qué tal se siente en 2025, tanto en gameplay como en rendimiento.",
    href: "/articulos/posts/ark-raiders",
    thumbClass: "thumb-game",
  },
];

export default function ArticulosPage() {
  return (
    <main className="container page-fade">
      <h1>Artículos</h1>

      {/* CONTENEDOR TIPO CARD GRANDE (OPCIONAL) */}
      <section className="card" style={{ marginTop: 24 }}>
        <h2 style={{ marginBottom: 8 }}>Últimos artículos</h2>

        {/* GRID DE FICHAS USANDO TUS CLASES .post-grid / .post-card */}
        <div className="post-grid">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="post-card-link clickable-card"
            >
              <article className="post-card">
                {/* miniatura con degradé */}
                <div className={`post-thumb ${post.thumbClass}`} />

                {/* contenido */}
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
