import Link from "next/link";

export default function Home() {
  return (
    <div className="home" style={{ display: "grid", gap: 24 }}>
      {/* HERO: solo descripción centrada */}
      <section
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: 0
        }}
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
            padding: 48
          }}
        >
          {/* Descripción centrada de la página */}
          <div className="intro-box" style={{ maxWidth: 700 }}>
            <h2 style={{ margin: "4px 0 10px 0" }}>Tu centro de comunidad</h2>
            <p className="intro-text">
              Una página donde mi comunidad puede enterarse sobre avances en{" "}
              <b>videojuegos</b>, <b>tecnología</b>, además de{" "}
              <b>eventos</b> y <b>sorteos</b>.
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: "center",
                marginTop: 12
              }}
            >
              <Link href="/sorteos" className="btn">
                Participar en sorteos
              </Link>
              <Link href="/articulos" className="btn btn-secondary">
                Leer artículos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Últimos artículos */}
      <section className="card" style={{ padding: 16 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <h3 style={{ margin: 0 }}>Últimos artículos</h3>
          <Link href="/articulos" className="btn btn-secondary">
            Ver todos
          </Link>
        </div>

        <div className="post-grid">
          <article className="post-card">
            <div className="post-thumb thumb-game" />
            <div className="post-body">
              <h4>Primeras impresiones de un juego nuevo</h4>
              <p className="meta">Opinión, rendimiento y modos de juego</p>
              <Link href="/articulos" className="btn btn-link">
                Leer más
              </Link>
            </div>
          </article>

          <article className="post-card">
            <div className="post-thumb thumb-pc" />
            <div className="post-body">
              <h4>Componentes de PC: guía rápida</h4>
              <p className="meta">GPU, CPU, RAM: qué mirar antes de comprar</p>
              <Link href="/articulos" className="btn btn-link">
                Leer más
              </Link>
            </div>
          </article>

          <article className="post-card">
            <div className="post-thumb thumb-raffle" />
            <div className="post-body">
              <h4>Sorteo activo: $200 para 5 ganadores</h4>
              <p className="meta">Cómo participar y cuándo será el en vivo</p>
              <Link href="/sorteos" className="btn btn-link">
                Ir al sorteo
              </Link>
            </div>
          </article>

          <article className="post-card">
            <div className="post-thumb thumb-social" />
            <div className="post-body">
              <h4>Mis redes y canales</h4>
              <p className="meta



