'use client'

import FormulaireWizard from '@/components/FormulaireWizard'
import { useLocale } from '@/i18n/LocaleContext'

export default function Home() {
  const { locale, setLocale, dict } = useLocale()

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-jokko-primary text-white py-6">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/logo-icon.svg"
              alt={dict.header.title}
              width={48}
              height={48}
              className="rounded-lg bg-white p-1"
            />
            <div>
              <h1 className="text-2xl font-bold">{dict.header.title}</h1>
              <p className="text-sm opacity-90">
                {dict.header.tagline}
              </p>
            </div>
          </div>
          <div className="flex rounded-lg overflow-hidden border border-white/40 text-sm">
            <button
              type="button"
              onClick={() => setLocale('fr')}
              className={`px-3 py-1 ${locale === 'fr' ? 'bg-white text-jokko-primary font-semibold' : 'opacity-80 hover:opacity-100'}`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`px-3 py-1 ${locale === 'en' ? 'bg-white text-jokko-primary font-semibold' : 'opacity-80 hover:opacity-100'}`}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Description */}
      <section className="bg-white border-b py-6">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-700 leading-relaxed">
            {dict.description}
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              {dict.formIntro.title}
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              {dict.formIntro.subtitle}
              <br />
              {dict.formIntro.subtitleLine2}
            </p>
          </div>

          <FormulaireWizard />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm opacity-75">
            {dict.footer.copyright}
          </p>
        </div>
      </footer>
    </main>
  )
}
