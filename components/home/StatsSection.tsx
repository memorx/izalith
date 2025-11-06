'use client';

import { useTranslations } from 'next-intl';

export default function StatsSection() {
  const t = useTranslations('stats');

  const stats = [
    { number: '15+', label: t('yearsExperience') },
    { number: '10,000+', label: t('activeUsers') },
    { number: '99.9%', label: t('uptime') },
    { number: '5', label: t('countries') }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
