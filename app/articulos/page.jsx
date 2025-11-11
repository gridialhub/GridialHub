"use client";

import Link from "next/link";

const articulos = [
  {
    slug: "helldivers2-actualizacion",
    titulo: "Helldivers 2: nueva actualización con más enemigos y armamento",
    descripcion:
      "El último parche de Helldivers 2 trae nuevas armas, balance de enemigos y mejoras visuales. Te contamos todos los detalles.",
    imagen:
      "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=60",
    fecha: "10 de noviembre, 2025",
    categoria: "Videojuegos",
  },
  {
    slug: "setup-gamer-2025",
    titulo: "Setup gamer 2025: componentes que te darán ventaja",
    descripcion:
      "Te mostramos los mejores procesadores, gráficas y periféricos para mejorar tu rendimiento en los juegos más exigentes.",
    imagen:
      "https://images.unsplash.com/photo-1610465299990-6d1cbe94d12a?auto=format&fit=crop&w=800&q=60",
    fecha: "5 de noviembre, 2025",
    categoria: "Tecnología",
  },
  {
    slug: "sorteo-navidad",
    titulo: "Gran sorteo navideño para la comunidad GridialHub",
    descripcion:
      "Participa por $200 en premios, tarjetas de regalo, o monedas del juego que elijas. ¡Apoya el canal y gana!",
    imagen:
      "https://images.unsplash.com/photo-1608877907142-471bd379cde7?auto=format&fit=crop&w=800&q=60",
    fecha: "3 de noviembre, 2025",
    categoria: "Eventos",
  },
];

export default function Articulos() {
  return (
    <div className="container" style={{ display: "grid", gap: 32 }}>
      <h1
        style={{
          fontSize: "clamp(26px, 3vw, 36px)",
          color: "var(--fg)",
          fontWeight: 900,
          textAlign: "center",
        }}
      >
        Artículos y Noticias Gaming
      </h1>

      <p
        style={{
          textAlign: "center",
          maxWidth: 750,
          margin: "0 auto",
          color: "var(--muted)",
        }}
      >
        Noticias, análisis, sorteos y tecnología gaming — todo en un solo lugar.
        Mantente al día con las últimas novedades del mundo de los videojuegos
        y el streaming.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {articulos.map((a) => (
          <Link
            key={a.slug}
            href={`/articulos/${a.slug}`}
            className="card"
            style={{
              overflow: "hidden",
              display: "grid",
              gridTemplateRows: "160px auto",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px color-mix(in oklab, var(--brand), transparent 70%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                backgroundImage: `url(${a.imagen})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div style={{ padding: "14px", display: "grid", gap: "8px" }}>
              <span
                style={{
                  color: "var(--brand)",
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.3px",
                }}
              >
                {a.categoria.toUpperCase()}
              </span>
              <h3 style={{ margin: 0, color: "var(--fg)" }}>{a.titulo}</h3>
              <p
                style={{
                  color: "var(--muted)",
                  fontSize: "0.95rem",
                  lineHeight: 1.4,
                }}
              >
                {a.descripcion}
              </p>
              <small style={{ color: "var(--muted)" }}>{a.fecha}</small>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
