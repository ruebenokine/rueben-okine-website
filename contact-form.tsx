'use client'

import type { FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'

const email = 'rueben.e.k.okine@gmail.com'

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '')
    const organisation = String(data.get('organisation') || '')
    const service = String(data.get('service') || '')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`Project inquiry from ${name}${organisation ? ` — ${organisation}` : ''}`)
    const body = encodeURIComponent(`Hello Dr. Okine,\n\nI am interested in: ${service}\n\nProject context:\n${message}\n\nName: ${name}\nOrganisation: ${organisation || 'Not provided'}\n\nKind regards,\n${name}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  const fieldClass = 'min-h-12 w-full rounded-xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-secondary p-6 shadow-sm md:p-9" aria-label="Project inquiry form">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-bold">
          Your name <span className="sr-only">required</span>
          <input className={fieldClass} name="name" autoComplete="name" required placeholder="Your full name" />
        </label>
        <label className="flex flex-col gap-2 text-sm font-bold">
          Organisation <span className="font-normal text-muted-foreground">(optional)</span>
          <input className={fieldClass} name="organisation" autoComplete="organization" placeholder="Organisation or team" />
        </label>
      </div>
      <label className="mt-5 flex flex-col gap-2 text-sm font-bold">
        Area of interest <span className="sr-only">required</span>
        <select className={fieldClass} name="service" required defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Migration and diaspora advisory</option>
          <option>Research and evaluation</option>
          <option>Higher education and academic services</option>
          <option>Basic education — Kitas and schools</option>
          <option>Family and student support</option>
          <option>Intercultural development and diversity</option>
          <option>Speaking, workshop, or advisory session</option>
          <option>Other collaboration</option>
        </select>
      </label>
      <label className="mt-5 flex flex-col gap-2 text-sm font-bold">
        What would you like to achieve? <span className="sr-only">required</span>
        <textarea className={`${fieldClass} min-h-36 resize-y`} name="message" required placeholder="A short note about your challenge, timing, and the support you need" />
      </label>
      <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto">
        Open email draft <ArrowRight aria-hidden="true" className="size-4" />
      </button>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">This opens your email app with the details above. Nothing is stored on this website.</p>
    </form>
  )
}
