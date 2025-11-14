// app/articulos/[slug]/page.jsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '../posts';

export default function ArticuloPage({ params }) {
  const { slug } = params;

  // buscamos el post que coincida con el slug de la URL
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Link
        href="/articulos"
        className="inline-block mb-6 text-sm text-gray-400 hover:text-gray-200"
      >
        ← Volver a artículos
      </Link>

      <article>
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

        {post.date && (
          <p className="text-sm text-gray-400 mb-4">
            {post.date} {post.readTime ? `· ${post.readTime}` : ''}
          </p>
        )}

        {post.excerpt && (
          <p className="text-lg text-gray-200 mb-6">{post.excerpt}</p>
        )}

        {/* contenido principal */}
        {Array.isArray(post.content) ? (
          post.content.map((parrafo, idx) => (
            <p key={idx} className="mb-4 leading-relaxed text-gray-200">
              {parrafo}
            </p>
          ))
        ) : (
          post.content && (
            <p className="mb-4 leading-relaxed text-gray-200">
              {post.content}
            </p>
          )
        )}
      </article>
    </main>
  );
}
