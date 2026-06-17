import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { canauxSignalementList, modeOfflineList, frequenceSignalementList } from '@/schemas/formulaire'

export function Step4Canaux() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        4. Canaux de signalement
      </h2>

      <FormField name="canaux_signalement" label="Canaux de signalement utilisés" required>
        <div className="space-y-2">
          {canauxSignalementList.map(canal => (
            <label key={canal} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={canal}
                {...register('canaux_signalement')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{canal}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField name="mode_offline" label="Mode hors-ligne nécessaire" required>
        <select
          {...register('mode_offline')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {modeOfflineList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      <FormField name="frequence_signalement" label="Fréquence des signalements" required>
        <select
          {...register('frequence_signalement')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {frequenceSignalementList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
