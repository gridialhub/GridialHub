import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero card">
        <div className="hero-left">
          <span className="chip">Nuevo</span>
          <h1 className="hero-title">🎮 Gran sorteo exclusivo para mi comunidad</h1>
          <p className="hero-sub">Abierto a todo el mundo • Sin compra necesaria • Sorteo al azar en vivo</p>
          <p className="hero-desc">
            Premio total <b>$200</b> para <b>5 ganadores</b>. Elige saldo de Steam, tarjeta de regalo,
            pase de batalla o monedas de tu juego sin pasar el valor del premio. Suma oportunidades
            por cada red donde me sigas.
          </p>
          <div className="hero-cta">
            <Link className="btn" href="/sorteos">Participar ahora</Link>
            <a className="btn btn-secondary" href="/bases">Ver bases</a>
          </div>
          <div className="hero-badges">
            <span className="badge">+1 registro</span>
            <span className="badge">+1 TikTok</span>
            <span className="badge">+1 Twitch</span>
            <span className="badge">+1 YouTube</span>
            <span className="badge">+1 Facebook</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="glass">
            <div className="glass-row">
              <span>Entradas totales (ejemplo)</span>
              <strong>5</strong>
            </div>
            <div className="glass-row">
              <span>Fecha del sorteo</span>
              <strong>Por anunciar</strong>
            </div>
            <div className="glass-row">
              <span>Transmisión</span>
              <strong>Twitch & TikTok Live</strong>
            </div>
          </div>
        </div>
        <div className="hero-bg" />
      </section>

      {/* FEATURES */}
      <section className="grid grid-3">
        <div className="card feature">
          <h3>Transparencia</h3>
          <p className="meta">Sorteo en vivo y publicación de ganadores y CSV de auditoría.</p>
          <Link href="/resultados" className="btn btn-link">Ver resultados</Link>
        </div>
        <div className="card feature">
          <h3>Comunidad</h3>
          <p className="meta">Noticias, guías y reseñas gaming en un solo lugar.</p>
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

      {/* PASOS */}
      <section className="card steps">
        <h2>Cómo participar</h2>
        <ol>
          <li><b>Regístrate</b> con tu email y usuario en /sorteos</li>
          <li><b>Sigue</b> en TikTok, Twitch, YouTube y Facebook (cada una suma +1)</li>
          <li><b>Conéctate al vivo</b> el día del sorteo</li>
          <li><b>¡Listo!</b> Participas con tus oportunidades acumuladas</li>
        </ol>
        <Link href="/sorteos" className="btn">Ir a participar</Link>
      </section>
    </div>
  );
}




