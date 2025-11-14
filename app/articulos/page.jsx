// app/articulos/page.jsx
import Link from 'next/link';
import { posts } from './posts';

export default function ArticulosPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Artículos</h1>

      {/* Grid de fichas */}
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/articulos/${post.slug}`}
            className="group block rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 hover:border-zinc-500 hover:bg-zinc-900 transition"
          >
            {/* Encabezado: fecha y tiempo de lectura */}
            <p className="text-xs uppercase tracking-wide text-zinc-400">
              {post.date}
              {post.readTime ? ` · ${post.readTime}` : ''}
            </p>

            {/* Título */}
            <h2 className="mt-2 text-lg font-semibold text-white group-hover:text-emerald-300">
              {post.title}
            </h2>

            {/* Descripción corta */}
            {post.excerpt && (
              <p className="mt-2 text-sm text-zinc-300">
                {post.excerpt}
              </p>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
