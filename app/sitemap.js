export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://actaldigital.com';

  const routes = [
    '',
    '/about-us',
    '/careers',
    '/contact',
    '/work',
    '/services',
    '/services/webDevelopment',
    '/services/DigitalMarketing',
    '/services/SocialMedia',
    '/services/GraphicDesign',
    '/services/CreativeContent',
    '/services/SEO',
    '/services/ORM',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
