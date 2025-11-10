import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      {/* HERO con fondo neón */}
      <section className="hero card">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__content">
          <div className="hero__text">
            <span className="chip">Nuevo</span>
            <h1 className="hero-title">🎮 Gran sorteo exclusivo para mi comunidad</h1>
            <p className="hero-sub">
              Abierto a todo el mundo · Sin compra necesaria · Sorteo al azar en vivo
            </p>
            <p className="hero-desc">
              Premio total <b>$200</b> para <b>5 ganadores</b>. Cada red donde me sigas suma una oportunidad extra:
              TikTok, Twitch, YouTube y Facebook.
            </p>

            <div className="hero-cta">
              <Link href="/sorteos" className="btn">Participar ahora</Link>
              <Link href="/bases" className="btn btn-secondary">Ver bases</Link>
            </div>

            <div className="hero-badges">
              <a className="badge" href="/sorteos">+1 Registro</a>
              <a className="badge" href="https://www.tiktok.com/@gridial" target="_blank" rel="noreferrer">TikTok</a>
              <a className="badge" href="https://www.twitch.tv/gridialtv" target="_blank" rel="noreferrer">Twitch</a>
              <a className="badge" href="https://www.youtube.com/@Gridial" target="_blank" rel="noreferrer">YouTube</a>
              <a className="badge" href="https://www.facebook.com/GridialOfficial" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>

          <div className="hero__panel glass">
            <div className="glass-row"><span>Entradas por registro</span><strong>+1</strong></div>
            <div className="glass-row"><span>Entradas por cada red</span><strong>+1</strong></div>
            <div className="glass-row"><span>Fecha del sorteo</span><strong>Por anunciar</strong></div>
            <div className="glass-row"><span>Transmisión</span><strong>Twitch & TikTok Live</strong></div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE BENEFICIOS */}
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

      {/* CINTA DE ESTADÍSTICAS (decorativa) */}
      <section className="stats card">
        <div className="stat">
          <div className="stat__num">+1</div>
          <div className="stat__label">Por registro</div>
        </div>
        <div className="stat">
          <div className="stat__num">+4</div>
          <div className="stat__label">Si sigues en 4 redes</div>
        </div>
        <div className="stat">
          <div className="stat__num">$200</div>
          <div className="stat__label">Premio total</div>
        </div>
        <div className="stat">
          <div className="stat__num">5</div>
          <div className="stat__label">Ganadores</div>
        </div>
      </section>
    </div>
  );
}
