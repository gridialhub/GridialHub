// app/sorteos/page.jsx
export const dynamic = "force-dynamic";
export const revalidate = 0;

const REDES = [
  { key: "tiktok",   label: "TikTok",   url: "https://www.tiktok.com/@gridial" },
  { key: "twitch",   label: "Twitch",   url: "https://www.twitch.tv/gridialtv" },
  { key: "youtube",  label: "YouTube",  url: "https://www.youtube.com/@Gridial" },
  { key: "facebook", label: "Facebook", url: "https://www.facebook.com/GridialOfficial" },
  { key: "kick",     label: "Kick",     url: "https://kick.com/gridial" }
];

export default function SorteosNavidad() {
  return (
    <div className="card" style={{ display: "grid", gap: 18 }}>
      {/* 1) Título grande en blanco */}
      <h1 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 900, color: "var(--fg)" }}>
        Bienvenidos al primer sorteo de esta Navidad 🎄
      </h1>

      {/* 2) Introducción breve */}
      <p className="intro-text" style={{ lineHeight: 1.6 }}>
        Para agradecer todo el apoyo, haré un sorteo especial para mi comunidad. 
        Participan <b>mis seguidores</b> en las distintas plataformas donde estoy activo 
        (TikTok, Twitch, YouTube, Facebook y Kick). El sorteo se realizará en directo y 
        todo el proceso será transparente.
      </p>

      {/* 3) Texto previo + iconos 2cm x 2cm */}
      <div className="intro-box">
        <p className="intro-text" style={{ textAlign: "center", marginBottom: 12, fontWeight: 700 }}>
          Mientras en más redes me sigas, <u>más oportunidades</u> tienes de ganar.
        </p>

        <div className="social-grid">
          {REDES.map((r) => (
            <a
              key={r.key}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className={`social-btn social-${r.key}`}
              aria-label={r.label}
              title={r.label}
            >
              {/* Ícono inline que hereda el color */}
              {r.key === "tiktok" && (
                <svg viewBox="0 0 24 24" className="social-ico" aria-hidden="true">
                  <circle cx="9" cy="17" r="3"></circle>
                  <rect x="11" y="3" width="2.2" height="10" rx="1.1"></rect>
                  <path d="M13.2 6c1.2 1.4 2.8 2.3 4.8 2.4v2.2c-2.1-.1-3.8-.8-5-1.9V6z"></path>
                </svg>
              )}
              {r.key === "twitch" && (
                <svg viewBox="0 0 24 24" className="social-ico" aria-hidden="true">
                  <path d="M5 3h14v9.5l-3.5 3.5H12l-2 2H8v-2H5V3z"></path>
                  <rect x="9" y="7" width="2.5" height="3.2" rx="0.4"></rect>
                  <rect x="13.5" y="7" width="2.5" height="3.2" rx="0.4"></rect>
                </svg>
              )}
              {r.key === "youtube" && (
                <svg viewBox="0 0 24 24" className="social-ico" aria-hidden="true">
                  <rect x="3" y="6.5" width="18" height="11" rx="3"></rect>
                  <path d="M10 9l6 3-6 3V9z"></path>
                </svg>
              )}
              {r.key === "facebook" && (
                <svg viewBox="0 0 24 24" className="social-ico" aria-hidden="true">
                  <path d="M13 10h3V7h-3c-2 0-3.5 1.5-3.5 3.5V13H7v3h2.5v4h3v-4H16v-3h-3v-1.5c0-.6.4-1 1-1z"></path>
                </svg>
              )}
              {r.key === "kick" && (
                <svg viewBox="0 0 24 24" className="social-ico" aria-hidden="true">
                  <path d="M6 4h3v7l4-4h3l-4.5 4.5L16 20h-3l-4-5v5H6V4z"></path>
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* Nota legal corta */}
      <p className="meta">
        Nota: cuentas falsas, bots o cualquier intento de ventaja injusta serán motivo de descalificación.
        El sorteo y los ganadores se anunciarán en directo.
      </p>
    </div>
  );
}
