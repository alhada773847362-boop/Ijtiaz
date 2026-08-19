import { BilingualCountry } from '../types';

export const GULF_COUNTRIES: Record<string, BilingualCountry> = {
  sa: {
    code: 'sa',
    questionsCount: 40,
    passingScore: '80%',
    ar: {
      name: 'المملكة العربية السعودية',
      authority: 'الإدارة العامة للمرور - مدارس دله والنموذجية',
      seoTitle: 'محاكي اختبار القيادة النظري السعودي (مدرسة دله) | منصة اجتياز',
      seoDescription: 'تدرب مجاناً على اختبار القيادة النظري السعودي (مدارس دلة والنموذجية). أسئلة محاكاة رسمية ومحدثة لإشارات المرور والمخالفات وقواعد السير بالملكة.',
      h1Heading: 'اختبار القيادة النظري التجريبي - مدرسة دله لتعليم القيادة بالسعودية'
    },
    en: {
      name: 'Saudi Arabia',
      authority: 'General Directorate of Traffic - Dallah Driving Academy',
      seoTitle: 'Saudi Driving License Computer Theory Test (Dallah) | Ijtiaz',
      seoDescription: 'Practice for the official Saudi Driving License Theory Test (Dallah & Model Schools). Free updated mock exam simulator for KSA traffic signs and rules.',
      h1Heading: 'Saudi Driving License Theory Exam Simulator (Dallah Schools)'
    },
    questions: [
      {
        id: 'sa_q1',
        category: { ar: 'مخالفات وقوانين المرور السعودي', en: 'Saudi Traffic Violations and Laws' },
        ar: {
          questionText: 'في نظام المرور السعودي (منصة أبشر)، كم عدد النقاط المرورية التي تسحب رخصة القيادة عند بلوغها لأول مرة؟',
          options: ['12 نقطة', '18 نقطة', '24 نقطة خلال سنة هجرية واحدة', '30 نقطة'],
          explanation: 'ينص نظام النقاط المرورية في السعودية على تعليق رخصة القيادة لمدة 3 أشهر عند بلوغ السائق 24 نقطة مرورية للمرة الأولى.'
        },
        en: {
          questionText: 'Under the Saudi traffic points system, at how many violation points is a driver\'s license suspended for the first time?',
          options: ['12 points', '18 points', '24 points within one Hijri year', '30 points'],
          explanation: 'Under KSA traffic regulations, reaching 24 points in one Hijri year leads to a 3-month license suspension for the first offense.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'sa_q2',
        category: { ar: 'السرعات وقواعد السير', en: 'Speed Limits and Road Rules' },
        ar: {
          questionText: 'ما هي السرعة القصوى النظامية للمركبات الصغيرة على الطرق السريعة الرئيسية في المملكة (مثل طريق الرياض - الطائف)؟',
          options: ['100 كم/س', '120 كم/س', '140 كم/س (ما لم توجد لوحة تحدد غير ذلك)', '160 كم/س'],
          explanation: 'حددت الإدارة العامة للمرور السرعة القصوى للمركبات الخفيفة على بعض الطرق السريعة بـ 140 كم/س، و120 كم/س على بقية الطرق السريعة.'
        },
        en: {
          questionText: 'What is the maximum legal speed limit for passenger cars on designated Saudi highways?',
          options: ['100 km/h', '120 km/h', '140 km/h (unless posted otherwise)', '160 km/h'],
          explanation: 'The Saudi Traffic Directorate sets the maximum limit at 140 km/h on selected major freeways and 120 km/h on standard highways.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'sa_q3',
        category: { ar: 'السلامة والقيادة الوقائية', en: 'Defensive Driving and Safety' },
        ar: {
          questionText: 'ما هي الغرامة المقررة في جدول المخالفات السعودي لعدم ربط حزام الأمان للسائق أو الراكب؟',
          options: ['150 إلى 300 ريال سعودي', '500 إلى 900 ريال', '1000 إلى 2000 ريال', '50 ريال فقط'],
          explanation: 'مخالفة عدم ربط حزام الأمان في جدول المخالفات المرورية تتراوح بين 150 إلى 300 ريال سعودي ويتم رصدها آلياً عبر الكاميرات.'
        },
        en: {
          questionText: 'What is the fine for failing to wear a seatbelt according to Saudi traffic penalty schedules?',
          options: ['150 to 300 SAR', '500 to 900 SAR', '1,000 to 2,000 SAR', '50 SAR only'],
          explanation: 'Failing to fasten the seatbelt carries a fine between 150 and 300 SAR and is automatically enforced by camera systems.'
        },
        correctAnswerIndex: 0
      }
    ]
  },
  ae: {
    code: 'ae',
    questionsCount: 40,
    passingScore: '80%',
    ar: {
      name: 'الإمارات العربية المتحدة',
      authority: 'هيئة الطرق والمواصلات (RTA) والقيادات الشرطية',
      seoTitle: 'محاكي فحص المعرفة النظري الإماراتي (RTA) | منصة اجتياز',
      seoDescription: 'اختبار تجريبي شامل لرخصة القيادة في الإمارات (RTA دبي، معهد الإمارات للسياقة، شرطة أبوظبي). أسئلة إشارات المرور والنقاط السوداء.',
      h1Heading: 'اختبار المعرفة النظري لرخصة القيادة - هيئة الطرق والمواصلات RTA دبي'
    },
    en: {
      name: 'United Arab Emirates',
      authority: 'Roads and Transport Authority (RTA) & Police HQs',
      seoTitle: 'UAE RTA Driving Theory Knowledge Test Simulator | Ijtiaz',
      seoDescription: 'Pass your Dubai RTA driving knowledge theory test on your first try. Comprehensive practice questions for EDI, Galadari, and Abu Dhabi police.',
      h1Heading: 'UAE RTA Driving Theory Knowledge Test Practice Exam'
    },
    questions: [
      {
        id: 'ae_q1',
        category: { ar: 'نظام النقاط السوداء', en: 'Black Points System' },
        ar: {
          questionText: 'في قانون المرور الاتحادي الإماراتي، كم عدد النقاط السوداء المتراكمة التي تؤدي لسحب رخصة القيادة؟',
          options: ['12 نقطة سوداء', '24 نقطة سوداء خلال عام واحد', '30 نقطة سوداء', '18 نقطة سوداء'],
          explanation: 'الحد التراكمي الأقصى للنقاط السوداء في الإمارات هو 24 نقطة، وبلوغها يستوجب سحب رخصة القيادة وحجز المركبة.'
        },
        en: {
          questionText: 'Under the UAE federal traffic law, how many accumulated black points result in driver\'s license confiscation?',
          options: ['12 black points', '24 black points in a single year', '30 black points', '18 black points'],
          explanation: 'The maximum threshold is 24 black points in a 12-month period, which leads to license suspension and vehicle impoundment.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'ae_q2',
        category: { ar: 'قواعد السير والمرور', en: 'Road and Traffic Rules' },
        ar: {
          questionText: 'ما هي المسافة الزمنية الآمنة الموصى بها من قبل RTA دبي بينك وبين المركبة الأمامية في الطقس الجاف؟',
          options: ['ثانية واحدة', 'ثانيتان على الأقل (قاعدة الثانيتين)', 'خمس ثوانٍ', 'عشر ثوانٍ'],
          explanation: 'توصي RTA بترك ثانيتين كحد أدنى للمسافة الآمنة في الطقس المعتدل وتزداد إلى 4 ثوانٍ أو أكثر في الضباب والمطر.'
        },
        en: {
          questionText: 'What is the safe time following distance recommended by Dubai RTA in normal dry weather?',
          options: ['1 second', 'At least 2 seconds (the 2-second rule)', '5 seconds', '10 seconds'],
          explanation: 'RTA Dubai advises maintaining at least a 2-second following gap under normal dry driving conditions.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  kw: {
    code: 'kw',
    questionsCount: 30,
    passingScore: '80%',
    ar: {
      name: 'دولة الكويت',
      authority: 'الإدارة العامة للمرور - وزارة الداخلية الكويتية',
      seoTitle: 'اختبار القيادة النظري الكويتي التجريبي (المرور) | منصة اجتياز',
      seoDescription: 'نماذج اختبار رخصة السوق النظري في الكويت. بنك أسئلة المرور الكويتي، إشارات الطرق، ومخالفات قانون المرور لعام 2026.',
      h1Heading: 'محاكي امتحان السوق النظري بالكمبيوتر - المرور الكويتي'
    },
    en: {
      name: 'Kuwait',
      authority: 'General Directorate of Traffic - Kuwait Ministry of Interior',
      seoTitle: 'Kuwait Driving License Theory Test Simulator | Ijtiaz',
      seoDescription: 'Free computerized mock driving exam for Kuwait traffic department. Master sign test and road regulations for Kuwaiti driving permits.',
      h1Heading: 'Kuwait Driving License Computerized Knowledge Test'
    },
    questions: [
      {
        id: 'kw_q1',
        category: { ar: 'قانون المرور الكويتي', en: 'Kuwait Traffic Law' },
        ar: {
          questionText: 'ما هي عقوبة تجاوز الإشارة الضوئية الحمراء في قانون المرور الكويتي؟',
          options: ['غرامة مالية وحبس محتمل وسحب رخصة القيادة والنقاط', 'تنبيه شفهي فقط', 'دفع 5 دنانير', 'لا توجد عقوبة إذا كان التقاطع خالياً'],
          explanation: 'قطع الإشارة الحمراء في الكويت يعد من المخالفات الجسيمة المباشرة التي تعرض مرتكبها للغرامة والحبس وسحب المركبة.'
        },
        en: {
          questionText: 'What is the penalty for running a red traffic light under Kuwait Traffic Law?',
          options: ['Substantial fines, potential imprisonment, points, and license suspension', 'Verbal warning only', '5 KWD fine', 'No penalty if intersection is clear'],
          explanation: 'Running a red light is a severe violation in Kuwait subject to hefty fines, legal detention, and vehicle impoundment.'
        },
        correctAnswerIndex: 0
      }
    ]
  },
  qa: {
    code: 'qa',
    questionsCount: 40,
    passingScore: '80%',
    ar: {
      name: 'دولة قطر',
      authority: 'الإدارة العامة للمرور - وزارة الداخلية القطرية',
      seoTitle: 'اختبار السواقة النظري قطر (أكاديمية دله والدوحة) | منصة اجتياز',
      seoDescription: 'امتحان تجريبي لإشارات وقواعد المرور في قطر. أسئلة تدريبية لمحاكاة الفحص النظري المعتمد في أكاديميات ومدارس السواقة القطرية.',
      h1Heading: 'اختبار السواقة النظري - الإدارة العامة للمرور بدولة قطر'
    },
    en: {
      name: 'Qatar',
      authority: 'General Directorate of Traffic - Ministry of Interior Qatar',
      seoTitle: 'Qatar Driving Theory Test Practice Exam (Dalla) | Ijtiaz',
      seoDescription: 'Official-style Qatar driving knowledge exam practice. Realistic questions for Dalla Academy and Doha Driving Academy theory tests.',
      h1Heading: 'Qatar Driving Knowledge & Theory Test Simulator'
    },
    questions: [
      {
        id: 'qa_q1',
        category: { ar: 'قواعد السير القطرية', en: 'Qatar Road Rules' },
        ar: {
          questionText: 'في دولة قطر، ما هو الحد الأقصى للنقاط المرورية في النظام التراكمي قبل سحب رخصة السواقة للمرة الأولى؟',
          options: ['14 نقطة', '20 نقطة', '24 نقطة', '30 نقطة'],
          explanation: 'ينص قانون المرور القطري على سحب رخصة القيادة لمدة 3 أشهر عند بلوغ السائق 14 نقطة مرورية للمرة الأولى.'
        },
        en: {
          questionText: 'In Qatar, what is the maximum points threshold before a first-time driving license withdrawal?',
          options: ['14 points', '20 points', '24 points', '30 points'],
          explanation: 'Qatar traffic law dictates a 3-month license revocation upon accumulating 14 violation points for the first time.'
        },
        correctAnswerIndex: 0
      }
    ]
  },
  om: {
    code: 'om',
    questionsCount: 30,
    passingScore: '80%',
    ar: {
      name: 'سلطنة عمان',
      authority: 'الإدارة العامة للمرور - شرطة عمان السلطانية',
      seoTitle: 'اختبار القيادة النظري العماني (شرطة عمان السلطانية) | منصة اجتياز',
      seoDescription: 'تدرب على أسئلة اختبار الإشارات والأنظمة المرورية المعتمدة لدى شرطة عمان السلطانية لنيل رخصة السياقة بنجاح.',
      h1Heading: 'محاكي فحص القيادة النظري - شرطة عمان السلطانية'
    },
    en: {
      name: 'Oman',
      authority: 'Directorate General of Traffic - Royal Oman Police (ROP)',
      seoTitle: 'Oman ROP Driving Theory Test Simulator | Ijtiaz',
      seoDescription: 'Free practice test for the Royal Oman Police (ROP) driving knowledge test. Master Omani road regulations and traffic signs.',
      h1Heading: 'Royal Oman Police (ROP) Driving Theory Exam Practice'
    },
    questions: [
      {
        id: 'om_q1',
        category: { ar: 'قواعد المرور العمانية', en: 'Oman Traffic Regulations' },
        ar: {
          questionText: 'في لوائح شرطة عمان السلطانية، ما هو التصرف الإلزامي عند الاقتراب من مسارات الأودية أثناء جريان السيول؟',
          options: ['المجازفة وعبور الوادي بسرعة', 'التوقف التام والامتناع التام عن عبور مجرى الوادي حتى ينخفض المنسوب ويصبح آمناً تماماً', 'العبور خلف شاحنة ثقيلة فقط', 'تشغيل الأضواء الرباعية والعبور'],
          explanation: 'عبور الأودية أثناء جريانها في سلطنة عمان يعد مخالفة جسيمة وجريمة يعاقب عليها القانون بالحبس والغرامة الشديدة لخطورتها على الأرواح.'
        },
        en: {
          questionText: 'Under Royal Oman Police (ROP) regulations, what is the mandatory action when approaching a flowing wadi flood crossing?',
          options: ['Drive through quickly', 'Stop completely and strictly refrain from crossing until water recedes safely', 'Follow closely behind a heavy truck', 'Turn on hazard lights and cross'],
          explanation: 'Crossing active flood wadis in Oman is a major punishable crime carrying heavy fines and imprisonment due to extreme life danger.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  bh: {
    code: 'bh',
    questionsCount: 30,
    passingScore: '80%',
    ar: {
      name: 'مملكة البحرين',
      authority: 'الإدارة العامة للمرور - وزارة الداخلية البحرينية',
      seoTitle: 'امتحان السياقة النظري في البحرين (عالي) | منصة اجتياز',
      seoDescription: 'تدرب مجاناً على امتحان السياقة النظري البحريني المعتمد بمدرسة تدريب السياقة بعالي. أسئلة الحاسوب وقوانين المرور في البحرين.',
      h1Heading: 'اختبار السياقة النظري المحوسب - الإدارة العامة للمرور بالبحرين'
    },
    en: {
      name: 'Bahrain',
      authority: 'General Directorate of Traffic - Bahrain Ministry of Interior',
      seoTitle: 'Bahrain Driving License Theory Test Simulator | Ijtiaz',
      seoDescription: 'Prepare for the Bahrain computerized driving theory exam at A\'ali Driving School. Interactive practice covering Bahraini road signs and rules.',
      h1Heading: 'Bahrain Driving Theory Knowledge Test Simulator'
    },
    questions: [
      {
        id: 'bh_q1',
        category: { ar: 'قانون المرور البحريني', en: 'Bahrain Traffic Regulations' },
        ar: {
          questionText: 'في قانون المرور بمملكة البحرين، ما هي السرعة القصوى المحددة عادة داخل المناطق والأحياء السكنية؟',
          options: ['20 كم/س', '50 كم/س (أو وفق اللوحات المنشورة)', '80 كم/س', '100 كم/س'],
          explanation: 'السرعة النظامية داخل المناطق السكنية والتجارية في البحرين محددة بـ 50 كم/س للحفاظ على سلامة المشاة والأطفال.'
        },
        en: {
          questionText: 'Under Bahrain Traffic Law, what is the standard speed limit inside urban and residential districts?',
          options: ['20 km/h', '50 km/h (unless posted otherwise)', '80 km/h', '100 km/h'],
          explanation: 'Standard speed in residential and built-up areas in Bahrain is capped at 50 km/h to safeguard pedestrians.'
        },
        correctAnswerIndex: 1
      }
    ]
  }
};
