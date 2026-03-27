import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';

const saudiImages = [
  // AlUla – desert sandstone canyons
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80",
  // Jeddah – Red Sea waterfront resort
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
  // Abha – misty green mountain peaks
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  // Riyadh – modern city skyline
  "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
  // NEOM – futuristic architecture
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
];

const intImages = [
  "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80",
  "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80",
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80",
];

export function Destinations() {
  const { t, dir } = useLanguage();

  const DestinationCard = ({
    dest,
    img,
  }: {
    dest: { title: string; desc: string; url: string };
    img: string;
  }) => (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative h-[350px] rounded-2xl overflow-hidden"
    >
      <img
        src={img}
        alt={`${dest.title} - ${dest.desc}`}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-white mb-1">{dest.title}</h3>
        <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {dest.desc}
        </p>
        <a
          href={dest.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:text-primary/80"
        >
          {t.destinations.exploreBtn}
          {dir === 'rtl' ? (
            <ArrowLeft className="w-4 h-4" />
          ) : (
            <ArrowRight className="w-4 h-4" />
          )}
        </a>
      </div>
    </motion.div>
  );

  return (
    <section id="destinations" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {t.destinations.title}
            </h2>
            <p className="text-muted-foreground text-lg">{t.destinations.subtitle}</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-primary mb-6">{t.destinations.saudiLabel}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {t.destinations.saudi.map((dest, i) => (
            <DestinationCard key={`saudi-${i}`} dest={dest} img={saudiImages[i]} />
          ))}
        </div>

        <h3 className="text-xl font-bold text-primary mb-6">{t.destinations.intlLabel}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.destinations.international.map((dest, i) => (
            <DestinationCard key={`int-${i}`} dest={dest} img={intImages[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
