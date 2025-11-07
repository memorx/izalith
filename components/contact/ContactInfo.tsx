'use client';

import { useTranslations } from 'next-intl';
import { Mail, MessageCircle, MapPin, Linkedin, Github } from 'lucide-react';

export default function ContactInfo() {
  const t = useTranslations('contact.info');

  return (
    <div className="space-y-8">
      {/* Locations */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-blue-400" />
          {t('locations.title')}
        </h3>
        <div className="space-y-2 text-zinc-400">
          <p>📍 {t('locations.morelia')}</p>
          <p>📍 {t('locations.vancouver')}</p>
        </div>
      </div>

      {/* Email */}
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <Mail className="w-5 h-5 text-green-400" />
          {t('email.title')}
        </h3>
        <p className="text-sm text-zinc-400 mb-2">{t('email.description')}</p>
        <a
          href="mailto:guillermo@izalith.cc"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          guillermo@izalith.cc
        </a>
      </div>

      {/* WhatsApp */}
      <div>
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <MessageCircle className="w-5 h-5 text-green-500" />
          {t('whatsapp.title')}
        </h3>
        <p className="text-sm text-zinc-400 mb-2">
          {t('whatsapp.description')}
        </p>
        <a
          href="https://wa.me/524432182586"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          +52 443 218 2586
        </a>
      </div>

      {/* Social */}
      <div>
        <h3 className="text-xl font-semibold mb-4">{t('social.title')}</h3>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/guillermomanuelsanchez/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-800 hover:bg-blue-600 rounded-lg transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/memorx"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-zinc-800 hover:bg-purple-600 rounded-lg transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
