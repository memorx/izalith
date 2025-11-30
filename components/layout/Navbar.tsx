'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/src/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // WhatsApp message based on locale
  const getWhatsAppLink = () => {
    const phoneNumber = '524432182586';
    const messages = {
      es: 'Hola, estoy interesado en los servicios de IA y automatización de Izalith. Me gustaría agendar una consultoría gratuita.',
      en: "Hello, I'm interested in Izalith's AI and automation services. I'd like to schedule a free consultation."
    };
    const message = locale === 'es' ? messages.es : messages.en;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50 shadow-lg shadow-black/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition-all duration-300"
          >
            Izalith Consulting Corporation
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx + 0.3 }}
              >
                <Link
                  href={link.href}
                  className="relative text-slate-300 hover:text-cyan-400 transition-colors py-2"
                >
                  {link.name}
                  {/* Underline animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                </Link>

                {/* Submenu for Services */}
                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900/95 backdrop-blur-lg border border-slate-800 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl transform origin-top scale-95 group-hover:scale-100">
                    {link.submenu.map((sublink, subIdx) => (
                      <Link
                        key={sublink.name}
                        href={sublink.href}
                        className="block px-4 py-3 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 first:rounded-t-lg last:rounded-b-lg transition-colors relative overflow-hidden group/item"
                      >
                        <span className="relative z-10">{sublink.name}</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity"
                          initial={false}
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}

            {/* Language Toggle */}
            <motion.button
              onClick={toggleLocale}
              className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {locale.toUpperCase()}
              </span>
            </motion.button>

            {/* Get Started Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                asChild
                className="relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 overflow-hidden group"
              >
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <span className="relative">{t('getStarted')}</span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-slate-300 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="mt-4 pb-4 border-t border-slate-800 pt-4 space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors"
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
                            className="block py-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Mobile Language Toggle */}
                <motion.button
                  onClick={toggleLocale}
                  className="flex items-center gap-2 py-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {locale === 'en' ? 'Español' : 'English'}
                  </span>
                </motion.button>

                {/* Mobile Get Started Button */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: (navLinks.length + 1) * 0.1 }}
                >
                  <Button
                    asChild
                    className="w-full mt-4 bg-gradient-to-r from-blue-600 to-cyan-600"
                  >
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t('getStarted')}
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
