// app/page.jsx
import Link from "next/link";
import { posts } from "./articulos/data";

export default function Home() {
  // Tomamos los 2 artículos más recientes
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <div className="home" style={{ display: "grid", gap: 24 }}>
      {/* HERO: introducción + botón */}
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
            alignItems: "center",
            textAlign: "center",
            gap: 24,
            padding: 60,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <div className="intro-box hero-cinematic">
            <p
              className="intro-text"
              style={{
                fontSize: 20,
                lineHeight: 1.6,
                maxWidth: 720,
                marginBottom: 28,
              }}
            >
              Bienvenido a <b>GridialHub</b>, el punto de encuentro para mi
              comunidad. Aquí te mantienes al día con{" "}
              <b>avances en videojuegos</b>, tendencias de <b>tecnología</b>,
              además de <b>eventos</b> y <b>sorteos</b> pensados para quienes
              apoyan el proyecto. Mi objetivo es que tengas información útil,
              honesta y en un solo lugar, mientras crecemos como comunidad.
            </p>

            <Link
              href="/sorteos"
              className="btn"
              style={{ fontSize: 18, padding: "12px 28px", borderRadius: 12 }}
            >
              Participar en sorteos
            </Link>
          </div>
        </div>
      </section>

      {/* Últimos artículos */}
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

        <div className="post-grid" style={{ marginTop: 14 }}>
          {/* 🔹 Dos últimos artículos reales (copia del código de /articulos) */}
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/articulos/${post.slug}`}
              className="post-card-link"
            >
              <article className="post-card">
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
                <div className="post-body">
                  <h4>{post.title}</h4>
                  <p className="meta">
                    {new Date(post.date).toLocaleDateString("es-VE")} •{" "}
                    {post.readingTime}
                  </p>
                  <p className="meta">{post.excerpt}</p>
                  <div
                    style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
                  >
                    {post.tags?.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}

          {/* 🔹 Tarjeta fija de redes y canales */}
          <article className="post-card">
            <div className="post-thumb thumb-social" />
            <div className="post-body">
              <h4>Redes y canales</h4>
              <p className="meta">Sígueme para sumar oportunidades</p>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <a
                  className="badge badge-tiktok"
                  href="https://www.tiktok.com/@gridial"
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>
                <a
                  className="badge badge-twitch"
                  href="https://www.twitch.tv/gridialtv"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitch
                </a>
                <a
                  className="badge badge-youtube"
                  href="https://www.youtube.com/@Gridial"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
                <a
                  className="badge badge-facebook"
                  href="https://www.facebook.com/GridialOfficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  className="badge badge-kick"
                  href="https://kick.com/gridialtv"
                  target="_blank"
                  rel="noreferrer"
                >
                  Kick
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
