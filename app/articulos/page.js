// app/articulos/page.js
import Link from 'next/link';
import { posts } from './posts';

// Formateador de fecha en español (para que se vea "14 de noviembre de 2025")
const formatter = new Intl.DateTimeFormat('es-VE', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
});

export default function ArticulosPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <section className="rounded-3xl border border-purple-900/50 bg-black/40 p-6 md:p-8 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-extrabold">
            Artículos
          </h1>
        </div>

        {/* GRID DE FICHAS  */}
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.href}
              className="group h-full"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70">
                {/* PARTE SUPERIOR CON DEGRADADO (miniatura) */}
                <div className="h-28 bg-gradient-to-br from-sky-500/60 via-purple-500/60 to-pink-500/60 group-hover:brightness-110 transition" />

                {/* CONTENIDO DE LA TARJETA */}
                <div className="flex flex-1 flex-col px-4 py-4">
                  <h2 className="text-base md:text-lg font-semibold mb-1 group-hover:text-emerald-300">
                    {post.title}
                  </h2>

                  <p className="text-xs text-zinc-400 mb-3">
                    {formatter.format(new Date(post.date))}
                    {post.readTime ? ` · ${post.readTime}` : ''}
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
