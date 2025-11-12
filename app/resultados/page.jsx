"use client";

import Link from "next/link";

const SORTEOS = [
  {
    slug: "navidad-2025",
    titulo: "Sorteo Navidad 2025",
    fecha: "15 de diciembre de 2025",
    ganadores: [
      { nombre: "aun sin publicar", premio: "$40 en tarjeta de regalo" },
      { nombre: "aun sin publicar", premio: "$40 en tarjeta de regalo" },
      { nombre: "aun sin publicar", premio: "$40 en tarjeta de regalo" },
      { nombre: "aun sin publicar", premio: "$40 en tarjeta de regalo" },
      { nombre: "aun sin publicar", premio: "$40 en tarjeta de regalo" },
    ],
    // opcional: mini imagen/cover (puedes cambiarla por una tuya)
    cover:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%23933eea'/%3E%3Cstop offset='1' stop-color='%23e879f9'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='%23131318' width='100%25' height='100%25'/%3E%3Ccircle cx='120' cy='90' r='60' fill='url(%23g)' opacity='.45'/%3E%3Ccircle cx='320' cy='140' r='80' fill='url(%23g)' opacity='.28'/%3E%3Ccircle cx='520' cy='60' r='50' fill='url(%23g)' opacity='.35'/%3E%3C/svg%3E",
  },
  // Agrega más fichas duplicando este objeto ↑ y cambiando datos
];

export default function Resultados() {
  return (
    <div className="container" style={{ display: "grid", gap: 24 }}>
      <header style={{ textAlign: "center", display: "grid", gap: 8 }}>
        <h1 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 900 }}>
          Resultados de Sorteos
        </h1>
        <p className="meta">
          Fichas oficiales de ganadores. A medida que hagamos nuevos sorteos,
          los iremos publicando aquí.
        </p>
      </header>

      <section
        className="resultados-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 16,
        }}
      >
        {SORTEOS.map((s) => (
          <article
            key={s.slug}
            className="card ficha-resultado"
            style={{
              overflow: "hidden",
              display: "grid",
              gridTemplateRows: "110px auto",
              borderRadius: 14,
              transition: "transform .2s ease, box-shadow .25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 8px 18px color-mix(in oklab, var(--brand), transparent 80%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* mini cover */}
            <div
              style={{
                backgroundImage: `url(${s.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderBottom: "1px solid var(--border)",
              }}
            />

            {/* cuerpo */}
            <div style={{ padding: 12, display: "grid", gap: 8 }}>
              <span
                className="badge"
                style={{
                  justifySelf: "flex-start",
                  borderRadius: 999,
                  padding: "2px 8px",
                }}
              >
                {s.fecha}
              </span>

              <h3 style={{ margin: 0 }}>{s.titulo}</h3>

              <div
                style={{
                  display: "grid",
                  gap: 6,
                  padding: 8,
                  background: "color-mix(in oklab, var(--card), transparent 10%)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                }}
              >
                {s.ganadores.map((g, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 14,
                    }}
                  >
                    <span
                      className="badge"
                      style={{ width: 22, textAlign: "center", padding: "2px 0" }}
                      title={`#${i + 1}`}
                    >
                      {i + 1}
                    </span>
                    <strong style={{ marginRight: "auto" }}>{g.nombre}</strong>
                    <span className="meta">{g.premio}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                <Link
                  href="/sorteos"
                  className="btn btn-chip"
                  style={{ textAlign: "center" }}
                >
                  Ver sorteo
                </Link>
                <Link
                  href="/bases"
                  className="btn btn-chip"
                  style={{ textAlign: "center" }}
                >
                  Bases
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      <footer style={{ textAlign: "center", marginTop: 8 }} className="meta">
        ¿Alguna duda o reclamo? <Link href="/contacto">Escríbeme</Link>.
      </footer>
    </div>
  );
}

