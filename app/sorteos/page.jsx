"use client";
import { useEffect, useRef, useState } from "react";

const BAD_EMAIL_DOMAINS = [
  "tempmail.com","10minutemail.com","guerrillamail.com","mailinator.com",
  "yopmail.com","trashmail.com","dispostable.com","getnada.com","sharklasers.com"
];

export default function Sorteos() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [follow, setFollow] = useState({ tiktok:false, twitch:false, youtube:false, facebook:false });

  const [readyAt, setReadyAt] = useState(0);
  const submitBtnRef = useRef(null);
  const honeypotRef = useRef(null);
  const entries = 1 + Object.values(follow).filter(Boolean).length;

  useEffect(() => { setReadyAt(Date.now() + 8000); }, []);
  const tooSoon = Date.now() < readyAt;

  const isDisposable = (mail) => {
    const at = mail.lastIndexOf("@");
    if (at === -1) return false;
    const domain = mail.slice(at + 1).toLowerCase().trim();
    return BAD_EMAIL_DOMAINS.includes(domain);
  };
  const localRateLimited = () => {
    try { const n = localStorage.getItem("gh-last-submit-allowed"); return n && Date.now() < +n; } catch { return false; }
  };
  const setLocalCooldown = (ms=120000) => { try { localStorage.setItem("gh-last-submit-allowed", String(Date.now()+ms)); } catch {} };

  const submit = () => {
    if (honeypotRef.current?.value) return alert("Detectado comportamiento automático.");
    if (tooSoon) return alert("Espera unos segundos y vuelve a intentarlo.");
    if (localRateLimited()) return alert("Ya enviaste recientemente. Intenta en un momento.");
    if (!email || !user) return alert("Completa email y usuario para participar.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Email inválido.");
    if (isDisposable(email)) return alert("No aceptamos correos desechables.");

    if (submitBtnRef.current) submitBtnRef.current.disabled = true;
    alert(`Registro enviado.\nEntradas: ${entries}\n\n*Nota:* En producción se guardará y se audita al final.`);
    setLocalCooldown(120000);
    setTimeout(()=>{ if (submitBtnRef.current) submitBtnRef.current.disabled=false; },1500);
  };

  return (
    <div className="sorteos-page">
      <div className="card">
        <h1>Participa en el sorteo</h1>
        <p className="meta">1 entrada por registro · +1 por cada red donde sigas</p>

        {/* Honeypot */}
        <div style={{position:"absolute", left:"-9999px", width:1, height:1, overflow:"hidden"}}>
          <label>Do not fill</label>
          <input ref={honeypotRef} name="website" autoComplete="off" tabIndex={-1} />
        </div>

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
          <Check id="twitch" label="Seguir en Twitch" link="https://www.twitch.tv/gridialtv" state={follow} setState={setFollow}/>
          <Check id="youtube" label="Suscribirse en YouTube" link="https://www.youtube.com/@Gridial" state={follow} setState={setFollow}/>
          <Check id="facebook" label="Seguir en Facebook" link="https://www.facebook.com/GridialOfficial" state={follow} setState={setFollow}/>
        </div>

        <p style={{marginTop:8}}>
          <b>Entradas totales:</b> {entries}
        </p>

        <button className="btn" ref={submitBtnRef} onClick={submit} title={tooSoon ? "Espera unos segundos para enviar" : "Enviar participación"}>
          Enviar participación
        </button>

        <p className="meta" style={{marginTop:8}}>
          * Intentos de fraude implican exclusión. Se auditan ganadores antes de entregar premios.
        </p>
      </div>

      <div className="card">
        <h3>Consejos anti-trampa</h3>
        <ul>
          <li>No se aceptan correos desechables.</li>
          <li>Un participante por persona. Se revisa antes de entregar.</li>
          <li>Responder al email en 48 horas para confirmar premio.</li>
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
