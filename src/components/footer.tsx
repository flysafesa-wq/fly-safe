import { Plane, Facebook, Twitter, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const partnerLinks = [
  { url: "https://www.sta.gov.sa", en: "Saudi Tourism Authority", ar: "هيئة السياحة السعودية" },
  { url: "https://www.visitsaudi.com", en: "Visit Saudi", ar: "روح السعودية" },
  { url: "https://www.saudia.com", en: "Saudia Airlines", ar: "الخطوط السعودية" },
  { url: "https://www.haj.gov.sa", en: "Ministry of Hajj & Umrah", ar: "وزارة الحج والعمرة" },
  { url: "https://www.iata.org", en: "IATA", ar: "اياتا" },
  { url: "https://www.lonelyplanet.com", en: "Lonely Planet", ar: "لونلي بلانيت" },
];

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-background pt-20 pb-10 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-xl">
                <Plane className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-foreground">
                {language === 'en' ? 'Fly Safe' : 'فلاي سيف'}
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
              {t.footer.iata}
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <a href="https://facebook.com/flysafe.sa" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="https://twitter.com/flysafe_sa" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="https://instagram.com/flysafe.sa" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="https://youtube.com/@flysafe.sa" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">{t.footer.cols.links}</h4>
            <ul className="space-y-3">
              {(['home', 'services', 'destinations', 'faq', 'contact'] as const).map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {t.nav[link]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">{t.footer.cols.services}</h4>
            <ul className="space-y-3">
              {t.services.items.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">{t.footer.cols.partners}</h4>
            <ul className="space-y-3">
              {partnerLinks.map((partner, i) => (
                <li key={i}>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {language === 'ar' ? partner.ar : partner.en}
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Contact row */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 pb-8 border-b border-border/50 text-muted-foreground text-sm">
          <span dir="ltr">{t.contact.info.phone}</span>
          <span className="hidden md:block">·</span>
          <span>{t.contact.info.email}</span>
          <span className="hidden md:block">·</span>
          <span>{t.contact.info.address}</span>
        </div>

        <div className="text-center md:flex md:justify-between md:items-center">
          <p className="text-muted-foreground text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
