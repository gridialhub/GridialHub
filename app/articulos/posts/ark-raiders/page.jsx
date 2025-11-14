// app/articulos/ark-raiders/page.jsx

export const metadata = {
  title: "ARK Raiders: cómo la IA está llevando el gameplay a otro nivel | GridialHub",
  description:
    "ARK Raiders combina acción cooperativa con inteligencia artificial avanzada para crear enfrentamientos dinámicos, impredecibles y desafiantes.",
};

export default function ArkRaidersPage() {
  return (
    <article
      className="card"
      style={{ padding: 20, borderRadius: 16, display: "grid", gap: 16 }}
    >
      {/* Banner principal */}
      <div
        style={{
          marginBottom: 4,
          borderRadius: 14,
          overflow: "hidden",
          maxHeight: 360,
        }}
      >
        <img
          src="/articulos/banner_arkraiders_1600x600.png"
          alt="Banner de ARK Raiders"
          style={{ width: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Encabezado */}
      <header style={{ marginBottom: 8 }}>
        <h1>ARK Raiders: cómo la IA está llevando el gameplay a otro nivel</h1>
        <p className="meta">
          {new Date("2025-11-12").toLocaleDateString("es-VE")} • 7 min de lectura
        </p>

        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}
        >
          <span className="badge">ARK Raiders</span>
          <span className="badge">IA</span>
          <span className="badge">gaming</span>
          <span className="badge">cooperativo</span>
          <span className="badge">next-gen</span>
        </div>
      </header>

      {/* Contenido */}
      <div className="article-content">
        <p>
          <b>ARK Raiders</b> es uno de esos shooters cooperativos que destacan no
          solo por su estilo visual retrofuturista, sino por cómo utiliza la{" "}
          <b>inteligencia artificial</b> para crear encuentros dinámicos,
          intensos y poco predecibles.
        </p>

        <p>
          En muchos shooters, los enemigos siguen patrones simples: avanzar,
          disparar y morir. Aquí no. La IA del juego <b>flanquea</b>, retrocede,
          coordina ataques y detecta debilidades del escuadrón.
        </p>

        {/* Imagen interna */}
        <figure
          className="article-image"
          style={{
            margin: "18px 0",
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          <img
            src="/articulos/arkraiders_gameplay_mid.png"
            alt="Gameplay de ARK Raiders"
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />
          <figcaption className="meta" style={{ padding: 8 }}>
            Enemigos robóticos coordinándose dinámicamente en combate.
          </figcaption>
        </figure>

        <h3>Una IA que se siente “viva”</h3>
        <p>
          Los enemigos no actúan como bots automáticos. Se apoyan entre sí,
          presionan cuando estás débil y buscan rodearte cuando detectan que tu
          equipo se queda estático.
        </p>

        <p>
          Las máquinas ARK más grandes incluso llaman refuerzos y cambian su
          comportamiento dependiendo de la cobertura que uses.
        </p>

        <h3>Más rejugabilidad</h3>
        <p>
          Gracias a la IA dinámica, cada misión se siente un poco distinta:
          cambios en rutas de ataque, posiciones inesperadas de drones y
          refuerzos que aparecen según lo bien o mal que vaya tu escuadrón.
        </p>

        <h3>Cooperación más natural</h3>
        <p>
          La IA obliga al equipo a comunicarse más. No puedes quedarte quieto
          disparando; el juego empuja a moverse, cubrir flancos y rotar
          posiciones constantemente.
        </p>

        <h3>Conclusión</h3>
        <p>
          ARK Raiders demuestra el potencial de la IA en shooters cooperativos.
          No solo se trata de gráficos: es la inteligencia artificial la que
          hace que cada partida sea intensa, distinta y memorable.
        </p>

        <p>
          Si buscas un juego que combine acción frenética con un comportamiento
          enemigo realmente reactivo, vale la pena seguirle el rastro.
        </p>
      </div>
    </article>
  );
}
