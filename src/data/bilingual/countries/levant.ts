import { BilingualCountry } from '../types';

export const LEVANT_COUNTRIES: Record<string, BilingualCountry> = {
  jo: {
    code: 'jo',
    questionsCount: 30,
    passingScore: '80%',
    ar: {
      name: 'المملكة الأردنية الهاشمية',
      authority: 'مديرية الأمن العام - إدارة ترخيص السواقين والمركبات',
      seoTitle: 'فحص السواقة النظري التجريبي في الأردن | منصة اجتياز',
      seoDescription: 'أسئلة ونماذج فحص السواقة النظري (التؤوريا) في الأردن. تدرب على أسئلة إدارة ترخيص السواقين والمركبات الأردنية لعام 2026.',
      h1Heading: 'فحص التؤوريا النظري المحوسب - إدارة ترخيص السواقين بالأردن'
    },
    en: {
      name: 'Jordan',
      authority: 'Public Security Directorate - Driver and Vehicle Licensing Department',
      seoTitle: 'Jordan Driving Theory Test (Theory Exam) | Ijtiaz',
      seoDescription: 'Practice for the computerized Jordan driving theory test. Realistic questions covering Jordan traffic signs, rules, and penalties.',
      h1Heading: 'Jordan Driving License Theory Knowledge Test'
    },
    questions: [
      {
        id: 'jo_q1',
        category: { ar: 'قانون السير الأردني', en: 'Jordan Traffic Law' },
        ar: {
          questionText: 'في قانون السير الأردني المعدل، ما هي العقوبة القانونية لاستخدام الهاتف النقال باليد أثناء القيادة؟',
          options: ['مخالفة مالية قدرها 50 ديناراً أردنياً', 'تنبيه شفهي فقط', 'مخالفة 5 دنانير', 'حجز المركبة لمدة سنة'],
          explanation: 'غلظ قانون السير الأردني المعدل عقوبة استخدام الهاتف أثناء القيادة لتصل إلى 50 ديناراً للحد من حوادث التشتت.'
        },
        en: {
          questionText: 'Under the amended Jordan Traffic Law, what is the penalty for using a handheld mobile phone while driving?',
          options: ['A 50 JOD financial fine', 'A verbal warning only', 'A 5 JOD fine', '1-year vehicle impoundment'],
          explanation: 'The revised Jordanian traffic legislation set a 50 JOD fine for handheld phone usage to curb distracted driving.'
        },
        correctAnswerIndex: 0
      }
    ]
  },
  iq: {
    code: 'iq',
    questionsCount: 30,
    passingScore: '80%',
    ar: {
      name: 'جمهورية العراق',
      authority: 'مديرية المرور العامة - وزارة الداخلية العراقية',
      seoTitle: 'اختبار إجازة السوق النظري في العراق | منصة اجتياز',
      seoDescription: 'امتحان إشارات وقواعد المرور للحصول على إجازة السوق في العراق. نماذج أسئلة الحاسوب لمديرية المرور العامة العراقية.',
      h1Heading: 'امتحان إجازة السوق النظري - مديرية المرور العامة بالعراق'
    },
    en: {
      name: 'Iraq',
      authority: 'General Directorate of Traffic - Iraqi Ministry of Interior',
      seoTitle: 'Iraq Driving License Theory Exam Simulator | Ijtiaz',
      seoDescription: 'Free practice for the Iraqi driving theory exam. Master traffic signs and road safety for Iraqi driver licensing.',
      h1Heading: 'Iraq Driving Theory Knowledge Test Practice'
    },
    questions: [
      {
        id: 'iq_q1',
        category: { ar: 'قانون المرور العراقي', en: 'Iraqi Traffic Law' },
        ar: {
          questionText: 'في قانون المرور العراقي، ما هو التصرف القانوني الإلزامي عند الاستدارة (اليوترن) في الشوارع الرئيسية؟',
          options: ['الاستدارة بسرعة دون توقف', 'إعطاء الإشارة المسبقة والوقوف والتأكد من خلو المسار المقابل وإعطاء الأولوية للسيارات القادمة', 'إطلاق المنبه الصوتي والاستدارة مباشرة', 'الاستدارة من أقصى اليمين فجأة'],
          explanation: 'عند عمل استدارة (U-Turn)، يجب إفساح المجال كاملاً لحركة المرور القادمة من الاتجاه المقابل والالتزام بالمسار المخصص.'
        },
        en: {
          questionText: 'Under Iraqi Traffic Law, what is the mandatory procedure when making a U-turn on main thoroughfares?',
          options: ['Make the U-turn rapidly without stopping', 'Signal in advance, stop, ensure the oncoming lane is clear, and yield to oncoming traffic', 'Honk the horn and turn immediately', 'Turn abruptly from the far-right lane'],
          explanation: 'When executing a U-turn, drivers must yield complete right-of-way to all oncoming traffic and use designated turning lanes.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  lb: {
    code: 'lb',
    questionsCount: 30,
    passingScore: '80%',
    ar: {
      name: 'الجمهورية اللبنانية',
      authority: 'هيئة إدارة السير والآليات والمركبات (النافعة)',
      seoTitle: 'امتحان السوق النظري في لبنان (النافعة) | منصة اجتياز',
      seoDescription: 'تدرب على أسئلة امتحان السوق النظري بالكمبيوتر في لبنان (هيئة إدارة السير - النافعة). إشارات المرور وقانون السير اللبناني الجديد.',
      h1Heading: 'امتحان السوق النظري بالكمبيوتر - هيئة إدارة السير بلبنان (النافعة)'
    },
    en: {
      name: 'Lebanon',
      authority: 'Traffic, Trucks and Vehicles Management Authority (Nafaa)',
      seoTitle: 'Lebanon Driving Theory Exam (Nafaa Test) | Ijtiaz',
      seoDescription: 'Prepare for the official Lebanese driving theory test at Nafaa. Practice signs, right of way, and traffic laws in Lebanon.',
      h1Heading: 'Lebanon Driving License Theory Computerized Test'
    },
    questions: [
      {
        id: 'lb_q1',
        category: { ar: 'قانون السير اللبناني', en: 'Lebanese Traffic Code' },
        ar: {
          questionText: 'في قانون السير اللبناني الجديد، ما هي المسافة القانونية التي يجب إبقاؤها عند التجاوز عن دراجة هوائية أو نارية؟',
          options: ['نصف متر', 'متر واحد على الأقل داخل المدن ومتر ونصف خارجها', 'لا يلزم ترك مسافة', '3 أمتار'],
          explanation: 'يفرض قانون السير اللبناني ترك مسافة أمان جانبية لا تقل عن متر داخل المدن و1.5 متر خارجها لحماية راكبي الدراجات.'
        },
        en: {
          questionText: 'Under Lebanese traffic regulations, what safe lateral clearance must be kept when passing a bicycle or motorcycle?',
          options: ['0.5 meters', 'At least 1 meter inside urban areas and 1.5 meters outside', 'No distance required', '3 meters'],
          explanation: 'Drivers must provide at least 1 meter of side clearance in cities and 1.5 meters on open roads when overtaking two-wheelers.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  ps: {
    code: 'ps',
    questionsCount: 40,
    passingScore: '80%',
    ar: {
      name: 'دولة فلسطين',
      authority: 'وزارة النقل والمواصلات - سلطة الترخيص الفلسطينية',
      seoTitle: 'فحص التؤوريا النظري في فلسطين (خصوصي وشحن) | منصة اجتياز',
      seoDescription: 'امتحان التؤوريا النظري الفلسطيني المعتمد لدى سلطة الترخيص. بنك أسئلة التؤوريا للرخصة الخصوصي والعمومي وإشارات المرور.',
      h1Heading: 'فحص التؤوريا النظري التجريبي - سلطة الترخيص الفلسطينية'
    },
    en: {
      name: 'Palestine',
      authority: 'Ministry of Transport and Communications - Palestinian Licensing Authority',
      seoTitle: 'Palestine Theory Driving Test (Tawria) | Ijtiaz',
      seoDescription: 'Pass the official Palestinian theory exam (Tawria). Comprehensive practice tests for private and commercial driver licenses.',
      h1Heading: 'Palestinian Theory Driving Exam Simulator (Tawria)'
    },
    questions: [
      {
        id: 'ps_q1',
        category: { ar: 'قوانين التؤوريا الفلسطينية', en: 'Palestinian Traffic Rules' },
        ar: {
          questionText: 'في اختبار التؤوريا الفلسطيني، ماذا تعني الشاخصة الدائرية الزرقاء التي تحوي سهماً أبيض مائلاً للأسفل نحو اليمين؟',
          options: ['ممنوع المرور لليمين', 'إلزامية المرور من الجانب الأيمن للشاخصة أو الجزيرة', 'موقف سيارات على اليمين', 'نهاية الطريق السريع'],
          explanation: 'الشاخصة الزرقاء الدائرية هي شاخصة إلزامية تأمر السائق بضرورة الالتزام بالمرور من يمين الحاجز أو الجزيرة الوسطية.'
        },
        en: {
          questionText: 'In the Palestinian theory exam, what does a circular blue sign with a downward-slanted white arrow to the right mean?',
          options: ['No entry to the right', 'Mandatory instruction to pass to the right side of the sign or traffic island', 'Parking on the right', 'End of motorway'],
          explanation: 'This mandatory sign commands vehicles to pass strictly to the right side of the median or roadway obstruction.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  sy: {
    code: 'sy',
    questionsCount: 30,
    passingScore: '80%',
    ar: {
      name: 'الجمهورية العربية السورية',
      authority: 'وزارة النقل السورية - فحص قيادة المركبات',
      seoTitle: 'فحص شهادة السواقة النظري في سوريا | منصة اجتياز',
      seoDescription: 'نماذج فحص شهادة السواقة النظري السوري المعتمد لدى وزارة النقل لتعلم إشارات المرور وقانون السير.',
      h1Heading: 'فحص قيادة المركبات النظري - وزارة النقل بالجمهورية العربية السورية'
    },
    en: {
      name: 'Syria',
      authority: 'Syrian Ministry of Transport - Vehicle Driving Examination',
      seoTitle: 'Syria Driving Theory Test Practice Exam | Ijtiaz',
      seoDescription: 'Interactive mock test for the Syrian driving license theory examination. Learn traffic signs and Syrian road regulations.',
      h1Heading: 'Syrian Driving License Theory Knowledge Test'
    },
    questions: [
      {
        id: 'sy_q1',
        category: { ar: 'قانون السير السوري', en: 'Syrian Highway Code' },
        ar: {
          questionText: 'في قانون السير السوري، متى يمنع الرجوع إلى الخلف (المارشريير) بالمركبة منعاً مطلقاً؟',
          options: ['في المواقف العامة', 'على الطرق السريعة والأوتوسترادات والأنفاق والجسور', 'في الكراج الخاص', 'في الطرق الفرعية الفارغة'],
          explanation: 'يحظر الرجوع إلى الخلف قطعياً على الأوتوسترادات والجسور والأنفاق ومداخل ومخارج الطرق السريعة لما يشكله من خطر جسيم.'
        },
        en: {
          questionText: 'Under Syrian road regulations, when is reversing a vehicle strictly prohibited?',
          options: ['In public parking spaces', 'On highways, motorways, tunnels, and bridges', 'In private garages', 'On empty side streets'],
          explanation: 'Reversing is strictly illegal on highways, bridges, and tunnels due to the extreme danger of high-speed collision.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  ye: {
    code: 'ye',
    questionsCount: 30,
    passingScore: '75%',
    ar: {
      name: 'الجمهورية اليمنية',
      authority: 'شرطة السير (الإدارة العامة للمرور اليمني)',
      seoTitle: 'امتحان رخصة القيادة النظري باليمن (شرطة السير) | منصة اجتياز',
      seoDescription: 'تدرب على اختبار إشارات وقواعد المرور باليمن المعتمد لدى شرطة السير لنيل رخصة القيادة بنجاح.',
      h1Heading: 'امتحان رخصة القيادة النظري - شرطة السير بالجمهورية اليمنية'
    },
    en: {
      name: 'Yemen',
      authority: 'Traffic Police - Yemen Ministry of Interior',
      seoTitle: 'Yemen Driving License Theory Test Simulator | Ijtiaz',
      seoDescription: 'Practice for the Yemen traffic police driving theory test. Complete road safety questions and traffic signs.',
      h1Heading: 'Yemen Driving Theory Knowledge Test Simulator'
    },
    questions: [
      {
        id: 'ye_q1',
        category: { ar: 'قواعد السير اليمنية', en: 'Yemeni Traffic Rules' },
        ar: {
          questionText: 'في الطرق الجبلية والمنحدرات الحادة باليمن، لمن تكون أولوية المرور عند التقاء مركبتين في ممر ضيق؟',
          options: ['للمركبة الصاعدة إلى أعلى المنحدر', 'للمركبة الهابطة لأسفل', 'للمركبة الأسرع', 'للمركبة الأكبر حجماً دائماً'],
          explanation: 'في المنحدرات الجبلية، تعطى الأولوية للمركبة الصاعدة لأن التوقف وإعادة الانطلاق صعوداً أصعب وأخطر ميكانيكياً.'
        },
        en: {
          questionText: 'On narrow mountain slopes in Yemen, who has the right of way when two vehicles meet on a tight path?',
          options: ['The vehicle traveling uphill', 'The vehicle traveling downhill', 'The faster vehicle', 'The largest vehicle always'],
          explanation: 'Uphill vehicles have priority because stopping and restarting on a steep incline is significantly more difficult and hazardous.'
        },
        correctAnswerIndex: 0
      }
    ]
  }
};
