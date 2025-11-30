'use client';

import { useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';
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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
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

export default function PricingSection() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // WhatsApp messages for each tier
  const getWhatsAppLink = (tierKey: string) => {
    const phoneNumber = '524432182586';

    const messages: Record<string, { es: string; en: string }> = {
      starter: {
        es: 'Hola, estoy interesado en el plan Starter de AI Agents ($8,000-$10,000 MXN setup). Me gustaría agendar una consultoría gratuita para discutir cómo pueden ayudar a mi negocio.',
        en: "Hi, I'm interested in the Starter AI Agents plan ($8,000-$10,000 MXN setup). I'd like to schedule a free consultation to discuss how you can help my business."
      },
      professional: {
        es: 'Hola, estoy interesado en el plan Professional de AI Agents ($12,000-$15,000 MXN setup). Quiero escalar las operaciones de mi empresa con multi-channel AI. ¿Cuándo podemos platicar?',
        en: "Hi, I'm interested in the Professional AI Agents plan ($12,000-$15,000 MXN setup). I want to scale my company's operations with multi-channel AI. When can we talk?"
      },
      enterprise: {
        es: 'Hola, necesito una cotización Enterprise personalizada para AI Agents con integraciones custom y conversaciones ilimitadas. ¿Podemos agendar una llamada?',
        en: 'Hi, I need a custom Enterprise quote for AI Agents with custom integrations and unlimited conversations. Can we schedule a call?'
      }
    };

    const message =
      locale === 'es' ? messages[tierKey].es : messages[tierKey].en;
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const tiers = [
    {
      name: t('starter.name'),
      setup: t('starter.setup'),
      monthly: t('starter.monthly'),
      features: [
        t('starter.feature1'),
        t('starter.feature2'),
        t('starter.feature3'),
        t('starter.feature4')
      ],
      ideal: t('starter.ideal'),
      popular: false,
      tierKey: 'starter'
    },
    {
      name: t('professional.name'),
      setup: t('professional.setup'),
      monthly: t('professional.monthly'),
      features: [
        t('professional.feature1'),
        t('professional.feature2'),
        t('professional.feature3'),
        t('professional.feature4'),
        t('professional.feature5')
      ],
      ideal: t('professional.ideal'),
      popular: true,
      tierKey: 'professional'
    },
    {
      name: t('enterprise.name'),
      setup: t('enterprise.setup'),
      monthly: t('enterprise.monthly'),
      features: [
        t('enterprise.feature1'),
        t('enterprise.feature2'),
        t('enterprise.feature3'),
        t('enterprise.feature4'),
        t('enterprise.feature5')
      ],
      ideal: t('enterprise.ideal'),
      popular: false,
      tierKey: 'enterprise'
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(147,51,234,0.05)_0%,transparent_50%)]" />
      
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
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-4">
            {t('subtitle')}
          </p>
          <p className="text-sm text-slate-500">{t('note')}</p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Card
                className={`relative bg-slate-900/50 backdrop-blur-sm border-slate-800 transition-all duration-500 h-full overflow-hidden ${
                  tier.popular
                    ? 'border-cyan-500/50 shadow-xl shadow-cyan-500/10'
                    : 'hover:border-slate-700'
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                    initial={{ y: -20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                    transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
                  >
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-1 rounded-full flex items-center gap-2 shadow-lg shadow-cyan-500/30">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                      <span className="text-sm font-bold">
                        {t('professional.badge')}
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Top accent for popular */}
                {tier.popular && (
                  <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
                )}

                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl text-slate-100">
                    {tier.name}
                  </CardTitle>
                  <div className="mt-4">
                    <div className="text-sm text-slate-400">
                      {t('setupLabel')}
                    </div>
                    <div className="text-2xl font-bold text-slate-200 mb-2">
                      {tier.setup}
                    </div>
                    <div className="text-sm text-slate-400">
                      {t('monthlyLabel')}
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {tier.monthly}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-slate-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Check className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="p-4 bg-slate-800/50 rounded-lg mb-6 border border-slate-700/50">
                    <div className="text-sm text-slate-400 mb-1">
                      {t('perfectFor')}
                    </div>
                    <div className="text-slate-200">{tier.ideal}</div>
                  </div>

                  <Button
                    className={`w-full transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40'
                        : 'bg-slate-800 hover:bg-slate-700'
                    }`}
                    asChild
                  >
                    <a
                      href={getWhatsAppLink(tier.tierKey)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {tier.tierKey === 'enterprise'
                        ? t('contactQuote')
                        : t('getStarted')}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
