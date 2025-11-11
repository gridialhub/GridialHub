export default function sitemap() {
  const base = "https://gridialhub.com";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/sorteos`, lastModified: new Date() },
    { url: `${base}/articulos`, lastModified: new Date() },
    { url: `${base}/resultados`, lastModified: new Date() },
    { url: `${base}/bases`, lastModified: new Date() },
    { url: `${base}/contacto`, lastModified: new Date() },
  ];
}

