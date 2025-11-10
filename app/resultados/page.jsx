export default function Resultados() {
  // Cuando tengas ganadores reales, rellena la tabla o lista.
  const ganadores = []; // ejemplo: [{usuario:"@Pepito", premio:"$40 Steam"}]

  return (
    <div className="card">
      <h1>Resultados</h1>
      {ganadores.length === 0 ? (
        <p className="meta">Aún no hay resultados publicados. Vuelve después del sorteo en vivo.</p>
      ) : (
        <ul>
          {ganadores.map((g,i)=>(
            <li key={i}><b>{g.usuario}</b> — {g.premio}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
