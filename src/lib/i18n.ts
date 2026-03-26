export type Language = 'en' | 'ar';

export const i18n = {
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      destinations: "الوجهات",
      about: "عن الشركة",
      faq: "الأسئلة الشائعة",
      partners: "الشركاء",
      contact: "اتصل بنا",
      toggleLang: "English",
    },
    hero: {
      title: "استكشف العالم مع فلاي سيف",
      subtitle: "شريكك السعودي الموثوق في السفر بخبرة تتجاوز 15 عاماً. من الرياض إلى روما، نجعل كل رحلة لا تُنسى.",
      ctaPrimary: "احجز رحلتك",
      ctaSecondary: "اتصل بنا",
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول سفر شاملة مصممة للمسافر السعودي",
      items: [
        {
          id: "flights",
          title: "حجز الطيران",
          desc: "رحلات داخلية ودولية بأفضل الأسعار. نتعاون مع جميع شركات الطيران الكبرى بما فيها السعودية وفلاي ناس.",
        },
        {
          id: "hotels",
          title: "حجز الفنادق",
          desc: "من المنتجعات الفاخرة ذات 5 نجوم إلى الخيارات الاقتصادية. نقدم مجموعة مختارة من الفنادق في أكثر من 200 وجهة.",
        },
        {
          id: "cars",
          title: "تأجير السيارات",
          desc: "تأجير سيارات فاخرة مع خدمة سائق عند الطلب. اختر من الأسطول الاقتصادي إلى الفاخر للأعمال أو الترفيه.",
        },
        {
          id: "hajj",
          title: "باقات الحج والعمرة",
          desc: "باقات حج وعمرة روحانية مثرية مع إقامة VIP في مكة المكرمة والمدينة المنورة. تصاريح مرتبة مسبقاً وخدمة إرشادية كاملة.",
        },
        {
          id: "domestic",
          title: "رحلات داخل المملكة",
          desc: "اكتشف كنوز المملكة العربية السعودية الخفية. من آثار العُلا القديمة إلى نيوم المستقبلية، مرتفعات أبها والشعاب المرجانية للبحر الأحمر.",
        },
        {
          id: "international",
          title: "رحلات جماعية دولية",
          desc: "جولات دولية مُدارة بالكامل إلى أوروبا وآسيا والأمريكتين وأفريقيا. باقات شاملة مع مرشدين يتحدثون العربية.",
        },
        {
          id: "group-tours",
          title: "رحلات جماعية مُدارة",
          desc: "تجارب سفر جماعية متكاملة بقيادة مرشدين متخصصين. لوجستيات كاملة، إقامة، مواصلات، وجداول مدروسة لمجموعات عائلية وشركات.",
        }
      ]
    },
    destinations: {
      title: "الوجهات الأكثر شعبية",
      subtitle: "من قلب المملكة إلى أبعد نقطة في العالم",
      saudiLabel: "وجهات داخل المملكة",
      intlLabel: "وجهات دولية",
      exploreBtn: "استكشف",
      saudi: [
        { title: "العُلا", desc: "عجب نبطي قديم", url: "https://www.experiencealula.com" },
        { title: "جدة", desc: "لؤلؤة البحر الأحمر", url: "https://www.visitsaudi.com/ar/jeddah" },
        { title: "أبها", desc: "مدينة بين السحاب", url: "https://www.visitsaudi.com/ar/aseer" },
        { title: "الرياض", desc: "عاصمة الطموح", url: "https://www.visitsaudi.com/ar/riyadh" },
        { title: "نيوم", desc: "مدينة المستقبل", url: "https://www.neom.com" }
      ],
      international: [
        { title: "باريس", desc: "مدينة النور", url: "https://www.parisjetaime.com" },
        { title: "إسطنبول", desc: "حيث يلتقي الشرق بالغرب", url: "https://www.goturkiye.com" },
        { title: "لندن", desc: "ملكية وخالدة", url: "https://www.visitlondon.com" },
        { title: "بالي", desc: "جزيرة الآلهة", url: "https://www.indonesia.travel/gb/en/destinations/bali-nusa-tenggara/bali" }
      ]
    },
    whyUs: {
      title: "لماذا تختار فلاي سيف؟",
      stats: [
        { value: 50000, suffix: "+", label: "مسافر سعيد" },
        { value: 200, suffix: "+", label: "وجهة" },
        { value: 15, suffix: "+", label: "سنة خبرة" },
        { value: 98, suffix: "٪", label: "رضا العملاء" }
      ],
      features: [
        "دعم العملاء 24/7",
        "وكالة معتمدة من الاياتا",
        "شبكة سعودية حصرية",
        "أسعار شفافة",
        "مرشدون يتحدثون العربية",
        "وصول إلى الصالة VIP"
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        {
          q: "كيف أحجز باقة حج أو عمرة؟",
          a: "تواصل مع فريق الحج والعمرة المتخصص لدينا عبر الهاتف أو واتساب أو تفضل بزيارة مكتبنا. نتولى جميع التصاريح والتأشيرات والإقامة وترتيبات النقل."
        },
        {
          q: "ما هو أفضل وقت لزيارة العُلا؟",
          a: "الوقت المثالي من نوفمبر إلى مارس حين تكون الحرارة لطيفة (15-25 درجة). يمتد مهرجان شتاء طنطورا من ديسمبر إلى مارس مع فعاليات عالمية المستوى."
        },
        {
          q: "هل تقدمون مساعدة في تأشيرات السفر الدولي؟",
          a: "نعم، نقدم دعماً كاملاً للتأشيرات لجميع الوجهات الشهيرة بما فيها شنغن والمملكة المتحدة والولايات المتحدة وغيرها."
        },
        {
          q: "هل يمكنكم ترتيب سفر الشركات؟",
          a: "بالتأكيد. نقدم إدارة متخصصة لسفر الشركات تشمل حجوزات درجة رجال الأعمال وتفاوض الفنادق وتقارير المصروفات."
        },
        {
          q: "ما الذي يميز فلاي سيف عن منصات الحجز الإلكترونية؟",
          a: "على عكس المنصات الآلية، نقدم خدمة شخصية ومشورة خبراء وأسعاراً حصرية عبر شبكتنا السعودية ودعماً بشرياً على مدار الساعة."
        },
        {
          q: "هل تقدمون تأمين سفر؟",
          a: "نعم، نتعاون مع كبرى شركات التأمين لتقديم تأمين سفر شامل يغطي الأمور الطبية والإلغاء وضياع الأمتعة."
        },
        {
          q: "هل يمكنني تخصيص برنامج رحلة؟",
          a: "نعم! يمكن تخصيص جميع باقاتنا بالكامل. أخبرنا بتفضيلاتك وميزانيتك وتواريخ سفرك وسنصمم برنامجاً مخصصاً خصيصاً لك."
        },
        {
          q: "ما طرق الدفع التي تقبلونها؟",
          a: "نقبل التحويل البنكي والبطاقات الائتمانية ومدى وApple Pay وSTC Pay. خطط التقسيط متاحة لباقات مختارة."
        }
      ]
    },
    partners: {
      title: "روابط مفيدة وشركاؤنا",
      subtitle: "موارد موثوقة ومنظمات رسمية في قطاع السياحة والسفر",
      items: [
        { name: "هيئة السياحة السعودية", desc: "هيئة السياحة السعودية الرسمية" },
        { name: "روح السعودية", desc: "اكتشف عجائب المملكة العربية السعودية" },
        { name: "تريب أدفايزر", desc: "مراجعات وتوصيات السفر" },
        { name: "بوكينج.كوم", desc: "فنادق وإقامة حول العالم" },
        { name: "سكاي سكانر", desc: "قارن الرحلات والفنادق والسيارات" },
        { name: "اياتا", desc: "الاتحاد الدولي للنقل الجوي" },
        { name: "الخطوط السعودية", desc: "الخطوط الجوية العربية السعودية" },
        { name: "فلاي أديال", desc: "رحلات داخلية سعودية بأسعار معقولة" },
        { name: "المسافر", desc: "منصة حجز السفر السعودية" },
        { name: "لونلي بلانيت", desc: "أدلة ونصائح السفر العالمية" },
        { name: "وزارة الحج والعمرة", desc: "وزارة الحج والعمرة الرسمية" },
        { name: "خرائط جوجل", desc: "استكشف الوجهات على خرائط جوجل" }
      ]
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "فريقنا جاهز لمساعدتك في التخطيط لرحلتك المثالية",
      info: {
        address: "طريق عمر بن الخطاب، البشر، بريدة 52379، المملكة العربية السعودية",
        phone: "+966 11 234 5678",
        whatsapp: "+966 50 123 4567",
        email: "info@flysafesa.com",
        hours: "صباحاً: ٨ – ١٢  |  مساءً: ٤ – ١١",
        addressLabel: "العنوان",
        phoneLabel: "الهاتف / واتساب",
        emailLabel: "البريد الإلكتروني",
        hoursLabel: "ساعات العمل"
      },
      form: {
        name: "الاسم الكامل",
        namePlaceholder: "محمد العتيبي",
        email: "البريد الإلكتروني",
        emailPlaceholder: "your@email.com",
        phone: "الهاتف",
        phonePlaceholder: "+966 50 000 0000",
        serviceType: "نوع الخدمة",
        travelDates: "تواريخ السفر",
        message: "الرسالة",
        messagePlaceholder: "أخبرنا عن رحلتك المخططة...",
        submit: "إرسال الرسالة",
        submitting: "جاري الإرسال...",
        successTitle: "تم الإرسال بنجاح",
        success: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
        errorName: "الاسم مطلوب",
        errorEmail: "عنوان البريد الإلكتروني غير صالح",
        errorPhone: "رقم الهاتف مطلوب",
        errorService: "الرجاء اختيار الخدمة",
        errorMessage: "يجب أن تكون الرسالة 10 أحرف على الأقل",
        types: ["حجز الطيران", "الفنادق", "تأجير السيارات", "باقات الحج والعمرة", "رحلات داخل المملكة", "رحلات دولية", "أخرى"]
      }
    },
    footer: {
      tagline: "بوابتك الموثوقة إلى العالم",
      cols: {
        about: "عن فلاي سيف",
        links: "روابط سريعة",
        services: "خدماتنا",
        contact: "اتصل بنا",
        partners: "روابط مهمة"
      },
      copyright: "© 2024 فلاي سيف لخدمات السفر. جميع الحقوق محفوظة.",
      iata: "معتمدة محلياً ودولياً · IATA",
      whatsappTooltip: "تحدث عبر واتساب"
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      destinations: "Destinations",
      about: "About",
      faq: "FAQ",
      partners: "Partners",
      contact: "Contact",
      toggleLang: "العربية",
    },
    hero: {
      title: "Explore the World with Fly Safe",
      subtitle: "Your trusted Saudi travel partner with over 15 years of experience. From Riyadh to Rome, we make every journey unforgettable.",
      ctaPrimary: "Book Your Trip",
      ctaSecondary: "Contact Us",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive travel solutions tailored for Saudi travellers",
      items: [
        {
          id: "flights",
          title: "Flights",
          desc: "Domestic and international flights at the best prices. We partner with all major airlines including Saudia, Flynas, and international carriers.",
        },
        {
          id: "hotels",
          title: "Hotels",
          desc: "From luxury 5-star resorts to budget-friendly options. We offer curated hotel selections across 200+ destinations worldwide.",
        },
        {
          id: "cars",
          title: "Car Rentals",
          desc: "Premium vehicle rentals with chauffeur service available. Choose from economy to luxury fleets for business or leisure.",
        },
        {
          id: "hajj",
          title: "Hajj & Umrah Packages",
          desc: "Spiritually enriching Hajj and Umrah packages with VIP accommodations in Makkah and Madinah. Pre-arranged permits and full guided service.",
        },
        {
          id: "domestic",
          title: "Domestic Saudi Trips",
          desc: "Discover Saudi Arabia's hidden gems. From the ancient ruins of AlUla to the futuristic NEOM, the highlands of Abha, and the coral reefs of the Red Sea.",
        },
        {
          id: "international",
          title: "International Group Tours",
          desc: "Fully managed international tours to Europe, Asia, Americas and Africa. All-inclusive packages with Arabic-speaking guides.",
        },
        {
          id: "group-tours",
          title: "Managed Group Tours",
          desc: "End-to-end group travel experiences led by specialist guides. Full logistics, accommodation, transport, and itineraries for families and corporate groups.",
        }
      ]
    },
    destinations: {
      title: "Popular Destinations",
      subtitle: "From the heart of Saudi Arabia to the far corners of the world",
      saudiLabel: "Saudi Arabia",
      intlLabel: "International",
      exploreBtn: "Explore",
      saudi: [
        { title: "AlUla", desc: "Ancient Nabataean wonder", url: "https://www.experiencealula.com" },
        { title: "Jeddah", desc: "Pearl of the Red Sea", url: "https://www.visitsaudi.com/en/jeddah" },
        { title: "Abha", desc: "City among the clouds", url: "https://www.visitsaudi.com/en/aseer" },
        { title: "Riyadh", desc: "Capital of ambition", url: "https://www.visitsaudi.com/en/riyadh" },
        { title: "NEOM", desc: "The city of the future", url: "https://www.neom.com" }
      ],
      international: [
        { title: "Paris", desc: "City of Light", url: "https://www.parisjetaime.com" },
        { title: "Istanbul", desc: "Where East meets West", url: "https://www.goturkiye.com" },
        { title: "London", desc: "Royal & Timeless", url: "https://www.visitlondon.com" },
        { title: "Bali", desc: "Island of the Gods", url: "https://www.indonesia.travel/gb/en/destinations/bali-nusa-tenggara/bali" }
      ]
    },
    whyUs: {
      title: "Why Choose Fly Safe?",
      stats: [
        { value: 50000, suffix: "+", label: "Happy Travellers" },
        { value: 200, suffix: "+", label: "Destinations" },
        { value: 15, suffix: "+", label: "Years Experience" },
        { value: 98, suffix: "%", label: "Customer Satisfaction" }
      ],
      features: [
        "24/7 Customer Support",
        "IATA Certified Agency",
        "Exclusive Saudi Network",
        "Transparent Pricing",
        "Arabic-Speaking Guides",
        "VIP Lounge Access"
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "How do I book a Hajj or Umrah package?",
          a: "Contact our dedicated Hajj & Umrah team via phone, WhatsApp, or visit our office. We handle all permits, visas, accommodations, and transport arrangements."
        },
        {
          q: "What is the best time to visit AlUla?",
          a: "The ideal time is November to March when temperatures are pleasant (15-25°C). The Winter at Tantora festival runs December–March with world-class events."
        },
        {
          q: "Do you offer visa assistance for international travel?",
          a: "Yes, we provide full visa support for all popular destinations including Schengen, UK, USA, and more. Our visa team handles all documentation."
        },
        {
          q: "Can you arrange corporate travel for businesses?",
          a: "Absolutely. We offer dedicated corporate travel management including business class bookings, hotel negotiations, and expense reporting."
        },
        {
          q: "What makes Fly Safe different from online booking platforms?",
          a: "Unlike automated platforms, we offer personalised service, expert advice, exclusive rates through our Saudi network, and 24/7 human support — especially valuable during travel disruptions."
        },
        {
          q: "Do you offer travel insurance?",
          a: "Yes, we partner with leading insurance providers to offer comprehensive travel insurance covering medical, cancellation, and loss of luggage."
        },
        {
          q: "Can I customise a travel itinerary?",
          a: "Yes! All our packages can be fully customised. Tell us your preferences, budget, and travel dates, and we'll craft a bespoke itinerary just for you."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept bank transfers, credit/debit cards, Mada, Apple Pay, and STC Pay. Instalment plans are available for select packages."
        }
      ]
    },
    partners: {
      title: "Useful Links & Partners",
      subtitle: "Trusted resources and official organisations in the travel industry",
      items: [
        { name: "Saudi Tourism Authority", desc: "Official Saudi tourism authority" },
        { name: "Visit Saudi", desc: "Discover Saudi Arabia's wonders" },
        { name: "TripAdvisor", desc: "Reviews & travel recommendations" },
        { name: "Booking.com", desc: "Hotels & accommodations worldwide" },
        { name: "Skyscanner", desc: "Compare flights, hotels & cars" },
        { name: "IATA", desc: "International Air Transport Association" },
        { name: "Saudia Airlines", desc: "Saudi Arabia's national airline" },
        { name: "Flyadeal", desc: "Affordable Saudi domestic flights" },
        { name: "Almosafer", desc: "Saudi travel booking platform" },
        { name: "Lonely Planet", desc: "Global travel guides & tips" },
        { name: "Ministry of Hajj & Umrah", desc: "Official Hajj & Umrah authority" },
        { name: "Google Maps Travel", desc: "Explore destinations on Google Maps" }
      ]
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Our team is ready to help you plan your perfect journey",
      info: {
        address: "Umar Ibn Al Khatab Rd, Al Bishr, Buraydah 52379, Saudi Arabia",
        phone: "+966 11 234 5678",
        whatsapp: "+966 50 123 4567",
        email: "info@flysafesa.com",
        hours: "8AM–12PM  |  4PM–11PM",
        addressLabel: "Address",
        phoneLabel: "Phone / WhatsApp",
        emailLabel: "Email",
        hoursLabel: "Working Hours"
      },
      form: {
        name: "Full Name",
        namePlaceholder: "John Doe",
        email: "Email Address",
        emailPlaceholder: "your@email.com",
        phone: "Phone Number",
        phonePlaceholder: "+966 50 000 0000",
        serviceType: "Service Type",
        travelDates: "Travel Dates",
        message: "Message",
        messagePlaceholder: "Tell us about your planned trip...",
        submit: "Send Message",
        submitting: "Sending...",
        successTitle: "Message Sent",
        success: "Your message has been sent successfully! We will contact you soon.",
        errorName: "Name is required",
        errorEmail: "Invalid email address",
        errorPhone: "Phone number is required",
        errorService: "Please select a service",
        errorMessage: "Message must be at least 10 characters",
        types: ["Flight Booking", "Hotels", "Car Rental", "Hajj & Umrah Packages", "Domestic Trip", "International Tour", "Other"]
      }
    },
    footer: {
      tagline: "Your trusted gateway to the world",
      cols: {
        about: "About Fly Safe",
        links: "Quick Links",
        services: "Our Services",
        contact: "Contact Info",
        partners: "Useful Links"
      },
      copyright: "© 2024 Fly Safe Travel Agency. All rights reserved.",
      iata: "Locally & Internationally Certified · IATA",
      whatsappTooltip: "Chat on WhatsApp"
    }
  }
};
