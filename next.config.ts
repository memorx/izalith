import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts'); // ← CAMBIAR DE VUELTA

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
