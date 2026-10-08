import type { Metadata } from 'next'
import { content } from '@/lib/content'

const email = 'rueben.e.k.okine@gmail.com'
const t = content.en

export const metadata: Metadata = {
  title: 'Legal Notice (Impressum)',
  description: 'Legal notice and contact information for ruebenokine.com, provided under German law (§ 5 DDG).',
  alternates: { canonical: '/impressum', languages: { en: '/impressum', de: '/de/impressum' } },
}

export default function ImpressumPage() {
  return (
    <>
      <main className="bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
          <a href="/" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">← Back to the site</a>

          <p className="mt-10 font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">Legal</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">Legal Notice (Impressum)</h1>

          <div className="mt-12 flex flex-col gap-10 text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">Information according to § 5 DDG</h2>
              <p className="mt-3">
                Rueben Okine<br />
                Isländische Straße 6<br />
                10439 Berlin<br />
                Germany
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">Contact</h2>
              <p className="mt-3">Email: <a className="font-semibold text-primary underline-offset-4 hover:underline" href={`mailto:${email}`}>{email}</a></p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">EU Dispute Resolution</h2>
              <p className="mt-3">
                The European Commission provides a platform for online dispute resolution (OS):{' '}
                <a className="font-semibold text-primary underline-offset-4 hover:underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.
                I am not obliged, and not willing, to participate in dispute resolution proceedings before a consumer arbitration board.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">Liability for Content</h2>
              <p className="mt-3">
                As a service provider, I am responsible for my own content on these pages under general law. However, I am not obliged to monitor
                transmitted or stored third-party information, or to investigate circumstances that indicate unlawful activity. Obligations to remove
                or block the use of information under general law remain unaffected. Liability in this regard is only possible from the point in time
                at which a specific infringement becomes known. Upon becoming aware of any such infringement, I will remove the content concerned
                without delay.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">Liability for Links</h2>
              <p className="mt-3">
                This website may contain links to external third-party websites whose content I have no influence over, and for which I cannot accept
                any liability. The respective provider or operator of a linked page is always responsible for its own content. Linked pages were
                checked for possible legal violations at the time of linking; no unlawful content was identifiable at that time. Continuous monitoring
                of linked pages is not reasonable without concrete evidence of an infringement. Upon becoming aware of any such infringement, I will
                remove the link concerned without delay.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">Copyright</h2>
              <p className="mt-3">
                Content and works on this website created by the site operator are subject to German copyright law. Reproduction, editing,
                distribution, or any use beyond the scope of copyright law requires the written consent of the respective author.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-border bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div><p className="font-serif text-2xl font-semibold text-primary">Dr. Rueben Okine</p><p className="mt-2 text-sm text-muted-foreground">{t.footer.tagline}</p></div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a className="text-primary underline-offset-4 hover:underline" href={`mailto:${email}`}>{t.footer.emailLabel}</a><span className="text-muted-foreground">{t.footer.location}</span></div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Dr. Rueben Okine. {t.footer.rights}</p>
            <a className="text-primary underline-offset-4 hover:underline" href="/impressum">{t.footer.legalLink}</a>
          </div>
        </div>
      </footer>
    </>
  )
}
