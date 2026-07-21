import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { qualiteConnexionList, appareilsList, coutServeurList } from '@/schemas/formulaire'
import { useLocale } from '@/i18n/LocaleContext'

export function Step7Performance() {
  const { register } = useFormContext()
  const { dict } = useLocale()
  const s = dict.step7

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        {s.heading}
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        {s.subheading}
      </p>

      <FormField
        name="qualite_connexion"
        label={s.qualiteConnexion.label}
        description={s.qualiteConnexion.description}
        required
      >
        <select
          {...register('qualite_connexion')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {qualiteConnexionList.map(opt => (
            <option key={opt} value={opt}>{dict.options.qualiteConnexion[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="appareils"
        label={s.appareils.label}
        description={s.appareils.description}
        required
      >
        <div className="space-y-2">
          {appareilsList.map(appareil => (
            <label key={appareil} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={appareil}
                {...register('appareils')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{dict.options.appareils[appareil]}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="importance_legerete"
        label={s.importanceLegerete.label}
        description={s.importanceLegerete.description}
        required
      >
        <input
          type="range"
          min="1"
          max="5"
          {...register('importance_legerete', { valueAsNumber: true })}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>{s.importanceLegerete.low}</span>
          <span>{s.importanceLegerete.high}</span>
        </div>
      </FormField>

      <FormField
        name="cout_serveur_max"
        label={s.coutServeurMax.label}
        description={s.coutServeurMax.description}
        required
      >
        <select
          {...register('cout_serveur_max')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {coutServeurList.map(opt => (
            <option key={opt} value={opt}>{dict.options.coutServeur[opt]}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
