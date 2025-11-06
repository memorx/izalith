'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Code2,
  Zap,
  BarChart3,
  ShoppingCart,
  Rocket,
  CheckCircle2,
  Layers,
  Globe,
  Users
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

export default function WebDevelopmentPage() {
  const t = useTranslations('services.webDevelopment');

  const useCases = [
    {
      icon: Zap,
      title: t('useCases.case1.title'),
      description: t('useCases.case1.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: BarChart3,
      title: t('useCases.case2.title'),
      description: t('useCases.case2.description'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ShoppingCart,
      title: t('useCases.case3.title'),
      description: t('useCases.case3.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: t('useCases.case4.title'),
      description: t('useCases.case4.description'),
      color: 'from-orange-500 to-red-500'
    }
  ];

  const techStack = [
    {
      title: t('techStack.frontend'),
      items: t.raw('techStack.frontendItems') as string[]
    },
    {
      title: t('techStack.backend'),
      items: t.raw('techStack.backendItems') as string[]
    },
    {
      title: t('techStack.realtime'),
      items: t.raw('techStack.realtimeItems') as string[]
    },
    {
      title: t('techStack.infrastructure'),
      items: t.raw('techStack.infrastructureItems') as string[]
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

  const project1Metrics = t.raw('realProjects.project1.metrics') as string[];
  const project2Metrics = t.raw('realProjects.project2.metrics') as string[];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-2 mb-8">
              <Code2 className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-semibold">
                {t('hero.title')}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {t('hero.subtitle')}
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg"
            >
              {t('cta.button')}
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
                <h3 className="text-lg font-bold mb-4 text-pink-400">
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
                className="flex gap-6 items-start bg-slate-800/30 border border-slate-700 rounded-xl p-6 hover:border-pink-500/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold text-xl">
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
            <p className="text-xl text-slate-400">
              15+ years of production systems
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Featured Projects - Wenco & Subastas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 - Wenco */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Layers className="w-8 h-8 text-pink-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      {t('realProjects.project1.name')}
                    </h3>
                    <p className="text-slate-300 mb-6">
                      {t('realProjects.project1.description')}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {(t.raw('realProjects.project1.metrics') as string[]).map(
                    (metric, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-pink-400">{metric}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              {/* Project 2 - Subastas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-2xl p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Globe className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">
                      {t('realProjects.project2.name')}
                    </h3>
                    <p className="text-slate-300 mb-6">
                      {t('realProjects.project2.description')}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {(t.raw('realProjects.project2.metrics') as string[]).map(
                    (metric, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-cyan-400">{metric}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            </div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Project 3 - Disney */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <ShoppingCart className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      {t('realProjects.project3.name')}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('realProjects.project3.description')}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(t.raw('realProjects.project3.metrics') as string[]).map(
                    (metric, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-blue-400">{metric}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              {/* Project 4 - MyRichmond */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Globe className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      {t('realProjects.project4.name')}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('realProjects.project4.description')}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(t.raw('realProjects.project4.metrics') as string[]).map(
                    (metric, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-green-400">{metric}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              {/* Project 5 - Central 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Users className="w-6 h-6 text-orange-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      {t('realProjects.project5.name')}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('realProjects.project5.description')}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(t.raw('realProjects.project5.metrics') as string[]).map(
                    (metric, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-orange-400">{metric}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              {/* Project 6 - Sage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Rocket className="w-6 h-6 text-purple-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      {t('realProjects.project6.name')}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('realProjects.project6.description')}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(t.raw('realProjects.project6.metrics') as string[]).map(
                    (metric, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-purple-400">{metric}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              {/* Project 7 - Radiant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      {t('realProjects.project7.name')}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('realProjects.project7.description')}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(t.raw('realProjects.project7.metrics') as string[]).map(
                    (metric, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-cyan-400">{metric}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              {/* Project 8 - Unity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-pink-500/30 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Zap className="w-6 h-6 text-pink-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      {t('realProjects.project8.name')}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('realProjects.project8.description')}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(t.raw('realProjects.project8.metrics') as string[]).map(
                    (metric, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-pink-400">{metric}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              {/* Project 9 - Concurso */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 border border-emerald-500/30 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      {t('realProjects.project9.name')}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('realProjects.project9.description')}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(t.raw('realProjects.project9.metrics') as string[]).map(
                    (metric, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-emerald-400">{metric}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              {/* Project 10 - PEMT */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="bg-gradient-to-br from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Globe className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      {t('realProjects.project10.name')}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('realProjects.project10.description')}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(t.raw('realProjects.project10.metrics') as string[]).map(
                    (metric, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-red-400">{metric}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>

              {/* Project 11 - Congreso */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-indigo-500/30 rounded-xl p-6"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Users className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold mb-2">
                      {t('realProjects.project11.name')}
                    </h3>
                    <p className="text-slate-300 text-sm mb-4">
                      {t('realProjects.project11.description')}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {(t.raw('realProjects.project11.metrics') as string[]).map(
                    (metric, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-indigo-400">{metric}</p>
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            </div>
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
            className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-12 text-center"
          >
            <Code2 className="w-16 h-16 text-pink-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              {t('cta.description')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg"
            >
              {t('cta.button')}
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
