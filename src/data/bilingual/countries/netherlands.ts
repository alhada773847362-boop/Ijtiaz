import { BilingualCountry } from '../types';

export const NETHERLANDS_COUNTRY: BilingualCountry = {
  code: 'nl',
  questionsCount: 65,
  passingScore: '88%',
  ar: {
    name: 'مملكة هولندا',
    authority: 'هيئة فحص كفاءة القيادة (CBR - Centraal Bureau Rijvaardigheidsbewijzen)',
    seoTitle: 'امتحان القيادة النظري في هولندا CBR 2026 بالعربي والهولندي | محاكي اجتياز',
    seoDescription: 'تدرب مجاناً على اختبار القيادة النظري الهولندي CBR لعام 2026 باللغات الهولندية، العربية، الإنجليزية، والتركية. نماذج واقعية لإدراك المخاطر (Gevaarherkenning)، المعرفة (Kennis)، والبصيرة المرورية (Inzicht).',
    h1Heading: 'محاكي اختبار القيادة النظري في هولندا - CBR Auto Theorie Examen 2026'
  },
  en: {
    name: 'Netherlands',
    authority: 'Central Driving License Agency (CBR)',
    seoTitle: 'Official CBR Dutch Driving Theory Test Practice 2026 | Ijtiaz Simulator',
    seoDescription: 'Prepare for your official Dutch CBR car driving theory test (Auto Theorie Examen 2026). Realistic simulator covering Hazard Perception (Gevaarherkenning), Knowledge (Kennis), and Insight (Inzicht) in Dutch, English, Arabic, and Turkish.',
    h1Heading: 'CBR Dutch Car Driving Theory Test Simulator (Auto Theorie 2026)'
  },
  questions: [
    // --- 1. Gevaarherkenning (Hazard Perception) ---
    {
      id: 'nl_cbr_01',
      category: { ar: 'إدراك المخاطر (Gevaarherkenning)', en: 'Hazard Perception (Gevaarherkenning)' },
      ar: {
        questionText: 'أنت تقود بسرعة 45 كم/س في شارع سكني (Woonwijk). فجأة تدحرجت كرة قدم بين سيارتين متوقفتين ويتبعها طفل صغير يركض. ما الإجراء الصحيح في ثوانٍ معدودة؟',
        options: ['كبح الفرامل فوراً والتوقف (Remmen)', 'رفع القدم عن دواسة الوقود فقط (Gas loslaten)', 'متابعة السير دون تغيير (Niets doen)', 'استخدام بوق التنبيه مع زيادة السرعة لتجاوزه'],
        explanation: 'في قسم إدراك المخاطر CBR: عندما يظهر خطر مفاجئ وداهم كطفل يركض خلف كرة، التصرف الإلزامي الحاسم هو (Remmen - الكبح الفوري) لتفادي الاصطدام القاتل.'
      },
      en: {
        questionText: 'You are driving at 45 km/h in a residential street. A ball rolls from between parked cars followed by a running toddler. What is the required action?',
        options: ['Brake firmly and stop (Remmen)', 'Release the accelerator only (Gas loslaten)', 'Do nothing (Niets doen)', 'Sound the horn and accelerate past'],
        explanation: 'In the CBR Hazard Perception section: An immediate, critical danger like a running child requires urgent braking (Remmen).'
      },
      correctAnswerIndex: 0
    },
    {
      id: 'nl_cbr_02',
      category: { ar: 'إدراك المخاطر (Gevaarherkenning)', en: 'Hazard Perception (Gevaarherkenning)' },
      ar: {
        questionText: 'أنت تسير بسرعة 100 كم/س على طريق سريع (Autosnelweg) في ظروف جوية جافة ورؤية ممتازة. ترى سيارة أمامك بمسافة 300 متر تضيء إشارة الانعطاف لتغيير المسار بسلاسة. ماذا تفعل؟',
        options: ['الكبح القوي الفجائي (Remmen)', 'رفع القدم عن دواسة الوقود ومراقبة الموقف (Gas loslaten)', 'متابعة السير بنفس السرعة (Niets doen)', 'الانتقال إلى كتف الطريق للطوارئ'],
        explanation: 'المسافة كافية جداً (300 متر) ولا يوجد خطر داهم يبرر الفرملة المفاجئة التي قد تربك السيارات بالخلف. التصرف السليم هو (Gas loslaten - تخفيف السرعة برفع القدم عن الوقود ومراقبة المسار).'
      },
      en: {
        questionText: 'You are driving at 100 km/h on the highway in dry, clear conditions. A vehicle 300 meters ahead indicates to change lanes smoothly. What should you do?',
        options: ['Brake hard (Remmen)', 'Release the accelerator and observe (Gas loslaten)', 'Do nothing (Niets doen)', 'Pull over onto the hard shoulder'],
        explanation: 'Because the vehicle is far ahead and changing lanes smoothly, severe braking is dangerous; releasing the accelerator (Gas loslaten) is the correct defensive response.'
      },
      correctAnswerIndex: 1
    },
    {
      id: 'nl_cbr_03',
      category: { ar: 'إدراك المخاطر (Gevaarherkenning)', en: 'Hazard Perception (Gevaarherkenning)' },
      ar: {
        questionText: 'أنت تقود بسرعة 80 كم/س على طريق خارجي ريفي (Buiten de bebouwde kom). يوجد مسار مخصص للدراجات مفصول تماماً بسياج أخضر وبحيرة ماء، والشارع خالٍ تماماً. ماذا تفعل؟',
        options: ['الفرملة القوية (Remmen)', 'رفع القدم عن الوقود (Gas loslaten)', 'متابعة السير دون تغيير (Niets doen)', 'تشغيل أضواء الطوارئ الرباعية'],
        explanation: 'عندما يكون الطريق خالياً وواضحاً ومسار الدراجات معزولاً ومحمياً بسياج، لا يوجد أي داعٍ لتغيير السرعة، والإجراء الصحيح هو (Niets doen - متابعة السير باعتدال).'
      },
      en: {
        questionText: 'You are driving at 80 km/h on a rural provincial road. The bicycle path is completely separated by a green hedge and ditch. The road ahead is clear. What should you do?',
        options: ['Brake (Remmen)', 'Release accelerator (Gas loslaten)', 'Do nothing (Niets doen)', 'Turn on hazard warning lights'],
        explanation: 'With a clear road and fully segregated cycle path with no imminent hazards, continuing smoothly (Niets doen) is the correct answer.'
      },
      correctAnswerIndex: 2
    },

    // --- 2. Kennis (Traffic Rules & Speed Limits - Regels & Kennis) ---
    {
      id: 'nl_cbr_04',
      category: { ar: 'قواعد السرعة وقوانين المرور (Kennis)', en: 'Traffic Rules & Limits (Kennis)' },
      ar: {
        questionText: 'ما هي السرعة القصوى العامة المسموح بها للمركبات داخل المناطق المبنية والسكنية (Binnen de bebouwde kom) في هولندا، ما لم تشر اللوحات لغير ذلك؟',
        options: ['30 كم/س', '50 كم/س', '70 كم/س', '80 كم/س'],
        explanation: 'السرعة القصوى القياسية داخل التجمعات السكانية والمدن الهولندية هي 50 كم/س (وتكون 30 كم/س في المناطق المخصصة بلوحة 30-zone).'
      },
      en: {
        questionText: 'What is the standard maximum speed limit for cars inside built-up areas (Binnen de bebouwde kom) in the Netherlands, unless indicated otherwise?',
        options: ['30 km/h', '50 km/h', '70 km/h', '80 km/h'],
        explanation: 'The standard statutory speed limit within built-up areas in the Netherlands is 50 km/h (or 30 km/h in designated 30 km/h zones).'
      },
      correctAnswerIndex: 1
    },
    {
      id: 'nl_cbr_05',
      category: { ar: 'قواعد السرعة وقوانين المرور (Kennis)', en: 'Traffic Rules & Limits (Kennis)' },
      ar: {
        questionText: 'على الطرق السريعة الهولندية (Autosnelweg)، ما هي السرعة القصوى القانونية خلال ساعات النهار بين الساعة 06:00 صباحاً و 19:00 مساءً؟',
        options: ['100 كم/س', '120 كم/س', '130 كم/س', '80 كم/س'],
        explanation: 'منذ عام 2020، تطبق هولندا حداً أقصى للسرعة يبلغ 100 كم/س نهاراً (06:00 - 19:00) لتقليل الانبعاثات، وتسمح بـ 130 كم/س ليلاً (19:00 - 06:00) عند توفر اللوحات.'
      },
      en: {
        questionText: 'On Dutch motorways (Autosnelweg), what is the standard maximum legal speed during daytime hours between 06:00 and 19:00?',
        options: ['100 km/h', '120 km/h', '130 km/h', '80 km/h'],
        explanation: 'Dutch traffic law sets the daytime motorway speed limit at 100 km/h (between 06:00 and 19:00), allowing up to 130 km/h only at night where signed.'
      },
      correctAnswerIndex: 0
    },
    {
      id: 'nl_cbr_06',
      category: { ar: 'إشارات وعلامات الطرق (Verkeersborden)', en: 'Traffic Signs & Markings' },
      ar: {
        questionText: 'ما المعنى الدلالي للمثلثات البيضاء المرسومة على سطح الطريق والموجهة نحو سيارتك والمشهورة بـ (أسنان القرش - Haaientanden)؟',
        options: ['إلزامك بالدوران إلى الخلف', 'يجب عليك إعطاء حق الأولوية لجميع السائقين والمركبات على الطريق المتقاطع', 'حق الأولوية المطلقة لك على جميع المركبات', 'ممنوع التوقف أو ركن السيارة'],
        explanation: 'علامات (Haaientanden - أسنان القرش) تعني وجوب منح حق الأولوية (Voorrang verlenen) للسائقين على الطريق المتقاطع أمامك.'
      },
      en: {
        questionText: 'What do the white triangular road surface markings pointing towards your vehicle ("Shark teeth" / Haaientanden) mean in the Netherlands?',
        options: ['You must make a U-turn', 'You must give way (yield priority) to drivers on the intersecting road', 'You have absolute priority over all cross traffic', 'No parking or stopping allowed'],
        explanation: 'Shark teeth (Haaientanden) require you to yield priority (voorrang verlenen) to drivers on the intersecting road ahead.'
      },
      correctAnswerIndex: 1
    },
    {
      id: 'nl_cbr_07',
      category: { ar: 'شارع الدراجات (Fietsstraat)', en: 'Bicycle Streets (Fietsstraat)' },
      ar: {
        questionText: 'عند دخولك شارع يحمل لافتة "Fietsstraat - Auto te gast" (شارع دراجات - السيارات كضيوف)، ما هو السلوك القانوني الواجب اتباعه؟',
        options: ['يمنع دخول السيارات نهائياً تحت طائلة الغرامة', 'يسمح بدخول السيارات ولكن الدراجات الهوائية هي صاحبة الأولوية والمكانة الرئيسية ويحظر مضايقتها أو تجاوزها بشكل خطير', 'تسير السيارات بالسرعة القصوى المعتادة مع إطلاق المنبه لإفساح الطريق', 'توقف السيارة وانتظار إشارة المرور الخاصة'],
        explanation: 'في هولندا، لافتة (Fietsstraat - Auto te gast) تعني أن الطريق مخصص ومصمم أساساً للدراجات، والسيارات مسموح لها بالدخول كضيوف فقط بشرط عدم إعاقة الدراجين أو تهديد سلامتهم.'
      },
      en: {
        questionText: 'When driving on a street designated with the sign "Fietsstraat - Auto te gast" (Bicycle Street - Cars are guests), how must you behave?',
        options: ['Motor vehicles are completely prohibited', 'Motor vehicles are permitted but cyclists have primary priority and must not be hindered or overtaken aggressively', 'Cars must drive at top speed and honk to clear cyclists', 'You must stop and wait for a green bicycle signal'],
        explanation: 'A Fietsstraat is designed primarily for cyclists. Cars are tolerated as "guests" (Auto te gast) and must yield space, maintaining safe speeds behind cyclists.'
      },
      correctAnswerIndex: 1
    },
    {
      id: 'nl_cbr_08',
      category: { ar: 'الكحول والأدوية (Alcohol en Drugs)', en: 'Alcohol & Drug Limits' },
      ar: {
        questionText: 'كم هو الحد الأقصى المسموح به لنسبة الكحول في الدم (Alcoholpromillage) للسائق المبتدئ (Beginnend bestuurder - خلال أول 5 سنوات من نيل الرخصة) في هولندا؟',
        options: ['0.0 ‰ تماماً', '0.2 ‰ (بروميل)', '0.5 ‰ (بروميل)', '0.8 ‰ (بروميل)'],
        explanation: 'ينص القانون الهولندي على حد أقصى صارم للسائقين المبتدئين قدره 0.2 بروميل (0.2‰ / 88 ميكروغرام كحول في هواء الزفير)، ويعتبر أي تجاوز لذلك جريمة مرورية جسيمة.'
      },
      en: {
        questionText: 'What is the maximum legal Blood Alcohol Concentration (BAC) limit for novice drivers (Beginnend bestuurder - first 5 years) in the Netherlands?',
        options: ['0.0 ‰', '0.2 ‰ (promille)', '0.5 ‰ (promille)', '0.8 ‰ (promille)'],
        explanation: 'For novice drivers (first 5 years), the strict Dutch legal alcohol limit is 0.2‰ (promille). For experienced drivers, the limit is 0.5‰.'
      },
      correctAnswerIndex: 1
    },
    {
      id: 'nl_cbr_09',
      category: { ar: 'أولويات السير والتقاطعات (Voorrang)', en: 'Right of Way & Priority (Voorrang)' },
      ar: {
        questionText: 'في تقاطع متكافئ غير مزود بأي إشارات ضوئية أو لوحات أولوية (Gelijkwaardige kruising)، لمن تكون الأولوية؟',
        options: ['للسائقين القادمين من جهة اليمين (Voorrang van rechts)', 'للسائقين القادمين من جهة اليسار', 'للسيارة الأسرع وزناً', 'للسائق الذي يومض بأضوائه العالية أولاً'],
        explanation: 'القاعدة الذهبية في هولندا: في التقاطعات المتكافئة، السائقون القادمون من جهة اليمين (بما في ذلك سائقو السيارات والدراجات الهوائية) لهم حق الأولوية (Bestuurders van rechts hebben voorrang).'
      },
      en: {
        questionText: 'At an uncontrolled intersection with equal roads and no traffic signs (Gelijkwaardige kruising), who has priority in the Netherlands?',
        options: ['Drivers coming from the right (Voorrang van rechts)', 'Drivers coming from the left', 'The heaviest motor vehicle', 'The vehicle flashing high beams first'],
        explanation: 'The fundamental Dutch rule is "Voorrang van rechts": Drivers (including cyclists) approaching from the right have right of way at equal intersections.'
      },
      correctAnswerIndex: 0
    },
    {
      id: 'nl_cbr_10',
      category: { ar: 'الترام والنقل العام (Trams en Openbaar Vervoer)', en: 'Trams & Public Transport' },
      ar: {
        questionText: 'أنت تقترب من تقاطع متكافئ بدون لوحات أولوية، وترى تراماً (Tram) قادماً من جهة اليسار ينوي الانعطاف. لمن تكون الأولوية؟',
        options: ['لك لأنك على يمينه', 'للترام، لأن الترام له الأولوية دائماً في التقاطعات المتكافئة سواء كان قادماً من اليمين أو اليسار', 'للسيارة الأقرب لخط التوقف', 'تعتمد على عدد الركاب في الترام'],
        explanation: 'في قانون المرور الهولندي (RVV 1990): الترام له الأسبقية على جميع السائقين في التقاطعات المتكافئة، بغض النظر عما إذا كان قادماً من اليمين أو اليسار أو ينعطف.'
      },
      en: {
        questionText: 'At an uncontrolled equal intersection without priority signs, a tram approaches from your left and intends to turn. Who has priority?',
        options: ['You, because you are on the tram\'s right', 'The tram, because trams have priority at equal intersections regardless of direction', 'The closest vehicle to the rails', 'Whoever sounds their bell/horn first'],
        explanation: 'Under Dutch traffic regulations, trams have priority over all other drivers at equal intersections, regardless of whether they come from the left, right, or are turning.'
      },
      correctAnswerIndex: 1
    },

    // --- 3. Inzicht (Insight, Complex Intersections & Safety) ---
    {
      id: 'nl_cbr_11',
      category: { ar: 'البصيرة والتقاطعات المعقدة (Inzicht)', en: 'Insight & Complex Junctions (Inzicht)' },
      ar: {
        questionText: 'تنوي الانعطاف يساراً في تقاطع. من الاتجاه المقابل، هناك سيارة تنوي الانعطاف يميناً إلى نفس الشارع. من يمر أولاً وفق القاعدة الهولندية؟',
        options: ['السيارة المنعطفة يميناً (المنعطف القصير يسبق المنعطف الطويل - Korte bocht gaat voor lange bocht)', 'سيارتك المنعطفة يساراً', 'السيارة التي تصل لوسط التقاطع أولاً', 'المركبة ذات المحرك الأقوى'],
        explanation: 'القاعدة الهولندية الشهيرة: (Korte bocht gaat voor lange bocht) - السائق الذي ينعطف في قوس قصير إلى اليمين له الأولوية على السائق الذي ينعطف في قوس طويل إلى اليسار نحو نفس الشارع.'
      },
      en: {
        questionText: 'You want to turn left at an intersection. An oncoming car wants to turn right into the same street. Who goes first according to Dutch rules?',
        options: ['The car turning right ("Short turn goes before long turn" / Korte bocht gaat voor lange bocht)', 'Your car turning left', 'The first vehicle to enter the junction center', 'The larger vehicle'],
        explanation: 'In the Netherlands: "Korte bocht gaat voor lange bocht" (A short right turn takes priority over a long left turn into the same road).'
      },
      correctAnswerIndex: 0
    },
    {
      id: 'nl_cbr_12',
      category: { ar: 'البصيرة والتقاطعات المعقدة (Inzicht)', en: 'Insight & Complex Junctions (Inzicht)' },
      ar: {
        questionText: 'أنت تقود سيارتك في خط مستقيم على طريق رئيسي، وسائق أمامك يريد الانعطاف يميناً وفوقه مسار دراجات مستقيم بجانبك. ماذا ينص القانون الهولندي؟',
        options: ['حركة السير المستقيمة على نفس الطريق لها الأولوية على حركة السير المنعطفة (Rechtdoor op dezelfde weg gaat voor)', 'السيارة المنعطفة لها الأولوية لأنها أسرع', 'الدراجة يجب أن تتوقف وتنتظر دائماً', 'من يسبق بـ 5 أمتار يمر أولاً'],
        explanation: 'القاعدة الأساسية: (Rechtdoor op dezelfde weg gaat voor) - حركة السير المتجهة للأمام مباشرة (بما في ذلك الدراجات والمشاة) على نفس الطريق لها الأسبقية الكاملة على المركبات المنعطفة.'
      },
      en: {
        questionText: 'A car is turning right across a bicycle path running straight alongside the same road. Which Dutch priority principle applies?',
        options: ['"Straight ahead on the same road goes first" (Rechtdoor op dezelfde weg gaat voor) — the cyclist has priority', 'The turning car has priority because it is a motorized vehicle', 'Cyclists must always dismount and yield to cars', 'Whoever enters the turn first goes first'],
        explanation: 'The fundamental rule "Rechtdoor op dezelfde weg gaat voor afslaand verkeer" means cyclists continuing straight on the same road have absolute priority over turning vehicles.'
      },
      correctAnswerIndex: 0
    },
    {
      id: 'nl_cbr_13',
      category: { ar: 'مواكب الجنائز والجيش (Bijzondere Colonnes)', en: 'Special Convoys & Processions' },
      ar: {
        questionText: 'أنت تقف عند تقاطع متكافئ، وهناك موكب جنائزي رسمي معتمد بشارات سوداء (Uitvaartstoet) يعبر من جهة اليسار. هل يجوز لك قطع الموكب إذا كانت الأولوية لليمين؟',
        options: ['نعم، لأنك قادم من اليمين', 'لا، يحظر قانوناً قطع موكب الجنازة الرسمي (Uitvaartstoet) أو الموكب العسكري المنظم في التقاطعات المتكافئة', 'نعم، إذا كان هناك فراغ بين سيارتين بالموكب', 'يجوز فقط لمركبات الأجرة'],
        explanation: 'في قانون المرور الهولندي: يحظر على السائقين قطع صف موكب الجنائز الرسمي (Uitvaartstoet) أو الموكب العسكري (Militaire colonne) عند التقاطعات المتكافئة حتى لو كانت لك أولوية اليمين.'
      },
      en: {
        questionText: 'At an equal intersection, a recognized funeral procession (Uitvaartstoet) with official flags approaches from your left. May you cut through the procession because you are on the right?',
        options: ['Yes, because you have priority from the right', 'No, drivers are legally forbidden to cut through an official funeral procession or military convoy at equal intersections', 'Yes, if there is a gap between two cars', 'Only delivery drivers may pass'],
        explanation: 'Under Dutch RVV rules, you may never break or cut through an official funeral procession (Uitvaartstoet) or military convoy at an equal junction.'
      },
      correctAnswerIndex: 1
    },
    {
      id: 'nl_cbr_14',
      category: { ar: 'الدوارات المرورية (Rotondes)', en: 'Roundabouts (Rotondes)' },
      ar: {
        questionText: 'عند مغادرتك دواراً مرورياً (Rotonde) في هولندا، متى يجب عليك تشغيل إشارة الانعطاف (الغمّاز اليمين)؟',
        options: ['قبل دخول الدوار بـ 100 متر', 'أثناء الدوران جهة اليسار داخل الدوار', 'فور تجاوز المخرج الذي يسبق مخرجك المطلوب مباشرة، مع إعطاء الأولوية للمشاة والدراجات العابرة للمخرج', 'لا داعي لتشغيل الإشارة عند الخروج'],
        explanation: 'عند الخروج من الدوار الهولندي: يجب تشغيل إشارة اليمين في الوقت المناسب قبل المخرج مباشرة، والانتباه التام لمسارات الدراجات ومعابر المشاة المحيطة بمخرج الدوار.'
      },
      en: {
        questionText: 'When exiting a roundabout (Rotonde) in the Netherlands, when must you indicate to the right?',
        options: ['100 meters before entering the roundabout', 'While circling on the inside lane', 'Right after passing the exit before your intended exit, while yielding to crossing cyclists/pedestrians if applicable', 'No indicator is required when exiting'],
        explanation: 'You must indicate right right after passing the exit prior to yours, and check your mirrors/blind spots for cyclists crossing the exit.'
      },
      correctAnswerIndex: 2
    },
    {
      id: 'nl_cbr_15',
      category: { ar: 'استخدام الهاتف المحمول (Telefoongebruik)', en: 'Mobile Phone Regulations' },
      ar: {
        questionText: 'ما هي القاعدة القانونية في هولندا بخصوص حمل الهاتف المحمول أو استخدامه باليد أثناء قيادة السيارة أو الدراجة الهوائية؟',
        options: ['مسموح فقط عند التحدث عبر مكبر الصوت واليد تمسك الهاتف', 'ممنوع منعاً باتاً حمل أو استخدام أي جهاز إلكتروني محمول باليد أثناء القيادة أو التوقف المؤقت عند الإشارات المرورية، وتفرض عليه غرامة مالية عالية', 'مسموح أثناء التوقف عند الإشارة الحمراء فقط', 'مسموح للرسائل الصوتية فقط'],
        explanation: 'القانون الهولندي يفرض حظراً كاملاً على الإمساك بالهاتف المحمول باليد (Vasthouden van een mobiel elektronisch apparaat) أثناء قيادة أي مركبة أو أثناء التواجد في حركة المرور.'
      },
      en: {
        questionText: 'What is the Dutch law regarding holding a mobile phone while driving a vehicle or riding a bicycle?',
        options: ['Holding the phone is allowed if on speaker mode', 'It is strictly illegal to hold any mobile electronic device while driving or stationary in active traffic (e.g. at red lights)', 'Holding the phone is allowed only while stopped at red lights', 'Sending voice messages is permitted'],
        explanation: 'Dutch law strictly bans holding any mobile electronic device (phone, navigation, music player) while driving or cycling in active traffic.'
      },
      correctAnswerIndex: 1
    },
    {
      id: 'nl_cbr_16',
      category: { ar: 'عمق مداس الإطارات والسلامة (Bandenprofiel)', en: 'Tire Tread Depth & Safety' },
      ar: {
        questionText: 'ما هو الحد الأدنى القانوني الإلزامي لعمق نقشة/مداس إطارات السيارات (Minimale profieldiepte) في هولندا لاجتياز الفحص الفني (APK)؟',
        options: ['0.8 ملم', '1.6 ملم', '2.5 ملم', '4.0 ملم'],
        explanation: 'الحد الأدنى القانوني لعمق مداس الإطارات الصيفية في هولندا وأوروبا هو 1.6 ملم (ويوصى بـ 4 ملم لإطارات الشتاء للأمان في الأجواء الثلجية والممطرة).'
      },
      en: {
        questionText: 'What is the mandatory legal minimum tire tread depth (Minimale profieldiepte) for passenger cars in the Netherlands (APK inspection)?',
        options: ['0.8 mm', '1.6 mm', '2.5 mm', '4.0 mm'],
        explanation: 'The legal statutory minimum tire tread depth for passenger cars in the Netherlands is 1.6 mm across the entire main circumference.'
      },
      correctAnswerIndex: 1
    },
    {
      id: 'nl_cbr_17',
      category: { ar: 'مسافة الأمان (Volgafstand)', en: 'Safe Following Distance' },
      ar: {
        questionText: 'ما هي القاعدة الذهبية المعتمدة في هولندا لحساب مسافة الأمان الدنيا خلف المركبة التي أمامك في الظروف الجوية الجافة؟',
        options: ['قاعدة النصف ثانية', 'قاعدة الثانيتين (2-secondenregel)', 'قاعدة الخمس ثوانٍ', 'مسافة 5 أمتار دائماً'],
        explanation: 'قاعدة الثانيتين (De 2-secondenregel) هي القاعدة القياسية لحساب مسافة الأمان في هولندا؛ وفي الظروف الماطرة أو الجليدية يجب مضاعفتها إلى 3 أو 4 ثوانٍ.'
      },
      en: {
        questionText: 'What is the standard rule used in the Netherlands to maintain a safe following distance behind the vehicle ahead in dry conditions?',
        options: ['The half-second rule', 'The two-second rule (2-secondenregel)', 'The five-second rule', 'A fixed 5-meter gap'],
        explanation: 'The 2-second rule (2-secondenregel) is the official Dutch safety benchmark for following distance in dry conditions, increased in rain/fog/snow.'
      },
      correctAnswerIndex: 1
    },
    {
      id: 'nl_cbr_18',
      category: { ar: 'ممرات المشاة (Voetgangers en Zebrapad)', en: 'Pedestrian Crossings (Zebrapad)' },
      ar: {
        questionText: 'عند اقترابك من ممر مشاة مخطط بالأبيض والأسود (Zebrapad)، ورأيت مشاة أو شخصاً مكفوفاً يحمل عصا بيضاء بيضاء يستعد للعبور، ما الإلزام القانوني؟',
        options: ['الاستمرار في السير إذا لم يضع قدمه على الخطوط بعد', 'التوقف الكامل وإعطاء حق الأولوية المطلقة للمشاة الذين يعبرون أو يظهرون نية واضحة للعبور', 'إطلاق المنبه الصوتي لتنبيههم بسرعة', 'التجاوز من المسار الأيسر'],
        explanation: 'المادة 49 من قانون المرور الهولندي (RVV): يجب على السائقين إعطاء الأولوية والتوقف التام للمشاة والأشخاص ذوي الإعاقة عند ممر المشاة المخطط (Zebrapad).'
      },
      en: {
        questionText: 'When approaching a pedestrian crossing (Zebrapad) with pedestrians waiting or clearly intending to cross, what is required by Dutch law?',
        options: ['Drive on if they have not stepped onto the crossing yet', 'Stop and give right of way to pedestrians who are crossing or clearly indicating intention to cross', 'Honk to urge them across quickly', 'Overtake on the left lane'],
        explanation: 'Dutch traffic law (RVV Art. 49) mandates giving way and stopping for pedestrians on or preparing to cross a marked pedestrian crossing (Zebrapad).'
      },
      correctAnswerIndex: 1
    },
    {
      id: 'nl_cbr_19',
      category: { ar: 'اندماج المسارات (Ritsen)', en: 'Zipper Merging (Ritsen)' },
      ar: {
        questionText: 'عندما ينتهي أحد المسارات على الطريق السريع بسبب أعمال صيانة، ما هي الطريقة الصحيحة والموصى بها قانونياً في هولندا للاندماج (Ritsen)؟',
        options: ['الاندماج فوراً قبل كيلو متر كامل من نقطة الإغلاق', 'الاستمرار في القيادة بالمسار المنتهي حتى مسافة 300-400 متر قبل نقطة الإغلاق، ثم الاندماج بالتبادل والتناوب سيارة تلو الأخرى (Ritsen)', 'التسارع وتجاوز جميع السيارات من على كتف الطريق', 'إيقاف السيارة في المسار المنتهي والانتظار'],
        explanation: 'نظام (Ritsen - الاندماج التبادلي مثل السحاب): في هولندا ينصح بالبقاء في المسار حتى الاقتراب من نقطة التضييق، ثم قيام كل سيارة بإفساح المجال لسيارة واحدة بالتناوب لمنع الاختناقات.'
      },
      en: {
        questionText: 'When a lane is closing ahead on a motorway due to roadworks, what is the official Dutch recommendation for "Zipper Merging" (Ritsen)?',
        options: ['Merge immediately 1 km before the closure', 'Drive up smoothly to approximately 300 meters before the drop lane, then merge alternately one car after another (Ritsen)', 'Accelerate on the hard shoulder to cut in front', 'Stop completely in the closing lane and wait for an empty slot'],
        explanation: 'Ritsen (zipper merging) requires continuing up to near the taper point and merging smoothly one-by-one in turn, maximizing road capacity.'
      },
      correctAnswerIndex: 1
    },
    {
      id: 'nl_cbr_20',
      category: { ar: 'وقوف وانتظار المركبات (Parkeren en Stilstaan)', en: 'Parking & Stopping Rules' },
      ar: {
        questionText: 'كم هي المسافة القانونية الدنيا التي يجب تركها عند ركن أو إيقاف سيارتك بالقرب من تقاطع أو منعطف شارع في هولندا؟',
        options: ['متران (2 meter)', '5 أمتار على الأقل من زاوية التقاطع (Minimaal 5 meter)', '10 أمتار', 'لا يوجد حد أدنى إذا كان الرصيف فارغاً'],
        explanation: 'ينص القانون الهولندي على حظر ركن أو إيقاف السيارة على مسافة أقل من 5 أمتار من تقاطع الطرق أو زاوية المنعطف لضمان وضوح الرؤية لجميع السائقين.'
      },
      en: {
        questionText: 'What is the mandatory minimum distance you must leave when parking your car near a road intersection or corner in the Netherlands?',
        options: ['2 meters', 'At least 5 meters from the intersection corner (Minimaal 5 meter)', '10 meters', 'No distance required if the curb is empty'],
        explanation: 'Dutch traffic law strictly prohibits parking within 5 meters of an intersection or corner to maintain visibility and safety.'
      },
      correctAnswerIndex: 1
    }
  ]
};
