"use client";
import { useState } from "react";

export default function Contacto() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [msg,setMsg]=useState("");

  const send = () => {
    if(!name||!email||!msg) return alert("Completa todos los campos.");
    alert("Mensaje enviado (demo). En producción se envía por email o API.");
    setName(""); setEmail(""); setMsg("");
  };

  return (
    <div className="card">
      <h1>Contacto</h1>
      <div>
        <label>Nombre</label>
        <input value={name} onChange={e=>setName(e.target.value)} />
        <label>Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} />
        <label>Mensaje</label>
        <textarea rows={6} value={msg} onChange={e=>setMsg(e.target.value)} />
        <div style={{marginTop:10}}>
          <button className="btn" onClick={send}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
