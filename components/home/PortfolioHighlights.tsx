'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from '@/src/i18n/routing';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
  hidden: { opacity: 0, y: 50, scale: 0.95 },
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

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.6
    }
  }
};

export default function PortfolioHighlights() {
  const t = useTranslations('portfolio');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: t('subastas.title'),
      subtitle: t('subastas.subtitle'),
      description: t('subastas.description'),
      tech: t('subastas.tech'),
      url: 'https://subastalasilla.com',
      metrics: ['1K+ Concurrent Users', 'Zero Downtime', '<200ms Latency'],
      isExternal: true
    },
    {
      title: t('madeByHumans.title'),
      subtitle: t('madeByHumans.subtitle'),
      description: t('madeByHumans.description'),
      tech: t('madeByHumans.tech'),
      metrics: ['10K+ Active Users', '95%+ Accuracy', 'Multi-channel'],
      isExternal: false
    },
    {
      title: t('wenco.title'),
      subtitle: t('wenco.subtitle'),
      description: t('wenco.description'),
      tech: t('wenco.tech'),
      metrics: ['99.9% Uptime', '15+ Engineers Led', 'Global Scale'],
      isExternal: false
    }
  ];

  return (
    <section id="portfolio" className="py-32 px-6 bg-slate-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03)_0%,transparent_50%)]" />
      
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, idx) => {
            const cardContent = (
              <Card className="group bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer h-full overflow-hidden">
                {/* Top accent line */}
                <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 mb-1 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-cyan-400 text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                    {project.isExternal && (
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                      </motion.div>
                    )}
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors">
                    {project.description}
                  </p>

                  {/* Metrics with stagger animation */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.metrics.map((metric, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-cyan-400 border border-slate-700 group-hover:border-cyan-500/30 group-hover:bg-slate-800 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {metric}
                      </motion.span>
                    ))}
                  </div>

                  <div className="text-sm text-slate-500 font-mono group-hover:text-slate-400 transition-colors">
                    {project.tech}
                  </div>
                </CardContent>
              </Card>
            );

            return (
              <motion.div key={idx} variants={cardVariants}>
                {project.isExternal && project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link href="/portfolio" className="block h-full">
                    {cardContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* View all button */}
        <motion.div variants={buttonVariants} className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="group border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600 px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300"
            asChild
          >
            <Link href="/portfolio">
              <span>{t('viewAll')}</span>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
