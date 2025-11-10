// app/sorteos/page.jsx
import Link from "next/link";

const REDES = [
  { key: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@gridial" },
  { key: "twitch", label: "Twitch", url: "https://www.twitch.tv/gridialtv" },
  { key: "youtube", label: "YouTube", url: "https://www.youtube.com/@Gridial" },
  { key: "facebook", label: "Facebook", url: "https://www.facebook.com/GridialOfficial" },
  { key: "kick", label: "Kick", url: "https://kick.com/gridial" }
];

export default function SorteosIntro() {
  // Cambia esta fecha cuando la tengas confirmada
  const fechaSorteo = "DD/MM/AAAA — Hora por anunciar";
  return (
    <div className="card" style={{ display: "grid", gap: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
        <div>
          <h1>Gran sorteo exclusivo para mi comunidad</h1>
          <p className="meta">Premio total: <strong>$200</strong> repartido entre <strong>5 ganadores</strong>. Cada ganador podrá escoger entre saldo de Steam, tarjeta de regalo, pase de batalla o moneda del juego (valor equivalente).</p>
        </div>

        <div style={{ minWidth: 220 }}>
          <div className="glass" style={{ padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <small className="meta">Estado</small>
              <strong style={{ color: "var(--brand)" }}>Activo</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <small className="meta">Fecha del sorteo</small>
              <strong>{fechaSorteo}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <small className="meta">Transmisión</small>
              <strong>Twitch & TikTok Live</strong>
            </div>
          </div>

          <div style={{ marginTop: 12, textAlign: "center" }}>
            <Link href="/sorteos/sorteo-live" className="btn" style={{ display: "inline-block", width: "100%" }}>
              Abrir sorteo en vivo
            </Link>
          </div>
        </div>
      </header>

      <section>
        <h2>¿Cómo participar?</h2>
        <ol>
          <li>Sigue a <strong>Gridial</strong> en las redes que prefieras (TikTok, Twitch, YouTube, Facebook, Kick).</li>
          <li>El día del sorteo reuniré las listas de seguidores de cada red y las combinaré para generar los tickets.</li>
          <li>Cada red donde me sigas te dará <strong>+1 ticket</strong> (es decir: si me sigues en 3 redes tendrás 3 tickets y mayor probabilidad).</li>
          <li>No es necesario registrarse en la web — la combinación y sorteo se hará en vivo y pública para transparencia.</li>
        </ol>

        <h3 style={{ marginTop: 16 }}>Reglas importantes / Anti-fraude</h3>
        <ul>
          <li>Está prohibido usar cuentas múltiples, bots o métodos automatizados para inflar seguidores. Intentos de trampa serán motivo de <strong>descalificación</strong>.</li>
          <li>Si detecto que un usuario usa cuentas falsas o hace collages de seguidores para crear ventaja, quedará fuera del sorteo.</li>
          <li>Al participar aceptas que el veredicto del organizador es final para efectos de descalificación y entrega de premio.</li>
          <li>Los premios se entregarán tras verificar la identidad básica del ganador (usuario en la red donde ganó). Si el ganador no responde en 72 horas, se elegirá suplente.</li>
        </ul>

        <h3 style={{ marginTop: 16 }}>¿Qué datos se publicarán?</h3>
        <p className="meta">En la transmisión publicaré: el método de sorteo, la lista consolidada (como CSV o anónimo según la plataforma) y los ganadores. Guardaré evidencia (capturas/CSV) por transparencia.</p>
      </section>

      <section>
        <h3>Enlaces rápidos — Sígueme</h3>
        <p className="meta">Haz clic para visitar y seguir en cada plataforma. Cada follow suma oportunidades el día del sorteo.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
          {REDES.map(r => (
            <a
              key={r.key}
              className={`badge badge-${r.key}`}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 12px", borderRadius: 12 }}
            >
              {/* iconos simples inline (heredan color) */}
              {r.key === "tiktok" && (
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <circle cx="9" cy="17" r="3"></circle>
                  <rect x="11" y="3" width="2.2" height="10" rx="1.1"></rect>
                  <path d="M13.2 6c1.2 1.4 2.8 2.3 4.8 2.4v2.2c-2.1-.1-3.8-.8-5-1.9V6z"></path>
                </svg>
              )}
              {r.key === "twitch" && (
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M5 3h14v9.5l-3.5 3.5H12l-2 2H8v-2H5V3z"></path>
                </svg>
              )}
              {r.key === "youtube" && (
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <rect x="3" y="6.5" width="18" height="11" rx="3"></rect>
                  <path d="M10 9l6 3-6 3V9z"></path>
                </svg>
              )}
              {r.key === "facebook" && (
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M13 10h3V7h-3c-2 0-3.5 1.5-3.5 3.5V13H7v3h2.5v4h3v-4H16v-3h-3v-1.5c0-.6.4-1 1-1z"></path>
                </svg>
              )}
              {r.key === "kick" && (
                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M6 4h3v7l4-4h3l-4.5 4.5L16 20h-3l-4-5v5H6V4z"></path>
                </svg>
              )}
              <span style={{ fontWeight: 700 }}>{r.label}</span>
            </a>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 8 }}>
        <p className="meta">
          Si tienes dudas sobre las reglas escribe a <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a>.
        </p>
      </footer>
    </div>
  );
}
