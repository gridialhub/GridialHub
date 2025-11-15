// app/articulos/page.js
import Link from "next/link";

const posts = [
  {
    slug: "posts/ia_fps",
    title:
      "Cómo la IA está optimizando tus FPS en tiempo real: el salto que da tu PC gamer",
    meta: "14 de noviembre de 2025 · 7 min de lectura",
    excerpt:
      "La inteligencia artificial ya está dentro de tu GPU, tus drivers y tu sistema para darte más FPS, mejor calidad visual y menos lag. Te explico cómo funciona y cómo aprovecharla.",
    href: "/articulos/posts/ia_fps",
    // usa aquí la miniatura que ya tengas funcionando
    image: "/articulos/mitad-ia-fps.png",
    thumbClass: "thumb-pc",
  },
  {
    slug: "posts/ark-raiders",
    title: "ARK Raiders: cómo la IA está llevando el gameplay a otro nivel",
    meta: "14 de noviembre de 2025 · 7 min de lectura",
    excerpt:
      "ARK Raiders combina acción cooperativa con inteligencia artificial avanzada para crear enfrentamientos dinámicos, impredecibles y desafiantes.",
    href: "/articulos/posts/ark-raiders",
    image: "/articulos/thumbnail_ark_raiders_600x400.png",
    thumbClass: "thumb-game",
  },
  {
    slug: "posts/que-grafica-comprar-sin-botar-la-plata",
    title: "Qué tarjeta gráfica comprar en 2025 sin botar la plata",
    meta: "14 de noviembre de 2025 · 8 min de lectura",
    excerpt:
      "Guía clara para elegir la GPU correcta según tu monitor, tus juegos y tu presupuesto, evitando el sobreprecio y el marketing vacío.",
    href: "/articulos/posts/que-grafica-comprar-sin-botar-la-plata",
    image: "/articulos/mitad-que-grafica-comprar.png",
    thumbClass: "thumb-pc",
  },
];

export default function ArticulosPage() {
  return (
    <main className="container page-fade">
      <h1
        style={{
          textAlign: "center",
          marginBottom: 24,
          fontSize: "clamp(32px, 4vw, 42px)",
        }}
      >
        Artículos
      </h1>

      <section className="card" style={{ marginTop: 0 }}>
        <h2 style={{ marginBottom: 8 }}>Últimos artículos</h2>

        <div className="post-grid">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="post-card-link clickable-card"
            >
              <article className="post-card">
                {post.image ? (
                  <div className="post-thumb with-img">
                    <img src={post.image} alt={post.title} />
                  </div>
                ) : (
                  <div className={`post-thumb ${post.thumbClass || ""}`} />
                )}

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
