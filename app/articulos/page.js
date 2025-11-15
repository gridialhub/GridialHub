// app/articulos/page.js
import Link from "next/link";
import { posts } from "./posts";

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
                  {post.meta && <p className="meta">{post.meta}</p>}
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
