import type { Metadata, Viewport } from 'next'
import { Lora, Manrope } from 'next/font/google'
import { getSiteUrl, siteConfig } from '@/lib/site'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora', display: 'swap' })
const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: siteConfig.title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      de: '/de',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: 'de_DE',
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.image }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#d8faf7',
  width: 'device-width',
  initialScale: 1,
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteConfig.name,
  jobTitle: 'Migration and Diaspora Policy Advisor',
  description: siteConfig.description,
  url: siteUrl.toString(),
  image: siteConfig.image,
  email: `mailto:${siteConfig.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Berlin',
    addressCountry: 'DE',
  },
  knowsAbout: siteConfig.services,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`bg-background ${manrope.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  )
}
