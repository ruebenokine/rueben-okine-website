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
  Phone,
  Search,
  Users,
} from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import { faqs } from '@/lib/seo'

const email = 'rueben.e.k.okine@gmail.com'
const phone = '+49 15901443213'

const services = [
  {
    id: 'migration-diaspora-advisory',
    icon: Network,
    title: 'Migration and Diaspora Advisory',
    description:
      'Expert guidance for governments, municipalities, international organisations, NGOs, foundations, and diaspora associations.',
    deliverables: ['Migration policy analysis', 'Diaspora engagement strategies', 'Stakeholder mapping and engagement'],
  },
  {
    id: 'research-evaluation',
    icon: Search,
    title: 'Research and Evaluation',
    description:
      'Rigorous qualitative and mixed-methods research that turns complex evidence and lived experience into credible decisions.',
    deliverables: ['Research design and fieldwork', 'Data analysis and evaluation', 'Policy briefs and research reports'],
  },
  {
    id: 'higher-education-academia',
    icon: GraduationCap,
    title: 'Higher Education and Academia',
    description:
      'Specialist academic support for universities, colleges, research centres, graduate students, and international programmes.',
    deliverables: ['Lecturing and guest speaking', 'Thesis supervision and PhD coaching', 'Research projects and proposal development'],
  },
  {
    id: 'basic-education',
    icon: BookOpen,
    title: 'Basic Education',
    description:
      'Inclusive support for Kitas and schools that strengthens learning, participation, social development, youth development, and intercultural understanding.',
    deliverables: ['Programme and curriculum design', 'Social development initiatives', 'Teacher, student, and community engagement'],
  },
  {
    id: 'family-student-support',
    icon: Users,
    title: 'Family and Student Support',
    description:
      'People-centred guidance that helps students with a migration background navigate social settings, challenges, and belonging — with support extended to their families where it matters most.',
    deliverables: ['Support navigating social spheres and challenges', 'Education and career orientation', 'Family engagement, where helpful'],
  },
  {
    id: 'intercultural-development',
    icon: Users,
    title: 'Intercultural Development',
    description:
      'Practical learning and facilitation that helps diverse institutions and communities work together with confidence and respect.',
    deliverables: ['Intercultural competence training', 'Diversity and inclusion workshops', 'Community dialogue and facilitation'],
  },
]

const navLinks = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

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

