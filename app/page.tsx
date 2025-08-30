import Hero from "../components/Hero";
import PortfolioRail from "../components/PortfolioRail";
import Testimonials from "../components/Testimonials";
import ConsultationBanner from "../components/ConsultationBanner";

export default function Home() {
  return (
    <section>
      <Hero />
      <PortfolioRail />
      <Testimonials />
      <ConsultationBanner />
    </section>
  );
}
