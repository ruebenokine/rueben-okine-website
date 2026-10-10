import type { Metadata } from 'next'
import { content } from '@/lib/content'

const email = 'rueben.e.k.okine@gmail.com'
const t = content.de

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und Kontaktangaben für ruebenokine.com gemäß § 5 DDG.',
  alternates: { canonical: '/de/impressum', languages: { en: '/impressum', de: '/de/impressum' } },
}

export default function ImpressumPageDe() {
  return (
    <>
      <main className="bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8 lg:py-28">
          <a href="/de" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">← Zurück zur Seite</a>

          <p className="mt-10 font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">Rechtliches</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">Impressum</h1>

          <div className="mt-12 flex flex-col gap-10 text-base leading-relaxed text-muted-foreground">
            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">Angaben gemäß § 5 DDG</h2>
              <p className="mt-3">
                Rueben Okine<br />
                Isländische Straße 6<br />
                10439 Berlin<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">Kontakt</h2>
              <p className="mt-3">E-Mail: <a className="font-semibold text-primary underline-offset-4 hover:underline" href={`mailto:${email}`}>{email}</a></p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">EU-Streitschlichtung</h2>
              <p className="mt-3">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a className="font-semibold text-primary underline-offset-4 hover:underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.
                Ich bin nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">Haftung für Inhalte</h2>
              <p className="mt-3">
                Als Diensteanbieter bin ich gemäß den allgemeinen Gesetzen für eigene Inhalte auf diesen Seiten verantwortlich. Ich bin jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">Haftung für Links</h2>
              <p className="mt-3">
                Diese Website kann Links zu externen Webseiten Dritter enthalten, auf deren Inhalte ich keinen Einfluss habe. Für diese fremden
                Inhalte kann ich daher keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige
                Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend
                entfernen.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-foreground">Urheberrecht</h2>
              <p className="mt-3">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-primary py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-serif text-2xl font-semibold">Dr. Rueben Okine</p>
              <p className="mt-2 text-sm text-primary-foreground/75">
                <a className="underline-offset-4 hover:underline" href="/de#services-advisory">{t.footer.taglineMigration}</a>
                {' · '}
                <a className="underline-offset-4 hover:underline" href="/de#services-research">{t.footer.taglineResearch}</a>
                {' · '}
                <a className="underline-offset-4 hover:underline" href="/de#services-education">{t.footer.taglineEducation}</a>
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a className="underline-offset-4 hover:underline" href={`mailto:${email}`}>{t.footer.emailLabel}</a><span>{t.footer.location}</span></div>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60">
            <p>© {new Date().getFullYear()} Dr. Rueben Okine. {t.footer.rights}</p>
            <a className="underline-offset-4 hover:underline" href="/de/impressum">{t.footer.legalLink}</a>
          </div>
        </div>
      </footer>
    </>
  )
}
