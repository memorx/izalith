'use client';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="py-12 px-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto text-center text-slate-500">
        <p className="mb-4">{t('copyright')}</p>
        <p className="text-sm">{t('location')}</p>
      </div>
    </footer>
  );
}
