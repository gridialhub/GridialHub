"use client";
import { useState } from "react";

export default function Sorteos() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [follow, setFollow] = useState({ tiktok:false, twitch:false, youtube:false, facebook:false });
  const entries = 1 + Object.values(follow).filter(Boolean).length;

  const submit = () => {
    if (!email || !user) return alert("Completa email y usuario para participar.");
    alert(`Registro demo completado.\nEntradas totales: ${entries}\n(En producción se guardará en la base de datos).`);
  };

  return (
    <div className="grid" style={{gap:16}}>
      <div className="card">
        <h1>Participa en el sorteo</h1>
        <p className="meta">Regístrate y suma oportunidades por cada red social</p>
        <div className="grid grid-2">
          <div>
            <label>Email</label>
            <input placeholder="tu@email.com" value={email} onChange={e=>setEmail(e.target.value)} />
          </div>
          <div>
            <label>Usuario a mostrar</label>
            <input placeholder="@tu_usuario" value={user} onChange={e=>setUser(e.target.value)} />
          </div>
        </div>

        <hr />
        <h3>Opcionales (cada uno suma +1)</h3>
        <div className="grid grid-2">
          <Check id="tiktok" label="Seguir en TikTok" link="https://www.tiktok.com/@gridial" state={follow} setState={setFollow}/>
          <Check id="twitch" label="Seguir en Twitch" link="https://www.twitch.tv/gridial" state={follow} setState={setFollow}/>
          <Check id="youtube" label="Suscribirse en YouTube" link="https://www.youtube.com/@gridial" state={follow} setState={setFollow}/>
          <Check id="facebook" label="Seguir en Facebook" link="https://www.facebook.com/gridial" state={follow} setState={setFollow}/>
        </div>

        <p style={{marginTop:8}}><b>Entradas totales:</b> {entries} (1 por registro + 1 por cada red seguida)</p>
        <button className="btn" onClick={submit}>Enviar participación</button>

        <p className="meta" style={{marginTop:8}}>
          * En producción se verificará que las cuentas realmente sigan las páginas.
          Este demo no guarda datos (falta conectar Supabase).
        </p>
      </div>

      <div className="card">
        <h3>Fechas</h3>
        <ul>
          <li>Inicio: anunciar en GridialHub.com</li>
          <li>Cierre: anunciar en GridialHub.com</li>
          <li>Sorteo: en vivo por Twitch y TikTok Live</li>
        </ul>
      </div>
    </div>
  );
}

function Check({ id, label, link, state, setState }) {
  const checked = state[id];
  return (
    <div className="card" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
      <div>
        <div style={{fontWeight:700}}>{label}</div>
        <a href={link} target="_blank" className="meta" rel="noreferrer">Abrir perfil</a>
      </div>
      <label style={{display:"flex", alignItems:"center", gap:8}}>
        <input type="checkbox" checked={checked} onChange={e=>setState({...state, [id]:e.target.checked})} />
        Marcado
      </label>
    </div>
  );
}
