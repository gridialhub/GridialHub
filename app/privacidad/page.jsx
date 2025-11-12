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
          En <b>GridialHub</b> respetamos tu privacidad. Esta política explica
          qué información recopilamos, con qué finalidad la usamos, por cuánto
          tiempo la conservamos y cuáles son tus derechos.
        </p>
      </header>

      {/* 1) RESPONSABLE */}
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
          Este sitio utiliza infraestructura en la nube y servicios técnicos
          estándar de la industria para operar con seguridad y buen rendimiento.
        </p>
      </section>

      {/* 2) DATOS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>2) Información que recopilamos</h2>
        <ul>
          <li>
            <b>Datos que nos das voluntariamente</b> (formularios de contacto o
            registro en sorteos): nombre/alias, correo y cualquier dato que
            incluyas en el mensaje.
          </li>
          <li>
            <b>Datos técnicos no identificables</b>: dirección IP abreviada,
            tipo de navegador, dispositivo, sistema operativo, páginas
            visitadas, referencia y métricas anónimas/aglomeradas para
            estadísticas y rendimiento.
          </li>
          <li>
            <b>Metadatos de sorteos</b> (cuando apliquen): confirmaciones de
            inscripción, ganadores y constancias de entrega de premios.
          </li>
        </ul>
      </section>

      {/* 3) FINALIDADES */}
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
          <b>Base legal:</b> tu consentimiento (p. ej. al enviar un formulario)
          y el interés legítimo en operar y proteger el sitio.
        </p>
      </section>

      {/* 4) COOKIES */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>4) Cookies y tecnologías similares</h2>
        <ul>
          <li>
            <b>Esenciales:</b> necesarias para seguridad, funcionamiento y
            preferencias básicas.
          </li>
          <li>
            <b>Métricas (Analytics):</b> medición anónima/aglomerada para
            entender visitas y mejoras (sin identificarte personalmente).
          </li>
          <li>
            <b>Publicidad — cuando esté activa:</b> podrían emplearse cookies o
            identificadores para mostrar anuncios y limitar su frecuencia. Puedes
            gestionar preferencias desde la configuración de tu navegador o la
            plataforma publicitaria correspondiente.
          </li>
        </ul>
        <p className="meta">
          Cuando activemos cookies no esenciales, mostraremos un aviso para
          aceptar o rechazar categorías.
        </p>
      </section>

      {/* 5) TERCEROS (VERSIÓN NEUTRA) */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>5) Terceros y confidencialidad</h2>
        <p>
          En <b>GridialHub</b> mantenemos la confidencialidad de la información
          que compartes voluntariamente. Los datos no se venden ni alquilan, y
          únicamente se tratan para los fines descritos en esta política o
          cuando exista una obligación legal.
        </p>
        <p>
          Para operar el sitio podemos apoyarnos en servicios técnicos (p. ej.
          infraestructura, análisis o envío de correos). Dichos servicios están
          sujetos a compromisos de seguridad y privacidad acordes con los
          estándares de la industria.
        </p>
      </section>

      {/* 6) CONSERVACIÓN */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>6) Plazos de conservación</h2>
        <ul>
          <li>
            <b>Mensajes de contacto:</b> hasta 12 meses desde la última
            interacción, salvo necesidad legal o de soporte.
          </li>
          <li>
            <b>Registros de sorteos:</b> hasta 12 meses tras el cierre para
            auditoría y prevención de fraude.
          </li>
          <li>
            <b>Métricas anónimas:</b> según políticas del proveedor de
            analítica.
          </li>
        </ul>
      </section>

      {/* 7) DERECHOS */}
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

      {/* 8) MENORES */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>8) Menores de edad</h2>
        <p>
          El contenido está orientado a público general. Si tienes menos de 13
          años (o la edad mínima equivalente en tu país), solicita permiso de tu
          representante legal para usar el sitio y no nos envíes datos sin ese
          consentimiento.
        </p>
      </section>

      {/* 9) TRANSFERENCIAS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>9) Transferencias internacionales</h2>
        <p>
          Algunos servicios técnicos utilizados para operar el sitio pueden
          procesar datos fuera de tu país. Procuramos que existan garantías
          adecuadas para proteger tu información conforme a estándares
          reconocidos.
        </p>
      </section>

      {/* 10) CAMBIOS */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>10) Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política cuando sea necesario. Publicaremos la
          versión vigente en esta misma página y, si el cambio es relevante, lo
          anunciaremos en la portada o redes oficiales.
        </p>
      </section>

      {/* 11) CONTACTO */}
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
