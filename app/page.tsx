import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');

  // Simple language detection
  const preferredLocale = acceptLanguage?.includes('es') ? 'es' : 'en';

  redirect(`/${preferredLocale}`);
}
