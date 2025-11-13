import { getPost } from "../data";
import Link from "next/link";

export default function ArticuloPage({ params }) {
  const post = getPost(params.slug);

  if (!post) {
    return (
      <div className="card" style={{ padding: 24 }}>
        <h1>Artículo no encontrado</h1>
        <Link href="/articulos">Volver a artículos</Link>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: 24 }}>
      <Link href="/articulos" className="meta" style={{ display: "inline-block", marginBottom: 14 }}>
        ← Volver a artículos
      </Link>

      <h1 style={{ marginTop: 0 }}>{post.title}</h1>

      <p className="meta">
        {new Date(post.date).toLocaleDateString("es-VE")} • {post.readingTime}
      </p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {post.tags.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>

      {/* Imagen de portada si existe */}
      {post.cover && (
        <img
          src={post.cover}
          alt={post.title}
          style={{
            width: "100%",
            borderRadius: 12,
            marginBottom: 24,
          }}
        />
      )}

      {/* CONTENIDO DEL ARTÍCULO */}
      <article
        className="article-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}

