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
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#eaf6ff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`bg-background ${manrope.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
