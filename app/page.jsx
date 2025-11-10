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
              style={{ fontSize: 20, lineHeight: 1.6, maxWidth: 720, marginBottom: 28 }}
            >
              Bienvenido a <b>GridialHub</b>, el punto de encuentro para mi comunidad. Aquí
              te mantienes al día con <b>avances en videojuegos</b>, tendencias de{" "}
              <b>tecnología</b>, además de <b>eventos</b> y <b>sorteos</b> pensados para
              quienes apoyan el proyecto. Mi objetivo es que tengas información útil, honesta
              y en un solo lugar, mientras crecemos como comunidad.
            </p>

            <Link href="/sorteos" className="btn" style={{ fontSize: 18, padding: "12px 28px", borderRadius: 12 }}>
              Participar en sorteos
            </Link>
          </div>
        </div>
      </section>

      {/* Últimos artículos / accesos rápidos */}
      <section className="card" style={{ padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ margin: 0 }}>Últimos artículos</h3>
          <Link href="/articulos" className="btn btn-secondary">Ver todos</Link>
        </div>

        <div className="post-grid">
          {/* Artículo 1: Juego */}
          <article className="post-card">
            <div className="post-thumb thumb-game" />
            <div className="post-body">
              <h4><Link href="/articulos">Primeras impresiones de un juego nuevo</Link></h4>
              <p className="meta">Opinión, rendimiento y modos de juego</p>
            </div>
          </article>

          {/* Artículo 2: Componentes PC */}
          <article className="post-card">
            <div className="post-thumb thumb-pc" />
            <div className="post-body">
              <h4><Link href="/articulos">Componentes de PC: guía rápida</Link></h4>
              <p className="meta">GPU, CPU, RAM: qué mirar antes de comprar</p>
            </div>
          </article>

          {/* Artículo 3: Sorteo */}
          <article className="post-card">
            <div className="post-thumb thumb-raffle" />
            <div className="post-body">
              <h4><Link href="/sorteos">Sorteo activo: $200 para 5 ganadores</Link></h4>
              <p className="meta">Cómo participar y cuándo será el en vivo</p>
            </div>
          </article>

          {/* Artículo 4: Redes (sin nuevas rutas; badges a tus perfiles) */}
          <article className="post-card">
            <div className="post-thumb thumb-social" />
            <div className="post-body">
              <h4>Redes y canales</h4>
              <p className="meta">Sígueme para sumar oportunidades</p>
             <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
  {/* TikTok */}
  <a className="badge badge-tiktok" href="https://www.tiktok.com/@gridial" target="_blank" rel="noreferrer">
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <!-- nota musical simple -->
      <circle cx="9" cy="17" r="3"></circle>
      <rect x="11" y="3" width="2.2" height="10" rx="1.1"></rect>
      <path d="M13.2 6c1.2 1.4 2.8 2.3 4.8 2.4v2.2c-2.1-.1-3.8-.8-5-1.9V6z"></path>
    </svg>
    TikTok
  </a>

  {/* Twitch */}
  <a className="badge badge-twitch" href="https://www.twitch.tv/gridialtv" target="_blank" rel="noreferrer">
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <!-- burbuja "glitch" -->
      <path d="M5 3h14v9.5l-3.5 3.5H12l-2 2H8v-2H5V3z"></path>
      <rect x="9" y="7" width="2.5" height="3.2" rx="0.4"></rect>
      <rect x="13.5" y="7" width="2.5" height="3.2" rx="0.4"></rect>
    </svg>
    Twitch
  </a>

  {/* YouTube */}
  <a className="badge badge-youtube" href="https://www.youtube.com/@Gridial" target="_blank" rel="noreferrer">
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6.5" width="18" height="11" rx="3"></rect>
      <path d="M10 9l6 3-6 3V9z"></path>
    </svg>
    YouTube
  </a>

  {/* Facebook */}
  <a className="badge badge-facebook" href="https://www.facebook.com/GridialOfficial" target="_blank" rel="noreferrer">
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <!-- "f" simplificada -->
      <path d="M13 10h3V7h-3c-2 0-3.5 1.5-3.5 3.5V13H7v3h2.5v4h3v-4H16v-3h-3v-1.5c0-.6.4-1 1-1z"></path>
    </svg>
    Facebook
  </a>

  {/* Kick */}
  <a className="badge badge-kick" href="https://kick.com/gridialtv" target="_blank" rel="noreferrer">
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      <!-- K geométrica -->
      <path d="M6 4h3v7l4-4h3l-4.5 4.5L16 20h-3l-4-5v5H6V4z"></path>
    </svg>
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




