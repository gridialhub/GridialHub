export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: 24 }}>
      <div
        className="container"
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div>
          © {new Date().getFullYear()} GridialHub — Comunidad gaming y sorteos
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <a href="/bases">Bases</a>
          <a href="/privacidad">Política de Privacidad</a>
          <a href="/terminos">Términos</a>
        </div>
      </div>
    </footer>
  );
}
