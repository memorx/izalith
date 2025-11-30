'use client';

import { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.3
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

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export default function TechStackSection() {
  const t = useTranslations('techStack');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const technologies = [
    'React',
    'Node.js',
    'TypeScript',
    'n8n',
    'OpenAI',
    'PostgreSQL',
    'GCP',
    'Azure',
    'Telegram',
    'WhatsApp',
    'Render',
    'Docker'
  ];

  return (
    <section className="py-32 px-6 bg-slate-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,189,248,0.05)_0%,transparent_50%)]" />
      
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto relative"
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

        {/* Tech grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <div
                className="relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-500" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>

                {/* Tech name */}
                <span className="relative text-slate-300 font-medium text-lg group-hover:text-white transition-colors duration-300">
                  {tech}
                </span>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-3/4 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </motion.div>
    </section>
  );
}
