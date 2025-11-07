'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const t = useTranslations('cta');
  const locale = useLocale();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      setMousePosition({ x, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
            asChild
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('schedule')}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-700 text-slate-200 hover:bg-slate-800 px-10 py-7 text-xl rounded-xl backdrop-blur-sm"
            asChild
          >
            <a href={mailtoLink}>{t('email')}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
