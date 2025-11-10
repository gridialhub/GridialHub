export default function Bases() {
  return (
    <article className="card" style={{display:"grid", gap:12}}>
      <h1>Bases del sorteo</h1>
      <p className="meta">Última actualización: {new Date().toLocaleDateString("es-ES")}</p>

      <h3>Elegibilidad</h3>
      <ul>
        <li>Abierto a participantes de cualquier país.</li>
        <li>Se recomienda ser mayor de 18 años o contar con permiso del representante legal.</li>
        <li>No se requiere compra para participar.</li>
      </ul>

      <h3>Mecánica</h3>
      <ul>
        <li>1 entrada por registro con email válido.</li>
        <li>+1 entrada adicional por cada red donde sigas (TikTok, Twitch, YouTube, Facebook).</li>
        <li>Los ganadores se eligen al azar en transmisión en vivo.</li>
      </ul>

      <h3>Premios</h3>
      <ul>
        <li>Premio total de $200 USD dividido entre 5 ganadores.</li>
        <li>Cada ganador podrá elegir: saldo de Steam, tarjeta de regalo, pase de batalla o monedas del juego (hasta el monto asignado).</li>
      </ul>

      <h3>Notificación y entrega</h3>
      <ul>
        <li>Se contacta a los ganadores por email. Deben responder en 48 horas.</li>
        <li>Si no hay respuesta, se elige un suplente.</li>
      </ul>

      <h3>Transparencia</h3>
      <ul>
        <li>Se publicará la lista de ganadores en la sección <b>Resultados</b>.</li>
        <li>Se podrá publicar un archivo de auditoría (sin datos sensibles).</li>
      </ul>

      <h3>Conducta</h3>
      <ul>
        <li>Entradas duplicadas, uso de bots o datos falsos implican exclusión.</li>
      </ul>

      <p className="meta">Este sorteo no está afiliado ni patrocinado por TikTok, Twitch, YouTube, Facebook o Steam.</p>
    </article>
  );
}
