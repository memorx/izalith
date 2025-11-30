'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/src/i18n/routing';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, Zap, Database, Code } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export default function ServicesSection() {
  const t = useTranslations('services');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: MessageSquare,
      title: t('aiAgents.title'),
      description: t('aiAgents.description'),
      color: 'from-blue-500 to-cyan-500',
      href: '/services/ai-agents'
    },
    {
      icon: Zap,
      title: t('automation.title'),
      description: t('automation.description'),
      color: 'from-cyan-500 to-teal-500',
      href: '/services/automation'
    },
    {
      icon: Database,
      title: t('dataIntegration.title'),
      description: t('dataIntegration.description'),
      color: 'from-teal-500 to-emerald-500',
      href: '/services/consulting'
    },
    {
      icon: Code,
      title: t('fullStack.title'),
      description: t('fullStack.description'),
      color: 'from-emerald-500 to-green-500',
      href: '/services/web-development'
    }
  ];

  return (
    <section id="services" className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.03)_0%,transparent_60%)]" />
      
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section header */}
        <motion.div variants={titleVariants} className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Link href={service.href}>
                <Card
                  className="group relative bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-slate-700 transition-all duration-500 cursor-pointer overflow-hidden h-full"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(0)'
                  }}
                  onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    card.style.transform = `perspective(1000px) rotateY(${
                      x * 12
                    }deg) rotateX(${-y * 12}deg) translateZ(20px)`;
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = 'translateZ(0)';
                  }}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <CardContent className="p-8 relative z-10">
                    {/* Icon with pulse animation on hover */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-xl`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-slate-100 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {service.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      <span className="text-sm font-medium mr-2">Learn more</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
