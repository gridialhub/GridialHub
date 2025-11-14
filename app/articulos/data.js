// app/articulos/data.js

// Importamos cada artículo desde su archivo
import { post as iaFps } from "./posts/ia-fps";
import { post as arkRaiders } from "./posts/ark-raiders";

// Array de posts
export const posts = [iaFps, arkRaiders].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

// Helper para obtener un artículo por su slug
export function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
