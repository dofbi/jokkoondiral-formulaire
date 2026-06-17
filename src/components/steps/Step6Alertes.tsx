import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { typesAlertesList, evenementsAlertesList, canalCoordinateursList } from '@/schemas/formulaire'

export function Step6Alertes() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        6. Alertes & notifications
      </h2>

      <FormField name="types_alertes" label="Types d'alertes nécessaires">
        <div className="space-y-2">
          {typesAlertesList.map(type => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={type}
                {...register('types_alertes')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField name="evenements_alertes" label="Événements déclenchant une alerte">
        <div className="space-y-2">
          {evenementsAlertesList.map(evt => (
            <label key={evt} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={evt}
                {...register('evenements_alertes')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{evt}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField name="canal_coordinateurs" label="Canal de réception des alertes" required>
        <select
          {...register('canal_coordinateurs')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {canalCoordinateursList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
