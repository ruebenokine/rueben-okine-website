import { ConsultingSite } from '@/components/consulting-site'
import { getJsonLd } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

const title = 'Dr. Rueben Okine | Migrations-, Diaspora- und Bildungsexperte'
const description =
  'Internationale Beratung und fachliche Unterstützung in Migrationspolitik, Diaspora-Engagement, Forschung, Bildung, Integration am Arbeitsplatz und interkultureller Entwicklung.'

export const metadata = {
  title,
  description,
  alternates: {
    canonical: '/de',
    languages: {
      en: '/',
      de: '/de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    alternateLocale: 'en_GB',
    url: '/de',
    siteName: siteConfig.name,
    title,
    description,
    images: [{ url: siteConfig.image }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [siteConfig.image],
  },
}

export default function Page() {
  const jsonLd = getJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <ConsultingSite lang="de" />
    </>
  )
}
