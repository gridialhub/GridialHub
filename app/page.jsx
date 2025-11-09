"use client";
import { useEffect, useMemo, useRef, useState } from "react";

// Lista corta de dominios desechables comunes (puedes ampliarla luego)
const BAD_EMAIL_DOMAINS = [
  "tempmail.com","10minutemail.com","guerrillamail.com","mailinator.com",
  "yopmail.com","trashmail.com","dispostable.com","getnada.com","sharklasers.com"
];

export default function Sorteos() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [follow, setFollow] = useState({ tiktok:false, twitch:false, youtube:false, facebook:false });

  // --- Anti-bot/abuso ---
  const [readyAt, setReadyAt] = useState(0);          // tiempo mínimo en página
  const submitBtnRef = useRef(null);
  const honeypotRef = useRef(null);                   // campo trampa (oculto)
  const entries = 1 + Object.values(follow).filter(Boolean).length;

  useEffect(() => {
    // 8 segundos mínimo en página antes de permitir enviar
    setReadyAt(Date.now() + 8000);
  }, []);

  const tooSoon = Date.now() < readyAt;

  const isDisposable = (mail) => {
    const at = mail.lastIndexOf("@");
    if (at === -1) return false;
    const domain = mail.slice(at + 1).toLowerCase().trim();
    return BAD_EMAIL_DOMAINS.includes(domain);
  };

  const localRateLimited = () => {
    try {
      const nextAllowed = localStorage.getItem("gh-last-submit-allowed");
      if (!nextAllowed) return false;
      return Date.now() < parseInt(nextAllowed, 10);
    } catch { return false; }
  };

  const setLocalCooldown = (ms = 120000) => {
    try { localStorage.setItem("gh-last-submit-allowed", String(Date.now() + ms)); } catch {}
  };

  const submit = () => {
    // 1) Honeypot: si el bot llenó el campo oculto, abortar
    if (honeypotRef.current?.value) {
      alert("Detectado comportamiento automático. Inténtalo de forma normal.");
      return;
    }
    // 2) Tiempo mínimo en página
    if (tooSoon) {
      alert("Qué rápido 😅 Espera unos segundos y vuelve a intentarlo.");
      return;
    }
    // 3) Rate limit local
    if (localRateLimited()) {
      alert("Ya enviaste recientemente. Espera un momento y vuelve a intentar.");
      return;
    }
    // 4) Validaciones básicas
    if (!email || !user) {
      alert("Completa email y usuario para participar.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Email inválido.");
      return;
    }
    if (isDisposable(email)) {
      alert("No aceptamos correos desechables. Usa un email real.");
      return;
    }

    // 5) Deshabilitar botón para evitar doble click
    if (submitBtnRef.current) submitBtnRef.current.disabled = true;

    // 👉 Aquí iría el envío real a tu backend/BD. Por ahora queda en demo:
    alert(`Registro enviado.\nEntradas: ${entries}\n\n*Nota:* en producción se guardará en la BD y se hará auditoría antes del sorteo.`);

    // 6) Cooldown local 2 min
    setLocalCooldown(120000);

    // Rehabilitar botón después de 1.5s para UX
    setTimeout(() => { if (submitBtnRef.current) submitBtnRef.current.disabled = false; }, 1500);
  };

  return (
    <div className="grid" style={{gap:16}}>
      <div className="card">
        <h1>Participa en el sorteo</h1>
        <p className="meta">Regístrate y suma oportunidades por cada red social</p>

        {/* Honeypot: campo oculto para atrapar bots */}
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
          <b>Entradas totales:</b> {entries} (1 por registro + 1 por cada red seguida)
        </p>

        <button
          className="btn"
          ref={submitBtnRef}
          onClick={submit}
          title={tooSoon ? "Espera unos segundos para enviar" : "Enviar participación"}
        >
          Enviar participación
        </button>

        <p className="meta" style={{marginTop:8}}>
          * En producción validaremos duplicados y haremos auditoría manual si es necesario. Intentos de fraude implican exclusión.
        </p>
      </div>

      <div className="card">
        <h3>Consejos anti-trampa (lo lees tú y tu comunidad)</h3>
        <ul>
          <li>No se aceptan correos desechables.</li>
          <li>Un participante por persona. Se auditan ganadores antes de entregar el premio.</li>
          <li>Se requiere responder al email en 48 horas.</li>
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
