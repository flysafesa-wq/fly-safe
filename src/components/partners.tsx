import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

const partnerLinks = [
  "https://www.sta.gov.sa",
  "https://www.visitsaudi.com",
  "https://www.tripadvisor.com",
  "https://www.booking.com",
  "https://www.skyscanner.net",
  "https://www.iata.org",
  "https://www.saudia.com",
  "https://www.flyadeal.com",
  "https://www.almosafer.com",
  "https://www.lonelyplanet.com",
  "https://www.haj.gov.sa",
  "https://maps.google.com"
];

export function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            {t.partners.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.partners.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {t.partners.items.map((partner, i) => (
            <motion.a
              key={i}
              href={partnerLinks[i]}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex flex-col p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">
                {partner.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
