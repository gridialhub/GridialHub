export const posts = [
  {
    slug: "bienvenida-comunidad-gridialhub",
    title: "Bienvenida a la comunidad GridialHub",
    excerpt:
      "Qué es GridialHub, cómo participar en sorteos y qué contenido vas a encontrar.",
    date: "2025-11-12",
    cover: "",         // opcional: "/images/tu-portada.jpg"
    ogImage: "",       // opcional: "/images/og.jpg"
    tags: ["comunidad", "sorteos", "gaming"],
    readingTime: "3 min",
    content: `
      <p>¡Bienvenidos a <b>GridialHub</b>! Aquí vas a encontrar actualizaciones de videojuegos,
      tecnología y sorteos activos para la comunidad. Todo en un solo lugar, claro y honesto.</p>

      <h3>¿Qué encontrarás?</h3>
      <ul>
        <li>Artículos cortos sobre juegos y hardware.</li>
        <li>Novedades de sorteos (bases, fechas, resultados).</li>
        <li>Guías rápidas y anuncios de streams.</li>
      </ul>

      <p>Si quieres apoyar, sígueme en TikTok, Twitch, YouTube, Facebook y Kick.
      Mientras en más redes me sigas, ¡más oportunidades tendrás en los sorteos!</p>
    `,
  },
];

export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
