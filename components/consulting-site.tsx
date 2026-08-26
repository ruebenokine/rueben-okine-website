'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Compass,
  GraduationCap,
  Globe,
  Handshake,
  Mail,
  Menu,
  MapPin,
  Network,
  Search,
  Users,
} from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { content, type Lang } from '@/lib/content'

const email = 'rueben.e.k.okine@gmail.com'

const serviceOrder = [
  'migration-diaspora-advisory',
  'research-evaluation',
  'higher-education-academia',
  'basic-education',
  'family-student-support',
  'intercultural-development',
] as const

const serviceIcons: Record<(typeof serviceOrder)[number], typeof Network> = {
  'migration-diaspora-advisory': Network,
  'research-evaluation': Search,
  'higher-education-academia': GraduationCap,
  'basic-education': BookOpen,
  'family-student-support': Users,
  'intercultural-development': Users,
}

const serviceGroups = [
  { key: 'advisory', ids: ['migration-diaspora-advisory', 'intercultural-development'] },
  { key: 'research', ids: ['research-evaluation', 'higher-education-academia'] },
  { key: 'education', ids: ['basic-education', 'family-student-support'] },
] as const

const globalReachIcons = [Globe, Handshake, Compass]

function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 ${
        light
          ? 'bg-background text-primary focus-visible:outline-background'
          : 'bg-primary text-primary-foreground focus-visible:outline-primary'
      }`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="size-4" />
    </a>
  )
}

export function ConsultingSite({ lang = 'en' }: { lang?: Lang }) {
  const t = content[lang]

  const navLinks = [
    { href: '#top', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ]

  const [servicesOpen, setServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDetailsElement>(null)

  useEffect(() => {
    if (!servicesOpen) return
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setServicesOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [servicesOpen])

  function closeMobileMenu() {
    if (mobileMenuRef.current) mobileMenuRef.current.open = false
  }

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground">
        {t.skipLink}
      </a>

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3 font-bold tracking-tight" aria-label="Dr. Rueben Okine, home">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8584-2zdoi66MlJhzsRWntMtbHpFGU3XGd5.jpeg"
              alt=""
              width={48}
              height={48}
              sizes="36px"
              className="size-9 rounded-full border-2 border-primary object-cover object-top"
            />
            <span className="hidden sm:inline">Dr. Rueben Okine</span>
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a className="hover:text-primary" href="#top">{t.nav.home}</a>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((open) => !open)}
              >
                {t.nav.services}
                <ChevronDown aria-hidden="true" className={`size-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`absolute left-1/2 top-full z-50 flex w-80 -translate-x-1/2 translate-y-1 flex-col gap-1.5 rounded-2xl border border-border bg-background p-2 shadow-xl transition-all duration-150 ${
                  servicesOpen ? 'visible translate-y-2 opacity-100' : 'invisible opacity-0'
                }`}
              >
                {serviceGroups.map((group) => (
                  <div key={group.key} className="rounded-xl bg-secondary/70 p-2">
                    <p className="px-2 pb-1.5 pt-1 text-[13px] font-bold leading-snug text-primary">{t.serviceGroupLabels[group.key]}</p>
                    {group.ids.map((id) => (
                      <a key={id} href={`#${id}`} onClick={() => setServicesOpen(false)} className="block rounded-lg px-2 py-2 text-sm font-semibold text-foreground hover:bg-background hover:text-primary">
                        {t.services[id].title}
                      </a>
                    ))}
                  </div>
                ))}
                <a href="#speaking" onClick={() => setServicesOpen(false)} className="block rounded-xl border-t border-border px-3 pb-1 pt-3 text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary">
                  {t.speaking.navLabel}
                </a>
              </div>
            </div>

            <a className="hover:text-primary" href="#about">{t.nav.about}</a>
            <a className="hover:text-primary" href="#experience">{t.nav.experience}</a>
            <a className="hover:text-primary" href="#faq">{t.nav.faq}</a>
            <a className="hover:text-primary" href="#contact">{t.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full border border-border p-1" aria-label="Language">
              <a href="/" aria-label="English" title="English" className={`rounded-full px-2 py-1 text-base leading-none sm:px-2.5 sm:py-1.5 sm:text-lg ${lang === 'en' ? 'bg-primary' : 'hover:bg-secondary'}`} aria-current={lang === 'en' ? 'true' : undefined}>{t.langSwitch.en}</a>
              <a href="/de" aria-label="Deutsch" title="Deutsch" className={`rounded-full px-2 py-1 text-base leading-none sm:px-2.5 sm:py-1.5 sm:text-lg ${lang === 'de' ? 'bg-primary' : 'hover:bg-secondary'}`} aria-current={lang === 'de' ? 'true' : undefined}>{t.langSwitch.de}</a>
            </div>

            <details ref={mobileMenuRef} className="relative md:hidden">
              <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-border marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label={t.nav.menuLabel}>
                <Menu aria-hidden="true" className="size-5" />
              </summary>
              <div className="fixed right-4 top-[4.75rem] z-50 flex max-h-[calc(100vh-6rem)] w-[19rem] max-w-[calc(100vw-2rem)] flex-col gap-1.5 overflow-y-auto rounded-2xl border border-border bg-background p-2.5 shadow-xl">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeMobileMenu} className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-secondary hover:text-primary">{link.label}</a>
                ))}
                <p className="px-2 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">{t.nav.services}</p>
                {serviceGroups.map((group) => (
                  <div key={group.key} className="rounded-xl bg-secondary/70 p-2">
                    <p className="px-1 pb-1.5 pt-1 text-[13px] font-bold leading-snug text-primary">{t.serviceGroupLabels[group.key]}</p>
                    {group.ids.map((id) => (
                      <a key={id} href={`#${id}`} onClick={closeMobileMenu} className="block rounded-lg px-2 py-2.5 text-sm font-semibold hover:bg-background hover:text-primary">{t.services[id].title}</a>
                    ))}
                  </div>
                ))}
                <a href="#speaking" onClick={closeMobileMenu} className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-secondary hover:text-primary">{t.speaking.navLabel}</a>
              </div>
            </details>
            <a href={`mailto:${email}?subject=Project%20inquiry`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <Mail aria-hidden="true" className="size-4" />
              <span className="hidden sm:inline">{t.nav.discussProject}</span>
              <span className="sm:hidden">{t.nav.contactShort}</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="overflow-hidden bg-secondary">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[1.08fr_.92fr] md:py-20 lg:px-8 lg:py-24">
            <div className="flex flex-col items-start gap-7">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">{t.hero.eyebrow}</p>
              <div className="flex flex-col gap-5">
                <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-balance md:text-6xl lg:text-7xl">
                  {t.hero.heading}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {t.hero.paragraph}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ArrowLink href={`mailto:${email}?subject=Advisory%20inquiry%20for%20Dr.%20Okine`}>{t.hero.ctaProject}</ArrowLink>
              </div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin aria-hidden="true" className="size-4 text-primary" /> {t.hero.location}</p>
            </div>

            <div className="relative mx-auto w-full max-w-xl md:justify-self-end">
              <div className="overflow-hidden rounded-[2rem] border-8 border-background shadow-2xl shadow-primary/10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8584-2zdoi66MlJhzsRWntMtbHpFGU3XGd5.jpeg"
                  alt="Dr. Rueben Okine smiling in a professional portrait"
                  width={1125}
                  height={1442}
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="relative -mt-14 ml-5 mr-5 rounded-2xl border border-border bg-background p-5 shadow-xl md:-ml-12 md:mr-8">
                <p className="font-serif text-xl font-semibold">{t.hero.cardName}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{t.hero.cardTagline}</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Global reach" className="bg-[oklch(0.16_0.02_255)] py-14 text-[oklch(0.97_0.008_235)] md:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3">
              {t.globalReach.map((item, index) => {
                const Icon = globalReachIcons[index]
                return (
                  <div key={item.title} className="flex flex-col gap-2">
                    <Icon aria-hidden="true" className="size-6 text-accent" />
                    <strong className="font-serif text-xl font-semibold">{item.title}</strong>
                    <span className="text-sm leading-snug text-[oklch(0.97_0.008_235)]/70">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex max-w-3xl flex-col gap-4">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">{t.servicesHeading.eyebrow}</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">{t.servicesHeading.heading}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.servicesHeading.paragraph}</p>
            </div>
            <div className="mt-12 flex flex-col gap-14">
              {serviceGroups.map((group) => (
                <div key={group.key}>
                  <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{t.serviceGroupLabels[group.key]}</p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    {group.ids.map((id) => {
                      const service = t.services[id]
                      const Icon = serviceIcons[id]
                      return (
                        <article key={id} id={id} className="scroll-mt-24 flex flex-col rounded-2xl border border-border bg-card p-7 transition-transform hover:-translate-y-1 md:p-8">
                          <Icon aria-hidden="true" className="size-8 text-primary" />
                          <h3 className="mt-7 font-serif text-2xl font-semibold">{service.title}</h3>
                          <p className="mt-4 min-h-28 leading-relaxed text-muted-foreground">{service.description}</p>
                          <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                            {service.deliverables.map((item) => <li key={item} className="flex gap-3 text-sm font-medium"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />{item}</li>)}
                          </ul>
                        </article>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-primary py-20 text-primary-foreground md:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 md:grid-cols-2 lg:gap-20 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border-8 border-primary-foreground/15">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8586-Li4Uz9nvqLctT1n4YZ449ofcFKZAza.jpeg"
                alt="Dr. Rueben Okine seated outdoors in Berlin"
                width={1125}
                height={750}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start gap-6">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/75">{t.about.eyebrow}</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">{t.about.heading}</h2>
              <p className="text-lg leading-relaxed text-primary-foreground/80">{t.about.p1}</p>
              <p className="leading-relaxed text-primary-foreground/80">{t.about.p2}</p>
              <p className="leading-relaxed text-primary-foreground/80">{t.about.p3}</p>
              <p className="leading-relaxed text-primary-foreground/80">{t.about.p4}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <p className="flex gap-3 font-semibold"><Users aria-hidden="true" className="size-5 shrink-0" /> {t.about.pill1}</p>
                <p className="flex gap-3 font-semibold"><BookOpen aria-hidden="true" className="size-5 shrink-0" /> {t.about.pill2}</p>
              </div>
              <ArrowLink light href={`mailto:${email}?subject=Potential%20collaboration`}>{t.about.cta}</ArrowLink>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="flex flex-col gap-6">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">{t.experience.eyebrow}</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">{t.experience.heading}</h2>
              <p className="text-xl leading-relaxed text-foreground">{t.experience.p1}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.experience.p2}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.experience.p3}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.experience.p4}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.experience.p5}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.experience.p6}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.experience.p7}</p>
            </div>

            <div id="research" className="mt-16 scroll-mt-24 border-t border-border pt-14 md:mt-20 md:pt-16">
              <div className="max-w-3xl">
                <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">{t.research.eyebrow}</p>
                <h3 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">{t.research.heading}</h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t.research.subheading}</p>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2" aria-label="Academic and research focus areas, by theme">
                {t.research.groups.map((group) => (
                  <div key={group.theme} className="rounded-2xl border border-border bg-background p-6">
                    <h4 className="font-serif text-lg font-semibold text-primary">{group.theme}</h4>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug">
                          <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div id="education" className="mt-16 scroll-mt-24 border-t border-border pt-14 md:mt-20 md:pt-16">
              <div className="flex flex-col gap-6">
                <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">{t.education.eyebrow}</p>
                <h3 className="font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">{t.education.heading}</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">{t.education.p1}</p>
                <p className="text-lg leading-relaxed text-muted-foreground">{t.education.p2}</p>
                <p className="text-lg leading-relaxed text-muted-foreground">{t.education.p3}</p>
                <p className="text-lg leading-relaxed text-muted-foreground">{t.education.p4}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-20 text-primary-foreground md:py-28" aria-labelledby="workplace-heading">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border-8 border-primary-foreground/15">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8579-HfnNuhN9vgYreVOOOe8enSVbM3unDu.jpeg"
                alt="Dr. Rueben Okine wearing a patterned shirt in an arts and community setting"
                width={1125}
                height={1500}
                sizes="(max-width: 768px) 100vw, 42vw"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col items-start gap-6">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/75">{t.workplace.eyebrow}</p>
              <h2 id="workplace-heading" className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">{t.workplace.heading}</h2>
              <p className="text-lg leading-relaxed text-primary-foreground/85">{t.workplace.paragraph}</p>
              <ul className="grid gap-3 text-base font-semibold sm:grid-cols-2">
                {t.workplace.items.map((item) => (
                  <li key={item} className="flex gap-3"><Check aria-hidden="true" className="mt-1 size-4 shrink-0" /> {item}</li>
                ))}
              </ul>
              <ArrowLink light href={`mailto:${email}?subject=Workplace%20integration%20advisory`}>{t.workplace.cta}</ArrowLink>
            </div>
          </div>
        </section>

        <section id="speaking" className="scroll-mt-24 bg-secondary py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 md:grid-cols-2 lg:gap-20 lg:px-8">
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-[2rem] border-8 border-background shadow-xl">
                <Image
                  src="/images/speaking-microphone.jpg"
                  alt="Dr. Rueben Okine speaking into a microphone at a public event"
                  width={1400}
                  height={758}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] border-8 border-background shadow-xl">
                <Image
                  src="/images/speaking-lecture-hall.jpg"
                  alt="Dr. Rueben Okine presenting at a university lecture hall"
                  width={1400}
                  height={1867}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-6">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">{t.speaking.eyebrow}</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">{t.speaking.heading}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.speaking.p1}</p>
              <p className="leading-relaxed text-muted-foreground">{t.speaking.p2}</p>
              <p className="leading-relaxed text-muted-foreground">{t.speaking.p3}</p>
              <div className="w-full rounded-2xl border border-border bg-background p-6">
                <p className="font-serif text-lg font-semibold">{t.speaking.formatsHeading}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {t.speaking.formats.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-medium"><Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />{item}</li>
                  ))}
                </ul>
              </div>
              <ArrowLink href={`mailto:${email}?subject=Speaking%20engagement%20inquiry`}>{t.speaking.cta}</ArrowLink>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <article className="mx-auto max-w-3xl rounded-2xl bg-secondary p-7 md:p-9">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">{t.workingStyle.eyebrow}</p>
              <h2 className="mt-4 font-serif text-3xl font-semibold">{t.workingStyle.heading}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{t.workingStyle.paragraph}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {t.workingStyle.tags.map((skill) => <span key={skill} className="rounded-full border border-border bg-background px-3 py-2 text-sm font-semibold">{skill}</span>)}
              </div>
            </article>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">{t.engagement.eyebrow}</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance">{t.engagement.heading}</h2>
            </div>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {t.engagement.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4 rounded-2xl bg-background p-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-mono font-bold text-accent-foreground">{index + 1}</span>
                  <div><h3 className="font-serif text-xl font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-background py-20 md:py-28" aria-labelledby="faq-heading">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">{t.faq.eyebrow}</p>
              <h2 id="faq-heading" className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">{t.faq.heading}</h2>
              <p className="leading-relaxed text-muted-foreground">{t.faq.subheading}</p>
            </div>
            <div className="flex flex-col border-t border-border">
              {t.faq.items.map(({ question, answer }) => (
                <details key={question} className="group border-b border-border py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl font-semibold marker:content-none">
                    {question}
                    <span aria-hidden="true" className="text-accent transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="max-w-3xl pt-4 leading-relaxed text-muted-foreground">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-border bg-secondary py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-8">
            <div className="flex flex-col items-start gap-6">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">{t.contact.eyebrow}</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">{t.contact.heading}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{t.contact.paragraph}</p>
              <div className="flex flex-col gap-3">
                <a className="flex min-h-11 items-center gap-3 font-bold text-primary underline-offset-4 hover:underline" href={`mailto:${email}`}><Mail aria-hidden="true" className="size-5" />{t.contact.emailCta}</a>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.contact.disclaimer}</p>
            </div>
            <ContactForm lang={lang} />
          </div>
        </section>
      </main>

      <footer className="bg-primary py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between lg:px-8">
          <div><p className="font-serif text-2xl font-semibold">Dr. Rueben Okine</p><p className="mt-2 text-sm text-primary-foreground/75">{t.footer.tagline}</p></div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a className="underline-offset-4 hover:underline" href={`mailto:${email}`}>{t.footer.emailLabel}</a><span>{t.footer.location}</span></div>
        </div>
      </footer>
    </>
  )
}
