import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { prioriteControleList, capaciteHebergementList, menacesList, LABELS } from '@/schemas/formulaire'

export function Step9Securite() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        9. Contexte sécuritaire &amp; souveraineté des données
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        La sécurité des données et des observateurs est une priorité. Ces informations nous permettent de calibrer les niveaux de protection nécessaires.
      </p>

      <FormField
        name="priorite_controle"
        label="Importance du contrôle de vos données"
        description="L'auto-hébergement signifie que vos données sont stockées sur vos propres serveurs, sans transiter par des services tiers (Google, AWS…). Quelle importance accordez-vous à ce point ?"
        required
      >
        <select
          {...register('priorite_controle')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {prioriteControleList.map(opt => (
            <option key={opt} value={opt}>{LABELS.prioriteControle[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="menaces"
        label="Menaces rencontrées dans votre contexte"
        description="Cochez toutes les menaces auxquelles votre organisation et vos observateurs sont exposés. Ces informations restent confidentielles et nous aident à adapter les mesures de protection."
      >
        <div className="space-y-2">
          {menacesList.map(menace => (
            <label key={menace} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={menace}
                {...register('menaces')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{menace}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="capacite_hebergement"
        label="Capacité d'auto-hébergement"
        description="Avez-vous les capacités techniques pour héberger vous-même la plateforme sur vos serveurs, ou préférez-vous un hébergement cloud géré ?"
        required
      >
        <select
          {...register('capacite_hebergement')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {capaciteHebergementList.map(opt => (
            <option key={opt} value={opt}>{LABELS.capaciteHebergement[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="niveau_maturite_num"
        label="Niveau de maturité numérique de votre organisation (1-5)"
        description="1 = Débutant (peu d'outils numériques, pas d'équipe tech) · 5 = Expert (équipe technique interne, développements maison)"
      >
        <input
          type="range"
          min="1"
          max="5"
          {...register('niveau_maturite_num', { valueAsNumber: true })}
          className="w-full accent-jokko-primary"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>1 — Débutant</span>
          <span>3 — Intermédiaire</span>
          <span>5 — Expert</span>
        </div>
      </FormField>

      <FormField
        name="besoins_cybersecurite"
        label="Besoins spécifiques en cybersécurité"
        description="Avez-vous des besoins particuliers : chiffrement des communications, protection contre la surveillance, accès sécurisé pour les observateurs en zone à risque…"
      >
        <textarea
          {...register('besoins_cybersecurite')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Décrivez vos besoins spécifiques en sécurité numérique..."
        />
      </FormField>
    </div>
  )
}
