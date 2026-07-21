import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { canauxSignalementList, modeOfflineList, frequenceSignalementList } from '@/schemas/formulaire'
import { useLocale } from '@/i18n/LocaleContext'

export function Step4Canaux() {
  const { register } = useFormContext()
  const { dict } = useLocale()
  const s = dict.step4

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        {s.heading}
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        {s.subheading}
      </p>

      <FormField
        name="canaux_signalement"
        label={s.canauxSignalement.label}
        description={s.canauxSignalement.description}
        required
      >
        <div className="space-y-2">
          {canauxSignalementList.map(canal => (
            <label key={canal} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={canal}
                {...register('canaux_signalement')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{dict.options.canauxSignalement[canal]}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="mode_offline"
        label={s.modeOffline.label}
        description={s.modeOffline.description}
        required
      >
        <select
          {...register('mode_offline')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {modeOfflineList.map(opt => (
            <option key={opt} value={opt}>{dict.options.modeOffline[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="frequence_signalement"
        label={s.frequenceSignalement.label}
        description={s.frequenceSignalement.description}
        required
      >
        <select
          {...register('frequence_signalement')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {frequenceSignalementList.map(opt => (
            <option key={opt} value={opt}>{dict.options.frequenceSignalement[opt]}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
