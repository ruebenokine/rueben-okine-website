export const siteConfig = {
  name: 'Dr. Rueben Okine',
  title: 'Dr. Rueben Okine | Migration, Diaspora & Education Expert',
  description:
    'International advisory and expert services in migration policy, diaspora engagement, research, education, workplace integration, and intercultural development.',
  email: 'rueben.e.k.okine@gmail.com',
  location: 'Berlin, Germany',
  image:
    'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8584-2zdoi66MlJhzsRWntMtbHpFGU3XGd5.jpeg',
  services: [
    'Migration and diaspora advisory',
    'Migration policy analysis',
    'Diaspora engagement strategy',
    'Research and evaluation',
    'Higher education and academic services',
    'Basic education and social development',
    'Family and student support',
    'Intercultural development',
    'Workplace integration and social cohesion',
  ],
} as const

export function getSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL
  const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL
  const url = explicitUrl || (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000')

  return new URL(url)
}
