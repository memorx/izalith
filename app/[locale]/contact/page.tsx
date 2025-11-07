'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Footer from '@/components/layout/Footer';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto mb-4">
              {t('hero.subtitle')}
            </p>
            <p className="text-sm text-blue-400">⏱️ {t('hero.responseTime')}</p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800"
            >
              <h2 className="text-2xl font-bold mb-6">{t('cta.title')}</h2>
              <p className="text-zinc-400 mb-8">{t('cta.description')}</p>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800"
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
