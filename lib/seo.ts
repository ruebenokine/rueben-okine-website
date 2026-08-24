import { getSiteUrl, siteConfig } from '@/lib/site'

export const faqs = [
  {
    question: 'What advisory and expert services does Dr. Rueben Okine provide?',
    answer:
      'I provide migration and diaspora advisory, policy analysis, research and evaluation, higher and basic education support, family and student guidance, intercultural development, and workplace integration services.',
  },
  {
    question: 'Who can work with Dr. Rueben Okine?',
    answer:
      'I work with governments, municipalities, universities, research institutes, schools, companies, international organisations, NGOs, foundations, diaspora associations, students, and families.',
  },
  {
    question: 'Is Dr. Rueben Okine available for international engagements?',
    answer:
      "Yes — I'm based in Berlin, Germany, and available for international advisory, research, education, speaking, facilitation, and programme engagements.",
  },
  {
    question: 'How can an organisation request a quote?',
    answer:
      'Email me with the challenge, intended audience, desired outcome, and timing, and I will clarify the scope, deliverables, schedule, and professional fee before work begins.',
  },
] as const

export function getJsonLd() {
  const url = getSiteUrl().toString()
  const personId = `${url}#rueben-okine`
  const serviceId = `${url}#professional-services`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Person', 'Researcher'],
        '@id': personId,
        name: siteConfig.name,
        honorificPrefix: 'Dr.',
        honorificSuffix: 'Ph.D.',
        url,
        image: siteConfig.image,
        email: `mailto:${siteConfig.email}`,
        jobTitle: [
          'Migration Scholar',
          'Diaspora Engagement Specialist',
          'Research Expert',
          'Educator',
          'Intercultural Development Practitioner',
        ],
        address: { '@type': 'PostalAddress', addressLocality: 'Berlin', addressCountry: 'DE' },
        knowsAbout: siteConfig.services,
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'Technical University of Berlin' },
          { '@type': 'CollegeOrUniversity', name: 'University of Ghana' },
          { '@type': 'CollegeOrUniversity', name: 'Maastricht University' },
        ],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Ph.D.', name: 'Ph.D. in Migration and Diaspora Studies' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MasterDegree', name: 'European Master in Migration and Intercultural Relations' },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'MasterDegree', name: 'MA in Migration Studies' },
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': serviceId,
        name: `${siteConfig.name} — Advisory and Expert Services`,
        url,
        description: siteConfig.description,
        image: siteConfig.image,
        email: siteConfig.email,
        founder: { '@id': personId },
        areaServed: 'Worldwide',
        address: { '@type': 'PostalAddress', addressLocality: 'Berlin', addressCountry: 'DE' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Advisory and expert services',
          itemListElement: siteConfig.services.map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name, provider: { '@id': personId }, areaServed: 'Worldwide' },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${url}#website`,
        url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: 'en-GB',
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${url}#profile-page`,
        url,
        name: siteConfig.title,
        description: siteConfig.description,
        mainEntity: { '@id': personId },
        isPartOf: { '@id': `${url}#website` },
        inLanguage: 'en-GB',
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  }
}
