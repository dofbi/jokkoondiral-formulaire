import Image from 'next/image'
import FormulaireWizard from '@/components/FormulaireWizard'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-jokko-primary text-white py-6">
        <div className="max-w-4xl mx-auto px-4 flex items-center space-x-4">
          <Image
            src="/icons/Icone.svg"
            alt="Jokkoondiral"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-2xl font-bold">JOKKOONDIRAL</h1>
            <p className="text-sm opacity-90">
              Observation électorale citoyenne panafricaine
            </p>
          </div>
        </div>
      </header>

      {/* Description */}
      <section className="bg-white border-b py-6">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-700 leading-relaxed">
            Cet outil d'observation électorale citoyenne sera une plateforme modulaire, 
            conçue par et pour la société civile africaine. Chaque organisation, groupe 
            ou mouvement pourra l'adapter à ses besoins : élections, droits humains, 
            suivi environnemental, gestion de crises. Elle sera portée par une communauté 
            panafricaine de développeurs.
          </p>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Formulaire de collecte des besoins
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Ce formulaire nous aide à comprendre vos besoins pour adapter la plateforme.
              <br />
              Temps estimé : 10-15 minutes.
            </p>
          </div>
          
          <FormulaireWizard />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm opacity-75">
            © 2026 Jokkoondiral — Plateforme d'observation électorale citoyenne
          </p>
        </div>
      </footer>
    </main>
  )
}
