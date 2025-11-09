import Link from "next/link";

export default function Home() {
  return (
    <div className="grid" style={{gap:24}}>
      <section className="card">
        <h1>🎮 Gran sorteo exclusivo para mi comunidad</h1>
        <p className="meta">Abierto a todo el mundo • Sin compra necesaria • Sorteo al azar en vivo</p>

        <p>
          Premio total <b>$200</b> repartido entre <b>5 ganadores</b>. Elige: saldo Steam, tarjeta de regalo,
          pase de batalla o monedas del juego (sin exceder el valor del premio).
        </p>
        <div style={{display:"flex", gap:12, flexWrap:"wrap"}}>
          <span className="badge">+1 oportunidad por cada red que sigas</span>
          <span className="badge">+1 por registrarte</span>
        </div>
        <div style={{marginTop:12}}>
          <Link href="/sorteos" className="btn">Participar ahora</Link>
        </div>
      </section>

      <section className="grid grid-3">
        <div className="card">
          <h3>Artículos recientes</h3>
          <p className="meta">Noticias, guías y reseñas gaming</p>
          <Link href="/articulos" className="btn">Leer</Link>
        </div>
        <div className="card">
          <h3>Resultados & transparencia</h3>
          <p className="meta">Publicamos ganadores y CSV/auditoría</p>
          <Link href="/resultados" className="btn">Ver resultados</Link>
        </div>
        <div className="card">
          <h3>Reglas claras</h3>
          <p className="meta">Bases, privacidad y términos</p>
          <div style={{display:"flex", gap:8, marginTop:8}}>
            <a className="btn" href="/bases">Bases</a>
            <a className="btn" href="/privacidad">Privacidad</a>
          </div>
        </div>
      </section>
    </div>
  );
}


