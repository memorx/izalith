'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

export default function CTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const t = useTranslations('cta');
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // WhatsApp link with bilingual message
  const getWhatsAppLink = () => {
    const phoneNumber = '524432182586';
    const messages: Record<string, string> = {
      es: 'Hola, me gustaría agendar una consultoría gratuita para discutir cómo Izalith puede ayudar a transformar mi negocio con IA y automatización.',
      en: "Hi, I'd like to schedule a free consultation to discuss how Izalith can help transform my business with AI and automation."
    };
    const message = locale === 'es' ? messages.es : messages.en;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  // Email link
  const emailAddress = 'guillermo@izalith.cc';
  const emailSubject =
    locale === 'es'
      ? 'Consulta sobre servicios de Izalith'
      : 'Inquiry about Izalith services';
  const emailBody =
    locale === 'es'
      ? 'Hola Guillermo,\n\nMe gustaría saber más sobre los servicios de Izalith.\n\n'
      : 'Hi Guillermo,\n\nI would like to learn more about Izalith services.\n\n';
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[100px]"
        style={{
          x: '-50%',
          y: '-50%'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          opacity: [0.08, 0.15, 0.08]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -20, 0],
          opacity: [0.05, 0.12, 0.05]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4
        }}
      />

      {/* Interactive glow that follows mouse */}
      <div
        className="absolute w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"
        style={{
          left: `calc(50% + ${mousePosition.x * 100}px)`,
          top: `calc(50% + ${mousePosition.y * 50}px)`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.5s ease-out, top 0.5s ease-out'
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          {t('title')}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-2xl text-slate-300 mb-12 leading-relaxed"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center flex-wrap"
        >
          <Button
            size="lg"
            className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-7 text-xl rounded-xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
            asChild
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative">{t('schedule')}</span>
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group border-slate-700 text-slate-200 hover:bg-slate-800/50 hover:border-slate-600 px-10 py-7 text-xl rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href={mailtoLink}>{t('email')}</a>
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="mt-16 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-cyan-500/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
