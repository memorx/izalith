'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Workflow,
  Mail,
  Database,
  Bell,
  CheckCircle2,
  Zap,
  GitBranch,
  Clock
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

export default function AutomationPage() {
  const t = useTranslations('services.automation');
  const locale = useLocale();

  // WhatsApp link for Automation service
  const getWhatsAppLink = () => {
    const phoneNumber = '524432182586';
    const messages: Record<string, string> = {
      es: 'Hola, estoy interesado en los servicios de Automatización de Izalith. Me gustaría discutir cómo pueden ayudar a optimizar los procesos de mi negocio.',
      en: "Hi, I'm interested in Izalith's Automation services. I'd like to discuss how you can help optimize my business processes."
    };
    const message = locale === 'es' ? messages.es : messages.en;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const useCases = [
    {
      icon: Mail,
      title: t('useCases.case1.title'),
      description: t('useCases.case1.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: t('useCases.case2.title'),
      description: t('useCases.case2.description'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: GitBranch,
      title: t('useCases.case3.title'),
      description: t('useCases.case3.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Bell,
      title: t('useCases.case4.title'),
      description: t('useCases.case4.description'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  const techStack = [
    {
      title: t('techStack.orchestration'),
      items: t.raw('techStack.orchestrationItems') as string[]
    },
    {
      title: t('techStack.integrations'),
      items: t.raw('techStack.integrationsItems') as string[]
    },
    {
      title: t('techStack.ai'),
      items: t.raw('techStack.aiItems') as string[]
    },
    {
      title: t('techStack.monitoring'),
      items: t.raw('techStack.monitoringItems') as string[]
    }
  ];

  const process = [
    {
      title: t('process.step1.title'),
      description: t('process.step1.description')
    },
    {
      title: t('process.step2.title'),
      description: t('process.step2.description')
    },
    {
      title: t('process.step3.title'),
      description: t('process.step3.description')
    },
    {
      title: t('process.step4.title'),
      description: t('process.step4.description')
    },
    {
      title: t('process.step5.title'),
      description: t('process.step5.description')
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-2 mb-8">
              <Workflow className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">
                {t('hero.title')}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {t('hero.subtitle')}
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('cta.button')}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('useCases.title')}
            </h2>
            <p className="text-xl text-slate-400">{t('useCases.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition-all duration-300 group"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('techStack.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold mb-4 text-emerald-400">
                  {stack.title}
                </h3>
                <ul className="space-y-2">
                  {stack.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-slate-300 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('process.title')}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('realProjects.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Project 1 - Subastas La Silla */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <Workflow className="w-8 h-8 text-emerald-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    {t('realProjects.project1.name')}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {t('realProjects.project1.description')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {(t.raw('realProjects.project1.metrics') as string[]).map(
                  (metric, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-emerald-400">{metric}</p>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Project 2 - n8n Templates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <Database className="w-8 h-8 text-cyan-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    {t('realProjects.project2.name')}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {t('realProjects.project2.description')}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {(t.raw('realProjects.project2.metrics') as string[]).map(
                  (metric, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-cyan-400">{metric}</p>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-12 text-center"
          >
            <Zap className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              {t('cta.description')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('cta.button')}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
