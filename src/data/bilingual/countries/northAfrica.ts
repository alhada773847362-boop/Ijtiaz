import { BilingualCountry } from '../types';

export const NORTH_AFRICA_COUNTRIES: Record<string, BilingualCountry> = {
  eg: {
    code: 'eg',
    questionsCount: 30,
    passingScore: '80%',
    ar: {
      name: 'جمهورية مصر العربية',
      authority: 'الإدارة العامة للمرور - وحدات التراخيص بوزارة الداخلية المصرية',
      seoTitle: 'اختبار إشارات المرور النظري بالكمبيوتر مصر | منصة اجتياز',
      seoDescription: 'اختبار القيادة النظري بالكمبيوتر لوحدات المرور المصرية. أسئلة إشارات وعلامات المرور وقواعد وقوانين المرور في مصر لعام 2026.',
      h1Heading: 'امتحان إشارات المرور النظري بالكمبيوتر - الإدارة العامة للمرور مصر'
    },
    en: {
      name: 'Egypt',
      authority: 'General Traffic Department - Egyptian Ministry of Interior',
      seoTitle: 'Egypt Driving License Theory Computer Exam | Ijtiaz',
      seoDescription: 'Pass your Egyptian driving license computerized signs and theory test. Full practice exam for Egyptian traffic licensing units.',
      h1Heading: 'Egyptian Driving Theory & Traffic Signs Computerized Test'
    },
    questions: [
      {
        id: 'eg_q1',
        category: { ar: 'قانون المرور المصري', en: 'Egyptian Traffic Law' },
        ar: {
          questionText: 'ما هي السرعة القصوى للسيارات الملاكي على الطرق الصحراوية في مصر (مثل طريق القاهرة - الإسكندرية الصحراوي)؟',
          options: ['90 كم/س', '100 كم/س', '120 كم/س (ما لم تحدد لوحات المرور غير ذلك)', '140 كم/س'],
          explanation: 'حددت الإدارة العامة للمرور السرعة القصوى للسيارات الملاكي على الطرق الصحراوية بـ 120 كم/س وعلى الطرق الزراعية بـ 90 كم/س.'
        },
        en: {
          questionText: 'What is the maximum speed limit for private passenger cars on Egyptian desert freeways (e.g. Cairo - Alexandria Desert Road)?',
          options: ['90 km/h', '100 km/h', '120 km/h (unless posted otherwise)', '140 km/h'],
          explanation: 'Egyptian traffic regulations set the top limit for passenger vehicles on desert highways at 120 km/h and agricultural roads at 90 km/h.'
        },
        correctAnswerIndex: 2
      }
    ]
  },
  ma: {
    code: 'ma',
    questionsCount: 40,
    passingScore: '80%',
    ar: {
      name: 'المملكة المغربية',
      authority: 'الوكالة الوطنية للسلامة الطرقية (نارسا - NARSA)',
      seoTitle: 'امتحان رخصة السياقة بالمغرب كود روسو الجديد (NARSA) | منصة اجتياز',
      seoDescription: 'امتحان رخصة السياقة بالمغرب 2026 (Code Rousseau Maroc). بنك الأسئلة المعتمد لدى نارسا لاجتياز الاختبار النظري من المرة الأولى.',
      h1Heading: 'امتحان رخصة السياقة بالمغرب - كود روسو وبنك أسئلة نارسا NARSA'
    },
    en: {
      name: 'Morocco',
      authority: 'National Road Safety Agency (NARSA)',
      seoTitle: 'Morocco Driving License Theory Exam (Code Rousseau) | Ijtiaz',
      seoDescription: 'Prepare for the official Moroccan driving theory test (Code Rousseau Maroc & NARSA). Complete question bank with signs and priority rules.',
      h1Heading: 'Morocco Driving License Theory Test (NARSA & Code Rousseau)'
    },
    questions: [
      {
        id: 'ma_q1',
        category: { ar: 'مدونة السير المغربية', en: 'Moroccan Highway Code' },
        ar: {
          questionText: 'في مدونة السير المغربية، ما هي الفترة الاختبارية (المؤقتة) لحامل رخصة السياقة الجديد؟',
          options: ['6 أشهر', 'سنة واحدة', 'سنتان (24 شهراً)', '3 سنوات'],
          explanation: 'تكون الفترة الاختبارية لرخصة السياقة بالمغرب سنتين، وتكون السرعة القصوى محددة بـ 90 كم/س خلال هذه الفترة مع رصيد 20 نقطة.'
        },
        en: {
          questionText: 'Under the Moroccan Highway Code, how long is the probationary period for new driving license holders?',
          options: ['6 months', '1 year', '2 years (24 months)', '3 years'],
          explanation: 'The probationary period in Morocco is 2 years, during which drivers are restricted to a 90 km/h maximum speed with a 20-point initial balance.'
        },
        correctAnswerIndex: 2
      }
    ]
  },
  dz: {
    code: 'dz',
    questionsCount: 40,
    passingScore: '80%',
    ar: {
      name: 'الجمهورية الجزائرية الديمقراطية الشعبية',
      authority: 'وزارة النقل - المندوبية الوطنية للأمن في الطرق',
      seoTitle: 'امتحان رخصة السياقة في الجزائر (كود دو لا روت) | منصة اجتياز',
      seoDescription: 'اختبار قانون المرور الجزائري (Code de la route Algérie). تدرب على أسئلة الأولويات والإشارات وقانون السير الجزائري.',
      h1Heading: 'امتحان قانون المرور الجزائري - رخصة السياقة في الجزائر'
    },
    en: {
      name: 'Algeria',
      authority: 'Ministry of Transport - National Road Safety Delegation',
      seoTitle: 'Algeria Driving Theory Exam (Code de la route) | Ijtiaz',
      seoDescription: 'Practice for the Algerian driving theory test (Code de la route Algérie). Complete study simulator for Algerian road regulations.',
      h1Heading: 'Algerian Driving License Theory Exam Simulator'
    },
    questions: [
      {
        id: 'dz_q1',
        category: { ar: 'قانون المرور الجزائري', en: 'Algerian Road Code' },
        ar: {
          questionText: 'في قانون المرور بالجزائر، ما هي السرعة المحددة للسائقين المبتدئين (الحاملين لرخصة الاختبار لمدة سنتين) على الطرق السريعة؟',
          options: ['60 كم/س', '80 كم/س', '100 كم/س', '120 كم/س'],
          explanation: 'يفرض قانون المرور الجزائري على السائقين الحاملين لرخصة القيادة الاختبارية (رمز 80) عدم تجاوز سرعة 80 كم/س في جميع الطرق.'
        },
        en: {
          questionText: 'In Algeria, what is the mandatory speed limit for novice drivers during the 2-year probationary period?',
          options: ['60 km/h', '80 km/h', '100 km/h', '120 km/h'],
          explanation: 'Algerian traffic law restricts probationary drivers to a maximum speed limit of 80 km/h across all road networks.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  tn: {
    code: 'tn',
    questionsCount: 30,
    passingScore: '80%',
    ar: {
      name: 'الجمهورية التونسية',
      authority: 'الوكالة الفنية للنقل البري (ATTT)',
      seoTitle: 'امتحان كود السياقة في تونس (Code de la route Tunisie) | منصة اجتياز',
      seoDescription: 'تدرب على امتحان قانون الطرقات ورخصة السياقة في تونس عبر محاكي الوكالة الفنية للنقل البري ATTT المحدث.',
      h1Heading: 'امتحان قانون الطرقات النظري - الوكالة الفنية للنقل البري بتونس'
    },
    en: {
      name: 'Tunisia',
      authority: 'Technical Agency for Land Transport (ATTT)',
      seoTitle: 'Tunisia Driving Theory Test (ATTT Code de la route) | Ijtiaz',
      seoDescription: 'Pass the Tunisian driving code test (Code de la route Tunisie ATTT). Interactive practice test for traffic signs and priorities in Tunisia.',
      h1Heading: 'Tunisian Driving License Theory Test (ATTT Simulator)'
    },
    questions: [
      {
        id: 'tn_q1',
        category: { ar: 'مجلة الطرقات التونسية', en: 'Tunisian Road Code' },
        ar: {
          questionText: 'في مجلة الطرقات التونسية، ما هي السرعة القصوى المسموح بها داخل المناطق العمرانية والبلدية؟',
          options: ['30 كم/س', '50 كم/س (ما لم تنص إشارة على خلاف ذلك)', '70 كم/س', '90 كم/س'],
          explanation: 'تنص مجلة الطرقات في تونس على تحديد السرعة القصوى بـ 50 كم/س داخل مواطن العمران لحماية المشاة ومستخدمي الطريق.'
        },
        en: {
          questionText: 'Under the Tunisian Highway Code, what is the maximum speed permitted within urban built-up areas?',
          options: ['30 km/h', '50 km/h (unless posted otherwise)', '70 km/h', '90 km/h'],
          explanation: 'The Tunisian Highway Code sets a general urban speed limit of 50 km/h to safeguard vulnerable road users.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  ly: {
    code: 'ly',
    questionsCount: 30,
    passingScore: '80%',
    ar: {
      name: 'دولة ليبيا',
      authority: 'إدارة المرور والتراخيص - وزارة الداخلية الليبية',
      seoTitle: 'امتحان رخصة القيادة النظري في ليبيا | منصة اجتياز',
      seoDescription: 'نماذج فحص إشارات وقواعد المرور الليبية المعتمدة لدى إدارة المرور والتراخيص بوزارة الداخلية لنيل إجازة السوق.',
      h1Heading: 'فحص قواعد وإشارات المرور النظري - إدارة المرور والتراخيص بليبيا'
    },
    en: {
      name: 'Libya',
      authority: 'Traffic and Licensing Department - Libyan Interior Ministry',
      seoTitle: 'Libya Driving License Theory Practice Exam | Ijtiaz',
      seoDescription: 'Practice for the official Libyan driving license written exam. Realistic simulator for road signs and traffic safety in Libya.',
      h1Heading: 'Libyan Driving License Theory Knowledge Simulator'
    },
    questions: [
      {
        id: 'ly_q1',
        category: { ar: 'قانون المرور الليبي', en: 'Libyan Traffic Law' },
        ar: {
          questionText: 'في قانون المرور الليبي، ما هو التصرف الإلزامي عند رؤية رجل المرور يرفع يده رأسياً للأعلى؟',
          options: ['زيادة السرعة للمرور قبل تغيير الإشارة', 'التوقف التام لجميع المركبات القادمة من كافة الاتجاهات', 'الانعطاف لليمين فقط', 'تجاهل الإشارة والاستمرار'],
          explanation: 'إشارة رجل المرور برفع اليد عمودياً تعني التوقف لجميع مستخدمي الطريق القادمين من جميع الاتجاهات وتلغي الإشارات الضوئية.'
        },
        en: {
          questionText: 'In Libyan traffic regulations, what does a traffic officer raising their arm vertically upward signal?',
          options: ['Speed up to clear intersection', 'Full stop for all approaching traffic from all directions', 'Turn right only', 'Ignore and continue'],
          explanation: 'A traffic officer\'s vertically raised arm requires all traffic approaching from all directions to stop immediately.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  sd: {
    code: 'sd',
    questionsCount: 30,
    passingScore: '75%',
    ar: {
      name: 'جمهورية السودان',
      authority: 'الإدارة العامة للمرور السوداني',
      seoTitle: 'امتحان رخصة القيادة السودانية النظري | منصة اجتياز',
      seoDescription: 'اختبار القيادة النظري التجريبي المعتمد لدى الإدارة العامة للمرور السوداني لضمان اجتياز الفحص النظري بسهولة.',
      h1Heading: 'امتحان رخصة القيادة السودانية النظري - الإدارة العامة للمرور'
    },
    en: {
      name: 'Sudan',
      authority: 'General Administration of Traffic - Sudan',
      seoTitle: 'Sudan Driving License Theory Mock Test | Ijtiaz',
      seoDescription: 'Prepare for the Sudanese driving theory test with official road rules and signs from the Sudan Traffic Administration.',
      h1Heading: 'Sudan Driving Theory Test Simulator'
    },
    questions: [
      {
        id: 'sd_q1',
        category: { ar: 'قانون المرور السوداني', en: 'Sudan Traffic Law' },
        ar: {
          questionText: 'في قواعد المرور السودانية، لمن تكون الأولوية في التقاطعات غير المزودة بإشارات أو لوحات؟',
          options: ['للمركبة القادمة من جهة اليمين', 'للمركبة القادمة من اليسار', 'للمركبة الأكبر حجماً', 'للمركبة المتجهة نحو الشمال'],
          explanation: 'القاعدة العامة في قانون المرور السوداني هي إعطاء الأولوية دائماً للقادم من جهة اليمين في التقاطعات المتساوية.'
        },
        en: {
          questionText: 'In Sudanese traffic rules, who has the priority at an uncontrolled intersection without signs?',
          options: ['The vehicle approaching from the right', 'The vehicle approaching from the left', 'The larger vehicle', 'The vehicle heading north'],
          explanation: 'Standard Sudanese road law gives priority to vehicles approaching from the right at uncontrolled intersections.'
        },
        correctAnswerIndex: 0
      }
    ]
  },
  mr: {
    code: 'mr',
    questionsCount: 30,
    passingScore: '75%',
    ar: {
      name: 'الجمهورية الإسلامية الموريتانية',
      authority: 'إدارة النقل البري - وزارة التجهيز والنقل',
      seoTitle: 'امتحان رخصة السياقة في موريتانيا | منصة اجتياز',
      seoDescription: 'أسئلة وفحص رخصة السياقة النظري بموريتانيا المعتمد لدى إدارة النقل البري لتعليم قانون السير وإشارات الطرق.',
      h1Heading: 'فحص رخصة السياقة الموريتاني - إدارة النقل البري بموريتانيا'
    },
    en: {
      name: 'Mauritania',
      authority: 'Department of Land Transport - Mauritania',
      seoTitle: 'Mauritania Driving License Theory Test | Ijtiaz',
      seoDescription: 'Practice for the Mauritanian driving license theory examination. Learn Mauritanian traffic laws and road signs.',
      h1Heading: 'Mauritania Driving Theory Knowledge Exam Practice'
    },
    questions: [
      {
        id: 'mr_q1',
        category: { ar: 'قانون السير الموريتاني', en: 'Mauritania Highway Code' },
        ar: {
          questionText: 'في قانون السير بموريتانيا، ما هي مسافة الأمان الواجب تركها بين مركبتين تسيران في نفس المسار؟',
          options: ['مسافة لا تقل عن ثانية واحدة', 'مسافة زمنية لا تقل عن ثانيتين في الطقس الجاف ومضاعفتها في الطقس السيئ', 'نصف متر', 'لا يلزم ترك مسافة'],
          explanation: 'يجب على كل سائق الحفاظ على مسافة أمان زمنية تعادل ثانيتين على الأقل تفادياً لحوادث الصدم من الخلف.'
        },
        en: {
          questionText: 'Under Mauritanian road rules, what is the mandatory safety gap between two vehicles in the same lane?',
          options: ['At least 1 second', 'A time gap of at least 2 seconds in dry conditions, doubled in adverse weather', 'Half a meter', 'No gap required'],
          explanation: 'Drivers must maintain at least a two-second cushion to prevent rear-end collisions.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  so: {
    code: 'so',
    questionsCount: 30,
    passingScore: '75%',
    ar: {
      name: 'جمهورية الصومال الفيدرالية',
      authority: 'وزارة النقل والطيران المدني الصومالية',
      seoTitle: 'امتحان رخصة القيادة النظري بالصومال | منصة اجتياز',
      seoDescription: 'نماذج فحص القيادة النظري التجريبي المعتمد لدى وزارة النقل الصومالية لتأهيل السائقين وتعلم إشارات السير.',
      h1Heading: 'امتحان رخصة القيادة النظري - وزارة النقل الصومالية'
    },
    en: {
      name: 'Somalia',
      authority: 'Ministry of Transport and Civil Aviation - Somalia',
      seoTitle: 'Somalia Driving Theory Knowledge Test | Ijtiaz',
      seoDescription: 'Comprehensive theory mock exam for Somali driver licensing. Master road safety and signs.',
      h1Heading: 'Somalia Driving Knowledge & Theory Test Simulator'
    },
    questions: [
      {
        id: 'so_q1',
        category: { ar: 'قواعد السير الصومالية', en: 'Somalia Road Rules' },
        ar: {
          questionText: 'في قواعد السير بالصومال، في أي جهة من الطريق يجب على المركبات أن تسير؟',
          options: ['في الجهة اليمنى من الطريق', 'في الجهة اليسرى من الطريق', 'في وسط الطريق', 'في أي جهة حسب رغبة السائق'],
          explanation: 'القيادة في الصومال تتبع نظام القيادة على الجانب الأيمن من الطريق وتجاوز المركبات من جهة اليسار.'
        },
        en: {
          questionText: 'In Somalia, on which side of the roadway must vehicles travel?',
          options: ['On the right side of the road', 'On the left side of the road', 'In the middle of the road', 'On either side'],
          explanation: 'Traffic in Somalia drives on the right side of the road and overtakes on the left.'
        },
        correctAnswerIndex: 0
      }
    ]
  },
  dj: {
    code: 'dj',
    questionsCount: 30,
    passingScore: '75%',
    ar: {
      name: 'جمهورية جيبوتي',
      authority: 'مصلحة النقل البري بجيبوتي',
      seoTitle: 'اختبار رخصة السياقة بجيبوتي (كود السير) | منصة اجتياز',
      seoDescription: 'اختبار قانون السير التجريبي للحصول على رخصة السياقة بجيبوتي تحت إشراف مصلحة النقل البري لتعليم إشارات الطرق.',
      h1Heading: 'اختبار قانون السير النظري - مصلحة النقل البري بجيبوتي'
    },
    en: {
      name: 'Djibouti',
      authority: 'Land Transport Department - Djibouti',
      seoTitle: 'Djibouti Driving Theory Test Simulator | Ijtiaz',
      seoDescription: 'Official practice questions for obtaining a driving license in Djibouti. Learn local highway code and signs.',
      h1Heading: 'Djibouti Driving License Theory Practice Test'
    },
    questions: [
      {
        id: 'dj_q1',
        category: { ar: 'قانون السير بجيبوتي', en: 'Djibouti Highway Code' },
        ar: {
          questionText: 'ما هو الواجب الأساسي عند الاقتراب من ممرات عبور المشاة في جيبوتي؟',
          options: ['استخدام المنبه الصوتي لتحذير المشاة', 'التمهل والتوقف التام لإفساح المجال للمشاة للعبور بأمان', 'زيادة السرعة لتفادي الازدحام', 'تجاوز السيارات المتوقفة أمام الممر'],
          explanation: 'للمشاة الأولوية المطلقة عند الممرات المخصصة لهم، ويمنع منعاً باتاً التجاوز قرب معابر المشاة.'
        },
        en: {
          questionText: 'What is the primary duty when approaching a pedestrian crossing in Djibouti?',
          options: ['Honk repeatedly to warn pedestrians', 'Slow down and come to a full stop to allow pedestrians to cross safely', 'Speed up to avoid traffic congestion', 'Overtake cars stopped at the crossing'],
          explanation: 'Pedestrians have absolute priority at designated zebra crossings, and overtaking near crossings is strictly forbidden.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  km: {
    code: 'km',
    questionsCount: 30,
    passingScore: '75%',
    ar: {
      name: 'جمهورية جزر القمر',
      authority: 'إدارة النقل البري - جزر القمر',
      seoTitle: 'امتحان رخصة القيادة بجزر القمر | منصة اجتياز',
      seoDescription: 'الاختبار النظري لقواعد وإشارات السير بجزر القمر المعتمد لدى إدارة النقل البري الوطنية لتدريب المتقدمين لرخصة السياقة.',
      h1Heading: 'امتحان القيادة النظري - إدارة النقل البري بجزر القمر'
    },
    en: {
      name: 'Comoros',
      authority: 'Department of Land Transport - Comoros',
      seoTitle: 'Comoros Driving License Theory Exam | Ijtiaz',
      seoDescription: 'Interactive mock test for the Comoros driving theory test. Master road traffic signs and priorities in Comoros.',
      h1Heading: 'Comoros Driving Theory Knowledge Simulator'
    },
    questions: [
      {
        id: 'km_q1',
        category: { ar: 'قواعد السير بجزر القمر', en: 'Comoros Traffic Code' },
        ar: {
          questionText: 'ما هي أهمية تخفيف السرعة عند القيادة في الطرق الساحلية والجبلية المتعرجة بجزر القمر؟',
          options: ['للاستمتاع بالمنظر فقط', 'لتفادي انزلاق المركبة والقدرة على التوقف المفاجئ في المنعطفات العمياء', 'لزيادة استهلاك الوقود', 'لا توجد أهمية'],
          explanation: 'الطرق الجبلية والساحلية الضيقة تتطلب قيادة دفاعية وسرعة منخفضة للسيطرة على المركبة وتجنب الحوادث.'
        },
        en: {
          questionText: 'Why is reducing speed essential when driving on narrow coastal and mountain roads in Comoros?',
          options: ['Only for sightseeing', 'To prevent skidding and maintain control around sharp blind curves', 'To increase fuel usage', 'No importance'],
          explanation: 'Narrow coastal and mountain roads require cautious speeds to safely navigate blind bends and sudden hazards.'
        },
        correctAnswerIndex: 1
      }
    ]
  }
};
