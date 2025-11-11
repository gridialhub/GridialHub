"use client";

export default function Sorteos() {
  return (
    <div className="container" style={{ display: "grid", placeItems: "center" }}>
      <div
        className="card"
        style={{
          display: "grid",
          gap: 28,
          padding: "32px 24px",
          borderRadius: "20px",
          maxWidth: 900,
          background: "color-mix(in oklab, var(--card), transparent 8%)",
          border: "1px solid color-mix(in oklab, var(--border), var(--brand) 18%)",
          boxShadow: "0 10px 26px color-mix(in oklab, #000, var(--brand) 15%)",
          textAlign: "center",
        }}
      >
        {/* Título */}
        <h1
          style={{
            fontSize: "clamp(26px, 3vw, 38px)",
            color: "var(--fg)",
            fontWeight: 900,
          }}
        >
          ¡Bienvenidos al primer sorteo de esta Navidad!
        </h1>

        {/* Introducción */}
        <p
          style={{
            color: "var(--fg)",
            opacity: 0.95,
            fontSize: "1.1rem",
            lineHeight: 1.6,
          }}
        >
          Para agradecer todo el apoyo, haré un sorteo especial para mi comunidad.
          Participan mis seguidores en las distintas plataformas donde estoy activo (
          <b>TikTok</b>, <b>Twitch</b>, <b>YouTube</b>, <b>Facebook</b> y <b>Kick</b>).
          El sorteo se realizará en directo y todo el proceso será transparente.
          <br />
          <br />
          Para conocer las <b>reglas y bases del sorteo</b>, visita la sección{" "}
          <b>“Bases”</b> ubicada en el menú superior de la página.
          <br />
          <br />
          <b>
            Conforme vayamos creciendo como comunidad, mejores sorteos vendrán a futuro.
          </b>
        </p>

        {/* Subtítulo */}
        <div style={{ marginTop: "16px" }}>
          <h3
            style={{
              color: "var(--brand)",
              fontWeight: 700,
              marginBottom: "6px",
            }}
          >
            Mientras en más redes me sigas, ¡más oportunidades tienes de ganar!
          </h3>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.95rem",
              marginTop: "2px",
            }}
          >
            Aquí los links para ir directamente:
          </p>
        </div>

        {/* Botones */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "18px",
            marginTop: "12px",
          }}
        >
          {[
            {
              name: "TikTok",
              url: "https://www.tiktok.com/@gridial",
              color: "#ff0050",
              icon: "tiktok",
            },
            {
              name: "Twitch",
              url: "https://www.twitch.tv/gridialtv",
              color: "#9146FF",
              icon: "twitch",
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com/@Gridial",
              color: "#FF0000",
              icon: "youtube",
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/GridialOfficial",
              color: "#1877F2",
              icon: "facebook",
            },
            {
              name: "Kick",
              url: "https://kick.com/gridialtv",
              color: "#52ff00",
              icon: "kick",
            },
          ].map((r) => (
            <a
              key={r.name}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              title={r.name}
              style={{
                width: "38px",
                height: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                background: "#121216",
                border: `1px solid ${r.color}`,
                transition:
                  "all 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease, filter 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.18)";
                e.currentTarget.style.boxShadow = `0 0 12px ${r.color}`;
                e.currentTarget.style.filter = "brightness(1.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.filter = "brightness(1)";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "scale(0.96)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "scale(1.18)";
              }}
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/${r.icon}.svg`}
                alt={r.name}
                width="22"
                height="22"
                style={{
                  display: "block",
                  filter: "invert(1) brightness(1.7) contrast(1.1)",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


