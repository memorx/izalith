// app/[locale]/page.tsx
import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import PortfolioHighlights from '@/components/home/PortfolioHighlights';
import PricingSection from '@/components/home/PricingSection';
import TechStackSection from '@/components/home/TechStackSection';
import CTASection from '@/components/shared/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioHighlights />
      <PricingSection />
      <TechStackSection />
      <CTASection />
      <Footer />
    </main>
  );
}
