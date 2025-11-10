import Link from "next/link";

export default function Home() {
  return (
    <div className="home" style={{ display: "grid", gap: 24 }}>
      {/* HERO: introducción + botón */}
      <section className="card" style={{ position: "relative", overflow: "hidden", padding: 0 }}>
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
            margin: "0 auto"
          }}
        >
          <div className="intro-box">
            <p
              className="intro-text"
              style={{ fontSize: 20, lineHeight: 1.6, maxWidth: 700, marginBottom: 28 }}
            >
              Bienvenido a <b>GridialHub</b>, un espacio para la comunidad donde
              compartimos avances de <b>videojuegos</b>, <b>tecnología</b>, y
              organizamos <b>eventos y sorteos</b> exclusivos para seguidores.
              Entra, infórmate y participa.
            </p>

            <Link href="/sorteos" className="btn" style={{ fontSize: 18, padding: "12px 28px", borderRadius: 12 }}>
              Participar en sorteos
            </Link>
          </div>
        </div>
      </section>

      {/* Tarjetas / “pestañas” de acceso rápido */}
      <section className="card" style={{ padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Explora</h3>
        <div className="post-grid">
          {/* Artículos */}
          <article className="post-card">
            <div className="post-thumb thumb-game" />
            <div className="post-body">
              <h4>Artículos</h4>
              <p className="meta">Noticias, guías y contenido de la comunidad</p>
              <Link href="/articulos" className="btn btn-link">Entrar</Link>
            </div>
          </article>

          {/* Reseñas */}
          <article className="post-card">
            <div className="post-thumb thumb-pc" />
            <div className="post-body">
              <h4>Reseñas</h4>
              <p className="meta">Opiniones de juegos y hardware</p>
              <Link href="/resenas" className="btn btn-link">Entrar</Link>
            </div>
          </article>

          {/* Sorteos */}
          <article className="post-card">
            <div className="post-thumb thumb-raffle" />
            <div className="post-body">
              <h4>Sorteos</h4>
              <p className="meta">Participa y revisa fechas y reglas</p>
              <Link href="/sorteos" className="btn btn-link">Entrar</Link>
            </div>
          </article>

          {/* Redes */}
          <article className="post-card">
            <div className="post-thumb thumb-social" />
            <div className="post-body">
              <h4>Redes y canales</h4>
              <p className="meta">TikTok, Twitch, YouTube y Facebook</p>
              <Link href="/redes" className="btn btn-link">Entrar</Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
