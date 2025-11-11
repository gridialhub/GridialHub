"use client";

import Link from "next/link";

export default function Privacidad() {
  return (
    <div className="container" style={{ display: "grid", gap: 28 }}>
      {/* ENCABEZADO */}
      <header
        className="card"
        style={{
          padding: "24px",
          borderRadius: 18,
          textAlign: "center",
          background: "color-mix(in oklab, var(--card), transparent 8%)",
          border: "1px solid color-mix(in oklab, var(--border), var(--brand) 18%)",
          boxShadow: "0 10px 26px color-mix(in oklab, #000, var(--brand) 16%)",
        }}
      >
        <h1 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 900 }}>
          Política de Privacidad — GridialHub
        </h1>
        <p className="meta">
          Última actualización: {new Date().toLocaleDateString("es-VE")}
        </p>
        <p style={{ maxWidth: 900, margin: "0 auto" }}>
          En <b>GridialHub</b> respetamos y protegemos la privacidad de todos los visitantes y
          miembros de nuestra comunidad. Esta política explica qué datos se recopilan, cómo se usan
          y cómo los protegemos.
        </p>
      </header>

      {/* SECCIONES */}
      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>1. Información que recopilamos</h2>
        <ul>
          <li>
            <b>Datos voluntarios:</b> Si participas en sorteos o llenas un formulario (por ejemplo, tu
            correo o nombre de usuario), solo se usará para confirmar tu participación o entregar
            premios.
          </li>
          <li>
            <b>Datos automáticos:</b> Nuestro sitio puede recopilar información técnica básica como tu
            dirección IP, navegador o país, de forma anónima, para estadísticas internas y
            rendimiento del sitio.
          </li>
        </ul>
      </section>

      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>2. Uso de la información</h2>
        <ul>
          <li>Para gestionar sorteos, registrar ganadores y contactar a los participantes.</li>
          <li>Para mejorar la experiencia general de la web y su rendimiento.</li>
          <li>Para responder consultas enviadas a través de la sección de contacto.</li>
          <li>
            <b>No vendemos, alquilamos ni compartimos</b> tu información personal con terceros, salvo
            obligación legal.
          </li>
        </ul>
      </section>

      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>3. Cookies y tecnologías similares</h2>
        <p>
          Este sitio puede utilizar cookies básicas para mejorar el funcionamiento y recordar
          preferencias (como idioma o tema oscuro/claro). No se usan cookies publicitarias ni de
          rastreo de terceros.
        </p>
      </section>

      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>4. Enlaces externos</h2>
        <p>
          En <b>GridialHub</b> encontrarás enlaces hacia redes sociales (TikTok, Twitch, YouTube,
          Facebook, Kick) y sitios externos. No somos responsables por el contenido o políticas de
          privacidad de esas plataformas. Recomendamos revisar sus políticas antes de compartir
          información allí.
        </p>
      </section>

      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>5. Seguridad</h2>
        <p>
          Implementamos medidas técnicas básicas (HTTPS, servidores seguros, y validación mínima de
          formularios) para proteger tus datos. Sin embargo, recuerda que ninguna transmisión por
          Internet es 100% segura.
        </p>
      </section>

      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>6. Derechos de los usuarios</h2>
        <ul>
          <li>Acceder, corregir o eliminar tu información personal (si la hubieras enviado).</li>
          <li>Solicitar la exclusión de futuras comunicaciones relacionadas con sorteos.</li>
          <li>
            Para ejercer estos derechos, contáctanos al correo{" "}
            <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a>.
          </li>
        </ul>
      </section>

      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>7. Cambios a esta política</h2>
        <p>
          Esta política puede actualizarse ocasionalmente. Si se hacen cambios importantes,
          notificaremos mediante la página principal o redes oficiales.
        </p>
      </section>

      <section className="card" style={{ padding: 22, borderRadius: 14 }}>
        <h2>8. Contacto</h2>
        <p>
          Si tienes dudas sobre esta política o cómo manejamos tus datos, puedes escribirnos a{" "}
          <a href="mailto:contact@gridialhub.com">contact@gridialhub.com</a> o visitar la sección{" "}
          <Link href="/contacto">Contacto</Link>.
        </p>
      </section>
    </div>
  );
}
