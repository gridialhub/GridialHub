export default function Resultados() {
  const ganadoresDemo = ["@user_1", "@user_2", "@user_3", "@user_4", "@user_5"];
  return (
    <div className="grid" style={{gap:16}}>
      <div className="card">
        <h1>Resultados y transparencia</h1>
        <p className="meta">Aquí publicaremos los ganadores y el CSV de auditoría por cada sorteo.</p>
        <h3>Ganadores (demo)</h3>
        <ul>
          {ganadoresDemo.map(g => <li key={g}>{g}</li>)}
        </ul>
        <p className="meta">* En producción, aquí se enlaza el CSV exportado y la “seed” del sorteo.</p>
      </div>
    </div>
  );
}
