'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Users2,
  Shield,
  GitBranch,
  FileCheck,
  CheckCircle2,
  Briefcase,
  Target,
  Award
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

export default function ConsultingPage() {
  const t = useTranslations('services.consulting');
  const locale = useLocale();

  // WhatsApp link for Consulting service
  const getWhatsAppLink = () => {
    const phoneNumber = '524432182586';
    const messages: Record<string, string> = {
      es: 'Hola, estoy interesado en los servicios de Consultoría de Izalith. Me gustaría discutir cómo pueden ayudar a mi empresa con liderazgo técnico y transformación digital.',
      en: "Hi, I'm interested in Izalith's Consulting services. I'd like to discuss how you can help my company with technical leadership and digital transformation."
    };
    const message = locale === 'es' ? messages.es : messages.en;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const services = [
    {
      icon: Users2,
      title: t('useCases.case1.title'),
      description: t('useCases.case1.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
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
      icon: FileCheck,
      title: t('useCases.case4.title'),
      description: t('useCases.case4.description'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  const experience = [
    {
      title: t('experience.companies'),
      items: t.raw('experience.companiesItems') as string[]
    },
    {
      title: t('experience.leadership'),
      items: t.raw('experience.leadershipItems') as string[]
    },
    {
      title: t('experience.technical'),
      items: t.raw('experience.technicalItems') as string[]
    },
    {
      title: t('experience.global'),
      items: t.raw('experience.globalItems') as string[]
    }
  ];

  const engagementModels = [
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
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-2 mb-8">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">
                {t('hero.title')}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('hero.subtitle')}
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
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

      {/* Services Section */}
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
            {services.map((service, index) => {
              const Icon = service.icon;
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
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('experience.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold mb-4 text-cyan-400">
                  {exp.title}
                </h3>
                <ul className="space-y-2">
                  {exp.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-slate-300 text-sm flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engagementModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{model.title}</h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {model.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Highlight */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <Award className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
                <p className="text-slate-400 text-sm">Years Experience</p>
              </div>
              <div>
                <Users2 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
                <p className="text-slate-400 text-sm">Engineers Managed</p>
              </div>
              <div>
                <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  50+
                </div>
                <p className="text-slate-400 text-sm">Projects Delivered</p>
              </div>
              <div>
                <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-4xl font-bold text-green-400 mb-2">
                  20+
                </div>
                <p className="text-slate-400 text-sm">Developers Mentored</p>
              </div>
            </div>
          </motion.div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 - EducarUno */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <Users2 className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {t('realProjects.project1.name')}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6">
                    {t('realProjects.project1.description')}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {(t.raw('realProjects.project1.metrics') as string[]).map(
                  (metric, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-blue-400">{metric}</p>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Project 2 - AI Course */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <Target className="w-8 h-8 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {t('realProjects.project2.name')}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6">
                    {t('realProjects.project2.description')}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {(t.raw('realProjects.project2.metrics') as string[]).map(
                  (metric, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-purple-400">{metric}</p>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Project 3 - Government Canada */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <Briefcase className="w-8 h-8 text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {t('realProjects.project3.name')}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6">
                    {t('realProjects.project3.description')}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {(t.raw('realProjects.project3.metrics') as string[]).map(
                  (metric, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-green-400">{metric}</p>
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
            className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-12 text-center"
          >
            <Briefcase className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              {t('cta.description')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
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
