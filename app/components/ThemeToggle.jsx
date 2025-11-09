"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [scheme, setScheme] = useState("auto"); // auto | light | dark

  useEffect(() => {
    const saved = localStorage.getItem("gh-theme");
    if (saved) setScheme(saved);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.dataset.theme = scheme; // data-theme="auto|light|dark"
    localStorage.setItem("gh-theme", scheme);
  }, [scheme]);

  return (
    <div style={{display:"flex", alignItems:"center", gap:8}}>
      <button className="btn btn-ghost" onClick={() => setScheme(scheme==="light" ? "dark" : "light")}>
        {scheme==="dark" ? "🌙 Oscuro" : "☀️ Claro"}
      </button>
      <button className="btn btn-ghost" onClick={() => setScheme("auto")}>🌀 Auto</button>
    </div>
  );
}
