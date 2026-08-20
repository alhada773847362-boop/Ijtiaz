import fs from 'fs';
import path from 'path';

const countryIds = [
  'sa', 'ae', 'eg', 'kw', 'qa', 'jo', 'om', 'bh', 'iq', 
  'dz', 'ma', 'tn', 'ye', 'sd', 'ly', 'sy', 'lb', 'ps', 
  'mr', 'so', 'dj', 'km', 'us', 'gb', 'ca', 'au'
];

const subPaths = ['', '/test', '/signs', '/violations', '/history'];
const baseUrl = 'https://ijtiaz.vercel.app';
const lastMod = '2026-08-20';

let urlsXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Core Root Entry -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/" />
    <image:image>
      <image:loc>${baseUrl}/og-image.jpg</image:loc>
      <image:title>منصة اجتياز - محاكي اختبار القيادة النظري الرسمي</image:title>
    </image:image>
  </url>
`;

// Generate country pages and subviews
countryIds.forEach((cId) => {
  const isTopTier = ['sa', 'ae', 'eg', 'kw', 'qa', 'jo', 'us'].includes(cId);
  const basePriority = isTopTier ? 0.9 : 0.8;

  subPaths.forEach((sub) => {
    let priority = basePriority;
    let changefreq = 'weekly';

    if (sub === '') {
      priority = basePriority;
      changefreq = 'daily';
    } else if (sub === '/signs' || sub === '/test') {
      priority = Math.max(0.7, basePriority - 0.1);
      changefreq = 'weekly';
    } else {
      priority = 0.6;
      changefreq = 'monthly';
    }

    const fullUrl = `${baseUrl}/${cId}${sub}`;

    urlsXml += `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
    <xhtml:link rel="alternate" hreflang="ar" href="${fullUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${fullUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${fullUrl}" />
    <image:image>
      <image:loc>${baseUrl}/og-image.jpg</image:loc>
      <image:title>اختبار القيادة النظري - ${cId.toUpperCase()}</image:title>
    </image:image>
  </url>\n`;
  });
});

urlsXml += `</urlset>\n`;

fs.writeFileSync(path.resolve('./public/sitemap.xml'), urlsXml, 'utf-8');
console.log('Successfully generated comprehensive public/sitemap.xml with ' + (countryIds.length * subPaths.length + 1) + ' URLs!');
