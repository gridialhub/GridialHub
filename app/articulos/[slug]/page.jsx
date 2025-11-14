// app/articulos/[slug]/page.jsx
import { notFound } from 'next/navigation';

// Importamos los componentes de cada artículo
import IaFpsArticle from '../posts/ia_fps/page';
import ArkRaidersArticle from '../posts/ark-raiders/page';

// Mapeamos el slug de la URL al componente que ya existe
const articleMap = {
  'ia-fps': IaFpsArticle,
  'ark-raiders': ArkRaidersArticle,
};

export default function ArticuloPage({ params }) {
  const { slug } = params;

  const ArticleComponent = articleMap[slug];

  if (!ArticleComponent) {
    notFound();
  }

  return <ArticleComponent />;
}
