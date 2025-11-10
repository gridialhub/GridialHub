export default function Post({ params }) {
  const { slug } = params;
  return (
    <article className="card">
      <h1 style={{marginBottom:8}}>Artículo: {slug.replace(/-/g," ")}</h1>
      <p className="meta">Publicado: 2025-11-08 • Autor: Gridial</p>
      <hr />
      <p>
        Aquí va el contenido del artículo. Puedes usar texto, imágenes y videos embebidos.
        Más adelante lo conectamos a un CMS o cargamos desde archivos MD/JSON.
      </p>
    </article>
  );
}
