import { BilingualQuestion } from './types';

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
      options: ['الوقت المستغرق للانعطاف', 'ترك مسافة أمان زمنية تعادل ثانيتين بينك وبين السيارة أمامك في الظروف العادية', 'السرعة القصوى في الأحياء السكنية', 'مدة التوقف عند إشارة قف'],
      explanation: 'قاعدة الثانيتين توفر مسافة أمان كافية للسائق للقيام برد فعل مناسب وتفادي الاصطدام في حال توقف السيارة الأمامية فجأة.'
    },
    en: {
      questionText: 'What is the "two-second rule" in driving?',
      options: ['The time taken to complete a turn', 'Maintaining a safe time gap of at least two seconds behind the vehicle in front in normal conditions', 'The speed limit in residential areas', 'The duration of stopping at a stop sign'],
      explanation: 'The two-second rule provides sufficient safety distance for the driver to react and avoid a collision if the car ahead stops suddenly.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q4',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'متى يجب استخدام أضواء الانعطاف (الإشارات الجانبية)؟',
      options: ['عند تغيير المسار أو الانعطاف أو الدوران بوقت كافٍ', 'فقط في الليل', 'عند القيادة بسرعة عالية فقط', 'ليس ضرورياً إذا كان الشارع خالياً'],
      explanation: 'يجب استخدام إشارات الانعطاف قبل وقت كافٍ من تغيير المسار أو الانعطاف لتنبيه السائقين والمشاة بنيتك.'
    },
    en: {
      questionText: 'When should turn signals (indicators) be used?',
      options: ['Well in advance when changing lanes, turning, or u-turning', 'Only at night', 'Only when driving at high speeds', 'Not necessary if the road is empty'],
      explanation: 'Turn signals must be used well in advance of changing lanes or turning to inform other drivers of your intention.'
    },
    correctAnswerIndex: 0
  },
  {
    id: 'global_q5',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما دلالة اللوحات المرورية المثلثة ذات الإطار الأحمر؟',
      options: ['لوحات إلزامية', 'لوحات تحذيرية لتنبيه السائق من مخاطر قادمة', 'لوحات سياحية وإرشادية', 'لوحات تفيد السماح بالوقوف'],
      explanation: 'اللوحات المثلثة ذات الإطار الأحمر هي لوحات تحذيرية تهدف لتنبيه السائق لوجود ظروف أو مخاطر محتملة على الطريق.'
    },
    en: {
      questionText: 'What is the general meaning of triangular traffic signs with a red border?',
      options: ['Mandatory regulatory signs', 'Warning signs alerting drivers to upcoming hazards', 'Tourist guide signs', 'Parking permitted signs'],
      explanation: 'Triangular signs with a red border are warning signs intended to alert the driver to potential hazards or conditions on the road.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q6',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ما هي "النقطة العمياء" (Blind Spot)؟',
      options: ['عطل في زجاج السيارة', 'مساحة حول المركبة لا يمكن رؤيتها من خلال المرايا ويجب الالتفات بالكتف لرؤيتها', 'إضاءة شديدة تعمي بصر السائق', 'طريق مغلق مسدود'],
      explanation: 'النقطة العمياء هي المساحة الجانبية التي لا تظهر في المرايا، وللتحقق منها يجب الالتفات السريع بالكتف قبل تغيير المسار.'
    },
    en: {
      questionText: 'What is a "Blind Spot"?',
      options: ['A defect in the vehicle windshield', 'An area around the vehicle not visible in the mirrors requiring a shoulder check', 'A bright glare blinding the driver', 'A closed dead-end road'],
      explanation: 'A blind spot is an area to the side of the car not visible in the mirrors; to check it, you must perform a quick shoulder check before changing lanes.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q7',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'في الدوارات المرورية، لمن تكون الأولوية في معظم القوانين؟',
      options: ['للمركبات القادمة من خارج الدوار', 'للمركبات المتواجدة بالفعل داخل الدوار', 'للسيارة الأسرع انطلاقاً', 'للشاحنات والمركبات الثقيلة فقط'],
      explanation: 'الأولوية في الدوارات تكون دائماً للمركبات التي دخلت الدوار وتتحرك بداخله، وعلى القادمين من الخارج إفساح المجال.'
    },
    en: {
      questionText: 'In traffic roundabouts, who has the right of way under most road laws?',
      options: ['Traffic entering the roundabout', 'Vehicles already inside and circulating the roundabout', 'The fastest accelerating vehicle', 'Only heavy trucks and buses'],
      explanation: 'Priority in roundabouts always belongs to vehicles already circulating inside; those entering must wait for a safe gap.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q8',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هو الخطر الرئيسي لاستخدام الهاتف المحمول باليد أثناء القيادة؟',
      options: ['استهلاك بطارية الهاتف', 'تشتيت الانتباه البصري والذهني واليدوي مما يضاعف احتمال الحوادث 4 مرات', 'زيادة حرارة المحرك', 'زيادة استهلاك الوقود'],
      explanation: 'استخدام الهاتف يشتت ذهن السائق وعينيه ويديه عن التحكم بالمركبة، مما يعد سبباً رئيسياً للحوادث الخطيرة.'
    },
    en: {
      questionText: 'What is the primary danger of using a handheld mobile phone while driving?',
      options: ['Draining the phone battery', 'Visual, cognitive, and manual distraction, quadrupling accident risk', 'Engine overheating', 'Increased fuel consumption'],
      explanation: 'Using a phone takes the driver\'s eyes, hands, and focus away from the road, dramatically increasing collision risk.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q9',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما دلالة اللوحات الدائرية ذات الإطار الأحمر؟',
      options: ['لوحات إرشادية للمدن', 'لوحات تحذيرية فقط', 'لوحات تنظيمية تفيد المنع أو التقييد (مثل ممنوع الدخول أو تحديد السرعة)', 'لوحات ترحيبية'],
      explanation: 'اللوحات الدائرية ذات الإطار الأحمر تفيد المنع الحتمي أو تحديد القيود الإلزامية التي يجب التقيد بها قانونياً.'
    },
    en: {
      questionText: 'What do circular signs with a red border signify?',
      options: ['City guide signs', 'Warning signs only', 'Regulatory prohibition or restriction signs (such as No Entry or Speed Limit)', 'Welcome signs'],
      explanation: 'Circular signs with red borders are regulatory signs that indicate prohibition or restrictions that must be legally obeyed.'
    },
    correctAnswerIndex: 2
  },
  {
    id: 'global_q10',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'متى يجب خفض الضوء العالي إلى الضوء المنخفض (المتقابل) ليلاً؟',
      options: ['عند الاقتراب من سيارة قادمة باتجاهك أو القيادة خلف سيارة أخرى لمنع إبهار بصر السائقين', 'فقط في الطرق السريعة', 'عندما تكون السرعة أقل من 20 كم/س', 'لا يلزم خفضه أبداً'],
      explanation: 'الضوء العالي يسبب إبهاراً خطيراً لبصر السائقين القادمين في الاتجاه المعاكس أو أمامك عبر المرآة العاكسة، لذا يلزم خفضه فوراً.'
    },
    en: {
      questionText: 'When must you switch from high-beam to low-beam headlights at night?',
      options: ['When approaching an oncoming vehicle or driving closely behind another to avoid blinding drivers', 'Only on motorways', 'Only when driving under 20 km/h', 'Never required to switch'],
      explanation: 'High beams cause dangerous blinding glare to oncoming drivers or those ahead via their rear-view mirrors, and must be dimmed immediately.'
    },
    correctAnswerIndex: 0
  },
  {
    id: 'global_q11',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما معنى إشارة "أعطِ الأولوية / إفساح الطريق" (مثلث مقلوب)؟',
      options: ['لك حق المرور دون توقف', 'إبطاء السرعة والتوقف إن لزم الأمر لإفساح المجال للمركبات على الطريق الرئيسي', 'ممنوع الدخول نهائياً', 'نهاية الطريق السريع'],
      explanation: 'المثلث المقلوب يفرض على السائق التمهل أو التوقف لمنح حق المرور للمركبات القادمة على المسار المتقاطع أو الرئيسي.'
    },
    en: {
      questionText: 'What does an inverted triangular "Yield / Give Way" sign mean?',
      options: ['You have absolute right of way', 'Slow down and stop if necessary to give way to vehicles on the priority road', 'No entry for any vehicle', 'End of freeway'],
      explanation: 'The yield sign instructs drivers to slow down or stop to allow vehicles on the intersecting road to proceed first.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q12',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'ما هو التصرف الصحيح عند سماع أو رؤية سيارة إسعاف أو إطفاء تستخدم صفارات الطوارئ؟',
      options: ['زيادة السرعة للتسابق معها', 'التوقف الفجائي في وسط المسار', 'إفساح الطريق فوراً بالانتقال الآمن إلى أقصى اليمين أو التوقف بحذر', 'تجاهلها إذا كنت في مسار مختلف'],
      explanation: 'يجب إخلاء المسار فوراً وبأمان لمنح مركبات الطوارئ ممراً سالكاً لإنقاذ الأرواح.'
    },
    en: {
      questionText: 'What is the correct response when hearing or seeing an emergency vehicle using sirens or flashing lights?',
      options: ['Speed up to stay ahead', 'Stop abruptly in the middle of your lane', 'Safely clear the lane by moving to the far right/curb and stopping if necessary', 'Ignore it if in a different lane'],
      explanation: 'Drivers must safely yield and clear the lane immediately to provide an unobstructed path for emergency response vehicles.'
    },
    correctAnswerIndex: 2
  },
  {
    id: 'global_q13',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'كيف يؤثر المطر على مسافة التوقف اللازمة للمركبة؟',
      options: ['يقلل من مسافة التوقف', 'يضاعف مسافة التوقف بسبب انخفاض تماسك الإطارات مع الأسفلت المبلل', 'لا يؤثر على الإطلاق', 'يجعل المكابح تعمل بقوة أكبر'],
      explanation: 'الماء يقلل الاحتكاك بين الإطار والطريق، مما يضاعف مسافة التوقف ويستدعي زيادة مسافة الأمان إلى 4 ثوانٍ على الأقل.'
    },
    en: {
      questionText: 'How does rainfall affect a vehicle\'s required stopping distance?',
      options: ['It decreases stopping distance', 'It doubles stopping distance due to reduced tire friction on wet pavement', 'It has no effect', 'It makes brakes grip harder'],
      explanation: 'Water creates a slippery barrier between tires and road, significantly increasing braking distance and requiring larger following gaps.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q14',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'عند الانعطاف لليسار عند تقاطع طرق، لمن يجب أن تعطي حق الأولوية؟',
      options: ['للشارع الخلفي فقط', 'لحركة المرور القادمة من الاتجاه المعاكس وللمشاة الذين يعبرون الطريق', 'لا أحد، الأولوية لمن ينعطف', 'للسيارات المتوقفة في المواقف'],
      explanation: 'عند الانعطاف لليسار، يجب الانتظار وإفساح الطريق للمركبات القادمة مستقيمة في الاتجاه المقابل وللمشاة العابرين.'
    },
    en: {
      questionText: 'When making a left turn at an intersection, who must you yield right of way to?',
      options: ['Traffic behind you only', 'Oncoming oncoming traffic moving straight and pedestrians crossing the street', 'No one; turning traffic has priority', 'Parked vehicles'],
      explanation: 'Drivers making left turns across oncoming lanes must yield to all oncoming traffic and crossing pedestrians.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q15',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هي الفائدة الأساسية لربط حزام الأمان لجميع ركاب المركبة؟',
      options: ['تجنب المخالفة المرورية فقط', 'تثبيت الركاب ومنع اندفاعهم أو قذفهم خارج المركبة وتقليل خطر الوفاة والإصابات بنسبة تفوق 50%', 'تحسين مظهر السيارة الداخلي', 'زيادة سرعة المركبة'],
      explanation: 'حزام الأمان هو خط الدفاع الأول الذي يحمي الركاب من الاصطدام بهيكل السيارة الداخلي أو القذف خارجها في حال الحوادث.'
    },
    en: {
      questionText: 'What is the primary safety benefit of wearing seatbelts for all vehicle occupants?',
      options: ['Only avoiding traffic tickets', 'Restraining occupants from hitting interior structures or being ejected, reducing fatality by over 50%', 'Improving vehicle interior aesthetics', 'Increasing top speed'],
      explanation: 'Seatbelts securely hold occupants in place during impact, preventing fatal ejections and severe internal collisions.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q16',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ما هي ظاهرة "الانزلاق المائي" (Hydroplaning) وكيف يتم التصرف حيالها؟',
      options: ['تجمع الماء في خزان الوقود', 'تكون طبقة ماء تفصل الإطارات عن الأسفلت؛ يجب رفع القدم عن دواسة الوقود وتوجيه المقود بثبات دون ضغط مفاجئ على الفرامل', 'تسرب ماء المبرد', 'تطاير الماء على الزجاج الأمامي'],
      explanation: 'الانزلاق المائي يفقد الإطارات تلامسها المباشر مع الطريق؛ الضغط المفاجئ على الفرامل يسبب فقدان السيطرة، والحل هو التباطؤ التدريجي.'
    },
    en: {
      questionText: 'What is "Hydroplaning" and what is the proper action if it occurs?',
      options: ['Water entering the fuel tank', 'A layer of water lifting tires off the pavement; ease off the accelerator and hold the steering wheel straight without sudden braking', 'Coolant water leaking', 'Water splashing on the windshield'],
      explanation: 'Hydroplaning occurs when water builds up faster than tires can channel it away; ease off the gas smoothly until tires regain road contact.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q17',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ماذا يعني وميض الضوء الأصفر (البرتقالي) في الإشارة الضوئية؟',
      options: ['التوقف التام الإجباري لساعات', 'التمهل وتوخي الحذر الشديد وإعطاء الأولوية قبل عبور التقاطع', 'المرور بأقصى سرعة ممكنة', 'أن الإشارة معطلة ويمنع المرور نهائياً'],
      explanation: 'الضوء الأصفر الوامض ينبه السائقين بضرورة تخفيف السرعة وتوخي الحذر والانتباه لحق الأولوية في التقاطع.'
    },
    en: {
      questionText: 'What does a flashing amber (yellow) traffic signal mean?',
      options: ['Mandatory complete stop for hours', 'Slow down, exercise heightened caution, and yield right of way before proceeding', 'Speed up as fast as possible', 'Traffic light broken; road completely closed'],
      explanation: 'A flashing yellow light warns drivers to proceed with caution and yield to crossing vehicles or pedestrians.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q18',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'ما دلالة الخط المتصل الأبيض أو الأصفر في منتصف الطريق؟',
      options: ['يسمح بالتجاوز في أي وقت', 'يمنع التجاوز أو الانتقال فوقه نهائياً لانعدام الرؤية أو خطورة الطريق', 'مخصص لوقوف السيارات', 'مسار مخصص للدراجات فقط'],
      explanation: 'الخط المتصل في منتصف الطريق يحظر التجاوز تماماً حفاظاً على سلامة السائقين من الاصطدام بالمواجهة.'
    },
    en: {
      questionText: 'What does a solid continuous center line (white or yellow) indicate?',
      options: ['Overtaking permitted anytime', 'Crossing or overtaking is strictly prohibited due to limited sight or road hazard', 'Designated parking line', 'Bicycle-only lane'],
      explanation: 'A solid center line prohibits crossing or overtaking because forward visibility is obstructed or hazardous.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q19',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'أين يجب تثبيت كرسي أمان الأطفال الرضع في السيارة؟',
      options: ['في المقعد الأمامي بجانب السائق مع تفعيل الوسادة الهوائية', 'في المقعد الخلفي بمواجهة الخلف ومثبتاً بنقاط الأمان المعتمدة', 'على حجر السائق', 'في صندوق الأمتعة'],
      explanation: 'المقعد الخلفي المواجه للخلف هو المكان الأكثر أماناً لحماية رقبة ورأس الرضيع من قوى الارتطام، وتجنب مخاطر الوسائد الهوائية الأمامية.'
    },
    en: {
      questionText: 'Where should an infant child safety seat be installed in a passenger vehicle?',
      options: ['In the front passenger seat with active airbag', 'In the rear seat facing backward, secured with certified anchorages', 'On the driver\'s lap', 'In the cargo area'],
      explanation: 'The rear seat facing backward is the safest position for infants, preventing direct impact trauma from deploying front airbags.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q20',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما معنى اللوحة الزرقاء المربعة أو المستطيلة؟',
      options: ['لوحة منع وتحذير', 'لوحة إرشادية وتوجيهية تقدم معلومات عن الخدمات والاتجاهات', 'لوحة غرامات مالية', 'لوحة منطقة عسكرية'],
      explanation: 'اللوحات الزرقاء المستطيلة أو المربعة تقدم معلومات إرشادية وتوجيهية للسائقين حول الطرق والمخارج والخدمات المتوفرة.'
    },
    en: {
      questionText: 'What is the purpose of blue rectangular or square signs on roads?',
      options: ['Prohibition and warning', 'Informational and guidance signs providing directional or public service details', 'Fine penalty signs', 'Military restricted zones'],
      explanation: 'Blue rectangular signs provide helpful guidance, indicating services, hospital locations, parking areas, and highway exits.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q21',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ماذا تفعل إذا انفجر أحد إطارات سيارتك فجأة أثناء السير بسرعة عالية؟',
      options: ['الضغط بقوة وفجأة على الفرامل', 'التمسك بالمقود بكلتا اليدين بقوة، ورفع القدم عن الوقود تدريجياً، والتوجيه ببطء نحو كتف الطريق الآمن دون فرملة عنيفة', 'سحب فرامل اليد فوراً', 'إطفاء المحرك أثناء الحركة'],
      explanation: 'الفرملة العنيفة عند انفجار الإطار تؤدي لانقلاب السيارة فوراً؛ يجب الحفاظ على مسار مستقيم والتهدئة بالقصور الذاتي حتى تنخفض السرعة.'
    },
    en: {
      questionText: 'What should you do if a tire suddenly blows out while driving at highway speed?',
      options: ['Slam hard on the brakes immediately', 'Grip the steering wheel firmly with both hands, ease off the gas, and steer smoothly toward the shoulder without hard braking', 'Yank the emergency handbrake instantly', 'Turn off the engine ignition while rolling'],
      explanation: 'Sudden braking during a blowout causes immediate spin or rollover; hold the wheel firmly and let the vehicle decelerate naturally.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q22',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'ما هي المسافة الآمنة للتجاوز ومتى يحظر التجاوز قطعياً؟',
      options: ['يسمح بالتجاوز في المنعطفات والجسور', 'يحظر التجاوز عند المنعطفات الحادة، قمم المرتفعات، ممرات المشاة، وعند وجود خط متصل', 'التجاوز مسموح دائماً إذا كنت تطلق المنبه', 'يحظر التجاوز فقط في الليل'],
      explanation: 'يحظر التجاوز في جميع الأماكن التي تحجب الرؤية كقمم التلال والمنعطفات وأمام معابر المشاة لتفادي الحوادث وجهاً لوجه.'
    },
    en: {
      questionText: 'When is overtaking other vehicles strictly prohibited by law?',
      options: ['Overtaking is allowed on blind curves and bridges', 'On sharp blind curves, crests of hills, pedestrian crossings, and solid lines', 'Overtaking is always allowed if honking', 'Only prohibited at night'],
      explanation: 'Overtaking is illegal anywhere forward sight distance is obstructed, such as hill crests, sharp bends, and near crossings.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q23',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هو التصرف القانوني عند الاقتراب من حافلة نقل طلاب مدرسية متوقفة وتومض أضواءها الحمراء؟',
      options: ['التجاوز بسرعة قبل نزول الطلاب', 'التوقف التام في كلا الاتجاهين (ما لم يكن هناك جزيرة فاصلة) حتى تنطفئ الأضواء ويتحرك الباص', 'استخدام المنبه لإبعاد الأطفال', 'المرور من جهة الرصيف'],
      explanation: 'حافلات المدارس تحظى بحماية قانونية مشددة؛ يجب التوقف الكامل لحماية أرواح الأطفال أثناء الصعود والنزول.'
    },
    en: {
      questionText: 'What is the required legal action when approaching a stopped school bus displaying flashing red lights?',
      options: ['Pass quickly before children exit', 'Stop completely in both directions (unless divided by a median) until lights cease and the bus moves', 'Honk to clear children', 'Pass on the sidewalk side'],
      explanation: 'Flashing red lights on a school bus mandate a full stop in both directions to safeguard children crossing the roadway.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q24',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ماذا يجب أن تفعل عند مواجهة ضباب كثيف أثناء القيادة الصباحية أو المسائية؟',
      options: ['تشغيل الضوء العالي للرؤية الأبعد', 'تخفيف السرعة، تشغيل أضواء الضباب والضوء المنخفض، وزيادة مسافة الأمان، والالتزام بخطوط المسار الجانبية', 'التوقف فجأة في وسط الطريق', 'القيادة بمحاذاة الشاحنات تماماً'],
      explanation: 'الضوء العالي ينعكس على جزيئات الضباب ويسبب جداراً أبيض يعمي السائق؛ يجب استخدام أضواء الضباب المخصصة والضوء المنخفض.'
    },
    en: {
      questionText: 'What should you do when encountering dense fog while driving?',
      options: ['Turn on high-beam headlights for longer reach', 'Reduce speed, use low beams and fog lights, increase following distance, and follow road lane markings', 'Stop abruptly in the live travel lane', 'Tailgate heavy trucks'],
      explanation: 'High beams reflect off fog droplets causing blinding whiteback glare; use dedicated fog lights and low beams while reducing speed.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q25',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ماذا تعني لوحة "ممنوع التجاوز" (سيارتان متجاورتان إحداهما باللون الأحمر داخل دائرة حمراء)؟',
      options: ['يسمح بالتجاوز للسيارات الحمراء فقط', 'يحظر على جميع المركبات تجاوز أي مركبة أخرى في هذا المقطع من الطريق', 'سباق سيارات مصرح به', 'طريق ذو مسارين في نفس الاتجاه'],
      explanation: 'لوحة منع التجاوز تمنع كافة المركبات من تخطي السيارات التي تسير أمامها حتى تظهر لوحة نهاية المنع.'
    },
    en: {
      questionText: 'What does a "No Overtaking" sign (two adjacent cars, one red, inside a red circle) mean?',
      options: ['Overtaking allowed for red cars only', 'All motor vehicles are prohibited from overtaking other vehicles on this stretch', 'Authorized drag racing area', 'Two lanes in the same direction'],
      explanation: 'The no-overtaking sign legally forbids passing any forward-moving vehicle until the end-of-restriction sign appears.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q26',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ما هو الحد الأدنى القانوني الموصى به لعمق مداس إطار السيارة (Tread Depth) لضمان التماسك؟',
      options: ['0.5 ملم', '1.6 ملم على الأقل عبر السطح الخارجي للإطار', '5 ملم', 'لا يهم عمق المداس'],
      explanation: 'الحد الأدنى القانوني لعمق مداس الإطار هو 1.6 ملم، والقيادة بإطارات متآكلة تعرض السيارة للانزلاق المائي المفاجئ وانفجار الإطار.'
    },
    en: {
      questionText: 'What is the legal minimum tire tread depth required for passenger vehicle safety?',
      options: ['0.5 mm', 'At least 1.6 mm across the central three-quarters of the tread', '5.0 mm', 'Tread depth is not regulated'],
      explanation: '1.6 mm is the international legal minimum tread depth; driving on worn tires drastically elevates hydroplaning and blowout risks.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q27',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'عند التوقف الاضطراري على كتف الطريق السريع بسبب عطل، أين يجب وضع مثلث التحذير العاكس؟',
      options: ['بجانب باب السائق مباشرة', 'على بعد 50 إلى 100 متر خلف المركبة في نفس المسار لتنبيه السائقين القادمين', 'فوق سقف السيارة', 'في المقعد الخلفي'],
      explanation: 'وضع مثلث التحذير على مسافة كافية خلف السيارة يمنح السائقين القادمين بسرعة الوقت الكافي للانتباه وتغيير مسارهم بأمان.'
    },
    en: {
      questionText: 'When making an emergency breakdown stop on a highway shoulder, where should the warning triangle be placed?',
      options: ['Directly next to the driver\'s door', '50 to 100 meters behind the vehicle in the same lane to give advance warning', 'On the car roof', 'Inside the back seat'],
      explanation: 'Positioning the warning triangle well behind the disabled vehicle allows oncoming high-speed drivers sufficient time to react and steer clear.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q28',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هو التصرف الصحيح عند الاقتراب من تقاطع سكة حديد (مزلقان القطار) وتومض الأضواء الحمراء وتدق الأجراس؟',
      options: ['الإسراع لتجاوز الحاجز قبل إغلاقه', 'التوقف التام قبل المزلقان وعدم العبور نهائياً حتى يمر القطار وترتفع الحواجز بالكامل وتنطفئ الأضواء', 'المرور متعرجاً بين الحواجز', 'استخدام المنبه لإيقاف القطار'],
      explanation: 'محاولة عبور شريط القطار أثناء التحذير أو إغلاق الحواجز هي مخاطرة مميتة ومخالفة مرورية جسيمة؛ يجب التوقف الكامل حتى زوال الخطر.'
    },
    en: {
      questionText: 'What is the mandatory action when approaching a railroad level crossing with flashing red lights and sounding bells?',
      options: ['Speed up to beat the closing gates', 'Stop completely before the tracks and never cross until the train passes, gates fully open, and lights cease', 'Weave around the lowered gates', 'Sound horn to stop the locomotive'],
      explanation: 'Attempting to cross active railway tracks is extremely fatal; drivers must stop behind the stop line until gates are fully raised.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q29',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ما وظيفة نظام منع انغلاق المكابح (ABS) في حالات الفرملة الطارئة؟',
      options: ['إيقاف المحرك فوراً', 'منع انغلاق الإطارات مما يسمح للسائق بمواصلة توجيه السيارة وتفادي الاصطدام أثناء الضغط بقوة على الفرامل', 'زيادة سرعة السيارة', 'تفعيل الوسائد الهوائية'],
      explanation: 'نظام ABS يمنع انزلاق الإطارات وتوقف دورانها التام، مما يحافظ على قدرة السائق على المناورة والتوجيه أثناء الفرملة القصوى.'
    },
    en: {
      questionText: 'What is the primary function of an Anti-lock Braking System (ABS) during emergency braking?',
      options: ['Shutting down the engine instantly', 'Preventing wheel lockup so the driver can maintain steering control while braking heavily', 'Increasing vehicle acceleration', 'Deploying airbags'],
      explanation: 'ABS prevents tires from skidding and locking up, allowing the driver to steer around obstacles even during maximum pedal pressure.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q30',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'عند الرغبة في الخروج من الدوار من المخرج الأول (انعطاف لليمين)، ما هو المسار الصحيح الذي يجب اختياره قبل دخول الدوار؟',
      options: ['المسار الأيسر الداخلي', 'المسار الأيمن الخارجي مع تشغيل إشارة الانعطاف لليمين', 'أي مسار بشكل عشوائي', 'المسار الأوسط دون إشارة'],
      explanation: 'للخروج من أول مخرج في الدوار يميناً، يجب الالتزام بالمسار الأيمن قبل الدخول وتشغيل الإشارة لليمين لتفادي قطع مسار السيارات الأخرى.'
    },
    en: {
      questionText: 'When intending to take the first exit (turning right) at a roundabout, which lane should you be in before entering?',
      options: ['The innermost left lane', 'The outermost right lane, indicating a right turn signal', 'Any lane randomly', 'The middle lane without signaling'],
      explanation: 'To exit at the first immediate right turn, approach and enter in the right lane with your right turn signal activated.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q31',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هو التصرف القانوني عند وقوع حادث مروري بسيط دون إصابات بين مركبتين؟',
      options: ['ترك السيارتين في منتصف الطريق وإغلاق السير لساعات', 'تحريك المركبات فوراً إلى جانب الطريق الآمن أو أقرب موقف لتفادي عرقلة حركة السير وتوثيق الحادث عبر القنوات الرسمية', 'الهروب من مكان الحادث', 'المشاجرة مع الطرف الآخر'],
      explanation: 'تنص اللوائح الحديثة على إخلاء مسار السير فوراً في الحوادث البسيطة لتجنب وقوع حوادث تتابعية مميتة وعرقلة السير.'
    },
    en: {
      questionText: 'What is the required procedure after a minor property-damage-only traffic collision with no injuries?',
      options: ['Leave vehicles blocking active traffic for hours', 'Move vehicles safely to the shoulder or nearest parking area to avoid blocking traffic and report via official channels', 'Flee the scene of the accident', 'Start a verbal altercation'],
      explanation: 'Moving vehicles out of live travel lanes prevents secondary fatal crashes and minimizes severe traffic gridlock.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q32',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'كيف يجب إيقاف سيارتك عند ركنها على منحدر حاد (صعوداً) بجانب رصيف؟',
      options: ['توجيه العجلات الأمامية للأمام بشكل مستقيم', 'توجيه العجلات الأمامية بعيداً عن الرصيف (نحو اليسار) مع تعشيق فرامل اليد ووضع الغيار على الأول أو P', 'ترك السيارة على الوضع المحايد N فقط', 'توجيه العجلات نحو الرصيف دائماً'],
      explanation: 'عند الوقوف صعوداً مع وجود رصيف، توجيه العجلات نحو اليسار (بعيداً عن الرصيف) يجعل الرصيف حاجزاً يمنع السيارة من التدحرج للخلف.'
    },
    en: {
      questionText: 'How should you angle your front wheels when parking facing uphill next to a curb?',
      options: ['Point wheels straight ahead', 'Turn wheels away from the curb (towards the street/left), engage parking brake and shift to Park or 1st gear', 'Leave in neutral with no handbrake', 'Always turn wheels towards the curb'],
      explanation: 'Turning wheels away from the curb uphill ensures that if brakes fail, the back of the front tire rolls against the curb and stops the vehicle.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q33',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما معنى لوحة مثلثة بداخلها رسم لأشخاص وأطفال يعبرون؟',
      options: ['منطقة ملاهي', 'تحذير من وجود منطقة مدارس أو معبر مشاة أطفال متكرر؛ يجب التهدئة والانتباه', 'ممنوع عبور المشاة', 'موقف حافلات'],
      explanation: 'لوحة تحذيرية تنبه السائقين بضرورة تخفيض السرعة لوجود أطفال ومشاه بالقرب من مدارس أو حدائق.'
    },
    en: {
      questionText: 'What does a triangular warning sign with children crossing symbols indicate?',
      options: ['Amusement park area', 'Warning of school zone or frequent children crossing ahead; reduce speed and be prepared to stop', 'Pedestrians prohibited', 'Bus terminal'],
      explanation: 'A school/children warning sign mandates drivers to reduce speed and exercise heightened vigilance near schools and playgrounds.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q34',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'ما هي "المنطقة العمياء للشاحنات الكبيرة" (No-Zone)؟',
      options: ['منطقة تحت محرك الشاحنة', 'مساحات واسعة مباشرة خلف الشاحنة، أمامها، وعلى كلا جانبيها لا يستطيع سائق الشاحنة رؤيتك فيها في مراياه', 'منطقة التحميل الخلفية فقط', 'كابينة القيادة'],
      explanation: 'للشاحنات الكبيرة نقاط عمياء ضخمة؛ إذا لم تكن قادراً على رؤية وجه سائق الشاحنة في مرآته الجانبية، فهو لا يستطيع رؤيتك.'
    },
    en: {
      questionText: 'What are the "No-Zones" or blind spots around large commercial trucks?',
      options: ['The area under the truck engine', 'Large blind areas directly behind, in front, and along both sides where the truck driver cannot see you', 'The rear cargo bed only', 'The driver cab'],
      explanation: 'Large commercial trucks have massive blind spots; if you cannot see the driver\'s face in their side mirror, they cannot see your vehicle.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q35',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما هو التصرف السليم عند الشعور بغضب الطريق (Road Rage) من سائق آخر يلاحقك أو يضايقك؟',
      options: ['النزول من السيارة والمشاجرة معه', 'تجنب التواصل البصري، الحفاظ على الهدوء، عدم الاستجابة لاستفزازه، والتوجه لأقرب مركز شرطة إذا استمرت الملاحقة', 'الضغط على الفرامل فجأة أمامه', 'زيادة السرعة ومسابقته'],
      explanation: 'التعامل مع غضب الطريق يتطلب الهدوء التام وتفادي التصعيد أو النزول من المركبة لضمان سلامتك وسلامة ركابك.'
    },
    en: {
      questionText: 'What is the safest response to aggressive driving or road rage from another driver?',
      options: ['Exit the vehicle and confront them physically', 'Avoid eye contact, remain calm, ignore provocations, and drive toward a police station or public area if followed', 'Brake check them suddenly', 'Race against them'],
      explanation: 'De-escalation is critical: never engage with aggressive drivers, avoid retaliating, and seek law enforcement assistance if threatened.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q36',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ما الذي يضيء في لوحة العدادات (الطبلون) عند انخفاض ضغط زيت المحرك إلى مستوى خطر؟',
      options: ['رمز البطارية باللون الأصفر', 'رمز إبريق الزيت باللون الأحمر؛ ويجب إيقاف السيارة فوراً في مكان آمن وإطفاء المحرك', 'رمز حزام الأمان', 'رمز المساحات'],
      explanation: 'ضوء ضغط الزيت الأحمر يشير إلى انعدام تزييت المحرك؛ الاستمرار في القيادة يسبب تلفاً كارثياً للمحرك خلال دقائق معدودة.'
    },
    en: {
      questionText: 'What warning light illuminates on the dashboard when engine oil pressure drops to a dangerous level?',
      options: ['Yellow battery symbol', 'Red oil can symbol; requires safely stopping and shutting off engine immediately', 'Seatbelt indicator', 'Windshield wiper light'],
      explanation: 'The red oil pressure light signifies lack of lubrication; continuing to run the engine will cause catastrophic engine seizure within minutes.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q37',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ما معنى اللوحة الدائرية الحمراء التي تحتوي على صورة "بوق" (منبه صوتي) مشطوب بخط أحمر؟',
      options: ['يجب استخدام المنبه الصوتي', 'ممنوع استخدام المنبه الصوتي في هذه المنطقة (مثل قرب المستشفيات والمدارس)', 'منبه السيارة معطل', 'منطقة بيع منبهات'],
      explanation: 'هذه اللوحة تحظر استخدام منبه الصوت (الكلاكس) إلا في حالات الضرورة القصوى لتجنب الضوضاء في مناطق معينة.'
    },
    en: {
      questionText: 'What does a circular red sign with a crossed-out "horn" symbol mean?',
      options: ['You must use your horn', 'Use of the horn is prohibited in this area (e.g., near hospitals and schools)', 'The car horn is broken', 'Horn sales area ahead'],
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
      options: ['لرؤية الطريق أمام الشاحنة بشكل أفضل ولتجنب الحجارة المتطايرة وضمان رؤية السائق لك في مراياه', 'لتوفير الوقود فقط', 'للالتصاق بالشاحنة للهرب من الرياح', 'لا توجد أهمية'],
      explanation: 'ترك مسافة خلف الشاحنة يحسن مجال رؤيتك للأمام ويحميك من أي أجسام قد تسقط أو تتطاير من إطارات الشاحنة.'
    },
    en: {
      questionText: 'What is the importance of leaving a sufficient safety distance behind large trucks?',
      options: ['To see the road ahead better, avoid flying debris, and ensure the truck driver sees you in their mirrors', 'To save fuel only', 'To draft behind the truck and avoid wind resistance', 'There is no importance'],
      explanation: 'Leaving space behind a truck improves your forward field of vision and protects you from any objects that might fall or fly off the truck\'s tires.'
    },
    correctAnswerIndex: 0
  },
  {
    id: 'global_q40',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'ما معنى "القيادة الوقائية" (Defensive Driving)؟',
      options: ['القيادة ببطء شديد دائماً', 'القيادة بتوقع أخطاء الآخرين ومخاطر الطريق والاستعداد المسبق للتعامل معها لتجنب الحوادث', 'القيادة مع وجود حراس أمن', 'القيادة في وسط الطريق'],
      explanation: 'القيادة الوقائية هي استراتيجية تهدف لتقليل المخاطر عبر الانتباه الدائم وتوقع المفاجآت من السائقين الآخرين أو ظروف الطريق.'
    },
    en: {
      questionText: 'What does "Defensive Driving" mean?',
      options: ['Driving very slowly at all times', 'Driving by anticipating others\' mistakes and road hazards and reacting proactively to avoid accidents', 'Driving with security guards', 'Driving in the middle of the road'],
      explanation: 'Defensive driving is a strategy aimed at reducing risk by remaining alert and anticipating surprises from other drivers or road conditions.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q41',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'ماذا يجب أن تفعل إذا علقت دواسة الوقود (المسرع) في سيارتك أثناء السير؟',
      options: ['إغلاق المفتاح وقفل مقود القيادة', 'تحويل ناقل الحركة إلى الوضع المحايد (N) والضغط على الفرامل بقوة وثبات والتوجيه لكتف الطريق الآمن ثم إطفاء المحرك', 'سحب فرامل اليد فجأة', 'القفز من السيارة'],
      explanation: 'تحويل القير إلى الوضع المحايد (N) يفصل قوة المحرك عن العجلات، مما يتيح لك إيقاف السيارة بأمان دون فقدان نظام التوجيه أو الفرامل.'
    },
    en: {
      questionText: 'What should you do if your accelerator pedal sticks down while driving?',
      options: ['Turn off the ignition and lock the steering wheel', 'Shift the transmission into Neutral (N), apply steady firm brakes, steer to a safe shoulder, and shut off engine', 'Yank the emergency brake suddenly', 'Jump from the vehicle'],
      explanation: 'Shifting to Neutral cuts engine power from driving the wheels, allowing you to brake safely while retaining power steering and brake assist.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q42',
    category: { ar: 'إشارات المرور', en: 'Traffic Signs' },
    ar: {
      questionText: 'ماذا تعني إشارة السهم المزدوج للأعلى وللأسفل داخل مثلث أحمر؟',
      options: ['طريق ذو اتجاهين أمامك بعد أن كان طريقاً باتجاه واحد', 'ممنوع السير للأمام', 'مصعد سيارات', 'طريق مسدود'],
      explanation: 'تحذر هذه اللوحة السائق من أن الطريق مقبل على حركة مرور في كلا الاتجاهين (ذهاب وإياب).'
    },
    en: {
      questionText: 'What does a triangular warning sign with two opposing vertical arrows indicate?',
      options: ['Two-way traffic ahead after a one-way section', 'No forward movement allowed', 'Vehicle elevator ahead', 'Dead-end street'],
      explanation: 'This sign warns drivers that the road ahead carries two-way traffic in opposing directions.'
    },
    correctAnswerIndex: 0
  },
  {
    id: 'global_q43',
    category: { ar: 'قواعد وأولويات السير', en: 'Road Priority and Laws' },
    ar: {
      questionText: 'ما هي المسافة الدنيا التي يجب تركها عند الوقوف أو التوقف بجانب ممر مشاة؟',
      options: ['نصف متر', '5 أمتار على الأقل قبل الممر لمنع حجب الرؤية عن المشاة والسائقين الآخرين', 'لا يلزم ترك مسافة', '10 سنتيمترات'],
      explanation: 'يمنع الوقوف على مسافة تقل عن 5 أمتار قبل ممر المشاة لضمان وضوح رؤية المشاة العابرين من قبل السيارات القادمة.'
    },
    en: {
      questionText: 'What minimum clearance distance must be maintained when stopping or parking near a pedestrian crosswalk?',
      options: ['0.5 meters', 'At least 5 meters before the crossing to prevent obstructing visibility', 'No distance required', '10 centimeters'],
      explanation: 'Parking within 5 meters of a crosswalk obstructs visual sightlines between oncoming drivers and pedestrians crossing.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q44',
    category: { ar: 'المخالفات وقوانين المرور', en: 'Violations and Traffic Laws' },
    ar: {
      questionText: 'هل يسمح بترك الأطفال دون سن العاشرة بمفردهم داخل مركبة متوقفة في الطقس الحار؟',
      options: ['نعم إذا كانت النوافذ مفتوحة قليلاً', 'لا، يمنع منعاً باتاً ويعتبر جريمة إهمال وتعريض حياة للخطر لسرعة ارتفاع درجة الحرارة داخل المركبة', 'نعم لمدة نصف ساعة فقط', 'نعم إذا كانت السيارة في الظل'],
      explanation: 'درجة الحرارة داخل السيارة المتوقفة ترتفع لمستويات قاتلة خلال دقائق معدودة، وترك الأطفال بمفردهم محظور قانونياً وأخلاقياً.'
    },
    en: {
      questionText: 'Is it legally permissible to leave young children unattended inside a parked vehicle in warm weather?',
      options: ['Yes, if windows are cracked slightly', 'No, it is strictly illegal and constitutes child endangerment due to rapid heatstroke risks', 'Yes, for up to 30 minutes', 'Yes, if parked in shade'],
      explanation: 'Cabin temperatures can spike to lethal levels within minutes; leaving children unattended is universally illegal and dangerous.'
    },
    correctAnswerIndex: 1
  },
  {
    id: 'global_q45',
    category: { ar: 'السلامة والقيادة الوقائية', en: 'Safety and Defensive Driving' },
    ar: {
      questionText: 'كيف يؤثر استهلاك الكحول أو العقاقير المخدرة على السائق؟',
      options: ['يجعل السائق يقظاً وسريع الاستجابة', 'يضعف التقدير البصري، يبطئ ردود الفعل، ويزيد الثقة الزائفة ويضاعف احتمالات الحوادث المميتة', 'يحسن قدرة التحكم في المنعطفات', 'لا يؤثر إذا كان السائق خبيراً'],
      explanation: 'الكحول والمخدرات تثبط الجهاز العصبي المركزي وتفقد السائق القدرة على اتخاذ القرارات الصحيحة وتقدير المسافات والسرعات.'
    },
    en: {
      questionText: 'How does alcohol or drug consumption affect a driver\'s capabilities?',
      options: ['Makes the driver alert and responsive', 'Impairs judgment, slows reflexes, induces false confidence, and drastically increases fatal crashes', 'Improves cornering ability', 'Has no effect on experienced drivers'],
      explanation: 'Substances depress the central nervous system, degrading spatial reasoning, depth perception, and critical reaction time.'
    },
    correctAnswerIndex: 1
  }
];
