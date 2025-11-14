// app/articulos/page.js
import Link from 'next/link';

// Metemos los artículos directo aquí para evitar peos de imports.
const posts = [
  {
    slug: 'ia-fps',
    title: 'Cómo usar IA para subir FPS en tus juegos',
    meta: '14 de noviembre de 2025 · 5 min',
    excerpt:
      'Guía paso a paso para mejorar el rendimiento de tus juegos usando herramientas de IA sin perder calidad.',
    href: '/articulos/posts/ia_fps', // ruta REAL de tu artículo
  },
  {
    slug: 'ark-raiders',
    title: 'Primeras impresiones de Ark Raiders',
    meta: '14 de noviembre de 2025 · 6 min',
    excerpt:
      'Probamos Ark Raiders y te contamos qué tal se siente en 2025, tanto en gameplay como en rendimiento.',
    href: '/articulos/posts/ark-raiders',
  },
];

export default function ArticulosPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      {/* CONTENEDOR TIPO “ÚLTIMOS ARTÍCULOS” */}
      <section className="rounded-3xl border border-purple-900/40 bg-black/40 p-6 md:p-8 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-extrabold">
            Artículos
          </h1>
        </div>

        {/* GRID DE FICHAS */}
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="group h-full"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 hover:border-purple-400/70 transition">
                {/* parte superior: degradado tipo miniatura */}
                <div className="h-28 bg-gradient-to-br from-sky-500/60 via-purple-500/60 to-pink-500/60 group-hover:brightness-110 transition" />

                {/* contenido */}
                <div className="flex flex-1 flex-col px-4 py-4">
                  <h2 className="text-base md:text-lg font-semibold mb-1 group-hover:text-emerald-300">
                    {post.title}
                  </h2>

                  <p className="text-xs text-zinc-400 mb-3">
                    {post.meta}
                  </p>

                  <p className="text-sm text-zinc-300">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
