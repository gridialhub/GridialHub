"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

const REDES = [
  { key: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@gridial" },
  { key: "twitch", label: "Twitch", url: "https://www.twitch.tv/gridialtv" },
  { key: "youtube", label: "YouTube", url: "https://www.youtube.com/@Gridial" },
  { key: "facebook", label: "Facebook", url: "https://www.facebook.com/GridialOfficial" },
  { key: "kick", label: "Kick", url: "https://kick.com/gridial" }
];

export default function Sorteos() {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [redes, setRedes] = useState<Record<string, boolean>>({});
  const [acepto, setAcepto] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const entradas = useMemo(() => {
    const extras = Object.values(redes).filter(Boolean).length;
    return 1 + extras; // 1 por registro + 1 por cada red
  }, [redes]);

  const toggleRed = (key: string) =>
    setRedes(prev => ({ ...prev, [key]: !prev[key] }));

  const validar = () => {
    if (!email.trim()) return "El email es obligatorio.";
    // Regex simple y suficiente
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return "Email inválido.";
    if (!usuario.trim() || usuario.trim().length < 3) return "Ingresa un usuario visible (mínimo 3 caracteres).";
    if (!acepto) return "Debes aceptar las reglas contra fraude.";
    return null;
    // Nota: la verificación real de redes vendrá en la fase 2 (API).
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOk(null);
    setErr(null);
    const v = validar();
    if (v) { setErr(v); return; }

    try {
      setEnviando(true);
      // FASE 1 (demo): no llamamos servidor, solo simulamos.
      // En FASE 2: haremos POST a /api/participaciones (Supabase/Neon).
      await new Promise(r => setTimeout(r, 500));
      setOk(`¡Listo! Tu registro fue recibido. Entradas totales: ${entradas}.`);
      // Limpieza suave (dejamos redes marcadas si quieres)
      // setEmail(""); setUsuario(""); setRedes({});
    } catch (e: any) {
      setErr("No se pudo enviar tu registro. Intenta de nuevo.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="card" style={{ display: "grid", gap: 12 }}>
      <h1>Participa en el sorteo</h1>
      <p className="meta">
        Premio total <b>$200</b> entre <b>5 ganadores</b>. Sin compra necesaria.
        <br />
        <b>Entradas:</b> 1 por registro + 1 por cada red donde sigas (TikTok, Twitch, YouTube, Facebook, Kick).
      </p>

      {/* Estado / aviso */}
      <div className="glass hint">
        <div className="glass-row"><span>Estado</span><strong>Activo</strong></div>
        <div className="glass-row"><span>Fecha del sorteo</span><strong>Por anunciar</strong></div>
        <div className="glass-row"><span>Transmisión</span><strong>Twitch & TikTok Live</strong></div>
      </div>

      <form onSubmit={onSubmit} className="form-grid">
        <div className="form-field">
          <label>Email *</label>
          <input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>

        <div className="form-field">
          <label>Usuario visible *</label>
          <input
            placeholder="@tu_usuario"
            value={usuario}
            onChange={e => setUsuario(e.target.value)}
            required
          />
        </div>

        <div className="form-wide">
          <label>Redes donde me sigues (+1 por cada una)</label>
          <div className="redez-wrap">
            {REDES.map(r => (
              <div key={r.key} className={`redez-pill ${redes[r.key] ? "on" : ""}`}>
                <button
                  type="button"
                  className={`badge badge-${r.key}`}
                  onClick={() => toggleRed(r.key)}
                  aria-pressed={!!redes[r.key]}
                >
                  {r.label} {redes[r.key] ? "✓" : ""}
                </button>
                <a className="go" href={r.url} target="_blank" rel="noreferrer">Visitar</a>
              </div>
            ))}
          </div>
          <p className="meta">
            * En la <b>fase 2</b> la página verificará automáticamente si sigues cada perfil.
          </p>
        </div>

        <div className="form-wide">
          <label className="checkline">
            <input type="checkbox" checked={acepto} onChange={e => setAcepto(e.target.checked)} />
            <span>
              Confirmo que los datos son reales y acepto que intentos de fraude implican exclusión.  
              Revisa las <Link href="/bases">bases</Link> y la <Link href="/privacidad">política de privacidad</Link>.
            </span>
          </label>
        </div>

        <div className="form-wide" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <div className="meta">Entradas totales si envías ahora: <b>{entradas}</b></div>
          <button className="btn" disabled={enviando} style={{ minWidth: 180 }}>
            {enviando ? "Enviando..." : "Enviar participación"}
          </button>
        </div>

        {err && <div className="alert error">{err}</div>}
        {ok && <div className="alert ok">{ok}</div>}
      </form>

      <hr />

      <div className="meta">
        No afiliado ni patrocinado por TikTok, Twitch, YouTube, Facebook, Kick o Steam.  
        Premios: saldo de Steam, tarjeta de regalo, pase de batalla o monedas del juego (hasta el monto correspondiente).
      </div>
    </div>
  );
}
