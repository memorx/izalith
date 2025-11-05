import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TechStackSection from '@/components/home/TechStackSection';
import CTASection from '@/components/shared/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <CTASection />
      <Footer />
    </main>
  );
}
