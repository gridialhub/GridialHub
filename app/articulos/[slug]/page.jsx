// app/articulos/[slug]/page.jsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '../data';

export default function ArticuloPage({ params }) {
  const { slug } = params;

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Link
        href="/articulos/posts"
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

        {post.image && (
          <div className="mb-6">
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-lg"
            />
          </div>
        )}

        {post.excerpt && (
          <p className="text-lg text-gray-200 mb-6">{post.excerpt}</p>
        )}

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
