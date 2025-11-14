// app/articulos/page.js
import Link from 'next/link';
import { posts } from './posts';

export default function ArticulosPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold mb-8">Artículos</h1>

      {/* GRID DE TARJETAS */}
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={post.href}          // 👈 AHORA USAMOS LA RUTA REAL
            className="group"
          >
            <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-sm hover:border-emerald-400/70 hover:shadow-lg transition">
              {/* Banner simple por ahora */}
              <div className="h-32 bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:from-emerald-700/60 group-hover:to-zinc-900 transition-colors" />

              <div className="p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-400">
                  {post.date}
                  {post.readTime ? ` · ${post.readTime}` : ''}
                </p>

                <h2 className="mt-1 text-lg font-semibold text-white group-hover:text-emerald-300">
                  {post.title}
                </h2>

                {post.excerpt && (
                  <p className="mt-2 text-sm text-zinc-300">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
