export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://zachary-thatcher-portfolio.vercel.app/sitemap.xml',
    host: 'https://zachary-thatcher-portfolio.vercel.app',
  };
}
