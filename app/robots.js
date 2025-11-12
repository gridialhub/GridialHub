export default function robots() {
  const baseUrl = "https://gridialhub.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/drafts/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
