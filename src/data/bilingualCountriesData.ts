export interface BilingualQuestion {
  id: string;
  category: {
    ar: string;
    en: string;
  };
  ar: {
    questionText: string;
    options: string[];
    explanation: string;
  };
  en: {
    questionText: string;
    options: string[];
    explanation: string;
  };
  correctAnswerIndex: number;
}

export interface BilingualCountry {
  code: string;
  questionsCount: number;
  passingScore: string;
  ar: {
    name: string;
    authority: string;
    seoTitle: string;
    seoDescription: string;
    h1Heading: string;
  };
  en: {
    name: string;
    authority: string;
    seoTitle: string;
    seoDescription: string;
    h1Heading: string;
  };
  questions: BilingualQuestion[];
}

export const BILINGUAL_COUNTRIES_DATA: Record<string, BilingualCountry> = {
  sa: {
    code: 'sa',
    questionsCount: 40,
    passingScore: '80%',
    ar: {
      name: 'المملكة العربية السعودية',
      authority: 'مدرسة دله لتعليم القيادة',
      seoTitle: 'محاكي اختبار القيادة النظري السعودي (مدرسة دله) | منصة اجتياز',
      seoDescription: 'تدرب مجاناً على اختبار القيادة النظري السعودي (مدارس دلة والنموذجية). أسئلة محاكاة رسمية ومحدثة لإشارات المرور والمخالفات وقواعد السير بالملكة.',
      h1Heading: 'محاكي اختبار القيادة النظري السعودي - مدارس دله والنموذجية'
    },
    en: {
      name: 'Saudi Arabia',
      authority: 'Dallah Driving School',
      seoTitle: 'Saudi Driving Theory Test Simulator - Dallah | Ijtiaz',
      seoDescription: 'Practice the official Saudi driving computer theory test for free. Real simulator for Dallah driving school traffic signs, road rules, and violation points in KSA.',
      h1Heading: 'Official Driving Theory Test Simulator - Saudi Arabia'
    },
    questions: [
      {
        id: 'sa_q1',
        category: {
          ar: 'إشارات المرور',
          en: 'Traffic Signs'
        },
        ar: {
          questionText: 'ماذا تعني اللوحة الدائرية الحمراء التي تحتوي على الرقم (80) باللون الأسود؟',
          options: [
            'السرعة المقترحة هي 80 كم/ساعة',
            'الحد الأقصى للسرعة المسموح بها هو 80 كم/ساعة',
            'يجب القيادة بسرعة لا تقل عن 80 كم/ساعة',
            'المسافة المتبقية للمخرج القادم هي 80 متراً'
          ],
          explanation: 'اللوحات الدائرية ذات الإطار الأحمر هي لوحات تنظيمية تمنع تجاوز السرعة المدونة بداخلها، وهي في هذه الحالة 80 كم/ساعة.'
        },
        en: {
          questionText: 'What does a circular sign with a red border containing the number 80 mean?',
          options: [
            'Recommended speed is 80 km/h',
            'Maximum speed limit is 80 km/h',
            'Minimum speed limit is 80 km/h',
            'Distance to the next exit is 80 meters'
          ],
          explanation: 'Circular signs with a red border are regulatory signs that establish maximum limits. In this case, it restricts the maximum speed to 80 km/h.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'sa_q2',
        category: {
          ar: 'المخالفات وقوانين السير',
          en: 'Violations and Road Laws'
        },
        ar: {
          questionText: 'ما هي عقوبة استخدام الهاتف المحمول يدوياً أثناء قيادة المركبة في المملكة العربية السعودية؟',
          options: [
            'غرامة مالية تتراوح بين 50 إلى 100 ريال فقط',
            'غرامة مالية تتراوح بين 500 إلى 900 ريال كحد أدنى',
            'سحب رخصة القيادة مباشرة لمدة سنة',
            'لا توجد عقوبة محددة'
          ],
          explanation: 'وفقاً لجدول المخالفات المرورية في السعودية، فإن استخدام الهاتف المحمول يدوياً أثناء القيادة يعد مخالفة تتراوح غرامتها بين 500 إلى 900 ريال.'
        },
        en: {
          questionText: 'What is the penalty for manually using a mobile phone while driving in Saudi Arabia?',
          options: [
            'A fine ranging from 50 to 100 SAR only',
            'A fine ranging from 500 to 900 SAR',
            'Immediate suspension of the driving license for one year',
            'There is no specific penalty'
          ],
          explanation: 'According to the Saudi traffic violations list, using a hand-held mobile phone while driving is a violation subject to a fine between 500 and 900 SAR.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  ae: {
    code: 'ae',
    questionsCount: 40,
    passingScore: '80%',
    ar: {
      name: 'الإمارات العربية المتحدة',
      authority: 'معهد الإمارات للسياقة (EDI) وهيئة الطرق والمواصلات RTA',
      seoTitle: 'امتحان المعرفة التجريبي في الإمارات RTA دبي | منصة اجتياز',
      seoDescription: 'محاكاة اختبار رخصة القيادة النظري دبي وأبوظبي المعتمد من هيئة الطرق والمواصلات RTA. نماذج أسئلة إشارات وقوانين المرور في الإمارات.',
      h1Heading: 'امتحان المعرفة التجريبي RTA دبي - معهد الإمارات للسياقة'
    },
    en: {
      name: 'United Arab Emirates',
      authority: 'Emirates Driving Institute (EDI) and RTA Dubai',
      seoTitle: 'UAE RTA Theory Test Simulator - Dubai & Abu Dhabi | Ijtiaz',
      seoDescription: 'Prepare for your UAE driving license theory exam. Realistic simulator based on the official Dubai RTA knowledge test, traffic signs, and road safety guidelines.',
      h1Heading: 'RTA Dubai Knowledge and Theory Test Simulator'
    },
    questions: [
      {
        id: 'ae_q1',
        category: {
          ar: 'القيادة الوقائية والسلامة',
          en: 'Defensive Driving and Safety'
        },
        ar: {
          questionText: 'ما هي "قاعدة الثانيتين" التي توصي بها هيئة الطرق والمواصلات (RTA) في دبي؟',
          options: [
            'المدة اللازمة للانعطاف عند الإشارة الضوئية',
            'المسافة الآمنة الفاصلة بين مركبتك والمركبة التي أمامك في ظروف القيادة الطبيعية',
            'الوقت اللازم لتفعيل الكوابح عند الوقوف التام',
            'الحد الأقصى للانتظار في الدوار'
          ],
          explanation: 'تنصح RTA باتباع قاعدة الثانيتين لترك مسافة أمان كافية تتيح للسائق إيقاف المركبة بسلام عند حدوث أي طارئ مفاجئ.'
        },
        en: {
          questionText: 'What is the "two-second rule" recommended by the Roads and Transport Authority (RTA) in Dubai?',
          options: [
            'The time required to turn at a traffic light',
            'The safe following distance behind the vehicle ahead under normal driving conditions',
            'The time needed to activate brakes for a complete stop',
            'The maximum waiting time at a roundabout'
          ],
          explanation: 'The RTA advises using the two-second rule to ensure a safe gap is maintained, allowing the driver enough reaction time to stop safely in emergencies.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'ae_q2',
        category: {
          ar: 'الرموز واللوحات المرورية',
          en: 'Traffic Symbols and Signs'
        },
        ar: {
          questionText: 'ماذا تعني اللوحة المرورية التي تظهر شكلاً مثلثاً مقلوباً يحمل كلمة "قِف" أو بدونها؟',
          options: [
            'إعطاء الأفضلية للقادمين من الطرق الأخرى (افسح المجال)',
            'الوقوف الإلزامي الكامل قبل المتابعة',
            'نهاية طريق سريع',
            'ممر مشاة مقبل'
          ],
          explanation: 'المثلث المقلوب هو إشارة "أفسح المجال" أو إعطاء الأولوية للغير، ويجب على السائق التمهل أو الوقوف إن لزم الأمر للسماح بمرور المركبات الأخرى.'
        },
        en: {
          questionText: 'What does a traffic sign showing an inverted triangle mean?',
          options: [
            'Give way (Yield) to traffic on the other road',
            'Mandatory stop before proceeding',
            'End of highway',
            'Pedestrian crossing ahead'
          ],
          explanation: 'An inverted triangle is the universal sign for "Give Way" or "Yield", instructing drivers to slow down or stop if necessary to allow other traffic to pass.'
        },
        correctAnswerIndex: 0
      }
    ]
  },
  eg: {
    code: 'eg',
    questionsCount: 30,
    passingScore: '75%',
    ar: {
      name: 'جمهورية مصر العربية',
      authority: 'الإدارة العامة للمرور - وزارة الداخلية',
      seoTitle: 'امتحان المرور النظري التجريبي مصر (كمبيوتر) | منصة اجتياز',
      seoDescription: 'تدرب الآن على بنك أسئلة الحاسب الآلي النظري المعتمد للحصول على رخصة القيادة المصرية بجميع وحدات التراخيص بالمحافظات.',
      h1Heading: 'اختبار المرور النظري بالكمبيوتر - رخصة القيادة المصرية'
    },
    en: {
      name: 'Egypt',
      authority: 'General Directorate of Traffic - Ministry of Interior',
      seoTitle: 'Egypt Traffic Exam Computer Simulator - Theory Test | Ijtiaz',
      seoDescription: 'Free interactive practice test for the Egyptian driving license. Prepare for the computer-based theory exam at your local traffic authority unit.',
      h1Heading: 'Egyptian Driving License Computerized Theory Exam'
    },
    questions: [
      {
        id: 'eg_q1',
        category: {
          ar: 'قواعد السير والمرور',
          en: 'Traffic and Road Rules'
        },
        ar: {
          questionText: 'في قواعد المرور المصرية، ما هو التصرف الصحيح عند الاقتراب من تقاطع طرق غير منظم وبدون إشارات؟',
          options: [
            'الأولوية للمركبة القادمة من اليمين دائماً',
            'الأولوية للمركبة الأسرع',
            'الأولوية للمركبات الكبيرة والشاحنات فقط',
            'المرور مباشرة دون خفض السرعة'
          ],
          explanation: 'عند التقاطعات المتساوية وغير المنظمة بإشارات أو لوحات، تنص المادة القانونية في مصر على إعطاء الأولوية دائماً للقادم من جهة اليمين.'
        },
        en: {
          questionText: 'According to Egyptian traffic rules, what is the correct action when approaching an uncontrolled intersection without signals?',
          options: [
            'Priority is always given to the vehicle coming from the right',
            'Priority is given to the fastest vehicle',
            'Priority is given only to heavy trucks and buses',
            'Proceed directly without slowing down'
          ],
          explanation: 'At equal and uncontrolled intersections, Egypt’s traffic laws state that priority must always be yielded to the vehicle approaching from the right side.'
        },
        correctAnswerIndex: 0
      },
      {
        id: 'eg_q2',
        category: {
          ar: 'إشارات الطرق والممرات',
          en: 'Road Signs and Lane Markings'
        },
        ar: {
          questionText: 'ماذا يعمي الخط الأبيض المتصل المرسوم على نهر الطريق بمنتصف المسارين؟',
          options: [
            'يسمح بالتجاوز وتغيير المسار بحرية',
            'يمنع التجاوز أو الانتقال للمسار الآخر تماماً لما يشكله من خطورة',
            'طريق مخصص لسيارات الطوارئ',
            'مكان مخصص لعبور المشاة'
          ],
          explanation: 'الخط الطولي المتصل في وسط نهر الطريق يرمز إلى حظر كامل للتجاوز أو تغيير المسار نظراً لعدم أمان الرؤية أو خطورة الطريق.'
        },
        en: {
          questionText: 'What does a solid single white line drawn down the center of the road mean?',
          options: [
            'Overtaking and lane changes are permitted freely',
            'Overtaking and crossing the line are strictly prohibited due to danger',
            'Lane reserved only for emergency vehicles',
            'Designated pedestrian crossing area'
          ],
          explanation: 'A solid white line down the center of a roadway indicates that crossing the line or overtaking is prohibited because doing so is unsafe.'
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
      authority: 'شركة تزويد لتنظيم القيادة KDS والجمعية الثقافية الاجتماعية النسائية',
      seoTitle: 'اختبار القيادة النظري التجريبي الكويت (وزارة الداخلية) | منصة اجتياز',
      seoDescription: 'نماذج اختبار رخصة القيادة النظري المعتمد في دولة الكويت. أسئلة قواعد المرور، إشارات السير، والمخالفات المرورية.',
      h1Heading: 'اختبار القيادة النظري التجريبي بدولة الكويت'
    },
    en: {
      name: 'Kuwait',
      authority: 'Kuwait Driving School (KDS) & Ministry of Interior',
      seoTitle: 'Kuwait Driving Theory Test Simulator - KDS | Ijtiaz',
      seoDescription: 'Practice the official Kuwait driving license theory test questions online. Complete exam simulator covering KWT traffic laws, road signs, and safe driving principles.',
      h1Heading: 'Official Kuwaiti Driving License Theory Test Simulator'
    },
    questions: [
      {
        id: 'kw_q1',
        category: {
          ar: 'الأسبقيات والأولويات',
          en: 'Priority and Right of Way'
        },
        ar: {
          questionText: 'عند دخول الدوار في شوارع دولة الكويت، من له حق الأولوية في المرور؟',
          options: [
            'للمركبات التي تستعد لدخول الدوار',
            'للمركبات التي تسير بالفعل داخل الدوار',
            'للمركبات القادمة من اليمين فقط',
            'الأولوية للمركبة الأكبر حجماً'
          ],
          explanation: 'تنص قوانين المرور في الكويت على أن الأولوية دائماً للمركبات التي تدور داخل الدوار، وعلى المركبات الراغبة بالدخول الانتظار حتى خلو الدوار.'
        },
        en: {
          questionText: 'When entering a roundabout in Kuwait, who has the right of way?',
          options: [
            'Vehicles preparing to enter the roundabout',
            'Vehicles already circulating inside the roundabout',
            'Vehicles approaching from the right side only',
            'The vehicle with the largest size'
          ],
          explanation: 'Kuwait traffic law decrees that vehicles already inside the roundabout have absolute priority; entering vehicles must yield and wait for a safe gap.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'kw_q2',
        category: {
          ar: 'قوانين وقواعد السير',
          en: 'Road Laws and Safety Guidelines'
        },
        ar: {
          questionText: 'ما هو الإجراء القانوني عند سماع صوت صافرة إنذار مركبة طوارئ (إسعاف، إطفاء، شرطة) قادمة خلفك؟',
          options: [
            'زيادة السرعة ومحاولة الابتعاد أمامها مباشرة',
            'إفساح المجال وتغيير المسار لليمين بأمان فوراً لتمكينها من العبور بحرية',
            'الوقوف المفاجئ وسط نهر الطريق',
            'تجاهلها والاستمرار بالسير المعتاد'
          ],
          explanation: 'يجب على جميع السائقين إفساح مسار المرور فوراً لسيارات الطوارئ عبر الانحياز الآمن لليمين لتفادي أي تأخير قد يهدد حياة الآخرين.'
        },
        en: {
          questionText: 'What is the mandatory action upon hearing an approaching emergency vehicle siren (ambulance, fire, police) behind you?',
          options: [
            'Increase your speed and drive directly ahead of it',
            'Safely yield, pull over to the right, and clear the lane immediately to let it pass',
            'Stop abruptly in the middle of the road',
            'Ignore it and continue driving normally'
          ],
          explanation: 'Drivers must immediately clear the path for emergency vehicles by safely pulling over to the right lane, allowing them to pass without delay.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  qa: {
    code: 'qa',
    questionsCount: 40,
    passingScore: '80%',
    ar: {
      name: 'دولة قطر',
      authority: 'أكاديمية دله لتعليم السواقة وإدارة المرور',
      seoTitle: 'اختبار إشارات المرور وقواعد السير قطر (أكاديمية دله) | منصة اجتياز',
      seoDescription: 'تدرب على فحص الإشارات والنظري في الدوحة وأكاديمية دلة لتعليم القيادة بقطر. اختبارات محاكاة تفاعلية مطابقة للامتحان الرسمي.',
      h1Heading: 'اختبار السواقة النظري التجريبي - أكاديمية دله قطر'
    },
    en: {
      name: 'Qatar',
      authority: 'Dallah Driving Academy and Traffic Department',
      seoTitle: 'Qatar Driving Theory Test Simulator - Dallah Academy | Ijtiaz',
      seoDescription: 'Free Qatar driving theory test training. Study official traffic signals, road rules, and pass your driving computer license test at Dallah Academy Qatar.',
      h1Heading: 'Qatar Driving License Computerized Knowledge Exam'
    },
    questions: [
      {
        id: 'qa_q1',
        category: {
          ar: 'الرموز والإشارات',
          en: 'Signs and Road Symbols'
        },
        ar: {
          questionText: 'ماذا تعني الإشارة التحذيرية التي تأخذ شكل مثلث يحمل صورة "مطب صناعي" في قطر؟',
          options: [
            'نهاية الطريق المعبد والممهد',
            'الاقتراب من مطب تخفيف السرعة على الطريق، ويجب التمهل لسلامة المركبة',
            'ممر مشاة مرتفع للأطفال',
            'بداية صعود تل جبلي'
          ],
          explanation: 'اللوحة تحذر السائقين من وجود مطب صناعي مقبل لتخفيف السرعة، مما يتطلب إبطاء السرعة لحماية الركاب وأجزاء السيارة السفلية.'
        },
        en: {
          questionText: 'What does a triangular warning sign depicting a "speed hump" indicate in Qatar?',
          options: [
            'End of the paved road',
            'Approaching a speed hump on the road ahead; drivers must slow down for safety',
            'A raised pedestrian crossing for children',
            'Start of a steep hill ascent'
          ],
          explanation: 'This sign warns drivers that a speed hump is coming up, requiring them to reduce their speed to prevent vehicle damage and ensure occupant safety.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'qa_q2',
        category: {
          ar: 'القيادة الوقائية والأمان',
          en: 'Defensive Driving and Safety'
        },
        ar: {
          questionText: 'في دولة قطر، ما هي خطورة عدم ربط حزام الأمان لجميع ركاب المركبة أثناء الحركة؟',
          options: [
            'لا توجد خطورة تذكر في السرعات المنخفضة',
            'يزيد بشكل خطير من احتمالية التعرض لإصابات بليغة أو الوفاة في حال وقوع حادث، وتترتب عليه غرامات مالية',
            'يساعد فقط في الحفاظ على نظافة المقاعد',
            'يؤثر على استهلاك المحرك للوقود'
          ],
          explanation: 'ربط حزام الأمان إلزامي قانونياً لكافة ركاب السيارة بقطر، لكونه يمتص صدمة الارتطام ويمنع قذف الركاب خارج المركبة أثناء الاصطدامات.'
        },
        en: {
          questionText: 'In Qatar, what is the risk of failing to wear a seatbelt for all vehicle occupants while moving?',
          options: [
            'There is no significant risk at low speeds',
            'It severely increases the chance of serious injury or death in a collision, and incurs official fines',
            'It only helps in keeping the seats clean',
            'It affects fuel consumption'
          ],
          explanation: 'Wearing seatbelts is a legal requirement for all occupants in Qatar, as it secures passengers in place and drastically reduces fatal impact risks in accidents.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  ma: {
    code: 'ma',
    questionsCount: 40,
    passingScore: '80%',
    ar: {
      name: 'المملكة المغربية',
      authority: 'الوكالة الوطنية للسلامة الطرقية (NARSA)',
      seoTitle: 'محاكاة امتحان السياقة التجريبي بالمغرب (التشوير الطرقي) | منصة اجتياز',
      seoDescription: 'اجتاز فحص رخصة السياقة بالمغرب بنجاح مع نماذج الأسئلة الجديدة المعتمدة من الوكالة الوطنية للسلامة الطرقية NARSA وموقع كود سياقة.',
      h1Heading: 'امتحان السياقة التجريبي بالمغرب - كود موحد للسلامة الطرقية'
    },
    en: {
      name: 'Morocco',
      authority: 'National Road Safety Agency (NARSA)',
      seoTitle: 'Morocco Driving License Theory Test - NARSA Code | Ijtiaz',
      seoDescription: 'Prepare for your Moroccan driving license (Permis de conduire au Maroc). Free simulator based on the updated NARSA traffic code, rules, and road signals.',
      h1Heading: 'Morocco Driving Theory Exam Simulator - NARSA Code'
    },
    questions: [
      {
        id: 'ma_q1',
        category: {
          ar: 'التشوير الطرقي والإشارات',
          en: 'Road Signage and Signs'
        },
        ar: {
          questionText: 'في المغرب، ماذا يعني التشوير الأفقي المتمثل في خط متصل موازٍ للرصيف باللون الأصفر؟',
          options: [
            'يسمح بالوقوف والتوقف الحر للدراجات فقط',
            'يمنع التوقف والوقوف التام بجانب هذا الرصيف لأي مركبة',
            'موقف مخصص للشاحنات الثقيلة',
            'مسموح النزول المؤقت للركاب'
          ],
          explanation: 'الخط المتصل الأصفر على جانب الطريق بالمغرب يدل على منع تام للوقوف (الركن) والتوقف (الصعود والنزول المؤقت) بمحاذاة الرصيف.'
        },
        en: {
          questionText: 'In Morocco, what does a solid yellow line marked parallel to the curb on the side of the road mean?',
          options: [
            'Parking and stopping are permitted only for bicycles',
            'Stopping and parking along this curb are strictly prohibited for all vehicles',
            'Parking zone dedicated only to heavy trucks',
            'Temporary stop is allowed for passengers to get out'
          ],
          explanation: 'A solid yellow line on the curb edge in Morocco prohibits both stopping (temporary drop-offs) and parking (unattended vehicle).'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'ma_q2',
        category: {
          ar: 'القيادة والسرعة',
          en: 'Driving and Speed Rules'
        },
        ar: {
          questionText: 'ما هي السرعة القصوى القانونية المسموح بها للسيارات الخفيفة داخل المناطق الحضرية (المدن) بالمغرب؟',
          options: [
            '40 كم/ساعة',
            '60 كم/ساعة',
            '80 كم/ساعة',
            '100 كم/ساعة'
          ],
          explanation: 'السرعة داخل التجمعات السكنية والمناطق الحضرية في المغرب محددة قانونياً بـ 60 كم/ساعة كحد أقصى، ما لم تكن هناك علامات تشير لغير ذلك.'
        },
        en: {
          questionText: 'What is the maximum legal speed limit for light vehicles within urban areas (cities) in Morocco?',
          options: [
            '40 km/h',
            '60 km/h',
            '80 km/h',
            '100 km/h'
          ],
          explanation: 'The default statutory speed limit within urban zones and cities in Morocco is 60 km/h, unless signs indicate otherwise.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  jo: {
    code: 'jo',
    questionsCount: 30,
    passingScore: '75%',
    ar: {
      name: 'المملكة الأردنية الهاشمية',
      authority: 'إدارة ترخيص السواقين والمركبات بالأردن',
      seoTitle: 'الاختبار النظري لفحص السائقين الأردن (إدارة الترخيص) | منصة اجتياز',
      seoDescription: 'محاكي الفحص النظري المحوسب لتعليم القيادة المعتمد لدى إدارة ترخيص السواقين والمركبات بالأردن. أسئلة وإشارات المرور المحدثة.',
      h1Heading: 'الفحص النظري المحوسب للأردن - إدارة ترخيص السواقين'
    },
    en: {
      name: 'Jordan',
      authority: 'Driver and Vehicle Licensing Department - Jordan',
      seoTitle: 'Jordan Driving License Theory Test Simulator | Ijtiaz',
      seoDescription: 'Prepare for the computer driving license theory exam in Jordan. Study updated questions and traffic signs from Jordan licensing department.',
      h1Heading: 'Jordanian Computerized Driving License Theory Exam'
    },
    questions: [
      {
        id: 'jo_q1',
        category: {
          ar: 'قواعد وأولويات السير',
          en: 'Road Priority and Laws'
        },
        ar: {
          questionText: 'من له حق الأولوية في التقاطع عند وجود إشارة "قف" لجميع الاتجاهات بالأردن؟',
          options: [
            'المركبة التي تقف عند خط التقاطع أولاً',
            'المركبة الأكبر حجماً والأثقل',
            'المركبة الأسرع في المرور',
            'المركبة التي تنعطف جهة اليسار'
          ],
          explanation: 'عند وجود لوحة قف على جميع الاتجاهات في التقاطع، تعود الأولوية لمن يقف ويتوقف توقفاً تاماً أولاً عند خط التوقف الخاص به.'
        },
        en: {
          questionText: 'Who has the right of way at an intersection with stop signs in all directions in Jordan?',
          options: [
            'The vehicle that arrives and comes to a complete stop first',
            'The heaviest and largest vehicle',
            'The fastest vehicle to rush through',
            'The vehicle turning to the left side'
          ],
          explanation: 'At intersections where stop signs control all approaches, priority is granted based on the order of arrival—the first vehicle to stop completely goes first.'
        },
        correctAnswerIndex: 0
      },
      {
        id: 'jo_q2',
        category: {
          ar: 'ميكانيك المركبة وأمانها',
          en: 'Vehicle Mechanics and Safety'
        },
        ar: {
          questionText: 'ما هي الفائدة الأساسية من نظام منع انغلاق المكابح (ABS) بالمركبة؟',
          options: [
            'زيادة استهلاك الوقود لتسريع الوقوف',
            'منع انغلاق وانزلاق العجلات أثناء الكبح الشديد مما يسمح للسائق بالتحكم بالتوجيه وتوجيه المركبة بأمان',
            'تعطيل المحرك تلقائياً في السرعات العالية',
            'تجميل شكل إطارات السيارة الخارجي'
          ],
          explanation: 'الفائدة الجوهرية لـ ABS هي الحفاظ على دوران العجلات تحت الضغط العالي للكوابح لمنع انزلاقها، مما يمنح السائق المقدرة على توجيه السيارة وتجنب الاصطدامات.'
        },
        en: {
          questionText: 'What is the primary benefit of an Anti-lock Braking System (ABS) in a vehicle?',
          options: [
            'It increases fuel consumption to aid stopping',
            'It prevents wheels from locking up and skidding under heavy braking, allowing the driver to maintain steering control',
            'It shuts down the engine automatically at high speed',
            'It enhances the aesthetic design of the car wheels'
          ],
          explanation: 'The main goal of ABS is to keep wheels rotating under emergency braking, preventing them from locking so that the driver retains steering control and can evade obstacles.'
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
      authority: 'الإدارة العامة للمرور بالبحرين',
      seoTitle: 'اختبار السياقة النظري مملكة البحرين (المرور البحريني) | منصة اجتياز',
      seoDescription: 'محاكاة ذكية لاختبار السياقة النظري المحوسب المعتمد لدى الإدارة العامة للمرور بالبحرين. تدرب على أسئلة القواعد وعلامات المرور لضمان النجاح.',
      h1Heading: 'اختبار السياقة النظري المحوسب بمملكة البحرين'
    },
    en: {
      name: 'Bahrain',
      authority: 'General Directorate of Traffic - Bahrain',
      seoTitle: 'Bahrain Driving Theory Test Simulator - Traffic | Ijtiaz',
      seoDescription: 'Free computerized driving theory exam simulation for Bahrain driving school applicants. Practice Bahrain traffic sign rules and road safety laws.',
      h1Heading: 'Official Bahraini Driving License Computerized Exam'
    },
    questions: [
      {
        id: 'bh_q1',
        category: {
          ar: 'قوانين وإشارات المرور',
          en: 'Traffic Laws and Signs'
        },
        ar: {
          questionText: 'في البحرين، ما هي دلالة لوحة "ممنوع التجاوز" التي تحمل رسم سيارتين متجاورتين بإطار أحمر؟',
          options: [
            'يمنع تجاوز المركبات ذات المحرك لبعضها البعض على هذا الطريق تماماً حتى تظهر لوحة نهاية المنع',
            'يسمح بتجاوز الشاحنات فقط',
            'طريق ذو اتجاه واحد حصرياً',
            'مخصص لركن سيارات الأجرة'
          ],
          explanation: 'هذه الإشارة تعلن بدء منع التجاوز لكافة المركبات ذات المحرك، ما عدا الدراجات النارية ذات العجلتين دون عربة جانبية.'
        },
        en: {
          questionText: 'In Bahrain, what does the "no overtaking" sign showing two cars side-by-side inside a red circle mean?',
          options: [
            'Overtaking is strictly prohibited for all motor vehicles until the end of prohibition sign is displayed',
            'Overtaking is permitted only for large trucks',
            'The road is exclusively one-way',
            'Zone reserved for taxi parking only'
          ],
          explanation: 'This sign declares the start of a no-overtaking zone for all motor vehicles, meaning you must not pass vehicles ahead of you.'
        },
        correctAnswerIndex: 0
      },
      {
        id: 'bh_q2',
        category: {
          ar: 'القيادة الوقائية والأمان',
          en: 'Defensive Driving and Safety'
        },
        ar: {
          questionText: 'عند زيادة سرعة المركبة بمملكة البحرين، كيف تتأثر مسافة الوقوف الإجمالية؟',
          options: [
            'تظل ثابتة ولا تتغير',
            'تزداد بشكل كبير طردياً مع مربع السرعة وتتطلب مسافة أطول للتوقف الكامل بأمان',
            'تقل السرعة وتصبح مسافة التوقف أقصر',
            'تعتمد فقط على حجم إطارات السيارة الخلفية'
          ],
          explanation: 'مسافة التوقف الإجمالية تزداد بشكل متسارع مع زيادة السرعة لأن الطاقة الحركية تتضاعف، مما يستلزم مسافات كبح أطول بكثير عند السرعات العالية.'
        },
        en: {
          questionText: 'As you increase your vehicle speed in Bahrain, how is the total stopping distance affected?',
          options: [
            'It remains completely constant and does not change',
            'It increases significantly and exponentially, requiring a much longer distance to come to a safe stop',
            'It decreases, making the stopping distance shorter',
            'It depends only on the size of the rear car tires'
          ],
          explanation: 'Higher speeds drastically increase kinetic energy, meaning the total stopping distance (thinking distance + braking distance) increases exponentially.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  us: {
    code: 'us',
    questionsCount: 50,
    passingScore: '80%',
    ar: {
      name: 'الولايات المتحدة الأمريكية',
      authority: 'إدارة المركبات الآلية (DMV)',
      seoTitle: 'محاكي اختبار القيادة الأمريكي DMV بالعربي | منصة اجتياز',
      seoDescription: 'استعد لاختبار القيادة النظري الأمريكي DMV. نماذج أسئلة مترجمة للعربية تغطي قوانين المرور في جميع الولايات الأمريكية.',
      h1Heading: 'محاكي اختبار القيادة الأمريكي - DMV Written Test'
    },
    en: {
      name: 'United States of America',
      authority: 'Department of Motor Vehicles (DMV)',
      seoTitle: 'Free DMV Written Test Simulator - US Driving License | Ijtiaz',
      seoDescription: 'Practice for your official US DMV Written Knowledge Test. Realistic mock exams covering road rules and traffic signs for all states.',
      h1Heading: 'Official DMV Written Knowledge Test Simulator'
    },
    questions: [
      {
        id: 'us_q1',
        category: { ar: 'قوانين المرور والخمور', en: 'Traffic Laws and Alcohol' },
        ar: {
          questionText: 'ما هو الحد القانوني لتركيز الكحول في الدم (BAC) للسائقين الذين تزيد أعمارهم عن 21 عاماً في معظم الولايات الأمريكية؟',
          options: ['0.05%', '0.08%', '0.10%', '0.15%'],
          explanation: 'في معظم ولايات أمريكا، يعتبر السائق مخالفا للقانون (DUI) إذا كان تركيز الكحول في دمه 0.08% أو أعلى.'
        },
        en: {
          questionText: 'What is the legal Blood Alcohol Concentration (BAC) limit for drivers 21 and older in most US states?',
          options: ['0.05%', '0.08%', '0.10%', '0.15%'],
          explanation: 'In almost all US states, it is illegal to drive with a Blood Alcohol Concentration (BAC) of 0.08% or higher.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q2',
        category: { ar: 'قواعد الطريق والحافلات المدرسية', en: 'Road Rules and School Buses' },
        ar: {
          questionText: 'متى يجب عليك التوقف عند اقترابك من حافلة مدرسية متوقفة مع تشغيل أضوائها الحمراء الوامضة؟',
          options: [
            'فقط إذا كنت تسير خلف الحافلة',
            'دائماً، بغض النظر عن اتجاه سيرك، ما لم يكن الطريق مقسوماً بحاجز في المنتصف',
            'فقط إذا كان هناك أطفال يعبرون الطريق',
            'لا حاجة للتوقف إذا كنت تسير بسرعة منخفضة'
          ],
          explanation: 'يجب التوقف التام عند رؤية الأضواء الحمراء الوامضة للحافلة المدرسية لحماية الأطفال، ويمنع التجاوز حتى تنطفئ الأضواء.'
        },
        en: {
          questionText: 'When must you stop for a school bus that is stopped with its red lights flashing?',
          options: [
            'Only if you are following the bus',
            'In all directions, unless the roadway is divided by a median or barrier',
            'Only if you see children crossing',
            'You don\'t need to stop if you are driving slowly'
          ],
          explanation: 'Drivers must stop in both directions for a school bus with flashing red lights to ensure child safety, unless there is a physical median separating the directions.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q3',
        category: { ar: 'ممرات الطوارئ وحق الأولوية', en: 'Emergency Lanes and Right of Way' },
        ar: {
          questionText: 'ماذا يجب أن تفعل عند رؤية مركبة طوارئ (إسعاف أو شرطة) خلفك تطلق أضواء التحذير وصفارات الإنذار؟',
          options: [
            'زيادة السرعة والابتعاد عنها',
            'التوقف فوراً في مكانك',
            'الانحراف بأمان إلى جهة اليمين والتوقف للسماح لها بالمرور',
            'تغيير المسار لليسار وفتح الطريق'
          ],
          explanation: 'يفرض قانون "Move Over" في الولايات المتحدة على السائقين إخلاء المسار لمركبات الطوارئ عن طريق الانتقال لليمين والتوقف.'
        },
        en: {
          questionText: 'What should you do when you see an emergency vehicle (ambulance or police) behind you with flashing lights and sirens?',
          options: [
            'Speed up and stay ahead of it',
            'Stop immediately in your lane',
            'Safely pull over to the right edge of the road and stop to let it pass',
            'Change to the left lane to clear the path'
          ],
          explanation: 'The "Move Over" laws in the US require drivers to yield the right-of-way to emergency vehicles by pulling over to the right and stopping.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q4',
        category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
        ar: {
          questionText: 'ماذا تعني إشارة المرور ذات الشكل الثماني (8 أضلاع)؟',
          options: ['ممنوع الدخول', 'توقف (Stop)', 'إفساح الطريق (Yield)', 'تحذير'],
          explanation: 'الشكل الثماني مخصص حصرياً لإشارة التوقف (Stop) في جميع الولايات الأمريكية.'
        },
        en: {
          questionText: 'What does an octagon-shaped (8-sided) traffic sign mean?',
          options: ['No Entry', 'Stop', 'Yield', 'Warning'],
          explanation: 'The octagon shape is used exclusively for Stop signs in all US states.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q5',
        category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
        ar: {
          questionText: 'ماذا تعني إشارة المرور المثلثة المقلوبة؟',
          options: ['توقف', 'إفساح الطريق (Yield)', 'طريق باتجاه واحد', 'منطقة مدارس'],
          explanation: 'المثلث المقلوب هو الشكل العالمي والمحلي في أمريكا لإشارة إفساح الطريق (Yield).'
        },
        en: {
          questionText: 'What does a triangular, downward-pointing traffic sign mean?',
          options: ['Stop', 'Yield', 'One Way', 'School Zone'],
          explanation: 'A triangle pointing downwards is the standard shape for a Yield sign.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q6',
        category: { ar: 'حق الأولوية', en: 'Right of Way' },
        ar: {
          questionText: 'عند وصول سيارتين إلى تقاطع "توقف في أربع اتجاهات" (4-way stop) في نفس الوقت، لمن تكون الأولوية؟',
          options: [
            'للسيارة الأكبر حجماً',
            'للسيارة الموجودة على جهة اليمين',
            'للسيارة الموجودة على جهة اليسار',
            'للسيارة التي تسير بسرعة أكبر'
          ],
          explanation: 'القاعدة الذهبية في التقاطعات هي أن السائق على اليسار يجب أن يفسح المجال للسائق الموجود على اليمين إذا وصلا في نفس الوقت.'
        },
        en: {
          questionText: 'When two vehicles arrive at a 4-way stop intersection at the same time, who has the right of way?',
          options: [
            'The larger vehicle',
            'The vehicle on the right',
            'The vehicle on the left',
            'The vehicle traveling faster'
          ],
          explanation: 'At a 4-way stop, if two vehicles arrive at the same time, the driver on the left must yield to the driver on the right.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q7',
        category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
        ar: {
          questionText: 'ماذا يعني الخط الأصفر المتصل المزدوج في منتصف الطريق؟',
          options: [
            'يسمح بالتجاوز بحذر',
            'يمنع التجاوز في كلا الاتجاهين',
            'يسمح بالتجاوز فقط في النهار',
            'منطقة مخصصة لوقوف الطوارئ'
          ],
          explanation: 'الخط الأصفر المتصل المزدوج يعني منع التجاوز تماماً للمركبات في كلا الاتجاهين.'
        },
        en: {
          questionText: 'What does a double solid yellow line in the center of the road mean?',
          options: [
            'Passing is allowed with caution',
            'Passing is prohibited in both directions',
            'Passing is allowed only during the day',
            'Emergency parking zone'
          ],
          explanation: 'Double solid yellow lines indicate that passing is not allowed for vehicles in either direction.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q8',
        category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
        ar: {
          questionText: 'ما هي المسافة التي يجب أن تتركها بينك وبين السيارة التي أمامك (قاعدة الثواني)؟',
          options: ['ثانية واحدة', 'ثانيتان على الأقل في الظروف المثالية', 'ثلاث ثوانٍ أو أكثر لزيادة الأمان', 'لا توجد مسافة محددة'],
          explanation: 'تنصح معظم إدارات المرور (DMV) بترك مسافة لا تقل عن 3 ثوانٍ بينك وبين المركبة التي أمامك لضمان التوقف الآمن.'
        },
        en: {
          questionText: 'What is the recommended following distance behind another vehicle (the seconds rule)?',
          options: ['1 second', 'At least 2 seconds in ideal conditions', '3 seconds or more for better safety', 'There is no specific distance'],
          explanation: 'Most DMV manuals recommend a following distance of at least 3 seconds to allow enough time to react to hazards.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q9',
        category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
        ar: {
          questionText: 'ماذا يجب أن تفعل إذا بدأت سيارتك في الانزلاق (skidding)؟',
          options: [
            'الضغط على الفرامل بقوة',
            'توجيه المقود في عكس اتجاه الانزلاق',
            'توجيه المقود في نفس اتجاه انزلاق الجزء الخلفي للسيارة',
            'زيادة السرعة لاستعادة التوازن'
          ],
          explanation: 'لاستعادة السيطرة أثناء الانزلاق، وجه المقود في الاتجاه الذي ينزلق إليه الجزء الخلفي من سيارتك.'
        },
        en: {
          questionText: 'What should you do if your vehicle begins to skid?',
          options: [
            'Brake hard',
            'Turn the steering wheel in the opposite direction of the skid',
            'Turn the steering wheel in the direction the back of the vehicle is skidding',
            'Increase speed to regain balance'
          ],
          explanation: 'To recover from a skid, you should steer into the direction of the skid (the direction the rear of the car is sliding).'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q10',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'متى يجب عليك تشغيل أضواء الإشارة (Turn Signals) قبل الانعطاف؟',
          options: [
            'عند البدء في الانعطاف فقط',
            'قبل 100 قدم على الأقل من الانعطاف',
            'قبل 500 قدم في الطرق السريعة',
            'الخياران الثاني والثالث صحيحان'
          ],
          explanation: 'يجب التنبيه قبل 100 قدم في شوارع المدينة، وحوالي 500 قدم على الطرق السريعة قبل تغيير المسار أو الانعطاف.'
        },
        en: {
          questionText: 'When should you use your turn signals before making a turn?',
          options: [
            'Only when you start turning',
            'At least 100 feet before the turn',
            'At least 500 feet on highways',
            'Both the second and third options are correct'
          ],
          explanation: 'In most states, you must signal at least 100 feet before turning in city areas and more on highways.'
        },
        correctAnswerIndex: 3
      },
      {
        id: 'us_q11',
        category: { ar: 'الوقوف والتوقف', en: 'Parking' },
        ar: {
          questionText: 'عند الوقوف في منحدر (جهة الصعود) مع وجود رصيف، كيف يجب توجيه العجلات الأمامية؟',
          options: [
            'بعيداً عن الرصيف (نحو الشارع)',
            'نحو الرصيف',
            'بشكل مستقيم',
            'لا يهم اتجاه العجلات'
          ],
          explanation: 'عند الوقوف صعوداً مع وجود رصيف، وجه العجلات بعيداً عن الرصيف (Turn wheels away from curb) حتى إذا تحركت السيارة يسندها الرصيف.'
        },
        en: {
          questionText: 'When parking uphill next to a curb, how should you turn your front wheels?',
          options: [
            'Away from the curb',
            'Toward the curb',
            'Straight ahead',
            'It doesn\'t matter'
          ],
          explanation: 'When parking uphill with a curb, turn your wheels away from the curb so that if the car rolls, the back of the front tire will hit the curb.'
        },
        correctAnswerIndex: 0
      },
      {
        id: 'us_q12',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'ماذا يعني الضوء الأحمر الوامض في إشارة المرور؟',
          options: [
            'تحذير من خطر قادم',
            'نفس معنى إشارة "توقف" (Stop sign)',
            'يجب زيادة السرعة للمرور بسرعة',
            'الإشارة معطلة ويجب تجاهلها'
          ],
          explanation: 'الضوء الأحمر الوامض يعني توقف تماماً، ثم تحرك عندما يكون الطريق خالياً وآمناً (نفس قاعدة Stop sign).'
        },
        en: {
          questionText: 'What does a flashing red traffic light mean?',
          options: [
            'Warning of an upcoming hazard',
            'The same as a "Stop" sign',
            'You must speed up to clear the intersection',
            'The light is broken and should be ignored'
          ],
          explanation: 'A flashing red light is treated the same as a stop sign: stop completely and proceed when safe.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q13',
        category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
        ar: {
          questionText: 'ما هي دلالة اللون البرتقالي في إشارات الطريق؟',
          options: ['إشارات تنظيمية', 'إشارات إرشادية للمتنزهات', 'إشارات مناطق العمل والبناء', 'إشارات تحذير عامة'],
          explanation: 'اللون البرتقالي مخصص دائماً لمناطق البناء وصيانة الطرق (Construction and Maintenance).'
        },
        en: {
          questionText: 'What is the meaning of the color orange on road signs?',
          options: ['Regulatory signs', 'Guide signs for parks', 'Construction and maintenance zones', 'General warning signs'],
          explanation: 'Orange signs are used to indicate construction, maintenance, or temporary road work zones.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q14',
        category: { ar: 'حدود السرعة', en: 'Speed Limits' },
        ar: {
          questionText: 'ما هي السرعة القصوى المعتادة في المناطق السكنية في معظم الولايات ما لم توجد لوحة تشير لغير ذلك؟',
          options: ['15 ميل/س', '25 ميل/س', '35 ميل/س', '45 ميل/س'],
          explanation: 'في معظم الولايات الأمريكية، السرعة الافتراضية في المناطق السكنية والمناطق التجارية هي 25 ميلاً في الساعة.'
        },
        en: {
          questionText: 'What is the standard speed limit in residential areas in most states unless otherwise posted?',
          options: ['15 mph', '25 mph', '35 mph', '45 mph'],
          explanation: 'Unless signs indicate otherwise, the speed limit in residential districts is usually 25 mph.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q15',
        category: { ar: 'علامات الطريق', en: 'Lane Markings' },
        ar: {
          questionText: 'ماذا يعني الخط الأبيض المتقطع بين مسارات السير؟',
          options: [
            'يمنع تغيير المسار',
            'يسمح بتغيير المسار عندما يكون ذلك آمناً',
            'منطقة مخصصة للدراجات فقط',
            'نهاية الطريق السريع'
          ],
          explanation: 'الخطوط البيضاء المتقطعة تفصل بين مسارات السير المتجهة في نفس الاتجاه، ويسمح بعبورها لتغيير المسار.'
        },
        en: {
          questionText: 'What does a broken white line between lanes of traffic mean?',
          options: [
            'Lane changes are prohibited',
            'You may change lanes when it is safe to do so',
            'The lane is for bicycles only',
            'The highway is ending'
          ],
          explanation: 'Broken white lines separate lanes of traffic moving in the same direction. You may cross them to change lanes.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q16',
        category: { ar: 'المشاة', en: 'Pedestrians' },
        ar: {
          questionText: 'لمن تكون الأولوية دائماً في ممرات المشاة سواء كانت مخططة أو غير مخططة؟',
          options: ['للسيارة الأسرع', 'للمشاة', 'للسيارة المنعطفة يميناً', 'لأحد، يجب على الجميع التوقف'],
          explanation: 'يجب على السائقين دائماً إعطاء حق الأولوية للمشاة الذين يعبرون الطريق في ممرات المشاة.'
        },
        en: {
          questionText: 'Who always has the right of way in a crosswalk, whether it is marked or unmarked?',
          options: ['The faster vehicle', 'Pedestrians', 'The vehicle turning right', 'No one, everyone must stop'],
          explanation: 'Drivers must yield the right of way to pedestrians crossing the street within any marked or unmarked crosswalk.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q17',
        category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
        ar: {
          questionText: 'ماذا يعني الضوء الأصفر الوامض في إشارة المرور؟',
          options: [
            'توقف تماماً قبل المرور',
            'هدئ السرعة واعبر التقاطع بحذر',
            'زيادة السرعة لتجنب الضوء الأحمر',
            'توقف وانتظر الضوء الأخضر'
          ],
          explanation: 'الضوء الأصفر الوامض يعني "تحذير"؛ يجب عليك تهدئة السرعة وتوخي الحذر عند عبور التقاطع.'
        },
        en: {
          questionText: 'What does a flashing yellow traffic light mean?',
          options: [
            'Stop completely before proceeding',
            'Slow down and proceed with caution through the intersection',
            'Speed up to avoid the red light',
            'Stop and wait for the green light'
          ],
          explanation: 'A flashing yellow light is a warning to slow down and proceed with caution.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q18',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'ماذا يجب أن تفعل إذا فاتك مخرج الطريق السريع (Highway Exit)؟',
          options: [
            'التوقف والرجوع للخلف على الكتف',
            'الالتفاف والقيادة في عكس الاتجاه',
            'الاستمرار حتى المخرج التالي',
            'القيادة عبر المنطقة العشبية في الوسط'
          ],
          explanation: 'يمنع تماماً الرجوع للخلف أو الالتفاف على الطرق السريعة. يجب عليك الاستمرار حتى المخرج التالي والعودة من هناك.'
        },
        en: {
          questionText: 'What should you do if you miss your highway exit?',
          options: [
            'Stop and back up on the shoulder',
            'Turn around and drive against traffic',
            'Continue to the next exit',
            'Drive across the grassy median'
          ],
          explanation: 'Never back up or turn around on a highway. If you miss your exit, go to the next one.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q19',
        category: { ar: 'تقاطعات السكك الحديدية', en: 'Rail Crossings' },
        ar: {
          questionText: 'عند الاقتراب من تقاطع سكة حديد مع أضواء حمراء وامضة، كم يجب أن تبعد مسافة توقفك عن القضبان؟',
          options: [
            'بين 5 و 10 أقدام',
            'بين 15 و 50 قدماً من أقرب قضيب',
            'على القضبان مباشرة',
            'لا توجد مسافة محددة'
          ],
          explanation: 'لأمانك، يجب التوقف على بعد يتراوح بين 15 إلى 50 قدماً من أقرب قضيب سكة حديد عند تفعيل أجهزة التحذير.'
        },
        en: {
          questionText: 'When approaching a railroad crossing with flashing red lights, how far should you stop from the nearest rail?',
          options: [
            'Between 5 and 10 feet',
            'Between 15 and 50 feet from the nearest rail',
            'Directly on the rails',
            'There is no specific distance'
          ],
          explanation: 'You must stop between 15 and 50 feet from the nearest rail when railroad crossing signals are activated.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q20',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'ما هي "النقطة العمياء" (Blind Spot)؟',
          options: [
            'منطقة أمام السيارة لا يراها السائق',
            'منطقة على جانبي السيارة لا يمكن رؤيتها من خلال المرايا',
            'القيادة ليلاً دون أضواء',
            'عندما تكون الشمس في عين السائق'
          ],
          explanation: 'النقطة العمياء هي المناطق الجانبية التي لا تغطيها المرايا، ويجب على السائق الالتفات برأسه للتأكد من خلوها قبل تغيير المسار.'
        },
        en: {
          questionText: 'What is a "Blind Spot"?',
          options: [
            'An area in front of the car the driver cannot see',
            'An area on the sides of the vehicle not visible in the mirrors',
            'Driving at night without lights',
            'When the sun is in the driver\'s eyes'
          ],
          explanation: 'Blind spots are areas around your vehicle that you cannot see in your mirrors. You must turn your head to check them before changing lanes.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q21',
        category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
        ar: {
          questionText: 'ماذا يعني قانون "الموافقة الضمنية" (Implied Consent Law)؟',
          options: [
            'الموافقة على شراء تأمين السيارة',
            'الموافقة على الخضوع لاختبار كيميائي للكحول أو المخدرات عند طلب الشرطة',
            'الموافقة على الالتزام بحدود السرعة',
            'الموافقة على تجديد الرخصة كل 5 سنوات'
          ],
          explanation: 'بمجرد حصولك على رخصة القيادة، فأنت توافق ضمنياً على الخضوع لاختبارات الكحول (تنفس أو دم) إذا اشتبه الشرطي في قيادتك تحت التأثير.'
        },
        en: {
          questionText: 'What does the "Implied Consent Law" mean?',
          options: [
            'Agreement to purchase car insurance',
            'Agreement to take a chemical test for alcohol or drugs if requested by law enforcement',
            'Agreement to follow the speed limit',
            'Agreement to renew your license every 5 years'
          ],
          explanation: 'By holding a driver\'s license, you have given your consent to take a breath, blood, or urine test if a police officer suspects you are driving under the influence.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q22',
        category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
        ar: {
          questionText: 'متى يجب عليك استخدام أضواء السيارة الأمامية (Headlights)؟',
          options: [
            'ليلاً فقط',
            'منذ نصف ساعة بعد غروب الشمس وحتى نصف ساعة قبل شروقها، وفي أي وقت تكون الرؤية فيه ضعيفة',
            'عندما تكون مستعجلاً فقط',
            'داخل الأنفاق فقط'
          ],
          explanation: 'يجب تشغيل الأضواء ليلاً، وفي الظروف الجوية السيئة (مطر، ضباب) أو أي وقت لا يمكنك فيه رؤية الأشياء بوضوح لمسافة 1000 قدم.'
        },
        en: {
          questionText: 'When must you use your vehicle\'s headlights?',
          options: [
            'At night only',
            'From half an hour after sunset to half an hour before sunrise, and whenever visibility is poor',
            'Only when you are in a hurry',
            'Only inside tunnels'
          ],
          explanation: 'Headlights must be used from 30 minutes after sunset until 30 minutes before sunrise, and at any other time when visibility is low.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q23',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'ماذا تعني إشارة السهم الأخضر مع الضوء الأحمر؟',
          options: [
            'يجب التوقف تماماً',
            'يمكنك الانعطاف بحذر في اتجاه السهم مع إعطاء الأولوية للمشاة وحركة السير',
            'يمنع الانعطاف في هذا الاتجاه',
            'انتظر حتى يتحول الضوء الأحمر إلى أخضر'
          ],
          explanation: 'السهم الأخضر يعني "انعطاف محمي" (Protected Turn)؛ يمكنك الانعطاف في اتجاه السهم بعد التأكد من خلو ممر المشاة.'
        },
        en: {
          questionText: 'What does a green arrow shown with a red light mean?',
          options: [
            'You must stop completely',
            'You may turn cautiously in the direction of the arrow after yielding to pedestrians and traffic',
            'Turns in that direction are prohibited',
            'Wait until the red light turns green'
          ],
          explanation: 'A green arrow means you have a "protected" turn in that direction, but you must still yield to pedestrians and traffic already in the intersection.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q24',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'ماذا يعني مسار HOV؟',
          options: [
            'مسار للسيارات الثقيلة فقط',
            'مسار للمركبات التي تحمل عدداً أدنى من الركاب (عادة 2 أو أكثر)',
            'مسار مخصص للسرعات العالية جداً',
            'مسار للخروج من الطريق السريع'
          ],
          explanation: 'HOV تعني High Occupancy Vehicle، وهي مسارات مخصصة لتشجيع مشاركة الركوب وتقليل الازدحام.'
        },
        en: {
          questionText: 'What does an HOV lane mean?',
          options: [
            'A lane for heavy vehicles only',
            'A lane for vehicles with a minimum number of occupants (usually 2 or more)',
            'A lane for very high speeds',
            'A lane for exiting the highway'
          ],
          explanation: 'HOV stands for High Occupancy Vehicle. These lanes are reserved for carpools and other vehicles with more than one person.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q25',
        category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
        ar: {
          questionText: 'من هم الأشخاص الملزمون بارتداء حزام الأمان في الولايات المتحدة؟',
          options: [
            'السائق فقط',
            'السائق والركاب في المقعد الأمامي فقط',
            'جميع الركاب في السيارة في معظم الولايات',
            'الأطفال فقط'
          ],
          explanation: 'تفرض معظم الولايات الأمريكية استخدام أحزمة الأمان لجميع الركاب لتقليل الإصابات والوفيات في الحوادث.'
        },
        en: {
          questionText: 'Who is required to wear a seat belt in the United States?',
          options: [
            'The driver only',
            'The driver and front-seat passengers only',
            'All passengers in the vehicle in most states',
            'Children only'
          ],
          explanation: 'Seat belt laws vary by state, but most require the driver and all passengers to wear seat belts.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q26',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'عند الانعطاف يميناً في ضوء أحمر، ماذا يجب أن تفعل أولاً؟',
          options: [
            'الانعطاف دون توقف إذا كان الطريق خالياً',
            'التوقف تماماً والتأكد من خلو الطريق وعدم وجود لوحة تمنع ذلك',
            'إطلاق المنبه الصوتي ثم الانعطاف',
            'انتظر دائماً الضوء الأخضر'
          ],
          explanation: 'يسمح بالانعطاف يميناً بعد التوقف التام (Right on Red) في معظم الولايات ما لم توجد لوحة "No Turn on Red".'
        },
        en: {
          questionText: 'When making a right turn on a red light, what must you do first?',
          options: [
            'Turn without stopping if the road is clear',
            'Come to a complete stop and yield to traffic and pedestrians unless a sign prohibits it',
            'Honk your horn and then turn',
            'Always wait for the green light'
          ],
          explanation: 'In most states, you may turn right on red after coming to a complete stop, unless a sign says otherwise.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q27',
        category: { ar: 'الدوارات', en: 'Roundabouts' },
        ar: {
          questionText: 'عند دخول الدوار (Roundabout)، لمن يجب أن تعطي الأولوية؟',
          options: [
            'للسيارات التي تدخل معك',
            'للمركبات الموجودة بالفعل داخل الدوار والقادمة من اليسار',
            'لا أحد، الأولوية لمن يدخل أولاً',
            'للمركبات القادمة من جهة اليمين'
          ],
          explanation: 'القاعدة الأساسية في الدوارات هي إعطاء الأولوية دائماً لحركة السير الموجودة مسبقاً داخل الدوار.'
        },
        en: {
          questionText: 'When entering a roundabout, who must you yield the right of way to?',
          options: [
            'Vehicles entering at the same time',
            'Traffic already in the roundabout, approaching from the left',
            'No one, priority goes to the first to enter',
            'Vehicles coming from the right'
          ],
          explanation: 'Always yield to traffic already in the roundabout before you enter.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q28',
        category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
        ar: {
          questionText: 'ما هو التصرف الصحيح عند سماع صفارات إنذار ومركبة طوارئ تقترب في طريق مقسوم؟',
          options: [
            'التوقف في مكانك فوراً',
            'الانحراف لليمين والتوقف إذا كنت في نفس اتجاه مركبة الطوارئ',
            'تجاهلها إذا كنت في الاتجاه المقابل واليفصل بينكما حاجز',
            'الخياران الثاني والثالث صحيحان'
          ],
          explanation: 'يجب إخلاء الطريق لمركبات الطوارئ. إذا كان هناك حاجز مادي، لا يحتاج السائقون في الاتجاه المعاكس للتوقف.'
        },
        en: {
          questionText: 'What is the correct action when you hear sirens and an emergency vehicle approaches on a divided highway?',
          options: [
            'Stop exactly where you are',
            'Pull over to the right and stop if you are traveling in the same direction',
            'Ignore it if you are in the opposite direction and separated by a barrier',
            'Both the second and third options are correct'
          ],
          explanation: 'You must pull over to the right for emergency vehicles. On a divided highway, traffic going the opposite way usually doesn\'t have to stop.'
        },
        correctAnswerIndex: 3
      },
      {
        id: 'us_q29',
        category: { ar: 'مناطق العمل', en: 'Work Zones' },
        ar: {
          questionText: 'ماذا يجب أن تفعل عند القيادة عبر منطقة عمل (Work Zone)؟',
          options: [
            'زيادة السرعة للمرور بسرعة',
            'تغيير المسار بشكل متكرر',
            'الالتزام بالسرعة المحددة والانتباه لعمال الطريق والإشارات',
            'استخدام المنبه الصوتي لتنبيه العمال'
          ],
          explanation: 'مناطق العمل خطيرة؛ يجب الالتزام بالسرعة المنخفضة ومضاعفة الانتباه لسلامة العمال.'
        },
        en: {
          questionText: 'What should you do when driving through a work zone?',
          options: [
            'Speed up to pass quickly',
            'Change lanes frequently',
            'Follow the posted speed limit and watch for workers and equipment',
            'Use your horn to alert workers'
          ],
          explanation: 'Work zones can be unpredictable. You must slow down, follow signs, and be extra alert for road workers.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q30',
        category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
        ar: {
          questionText: 'كيف يمكنك تجنب "القيادة المشتتة" (Distracted Driving)؟',
          options: [
            'استخدام الهاتف باليد أثناء القيادة',
            'وضع الهاتف في وضع "عدم الإزعاج" والتركيز بالكامل على الطريق',
            'القراءة أثناء التوقف في الإشارة',
            'الأكل والشرب أثناء القيادة'
          ],
          explanation: 'التركيز الذهني والبصري الكامل على الطريق هو مفتاح القيادة الآمنة وتجنب الحوادث.'
        },
        en: {
          questionText: 'How can you avoid "Distracted Driving"?',
          options: [
            'Using your phone by hand while driving',
            'Putting your phone on "Do Not Disturb" and focusing entirely on the road',
            'Reading while stopped at a red light',
            'Eating and drinking while driving'
          ],
          explanation: 'Distracted driving is a leading cause of accidents. Keep your eyes and mind on the road at all times.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q31',
        category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
        ar: {
          questionText: 'ماذا يعني الخط الأصفر المتقطع بجانب الخط الأصفر المتصل؟',
          options: [
            'يمنع التجاوز من كلا الجانبين',
            'يسمح بالتجاوز فقط من جانب الخط المتقطع',
            'يسمح بالتجاوز فقط من جانب الخط المتصل',
            'طريق مخصص للشاحنات'
          ],
          explanation: 'إذا كان الخط الذي بجانبك متقطعاً، يمكنك التجاوز. إذا كان متصلاً، يمنع التجاوز.'
        },
        en: {
          questionText: 'What does a broken yellow line alongside a solid yellow line mean?',
          options: [
            'Passing is prohibited from both sides',
            'Passing is permitted only from the side of the broken line',
            'Passing is permitted only from the side of the solid line',
            'A lane reserved for trucks'
          ],
          explanation: 'If the broken line is on your side, you may pass. If the solid line is on your side, you may not pass.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q32',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'عند القيادة في الضباب الكثيف، ما هي الأضواء التي يجب استخدامها؟',
          options: [
            'الأضواء العالية (High beams)',
            'الأضواء المنخفضة (Low beams)',
            'أضواء الطوارئ (Hazards)',
            'لا تستخدم الأضواء أبداً'
          ],
          explanation: 'الأضواء العالية تنعكس على الضباب وتسبب وهجاً يقلل الرؤية؛ الأضواء المنخفضة هي الأنسب.'
        },
        en: {
          questionText: 'When driving in heavy fog, which headlights should you use?',
          options: [
            'High beams',
            'Low beams',
            'Hazard lights',
            'No lights at all'
          ],
          explanation: 'Low beams should be used in fog. High beams reflect off the fog and create glare, making it harder to see.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q33',
        category: { ar: 'حالات الطوارئ', en: 'Emergency Situations' },
        ar: {
          questionText: 'ماذا يجب أن تفعل إذا انفجر أحد إطارات السيارة أثناء القيادة؟',
          options: [
            'الضغط على الفرامل بقوة فوراً',
            'زيادة السرعة لاستعادة السيطرة',
            'الإمساك بالمقود بقوة ورفع القدم عن دواسة الوقود والتهدئة تدريجياً',
            'القفز من السيارة'
          ],
          explanation: 'عند انفجار الإطار، حافظ على هدوئك، لا تضغط الفرامل بعنف، ووجه السيارة ببطء إلى جانب الطريق.'
        },
        en: {
          questionText: 'What should you do if one of your tires blows out while driving?',
          options: [
            'Brake hard immediately',
            'Speed up to regain control',
            'Grip the steering wheel firmly, take your foot off the gas, and slow down gradually',
            'Jump out of the vehicle'
          ],
          explanation: 'In a tire blowout, steer straight, ease off the gas, and brake gently only when the vehicle is under control.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q34',
        category: { ar: 'إشارات اليد', en: 'Hand Signals' },
        ar: {
          questionText: 'ما هي إشارة اليد الصحيحة للتباطؤ أو التوقف؟',
          options: [
            'مد الذراع واليد لأسفل مع توجيه الراحة للخلف',
            'مد الذراع واليد بشكل مستقيم',
            'مد الذراع واليد لأعلى',
            'تحريك اليد في حركة دائرية'
          ],
          explanation: 'إشارة اليد للتوقف أو التباطؤ هي مد الذراع اليسرى خارج النافذة وتوجيهها للأسفل.'
        },
        en: {
          questionText: 'What is the correct hand signal for slowing down or stopping?',
          options: [
            'Arm and hand extended downward, palm facing the rear',
            'Arm and hand extended straight out',
            'Arm and hand extended upward',
            'Moving hand in a circular motion'
          ],
          explanation: 'To signal a stop or decrease in speed using hand signals, extend your left arm downward.'
        },
        correctAnswerIndex: 0
      },
      {
        id: 'us_q35',
        category: { ar: 'إشارات اليد', en: 'Hand Signals' },
        ar: {
          questionText: 'ما هي إشارة اليد الصحيحة للانعطاف لليمين؟',
          options: [
            'مد الذراع واليد لأسفل',
            'مد الذراع واليد بشكل مستقيم',
            'مد الذراع واليد لأعلى بزاوية 90 درجة',
            'تحريك اليد لليسار'
          ],
          explanation: 'إشارة اليد للانعطاف لليمين هي مد الذراع اليسرى خارج النافذة وثنيها للأعلى من الكوع.'
        },
        en: {
          questionText: 'What is the correct hand signal for a right turn?',
          options: [
            'Arm and hand extended downward',
            'Arm and hand extended straight out',
            'Arm and hand extended upward at a 90-degree angle',
            'Moving hand to the left'
          ],
          explanation: 'To signal a right turn, extend your left arm out and bend it upward at the elbow.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q36',
        category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
        ar: {
          questionText: 'ماذا يجب أن تفعل إذا كانت هناك سيارة تلتصق بك من الخلف (Tailgating)؟',
          options: [
            'الضغط على الفرامل فجأة لتنبيههم',
            'زيادة السرعة والابتعاد عنهم',
            'الانتقال للمسار الأيمن تدريجياً والسماح لهم بالتجاوز',
            'تجاهلهم تماماً'
          ],
          explanation: 'أفضل طريقة للتعامل مع الملتصقين من الخلف هي السماح لهم بالتجاوز بسلام لتجنب وقوع حادث تصادم خلفي.'
        },
        en: {
          questionText: 'What should you do if another driver is tailgating you?',
          options: [
            'Brake suddenly to warn them',
            'Speed up to get away',
            'Gradually move to the right lane and let them pass',
            'Ignore them completely'
          ],
          explanation: 'If someone is following too closely, the safest move is to let them pass by moving to another lane or pulling over when safe.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q37',
        category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
        ar: {
          questionText: 'ماذا يعني الضوء الأحمر الثابت في إشارة المرور؟',
          options: [
            'توقف تماماً ولا تتحرك حتى تظهر الإشارة الخضراء (مع مراعاة قواعد الانعطاف يميناً)',
            'هدئ السرعة واستمر بحذر',
            'توقف فقط إذا كانت هناك سيارات أخرى',
            'تحذير من أن الإشارة ستتحول للأخضر'
          ],
          explanation: 'الضوء الأحمر الثابت يعني توقفاً كاملاً خلف خط التوقف أو ممر المشاة.'
        },
        en: {
          questionText: 'What does a steady red traffic light mean?',
          options: [
            'Stop completely and remain stopped until the light turns green (except for legal right turns on red)',
            'Slow down and proceed with caution',
            'Stop only if other cars are present',
            'Warning that the light is about to turn green'
          ],
          explanation: 'A steady red light means you must stop completely behind the limit line or crosswalk.'
        },
        correctAnswerIndex: 0
      },
      {
        id: 'us_q38',
        category: { ar: 'سلامة الأطفال', en: 'Child Safety' },
        ar: {
          questionText: 'أين هو المكان الأكثر أماناً للأطفال الصغار في السيارة؟',
          options: [
            'في المقعد الأمامي بجانب السائق',
            'في المقعد الخلفي مع تثبيتهم بشكل صحيح في مقعد الأمان',
            'في حضن أحد الركاب البالغين',
            'بين المقاعد الأمامية'
          ],
          explanation: 'المقعد الخلفي هو المكان الأكثر أماناً للأطفال لحمايتهم من قوة انفجار الوسائد الهوائية الأمامية.'
        },
        en: {
          questionText: 'Where is the safest place for young children in a vehicle?',
          options: [
            'In the front seat next to the driver',
            'In the back seat, properly secured in a child safety seat',
            'On the lap of an adult passenger',
            'Between the front seats'
          ],
          explanation: 'Children are safest in the back seat, away from front-seat airbags which can be dangerous for them.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q39',
        category: { ar: 'حالات الطوارئ', en: 'Emergency Situations' },
        ar: {
          questionText: 'ماذا يجب أن تفعل إذا تعطلت دواسة الوقود (Stuck Accelerator)؟',
          options: [
            'إطفاء المحرك فوراً أثناء القيادة بسرعة عالية',
            'تحويل ناقل الحركة إلى الوضع المحايد (N) والضغط على الفرامل بقوة وتوجيه السيارة للجانب',
            'استخدام فرامل اليد فقط',
            'فتح باب السيارة والقفز'
          ],
          explanation: 'تحويل السيارة للوضع المحايد (Neutral) يقطع القوة عن العجلات ويسمح لك بالسيطرة عليها حتى تتوقف.'
        },
        en: {
          questionText: 'What should you do if your accelerator pedal gets stuck?',
          options: [
            'Turn off the engine immediately while driving fast',
            'Shift to neutral (N), apply the brakes, and steer safely off the road',
            'Use only the emergency brake',
            'Open the door and jump out'
          ],
          explanation: 'If your gas pedal sticks, shifting to neutral will disconnect the engine from the wheels, allowing you to stop safely.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q40',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'ماذا يعني "الاندماج" (Merging) في الطريق السريع؟',
          options: [
            'التوقف في نهاية ممر الدخول وانتظار فجوة',
            'تعديل سرعتك لتتناسب مع حركة السير والاندماج بسلاسة في الفجوة المتاحة',
            'إجبار السيارات الأخرى على التوقف للسماح لك بالدخول',
            'القيادة على كتف الطريق حتى تجد فرصة'
          ],
          explanation: 'الاندماج الصحيح يتطلب استخدام ممر التسارع للوصول لسرعة حركة السير والدخول دون تعطيل الآخرين.'
        },
        en: {
          questionText: 'What does "Merging" into a highway mean?',
          options: [
            'Stopping at the end of the entrance ramp and waiting for a gap',
            'Adjusting your speed to match traffic and sliding into a safe gap',
            'Forcing other cars to stop so you can enter',
            'Driving on the shoulder until you find an opening'
          ],
          explanation: 'When merging, use the acceleration lane to reach the speed of highway traffic before merging smoothly into a gap.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q41',
        category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
        ar: {
          questionText: 'ماذا تعني العلامات الأرضية التي تشكل حرف "X" مع حرفي "RR"؟',
          options: [
            'تقاطع طرق خطير',
            'تقاطع سكة حديد (Railroad Crossing) قادم',
            'ممنوع الوقوف والتوقف',
            'نهاية الطريق السريع'
          ],
          explanation: 'علامة RR مع حرف X هي علامة تحذيرية أرضية تسبق تقاطعات السكك الحديدية.'
        },
        en: {
          questionText: 'What do pavement markings with a large "X" and the letters "RR" mean?',
          options: [
            'A dangerous intersection ahead',
            'A railroad crossing ahead',
            'No parking or standing',
            'End of the highway'
          ],
          explanation: 'The "X" and "RR" markings are used on the pavement before a railroad crossing.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q42',
        category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
        ar: {
          questionText: 'كيف يمكنك تجنب "عمى الأضواء" من السيارة التي خلفك ليلاً؟',
          options: [
            'استخدام النظارات الشمسية ليلاً',
            'تعديل مرآة الرؤية الخلفية إلى وضع "الليل" (Day/Night switch)',
            'النظر بعيداً عن المرآة تماماً',
            'إطفاء أضواء سيارتك'
          ],
          explanation: 'معظم المرايا الداخلية تحتوي على زر أو مقبض لتقليل توهج الأضواء العالية من السيارات التي في الخلف.'
        },
        en: {
          questionText: 'How can you avoid glare from the headlights of vehicles behind you at night?',
          options: [
            'Wear sunglasses at night',
            'Adjust your rearview mirror to the "night" position',
            'Avoid looking at the mirror altogether',
            'Turn off your own headlights'
          ],
          explanation: 'Using the day/night switch on your rearview mirror reduces glare from high-beam headlights behind you.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q43',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'ماذا يجب أن تفعل إذا رأيت حيواناً يقطع الطريق أمامك؟',
          options: [
            'الانحراف الحاد لتجنبه حتى لو خرجت عن الطريق',
            'الضغط على الفرامل بثبات والتمسك بالمقود جيداً (تجنب الانحراف الحاد)',
            'زيادة السرعة لتخويفه',
            'إغماض العينين'
          ],
          explanation: 'الانحراف الحاد قد يؤدي لقلب السيارة أو الاصطدام بسيارات أخرى؛ الأفضل هو التهدئة والسيطرة على المسار.'
        },
        en: {
          questionText: 'What should you do if an animal suddenly runs in front of your car?',
          options: [
            'Swerve sharply to avoid it, even if you go off the road',
            'Brake firmly and stay in your lane (avoid sharp swerving)',
            'Increase speed to scare it away',
            'Close your eyes'
          ],
          explanation: 'Swerving sharply can cause a more serious accident. It is generally safer to brake firmly while keeping the car straight.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q44',
        category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
        ar: {
          questionText: 'ما هو الحد القانوني لتركيز الكحول في الدم (BAC) للسائقين فوق 21 سنة في معظم الولايات؟',
          options: ['0.01%', '0.05%', '0.08%', '0.10%'],
          explanation: 'في معظم الولايات الأمريكية، يعتبر السائق مخموراً قانونياً إذا كان تركيز الكحول في دمه 0.08% أو أكثر.'
        },
        en: {
          questionText: 'What is the legal blood alcohol concentration (BAC) limit for drivers over 21 in most states?',
          options: ['0.01%', '0.05%', '0.08%', '0.10%'],
          explanation: 'In most states, you are legally intoxicated if your BAC is 0.08% or higher.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q45',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'ماذا يعني الخط الأصفر المتصل المزدوج في منتصف الطريق؟',
          options: [
            'يسمح بالتجاوز من كلا الجانبين',
            'يمنع التجاوز من كلا الجانبين',
            'يسمح بالتجاوز فقط في حالات الطوارئ',
            'طريق ذو اتجاه واحد'
          ],
          explanation: 'الخط الأصفر المتصل المزدوج يعني أن التجاوز ممنوع تماماً لكلا الاتجاهين.'
        },
        en: {
          questionText: 'What does a double solid yellow line in the center of the road mean?',
          options: [
            'Passing is allowed from both sides',
            'Passing is prohibited from both sides',
            'Passing is only allowed in emergencies',
            'One-way street'
          ],
          explanation: 'Double solid yellow lines mean no passing for traffic in either direction.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q46',
        category: { ar: 'الدراجات الهوائية', en: 'Bicycles' },
        ar: {
          questionText: 'كيف يجب أن يعامل السائقون الدراجات الهوائية على الطريق؟',
          options: [
            'كعائق يجب تجاوزه بسرعة',
            'كمركبات لها نفس الحقوق والمسؤوليات مثل السيارات',
            'كالمشاة فقط',
            'تجاهلهم تماماً'
          ],
          explanation: 'الدراجات الهوائية تعتبر مركبات قانونية في الطريق ويجب احترام مساحتها وحقها في الأولوية.'
        },
        en: {
          questionText: 'How should drivers treat bicyclists on the road?',
          options: [
            'As an obstacle to be passed quickly',
            'As vehicles with the same rights and responsibilities as motor vehicles',
            'As pedestrians only',
            'Ignore them completely'
          ],
          explanation: 'Bicyclists have the same rights and responsibilities as automobile drivers. Give them plenty of space.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q47',
        category: { ar: 'الوقوف والتوقف', en: 'Parking' },
        ar: {
          questionText: 'عند الوقوف في منحدر (للأعلى) مع وجود رصيف، كيف يجب توجيه العجلات الأمامية؟',
          options: [
            'موازية للرصيف',
            'بعيداً عن الرصيف (إلى اليسار)',
            'باتجاه الرصيف (إلى اليمين)',
            'لا يهم'
          ],
          explanation: 'توجيه العجلات بعيداً عن الرصيف يضمن توقف السيارة على الرصيف إذا تحركت للخلف.'
        },
        en: {
          questionText: 'When parking uphill with a curb, which way should you turn your front wheels?',
          options: [
            'Parallel to the curb',
            'Away from the curb (to the left)',
            'Toward the curb (to the right)',
            'It doesn\'t matter'
          ],
          explanation: 'Turn your wheels away from the curb when parking uphill so if the car rolls, it will hit the curb and stop.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q48',
        category: { ar: 'الحوادث', en: 'Accidents' },
        ar: {
          questionText: 'ماذا يجب أن تفعل إذا صدمت سيارة متوقفة ولم تجد صاحبها؟',
          options: [
            'المغادرة فوراً',
            'ترك ملاحظة تحتوي على اسمك ومعلومات الاتصال بك وتفاصيل الحادث في مكان بارز',
            'انتظار الشرطة فقط دون فعل شيء',
            'إخفاء آثار الصدمة'
          ],
          explanation: 'القانون يتطلب منك إخطار صاحب المركبة. ترك ملاحظة هو التصرف القانوني الصحيح في حال عدم وجوده.'
        },
        en: {
          questionText: 'What should you do if you hit a parked vehicle and cannot find the owner?',
          options: [
            'Leave immediately',
            'Leave a note with your name, contact information, and accident details in a visible place',
            'Wait for the police without doing anything else',
            'Hide the damage'
          ],
          explanation: 'If you hit a parked car, you must try to find the owner. If you can\'t, leave a note with your information.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q49',
        category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
        ar: {
          questionText: 'ما هي قاعدة "الثواني الثلاث" (Three-Second Rule)؟',
          options: [
            'الوقت اللازم لربط حزام الأمان',
            'المسافة الآمنة التي يجب تركها بينك وبين السيارة التي أمامك',
            'الوقت المستغرق لتغيير المسار',
            'سرعة استجابة السائق للإشارة الضوئية'
          ],
          explanation: 'قاعدة الثواني الثلاث تساعد في الحفاظ على مسافة أمان كافية للتوقف المفاجئ في الظروف العادية.'
        },
        en: {
          questionText: 'What is the "Three-Second Rule"?',
          options: [
            'The time it takes to buckle a seat belt',
            'A way to determine a safe following distance between you and the car in front',
            'The time it takes to change lanes',
            'The reaction time to a traffic light'
          ],
          explanation: 'The three-second rule helps you maintain a safe following distance. In bad weather, increase this to four or more seconds.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q50',
        category: { ar: 'قواعد الطريق', en: 'Road Rules' },
        ar: {
          questionText: 'متى يمكنك تجاوز سيارة أخرى من جهة اليمين؟',
          options: [
            'عندما يقود السائق ببطء في المسار الأيسر',
            'عندما تنعطف السيارة التي أمامك يساراً وهناك مسار كافٍ على اليمين',
            'في أي وقت تريده',
            'يمنع التجاوز من اليمين نهائياً'
          ],
          explanation: 'يسمح بالتجاوز من اليمين فقط إذا كان السائق أمامك ينعطف يساراً وكان هناك مساحة آمنة وممهدة للمرور.'
        },
        en: {
          questionText: 'When can you pass another vehicle on the right?',
          options: [
            'When the driver is going slow in the left lane',
            'When the vehicle ahead is making a left turn and there is sufficient room on the right',
            'At any time you want',
            'Passing on the right is strictly prohibited'
          ],
          explanation: 'You may pass on the right only when the vehicle ahead is making or about to make a left turn and there is a clear path.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q51',
        category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
        ar: {
          questionText: 'ما هو "الانزلاق المائي" (Hydroplaning)؟',
          options: [
            'القيادة بسرعة في المطر',
            'فقدان الإطارات للاتصال بسطح الطريق بسبب طبقة رقيقة من الماء',
            'غسل السيارة أثناء القيادة',
            'تراكم الثلج على الزجاج'
          ],
          explanation: 'يحدث الانزلاق المائي عند تجمع الماء تحت الإطار مما يفقد السائق السيطرة على التوجيه والفرملة.'
        },
        en: {
          questionText: 'What is "Hydroplaning"?',
          options: [
            'Driving fast in the rain',
            'When tires lose contact with the road surface due to a thin layer of water',
            'Washing the car while driving',
            'Snow building up on the windshield'
          ],
          explanation: 'Hydroplaning happens when water builds up under your tires, causing them to lose traction and making it hard to steer or brake.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q52',
        category: { ar: 'التوجيه والتحكم', en: 'Steering and Control' },
        ar: {
          questionText: 'ما هي الوضعية الصحيحة لليدين على عجلة القيادة وفقاً لمعظم التوصيات الحديثة؟',
          options: [
            'عند الساعة 10 و 2',
            'عند الساعة 9 و 3 (أو 8 و 4)',
            'بيد واحدة في الأعلى',
            'في أسفل المقود'
          ],
          explanation: 'توصي الجهات الحديثة بوضعية 9 و 3 لتوفير سيطر أفضل وتجنب الإصابة في حال انفجار الوسادة الهوائية.'
        },
        en: {
          questionText: 'What is the correct hand position on the steering wheel according to most modern recommendations?',
          options: [
            'At 10 and 2 o\'clock',
            'At 9 and 3 o\'clock (or 8 and 4)',
            'One hand at the top',
            'At the bottom of the wheel'
          ],
          explanation: 'Most safety experts now recommend the 9 and 3 o\'clock position for better control and safety from airbag deployment.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q53',
        category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
        ar: {
          questionText: 'ماذا يعني الضوء الأحمر الوامض في إشارة المرور؟',
          options: [
            'هدئ السرعة واستمر بحذر',
            'توقف تماماً وتعامل معه مثل علامة "توقف" (Stop Sign)',
            'الإشارة معطلة، اتبع تعليمات الشرطة',
            'انتظر الضوء الأخضر'
          ],
          explanation: 'الضوء الأحمر الوامض يعني توقفاً كاملاً؛ يمكنك الاستمرار بعد التأكد من خلو الطريق.'
        },
        en: {
          questionText: 'What does a flashing red traffic light mean?',
          options: [
            'Slow down and proceed with caution',
            'Stop completely and treat it like a stop sign',
            'The signal is broken, follow police instructions',
            'Wait for the green light'
          ],
          explanation: 'A flashing red light means you must come to a full stop and only proceed when it is safe to do so.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  gb: {
    code: 'gb',
    questionsCount: 50,
    passingScore: '86%',
    ar: {
      name: 'المملكة المتحدة',
      authority: 'وكالة معايير السائقين والمركبات (DVSA)',
      seoTitle: 'اختبار القيادة النظري البريطاني DVSA بالعربي | منصة اجتياز',
      seoDescription: 'تدرب على امتحان التؤوريا في بريطانيا DVSA. محاكي اختبارات متطور يغطي قواعد المرور البريطانية وإشارات الطرق بالعربي والإنجليزية.',
      h1Heading: 'محاكي اختبار القيادة البريطاني - DVSA Theory Test'
    },
    en: {
      name: 'United Kingdom',
      authority: 'Driver and Vehicle Standards Agency (DVSA)',
      seoTitle: 'Official DVSA Theory Test Practice - UK Driving License | Ijtiaz',
      seoDescription: 'Prepare for your official UK DVSA Theory Test. Realistic mock exams based on the latest Highway Code and hazard perception.',
      h1Heading: 'DVSA Theory Test Practice - UK Highway Code'
    },
    questions: [
      {
        id: 'gb_q1',
        category: { ar: 'إشارات اليد وقواعد الطريق', en: 'Hand Signals and Road Rules' },
        ar: {
          questionText: 'ما هي إشارة اليد الصحيحة التي يجب استخدامها عندما تنوي الانعطاف إلى اليسار؟',
          options: [
            'مد ذراعك اليمنى بشكل مستقيم خارج النافذة',
            'تحريك ذراعك اليمنى في حركة دائرية',
            'مد ذراعك اليمنى خارج النافذة مع ثنيها للأعلى من الكوع',
            'استخدام ضوء الإشارة فقط دون إشارة يد'
          ],
          explanation: 'وفقاً لقانون الطرق البريطاني (Highway Code)، يتم التعبير عن نية الانعطاف لليسار بتحريك الذراع اليمنى في حركة دائرية عكس عقارب الساعة.'
        },
        en: {
          questionText: 'What is the correct hand signal to use when you intend to turn left?',
          options: [
            'Extend your right arm straight out of the window',
            'Move your right arm in a circular motion',
            'Extend your right arm out and bend it upwards at the elbow',
            'Using the indicator lights only'
          ],
          explanation: 'According to the UK Highway Code, the hand signal for turning left is moving your right arm in a circular motion to signal following drivers.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'gb_q2',
        category: { ar: 'إدراك المخاطر', en: 'Hazard Perception' },
        ar: {
          questionText: 'في اختبار إدراك المخاطر، متى يجب عليك النقر بالماوس للحصول على أعلى درجة؟',
          options: [
            'بمجرد رؤية خطر محتمل قد يتطور إلى خطر حقيقي',
            'فقط عندما تصبح السيارة مضطرة للفرملة',
            'بمجرد انتهاء مقطع الفيديو',
            'في بداية الفيديو دائماً'
          ],
          explanation: 'يتم احتساب الدرجات في اختبار Hazard Perception بناءً على سرعة استجابتك للخطر الناشئ بمجرد ظهوره على الشاشة.'
        },
        en: {
          questionText: 'In the Hazard Perception test, when should you click to get the maximum score?',
          options: [
            'As soon as you see a potential hazard developing',
            'Only when the car is forced to brake',
            'As soon as the video clip ends',
            'At the very beginning of every clip'
          ],
          explanation: 'The scoring for hazard perception is based on how quickly you identify a "developing hazard" that would require the driver to take action.'
        },
        correctAnswerIndex: 0
      },
      {
        id: 'gb_q3',
        category: { ar: 'قواعد المسافات والأمان', en: 'Distance and Safety Rules' },
        ar: {
          questionText: 'ما هي المسافة الزمنية التي يجب تركها بينك وبين السيارة التي أمامك على طريق سريع مبلل في المملكة المتحدة؟',
          options: [
            'ثانية واحدة',
            'ثانيتان',
            'أربع ثوانٍ على الأقل',
            'عشر ثوانٍ'
          ],
          explanation: 'تنص قواعد المرور البريطانية على مضاعفة مسافة الأمان من ثانيتين في الجو الجاف إلى أربع ثوانٍ على الأقل في الجو الماطر أو الطرق المبللة.'
        },
        en: {
          questionText: 'What is the recommended time gap to leave between you and the vehicle in front on a wet road in the UK?',
          options: [
            'One second',
            'Two seconds',
            'At least four seconds',
            'Ten seconds'
          ],
          explanation: 'The Highway Code recommends doubling the standard two-second gap to at least four seconds when driving on wet roads to allow for increased braking distance.'
        },
        correctAnswerIndex: 2
      }
    ]
  },
  ca: {
    code: 'ca',
    questionsCount: 40,
    passingScore: '80%',
    ar: {
      name: 'كندا',
      authority: 'اختبار المعرفة بالقيادة (MTO / ICBC)',
      seoTitle: 'اختبار القيادة في كندا (G1 / ICBC) بالعربي | منصة اجتياز',
      seoDescription: 'استعد لاختبار التؤوريا في كندا. أسئلة محاكاة رسمية لرخصة القيادة في أونتاريو، بريتيش كولومبيا وباقي المقاطعات الكندية.',
      h1Heading: 'محاكي اختبار القيادة الكندي - Knowledge Test'
    },
    en: {
      name: 'Canada',
      authority: 'Driver Knowledge Test (MTO / ICBC)',
      seoTitle: 'Canada Driving Knowledge Test - G1 & ICBC Mock Exam | Ijtiaz',
      seoDescription: 'Official-style Canadian driving knowledge test practice. Master the rules of the road for Ontario G1, BC ICBC, and more provinces.',
      h1Heading: 'Canadian Driving Knowledge Test Simulator'
    },
    questions: [
      {
        id: 'ca_q1',
        category: { ar: 'القيادة الشتوية والسلامة', en: 'Winter Driving and Safety' },
        ar: {
          questionText: 'ما هو التصرف الصحيح عند القيادة على "الجليد الأسود" (Black Ice) في كندا؟',
          options: [
            'الضغط على الفرامل بقوة للتوقف',
            'زيادة السرعة لتجاوز منطقة الجليد بسرعة',
            'رفع القدم عن دواسة الوقود والحفاظ على استقامة المقود دون الضغط على الفرامل',
            'الانعطاف يميناً ويساراً بسرعة لاستعادة التماسك'
          ],
          explanation: 'الجليد الأسود شفاف ويصعب رؤيته. عند المرور فوقه، يجب الحفاظ على هدوئك وتجنب أي حركات مفاجئة للمقود أو الفرامل حتى تمر بسلام.'
        },
        en: {
          questionText: 'What is the correct action when driving on "Black Ice" in Canada?',
          options: [
            'Apply brakes firmly to stop the car',
            'Increase speed to clear the icy patch quickly',
            'Ease off the gas and keep the steering wheel straight without braking',
            'Turn the wheel rapidly left and right to regain traction'
          ],
          explanation: 'Black ice is highly transparent and slippery. If you hit it, stay calm, avoid braking or sudden steering, and let the vehicle glide across.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'ca_q2',
        category: { ar: 'رخصة G1 والقيود القانونية', en: 'G1 License and Legal Restrictions' },
        ar: {
          questionText: 'في أونتاريو، ما هو مستوى الكحول المسموح به في الدم لسائق يحمل رخصة G1؟',
          options: ['0.02%', '0.05%', '0.00% (صفر)', '0.08%'],
          explanation: 'يخضع حاملو رخصة G1 في كندا لسياسة "صفر كحول"، حيث يمنع تماماً وجود أي نسبة كحول في الدم أثناء القيادة.'
        },
        en: {
          questionText: 'In Ontario, what is the permitted Blood Alcohol Level for a G1 licensed driver?',
          options: ['0.02%', '0.05%', '0.00% (Zero)', '0.08%'],
          explanation: 'New drivers with a G1 license in Canada must maintain a blood alcohol level of zero at all times while operating a vehicle.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'ca_q3',
        category: { ar: 'حق الأولوية والتقاطعات', en: 'Right of Way and Intersections' },
        ar: {
          questionText: 'في كندا، عند الوصول إلى تقاطع "All-Way Stop" في نفس الوقت مع سيارة أخرى، لمن تكون الأولوية؟',
          options: [
            'للسيارة الأسرع في الانطلاق',
            'للسيارة الموجودة على جهة اليمين',
            'للسيارة التي تريد السير في خط مستقيم',
            'للسيارة التي تطلق منبه الصوت أولاً'
          ],
          explanation: 'في تقاطعات التوقف الكامل بجميع الاتجاهات، إذا وصلت سيارتان في نفس الوقت، تكون الأولوية للسيارة الموجودة على اليمين.'
        },
        en: {
          questionText: 'In Canada, when arriving at an "All-Way Stop" intersection at the same time as another vehicle, who has the right of way?',
          options: [
            'The vehicle that starts moving faster',
            'The vehicle on the right side',
            'The vehicle intending to go straight',
            'The vehicle that honks first'
          ],
          explanation: 'At an all-way stop, if two vehicles arrive at the same time, the driver on the left must yield to the driver on the right.'
        },
        correctAnswerIndex: 1
      }
    ]
  },
  au: {
    code: 'au',
    questionsCount: 45,
    passingScore: '90%',
    ar: {
      name: 'أستراليا',
      authority: 'اختبار معرفة السائق (DKT)',
      seoTitle: 'اختبار القيادة في أستراليا DKT بالعربي | منصة اجتياز',
      seoDescription: 'تدرب على اختبار القيادة النظري الأسترالي DKT. أسئلة محدثة تغطي قوانين المرور في سيدني، ملبورن، بريزبن وجميع الولايات الأسترالية.',
      h1Heading: 'محاكي اختبار القيادة الأسترالي - DKT Knowledge Test'
    },
    en: {
      name: 'Australia',
      authority: 'Driver Knowledge Test (DKT)',
      seoTitle: 'Australia DKT Driver Knowledge Test - Learners Mock Exam | Ijtiaz',
      seoDescription: 'Practice for the Australian DKT with our realistic simulator. Master NSW, Victoria, and Queensland road rules to get your L-plates.',
      h1Heading: 'Australian Driver Knowledge Test (DKT) Simulator'
    },
    questions: [
      {
        id: 'au_q1',
        category: { ar: 'الهواتف المحمولة والمخالفات', en: 'Mobile Phones and Violations' },
        ar: {
          questionText: 'متى يسمح لسائق يحمل رخصة تعليم (Learner) أو رخصة مؤقتة (P1/P2) باستخدام الهاتف المحمول في أستراليا؟',
          options: [
            'فقط عند استخدام مكبر الصوت (Speaker)',
            'عند التوقف في زحام مروري',
            'لا يسمح باستخدامه نهائياً، حتى في وضع عدم اللمس، أثناء القيادة أو التوقف المؤقت',
            'فقط لاستخدام خرائط Google'
          ],
          explanation: 'في أستراليا، يمنع منعاً باتاً على حاملي رخص L و P استخدام الهاتف المحمول بأي شكل من الأشكال أثناء القيادة.'
        },
        en: {
          questionText: 'When is a Learner or P1/P2 provisional driver allowed to use a mobile phone in Australia?',
          options: [
            'Only when using the loudspeaker function',
            'When stopped in heavy traffic',
            'Never; mobile phone use is strictly prohibited for L and P platers while driving or stopped',
            'Only for using Google Maps navigation'
          ],
          explanation: 'In Australia, Learner and Provisional (P1/P2) drivers are not permitted to use any function of a mobile phone while driving, including hands-free or GPS.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'au_q2',
        category: { ar: 'قواعد الدوارات', en: 'Roundabout Rules' },
        ar: {
          questionText: 'عند دخول الدوار في أستراليا، لمن يجب عليك إعطاء الأولوية؟',
          options: [
            'للمركبات القادمة من اليمين والتي تسير بالفعل داخل الدوار',
            'للمركبات القادمة من جهة اليسار فقط',
            'للشاحنات الكبيرة فقط',
            'لا توجد أولوية، الدخول للأسرع'
          ],
          explanation: 'القاعدة الأساسية في أستراليا هي إعطاء الأولوية للمركبات الموجودة بالفعل داخل الدوار والقادمة من جهة اليمين.'
        },
        en: {
          questionText: 'When entering a roundabout in Australia, who must you give way to?',
          options: [
            'Traffic already in the roundabout, especially those coming from the right',
            'Only traffic approaching from the left',
            'Only large heavy trucks',
            'There is no priority; the fastest driver enters first'
          ],
          explanation: 'The fundamental rule at Australian roundabouts is to give way to traffic already circulating within the roundabout.'
        },
        correctAnswerIndex: 0
      },
      {
        id: 'au_q3',
        category: { ar: 'السرعة ومناطق المدارس', en: 'Speed and School Zones' },
        ar: {
          questionText: 'ما هي السرعة القصوى المعتادة في مناطق المدارس (School Zones) في أستراليا خلال الساعات المحددة؟',
          options: [
            '20 كم/س',
            '40 كم/س',
            '60 كم/س',
            '80 كم/س'
          ],
          explanation: 'في معظم الولايات الأسترالية، تنخفض السرعة في مناطق المدارس إلى 40 كم/س خلال ساعات الصباح والمساء المحددة لضمان سلامة الطلاب.'
        },
        en: {
          questionText: 'What is the standard speed limit in Australian School Zones during designated hours?',
          options: [
            '20 km/h',
            '40 km/h',
            '60 km/h',
            '80 km/h'
          ],
          explanation: 'In most parts of Australia, a 40 km/h speed limit applies in school zones during peak drop-off and pick-up times to protect children.'
        },
        correctAnswerIndex: 1
      }
    ]
  }
};

/**
 * GLOBAL BILINGUAL QUESTIONS POOL
 * These are high-quality general questions used to supplement country-specific tests
 * ensuring every country has a "professional" number of questions (20+).
 */
export const GLOBAL_BILINGUAL_QUESTIONS: BilingualQuestion[] = [
  {
    id: 'global_q1',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما هو التصرف الصحيح عند رؤية إشارة (قف) الحمراء؟',
      options: ['تخفيف السرعة والمرور بحذر', 'التوقف التام عند خط التوقف والتأكد من خلو الطريق', 'زيادة السرعة لتجاوز التقاطع', 'تجاهلها إذا كان الطريق خالياً'],
      explanation: 'إشارة (قف) تلزم السائق بالتوقف الكامل لعجلات المركبة لثوانٍ معدودة والتأكد من سلامة التقاطع قبل التحرك.'
    },
    en: {
      questionText: 'What is the correct action when seeing a red (STOP) sign?',
      options: ['Slow down and proceed with caution', 'Stop completely at the stop line and ensure the road is clear', 'Increase speed to pass the intersection', 'Ignore it if the road appears empty'],
      explanation: 'The (STOP) sign requires the driver to come to a full stop for a few seconds and verify the intersection is safe before moving.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q2',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'لمن تكون الأولوية في تقاطع طرق غير منظم وبدون لوحات أفضلية؟',
      options: ['للسيارة الأسرع', 'للسيارة القادمة من اليسار', 'للسيارة القادمة من اليمين', 'للسيارة الأكبر حجماً'],
      explanation: 'في التقاطعات غير المنظمة، تنص القواعد العالمية على إعطاء الأولوية دائماً للقادم من جهة اليمين.'
    },
    en: {
      questionText: 'Who has the right of way at an uncontrolled intersection with no priority signs?',
      options: ['The fastest car', 'The vehicle coming from the left', 'The vehicle coming from the right', 'The largest vehicle'],
      explanation: 'At uncontrolled intersections, universal road rules state that priority must always be given to the vehicle approaching from the right.'
    },
    correctAnswerIndex: 2
  },
  {
    id: 'global_q3',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ما هي "قاعدة الثانيتين" في القيادة؟',
      options: ['الوقت المستغرق للانعطاف', 'ترك مسافة أمان زمنية تعادل ثانيتين بينك وبين السيارة أمامك', 'السرعة القصوى في الأحياء السكنية', 'مدة التوقف عند إشارة قف'],
      explanation: 'قاعدة الثانيتين توفر مسافة أمان كافية للسائق للقيام برد فعل مناسب وتفادي الاصطدام في حال توقف السيارة الأمامية فجأة.'
    },
    en: {
      questionText: 'What is the "two-second rule" in driving?',
      options: ['The time taken to complete a turn', 'Maintaining a safe time gap of at least two seconds behind the vehicle in front', 'The speed limit in residential areas', 'The duration of stopping at a stop sign'],
      explanation: 'The two-second rule provides sufficient safety distance for the driver to react and avoid a collision if the car ahead stops suddenly.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q4',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'متى يجب استخدام أضواء الانعطاف (الإشارات الجانبية)؟',
      options: ['عند تغيير المسار أو الانعطاف أو الدوران فقط', 'فقط في الليل', 'عند القيادة بسرعة عالية', 'ليس ضرورياً إذا كان الطريق خالياً'],
      explanation: 'يجب استخدام إشارات الانعطاف قبل وقت كافٍ من تغيير المسار أو الانعطاف لتنبيه السائقين الآخرين بنيتك.'
    },
    en: {
      questionText: 'When should turn signals (indicators) be used?',
      options: ['When changing lanes, turning, or u-turning only', 'Only at night', 'When driving at high speeds', 'Not necessary if the road is empty'],
      explanation: 'Turn signals must be used well in advance of changing lanes or turning to inform other drivers of your intention.'
    },
    correctAnswerIndex: 0
  },
  {
    id: 'global_q5',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما معنى اللوحة المثلثة الحمراء؟',
      options: ['لوحة تنظيمية إلزامية', 'لوحة تحذيرية تنبه لوجود خطر أمامك', 'لوحة إرشادية للمناطق السياحية', 'لوحة منع الوقوف'],
      explanation: 'اللوحات المثلثة ذات الإطار الأحمر هي لوحات تحذيرية تهدف لتنبيه السائق لوجود ظروف أو مخاطر محتملة على الطريق.'
    },
    en: {
      questionText: 'What is the meaning of a red triangular sign?',
      options: ['A mandatory regulatory sign', 'A warning sign alerting you to danger ahead', 'An informational sign for tourist areas', 'A no-parking sign'],
      explanation: 'Triangular signs with a red border are warning signs intended to alert the driver to potential hazards or conditions on the road.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q6',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ما هي "النقطة العمياء"؟',
      options: ['مكان في المحرك لا يراه الميكانيكي', 'منطقة حول السيارة لا يمكن رؤيتها من خلال المرايا ويجب الالتفات بالرأس لرؤيتها', 'إضاءة قوية تعمي السائق', 'نهاية الطريق المسدود'],
      explanation: 'النقطة العمياء هي المساحة الجانبية التي لا تظهر في المرايا الجانبية، وللتحقق منها يجب الالتفات السريع بالكتف قبل تغيير المسار.'
    },
    en: {
      questionText: 'What is a "Blind Spot"?',
      options: ['A place in the engine that cannot be seen', 'An area around the vehicle that cannot be seen through mirrors and requires a head check', 'A bright light that blinds the driver', 'The end of a dead-end road'],
      explanation: 'A blind spot is an area to the side of the car not visible in the mirrors; to check it, you must perform a quick shoulder check before changing lanes.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q7',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'في الدوار، لمن تكون أولوية المرور؟',
      options: ['للقادم من خارج الدوار', 'للمركبات الموجودة بالفعل داخل الدوار', 'للسيارة الأكبر حجماً', 'للسيارة الأسرع'],
      explanation: 'الأولوية في الدوارات تكون دائماً للمركبات التي دخلت الدوار وتتحرك بداخله، وعلى القادمين من الخارج الانتظار.'
    },
    en: {
      questionText: 'In a roundabout, who has the right of way?',
      options: ['Traffic entering the roundabout', 'Vehicles already inside the roundabout', 'The largest vehicle', 'The fastest car'],
      explanation: 'Priority in roundabouts always belongs to vehicles already circulating inside; those entering must wait for a safe gap.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q8',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هو أثر القيادة تحت تأثير التعب أو النعاس؟',
      options: ['يزيد من سرعة رد الفعل', 'يشتت الانتباه ويبطئ رد الفعل ويزيد خطر الحوادث', 'لا يؤثر على القيادة الجيدة', 'يحسن التركيز في الطرق الطويلة'],
      explanation: 'التعب والنعاس يضعفان القدرة على التركيز ويبطئان زمن الاستجابة للمخاطر، مما يجعلهما سبباً رئيسياً للحوادث.'
    },
    en: {
      questionText: 'What is the effect of driving while tired or drowsy?',
      options: ['It speeds up reaction time', 'It distracts attention, slows reaction time, and increases accident risk', 'It does not affect good driving', 'It improves focus on long trips'],
      explanation: 'Fatigue and drowsiness impair focus and slow down response time to hazards, making them leading causes of accidents.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q9',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ماذا تعني اللوحة الدائرية ذات الإطار الأحمر؟',
      options: ['لوحة إرشادية', 'لوحة تحذيرية', 'لوحة منع أو تقييد (تنظيمية)', 'لوحة معلومات سياحية'],
      explanation: 'اللوحات الدائرية ذات الإطار الأحمر هي لوحات تنظيمية تفيد المنع (مثل ممنوع الدخول) أو التقييد (مثل حد السرعة).'
    },
    en: {
      questionText: 'What does a circular sign with a red border mean?',
      options: ['An informational sign', 'A warning sign', 'A prohibition or restriction (regulatory) sign', 'A tourist information sign'],
      explanation: 'Circular signs with red borders are regulatory signs that indicate prohibition (e.g., No Entry) or restriction (e.g., Speed Limit).'
    },
    correctAnswerIndex: 2
  },
  {
    id: 'global_q10',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'متى يجب استخدام الضوء العالي في المركبة؟',
      options: ['في جميع الأوقات ليلاً', 'عند القيادة في طرق مظلمة جداً وخالية من السيارات المقابلة', 'عند التجاوز فقط', 'داخل الأحياء السكنية المضاءة'],
      explanation: 'يستخدم الضوء العالي فقط في الطرق المظلمة غير المضاءة بشرط عدم وجود سيارات قادمة من الاتجاه المعاكس لتجنب إبهار بصر السائقين.'
    },
    en: {
      questionText: 'When should high-beam headlights be used?',
      options: ['At all times at night', 'When driving on very dark roads with no oncoming traffic', 'When overtaking only', 'Inside well-lit residential areas'],
      explanation: 'High beams should only be used on dark, unlit roads provided there is no oncoming traffic, to avoid blinding other drivers.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q11',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هو التصرف الصحيح عند الاقتراب من حافلة مدرسية متوقفة تومض أضواء التحذير الخاصة بها؟',
      options: ['التجاوز بسرعة لتجنب التأخير', 'التوقف التام والانتظار حتى تنتهي الحافلة من تحميل أو تنزيل الطلاب وتتحرك', 'استخدام المنبه الصوتي لحث الطلاب على السرعة', 'المرور من جهة الرصيف'],
      explanation: 'سلامة الطلاب هي الأولوية القصوى؛ يجب التوقف التام عند توقف الحافلة المدرسية للأشغال حتى تتحرك أو تنطفئ أضواء التحذير.'
    },
    en: {
      questionText: 'What is the correct action when approaching a stopped school bus with its warning lights flashing?',
      options: ['Overtake quickly to avoid delay', 'Stop completely and wait until the bus finishes loading/unloading students and starts moving', 'Use the horn to hurry the students', 'Pass on the sidewalk side'],
      explanation: 'Student safety is the top priority; you must stop completely when a school bus is stopped for boarding/unboarding until it moves or the warning lights are turned off.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q12',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ماذا تعني إشارة "ممنوع التجاوز"؟',
      options: ['يسمح بالتجاوز فقط في النهار', 'يمنع منعاً باتاً تخطي المركبة التي أمامك في هذا الطريق', 'يسمح بتجاوز الشاحنات فقط', 'يجب زيادة السرعة عند التجاوز'],
      explanation: 'إشارة منع التجاوز توضع في الأماكن التي تكون فيها الرؤية غير واضحة أو الطريق ضيقاً مما يجعل التجاوز خطراً.'
    },
    en: {
      questionText: 'What does a "No Overtaking" (No Passing) sign mean?',
      options: ['Overtaking is only allowed during the day', 'It is strictly forbidden to pass the vehicle ahead on this road', 'Only trucks are allowed to overtake', 'You must increase speed when overtaking'],
      explanation: 'The No Overtaking sign is placed in areas where visibility is poor or the road is narrow, making passing dangerous.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q13',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'كيف يؤثر المطر الغزير على مسافة التوقف للمركبة؟',
      options: ['يقلل من مسافة التوقف', 'يزيد من مسافة التوقف بسبب انخفاض تماسك الإطارات مع الطريق المبلل', 'لا يؤثر على مسافة التوقف', 'يجعل الفرامل تعمل بشكل أفضل'],
      explanation: 'الطريق المبلل يقلل من الاحتكاك، مما يعني أن السيارة ستحتاج لمسافة أطول بكثير للتوقف التام مقارنة بالطريق الجاف.'
    },
    en: {
      questionText: 'How does heavy rain affect a vehicle\'s stopping distance?',
      options: ['It decreases the stopping distance', 'It increases the stopping distance due to reduced tire grip on wet roads', 'It has no effect on stopping distance', 'It makes the brakes work better'],
      explanation: 'Wet roads reduce friction, meaning the car will need a much longer distance to come to a complete stop compared to dry conditions.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q14',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'عند الرغبة في الانعطاف لليسار، لمن يجب أن تعطي الأولوية؟',
      options: ['لا أحد، الأولوية لك', 'للمركبات القادمة من الاتجاه المقابل والمشاة الذين يعبرون الطريق', 'للسيارات التي خلفك', 'للمركبات التي تنعطف يميناً معك'],
      explanation: 'عند الانعطاف لليسار، يجب عليك إفساح المجال للمركبات القادمة من الأمام (الاتجاه المقابل) وللمشاة الذين يقطعون الشارع الذي ستدخل إليه.'
    },
    en: {
      questionText: 'When intending to turn left, who should you give priority to?',
      options: ['No one; you have the priority', 'Oncoming vehicles and pedestrians crossing the road', 'The cars behind you', 'Vehicles turning right with you'],
      explanation: 'When turning left, you must yield to oncoming traffic and pedestrians crossing the street you are entering.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q15',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هي أهمية فحص ضغط الإطارات بانتظام؟',
      options: ['للمظهر الجمالي فقط', 'لضمان تماسك أفضل مع الطريق، وتقليل استهلاك الوقود، ومنع انفجار الإطارات', 'لزيادة سرعة السيارة القصوى', 'لجعل صوت المحرك أهدأ'],
      explanation: 'الضغط الصحيح للإطارات يضمن مساحة تلامس مثالية مع الطريق، مما يحسن الأمان والكفاءة ويطيل عمر الإطار.'
    },
    en: {
      questionText: 'What is the importance of regularly checking tire pressure?',
      options: ['For aesthetic appearance only', 'To ensure better grip, reduce fuel consumption, and prevent tire blowouts', 'To increase the vehicle\'s top speed', 'To make the engine sound quieter'],
      explanation: 'Correct tire pressure ensures optimal contact area with the road, improving safety and efficiency while extending tire life.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q16',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ماذا يجب أن تفعل إذا بدأت سيارتك في الانزلاق المائي (Hydroplaning)؟',
      options: ['الضغط على الفرامل بقوة', 'زيادة السرعة للخروج من الماء', 'رفع القدم عن الدواسات تدريجياً والحفاظ على المقود مستقيماً', 'تحويل ناقل الحركة إلى الوضع المحايد (N)'],
      explanation: 'عند الانزلاق المائي، تفقد الإطارات التلامس مع الطريق. يجب التهدئة التدريجية دون استخدام الفرامل المفاجئة حتى تستعيد الإطارات تماسكها.'
    },
    en: {
      questionText: 'What should you do if your car begins to hydroplane?',
      options: ['Apply the brakes firmly', 'Increase speed to get out of the water', 'Take your foot off the pedals gradually and keep the steering wheel straight', 'Shift the transmission to neutral (N)'],
      explanation: 'When hydroplaning, tires lose contact with the road. You should decelerate gradually without sudden braking until the tires regain traction.'
    },
    correctAnswerIndex: 2
  },
  {
    id: 'global_q17',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما دلالة الضوء البرتقالي (الأصفر) الثابت في الإشارة الضوئية؟',
      options: ['الاستعداد للانطلاق', 'التوقف فوراً إذا كان ذلك آمناً، لأن الإشارة ستتحول للأحمر', 'المرور بأقصى سرعة', 'تجاهل الإشارة'],
      explanation: 'الضوء الأصفر الثابت يعني أن الضوء الأحمر وشيك الظهور، ويجب على السائق التوقف إذا كان قادراً على ذلك بأمان قبل دخول التقاطع.'
    },
    en: {
      questionText: 'What is the meaning of a steady amber (yellow) traffic light?',
      options: ['Prepare to start moving', 'Stop immediately if safe to do so, as the light is about to turn red', 'Pass through at maximum speed', 'Ignore the signal'],
      explanation: 'A steady amber light indicates that a red light is imminent. Drivers should stop if they can do so safely before entering the intersection.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q18',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'متى يسمح بتجاوز مركبة أخرى من جهة اليمين؟',
      options: ['عندما تكون المركبة التي أمامك تنعطف لليسار ويوجد متسع في جهة اليمين', 'في جميع الأوقات على الطرق السريعة', 'عندما تكون مستعجلاً', 'لا يسمح بذلك أبداً'],
      explanation: 'يسمح بالتجاوز من اليمين في حالات محدودة جداً، أهمها عندما يشير السائق الذي أمامك بوضوح إلى نيته الانعطاف لليسار ويوجد مسار كافٍ على اليمين.'
    },
    en: {
      questionText: 'When is it permitted to overtake another vehicle on the right?',
      options: ['When the vehicle ahead is turning left and there is enough space on the right', 'At all times on highways', 'When you are in a hurry', 'It is never permitted'],
      explanation: 'Overtaking on the right is allowed in very limited cases, primarily when the driver ahead is clearly signaling a left turn and there is sufficient lane space on the right.'
    },
    correctAnswerIndex: 0
  },
  {
    id: 'global_q19',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هي المسافة القانونية التي يجب تركها عند الوقوف بالقرب من صنبور إطفاء الحريق؟',
      options: ['متر واحد', '5 أمتار على الأقل لضمان وصول الدفاع المدني إليه في حالات الطوارئ', 'لا توجد مسافة محددة', '10 أمتار'],
      explanation: 'يجب ترك مسافة كافية حول صنابير الإطفاء لتمكين فرق الدفاع المدني من العمل بسرعة وكفاءة عند نشوب الحرائق.'
    },
    en: {
      questionText: 'What is the legal distance that must be kept when parking near a fire hydrant?',
      options: ['1 meter', 'At least 5 meters to ensure emergency access for fire services', 'There is no specific distance', '10 meters'],
      explanation: 'Sufficient space must be left around fire hydrants to allow fire departments to operate quickly and efficiently during emergencies.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q20',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما معنى اللوحة الزرقاء الدائرية التي تحمل سهماً للأعلى؟',
      options: ['طريق ذو اتجاه واحد فقط للأمام', 'ممنوع السير للأمام', 'نهاية الطريق', 'موقف سيارات'],
      explanation: 'اللوحات الدائرية الزرقاء هي لوحات إلزامية، والسهم للأعلى يلزم السائق بمتابعة السير للأمام فقط وعدم الانعطاف.'
    },
    en: {
      questionText: 'What does a circular blue sign with an upward arrow mean?',
      options: ['One-way road straight ahead only', 'No entry straight ahead', 'End of the road', 'Parking lot'],
      explanation: 'Circular blue signs are mandatory signs; an upward arrow requires the driver to proceed straight ahead only and not turn.'
    },
    correctAnswerIndex: 0
  },
  {
    id: 'global_q21',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما معنى اللوحة الدائرية الزرقاء التي تحتوي على رسم دراجة هوائية؟',
      options: ['ممنوع مرور الدراجات الهوائية', 'مسار إلزامي للدراجات الهوائية فقط', 'منطقة بيع دراجات', 'تحذير من وجود هواة ركوب دراجات'],
      explanation: 'اللوحات الزرقاء الدائرية هي لوحات إلزامية، وهي هنا تلزم الدراجات الهوائية باستخدام هذا المسار وتمنع المشاة أو السيارات من استخدامه.'
    },
    en: {
      questionText: 'What does a circular blue sign with a bicycle symbol mean?',
      options: ['Bicycles prohibited', 'Mandatory path for bicycles only', 'Bicycle shop nearby', 'Warning of cyclists ahead'],
      explanation: 'Circular blue signs are mandatory; this sign requires cyclists to use this specific path and prohibits other vehicles or pedestrians from using it.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q22',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'عندما ترى أضواء طوارئ زرقاء أو حمراء وماضية خلفك، ماذا يجب أن تفعل؟',
      options: ['زيادة السرعة للابتعاد عنها', 'التوقف فوراً في مكانك', 'إفساح الطريق فوراً بالانتقال لجهة اليمين أو التوقف بأمان', 'تجاهلها إذا كنت لا تخالف القانون'],
      explanation: 'يجب إفساح الطريق فوراً لمركبات الطوارئ (إسعاف، إطفاء، شرطة) عند استخدامها للمنبهات الضوئية أو الصوتية.'
    },
    en: {
      questionText: 'When you see blue or red flashing emergency lights behind you, what should you do?',
      options: ['Speed up to get out of the way', 'Stop immediately where you are', 'Pull over to the right and stop safely to let them pass', 'Ignore them if you are not breaking the law'],
      explanation: 'You must yield to emergency vehicles (ambulance, fire, police) immediately when they are using their emergency lights or sirens.'
    },
    correctAnswerIndex: 2
  },
  {
    id: 'global_q23',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ما هو "مسار الهروب" (Escape Lane) في الطرق الجبلية؟',
      options: ['مسار مخصص للسرعة الزائدة', 'مسار مملوء بالرمل أو الحصى مصمم لإيقاف الشاحنات التي تفقد فراملها', 'مسار مخصص للدراجات النارية', 'طريق فرعي للمناظر الطبيعية'],
      explanation: 'مسارات الهروب هي مناطق أمان في المنحدرات الحادة مصممة لإيقاف المركبات الثقيلة في حال تعطل مكابحها بشكل آمن.'
    },
    en: {
      questionText: 'What is an "Escape Lane" or "Runaway Truck Ramp" on mountain roads?',
      options: ['A lane for high-speed driving', 'A lane filled with sand or gravel designed to stop vehicles with brake failure', 'A dedicated lane for motorcycles', 'A scenic detour road'],
      explanation: 'Escape lanes are safety areas on steep downgrades designed to safely stop heavy vehicles that have experienced brake failure.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q24',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هو التصرف الصحيح عند المرور بمنطقة أعمال طرق؟',
      options: ['زيادة السرعة لتجاوز الغبار', 'اتباع تعليمات العمال واللوحات المؤقتة وتقليل السرعة', 'التوقف والحديث مع العمال', 'استخدام المنبه الصوتي طوال الوقت'],
      explanation: 'مناطق أعمال الطرق تتطلب حذراً شديداً؛ يجب الالتزام بالسرعة المخفضة وتعليمات المحولين المروريين لسلامة الجميع.'
    },
    en: {
      questionText: 'What is the correct behavior when passing through a road work zone?',
      options: ['Speed up to avoid the dust', 'Follow worker instructions, temporary signs, and reduce speed', 'Stop and talk to the workers', 'Use the horn continuously'],
      explanation: 'Road work zones require extra caution; you must adhere to reduced speed limits and follow traffic controllers for everyone\'s safety.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q25',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما معنى اللوحة المثلثة التي تحتوي على رمز "مطبات"؟',
      options: ['طريق سريع قادم', 'تحذير من وجود مطبات اصطناعية أمامك، يجب تخفيف السرعة', 'منطقة مخصصة للقفز بالسيارات', 'طريق مغلق'],
      explanation: 'هذه لوحة تحذيرية تنبه السائق لوجود مطبات لتهدئة السرعة، والهدف منها حماية المشاة أو تقليل السرعة في مناطق معينة.'
    },
    en: {
      questionText: 'What does a triangular sign with a "hump" symbol mean?',
      options: ['High-speed road ahead', 'Warning of speed humps ahead; reduce speed', 'Area for car jumping', 'Closed road'],
      explanation: 'This is a warning sign alerting the driver to speed humps, intended to slow down traffic for pedestrian safety or at specific locations.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q26',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'عند التقاطع، إذا كانت الإشارة الضوئية لا تعمل، كيف يجب أن تتصرف؟',
      options: ['المرور بأقصى سرعة', 'اعتبار التقاطع كتقاطع غير منظم (الأولوية لليمين)', 'الانتظار حتى تعمل الإشارة مجدداً', 'الرجوع للخلف'],
      explanation: 'في حال تعطل الإشارة الضوئية، يجب معاملة التقاطع كتقاطع غير منظم وتطبيق قواعد الأولوية العامة (مثل حق الأولوية للقادم من اليمين).'
    },
    en: {
      questionText: 'At an intersection, if the traffic lights are not working, how should you behave?',
      options: ['Pass through at maximum speed', 'Treat the intersection as uncontrolled (give way to the right)', 'Wait until the lights start working again', 'Reverse and find another way'],
      explanation: 'If traffic signals fail, the intersection should be treated as uncontrolled, and general right-of-way rules (like giving way to the right) must be applied.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q27',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ما هي أهمية مسند الرأس في مقعد السيارة؟',
      options: ['للنوم أثناء القيادة', 'لحماية الرقبة من الإصابة (Whiplash) في حال التعرض لاصطدام خلفي', 'للديكور فقط', 'لزيادة ارتفاع المقعد'],
      explanation: 'مسند الرأس ليس للراحة فقط، بل هو أداة سلامة هامة تمنع ارتداد الرأس العنيف للخلف عند وقوع اصطدام من الخلف.'
    },
    en: {
      questionText: 'What is the importance of the headrest in a car seat?',
      options: ['For sleeping while driving', 'To protect the neck from whiplash injury in the event of a rear-end collision', 'For decoration only', 'To increase seat height'],
      explanation: 'The headrest is not just for comfort; it is a vital safety feature that prevents the head from jerking backward violently during a rear-end collision.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q28',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هو "خط المشاة" (Zebra Crossing)؟',
      options: ['منطقة ممنوع الوقوف فيها', 'ممر مخصص لعبور المشاة، ولهم الأولوية المطلقة فيه', 'خط لتحديد نهاية الطريق', 'مكان مخصص لرسم اللوحات'],
      explanation: 'خطوط المشاة البيضاء على الطريق تعني ممر عبور للمشاة، ويجب على السائقين التوقف تماماً إذا كان هناك شخص يحاول العبور.'
    },
    en: {
      questionText: 'What is a "Zebra Crossing"?',
      options: ['A no-parking zone', 'A dedicated pedestrian crossing where pedestrians have absolute priority', 'A line indicating the end of the road', 'A place for artistic painting'],
      explanation: 'White zebra stripes on the road indicate a pedestrian crossing; drivers must stop completely if anyone is attempting to cross.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q29',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ماذا تعني اللوحة الدائرية الحمراء التي تحتوي على صورة سيارة ودراجة نارية؟',
      options: ['يسمح بمرور السيارات والدراجات', 'ممنوع مرور جميع المركبات الآلية (المحركات)', 'معرض سيارات ودراجات', 'تحذير من زحام مروري'],
      explanation: 'هذه لوحة منع، وتعني حظر دخول كافة المركبات التي تعمل بمحرك من هذا الاتجاه.'
    },
    en: {
      questionText: 'What does a circular red sign with symbols of a car and a motorcycle mean?',
      options: ['Cars and motorcycles are allowed', 'Entry prohibited for all motor vehicles', 'Car and bike show ahead', 'Warning of heavy traffic'],
      explanation: 'This is a prohibition sign, meaning that entry is forbidden for all motor-powered vehicles from this direction.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q30',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'عند القيادة في نفق، ما هو الإجراء الواجب اتباعه؟',
      options: ['إطفاء الأنوار لتوفير الكهرباء', 'تشغيل الأنوار المنخفضة، عدم التجاوز، والحفاظ على مسافة أمان كافية', 'استخدام الضوء العالي دائماً', 'زيادة السرعة للخروج بسرعة'],
      explanation: 'الأنفاق تتطلب إضاءة المركبة لتكون مرئية، كما يمنع فيها التغيير المفاجئ للمسارات أو التجاوز لخطورة الحوادث بداخلها.'
    },
    en: {
      questionText: 'When driving in a tunnel, what action should be followed?',
      options: ['Turn off lights to save electricity', 'Turn on low-beam headlights, do not overtake, and maintain a safe following distance', 'Always use high beams', 'Speed up to exit quickly'],
      explanation: 'Tunnels require vehicle lighting for visibility; sudden lane changes or overtaking are usually prohibited due to the higher risk of accidents.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q31',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ماذا تفعل إذا كان هناك شخص يتبعك عن قرب جداً (Tailgating)؟',
      options: ['الضغط على الفرامل فجأة لتخويفه', 'زيادة السرعة للهرب منه', 'البقاء هادئاً، وزيادة مسافة الأمان أمامك، والسماح له بالتجاوز عندما يكون ذلك آمناً', 'إطلاق المنبه الصوتي'],
      explanation: 'التعامل مع السائقين المزعجين يتطلب حكمة؛ لا تستفزهم بالفرملة، بل هيئ لهم مجالاً للتجاوز لتتخلص من خطرهم.'
    },
    en: {
      questionText: 'What should you do if someone is following you too closely (tailgating)?',
      options: ['Brake suddenly to scare them', 'Speed up to escape them', 'Stay calm, increase your own following distance, and let them pass when safe', 'Honk your horn at them'],
      explanation: 'Dealing with aggressive drivers requires wisdom; do not provoke them with sudden braking, but instead create space for them to pass safely.'
    },
    correctAnswerIndex: 2
  },
  {
    id: 'global_q32',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هي أهمية الالتزام بالخطوط الأرضية المتصلة (الصلبة)؟',
      options: ['للديكور فقط', 'تعني منع التجاوز أو تغيير المسار نهائياً في هذا المقطع من الطريق', 'تسمح بالتجاوز في النهار فقط', 'تحدد مكان وقوف السيارات'],
      explanation: 'الخطوط المتصلة (سواء بيضاء أو صفراء) في منتصف الطريق تعني حظر التجاوز تماماً لانعدام الرؤية أو خطورة المكان.'
    },
    en: {
      questionText: 'What is the importance of adhering to solid (continuous) road markings?',
      options: ['They are for decoration only', 'They mean overtaking or changing lanes is strictly prohibited in this section', 'They allow overtaking during the day only', 'They indicate parking spots'],
      explanation: 'Solid lines (white or yellow) in the center of the road mean overtaking is strictly forbidden due to poor visibility or road hazards.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q33',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما معنى اللوحة المثلثة التي تحتوي على رمز "قطار"؟',
      options: ['محطة قطار سياحية', 'تحذير من اقتراب تقاطع سكة حديد، يجب الحذر والتوقف إذا لزم الأمر', 'ممنوع مرور القطارات', 'طريق سريع للسيارات فقط'],
      explanation: 'هذه لوحة تحذيرية تنبه السائق لاقتراب سكة حديد (سواء بحواجز أو بدون) وتتطلب انتباهاً شديداً.'
    },
    en: {
      questionText: 'What does a triangular sign with a "train" symbol mean?',
      options: ['A tourist train station', 'Warning of a railway crossing ahead; be cautious and stop if necessary', 'Trains are prohibited', 'High-speed road for cars only'],
      explanation: 'This is a warning sign alerting the driver to an upcoming railway crossing (with or without barriers), requiring extreme attention.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q34',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'عند الخروج من طريق فرعي إلى طريق رئيسي، لمن تكون الأولوية؟',
      options: ['لك لأنك قادم من اليمين', 'للمركبات التي تسير بالفعل على الطريق الرئيسي', 'للسيارة الأسرع', 'لا توجد أولوية محددة'],
      explanation: 'دائماً تكون الأولوية للمركبات التي تسير على الطريق الرئيسي؛ يجب على القادم من الطريق الفرعي التوقف تماماً أو التمهل حتى يخلو المسار.'
    },
    en: {
      questionText: 'When exiting a side road onto a main road, who has priority?',
      options: ['You, because you are coming from the right', 'Vehicles already traveling on the main road', 'The fastest vehicle', 'There is no specific priority'],
      explanation: 'Priority always belongs to vehicles already on the main road; drivers entering from a side road must stop or slow down until the path is clear.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q35',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'لماذا يجب تجنب القيادة في "النقطة العمياء" للشاحنات الكبيرة؟',
      options: ['لأن الشاحنة تسير ببطء', 'لأن سائق الشاحنة قد لا يراك إطلاقاً، مما يعرضك لخطر الانحراف أو الاصطدام', 'لأنها تسبب تلوثاً هوائياً', 'لأن الشاحنات لها مسارات خاصة'],
      explanation: 'للشاحنات الكبيرة نقاط عمياء واسعة جداً (تسمى No Zones). إذا كنت لا تستطيع رؤية مرايا الشاحنة، فسائقها لا يستطيع رؤيتك.'
    },
    en: {
      questionText: 'Why should you avoid driving in a large truck\'s "Blind Spot"?',
      options: ['Because trucks drive slowly', 'Because the truck driver may not see you at all, risking a collision if they swerve', 'Because it causes air pollution', 'Because trucks have their own lanes'],
      explanation: 'Large trucks have very wide blind spots (often called "No Zones"). If you cannot see the truck\'s mirrors, the driver cannot see you.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q36',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هو التصرف الصحيح إذا تجاوزت المخرج الصحيح على الطريق السريع؟',
      options: ['الرجوع للخلف على كتف الطريق', 'التوقف والانتظار', 'متابعة السير حتى المخرج التالي والعودة من هناك', 'الانعطاف عبر الجزيرة الوسطية'],
      explanation: 'الرجوع للخلف على الطريق السريع مخالفة خطيرة جداً. يجب دائماً المتابعة للمخرج القادم لضمان السلامة.'
    },
    en: {
      questionText: 'What is the correct action if you miss your exit on a highway?',
      options: ['Reverse on the shoulder', 'Stop and wait', 'Continue to the next exit and turn back from there', 'Turn across the median strip'],
      explanation: 'Reversing on a highway is a extremely dangerous violation. You must always continue to the next exit to ensure safety.'
    },
    correctAnswerIndex: 2
  },
  {
    id: 'global_q37',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما معنى اللوحة الدائرية الحمراء التي تحتوي على صورة "بوق" (منبه صوتي) مشطوب؟',
      options: ['يجب استخدام المنبه الصوتي', 'ممنوع استخدام المنبه الصوتي في هذه المنطقة (مثلاً قرب المستشفيات)', 'منبه السيارة معطل', 'منطقة بيع منبهات'],
      explanation: 'هذه اللوحة تحظر استخدام منبه الصوت (الكلاكس) إلا في حالات الضرورة القصوى لتجنب الضوضاء في مناطق معينة.'
    },
    en: {
      questionText: 'What does a circular red sign with a crossed-out "horn" symbol mean?',
      options: ['You must use your horn', 'Use of the horn is prohibited in this area (e.g., near hospitals)', 'The car horn is broken', 'Horn sales area ahead'],
      explanation: 'This sign prohibits the use of the vehicle horn except in extreme emergencies to avoid noise pollution in specific zones.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q38',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'عند الاقتراب من معبر مشاة، ورأيت شخصاً يستعد للعبور، ماذا تفعل؟',
      options: ['زيادة السرعة للمرور قبله', 'إطلاق المنبه الصوتي لتحذيره', 'التوقف تماماً وإفساح المجال له للعبور بأمان', 'تجاهله إذا لم يبدأ بالعبور فعلياً'],
      explanation: 'المشاة لهم الأولوية المطلقة عند الممرات المخصصة لهم؛ يجب التوقف ومنحهم الفرصة للعبور بسلام.'
    },
    en: {
      questionText: 'When approaching a pedestrian crossing and seeing someone preparing to cross, what do you do?',
      options: ['Speed up to pass before them', 'Honk your horn to warn them', 'Stop completely and allow them to cross safely', 'Ignore them if they haven\'t started crossing yet'],
      explanation: 'Pedestrians have absolute priority at designated crossings; you must stop and grant them the opportunity to cross safely.'
    },
    correctAnswerIndex: 2
  },
  {
    id: 'global_q39',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ما هي أهمية ترك مسافة أمان كافية خلف الشاحنات الكبيرة؟',
      options: ['لرؤية الطريق أمام الشاحنة بشكل أفضل ولتجنب الحجارة المتطايرة', 'لتوفير الوقود', 'لالتصاق بالشاحنة للهرب من الرياح', 'لا توجد أهمية'],
      explanation: 'ترك مسافة خلف الشاحنة يحسن مجال رؤيتك للأمام ويحميك من أي أجسام قد تسقط أو تتطاير من إطارات الشاحنة.'
    },
    en: {
      questionText: 'What is the importance of leaving a sufficient safety distance behind large trucks?',
      options: ['To see the road ahead better and avoid flying debris', 'To save fuel', 'To draft behind the truck and avoid wind resistance', 'There is no importance'],
      explanation: 'Leaving space behind a truck improves your forward field of vision and protects you from any objects that might fall or fly off the truck\'s tires.'
    },
    correctAnswerIndex: 0
  },
  {
    id: 'global_q40',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما معنى "القيادة الوقائية" (Defensive Driving)؟',
      options: ['القيادة ببطء شديد دائماً', 'القيادة بتوقع أخطاء الآخرين والاستعداد للتعامل معها لتجنب الحوادث', 'القيادة مع وجود حراس أمن', 'القيادة في وسط الطريق'],
      explanation: 'القيادة الوقائية هي استراتيجية تهدف لتقليل المخاطر عبر الانتباه الدائم وتوقع المفاجآت من السائقين الآخرين أو ظروف الطريق.'
    },
    en: {
      questionText: 'What does "Defensive Driving" mean?',
      options: ['Driving very slowly at all times', 'Driving by anticipating others\' mistakes and being prepared to react to avoid accidents', 'Driving with security guards', 'Driving in the middle of the road'],
      explanation: 'Defensive driving is a strategy aimed at reducing risk by remaining alert and anticipating surprises from other drivers or road conditions.'
    },
    correctAnswerIndex: 1
  }
];

/**
 * SYNTAX TEMPLATE TO APPEND THE REMAINING 14 ARAB COUNTRIES FLAWLESSLY:
 * ------------------------------------------------------------------
 * Simply copy and append key-value entries to the BILINGUAL_COUNTRIES_DATA object
 * following the template below:
 * 
 * countryId: {
 *   code: 'countryId (e.g., "sy", "ye")',
 *   questionsCount: 30,
 *   passingScore: '80%',
 *   ar: {
 *     name: 'اسم الدولة بالعربية',
 *     authority: 'الهيئة المرورية الوطنية بالعربية',
 *     seoTitle: 'عنوان السيو المطور بالعربية | منصة اجتياز',
 *     seoDescription: 'وصف السيو المحسن للبحث بالعربية.',
 *     h1Heading: 'العنوان الرئيسي للواجهة بالعربية'
 *   },
 *   en: {
 *     name: 'Country Name in English',
 *     authority: 'Traffic Authority Name in English',
 *     seoTitle: 'Optimized Meta Title in English | Ijtiaz',
 *     seoDescription: 'Optimized Meta Description in English with local keywords.',
 *     h1Heading: 'Main H1 Header in English'
 *   },
 *   questions: [
 *     {
 *       id: 'countryId_q1',
 *       category: { ar: 'الإشارات المرورية', en: 'Traffic Signs' },
 *       ar: {
 *         questionText: 'نص السؤال بالعربية',
 *         options: ['الخيار الأول', 'الخيار الثاني', 'الخيار الثالث', 'الخيار الرابع'],
 *         explanation: 'تفسير الإجابة الصحيحة بالعربية'
 *       },
 *       en: {
 *         questionText: 'Question text in English',
 *         options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
 *         explanation: 'Explanation of correct answer in English'
 *       },
 *       correctAnswerIndex: 0
 *     }
 *   ]
 * }
 */
