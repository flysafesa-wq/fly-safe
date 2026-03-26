import { SEO } from '@/components/seo';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Destinations } from '@/components/destinations';
import { Stats } from '@/components/stats';
import { FAQ } from '@/components/faq';
import { Partners } from '@/components/partners';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Destinations />
        <Stats />
        <FAQ />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
