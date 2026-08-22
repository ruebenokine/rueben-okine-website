import { ConsultingSite } from '@/components/consulting-site'
import { getJsonLd } from '@/lib/seo'

export default function Page() {
  const jsonLd = getJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <ConsultingSite />
    </>
  )
}
