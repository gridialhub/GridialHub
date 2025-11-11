"use client";

import Link from "next/link";

export default function Bases() {
  return (
    <div className="container" style={{ display: "grid", gap: 24 }}>
      {/* Encabezado */}
      <header
        className="card"
        style={{
          padding: "24px",
          borderRadius: 18,
          display: "grid",
          gap: 10,
          textAlign: "center",
          background: "color-mix(in oklab, var(--card), transparent 8%)",
          border: "1px solid color-mix(in oklab, var(--border), var(--brand) 18%)",
          boxShadow: "0 10px 26px color-mix(in oklab, #000, var(--brand) 16%)",
        }}
      >
        <h1 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 900 }}>
          Bases del Sorteo — GridialHub
        </h1>
        <p className="meta">
          Última actualización: {new Date().toLocaleDateString("es-VE")}
        </p>
        <p style={{ maxWidth: 900, margin: "0 auto" }}>
          Este documento establece las reglas oficiales para participar en los
          sorteos organizados por <b>GridialHub</b>. Te pedimos leer con
          atención antes de participar.
        </p>
      </header>

      {/* Índice rápido */}
      <nav
        className="card"
        style={{ padding: 16, borderRadius: 14, display: "flex", gap: 10, flexWrap: "wrap" }}
      >
        {[
          ["#eligibilidad", "Elegibilidad"],
          ["#premios", "Premios"],
          ["#participacion", "Cómo participar"],
          ["#sorteo", "Método de sorteo"],
          ["#notificacion", "Notificación y entrega"],
          ["#fraude", "Conducta y anti-fraude"],
          ["#privacidad", "Privacidad"],
          ["#limitaciones", "Limitaciones"],
          ["#descargos", "Descargos y marcas"],
          ["#contacto", "Contacto"],
        ].map(([href, label]) => (
          <a key={href} href={href} className="btn btn-chip">
            {label}
          </a>
        ))}
      </nav>

      {/* Elegibilidad */}
      <section id="eligibilidad" className="card" style={{ padding: 20, borderRadius: 14 }}>
        <h2>1. Elegibilidad</h2>
        <ul>
          <li>
            Participación abierta a nivel <b>global</b>, salvo que la legislación local del
            participante lo prohíba.
          </li>
          <li>
            Debes tener <b>18 años</b> o la <b>mayoría de edad legal</b> en tu país (lo que sea
            mayor). Si en tu jurisdicción se exige una edad mayor para participar en sorteos
            en línea, aplicará esa edad.
          </li>
          <li>
            No se requiere compra. Nulo donde esté prohibido.
          </li>
        </ul>
      </section>

      {/* Premios */}
      <section id="premios" className="card" style={{ padding: 20, borderRadius: 14 }}>
        <h2>2. Premios</h2>
        <p>
          Premio total de <b>$200 USD</b> repartido entre <b>5 ganadores</b> (aprox. $40 USD cada
          uno). Cada ganador podrá elegir <i>uno</i> de los siguientes:
        </p>
        <ul>
          <li>Saldo de <b>Steam</b> (gift card digital),</li>
          <li>Tarjeta de regalo digital equivalente (tienda disponible en su país),</li>
          <li>Pase de batalla de un juego,</li>
          <li>Monedas del juego (hasta el valor del premio).</li>
        </ul>
        <p className="meta">
          Nota: La disponibilidad de tarjetas/regalos puede variar por país/región. En caso de no
          existir una opción válida en tu país, se propondrá una alternativa equivalente.
        </p>
      </section>

      {/* Participación */}
      <section id="participacion" className="card" style={{ padding: 20, borderRadius: 14 }}>
        <h2>3. Cómo participar</h2>
        <ul>
          <li>
            <b>Sin registro obligatorio</b> en la web para esta fase. El día del sorteo se
            consolidarán listas de seguidores de: TikTok, Twitch, YouTube, Facebook y Kick
            (perfiles oficiales de Gridial).
          </li>
          <li>
            <b>Tickets</b>: 1 ticket por cada red donde sigas a Gridial. Si sigues en 3 redes,
            participas con 3 tickets (más oportunidades).
          </li>
          <li>
            Comparte el sorteo si quieres — no es requisito, pero ayuda a la comunidad.
          </li>
        </ul>
      </section>

      {/* Método de sorteo */}
      <section id="sorteo" className="card" style={{ padding: 20, borderRadius: 14 }}>
        <h2>4. Método de sorteo</h2>
        <ul>
          <li>
            El sorteo se realizará <b>en directo</b> por <b>Twitch</b> y/o <b>TikTok Live</b> en la
            fecha anunciada en la página <Link href="/sorteos">/sorteos</Link>.
          </li>
          <li>
            Se combinarán los listados de seguidores de cada plataforma en una única lista de
            participantes, ponderada por número de redes seguidas (un mismo usuario puede aparecer
            repetido si sigue en varias).
          </li>
          <li>
            La selección será <b>aleatoria</b> mediante una herramienta de randomización mostrada en
            vivo. Se registrará evidencia (clip/capturas) para transparencia.
          </li>
        </ul>
      </section>

      {/* Notificación y entrega */}
      <section id="notificacion" className="card" style={{ padding: 20, borderRadius: 14 }}>
        <h2>5. Notificación y entrega</h2>
        <ul>
          <li>
            Los ganadores se anuncian durante el directo y se publican luego en{" "}
            <Link href="/resultados">/resultados</Link>.
          </li>
          <li>
            Cada ganador deberá responder dentro de <b>72 horas</b> para coordinar la entrega. Si no
            responde, se elegirá un suplente.
          </li>
          <li>
            La entrega del premio será digital (código o transferencia de saldo, según aplique), tras
            verificación del perfil ganador.
          </li>
        </ul>
      </section>

      {/* Conducta y anti-fraude */}
      <section id="fraude" className="card" style={{ padding: 20, borderRadius: 14 }}>
        <h2>6. Conducta y anti-fraude</h2>
        <ul>
          <li>
            Queda prohibido el uso de <b>bots</b>, cuentas falsas, automatizaciones o cualquier
            técnica para inflar seguidores/entradas.
          </li>
          <li>
            GridialHub podrá <b>descalificar</b> a cualquier participante que intente manipular el
            resultado o incumpla estas bases.
          </li>
          <li>
            La decisión del organizador sobre interpretación de estas reglas es <b>final</b>.
          </li>
        </ul>
      </section>

      {/* Privacidad */}
      <section id="privacidad" className="card" style={{ padding: 20, borderRadius: 14 }}>
        <h2>7. Privacidad</h2>
        <p>
          Se manejarán únicamente los datos necesarios para verificar ganadores y entregar premios.
          No se venden datos a terceros. Para más detalles, consulta la{" "}
          <Link href="/privacidad">política de privacidad</Link> (en preparación).
        </p>
      </section>

      {/* Limitaciones */}
      <section id="limitaciones" className="card" style={{ padding: 20, borderRadius: 14 }}>
        <h2>8. Limitaciones y cambios</h2>
        <ul>
          <li>
            El organizador puede modificar fechas, premios o mecánicas por causas de fuerza mayor,
            siempre manteniendo el valor equivalente del premio.
          </li>
          <li>
            Si la legislación local del ganador impide recibir cierto premio, se propondrá
            alternativa válida de valor similar.
          </li>
          <li>
            El sorteo puede cancelarse si se presentan circunstancias excepcionales que comprometan
            su transparencia o legalidad.
          </li>
        </ul>
      </section>

      {/* Descargos */}
      <section id="descargos" className="card" style={{ padding: 20, borderRadius: 14 }}>
        <h2>9. Descargos y marcas</h2>
        <p className="meta">
          Este sorteo no está patrocinado, administrado ni asociado con TikTok, Twitch, YouTube,
          Facebook, Kick, Valve o Steam. Todas las marcas y logotipos pertenecen a sus respectivos
          dueños.
        </p>
      </section>

      {/* Contacto */}
      <section id="contacto" className="card" style={{ padding: 20, borderRadius: 14 }}>
        <h2>10. Contacto</h2>
        <p>
          ¿Dudas o soporte? Escríbenos a{" "}
          <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a> o visita{" "}
          <Link href="/contacto">/contacto</Link>.
        </p>
      </section>
    </div>
  );
}
