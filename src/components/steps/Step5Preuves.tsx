import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { typesPreuvesList, alternativeVideoList, horodatageList } from '@/schemas/formulaire'
import { useLocale } from '@/i18n/LocaleContext'

export function Step5Preuves() {
  const { register } = useFormContext()
  const { dict } = useLocale()
  const s = dict.step5

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        {s.heading}
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        {s.subheading}
      </p>

      <FormField
        name="types_preuves"
        label={s.typesPreuves.label}
        description={s.typesPreuves.description}
        required
      >
        <div className="space-y-2">
          {typesPreuvesList.map(type => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={type}
                {...register('types_preuves')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{dict.options.typesPreuves[type]}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="alternative_video"
        label={s.alternativeVideo.label}
        description={s.alternativeVideo.description}
        required
      >
        <select
          {...register('alternative_video')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {alternativeVideoList.map(opt => (
            <option key={opt} value={opt}>{dict.options.alternativeVideo[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="horodatage"
        label={s.horodatage.label}
        description={s.horodatage.description}
        required
      >
        <select
          {...register('horodatage')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {horodatageList.map(opt => (
            <option key={opt} value={opt}>{dict.options.horodatage[opt]}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
