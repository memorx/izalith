// components/home/HeroSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('hero');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid más visible */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `translate(${mousePosition.x * 15}px, ${
              mousePosition.y * 15
            }px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />

        {/* Floating orbs - SUAVE como luces de navidad */}
        <div
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-3xl animate-glow-1"
          style={{
            background:
              'radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.2))',
            opacity: 0.2
          }}
        />
        <div
          className="absolute bottom-1/3 -right-20 w-[500px] h-[500px] rounded-full blur-3xl animate-glow-2"
          style={{
            background:
              'radial-gradient(circle, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.2))',
            opacity: 0.25
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl animate-glow-3"
          style={{
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle, rgba(147, 51, 234, 0.25), rgba(236, 72, 153, 0.15))',
            opacity: 0.15
          }}
        />

        {/* Dots pattern - más visible */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(56, 189, 248, 0.4) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x * 8}px, ${
              mousePosition.y * 8
            }px)`,
            transition: 'transform 0.6s ease-out'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div
          className="mb-8"
          style={{
            transform: `translateY(${mousePosition.y * -10}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight px-4">
            {t('title')}
          </h1>
        </div>

        <div
          className="mb-12"
          style={{
            transform: `translateY(${mousePosition.y * -5}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <p className="text-2xl md:text-3xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
          <p className="text-lg md:text-xl text-slate-400 mb-8">
            {t('tagline')}
          </p>
        </div>

        <div className="flex gap-4 justify-center items-center flex-wrap mb-12">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            onClick={scrollToServices}
          >
            <span>{t('exploreServices')}</span>
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-700 text-slate-200 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="/portfolio">{t('viewProjects')}</Link>
          </Button>
        </div>

        {/* Flecha después de los botones */}
        <div className="flex justify-center">
          <div
            className="animate-bounce cursor-pointer"
            onClick={scrollToServices}
          >
            <ChevronDown className="w-8 h-8 text-slate-400 hover:text-cyan-400 transition-colors" />
          </div>
        </div>
      </div>

      {/* CSS Animations - SUAVES como luces de navidad */}
      <style jsx>{`
        @keyframes glow-1 {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes glow-2 {
          0%,
          100% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.45;
          }
        }

        @keyframes glow-3 {
          0%,
          100% {
            opacity: 0.15;
          }
          50% {
            opacity: 0.35;
          }
        }

        .animate-glow-1 {
          animation: glow-1 8s ease-in-out infinite;
        }

        .animate-glow-2 {
          animation: glow-2 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-glow-3 {
          animation: glow-3 12s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
