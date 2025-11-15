// app/articulos/ia-fps/page.jsx

export const metadata = {
  title:
    "Cómo la IA está optimizando tus FPS en tiempo real: el salto que da tu PC gamer | GridialHub",
  description:
    "La inteligencia artificial ya está dentro de tu GPU, tus drivers y tu sistema para darte más FPS, mejor calidad visual y menos lag. Te explico cómo funciona y cómo aprovecharla.",
};

export default function IaFpsPage() {
  return (
    <article
      className="card"
      style={{ padding: 20, borderRadius: 16, display: "grid", gap: 16 }}
    >
      {/* Banner superior */}
      <div
        style={{
          marginBottom: 4,
          borderRadius: 14,
          overflow: "hidden",
          maxHeight: 360,
        }}
      >
        <img
          src="/articulos/banner-ia-fps.png"  // 👈 SIN espacios ni +
          alt="Tarjeta gráfica con elementos de inteligencia artificial mejorando los FPS"
          style={{
            width: "100%",
            display: "block",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Encabezado */}
      <header style={{ marginBottom: 8 }}>
        <h1 style={{ marginBottom: 8 }}>
          Cómo la IA está optimizando tus FPS en tiempo real: el salto que da tu
          PC gamer
        </h1>
        <p className="meta">
          {new Date("2025-11-12").toLocaleDateString("es-VE")} • 7 min de
          lectura
        </p>
        <div
          style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}
        >
          <span className="badge">IA</span>
          <span className="badge">rendimiento</span>
          <span className="badge">GPU</span>
          <span className="badge">NVIDIA</span>
          <span className="badge">AMD</span>
          <span className="badge">gaming</span>
          <span className="badge">FPS</span>
        </div>
      </header>

      {/* Contenido del artículo */}
      <div className="article-content">
        <p>
          Durante años, los gamers hemos perseguido una meta clara:{" "}
          <b>más FPS y mejor rendimiento sin sacrificar calidad</b>. Subir la
          tasa de cuadros por segundo siempre ha sido una mezcla de ajustar
          gráficos, bajar sombras, desactivar efectos y cruzar los dedos para
          que el juego esté bien optimizado.
        </p>

        <p>
          En 2025 eso está cambiando. La inteligencia artificial (IA) ya no es
          solo algo que usan los desarrolladores: ahora está{" "}
          <b>dentro de tu GPU, tus drivers y hasta tu sistema operativo</b>,
          ayudando a que los juegos corran más fluidos, se vean mejor y usen
          menos recursos.
        </p>

        <h3>De la fuerza bruta a la inteligencia</h3>
        <p>
          Antes, el rendimiento dependía casi por completo del{" "}
          <b>poder físico del hardware</b>: más núcleos, más VRAM, relojes más
          altos. Hoy, el rendimiento también depende de qué tan bien{" "}
          <b>tu PC “entiende” lo que está pasando en pantalla</b>.
        </p>

        <p>
          Tecnologías como <b>DLSS</b> (NVIDIA), <b>FSR</b> (AMD) o{" "}
          <b>XeSS</b> (Intel) usan redes neuronales para reconstruir la imagen.
          En lugar de renderizar cada cuadro a resolución completa, tu GPU
          trabaja a una resolución más baja y la IA se encarga de{" "}
          <b>“imaginar” los detalles que faltan</b>.
        </p>

        <p>
          El resultado: <b>más FPS</b> con una calidad visual que, en muchos
          casos, se ve igual o incluso mejor que el render nativo.
        </p>

        {/* Imagen interna a mitad del artículo */}
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
            src="/articulos/mitad-ia-fps.png"  // 👈 también renombrada
            alt="Representación visual de IA optimizando FPS en tiempo real"
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />
          <figcaption className="meta" style={{ padding: 8 }}>
            La IA analiza la escena, ajusta resolución y genera cuadros
            adicionales para aumentar los FPS sin perder calidad.
          </figcaption>
        </figure>

        {/* …resto del texto igual… */}
        {/* (no lo toco para no alargar más, solo cambiamos las rutas de imagen) */}
      </div>
    </article>
  );
}
