'use client'

import type { FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { content, type Lang } from '@/lib/content'

const email = 'rueben.e.k.okine@gmail.com'

export function ContactForm({ lang = 'en' }: { lang?: Lang }) {
  const t = content[lang].contactForm
  const et = t.emailTemplate

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const organisation = String(data.get('organisation') || '')
    const service = String(data.get('service') || '')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`${et.subjectPrefix} ${name}${organisation ? ` — ${organisation}` : ''}`)
    const body = encodeURIComponent(
      `${et.greeting}\n\n${et.interestedIn} ${service}\n\n${et.projectContext}\n${message}\n\n${et.nameLabel} ${name}\n${et.orgLabel} ${organisation || et.notProvided}\n\n${et.signOff}\n${name}`
    )
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  const fieldClass = 'min-h-12 w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-secondary p-6 shadow-sm md:p-9" aria-label="Project inquiry form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-bold">
          {t.nameLabel} <span className="sr-only">{t.required}</span>
          <input className={fieldClass} name="name" autoComplete="name" required placeholder={t.namePlaceholder} />
        </label>
        <label className="flex flex-col gap-2 text-sm font-bold">
          {t.orgLabel} <span className="font-normal text-muted-foreground">{t.optional}</span>
          <input className={fieldClass} name="organisation" autoComplete="organization" placeholder={t.orgPlaceholder} />
        </label>
      </div>
      <label className="mt-5 flex flex-col gap-2 text-sm font-bold">
        {t.interestLabel} <span className="sr-only">{t.required}</span>
        <select className={fieldClass} name="service" required defaultValue="">
          <option value="" disabled>{t.selectPlaceholder}</option>
          {t.serviceOptions.map((option) => <option key={option}>{option}</option>)}
        </select>
      </label>
      <label className="mt-5 flex flex-col gap-2 text-sm font-bold">
        {t.messageLabel} <span className="sr-only">{t.required}</span>
        <textarea className={`${fieldClass} min-h-36 resize-y`} name="message" required placeholder={t.messagePlaceholder} />
      </label>
      <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto">
        {t.submitLabel} <ArrowRight aria-hidden="true" className="size-4" />
      </button>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.note}</p>
    </form>
  )
}
