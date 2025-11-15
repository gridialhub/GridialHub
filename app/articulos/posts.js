// app/articulos/posts.js

export const posts = [
  // 🆕 NUEVO ARTÍCULO: GPU
  {
    slug: "posts/que-grafica-comprar-sin-botar-la-plata",
    title: "Qué tarjeta gráfica comprar en 2025 sin botar la plata",
    date: "2025-11-14",
    readingTime: "8 min de lectura",
    excerpt:
      "Guía clara para elegir la GPU correcta según tu monitor, tus juegos y tu presupuesto, evitando el sobreprecio y el marketing vacío.",
    href: "/articulos/posts/que-grafica-comprar-sin-botar-la-plata",
  },

  // IA + FPS
  {
    slug: "posts/ia_fps",
    title: "Cómo la IA está optimizando tus FPS en tiempo real: el salto que da tu PC gamer",
    // FECHA EN FORMATO ISO PARA QUE NO SALGA "Invalid Date"
    date: "2025-11-14",
    readingTime: "5 min", // <- antes era readTime, lo alineamos con app/page.jsx
    excerpt:
      "Guía paso a paso para mejorar el rendimiento de tus juegos usando herramientas de IA sin perder calidad.",
    href: "/articulos/posts/ia_fps", // ruta real del artículo
  },

  // Ark Raiders
  {
    slug: "posts/ark-raiders",
    title: "ARK Raiders: cómo la IA está llevando el gameplay a otro nivel",
    date: "2025-11-14",
    readingTime: "6 min",
    excerpt:
      "Probamos Ark Raiders y te contamos qué tal se siente en 2025, tanto en gameplay como en rendimiento.",
    href: "/articulos/posts/ark-raiders",
  },
];
