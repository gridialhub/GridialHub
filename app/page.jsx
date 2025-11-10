import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="card" style={{position:"relative", overflow:"hidden"}}>
        <div className="hero-bg" />
        <div style={{display:"grid", gridTemplateColumns:"1.35fr 1fr", gap:16, alignItems:"center"}}>
          <div>
            <span className="chip">Nuevo</span>
            <h1 className="hero-title">🎮 Gran sorteo exclusivo para mi comunidad</h1>
            <p className="hero-sub">Abierto a todo el mundo · Sin compra necesaria · Sorteo al azar en vivo</p>
            <p className="hero-desc">
              Premio total <b>$200</b> para <b>5 ganadores</b>. Cada red donde me sigas suma una oportunidad extra:
              TikTok, Twitch, YouTube y Facebook.
            </p>
            <div className="hero-cta">
              <Link href="/sorteos" className="btn">Participar ahora</Link>
              <Link href="/bases" className="btn btn-secondary">Ver bases</Link>
            </div>
            <div className="hero-badges" style={{display:"flex", gap:8, flexWrap:"wrap"}}>
              <a className="badge" href="/sorteos">+1 Registro</a>
              <a className="badge" href="https://www.tiktok.com/@gridial" target="_blank">TikTok</a>
              <a className="badge" href="https://www.twitch.tv/gridialtv" target="_blank">Twitch</a>
              <a className="badge" href="https://www.youtube.com/@Gridial" target="_blank">YouTube</a>
              <a className="badge" href="https://www.facebook.com/GridialOfficial" target="_blank">Facebook</a>
            </div>
          </div>
          <div>
            <div className="glass">
              <div className="glass-row"><span>Entradas por registro</span><strong>+1</strong></div>
              <div className="glass-row"><span>Entradas por cada red</span><strong>+1</strong></div>
              <div className="glass-row"><span>Fecha del sorteo</span><strong>Por anunciar</strong></div>
              <div className="glass-row"><span>Transmisión</span><strong>Twitch & TikTok Live</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="grid grid-3">
        <div className="card feature">
          <h3>Transparencia</h3>
          <p className="meta">Sorteo en vivo y publicación de ganadores con archivo de auditoría.</p>
          <Link href="/resultados" className="btn btn-link">Ver resultados</Link>
        </div>
        <div className="card feature">
          <h3>Comunidad</h3>
          <p className="meta">Artículos, noticias y guías gaming en un solo lugar.</p>
          <Link href="/articulos" className="btn btn-link">Leer artículos</Link>
        </div>
        <div className="card feature">
          <h3>Reglas claras</h3>
          <p className="meta">Bases, privacidad y términos disponibles siempre.</p>
          <div className="feature-links">
            <a className="btn btn-chip" href="/bases">Bases</a>
            <a className="btn btn-chip" href="/privacidad">Privacidad</a>
            <a className="btn btn-chip" href="/terminos">Términos</a>
          </div>
        </div>
      </section>
    </div>
  );
}
