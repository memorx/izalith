'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const t = useTranslations('cta');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      setMousePosition({ x, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
        style={{
          transform: `translate(-50%, -50%) scale(${
            1 + mousePosition.x * 0.1
          })`,
          transition: 'transform 0.5s ease-out'
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {t('title')}
        </h2>
        <p className="text-2xl text-slate-300 mb-12 leading-relaxed">
          {t('subtitle')}
        </p>
        <div className="flex gap-6 justify-center flex-wrap">
          <Button
            size="lg"
            className="bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-7 text-xl rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105"
          >
            {t('schedule')}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-700 text-slate-200 hover:bg-slate-800 px-10 py-7 text-xl rounded-xl backdrop-blur-sm"
          >
            {t('email')}
          </Button>
        </div>
      </div>
    </section>
  );
}
