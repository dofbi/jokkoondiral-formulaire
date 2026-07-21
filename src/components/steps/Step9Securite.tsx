import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { prioriteControleList, capaciteHebergementList, menacesList } from '@/schemas/formulaire'
import { useLocale } from '@/i18n/LocaleContext'

export function Step9Securite() {
  const { register } = useFormContext()
  const { dict } = useLocale()
  const s = dict.step9

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        {s.heading}
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        {s.subheading}
      </p>

      <FormField
        name="priorite_controle"
        label={s.prioriteControle.label}
        description={s.prioriteControle.description}
        required
      >
        <select
          {...register('priorite_controle')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {prioriteControleList.map(opt => (
            <option key={opt} value={opt}>{dict.options.prioriteControle[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="menaces"
        label={s.menaces.label}
        description={s.menaces.description}
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
              <span className="text-sm">{dict.options.menaces[menace]}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="capacite_hebergement"
        label={s.capaciteHebergement.label}
        description={s.capaciteHebergement.description}
        required
      >
        <select
          {...register('capacite_hebergement')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {capaciteHebergementList.map(opt => (
            <option key={opt} value={opt}>{dict.options.capaciteHebergement[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="niveau_maturite_num"
        label={s.niveauMaturite.label}
        description={s.niveauMaturite.description}
      >
        <input
          type="range"
          min="1"
          max="5"
          {...register('niveau_maturite_num', { valueAsNumber: true })}
          className="w-full accent-jokko-primary"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{s.niveauMaturite.low}</span>
          <span>{s.niveauMaturite.mid}</span>
          <span>{s.niveauMaturite.high}</span>
        </div>
      </FormField>

      <FormField
        name="besoins_cybersecurite"
        label={s.besoinsCybersecurite.label}
        description={s.besoinsCybersecurite.description}
      >
        <textarea
          {...register('besoins_cybersecurite')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder={s.besoinsCybersecurite.placeholder}
        />
      </FormField>
    </div>
  )
}
