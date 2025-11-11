"use client";

import Link from "next/link";

const sorteos = [
  {
    slug: "navidad-2025",
    titulo: "Sorteo Navidad 2025",
    fecha: "15 de diciembre de 2025",
    ganadores: [
      { nombre: "Usuario1", premio: "¿\$40? tarjeta de regalo" },
      { nombre: "Usuario2", premio: "¿\$40? tarjeta de regalo" },
      { nombre: "Usuario3", premio: "¿\$40? tarjeta de regalo" },
      { nombre: "Usuario4", premio: "¿\$40? tarjeta de regalo" },
      { nombre: "Usuario5", premio: "¿\$40? tarjeta de regalo" },
    ],
  },
  // Puedes duplicar este objeto para más sorteos...
];

export default function Resultados() {
  return (
    <div className="container" style={{ display: "grid", gap: 32 }}>
      <h1 style={{
        fontSize: "clamp(26px, 3vw, 38px)",
        color: "var(--fg)",
        fontWeight: 900,
        textAlign: "center",
      }}>
        Resultados de Sorteos
      </h1>

      <p style={{
        color: "var(--muted)",
        textAlign: "center",
        maxWidth: 750,
        margin: "0 auto",
      }}>
        A continuación encontrarás los ganadores oficiales de nuestros concursos. Verificados y entregados.
      </p>

      <div style={{
        display: "grid",
        gap: 24,
      }}>
        {sorteos.map(s => (
          <div key={s.slug} className="card" style={{ padding: "24px", borderRadius: "16px" }}>
            <h2 style={{ color: "var(--brand)", marginBottom: "8px" }}>{s.titulo}</h2>
            <p style={{ color: "var(--muted)", marginBottom: "16px" }}>Fecha: {s.fecha}</p>
            <ul style={{ color: "var(--fg)", lineHeight: 1.5 }}>
              {s.ganadores.map((g, idx) => (
                <li key={idx}><strong>{g.nombre}</strong>: {g.premio}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <footer style={{ textAlign: "center", marginTop: 32, color: "var(--muted)" }}>
        <p>¿No ves tu nombre o tienes preguntas? <Link href="/contacto"><a style={{ color:"var(--brand)" }}>Contáctame</a></Link></p>
      </footer>
    </div>
  );
}
