import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { typesAlertesList, evenementsAlertesList, canalCoordinateursList } from '@/schemas/formulaire'
import { useLocale } from '@/i18n/LocaleContext'

export function Step6Alertes() {
  const { register } = useFormContext()
  const { dict } = useLocale()
  const s = dict.step6

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        {s.heading}
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        {s.subheading}
      </p>

      <FormField
        name="types_alertes"
        label={s.typesAlertes.label}
        description={s.typesAlertes.description}
      >
        <div className="space-y-2">
          {typesAlertesList.map(type => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={type}
                {...register('types_alertes')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{dict.options.typesAlertes[type]}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="evenements_alertes"
        label={s.evenementsAlertes.label}
        description={s.evenementsAlertes.description}
      >
        <div className="space-y-2">
          {evenementsAlertesList.map(evt => (
            <label key={evt} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={evt}
                {...register('evenements_alertes')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{dict.options.evenementsAlertes[evt]}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="canal_coordinateurs"
        label={s.canalCoordinateurs.label}
        description={s.canalCoordinateurs.description}
        required
      >
        <select
          {...register('canal_coordinateurs')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {canalCoordinateursList.map(opt => (
            <option key={opt} value={opt}>{dict.options.canalCoordinateurs[opt]}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
