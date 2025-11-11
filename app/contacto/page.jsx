"use client";
import { useState } from "react";

export default function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ok, setOk] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOk(null);
    setErr(null);
    setLoading(true);

    try {
      // En esta versión, solo abre el correo del usuario con tu dirección
      const mailto = `mailto:contact@gridialhub.com?subject=Contacto%20desde%20GridialHub&body=${encodeURIComponent(
        `Nombre: ${name}\nEmail: ${email}\n\n${message}`
      )}`;
      window.location.href = mailto;
      setOk("Se ha abierto tu cliente de correo para enviar el mensaje.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setErr("No se pudo iniciar el envío.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ display: "grid", gap: 24 }}>
      <header className="card" style={{ padding: 24, borderRadius: 16, textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 900 }}>Contacto</h1>
        <p className="meta">
          ¿Tienes dudas, propuestas o quieres colaborar con GridialHub?  
          Puedes escribirme directamente desde este formulario o al correo{" "}
          <b>contact@gridialhub.com</b>.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="card"
        style={{
          padding: 20,
          borderRadius: 16,
          display: "grid",
          gap: 12,
          maxWidth: 700,
          margin: "0 auto",
        }}
      >
        <div>
          <label>Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre o alias"
            required
          />
        </div>
        <div>
          <label>Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            required
          />
        </div>
        <div>
          <label>Mensaje</label>
          <textarea
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje aquí..."
            required
          />
        </div>

        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Enviar mensaje"}
        </button>

        {ok && (
          <div
            className="card"
            style={{
              borderColor: "color-mix(in oklab, var(--border), lime 30%)",
              textAlign: "center",
            }}
          >
            {ok}
          </div>
        )}
        {err && (
          <div
            className="card"
            style={{
              borderColor: "color-mix(in oklab, var(--border), red 30%)",
              textAlign: "center",
            }}
          >
            {err}
          </div>
        )}
      </form>
    </div>
  );
}
