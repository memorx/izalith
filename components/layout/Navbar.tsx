'use client';

import { useState } from 'react';
import { Link } from '@/src/i18n/routing';

import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    {
      name: t('services'),
      href: '#',
      submenu: [
        { name: t('aiAgents'), href: '/services/ai-agents' },
        { name: t('automation'), href: '/services/automation' },
        { name: t('webDevelopment'), href: '/services/web-development' },
        { name: t('consulting'), href: '/services/consulting' }
      ]
    },
    { name: t('portfolio'), href: '/portfolio' },
    { name: t('contact'), href: '/contact' }
  ];

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    const currentPath = window.location.pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Izalith
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>

                {/* Submenu for Services */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {locale.toUpperCase()}
              </span>
            </button>

            <Button className="bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              {t('getStarted')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
            {navLinks.map((link) => (
              <div key={link.name} className="mb-2">
                <Link
                  href={link.href}
                  className="block py-2 text-slate-300 hover:text-cyan-400"
                  onClick={() => !link.submenu && setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.submenu && (
                  <div className="ml-4 mt-2 space-y-2">
                    {link.submenu.map((sublink) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block py-2 text-slate-400 hover:text-cyan-400 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sublink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Language Toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-2 py-2 text-slate-300 hover:text-cyan-400"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {locale === 'en' ? 'Español' : 'English'}
              </span>
            </button>

            <Button className="w-full mt-4 bg-linear-to-r from-blue-600 to-cyan-600">
              {t('getStarted')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
