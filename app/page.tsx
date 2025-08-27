import Hero from "../components/Hero";
import HeroCarousel from "../components/HeroCarousel";
import Testimonials from "../components/Testimonials";
import ContactBanner from "../components/ContactBanner";

export default function Home() {
  return (
    <section>
      <Hero />
      <HeroCarousel />
      <Testimonials />
      <ContactBanner />
    </section>
  );
}
