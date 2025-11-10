// app/sorteos/page.jsx
export const dynamic = "force-dynamic";
export const revalidate = 0;

import Link from "next/link";

const REDES = [
  { key: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@gridial" },
  { key: "twitch", label: "Twitch", url: "https://www.twitch.tv/gridialtv" },
  { key: "youtube", label: "YouTube", url: "https://www.youtube.com/@Gridial" },
  { key: "facebook", label: "Facebook", url: "https://www.facebook.com/GridialOfficial" },
  { key: "kick", label: "Kick", url: "https://kick.com/gridial" }
];

export default function SorteosIntro() {
  const fechaSorteo = "DD/MM/AAAA — Hora por anunciar"; // cámbiala cuando la confirmes

  return (
    <div className="card" style={{ display: "grid", gap: 16 }}>
      <header style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start", flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 640px" }}>
          <h1>🎁 Gran sorteo exclusivo para mi comunidad</h1>
          <p className="meta">
            Premio total: <strong>$200</strong> repartido entre <strong>5 ganadores</strong>. 
            Cada ganador podrá escoger saldo de Steam, tarjeta de regalo, pase de batalla o moneda del juego (valor equivalente).
          </p>

          <h3 style={{ marginTop: 12 }}>¿Cómo funciona?</h3>
          <p className="intro-text">
            El día del sorteo reuniré las listas de seguidores de cada red y combinaré los nombres para generar las
            entradas. Por cada red donde me sigas obtendrás <strong>+1 ticket</strong> (si me sigues en 3 redes tendrás 3 tickets).
            El proceso se hará en vivo y con transparencia: publicaré el método y la lista consolidada.
          </p>

          <h3 style={{ marginTop: 12 }}>Reglas y anti-fraude</h3>
          <ul>
            <li>Prohibido usar cuentas múltiples, bots o cualquier técnica para inflar seguidores. Intentos de trampa serán <strong>descalificados</strong>.</li>
            <li>El organizador se reserva el derecho de descalificar usuarios que intenten manipular el resultado.</li>
            <li>El ganador debe responder en un plazo de 72 horas; si no lo hace, se elegirá un suplente.</li>
            <li>Los premios se entregan tras verificación del perfil ganador en la red correspondiente.</li>
          </ul>
        </div>

        <aside style={{ width: 260, minWidth: 200 }}>
          <div className="glass" style={{ padding: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <small className="meta">Estado</small><strong style={{ color: "var(--brand)" }}>Activo</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <small className="meta">Fecha</small><strong>{fechaSorteo}</strong>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <small className="meta">Transmisión</small><strong>Twitch & TikTok Live</strong>
            </div>
          </div>

          <div style={{ marginTop: 12 }}>
            <Link href="/sorteos/sorteo-live" className="btn" style={{ display: "block", width: "100%", textAlign: "center" }}>
              Abrir sorteo en vivo
            </Link>
          </div>
        </aside>
      </header>

      <section>
        <h3>Enlaces rápidos — Sígueme</h3>
        <p className="meta">Haz clic y abre mis perfiles. Cada follow suma oportunidades el día del sorteo.</p>

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
              {/* iconos inline simples */}
              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                {r.key === "tiktok" && (<><circle cx="9" cy="17" r="3"></circle><rect x="11" y="3" width="2.2" height="10" rx="1.1"></rect><path d="M13.2 6c1.2 1.4 2.8 2.3 4.8 2.4v2.2c-2.1-.1-3.8-.8-5-1.9V6z"></path></>)}
                {r.key === "twitch" && (<><path d="M5 3h14v9.5l-3.5 3.5H12l-2 2H8v-2H5V3z"></path><rect x="9" y="7" width="2.5" height="3.2" rx="0.4"></rect><rect x="13.5" y="7" width="2.5" height="3.2" rx="0.4"></rect></>)}
                {r.key === "youtube" && (<><rect x="3" y="6.5" width="18" height="11" rx="3"></rect><path d="M10 9l6 3-6 3V9z"></path></>)}
                {r.key === "facebook" && (<path d="M13 10h3V7h-3c-2 0-3.5 1.5-3.5 3.5V13H7v3h2.5v4h3v-4H16v-3h-3v-1.5c0-.6.4-1 1-1z"></path>)}
                {r.key === "kick" && (<path d="M6 4h3v7l4-4h3l-4.5 4.5L16 20h-3l-4-5v5H6V4z"></path>)}
              </svg>
              <span style={{ fontWeight: 700 }}>{r.label}</span>
            </a>
          ))}
        </div>
      </section>

      <footer style={{ marginTop: 8 }}>
        <p className="meta">Si tienes dudas escribe a <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a>.</p>
      </footer>
    </div>
  );
}
