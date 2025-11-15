// app/articulos/page.js
import Link from "next/link";

// Metemos los artículos directo aquí para evitar enredos con imports
const posts = [
  {
    slug: "ia-fps",
    title: "Cómo usar IA para subir FPS en tus juegos",
    meta: "14 de noviembre de 2025 · 5 min",
    excerpt:
      "Guía paso a paso para mejorar el rendimiento de tus juegos usando herramientas de IA sin perder calidad.",
    href: "/articulos/posts/ia_fps",        // ruta REAL del artículo
    // Ruta de la miniatura (ajústala al nombre real de tu imagen)
    image: "/articulos/ia_fps-miniatura.jpg",
    thumbClass: "thumb-pc",                 // fallback si no hay imagen
  },
  {
    slug: "ark-raiders",
    title: "Primeras impresiones de Ark Raiders",
    meta: "14 de noviembre de 2025 · 6 min",
    excerpt:
      "Probamos Ark Raiders y te contamos qué tal se siente en 2025, tanto en gameplay como en rendimiento.",
    href: "/articulos/posts/ark-raiders",
    image: "/articulos/ark-raiders-miniatura.jpg",
    thumbClass: "thumb-game",
  },
];

export default function ArticulosPage() {
  return (
    <main className="container page-fade">
      {/* TÍTULO CENTRADO */}
      <h1
        style={{
          textAlign: "center",
          marginBottom: 24,
          fontSize: "clamp(32px, 4vw, 42px)",
        }}
      >
        Artículos
      </h1>

      {/* CONTENEDOR TIPO CARD GRA*
