export default function sitemap() {
  const baseUrl = "https://gridialhub.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sorteos`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articulos`,
      lastModified: new Date(),
      changefreq: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resultados`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/bases`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.5,
    },
  ];
}
