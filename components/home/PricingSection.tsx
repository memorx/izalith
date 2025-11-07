'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

export default function PricingSection() {
  const t = useTranslations('pricing');
  const locale = useLocale();

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
    <section id="pricing" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6 bg-linear-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
          {t('title')}
        </h2>
        <p className="text-xl text-slate-400 text-center mb-4 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <p className="text-sm text-slate-500 text-center mb-16">{t('note')}</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, idx) => (
            <Card
              key={idx}
              className={`relative bg-slate-900/50 backdrop-blur-sm border-slate-800 transition-all duration-300 hover:scale-105 ${
                tier.popular
                  ? 'border-cyan-500/50 shadow-xl shadow-cyan-500/10'
                  : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-1 rounded-full flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-bold">
                      {t('professional.badge')}
                    </span>
                  </div>
                </div>
              )}
              <CardHeader>
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
                  <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {tier.monthly}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-300"
                    >
                      <Check className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-slate-800/50 rounded-lg mb-6">
                  <div className="text-sm text-slate-400 mb-1">
                    {t('perfectFor')}
                  </div>
                  <div className="text-slate-200">{tier.ideal}</div>
                </div>
                <Button
                  className={`w-full ${
                    tier.popular
                      ? 'bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700'
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
          ))}
        </div>
      </div>
    </section>
  );
}
