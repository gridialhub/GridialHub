"use client";

import Link from "next/link";

export default function Bases() {
  const hoy = new Date().toLocaleDateString("es-VE", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <div className="container" style={{ display: "grid", gap: 28 }}>
      {/* ENCABEZADO */}
      <header
        className="card"
        style={{
          padding: 24,
          borderRadius: 18,
          textAlign: "center",
          background: "color-mix(in oklab, var(--card), transparent 8%)",
          border:
            "1px solid color-mix(in oklab, var(--border), var(--brand) 18%)",
          boxShadow: "0 10px 26px color-mix(in oklab, #000, var(--brand) 16%)",
        }}
      >
        <h1 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 900 }}>
          Bases y Condiciones de los Sorteos — GridialHub
        </h1>
        <p className="meta">Última actualización: {hoy}</p>
        <p style={{ maxWidth: 900, margin: "0 auto" }}>
          A continuación se describen las reglas generales aplicables a todos los sorteos organizados por{" "}
          <b>GridialHub</b>. Cada evento podrá incluir condiciones específicas que se comunicarán en
          su publicación o anuncio oficial.
        </p>
      </header>

      {/* 1) PARTICIPACIÓN */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>1) Participación</h2>
        <ul>
          <li>
            Los sorteos están abiertos a participantes mayores de 13 años (o la edad mínima
            legal en su país) que sigan las instrucciones indicadas en las redes o el sitio web.
          </li>
          <li>
            No es necesario realizar pagos ni compras para participar, salvo que se indique
            expresamente lo contrario en las bases específicas del evento.
          </li>
          <li>
            El incumplimiento de las reglas o el intento de manipulación descalificará al
            participante sin previo aviso.
          </li>
        </ul>
      </section>

      {/* 2) MECÁNICA */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>2) Mecánica y selección de ganadores</h2>
        <ul>
          <li>
            La dinámica de cada sorteo será publicada en el sitio o en redes sociales oficiales
            de <b>GridialHub</b>.
          </li>
          <li>
            Los ganadores se elegirán de forma aleatoria, utilizando plataformas verificables
            o transmisiones en vivo.
          </li>
          <li>
            Los resultados serán anunciados públicamente en{" "}
            <Link href="/resultados">/resultados</Link> y/o en las redes oficiales del proyecto.
          </li>
        </ul>
      </section>

      {/* 3) PREMIOS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>3) Premios</h2>
        <ul>
          <li>
            Los premios podrán consistir en tarjetas de regalo, membresías, dinero electrónico,
            códigos de juegos, suscripciones o recompensas digitales equivalentes.
          </li>
          <li>
            En ningún caso el premio podrá ser canjeado por dinero en efectivo, salvo que se
            indique expresamente.
          </li>
          <li>
            El premio es personal e intransferible, salvo acuerdo excepcional con el
            organizador.
          </li>
        </ul>
      </section>

      {/* 4) ENTREGA */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>4) Entrega de premios</h2>
        <p>
          Los premios se entregarán mediante correo electrónico o mensaje privado en un plazo
          máximo de 15 días después del anuncio del ganador. Se podrá solicitar verificación de
          identidad o captura de pantalla de participación.
        </p>
      </section>

      {/* 5) EXCLUSIONES */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>5) Exclusiones</h2>
        <p>
          No podrán participar cuentas automatizadas, bots o perfiles falsos. Tampoco podrán
          participar los administradores del sitio o colaboradores directos del proyecto.
        </p>
      </section>

      {/* 6) RESPONSABILIDAD */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>6) Responsabilidad</h2>
        <p>
          <b>GridialHub</b> no se hace responsable por errores técnicos, fallos de conexión o
          problemas externos que impidan participar o recibir el premio. En caso de fuerza
          mayor, el sorteo podrá ser cancelado o modificado.
        </p>
      </section>

      {/* 7) DATOS PERSONALES */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>7) Protección de datos personales</h2>
        <p>
          Los datos recabados (como nombre o correo electrónico) se usarán exclusivamente para
          fines del sorteo y entrega de premios. No se compartirán con terceros sin
          consentimiento previo. Más detalles en nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link>.
        </p>
      </section>

      {/* 8) CAMBIOS O CANCELACIÓN */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>8) Cambios o cancelación</h2>
        <p>
          Nos reservamos el derecho de modificar las fechas o condiciones del sorteo si surgen
          circunstancias ajenas a nuestro control, siempre manteniendo la transparencia con la
          comunidad.
        </p>
      </section>

      {/* 9) CONTACTO */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>9) Contacto</h2>
        <p>
          Para cualquier duda sobre estas bases o sobre la entrega de premios, escríbenos a{" "}
          <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a> o usa el
          formulario de la sección{" "}
          <Link href="/contacto">Contacto</Link>.
        </p>
      </section>
    </div>
  );
}
