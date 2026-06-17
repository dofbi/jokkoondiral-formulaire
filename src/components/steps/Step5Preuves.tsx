import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { typesPreuvesList, alternativeVideoList, horodatageList } from '@/schemas/formulaire'

export function Step5Preuves() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        5. Types de preuves
      </h2>

      <FormField name="types_preuves" label="Types de preuves collectées" required>
        <div className="space-y-2">
          {typesPreuvesList.map(type => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={type}
                {...register('types_preuves')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField name="alternative_video" label="Alternative si vidéo impossible" required>
        <select
          {...register('alternative_video')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {alternativeVideoList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      <FormField name="horodatage" label="Horodatage nécessaire" required>
        <select
          {...register('horodatage')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {horodatageList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
