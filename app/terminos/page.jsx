"use client";

import Link from "next/link";

export default function Terminos() {
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
          Términos y Condiciones — GridialHub
        </h1>
        <p className="meta">Última actualización: {hoy}</p>
        <p style={{ maxWidth: 900, margin: "0 auto" }}>
          Bienvenido a <b>GridialHub</b> (<i>gridialhub.com</i>). Al acceder o
          utilizar este sitio web, aceptas estos Términos y Condiciones. Si no
          estás de acuerdo, por favor no uses el sitio.
        </p>
      </header>

      {/* 1) ACEPTACIÓN */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>1) Aceptación de los términos</h2>
        <p>
          Estos términos regulan el uso del sitio y de los contenidos
          publicados. Podremos actualizarlos en cualquier momento; la versión
          vigente se publicará en esta misma página.
        </p>
      </section>

      {/* 2) USO DEL SITIO */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>2) Uso del sitio</h2>
        <ul>
          <li>
            Te comprometes a usar el sitio de forma legal, respetuosa y sin
            afectar los derechos de terceros ni el funcionamiento del servicio.
          </li>
          <li>
            No está permitido intentar vulnerar la seguridad, realizar scraping
            masivo no autorizado o cualquier actividad maliciosa.
          </li>
          <li>
            El sitio está orientado a público general. Si eres menor de 13 años
            (o la edad mínima en tu país), solicita permiso de tu representante
            legal para usarlo.
          </li>
        </ul>
      </section>

      {/* 3) CONTENIDOS Y ENLACES */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>3) Contenidos y enlaces externos</h2>
        <p>
          Publicamos artículos, reseñas, guías y anuncios de sorteos de buena
          fe. Aunque buscamos la máxima precisión, la información se ofrece{" "}
          <i>“tal cual”</i> y puede contener errores u omisiones.
        </p>
        <p>
          El sitio puede incluir enlaces a plataformas externas (p. ej. TikTok,
          Twitch, YouTube, Facebook, Kick) u otros sitios de terceros. No somos
          responsables por sus contenidos, políticas o prácticas.
        </p>
      </section>

      {/* 4) PROPIEDAD INTELECTUAL */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>4) Propiedad intelectual</h2>
        <p>
          A menos que se indique lo contrario, los textos, diseños y recursos
          propios de <b>GridialHub</b> están protegidos por derechos de autor u
          otras figuras aplicables. No se permite su copia, distribución o
          modificación sin autorización previa.
        </p>
        <p className="meta">
          Marcas y logotipos de terceros (juegos, plataformas, hardware, etc.)
          pertenecen a sus respectivos titulares.
        </p>
      </section>

      {/* 5) CUENTAS / PARTICIPACIÓN EN SORTEOS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>5) Participación en sorteos</h2>
        <ul>
          <li>
            Cada sorteo tendrá bases específicas publicadas en{" "}
            <Link href="/bases">/bases</Link>. Al participar, aceptas dichas
            reglas.
          </li>
          <li>
            Intentos de fraude, suplantación o manipulación implicarán
            descalificación inmediata.
          </li>
          <li>
            La entrega de premios se realiza según lo anunciado (saldo de
            plataformas, tarjetas regalo, pases de batalla o moneda del juego,
            valor equivalente).
          </li>
        </ul>
      </section>

      {/* 6) LIMITACIÓN DE RESPONSABILIDAD */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>6) Limitación de responsabilidad</h2>
        <p>
          En la medida permitida por la ley, <b>GridialHub</b> no será
          responsable por daños indirectos, incidentales o consecuenciales
          derivados del uso o imposibilidad de uso del sitio o de sus
          contenidos.
        </p>
      </section>

      {/* 7) SIN COMERCIO DIRECTO / DEVOLUCIONES */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>7) Compras, membresías o devoluciones</h2>
        <p>
          Actualmente <b>GridialHub</b> no vende productos ni cobra membresías
          directamente desde el sitio. Si en el futuro se habilitan servicios
          pagos, se publicarán condiciones específicas de compra, entrega,
          reembolsos y soporte.
        </p>
      </section>

      {/* 8) PUBLICIDAD Y AFILIADOS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>8) Publicidad y programas de afiliados</h2>
        <p>
          El sitio puede mostrar anuncios o incluir enlaces de afiliados. Esto
          no cambia nuestra opinión editorial. Cuando corresponda, se indicará
          la naturaleza publicitaria o de afiliación según buenas prácticas.
        </p>
      </section>

      {/* 9) PRIVACIDAD */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>9) Privacidad y protección de datos</h2>
        <p>
          El tratamiento de datos personales se regula en nuestra{" "}
          <Link href="/privacidad">Política de Privacidad</Link>. Al usar el
          sitio, aceptas también lo dispuesto en dicha política.
        </p>
      </section>

      {/* 10) AVISOS / RECLAMOS (DMCA u otros) */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>10) Avisos y reclamos</h2>
        <p>
          Si consideras que algún contenido vulnera derechos (incluidos de
          propiedad intelectual) o incumple normas, escríbenos a{" "}
          <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a> y
          revisaremos el caso con prontitud.
        </p>
      </section>

      {/* 11) MODIFICACIONES */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>11) Modificaciones de los términos</h2>
        <p>
          Podemos actualizar estos términos cuando sea necesario. La versión
          vigente será la publicada en esta URL. Si el cambio es relevante, lo
          anunciaremos en la portada o redes oficiales.
        </p>
      </section>

      {/* 12) LEY APLICABLE */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>12) Ley aplicable y jurisdicción</h2>
        <p>
          Estos términos se rigen por las leyes aplicables del lugar donde opera
          el responsable del sitio. En caso de controversia, las partes
          procurarán una solución amistosa antes de recurrir a instancias
          formales.
        </p>
      </section>

      {/* 13) CONTACTO */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>13) Contacto</h2>
        <p>
          Para consultas sobre estos Términos y Condiciones o sobre el uso del
          sitio, puedes escribirnos a{" "}
          <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a> o
          visitar la sección <Link href="/contacto">Contacto</Link>.
        </p>
      </section>
    </div>
  );
}
