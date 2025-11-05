'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

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
      style={{ perspective: '1000px' }}
    >
      {/* Floating gradient orbs with 3D effect */}
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${
            mousePosition.y * 30
          }px) translateZ(${mousePosition.x * 20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${
            mousePosition.y * -30
          }px) translateZ(${mousePosition.x * -20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div
          className="inline-block mb-6"
          style={{
            transform: `rotateX(${mousePosition.y * 5}deg) rotateY(${
              mousePosition.x * 5
            }deg)`,
            transition: 'transform 0.3s ease-out',
            transformStyle: 'preserve-3d'
          }}
        >
          <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Izalith
          </h1>
        </div>

        <div
          style={{
            transform: `translateZ(${mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <p className="text-2xl md:text-3xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Forward-Deployed Engineering
            <span className="block text-slate-400 text-xl mt-2">
              AI Agents • Automation • Integration
            </span>
          </p>
        </div>

        <div
          className="flex gap-4 justify-center items-center flex-wrap"
          style={{
            transform: `translateZ(${mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 hover:scale-105"
            onClick={scrollToServices}
          >
            Explore Services
            <ArrowRight className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-700 text-slate-200 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
          >
            View Projects
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </div>
      </div>
    </section>
  );
}
