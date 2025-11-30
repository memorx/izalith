'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Firefly type
interface Firefly {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

// Fireflies component - magical glowing particles that fade in/out
function Fireflies() {
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  const fireflyIdRef = useRef(0);

  // Colors for fireflies - cyan/blue theme
  const colors = [
    'rgba(34, 211, 238, 0.8)',  // cyan-400
    'rgba(56, 189, 248, 0.8)',  // sky-400
    'rgba(96, 165, 250, 0.7)',  // blue-400
    'rgba(167, 139, 250, 0.6)', // violet-400
    'rgba(45, 212, 191, 0.7)',  // teal-400
  ];

  const createFirefly = useCallback((): Firefly => {
    fireflyIdRef.current += 1;
    return {
      id: fireflyIdRef.current,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2, // 2-6px
      duration: Math.random() * 3 + 2, // 2-5 seconds
      delay: Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }, []);

  // Initialize fireflies
  useEffect(() => {
    const initial = Array.from({ length: 25 }, () => createFirefly());
    setFireflies(initial);
  }, [createFirefly]);

  // Continuously spawn new fireflies
  useEffect(() => {
    const interval = setInterval(() => {
      setFireflies(prev => {
        // Remove old fireflies and add new ones
        const newFireflies = [...prev];
        
        // Add 1-3 new fireflies
        const numNew = Math.floor(Math.random() * 3) + 1;
        for (let i = 0; i < numNew; i++) {
          if (newFireflies.length < 40) { // Max 40 fireflies
            newFireflies.push(createFirefly());
          }
        }
        
        return newFireflies;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [createFirefly]);

  // Remove fireflies after they fade out
  const removeFirefly = (id: number) => {
    setFireflies(prev => prev.filter(f => f.id !== id));
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {fireflies.map((firefly) => (
          <motion.div
            key={firefly.id}
            className="absolute rounded-full"
            style={{
              left: `${firefly.x}%`,
              top: `${firefly.y}%`,
              width: firefly.size,
              height: firefly.size,
              backgroundColor: firefly.color,
              boxShadow: `0 0 ${firefly.size * 2}px ${firefly.size}px ${firefly.color}, 
                          0 0 ${firefly.size * 4}px ${firefly.size * 2}px ${firefly.color}`,
            }}
            initial={{ 
              opacity: 0, 
              scale: 0,
            }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1.2, 0],
              x: [0, (Math.random() - 0.5) * 30],
              y: [0, (Math.random() - 0.5) * 30 - 20], // Slight upward drift
            }}
            exit={{ 
              opacity: 0, 
              scale: 0 
            }}
            transition={{
              duration: firefly.duration,
              delay: firefly.delay,
              ease: 'easeInOut',
              times: [0, 0.2, 0.8, 1], // Quick fade in, hold, slow fade out
            }}
            onAnimationComplete={() => removeFirefly(firefly.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// Text reveal animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('hero');

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        {/* Grid pattern */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />

        {/* Radial gradient overlay for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.8)_70%)]" />

        {/* ✨ FIREFLIES ✨ */}
        <Fireflies />

        {/* Animated orbs - more subtle now that we have fireflies */}
        <motion.div
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.15))'
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.15))'
          }}
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1, 1.15, 1],
            x: [0, -25, 0],
            y: [0, 25, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.1))'
          }}
          animate={{
            opacity: [0.08, 0.18, 0.08],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4
          }}
        />

        {/* Subtle dots pattern with parallax */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
            transition: 'transform 0.6s ease-out'
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div
          variants={itemVariants}
          className="mb-6"
          style={{
            transform: `translateY(${mousePosition.y * -10}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight px-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
          style={{
            transform: `translateY(${mousePosition.y * -5}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <p className="text-2xl md:text-3xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg md:text-xl text-slate-400">
            {t('tagline')}
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={buttonVariants}
          className="flex gap-4 justify-center items-center flex-wrap mb-12"
        >
          <Button
            size="lg"
            className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 overflow-hidden"
            onClick={scrollToServices}
          >
            {/* Glow effect on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <span className="relative">{t('exploreServices')}</span>
            <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group border-slate-700 text-slate-200 hover:bg-slate-800/50 hover:border-slate-600 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="/portfolio">
              <span>{t('viewProjects')}</span>
            </Link>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            className="cursor-pointer p-2 rounded-full hover:bg-slate-800/50 transition-colors"
            onClick={scrollToServices}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-8 h-8 text-slate-400 hover:text-cyan-400 transition-colors" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
