import { motion } from 'framer-motion';
import { Plane, Building2, Car, Moon, MapPin, Globe2, Stamp, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const icons: Record<string, LucideIcon> = {
  flights: Plane,
  hotels: Building2,
  cars: Car,
  hajj: Moon,
  domestic: MapPin,
  international: Globe2,
  visa: Stamp,
};

export function Services() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.services.subtitle}
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.services.items.map((service) => {
            const Icon = icons[service.id] ?? Globe2;

            return (
              <motion.a
                key={service.id}
                href="#contact"
                variants={item}
                className="bg-card border border-border/50 rounded-2xl p-8 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 group cursor-pointer block"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
