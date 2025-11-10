export default function Contacto() {
  return (
    <div className="card" style={{display:"grid", gap:12}}>
      <h1>Contacto</h1>
      <p className="meta">¿Tienes dudas o propuestas? Escríbeme.</p>
      <div className="grid grid-2">
        <div>
          <label>Nombre</label>
          <input placeholder="Tu nombre" />
        </div>
        <div>
          <label>Email</label>
          <input placeholder="tu@email.com" />
        </div>
      </div>
      <div>
        <label>Mensaje</label>
        <textarea rows={5} placeholder="Cuéntame en qué te puedo ayudar" />
      </div>
      <button className="btn" onClick={()=>alert("Gracias. En una siguiente fase esto enviará a tu correo.")}>Enviar</button>
    </div>
  );
}
