'use client';

import { useRef, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2, inView: boolean) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!inView) return;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      countRef.current = Math.floor(startValue + (end - startValue) * eased);
      setCount(countRef.current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, inView]);

  return count;
}

// Single stat component with animation
function AnimatedStat({ 
  number, 
  label, 
  index, 
  inView 
}: { 
  number: string; 
  label: string; 
  index: number;
  inView: boolean;
}) {
  // Parse the number to extract numeric value and suffix
  const numericMatch = number.match(/^([\d,]+\.?\d*)/);
  const numericValue = numericMatch ? parseFloat(numericMatch[1].replace(/,/g, '')) : 0;
  const suffix = number.replace(/^[\d,]+\.?\d*/, '');
  
  const animatedValue = useAnimatedCounter(numericValue, 2, inView);
  
  // Format the number with commas
  const formattedNumber = animatedValue.toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="text-center group"
    >
      <motion.div 
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
        initial={{ scale: 0.5 }}
        animate={inView ? { scale: 1 } : { scale: 0.5 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15 + 0.3,
          ease: [0.34, 1.56, 0.64, 1] // Spring-like bounce
        }}
      >
        {formattedNumber}{suffix}
      </motion.div>
      <motion.div 
        className="text-slate-400 text-lg"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.4,
          delay: index * 0.15 + 0.5
        }}
      >
        {label}
      </motion.div>
      
      {/* Subtle glow on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 rounded-xl -z-10"
        whileHover={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export default function StatsSection() {
  const t = useTranslations('stats');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: '15+', label: t('yearsExperience') },
    { number: '10,000+', label: t('activeUsers') },
    { number: '99.9%', label: t('uptime') },
    { number: '5', label: t('countries') }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 px-6 bg-slate-900/50 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <AnimatedStat
              key={idx}
              number={stat.number}
              label={stat.label}
              index={idx}
              inView={isInView}
            />
          ))}
        </div>
      </div>

      {/* Bottom line decoration */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
        initial={{ width: 0 }}
        animate={isInView ? { width: '80%' } : { width: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </section>
  );
}
