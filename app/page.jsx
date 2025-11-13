<div className="latest-posts" style={{ marginTop: 40 }}>
  <h2 style={{ marginBottom: 20 }}>Últimos artículos</h2>

  <div className="post-grid">
    {latestPosts.map((post) => (
      <article key={post.slug} className="post-card clickable-card">
        
        <div
          className={`post-thumb ${post.cover ? "" : "thumb-game"}`}
          style={
            post.cover
              ? {
                  backgroundImage: `url(${post.cover})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 180,                         // 👈 Miniatura visible
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

          <p className="meta">{post.excerpt}</p>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
            {post.tags?.map((t) => (
              <span key={t} className="badge">{t}</span>
            ))}
          </div>
        </div>

      </article>
    ))}
  </div>
</div>