export function ConsultingSite() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground">
        Skip to main content
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
            <a className="hover:text-primary" href="#top">Home</a>

            <div className="group relative">
              <button type="button" className="flex items-center gap-1 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary" aria-haspopup="true">
                Services
                <ChevronDown aria-hidden="true" className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-1 rounded-2xl border border-border bg-background p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-2 group-focus-within:opacity-100">
                {services.map((service) => (
                  <a key={service.id} href={`#${service.id}`} className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary">
                    {service.title}
                  </a>
                ))}
              </div>
            </div>

            <a className="hover:text-primary" href="#about">About</a>
            <a className="hover:text-primary" href="#experience">Experience</a>
            <a className="hover:text-primary" href="#faq">FAQ</a>
            <a className="hover:text-primary" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <details className="relative md:hidden">
              <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-border marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" aria-label="Open menu">
                <Menu aria-hidden="true" className="size-5" />
              </summary>
              <div className="fixed right-5 top-[4.75rem] z-50 flex max-h-[calc(100vh-6rem)] w-60 max-w-[calc(100vw-2.5rem)] flex-col gap-1 overflow-y-auto rounded-2xl border border-border bg-background p-2 shadow-xl">
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-secondary hover:text-primary">{link.label}</a>
                ))}
                <p className="px-3 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">Services</p>
                {services.map((service) => (
                  <a key={service.id} href={`#${service.id}`} className="rounded-xl px-3 py-2.5 text-sm font-semibold hover:bg-secondary hover:text-primary">{service.title}</a>
                ))}
              </div>
            </details>
            <a href={`mailto:${email}?subject=Project%20inquiry`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              <Mail aria-hidden="true" className="size-4" />
              <span className="hidden sm:inline">Discuss a project</span>
              <span className="sm:hidden">Contact</span>
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="overflow-hidden bg-secondary">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[1.08fr_.92fr] md:py-20 lg:px-8 lg:py-24">
            <div className="flex flex-col items-start gap-7">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">Policy. Evidence. People.</p>
              <div className="flex flex-col gap-5">
                <h1 className="max-w-3xl font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-balance md:text-6xl lg:text-7xl">
                  Clear thinking for societies on the move.
                </h1>
                <p className="max-w-2xl text-lg font-bold leading-relaxed text-foreground md:text-xl">
                  Migration Scholar · Diaspora Engagement Specialist · Research Expert · Educator · Intercultural Development Practitioner
                </p>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  I help organisations, institutions, communities, students, and families turn complex questions about migration, research, education, and social development into practical, people-centred action worldwide.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ArrowLink href={`mailto:${email}?subject=Advisory%20inquiry%20for%20Dr.%20Okine`}>Tell me about your project</ArrowLink>
                <a href={`tel:${phone.replaceAll(' ', '')}`} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-bold hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                  <Phone aria-hidden="true" className="size-4" />
                  Call me
                </a>
              </div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin aria-hidden="true" className="size-4 text-primary" /> Berlin-based · Available for international engagements</p>
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
                <p className="font-serif text-xl font-semibold">Rueben Okine, Ph.D.</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Migration and diaspora policy advisor · Researcher · Educator · Speaker · Author</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="Global reach" className="bg-[oklch(0.16_0.02_255)] py-14 text-[oklch(0.97_0.008_235)] md:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col gap-2">
                <Globe aria-hidden="true" className="size-6 text-[oklch(0.78_0.1_235)]" />
                <strong className="font-serif text-xl font-semibold">Cross-regional practice</strong>
                <span className="text-sm leading-snug text-[oklch(0.97_0.008_235)]/70">Work spanning Ghana, Germany, and wider European contexts</span>
              </div>
              <div className="flex flex-col gap-2">
                <Handshake aria-hidden="true" className="size-6 text-[oklch(0.78_0.1_235)]" />
                <strong className="font-serif text-xl font-semibold">International partners</strong>
                <span className="text-sm leading-snug text-[oklch(0.97_0.008_235)]/70">Collaboration with organisations including IOM and GIZ</span>
              </div>
              <div className="flex flex-col gap-2">
                <Compass aria-hidden="true" className="size-6 text-[oklch(0.78_0.1_235)]" />
                <strong className="font-serif text-xl font-semibold">Global availability</strong>
                <span className="text-sm leading-snug text-[oklch(0.97_0.008_235)]/70">Advisory, research, and speaking engagements worldwide</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex max-w-3xl flex-col gap-4">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">How I can help</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">Expertise that moves work forward.</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">Choose focused support for a defined challenge or bring me into a wider programme as a trusted advisor, researcher, educator, or intercultural development practitioner.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <article key={service.id} id={service.id} className="scroll-mt-24 flex flex-col rounded-2xl border border-border bg-card p-7 transition-transform hover:-translate-y-1 md:p-8">
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
        </section>

        <section id="about" className="scroll-mt-24 bg-primary py-20 text-primary-foreground md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 lg:gap-20 lg:px-8">
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
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/75">A bridge between evidence and people</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">Policy works better when people can see themselves in it.</h2>
              <p className="text-lg leading-relaxed text-primary-foreground/80">I am a migration scholar and development practitioner with over 15 years of experience spanning migration policy, academic research, higher education, diaspora engagement, and intercultural learning. I hold a Ph.D. from the Technical University of Berlin and an MA in Migration Studies from the University of Ghana.</p>
              <p className="leading-relaxed text-primary-foreground/80">My work with universities, research institutes, government agencies, international organisations, diaspora associations, schools, and civil society helps me listen across institutions and communities, make complex systems understandable, and build practical common ground.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <p className="flex gap-3 font-semibold"><Users aria-hidden="true" className="size-5 shrink-0" /> Stakeholder trust and coalition-building</p>
                <p className="flex gap-3 font-semibold"><BookOpen aria-hidden="true" className="size-5 shrink-0" /> Evidence translated into action</p>
              </div>
              <ArrowLink light href={`mailto:${email}?subject=Potential%20collaboration`}>Explore a collaboration</ArrowLink>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-24" aria-labelledby="expertise-heading">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">Academic &amp; research focus</p>
              <h2 id="expertise-heading" className="mt-4 font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">Areas of academic and research interest.</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">The themes that shape my scholarship, publications, teaching, and applied research.</p>
            </div>
            <ul className="mt-10 flex flex-wrap gap-3" aria-label="Academic and research focus areas">
              {['Migration and development', 'Diaspora engagement', 'Transnationalism', 'Labour migration', 'Migration policy and governance', 'Citizenship and political participation', 'Qualitative and mixed methods research', 'International student mobility', 'Integration and social inclusion', 'Intercultural competence and diversity', 'Education and youth development'].map((expertise) => (
                <li key={expertise} className="rounded-full border border-border bg-secondary px-4 py-3 text-sm font-bold">{expertise}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 bg-secondary py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <div className="flex flex-col gap-6">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">Background &amp; experience</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">A career connecting public policy, scholarship, education, and community life.</h2>
              <p className="text-xl leading-relaxed text-foreground">My professional background brings together migration governance, applied social research, university teaching, programme leadership, and people-centred education. I have worked across Ghana, Germany, and wider European contexts, translating institutional priorities into practical approaches that recognise the realities of migrants, diaspora communities, students, families, and workplaces.</p>
              <p className="text-lg leading-relaxed text-muted-foreground">My public-sector experience in Ghana developed my grounding in migration administration, policy implementation, regulatory analysis, financial oversight, and cooperation with international partners including IOM and GIZ. In Germany, my research and teaching with the Technical University of Berlin and the Leibniz Institute for Research on Society and Space deepened my expertise in migration, diaspora engagement, integration, citizenship, and transnational life.</p>
              <p className="text-lg leading-relaxed text-muted-foreground">Within schools and community organisations, I have led inclusive programmes, coordinated staff, supported student welfare, worked closely with parents, and created spaces where diverse people can participate and thrive. This combination enables me to advise institutions with academic depth, policy awareness, intercultural sensitivity, and a clear understanding of how change is experienced by people.</p>
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
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground/75">Workplace integration &amp; social cohesion</p>
              <h2 id="workplace-heading" className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">Helping diverse workplaces become stronger communities.</h2>
              <p className="text-lg leading-relaxed text-primary-foreground/85">I provide advisory and expert services to companies, public and private institutions, and corporate organisations seeking to integrate employees with migration backgrounds. The work focuses on social cohesion, workplace harmony, belonging, and an inclusive company culture in which every employee can contribute.</p>
              <ul className="grid gap-3 text-base font-semibold sm:grid-cols-2">
                <li className="flex gap-3"><Check aria-hidden="true" className="mt-1 size-4 shrink-0" /> Integration strategies and institutional guidance</li>
                <li className="flex gap-3"><Check aria-hidden="true" className="mt-1 size-4 shrink-0" /> Intercultural leadership and team development</li>
                <li className="flex gap-3"><Check aria-hidden="true" className="mt-1 size-4 shrink-0" /> Employee belonging and social cohesion</li>
                <li className="flex gap-3"><Check aria-hidden="true" className="mt-1 size-4 shrink-0" /> Inclusive workplace and company culture</li>
              </ul>
              <ArrowLink light href={`mailto:${email}?subject=Workplace%20integration%20advisory`}>Discuss your organisation</ArrowLink>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-border p-7 md:p-9">
                <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">Qualifications</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold">Deep specialist training</h2>
                <ul className="mt-7 flex flex-col gap-5">
                  <li><strong>Ph.D., Migration &amp; Diaspora Studies</strong><br/><span className="text-sm text-muted-foreground">Technical University of Berlin, 2021</span></li>
                  <li><strong>European Master in Migration &amp; Intercultural Relations</strong><br/><span className="text-sm text-muted-foreground">Universities in Germany, Norway, and Slovenia, 2016</span></li>
                  <li><strong>Diploma, Migration Management</strong><br/><span className="text-sm text-muted-foreground">Maastricht University, 2014</span></li>
                  <li><strong>MA, Migration Studies</strong><br/><span className="text-sm text-muted-foreground">University of Ghana</span></li>
                  <li><strong>BA, Psychology</strong><br/><span className="text-sm text-muted-foreground">University of Ghana</span></li>
                </ul>
              </article>
              <article className="rounded-2xl bg-secondary p-7 md:p-9">
                <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">Working style</p>
                <h2 className="mt-4 font-serif text-3xl font-semibold">Ready for diverse rooms</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">From policy offices to classrooms and community forums, I bring structure, care, and clarity to complex work.</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {['International engagement', 'Facilitation', 'Report writing', 'Programme coordination', 'Stakeholder communication', 'Budget oversight'].map((skill) => <span key={skill} className="rounded-full border border-border bg-background px-3 py-2 text-sm font-semibold">{skill}</span>)}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-secondary py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">Simple engagement</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance">From first conversation to focused work.</h2>
            </div>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ['Share the challenge', 'Email or call with your context, goal, audience, and preferred timing.'],
                ['Receive a tailored quote', 'I will clarify the scope, deliverables, timeline, and agreed professional fee.'],
                ['Confirm and begin', 'Once agreed, you pay by bank transfer and we schedule the work.'],
              ].map(([title, text], index) => (
                <li key={title} className="flex gap-4 rounded-2xl bg-background p-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-mono font-bold text-primary-foreground">{index + 1}</span>
                  <div><h3 className="font-serif text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 bg-background py-20 md:py-28" aria-labelledby="faq-heading">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
            <div className="flex flex-col gap-4">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">Frequently asked questions</p>
              <h2 id="faq-heading" className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">Working with Dr. Okine.</h2>
              <p className="leading-relaxed text-muted-foreground">Direct answers about services, clients, international availability, and starting an engagement.</p>
            </div>
            <div className="flex flex-col border-t border-border">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="group border-b border-border py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl font-semibold marker:content-none">
                    {question}
                    <span aria-hidden="true" className="text-primary transition-transform group-open:rotate-45">+</span>
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
              <p className="font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary">Start a conversation</p>
              <h2 className="font-serif text-4xl font-semibold tracking-tight text-balance md:text-5xl">Bring me the question you need answered.</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">Tell me what you are working on. I will reply to discuss fit, timing, and a tailored quote for the expert support you need.</p>
              <div className="flex flex-col gap-3">
                <a className="flex min-h-11 items-center gap-3 font-bold text-primary underline-offset-4 hover:underline" href={`mailto:${email}`}><Mail aria-hidden="true" className="size-5" />{email}</a>
                <a className="flex min-h-11 items-center gap-3 font-bold text-primary underline-offset-4 hover:underline" href={`tel:${phone.replaceAll(' ', '')}`}><Phone aria-hidden="true" className="size-5" />{phone}</a>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">Advisory work is tailored to each engagement and does not imply legal representation or guaranteed outcomes.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-primary py-10 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between lg:px-8">
          <div><p className="font-serif text-2xl font-semibold">Dr. Rueben Okine</p><p className="mt-2 text-sm text-primary-foreground/75">Migration policy · Research · Education</p></div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"><a className="underline-offset-4 hover:underline" href={`mailto:${email}`}>Email</a><a className="underline-offset-4 hover:underline" href={`tel:${phone.replaceAll(' ', '')}`}>Phone</a><span>Berlin, Germany</span></div>
        </div>
      </footer>
    </>
  )
}
