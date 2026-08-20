import { CountryInfo, CountryId } from '../types';
import { COUNTRY_TRANSLATIONS } from '../data/translations';

export interface SeoConfig {
  country: CountryInfo;
  view: 'home' | 'test' | 'results' | 'signs' | 'violations' | 'history' | 'global_home';
  locale: 'ar' | 'en';
  isGlobalHome?: boolean;
}

const BASE_URL = 'https://ijtiaz.vercel.app';

export function updatePageSeo({ country, view, locale, isGlobalHome = false }: SeoConfig) {
  if (typeof document === 'undefined') return;

  const isAr = locale === 'ar';
  const countryName = isAr
    ? country.name
    : COUNTRY_TRANSLATIONS[country.id]?.name || country.name;
  const popularSchool = isAr
    ? country.popularSchool || country.authority
    : COUNTRY_TRANSLATIONS[country.id]?.popularSchool || country.popularSchool || country.authority;
  const authority = isAr
    ? country.authority
    : COUNTRY_TRANSLATIONS[country.id]?.authority || country.authority;

  // 1. Build Targeted Title & Canonical
  let pageTitle = '';
  let metaDescription = '';
  let metaKeywords = '';
  let subPath = '';

  if (isGlobalHome || view === 'global_home') {
    subPath = '';
    if (isAr) {
      pageTitle = 'منصة اجتياز | المحاكي العربي والعالمي لاختبارات القيادة النظرية 2026';
      metaDescription = 'المنصة الأولى المعتمدة للتدرب على اختبارات رخصة القيادة النظرية، إشارات المرور، ونظام المخالفات في 26 دولة عربية وعالمية (السعودية، الإمارات، مصر، أمريكا، بريطانيا، كندا، والمزيد). محاكاة واقعية 100% مجاناً.';
      metaKeywords = 'اختبار القيادة النظري, امتحان السواقة النظري, اسئلة دله, اختبار المرور, رخصة القيادة, اشارات المرور, DMV test in Arabic, driving theory test 2026, اجتياز';
    } else {
      pageTitle = 'Ijtiaz Platform | Global Driving Theory Test & Road Signs Simulator 2026';
      metaDescription = 'The #1 driving theory test simulator covering 26 countries. Practice official mock exams for Saudi Arabia, UAE, Egypt, USA, UK, Canada, Australia, and more. 100% free.';
      metaKeywords = 'driving theory test, DMV practice test, RTA theory test, Dallah driving test, road signs catalog, driving test simulator 2026';
    }
  } else if (view === 'home') {
    subPath = `/${country.id}`;
    if (isAr) {
      pageTitle = `اختبار القيادة النظري ${countryName} 2026 | نماذج ${popularSchool} الرسمية - اجتياز`;
      metaDescription = `تدرب مجاناً على محاكي اختبار القيادة النظري في ${countryName} المعتمد لدى ${authority}. نماذج محوسبة مطابقة للاختبار الفعلي، ${country.totalOfficialQuestions} سؤالاً، نسبة نجاح ${country.passingScorePercentage}%، وشرح لجميع إشارات المرور.`;
      metaKeywords = `اختبار القيادة النظري ${countryName}, امتحان المرور التجريبي ${countryName}, ${popularSchool}, اسئلة رخصة القيادة ${countryName}, اشارات المرور, اختبار دله, فحص السواقة النظري 2026`;
    } else {
      pageTitle = `${countryName} Driving Theory Test 2026 | Official ${popularSchool} Simulator - Ijtiaz`;
      metaDescription = `Free official driving theory test simulator for ${countryName} (${authority}). Practice with ${country.totalOfficialQuestions} real exam questions, ${country.passingScorePercentage}% passing grade, and detailed road signs guide.`;
      metaKeywords = `${countryName} driving theory test, ${popularSchool} practice test, DMV test in Arabic, road signs guide, driving license test 2026`;
    }
  } else if (view === 'test') {
    subPath = `/${country.id}/test`;
    if (isAr) {
      pageTitle = `بدء محاكي اختبار القيادة النظري الفعلي (${countryName}) | بنك الأسئلة والمؤقت - اجتياز`;
      metaDescription = `ابدأ الآن جلسة محاكاة حقيقية لاختبار رخصة القيادة النظري في ${countryName}. مؤقت زمني ${country.timeLimitMinutes} دقيقة، تقييم فوري، وتصحيح تلقائي لجميع الإجابات.`;
      metaKeywords = `بدء اختبار القيادة ${countryName}, محاكي امتحان المرور, اسئلة دله اونلاين, تدريب رخصة القيادة`;
    } else {
      pageTitle = `Start Official Driving Theory Exam (${countryName}) | Timed Simulation - Ijtiaz`;
      metaDescription = `Start your realistic timed driving theory practice test for ${countryName}. ${country.timeLimitMinutes} minutes, instant score feedback, and question review.`;
      metaKeywords = `start driving test ${countryName}, DMV test simulator, mock theory exam`;
    }
  } else if (view === 'signs') {
    subPath = `/${country.id}/signs`;
    if (isAr) {
      pageTitle = `دليل إشارات المرور الشامل بالصور والشرح (${countryName}) | منصة اجتياز`;
      metaDescription = `دليل كامل ومحدث لجميع إشارات وعلامات المرور في ${countryName}: الإشارات التحذيرية، التنظيمية المانعة، الإلزامية، والإرشادية مع معانيها وأسئلة الاختبار المتعلقة بها.`;
      metaKeywords = `اشارات المرور ${countryName}, علامات الطرق, اشارات تحذيرية, اشارات مانعة, اشارات دله المرورية`;
    } else {
      pageTitle = `Complete Traffic & Road Signs Guide (${countryName}) with Images - Ijtiaz`;
      metaDescription = `Comprehensive road traffic signs catalog for ${countryName}: Warning, Regulatory, Mandatory, and Priority signs with high-definition diagrams.`;
      metaKeywords = `traffic signs ${countryName}, road signs catalog, driving test signs`;
    }
  } else if (view === 'violations') {
    subPath = `/${country.id}/violations`;
    if (isAr) {
      pageTitle = `جدول المخالفات المرورية ونظام النقاط والغرامات (${countryName}) 2026 | اجتياز`;
      metaDescription = `تعرف على جدول المخالفات المرورية الرسمي في ${countryName}، الغرامات المالية المقررة، ونظام سحب النقاط لتجنب حسم الرخصة والقيادة بأمان.`;
      metaKeywords = `مخالفات المرور ${countryName}, غرامات السير, جدول النقاط المرورية, لوائح المرور 2026`;
    } else {
      pageTitle = `Traffic Violations, Penalties & Demerit Points Table (${countryName}) - Ijtiaz`;
      metaDescription = `Official traffic violations and fines schedule for ${countryName}. Learn the demerit point system, speeding penalties, and safe driving rules.`;
      metaKeywords = `traffic fines ${countryName}, demerit points system, driving violations`;
    }
  } else if (view === 'history') {
    subPath = `/${country.id}/history`;
    pageTitle = isAr ? `سجل نتائج اختباراتي ومعدل التقدم | منصة اجتياز` : `My Test History & Performance Analytics | Ijtiaz`;
    metaDescription = isAr ? `تابع سجل اختباراتك التجريبية، إحصائيات معدل النجاح، ونقاط القوة والضعف في أسئلة الإشارات وقواعد السير.` : `Track your past test history, success rate statistics, and improve your driving theory test scores.`;
    metaKeywords = `سجل الاختبارات, نتائج امتحان القيادة, تقييم مستوى القيادة`;
  } else if (view === 'results') {
    subPath = `/${country.id}/test`;
    pageTitle = isAr ? `نتيجة اختبار القيادة النظري والتقييم | منصة اجتياز` : `Driving Test Exam Results & Review | Ijtiaz`;
    metaDescription = isAr ? `تقرير نتيجة الاختبار النظري، مراجعة الإجابات الصحيحة والخاطئة، والتفسير المروري لكل سؤال.` : `Detailed test score report, correct answers review, and question explanations.`;
    metaKeywords = `نتيجة اختبار القيادة, درجات دله, مراجعة الاسئلة الخاطئة`;
  }

  const canonicalUrl = `${BASE_URL}${subPath}`;

  // 2. Set Document Title
  document.title = pageTitle;

  // 3. Helper to update/create meta tag
  const setMeta = (name: string, content: string, isProperty = false) => {
    const attr = isProperty ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 4. Update Standard SEO Meta
  setMeta('title', pageTitle);
  setMeta('description', metaDescription);
  setMeta('keywords', metaKeywords);

  // 5. Update Open Graph Meta
  setMeta('og:title', pageTitle, true);
  setMeta('og:description', metaDescription, true);
  setMeta('og:url', canonicalUrl, true);
  setMeta('og:site_name', isAr ? 'منصة اجتياز لاختبار القيادة النظري' : 'Ijtiaz Driving Test Simulator', true);
  setMeta('og:locale', isAr ? 'ar_SA' : 'en_US', true);
  setMeta('og:type', 'website', true);
  setMeta('og:image', `${BASE_URL}/og-image.jpg?v=2026`, true);

  // 6. Update Twitter Card Meta
  setMeta('twitter:title', pageTitle);
  setMeta('twitter:description', metaDescription);
  setMeta('twitter:url', canonicalUrl);
  setMeta('twitter:image', `${BASE_URL}/og-image.jpg?v=2026`);

  // 7. Update Canonical Link
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute('href', canonicalUrl);

  // 8. Inject Dynamic Country/View Specific Schema.org JSON-LD
  const schemaId = 'dynamic-ijtiaz-jsonld';
  let scriptEl = document.getElementById(schemaId) as HTMLScriptElement | null;
  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = schemaId;
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': isAr ? 'منصة اجتياز' : 'Ijtiaz Platform',
      'alternateName': isAr ? 'محاكي اختبار القيادة النظري' : 'Driving Theory Test Simulator',
      'url': BASE_URL,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${BASE_URL}/{search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      'name': isAr ? `دورة واختبار القيادة النظري - ${countryName}` : `${countryName} Driving Theory Course & Exam`,
      'description': metaDescription,
      'provider': {
        '@type': 'Organization',
        'name': isAr ? 'منصة اجتياز' : 'Ijtiaz Platform',
        'sameAs': BASE_URL
      },
      'educationalCredentialAwarded': isAr ? `رخصة قيادة ${countryName}` : `${countryName} Driver License Theory Qualification`,
      'hasCourseInstance': {
        '@type': 'CourseInstance',
        'courseMode': 'online',
        'courseWorkload': `PT${country.timeLimitMinutes}M`
      },
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
        'category': 'Free'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Quiz',
      'name': pageTitle,
      'description': metaDescription,
      'typicalAgeRange': '18-',
      'learningResourceType': 'Practice Test',
      'educationalLevel': 'Beginner / Intermediate',
      'assesses': isAr ? `قواعد المرور، إشارات السير، والأسبقيات في ${countryName}` : `Traffic rules, road signs, and right of way in ${countryName}`,
      'about': {
        '@type': 'Thing',
        'name': isAr ? 'اختبار القيادة النظري' : 'Driving Theory Test'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': isAr ? 'الرئيسية' : 'Home',
          'item': BASE_URL
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': countryName,
          'item': `${BASE_URL}/${country.id}`
        },
        ...(view !== 'home'
          ? [
              {
                '@type': 'ListItem',
                'position': 3,
                'name':
                  view === 'test'
                    ? isAr ? 'محاكي الاختبار' : 'Exam Simulator'
                    : view === 'signs'
                    ? isAr ? 'إشارات المرور' : 'Traffic Signs'
                    : view === 'violations'
                    ? isAr ? 'جدول المخالفات' : 'Violations Guide'
                    : isAr ? 'السجل والنتائج' : 'History',
                'item': canonicalUrl
              }
            ]
          : [])
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': isAr
            ? `كم نسبة النجاح في اختبار القيادة النظري في ${countryName}؟`
            : `What is the passing score for the driving test in ${countryName}?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': isAr
              ? `تبلغ نسبة النجاح الرسمية في ${countryName} لدى (${authority}) ${country.passingScorePercentage}%، وتتطلب الإجابة الصحيحة على ما لا يقل عن ${Math.ceil((country.totalOfficialQuestions * country.passingScorePercentage) / 100)} سؤالاً خلال ${country.timeLimitMinutes} دقيقة.`
              : `The official passing score in ${countryName} (${authority}) is ${country.passingScorePercentage}%, requiring at least ${Math.ceil((country.totalOfficialQuestions * country.passingScorePercentage) / 100)} correct answers within ${country.timeLimitMinutes} minutes.`
          }
        },
        {
          '@type': 'Question',
          'name': isAr
            ? `هل نماذج أسئلة وإشارات ${popularSchool} مطابقة للاختبار الحقيقي؟`
            : `Are the questions and signs matching official ${popularSchool} exams?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': isAr
              ? `نعم، تم تدقيق جميع النماذج لتطابق معايير ومناهج ${authority} ومدارس تعليم القيادة لعام 2026 مع توضيح الإجابات والشروحات.`
              : `Yes, all test simulations follow the certified syllabus of ${authority} for 2026 with detailed question explanations.`
          }
        },
        {
          '@type': 'Question',
          'name': isAr
            ? `هل يمكن تجربة اختبار القيادة النظري مجاناً بدون تسجيل؟`
            : `Can I practice the driving theory test for free without registration?`,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': isAr
              ? `نعم، منصة اجتياز مجانية بالكامل ومفتوحة لجميع المتدربين لإجراء عدد غير محدود من الاختبارات التجريبية.`
              : `Yes, Ijtiaz is 100% free with unlimited mock test sessions.`
          }
        }
      ]
    }
  ];

  scriptEl.textContent = JSON.stringify(structuredData, null, 2);
}
