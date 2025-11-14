// app/articulos/[slug]/page.jsx
import { notFound } from "next/navigation";
import { posts } from "../posts";

// Metadata dinámica por artículo
export function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Artículo no encontrado | GridialHub",
      description: "El artículo que buscas no existe o fue movido.",
    };
  }

  return {
    title: `${post.title} | GridialHub`,
    description: post.excerpt,
  };
}

export default function ArticuloDetalle({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <article
      className="card"
      style={{ padding: 20, borderRadius: 16, display: "grid", gap: 16 }}
    >
      {/* Banner si existe */}
      {post.banner && (
        <div
          style={{
            marginBottom: 4,
            borderRadius: 14,
            overflow: "hidden",
            maxHeight: 360,
          }}
        >
          <img
            src={post.banner}
            alt={post.title}
            style={{
              width: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* Encabezado del artículo */}
      <header style={{ marginBottom: 8 }}>
        <h1 style={{ marginBottom: 8 }}>{post.title}</h1>
        <p className="meta">
          {new Date(post.date).toLocaleDateString("es-VE")} •{" "}
          {post.readingTime}
        </p>
        {post.tags && (
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              marginTop: 8,
            }}
          >
            {post.tags.map((tag) => (
              <span key={tag} className="badge">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Contenido HTML del artículo */}
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
