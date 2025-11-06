'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Users,
  TrendingUp,
  Globe2,
  Rocket,
  CheckCircle2,
  Code2,
  Brain,
  Workflow,
  Users2
} from 'lucide-react';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  const t = useTranslations('about');

  const stats = [
    { value: '15+', label: t('hero.yearsLabel') },
    { value: '50+', label: t('hero.projectsLabel') },
    { value: '20+', label: t('hero.clientsLabel') }
  ];

  const values = [
    {
      icon: Sparkles,
      title: t('values.excellence.title'),
      description: t('values.excellence.description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users2,
      title: t('values.leadership.title'),
      description: t('values.leadership.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: t('values.results.title'),
      description: t('values.results.description'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: t('values.innovation.title'),
      description: t('values.innovation.description'),
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Globe2,
      title: t('values.global.title'),
      description: t('values.global.description'),
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const expertise = [
    {
      icon: Brain,
      title: t('expertise.aiEngineering.title'),
      items: t.raw('expertise.aiEngineering.items') as string[]
    },
    {
      icon: Code2,
      title: t('expertise.fullStack.title'),
      items: t.raw('expertise.fullStack.items') as string[]
    },
    {
      icon: Workflow,
      title: t('expertise.automation.title'),
      items: t.raw('expertise.automation.items') as string[]
    },
    {
      icon: Users,
      title: t('expertise.leadership.title'),
      items: t.raw('expertise.leadership.items') as string[]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
                >
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('mission.title')}
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              {t('mission.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              {t('story.title')}
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>{t('story.paragraph1')}</p>
              <p>{t('story.paragraph2')}</p>
              <p>{t('story.paragraph3')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('values.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('expertise.title')}
            </h2>
            <p className="text-xl text-slate-400">{t('expertise.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {item.items.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              {t('cta.description')}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg"
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
