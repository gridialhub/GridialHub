// app/articulos/[slug]/page.jsx
import Link from "next/link";
import { getPost } from "../data";

export async function generateMetadata({ params }) {
  const post = getPost(params.slug);

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

export default function ArticlePage({ params }) {
  const post = getPost(params.slug);

  if (!post) {
    return (
      <div className="card" style={{ padding: 24 }}>
        <h1>Artículo no encontrado</h1>
        <p className="meta">
          El artículo que intentas ver no existe.{" "}
          <Link href="/articulos">Volver a artículos</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: 20, borderRadius: 18 }}>
      {/* Volver atrás */}
      <div style={{ marginBottom: 12 }}>
        <Link href="/articulos" className="meta">
          ← Volver a artículos
        </Link>
      </div>

      {/* Título */}
      <h1
        style={{
          fontSize: "clamp(26px, 3.2vw, 34px)",
          fontWeight: 900,
          marginBottom: 4,
        }}
      >
        {post.title}
      </h1>

      {/* Fecha + lectura */}
      <p className="meta" style={{ marginBottom: 8 }}>
        {new Date(post.date).toLocaleDateString("es-VE")} • {post.readingTime}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        {post.tags?.map((tag) => (
          <span key={tag} className="badge">
            {tag}
          </span>
        ))}
      </div>

      {/* HERO CON IMAGEN DE PORTADA */}
      {post.cover && (
        <div
          className="article-hero"
          style={{
            marginBottom: 24,
            borderRadius: 16,
            overflow: "hidden",
            background: "#050509",
          }}
        >
          <img
            src={post.cover}
            alt={post.title}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* CONTENIDO DEL ARTÍCULO */}
      <div
        className="article-content"
        style={{ lineHeight: 1.7 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
