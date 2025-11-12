import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost } from "../data";

// Pre-render de rutas estáticas
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// SEO por artículo
export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return { title: "Artículo no encontrado | GridialHub" };

  const url = `https://gridialhub.com/articulos/${post.slug}`;
  const image = post.ogImage || post.cover || "https://gridialhub.com/og-image.jpg";

  return {
    title: `${post.title} | GridialHub`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: "GridialHub",
      images: [{ url: image, width: 1200, height: 630, alt: post.title }],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default function ArticuloDetalle({ params }) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  return (
    <article className="card" style={{ padding: 20 }}>
      <header style={{ display: "grid", gap: 6 }}>
        <Link href="/articulos" className="badge">← Volver a artículos</Link>
        <h1 style={{ margin: 0 }}>{post.title}</h1>
        <p className="meta">
          {new Date(post.date).toLocaleDateString("es-VE")} • {post.readingTime}
        </p>
        {post.tags?.length ? (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {post.tags.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        ) : null}
      </header>

      {/* Portada opcional */}
      {post.cover ? (
        <div
          style={{
            width: "100%",
            height: 240,
            borderRadius: 14,
            marginTop: 12,
            background: `url(${post.cover}) center/cover no-repeat`,
            border: "1px solid var(--border)",
          }}
        />
      ) : null}

      {/* Contenido HTML controlado desde data.js */}
      <div
        style={{ marginTop: 16, lineHeight: 1.7 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
