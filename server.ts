import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 1. Anti-AdBlock Endpoint replicating the PHP AntiAdBlock Class 100% in TypeScript
  app.get('/antiadblock.js', async (req, res) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout for stability

    try {
      const userAgent = req.headers['user-agent'] || '';
      // PHP matching: mobi, ipad, iphone, blackberry, android
      const isMobile = /mobi|ipad|iphone|blackberry|android/i.test(userAgent);
      
      // Select Zone: Desktop 7333897, Mobile 7333901
      const zoneId = isMobile ? '7333901' : '7333897';
      const key = 'sENFdVR1mxw4ZEdtWef7Wose2467BuPIJVETa7AZGDciHhNUA5H9Yf3FWtcpJl9I';
      
      const url = `https://api.hilltopads.com/publisher/antiAdBlock?zoneId=${zoneId}&key=${key}&version=1.0&transport=1`;
      
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'HilltopAds Anti-AdBlock Client/1.0',
        },
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HilltopAds API error: ${response.status}`);
      }
      
      const data = await response.json();
      const code = data?.result?.code || '';
      
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.send(code || '/* No code returned */');
    } catch (err) {
      clearTimeout(timeoutId);
      console.error('AntiAdBlock backend handler error:', err);
      // Clean silent fallback if API fails or times out (crucial for Googlebot)
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=600');
      res.send(`(function(){ window.__ijtiaz_antiadblock_ready = true; console.log("AntiAdblock fallback active"); })();`);
    }
  });

  // 2. Health check route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Country SEO definitions for Programmatic SEO Dynamic Metadata Injection - 26 countries + Global Portal
  const GLOBAL_SEO = {
    title: "منصة اجتياز | المحاكي العربي والعالمي لاختبارات القيادة النظرية 2026",
    description: "المنصة الأولى المعتمدة للتدرب على اختبارات رخصة القيادة النظرية، إشارات المرور، ونظام المخالفات في 26 دولة عربية وعالمية (السعودية، الإمارات، مصر، أمريكا، بريطانيا، كندا، والمزيد). محاكاة واقعية 100% مجاناً."
  };

  const COUNTRY_SEO: Record<string, { title: string; description: string }> = {
    sa: {
      title: "محاكي اختبار القيادة النظري السعودي (مدرسة دله) | منصة اجتياز",
      description: "تدرب مجاناً على اختبار القيادة النظري السعودي (مدارس دلة والنموذجية). أسئلة محاكاة رسمية ومحدثة لإشارات المرور والمخالفات وقواعد السير بالملكة."
    },
    ae: {
      title: "امتحان المعرفة التجريبي في الإمارات RTA دبي | منصة اجتياز",
      description: "محاكاة اختبار رخصة القيادة النظري دبي وأبوظبي المعتمد من هيئة الطرق والمواصلات RTA. نماذج أسئلة إشارات وقوانين المرور في الإمارات."
    },
    eg: {
      title: "امتحان المرور النظري التجريبي مصر (كمبيوتر) | منصة اجتياز",
      description: "تدرب الآن على بنك أسئلة الحاسب الآلي النظري المعتمد للحصول على رخصة القيادة المصرية بجميع وحدات التراخيص بالمحافظات."
    },
    kw: {
      title: "اختبار القيادة النظري التجريبي الكويت (وزارة الداخلية) | منصة اجتياز",
      description: "نماذج اختبار رخصة القيادة النظري المعتمد في دولة الكويت. أسئلة قواعد المرور، إشارات السير، والمخالفات المرورية."
    },
    qa: {
      title: "اختبار إشارات المرور وقواعد السير قطر (أكاديمية دله) | منصة اجتياز",
      description: "تدرب على فحص الإشارات والنظري في الدوحة وأكاديمية دلة لتعليم القيادة بقطر. اختبارات محاكاة تفاعلية مطابقة للامتحان الرسمي."
    },
    jo: {
      title: "الاختبار النظري لفحص السائقين الأردن (إدارة الترخيص) | منصة اجتياز",
      description: "محاكي الفحص النظري المحوسب لتعليم القيادة المعتمد لدى إدارة ترخيص السواقين والمركبات بالأردن. أسئلة وإشارات المرور المحدثة."
    },
    ma: {
      title: "محاكاة امتحان السياقة التجريبي بالمغرب (التشوير الطرقي) | منصة اجتياز",
      description: "اجتاز فحص رخصة السياقة بالمغرب بنجاح مع نماذج الأسئلة الجديدة المعتمدة من الوكالة الوطنية للسلامة الطرقية NARSA وموقع كود سياقة."
    },
    dz: {
      title: "امتحان رخصة السياقة بالجزائر التجريبي (قانون المرور) | منصة اجتياز",
      description: "اجتز امتحان رخصة السياقة بالجزائر 2026 بسهولة. تدرب مجاناً على أسئلة قانون المرور الجزائري، التشوير الطرقي، وقواعد الأسبقية والقيادة الوقائية."
    },
    om: {
      title: "اختبار القيادة النظري سلطنة عمان (شرطة عمان السلطانية) | منصة اجتياز",
      description: "دليلك لاجتياز فحص رخصة القيادة النظري بشرطة عمان السلطانية. أسئلة محاكاة رسمية لقواعد المرور والإشارات المرورية والمخالفات في سلطنة عمان."
    },
    tn: {
      title: "امتحان رخصة السياقة بتونس (قانون الطرقات للوكالة الفنية) | منصة اجتياز",
      description: "محاكاة مجانية لامتحان قانون الطرقات بتونس المعتمد لدى الوكالة الفنية للنقل البري. تدرب على أسئلة فحص رخصة السياقة والإشارات المرورية."
    },
    iq: {
      title: "امتحان السوق النظري التجريبي العراق (مديرية المرور العامة) | منصة اجتياز",
      description: "تدرب الآن مجاناً على أسئلة اختبار إجازة السوق النظري بمديرية المرور العامة العراقية. محاكي للامتحان الإلكتروني وإشارات المرور وقواعد القيادة."
    },
    bh: {
      title: "اختبار السياقة النظري مملكة البحرين (المرور البحريني) | منصة اجتياز",
      description: "محاكاة ذكية لاختبار السياقة النظري المحوسب المعتمد لدى الإدارة العامة للمرور بالبحرين. تدرب على أسئلة القواعد وعلامات المرور لضمان النجاح."
    },
    lb: {
      title: "امتحان السوق النظري في لبنان (هيئة إدارة السير) | منصة اجتياز",
      description: "استعد لاجتياز فحص القيادة بلبنان مع محاكي امتحان السوق النظري المعتمد من هيئة إدارة السير والآليات والمركبات. أسئلة قواعد المرور والسلامة."
    },
    ps: {
      title: "فحص التؤوريا الفلسطيني النظري التجريبي (سلطة الترخيص) | منصة اجتياز",
      description: "اجتز فحص التؤوريا النظري في فلسطين بسهولة. نماذج اختبارات مجانية تفاعلية مطابقة لأسئلة سلطة الترخيص ووزارة النقل والمواصلات الفلسطينية."
    },
    sy: {
      title: "الاختبار النظري لفحص قيادة المركبات في سوريا (وزارة النقل) | منصة اجتياز",
      description: "دليلك لاجتياز الفحص النظري لتعليم قيادة المركبات في سوريا المعتمد لدى وزارة النقل السورية. تدرب على أسئلة قانون السير والسياقة وعلامات المرور مجاناً."
    },
    ye: {
      title: "فحص رخصة القيادة النظري باليمن (شرطة السير) | منصة اجتياز",
      description: "محاكاة اختبار رخصة القيادة النظري لشرطة السير بوزارة الداخلية اليمنية. تدرب على أسئلة قوانين وقواعد السير وعلامات المرور لضمان النجاح."
    },
    sd: {
      title: "امتحان رخصة القيادة السودانية النظري التجريبي (المرور السوداني) | منصة اجتياز",
      description: "استعد لاجتياز فحص رخصة القيادة السودانية المحوسب المعتمد لدى الإدارة العامة للمرور السوداني. أسئلة محاكاة لقواعد السير والسلامة وإشارات المرور."
    },
    ly: {
      title: "امتحان إجازة السوق النظري التجريبي ليبيا (إدارة المرور) | منصة اجتياز",
      description: "تدرب مجاناً على أسئلة فحص رخصة القيادة النظري وإجازة السوق في ليبيا المعتمدة من إدارة المرور والتراخيص بوزارة الداخلية الليبية."
    },
    mr: {
      title: "امتحان رخصة السياقة بموريتانيا (إدارة النقل البري) | منصة اجتياز",
      description: "محاكاة مجانية لامتحان قانون السير ورخصة السياقة في موريتانيا المعتمد لدى مصلحة وإدارة النقل البري. تدرب على أسئلة وإشارات الطرق."
    },
    so: {
      title: "امتحان القيادة النظري الصومال (وزارة النقل) | منصة اجتياز",
      description: "دليلك لاجتياز فحص رخصة القيادة النظري بالصومال المعتمد لدى وزارة النقل والطيران المدني الصومالية. تدرب على أسئلة إشارات وقواعد المرور."
    },
    dj: {
      title: "امتحان قانون السير بجيبوتي (مصلحة النقل البري) | منصة اجتياز",
      description: "استعد للحصول على رخصة السياقة بجيبوتي عبر فحص قانون السير التجريبي المعتمد لدى مصلحة النقل البري بجيبوتي. أسئلة علامات وقواعد المرور."
    },
    km: {
      title: "الاختبار النظري لرخصة السياقة جزر القمر (النقل البري) | منصة اجتياز",
      description: "تدرب مجاناً على فحص قواعد وإشارات السير النظري بجزر القمر المعتمد لدى إدارة النقل البري الوطنية. محاكاة شاملة لضمان التفوق."
    },
    us: {
      title: "اختبار القيادة النظري الأمريكي التجريبي DMV Practice Test | منصة اجتياز",
      description: "تدرب على امتحان رخصة القيادة النظري في أمريكا (DMV). 50 سؤالاً مترجماً بدقة مع إشارات المرور وقوانين القيادة الآمنة في جميع الولايات."
    },
    gb: {
      title: "اختبار القيادة النظري البريطاني DVSA Theory Test بالعربي | منصة اجتياز",
      description: "تدرب على اختبار القيادة النظري في بريطانيا DVSA باللغة العربية مع نماذج أسئلة إشارات الطرق وإدراك المخاطر."
    },
    ca: {
      title: "اختبار القيادة النظري الكندي G1 / Knowledge Test | منصة اجتياز",
      description: "نماذج اختبار رخصة القيادة النظرية في كندا (أونتاريو وكيبيك وكولومبيا البريطانية) مع بنك أسئلة قوانين وعلامات الطرق."
    },
    au: {
      title: "اختبار القيادة النظري الأسترالي DKT Driver Knowledge Test | منصة اجتياز",
      description: "محاكي امتحان معرفة القيادة في أستراليا (DKT) باللغة العربية مع أسئلة قواعد المرور وإشارات السير."
    }
  };

  function injectMetadata(html: string, countryCode?: string, req?: express.Request): string {
    const isGlobal = !countryCode || countryCode.toLowerCase() === 'global';
    const seo = isGlobal
      ? GLOBAL_SEO
      : COUNTRY_SEO[countryCode.toLowerCase()] || COUNTRY_SEO.sa;

    const protocol = req?.headers['x-forwarded-proto'] || req?.protocol || 'https';
    const host = req?.get('host') || 'ijtiaz.vercel.app';
    const baseUrl = `${protocol}://${host}`;
    const pageUrl = isGlobal ? `${baseUrl}/` : `${baseUrl}/${countryCode.toLowerCase()}`;
    const imageUrl = `${baseUrl}/og-image.jpg?v=2026`;

    let modifiedHtml = html;

    // Replace <title>
    const titleRegex = /<title>[^<]*<\/title>/i;
    const newTitle = `<title>${seo.title}</title>`;
    if (titleRegex.test(modifiedHtml)) {
      modifiedHtml = modifiedHtml.replace(titleRegex, newTitle);
    } else {
      modifiedHtml = modifiedHtml.replace('</head>', `    ${newTitle}\n  </head>`);
    }

    // Replace description meta tag
    const descRegex = /<meta name="description" content="[^"]*"\s*\/?>/i;
    const newDesc = `<meta name="description" content="${seo.description}" />`;
    if (descRegex.test(modifiedHtml)) {
      modifiedHtml = modifiedHtml.replace(descRegex, newDesc);
    } else {
      modifiedHtml = modifiedHtml.replace('</head>', `    ${newDesc}\n  </head>`);
    }

    // Replace Open Graph og:title
    const ogTitleRegex = /<meta property="og:title" content="[^"]*"\s*\/?>/i;
    const newOgTitle = `<meta property="og:title" content="${seo.title}" />`;
    if (ogTitleRegex.test(modifiedHtml)) {
      modifiedHtml = modifiedHtml.replace(ogTitleRegex, newOgTitle);
    }

    // Replace Open Graph og:description
    const ogDescRegex = /<meta property="og:description" content="[^"]*"\s*\/?>/i;
    const newOgDesc = `<meta property="og:description" content="${seo.description}" />`;
    if (ogDescRegex.test(modifiedHtml)) {
      modifiedHtml = modifiedHtml.replace(ogDescRegex, newOgDesc);
    }

    // Replace og:url
    const ogUrlRegex = /<meta property="og:url" content="[^"]*"\s*\/?>/i;
    const newOgUrl = `<meta property="og:url" content="${pageUrl}" />`;
    if (ogUrlRegex.test(modifiedHtml)) {
      modifiedHtml = modifiedHtml.replace(ogUrlRegex, newOgUrl);
    }

    // Replace og:image
    const ogImgRegex = /<meta property="og:image" content="[^"]*"\s*\/?>/i;
    const newOgImg = `<meta property="og:image" content="${imageUrl}" />`;
    if (ogImgRegex.test(modifiedHtml)) {
      modifiedHtml = modifiedHtml.replace(ogImgRegex, newOgImg);
    }

    // Replace twitter:image
    const twImgRegex = /<meta name="twitter:image" content="[^"]*"\s*\/?>/i;
    const newTwImg = `<meta name="twitter:image" content="${imageUrl}" />`;
    if (twImgRegex.test(modifiedHtml)) {
      modifiedHtml = modifiedHtml.replace(twImgRegex, newTwImg);
    }

    return modifiedHtml;
  }

  // 3. SEO Static Files & Google Site Verification
  app.get('/favicon.ico', (req, res) => {
    const icoDist = path.join(process.cwd(), 'dist', 'favicon.ico');
    const icoPublic = path.join(process.cwd(), 'public', 'favicon.ico');
    const target = fs.existsSync(icoDist) ? icoDist : icoPublic;
    if (fs.existsSync(target)) {
      res.setHeader('Content-Type', 'image/x-icon');
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      res.sendFile(target);
    } else {
      res.status(204).end();
    }
  });

  app.get('/googled26e0b9780f8aa69.html', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.send('google-site-verification: googled26e0b9780f8aa69.html');
  });

  app.get('/robots.txt', (req, res) => {
    const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
    if (fs.existsSync(robotsPath)) {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.send(fs.readFileSync(robotsPath, 'utf-8'));
    } else {
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.send(`User-agent: *\nAllow: /\n\nSitemap: https://ijtiaz.vercel.app/sitemap.xml\n`);
    }
  });

  app.get('/sitemap.xml', (req, res) => {
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    if (fs.existsSync(sitemapPath)) {
      res.setHeader('Content-Type', 'application/xml; charset=utf-8');
      res.setHeader('Cache-Control', 'public, max-age=3600');
      res.send(fs.readFileSync(sitemapPath, 'utf-8'));
    } else {
      res.status(404).send('Sitemap not found');
    }
  });

  // Direct subviews fallback (e.g. /test, /signs, /violations, /history) -> redirect to /sa/subview
  app.get('/:directView(test|signs|violations|history)', (req, res) => {
    res.redirect(`/${req.params.directView}`);
  });

  // 4. Initialize Vite dev server or setup static paths
  let vite: any;
  if (process.env.NODE_ENV !== 'production') {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
  }

  // 5. Dynamic Country-Specific SEO Routes with fallback subview support (e.g. /sa, /sa/signs, /eg/violations)
  app.get('/:countryCode(sa|ae|eg|kw|qa|jo|us|gb|ca|au|ma|dz|om|tn|iq|bh|lb|ps|sy|ye|sd|ly|mr|so|dj|km)/:subview?', async (req, res, next) => {
    const { countryCode } = req.params;
    try {
      let html = '';
      if (process.env.NODE_ENV !== 'production' && vite) {
        const rawHtml = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf-8');
        html = await vite.transformIndexHtml(req.originalUrl, rawHtml);
      } else {
        html = fs.readFileSync(path.join(process.cwd(), 'dist/index.html'), 'utf-8');
      }

      const seoHtml = injectMetadata(html, countryCode, req);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.status(200).send(seoHtml);
    } catch (err) {
      console.error(`Error rendering localized SEO page for country ${countryCode}:`, err);
      next();
    }
  });

  // 6. Global Portal Homepage (Root /)
  app.get('/', async (req, res, next) => {
    try {
      let html = '';
      if (process.env.NODE_ENV !== 'production' && vite) {
        const rawHtml = fs.readFileSync(path.join(process.cwd(), 'index.html'), 'utf-8');
        html = await vite.transformIndexHtml(req.originalUrl, rawHtml);
      } else {
        html = fs.readFileSync(path.join(process.cwd(), 'dist/index.html'), 'utf-8');
      }

      const seoHtml = injectMetadata(html, 'global', req);
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.status(200).send(seoHtml);
    } catch (err) {
      console.error('Error rendering Global Portal page:', err);
      next();
    }
  });

  // 5. Serve remaining static assets and wildcard routing
  if (process.env.NODE_ENV !== 'production') {
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      // Default fallback
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Server] Platform routing active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
