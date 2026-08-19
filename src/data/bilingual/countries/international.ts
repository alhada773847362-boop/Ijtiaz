import { BilingualCountry } from '../types';

export const INTERNATIONAL_COUNTRIES: Record<string, BilingualCountry> = {
  us: {
    code: 'us',
    questionsCount: 50,
    passingScore: '80%',
    ar: {
      name: 'الولايات المتحدة الأمريكية',
      authority: 'إدارة المركبات الآلية (DMV)',
      seoTitle: 'اختبار القيادة الأمريكي DMV بالعربي (جميع الولايات) | منصة اجتياز',
      seoDescription: 'تدرب مجاناً على اختبار القيادة النظري الأمريكي DMV باللغة العربية والإنجليزية. أسئلة حقيقية ومحدثة تغطي قوانين المرور في كاليفورنيا، تكساس، نيويورك وجميع الولايات.',
      h1Heading: 'محاكي اختبار القيادة النظري الأمريكي - DMV Written Test'
    },
    en: {
      name: 'United States',
      authority: 'Department of Motor Vehicles (DMV)',
      seoTitle: 'Free DMV Written Test Simulator - All US States Practice | Ijtiaz',
      seoDescription: 'Pass your DMV written knowledge test with our realistic simulator. Practice actual questions for California, Texas, Florida, New York, and all 50 states.',
      h1Heading: 'DMV Driving Knowledge Test Simulator (All US States)'
    },
    questions: [
      {
        id: 'us_q1',
        category: { ar: 'حق الأولوية والتقاطعات', en: 'Right of Way and Intersections' },
        ar: {
          questionText: 'في تقاطع رباعي غير منظم (بدون إشارات أو لوحات قف)، وصلت سيارتان في نفس اللحظة تماماً. لمن تكون الأولوية؟',
          options: ['للسائق الموجود على جهة اليمين', 'للسائق الموجود على جهة اليسار', 'للسيارة الأكبر حجماً', 'للسيارة التي تطلق المنبه أولاً'],
          explanation: 'القاعدة الأساسية في قانون المرور الأمريكي: إذا وصل سائقان في نفس الوقت إلى تقاطع متكافئ، يجب على السائق الموجود على اليسار إعطاء الأولوية للسائق الموجود على يمينه.'
        },
        en: {
          questionText: 'At an uncontrolled 4-way intersection (no signs or signals), two vehicles arrive at the exact same time. Who has the right-of-way?',
          options: ['The driver on the right', 'The driver on the left', 'The larger vehicle', 'The driver who honks first'],
          explanation: 'Under standard US traffic laws, when two vehicles arrive simultaneously at an uncontrolled intersection, the driver on the left must yield to the driver on the right.'
        },
        correctAnswerIndex: 0
      },
      {
        id: 'us_q2',
        category: { ar: 'إشارات المرور والعلامات', en: 'Traffic Signs and Signals' },
        ar: {
          questionText: 'ما معنى إشارة المرور ذات الشكل المثمن (ثماني الأضلاع) ولونها أحمر؟',
          options: ['تمهل وأفسح الطريق', 'توقف تام عند خط التوقف قبل التقاطع', 'ممنوع الدخول', 'منطقة أعمال طريق'],
          explanation: 'الشكل المثمن محجوز عالمياً وفي الولايات المتحدة حصرياً لإشارة (STOP) التوقف الكامل.'
        },
        en: {
          questionText: 'What does an eight-sided (octagonal) red traffic sign indicate?',
          options: ['Slow down and yield', 'Come to a complete stop at the stop line before the crosswalk or intersection', 'Do not enter', 'Road work ahead'],
          explanation: 'The octagonal shape is uniquely and exclusively reserved for STOP signs across the United States.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q3',
        category: { ar: 'الكحول والمخدرات', en: 'Alcohol and Impaired Driving' },
        ar: {
          questionText: 'في معظم الولايات الأمريكية، ما هو الحد الأقصى القانوني لنسبة الكحول في الدم (BAC) للسائقين بعمر 21 عاماً فأكثر؟',
          options: ['0.02%', '0.05%', '0.08%', '0.10%'],
          explanation: 'الحد القانوني الفيدرالي في جميع الولايات الأمريكية هو 0.08%، ويعتبر السائق تحت تأثير المسكر قانونياً إذا وصل لهذا المستوى أو تجاوزه (وفي يوتا 0.05%).'
        },
        en: {
          questionText: 'In most US states, what is the legal Blood Alcohol Concentration (BAC) limit for drivers aged 21 and older?',
          options: ['0.02%', '0.05%', '0.08%', '0.10%'],
          explanation: 'In almost all US states, a BAC of 0.08% or higher is legally considered Driving Under the Influence (DUI/DWI).'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'us_q4',
        category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
        ar: {
          questionText: 'عند القيادة خلف حافلة مدرسية توقفت وبدأت تومض أضواءها الحمراء وفتحت ذراع إشارة (STOP)، ماذا يجب عليك أن تفعل؟',
          options: ['التجاوز بحذر من اليسار', 'التوقف التام على بعد 20 قدماً على الأقل حتى تنطفئ الأضواء ويتحرك الباص', 'المرور بسرعة إذا لم ترَ أي أطفال', 'استخدام المنبه الصوتي للتحذير'],
          explanation: 'ينص القانون الأمريكي في جميع الولايات على التوقف التام في كلا الاتجاهين (ما لم يفصل الطريق حاجز إسمنتي) لحماية الأطفال.'
        },
        en: {
          questionText: 'When driving behind a school bus that has stopped with flashing red lights and an extended stop arm, what must you do?',
          options: ['Pass cautiously on the left', 'Stop completely at least 20 feet away until the lights stop flashing and the stop arm retracts', 'Pass quickly if no children are visible', 'Honk your horn to warn pedestrians'],
          explanation: 'You must stop completely until the red lights stop flashing and children have safely crossed the street.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'us_q5',
        category: { ar: 'القيادة في الطرق السريعة', en: 'Freeway Driving and Speed Limits' },
        ar: {
          questionText: 'ما هو قانون "إفساح الطريق للمركبات المتوقفة" (Move Over Law) في الولايات المتحدة؟',
          options: ['تجاوز مركبات الطوارئ بأقصى سرعة', 'تغيير المسار بعيداً عن مركبات الطوارئ أو الصيانة المتوقفة على جانب الطريق، أو تخفيف السرعة بشكل كبير إذا تعذر تغيير المسار', 'الوقوف خلف مركبة الطوارئ لمساعدتهم', 'استخدام الضوء العالي لتنبيههم'],
          explanation: 'قانون Move Over موجود في جميع الولايات الأمريكية ويلزم السائقين بالانتقال مساراً واحداً بعيداً عن سيارات الطوارئ المتوقفة على الكتف لحماية رجال الأمن والإسعاف.'
        },
        en: {
          questionText: 'What is the "Move Over Law" in the United States?',
          options: ['Pass stationary emergency vehicles at maximum speed', 'Vacate the lane closest to stopped emergency or maintenance vehicles, or slow down significantly if changing lanes is unsafe', 'Pull over behind emergency vehicles to offer help', 'Flash high beams to alert personnel'],
          explanation: 'Move Over laws in all 50 states require drivers to change lanes or reduce speed when approaching stopped emergency vehicles with flashing lights.'
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
      seoTitle: 'امتحان القيادة النظري في بريطانيا DVSA بالعربي | منصة اجتياز',
      seoDescription: 'استعد لاجتياز اختبار القيادة النظري البريطاني DVSA من المرة الأولى. أسئلة كتاب Highway Code المترجمة للعربية مع شرح وافٍ.',
      h1Heading: 'محاكي اختبار القيادة النظري البريطاني - DVSA Theory Test'
    },
    en: {
      name: 'United Kingdom',
      authority: 'Driver and Vehicle Standards Agency (DVSA)',
      seoTitle: 'Official DVSA Theory Test Mock Practice 2026 | Ijtiaz',
      seoDescription: 'Prepare for your official DVSA UK Driving Theory Test. Complete mock questions based on the latest Highway Code for car drivers in England, Scotland, and Wales.',
      h1Heading: 'DVSA UK Driving Theory Exam Simulator (Highway Code)'
    },
    questions: [
      {
        id: 'gb_q1',
        category: { ar: 'ممرات المشاة والسلامة', en: 'Pedestrian Crossings and Safety' },
        ar: {
          questionText: 'ما الذي يجب عليك فعله عند الاقتراب من ممر مشاة "Zebra Crossing" ورأيت شخصاً يقف على الرصيف منتظراً العبور؟',
          options: ['زيادة السرعة للمرور قبله', 'التوقف التام والسماح للمشاة بالعبور بأمان', 'إطلاق المنبه الصوتي لتحذيره', 'التلويح له بيدك للعبور'],
          explanation: 'وفقاً لقانون الطرق البريطاني (Highway Code)، يجب على السائقين إعطاء الأولوية دائماً للمشاة الذين ينتظرون للعبور عند ممر زيبرا.'
        },
        en: {
          questionText: 'What should you do when approaching a Zebra crossing and you see pedestrians waiting to cross?',
          options: ['Speed up to pass before they step on the road', 'Stop and give way to allow them to cross safely', 'Sound your horn to warn them', 'Wave your hand to tell them to cross'],
          explanation: 'Under Highway Code Rule 195, you must give way when a pedestrian is waiting to cross at a Zebra crossing.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'gb_q2',
        category: { ar: 'السرعات وقواعد الطريق السريع', en: 'Speed Limits and Motorways' },
        ar: {
          questionText: 'ما هي السرعة القصوى المسموح بها للسيارات العادية على الطرق المزدوجة (Dual Carriageways) والطرق السريعة (Motorways) في بريطانيا؟',
          options: ['50 ميل في الساعة (mph)', '60 ميل في الساعة (mph)', '70 ميل في الساعة (mph)', '80 ميل في الساعة (mph)'],
          explanation: 'السرعة القصوى الوطنية (National Speed Limit) للسيارات على الطرق السريعة والطرق المزدوجة في بريطانيا هي 70 ميلاً في الساعة ما لم توجد إشارات تحدد غير ذلك.'
        },
        en: {
          questionText: 'What is the national speed limit for cars and motorcycles on UK motorways and dual carriageways?',
          options: ['50 mph', '60 mph', '70 mph', '80 mph'],
          explanation: 'The national speed limit on dual carriageways and motorways for passenger cars is 70 mph unless signs indicate a lower temporary or permanent limit.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'gb_q3',
        category: { ar: 'مسافات الأمان والطقس', en: 'Stopping Distances and Weather' },
        ar: {
          questionText: 'في الطقس الماطر والطرق المبللة في بريطانيا، ما هي مسافة الأمان الزمنية الواجب تركها خلف السيارة الأمامية؟',
          options: ['ثانية واحدة', 'ثانيتان', 'أربع ثوانٍ على الأقل (مضاعفة المسافة المعتادة)', 'عشر ثوانٍ'],
          explanation: 'تنص قواعد المرور البريطانية على مضاعفة مسافة الأمان من ثانيتين في الجو الجاف إلى أربع ثوانٍ على الأقل في الجو الماطر أو الطرق المبللة.'
        },
        en: {
          questionText: 'What is the recommended time gap to leave between you and the vehicle in front on a wet road in the UK?',
          options: ['One second', 'Two seconds', 'At least four seconds', 'Ten seconds'],
          explanation: 'The Highway Code recommends doubling the standard two-second gap to at least four seconds when driving on wet roads.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'gb_q4',
        category: { ar: 'التقاطعات وصناديق التقاطع الصفراء', en: 'Yellow Box Junctions' },
        ar: {
          questionText: 'متى يسمح لك بالدخول والتوقف المؤقت داخل "صندوق التقاطع الأصفر المخطط" (Yellow Box Junction) في بريطانيا؟',
          options: ['في أي وقت عند الازدحام', 'فقط عندما تريد الانعطاف لليمين وتنتظر خلو حركة المرور القادمة من الأمام، وكان مخرجك سالكاً', 'ممنوع الدخول إليه تحت أي ظرف مطلقاً', 'فقط إذا كنت تقود سيارة أجرة'],
          explanation: 'الاستثناء الوحيد لدخول الصندوق الأصفر والانتظار فيه هو عند الرغبة في الانعطاف لليمين وتكون حركة المرور المعاكسة هي المانع الوحيد مع خلو المخرج.'
        },
        en: {
          questionText: 'When are you permitted to enter and wait in a Yellow Box Junction in the UK?',
          options: ['Anytime traffic is heavy', 'Only when you want to turn right and are prevented from turning solely by oncoming traffic or other vehicles turning right', 'Never enter under any circumstances', 'Only if driving a licensed taxi'],
          explanation: 'Highway Code Rule 174: You may enter a box junction and wait when turning right, provided your exit road is clear and you are only blocked by oncoming traffic.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'gb_q5',
        category: { ar: 'الإشارات الضوئية وقواعد المرور', en: 'Traffic Signals and Rules' },
        ar: {
          questionText: 'في بريطانيا، ما الذي تعنيه إشارة المرور عند إضاءة الضوء الأحمر والضوء البرتقالي (الأصفر) معاً؟',
          options: ['توقف', 'استعد للانطلاق لأن الضوء الأخضر وشيك الظهور (مع عدم التحرك حتى يظهر الأخضر)', 'مرور فوري', 'تحذير من عطل'],
          explanation: 'في نظام الإشارات البريطاني، اجتماع الأحمر والكهرماني ينبه السائق للاستعداد دون التحرك حتى يضيء الأخضر تماماً.'
        },
        en: {
          questionText: 'In the UK, what does a traffic light displaying Red and Amber together mean?',
          options: ['Stop immediately', 'Get ready to go because Green is about to show (do not move until Green appears)', 'Go immediately', 'Fault warning'],
          explanation: 'Red and Amber together indicates that the signal is about to change to green, but you must not pass the stop line until green shows.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'gb_q6',
        category: { ar: 'الكحول والقيادة في بريطانيا', en: 'Alcohol Limits in the UK' },
        ar: {
          questionText: 'ما هي النسبة القانونية القصوى للكحول في الدم (BAC) للسائقين في إنجلترا وويلز؟',
          options: ['35 ملغم لكل 100 مل دم', '80 ملغم كحول لكل 100 مل من الدم (0.08%)', 'صفر ملغم', '100 ملغم'],
          explanation: 'الحد القانوني في إنجلترا وويلز هو 80 ملغم كحول في 100 مل دم (أما في اسكتلندا فالحد هو 50 ملغم).'
        },
        en: {
          questionText: 'What is the legal alcohol limit for drivers in England and Wales per 100 ml of blood?',
          options: ['35 mg', '80 mg of alcohol per 100 ml of blood', 'Zero mg', '100 mg'],
          explanation: 'In England and Wales, the legal alcohol limit is 80 mg of alcohol per 100 ml of blood (in Scotland it is 50 mg).'
        },
        correctAnswerIndex: 1
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
          options: ['الضغط على الفرامل بقوة للتوقف', 'زيادة السرعة لتجاوز منطقة الجليد بسرعة', 'رفع القدم عن دواسة الوقود والحفاظ على استقامة المقود دون الضغط على الفرامل', 'الانعطاف يميناً ويساراً بسرعة لاستعادة التماسك'],
          explanation: 'الجليد الأسود شفاف ويصعب رؤيته. عند المرور فوقه، يجب الحفاظ على هدوئك وتجنب أي حركات مفاجئة للمقود أو الفرامل حتى تمر بسلام.'
        },
        en: {
          questionText: 'What is the correct action when driving on "Black Ice" in Canada?',
          options: ['Apply brakes firmly to stop the car', 'Increase speed to clear the icy patch quickly', 'Ease off the gas and keep the steering wheel straight without braking', 'Turn the wheel rapidly left and right to regain traction'],
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
          options: ['للسيارة الأسرع في الانطلاق', 'للسيارة الموجودة على جهة اليمين', 'للسيارة التي تريد السير في خط مستقيم', 'للسيارة التي تطلق منبه الصوت أولاً'],
          explanation: 'في تقاطعات التوقف الكامل بجميع الاتجاهات، إذا وصلت سيارتان في نفس الوقت، تكون الأولوية للسيارة الموجودة على اليمين.'
        },
        en: {
          questionText: 'In Canada, when arriving at an "All-Way Stop" intersection at the same time as another vehicle, who has the right of way?',
          options: ['The vehicle that starts moving faster', 'The vehicle on the right side', 'The vehicle intending to go straight', 'The vehicle that honks first'],
          explanation: 'At an all-way stop, if two vehicles arrive at the same time, the driver on the left must yield to the driver on the right.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'ca_q4',
        category: { ar: 'كاسحات الثلوج والسلامة الشتوية', en: 'Snowplow Safety' },
        ar: {
          questionText: 'في الشتاء الكندي، عند القيادة خلف كاسحة ثلوج (Snowplow) تعمل على الطريق السريع، ماذا يجب عليك فعله؟',
          options: ['تجاوز كاسحة الثلوج من اليمين بأقصى سرعة', 'البقاء خلف كاسحة الثلوج على مسافة آمنة جداً وعدم محاولة التجاوز لأن الطريق أمامها غير ممهد ومغطى بالثلوج', 'إطلاق المنبه الصوتي لتفسح لك الطريق', 'القيادة بمحاذاتها مباشرة'],
          explanation: 'تجاوز كاسحات الثلوج خطر للغاية؛ الطريق أمام الكاسحة يكون غير مجروف ومليئاً بالجليد، بالإضافة لضعف الرؤية بسبب رذاذ الثلج.'
        },
        en: {
          questionText: 'In Canadian winter driving, what should you do when following a working snowplow on a highway?',
          options: ['Pass the snowplow aggressively on the right', 'Stay well behind at a safe distance and never attempt to pass, as the road ahead is unplowed and slippery', 'Honk at the operator to yield', 'Drive directly beside the plow blade'],
          explanation: 'Passing a working snowplow is extremely dangerous because the unplowed road ahead is treacherous and visibility is blocked by snow plumes.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'ca_q5',
        category: { ar: 'قوانين أونتاريو G1 و ICBC', en: 'Ontario G1 & ICBC Regulations' },
        ar: {
          questionText: 'في أونتاريو، متى يحظر على حامل رخصة G1 القيادة على الطرق السريعة ذات السرعات العالية (مثل سلسلة طرق 400 السريعة)؟',
          options: ['يسمح له دائماً بمفرده', 'يحظر عليه القيادة عليها ما لم يكن برفقته مدرب سياقة مرخص ومؤهل من أونتاريو', 'فقط في فصل الصيف', 'فقط في عطلة نهاية الأسبوع'],
          explanation: 'يمنع حاملو رخصة G1 من قيادة المركبة على الطرق السريعة من سلسلة 400 وطريق QEW إلا إذا كان برفقتهم مدرب قيادة معتمد.'
        },
        en: {
          questionText: 'In Ontario, when is a G1 driver permitted to drive on 400-series expressways or high-speed freeways?',
          options: ['Anytime on their own', 'Only when accompanied by a licensed Ontario driving instructor', 'Only during summer', 'Only on weekends'],
          explanation: 'G1 drivers cannot drive on 400-series highways or the QEW unless accompanied by a certified Ontario driving instructor.'
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
          options: ['فقط عند استخدام مكبر الصوت (Speaker)', 'عند التوقف في زحام مروري', 'لا يسمح باستخدامه نهائياً، حتى في وضع عدم اللمس، أثناء القيادة أو التوقف المؤقت', 'فقط لاستخدام خرائط Google'],
          explanation: 'في أستراليا، يمنع منعاً باتاً على حاملي رخص L و P استخدام الهاتف المحمول بأي شكل من الأشكال أثناء القيادة.'
        },
        en: {
          questionText: 'When is a Learner or P1/P2 provisional driver allowed to use a mobile phone in Australia?',
          options: ['Only when using the loudspeaker function', 'When stopped in heavy traffic', 'Never; mobile phone use is strictly prohibited for L and P platers while driving or stopped', 'Only for using Google Maps navigation'],
          explanation: 'In Australia, Learner and Provisional (P1/P2) drivers are not permitted to use any function of a mobile phone while driving, including hands-free or GPS.'
        },
        correctAnswerIndex: 2
      },
      {
        id: 'au_q2',
        category: { ar: 'قواعد الدوارات', en: 'Roundabout Rules' },
        ar: {
          questionText: 'عند دخول الدوار في أستراليا، لمن يجب عليك إعطاء الأولوية؟',
          options: ['للمركبات القادمة من اليمين والتي تسير بالفعل داخل الدوار', 'للمركبات القادمة من جهة اليسار فقط', 'للشاحنات الكبيرة فقط', 'لا توجد أولوية، الدخول للأسرع'],
          explanation: 'القاعدة الأساسية في أستراليا هي إعطاء الأولوية للمركبات الموجودة بالفعل داخل الدوار والقادمة من جهة اليمين.'
        },
        en: {
          questionText: 'When entering a roundabout in Australia, who must you give way to?',
          options: ['Traffic already in the roundabout, especially those coming from the right', 'Only traffic approaching from the left', 'Only large heavy trucks', 'There is no priority; the fastest driver enters first'],
          explanation: 'The fundamental rule at Australian roundabouts is to give way to traffic already circulating within the roundabout.'
        },
        correctAnswerIndex: 0
      },
      {
        id: 'au_q3',
        category: { ar: 'السرعة ومناطق المدارس', en: 'Speed and School Zones' },
        ar: {
          questionText: 'ما هي السرعة القصوى المعتادة في مناطق المدارس (School Zones) في أستراليا خلال الساعات المحددة؟',
          options: ['20 كم/س', '40 كم/س', '60 كم/س', '80 كم/س'],
          explanation: 'في معظم الولايات الأسترالية، تنخفض السرعة في مناطق المدارس إلى 40 كم/س خلال ساعات الصباح والمساء المحددة لضمان سلامة الطلاب.'
        },
        en: {
          questionText: 'What is the standard speed limit in Australian School Zones during designated hours?',
          options: ['20 km/h', '40 km/h', '60 km/h', '80 km/h'],
          explanation: 'In most parts of Australia, a 40 km/h speed limit applies in school zones during peak drop-off and pick-up times to protect children.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'au_q4',
        category: { ar: 'الاستدارة عند الإشارات الضوئية', en: 'U-turns at Traffic Lights' },
        ar: {
          questionText: 'في نيو ساوث ويلز ومعظم الولايات الأسترالية، هل يسمح بعمل استدارة (U-turn) عند الإشارات الضوئية؟',
          options: ['نعم في أي وقت', 'فقط إذا كانت هناك لوحة صريحة تسمح بالاستدارة "U-TURN PERMITTED"', 'نعم إذا كان الشارع خالياً', 'فقط في الليل'],
          explanation: 'في أستراليا (باستثناء فيكتوريا)، يحظر عمل U-turn عند الإشارات الضوئية ما لم تكن هناك شاخصة رسمية تسمح بذلك صراحة.'
        },
        en: {
          questionText: 'In NSW and most Australian states, are you permitted to make a U-turn at traffic lights?',
          options: ['Yes, at any time', 'Only where there is an official "U-TURN PERMITTED" sign displayed', 'Yes, if no oncoming traffic', 'Only at night'],
          explanation: 'Under Australian Road Rule 38, U-turns at traffic lights are illegal unless specifically authorized by a "U-TURN PERMITTED" sign.'
        },
        correctAnswerIndex: 1
      },
      {
        id: 'au_q5',
        category: { ar: 'القيادة على الجانب الأيسر', en: 'Left-Hand Driving Rule' },
        ar: {
          questionText: 'في الطرق الأسترالية السريعة متعددة المسارات ذات السرعة 90 كم/س أو أكثر، ما هي القاعدة بشأن المسار الأيمن؟',
          options: ['استخدامه للقيادة البطيئة', 'الالتزام بالبقاء في المسار الأيسر وعدم استخدام المسار الأيمن إلا للتجاوز (Keep Left Unless Overtaking)', 'استخدامه للشاحنات فقط', 'القيادة عليه باستمرار'],
          explanation: 'في أستراليا، القيادة على اليسار؛ والمسار الأيمن مخصص للتجاوز فقط عند السرعات العالية (Keep Left unless overtaking).'
        },
        en: {
          questionText: 'On Australian multi-lane roads with a speed limit over 80 km/h, what is the rule regarding the right-hand lane?',
          options: ['Use it for slow cruising', 'Keep Left unless overtaking (or turning right / avoiding hazards)', 'Reserved for trucks only', 'Cruise continuously on the right'],
          explanation: 'On high-speed roads in Australia, you must drive in the left lane unless overtaking, turning right, or making a U-turn.'
        },
        correctAnswerIndex: 1
      }
    ]
  }
};
