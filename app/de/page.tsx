import { ConsultingSite } from '@/components/consulting-site'
import { getJsonLd } from '@/lib/seo'

export const metadata = {
  title: 'Dr. Rueben Okine | Migrations-, Diaspora- und Bildungsexperte',
  description:
    'Internationale Beratung und fachliche Unterstützung in Migrationspolitik, Diaspora-Engagement, Forschung, Bildung, Integration am Arbeitsplatz und interkultureller Entwicklung.',
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
