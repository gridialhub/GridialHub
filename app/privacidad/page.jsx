"use client";

import Link from "next/link";

export default function Privacidad() {
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
          Política de Privacidad — GridialHub
        </h1>
        <p className="meta">Última actualización: {hoy}</p>
        <p style={{ maxWidth: 900, margin: "0 auto" }}>
          En <b>GridialHub</b> respetamos tu privacidad. Esta política explica{" "}
          qué información recopilamos, con qué finalidad la usamos, por cuánto
          tiempo la conservamos y cuáles son tus derechos.
        </p>
      </header>

      {/* RESPONSABLE */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>1) Responsable y contacto</h2>
        <p style={{ marginBottom: 8 }}>
          <b>Responsable:</b> Gridial (sitio web: gridialhub.com)
        </p>
        <p style={{ marginBottom: 8 }}>
          <b>Correo de contacto:</b>{" "}
          <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a>
        </p>
        <p className="meta">
          Este sitio está hospedado en servicios en la nube (p. ej. Vercel) y
          usa proveedores de DNS/CDN. Estos terceros podrían procesar datos
          técnicos (IP, headers) para funcionamiento y seguridad.
        </p>
      </section>

      {/* DATOS QUE RECOPILAMOS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>2) Información que recopilamos</h2>
        <ul>
          <li>
            <b>Datos que nos das voluntariamente</b> (p. ej. formularios de
            contacto o registro en sorteos): nombre/alias, correo y cualquier
            dato que escribas en el mensaje.
          </li>
          <li>
            <b>Datos técnicos no identificables</b>: dirección IP abreviada,
            tipo de navegador, dispositivo, sistema operativo, páginas
            visitadas, referencia y métricas anónimas para estadísticas y
            rendimiento.
          </li>
          <li>
            <b>Metadatos de participación en sorteos</b> (cuando apliquen):
            confirmaciones de inscripción, ganadores y pruebas de entrega del
            premio.
          </li>
        </ul>
      </section>

      {/* FINALIDADES / BASE LEGAL */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>3) Para qué usamos tu información</h2>
        <ul>
          <li>Responder mensajes enviados por el formulario de contacto.</li>
          <li>
            Gestionar sorteos, validar participaciones, seleccionar ganadores y
            contactar para la entrega de premios.
          </li>
          <li>
            Analizar el rendimiento del sitio y mejorar contenidos/experiencia.
          </li>
          <li>
            Cumplir obligaciones legales y atender requerimientos de
            autoridades.
          </li>
        </ul>
        <p className="meta">
          <b>Base legal:</b> tu consentimiento (por ejemplo, al enviar un
          formulario) y el interés legítimo en operar y proteger el sitio.
        </p>
      </section>

      {/* COOKIES / ANALYTICS / PUBLICIDAD */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>4) Cookies y tecnologías similares</h2>
        <ul>
          <li>
            <b>Esenciales:</b> necesarias para que el sitio funcione (seguridad,
            sesiones básicas, preferencias).
          </li>
          <li>
            <b>Métricas (Google Analytics 4):</b> usamos medición anónima/aglomerada
            para entender visitas y mejorar el sitio. Más info de Google:{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites?hl=es"
              target="_blank"
              rel="noreferrer"
            >
              cómo usa datos Google
            </a>
            .
          </li>
          <li>
            <b>Publicidad (Google AdSense) — cuando esté activo:</b> Google
            podría usar cookies/identificadores para mostrar anuncios. Puedes
            gestionar tus preferencias en{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              Configuración de anuncios de Google
            </a>{" "}
            y leer su{" "}
            <a
              href="https://policies.google.com/technologies/ads?hl=es"
              target="_blank"
              rel="noreferrer"
            >
              política sobre anuncios
            </a>
            .
          </li>
        </ul>
        <p className="meta">
          Cuando activemos cookies no esenciales, mostraremos un aviso para
          aceptar o rechazar categorías.
        </p>
      </section>

      {/* TERCEROS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>5) Proveedores y destinatarios</h2>
        <ul>
          <li>
            <b>Google Analytics / Google Ads</b> (medición y, en su caso,
            publicidad).
          </li>
          <li>
            <b>Hosting/CDN</b> (p. ej. Vercel y servicios de DNS/CDN) para
            servir el sitio con buen rendimiento y seguridad.
          </li>
          <li>
            <b>Correo</b> (Zoho Mail u otro) para recibir y responder tus
            mensajes.
          </li>
        </ul>
        <p className="meta">
          No vendemos ni alquilamos tus datos. Sólo compartimos con terceros
          para prestar el servicio o por obligación legal.
        </p>
      </section>

      {/* CONSERVACIÓN */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>6) Plazos de conservación</h2>
        <ul>
          <li>
            <b>Mensajes de contacto:</b> hasta 12 meses desde la última
            interacción, salvo que requiera más tiempo por soporte o legalidad.
          </li>
          <li>
            <b>Registros de sorteos:</b> hasta 12 meses tras cerrar el sorteo
            para auditoría y prevención de fraude.
          </li>
          <li>
            <b>Métricas anónimas:</b> según políticas del proveedor (p. ej.
            Google Analytics).
          </li>
        </ul>
      </section>

      {/* DERECHOS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>7) Tus derechos</h2>
        <ul>
          <li>Acceder, rectificar o eliminar datos personales.</li>
          <li>Retirar tu consentimiento para comunicaciones futuras.</li>
          <li>
            Oponerte a ciertos tratamientos o solicitar limitación/portabilidad
            cuando aplique.
          </li>
        </ul>
        <p>
          Para ejercerlos, escribe a{" "}
          <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a> o
          usa la sección <Link href="/contacto">Contacto</Link>.
        </p>
      </section>

      {/* MENORES */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>8) Menores de edad</h2>
        <p>
          El contenido está orientado a público general. Si tienes menos de 13
          años (o la edad mínima equivalente en tu país), solicita permiso de tu
          representante legal para usar el sitio y no nos envíes datos sin ese
          consentimiento.
        </p>
      </section>

      {/* TRANSFERENCIAS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>9) Transferencias internacionales</h2>
        <p>
          Algunos proveedores podrían procesar datos en otros países. En ese
          caso, buscamos que apliquen garantías adecuadas (cláusulas estándar u
          otros mecanismos aceptados) para proteger tu información.
        </p>
      </section>

      {/* CAMBIOS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>10) Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política cuando sea necesario. Publicaremos la
          versión vigente en esta misma página y, si el cambio es relevante, lo
          anunciaremos en la portada o redes oficiales.
        </p>
      </section>

      {/* CONTACTO */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>11) ¿Dudas o solicitudes?</h2>
        <p>
          Escríbenos a{" "}
          <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a> o
          visita <Link href="/contacto">Contacto</Link>. Respondemos lo más
          pronto posible.
        </p>
      </section>
    </div>
  );
}
