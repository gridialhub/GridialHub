// app/articulos/page.js
import Link from 'next/link';
import Image from 'next/image';
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
            href={`/articulos/${post.slug}`}
            className="group"
          >
            <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-sm hover:border-emerald-400/70 hover:shadow-lg transition">
              {/* Zona de banner / miniatura */}
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900" />
                )}

                {/* Degradado + texto sobre la imagen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-xs text-zinc-300">
                    {post.date}
                    {post.readTime ? ` · ${post.readTime}` : ''}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-white group-hover:text-emerald-300">
                    {post.title}
                  </h2>
                </div>
              </div>

              {/* Descripción debajo */}
              {post.excerpt && (
                <p className="px-4 py-3 text-sm text-zinc-300">
                  {post.excerpt}
                </p>
              )}
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
