import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/hooks/use-language';

const BASE_URL = "https://flysafe.sa";

export function SEO() {
  const { language } = useLanguage();

  const title = language === 'ar'
    ? "فلاي سيف | وكالة سفر موثوقة في المملكة العربية السعودية"
    : "Fly Safe | Trusted Travel Agency in Saudi Arabia";

  const description = language === 'ar'
    ? "فلاي سيف - وكالة السفر الموثوقة في المملكة العربية السعودية. احجز رحلات الطيران، الفنادق، تأجير السيارات، باقات الحج والعمرة، والجولات السياحية الداخلية والدولية."
    : "Fly Safe - Saudi Arabia's trusted travel agency. Book flights, hotels, car rentals, Hajj & Umrah packages, and managed domestic and international tours.";

  const canonicalUrl = `${BASE_URL}/`;

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${BASE_URL}/#travelagency`,
        "name": "Fly Safe Travel Agency",
        "alternateName": "فلاي سيف لخدمات السفر",
        "url": BASE_URL,
        "image": `${BASE_URL}/favicon.svg`,
        "telephone": "+966112345678",
        "email": "info@flysafesa.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Umar Ibn Al Khatab Rd, Al Bishr",
          "addressLocality": "Buraydah",
          "postalCode": "52379",
          "addressCountry": "SA"
        },
        "sameAs": [
          "https://facebook.com/flysafe.sa",
          "https://twitter.com/flysafe_sa",
          "https://instagram.com/flysafe.sa",
          "https://linkedin.com/company/flysafe-sa"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#localbusiness`,
        "name": "Fly Safe Travel Agency",
        "alternateName": "فلاي سيف",
        "url": BASE_URL,
        "image": `${BASE_URL}/favicon.svg`,
        "telephone": "+966112345678",
        "email": "info@flysafesa.com",
        "priceRange": "$$",
        "currenciesAccepted": "SAR",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer, Mada, Apple Pay, STC Pay",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Umar Ibn Al Khatab Rd, Al Bishr",
          "addressLocality": "Buraydah",
          "postalCode": "52379",
          "addressCountry": "SA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 26.370662,
          "longitude": 43.931090
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "08:00",
            "closes": "12:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "16:00",
            "closes": "23:00"
          }
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Saudi Arabia"
        }
      }
    ]
  };

  return (
    <Helmet>
      <html lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang */}
      <link rel="alternate" hrefLang="ar" href={`${BASE_URL}/?lang=ar`} />
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}/?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${BASE_URL}/opengraph.jpg`} />
      <meta property="og:locale" content={language === 'ar' ? 'ar_SA' : 'en_US'} />
      <meta property="og:site_name" content="Fly Safe Travel Agency" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/opengraph.jpg`} />

      {/* JSON-LD: TravelAgency + LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify(schemaGraph)}
      </script>
    </Helmet>
  );
}
