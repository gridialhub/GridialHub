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
  <a href="/sorteos" className="badge">+1 Registro</a>

  <a href="https://www.tiktok.com/@gridial" className="badge" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
      <path d="M9.75 1a4.56 4.56 0 0 0 .1 1.02A3.69 3.69 0 0 0 12 4.3v.01a3.7 3.7 0 0 0 1.86.5V2.72a4.54 4.54 0 0 1-1.92-.44 4.49 4.49 0 0 1-1.19-.86A4.46 4.46 0 0 1 9.75 1ZM6.5 5.3a3.7 3.7 0 0 0-3.7 3.7 3.7 3.7 0 0 0 7.4 0v-3h1a5.7 5.7 0 0 0 .1-1h-2.1v4a2.7 2.7 0 0 1-5.4 0 2.7 2.7 0 0 1 2.7-2.7h.3V5.3Z"/>
    </svg>
    TikTok
  </a>

  <a href="https://www.twitch.tv/gridialtv" className="badge" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3 2L2 5v8h3v1h2l1-1h3l3-3V2H3Zm8 5h-1V5h1v2Zm-3 0H7V5h1v2Z"/>
    </svg>
    Twitch
  </a>

  <a href="https://www.youtube.com/@Gridial" className="badge" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.051 1.999h-.102C3.693 2.037 2.077 2.21 1.4 3.029.667 3.9.667 6.132.667 8s0 4.1.733 4.971c.677.819 2.293.992 6.55 1.03h.102c4.258-.038 5.873-.211 6.55-1.03.733-.871.733-3.103.733-4.971s0-4.1-.733-4.971c-.677-.819-2.293-.992-6.55-1.03ZM6.4 10.533V5.467l4.667 2.533L6.4 10.533Z"/>
    </svg>
    YouTube
  </a>

  <a href="https://www.facebook.com/GridialOfficial" className="badge" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8.94 6.32V5.12c0-.58.27-.86.9-.86h.94V2.26H8.9C6.97 2.26 6.2 3.37 6.2 5.06v1.26H5v1.94h1.2V14h2.73V8.26h1.74l.26-1.94H8.93Z"/>
    </svg>
    Facebook
  </a>
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





