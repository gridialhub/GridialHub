// app/articulos/page.jsx
import Link from 'next/link';
import { posts } from './posts';

export default function ArticulosPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Artículos</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-700 rounded-lg p-4 hover:border-gray-400 transition"
          >
            <Link href={`/articulos/${post.slug}`}>
              <h2 className="text-xl font-semibold mb-1">
                {post.title}
              </h2>
            </Link>

            {post.excerpt && (
              <p className="text-sm text-gray-300 mb-2">
                {post.excerpt}
              </p>
            )}

            {post.date && (
              <p className="text-xs text-gray-500">
                {post.date} {post.readTime ? `· ${post.readTime}` : ''}
              </p>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
