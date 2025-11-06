'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PortfolioHighlights() {
  const t = useTranslations('portfolio');
  const locale = useLocale();

  const projects = [
    {
      title: t('subastas.title'),
      subtitle: t('subastas.subtitle'),
      description: t('subastas.description'),
      tech: t('subastas.tech'),
      url: 'https://subastalasilla.com',
      metrics: ['1K+ Concurrent Users', 'Zero Downtime', '<200ms Latency']
    },
    {
      title: t('madeByHumans.title'),
      subtitle: t('madeByHumans.subtitle'),
      description: t('madeByHumans.description'),
      tech: t('madeByHumans.tech'),
      metrics: ['10K+ Active Users', '95%+ Accuracy', 'Multi-channel']
    },
    {
      title: t('wenco.title'),
      subtitle: t('wenco.subtitle'),
      description: t('wenco.description'),
      tech: t('wenco.tech'),
      metrics: ['99.9% Uptime', '15+ Engineers Led', 'Global Scale']
    }
  ];

  return (
    <section id="portfolio" className="py-32 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6 bg-linear-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
          {t('title')}
        </h2>
        <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-cyan-400 text-sm">{project.subtitle}</p>
                  </div>
                  {project.url && (
                    <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  )}
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-cyan-400 border border-slate-700"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="text-sm text-slate-500 font-mono">
                  {project.tech}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href={`/${locale}/portfolio`}>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-slate-200 hover:bg-slate-800 px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              {t('viewAll')}
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
