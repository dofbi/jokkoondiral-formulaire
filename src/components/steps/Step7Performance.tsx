import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { qualiteConnexionList, appareilsList, coutServeurList } from '@/schemas/formulaire'

export function Step7Performance() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        7. Performance & légèreté
      </h2>

      <FormField name="qualite_connexion" label="Qualité de la connexion sur le terrain" required>
        <select
          {...register('qualite_connexion')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {qualiteConnexionList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      <FormField name="appareils" label="Appareils utilisés par les observateurs" required>
        <div className="space-y-2">
          {appareilsList.map(appareil => (
            <label key={appareil} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={appareil}
                {...register('appareils')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{appareil}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField name="importance_legerete" label="Importance de la légèreté (1-5)" required>
        <input
          type="range"
          min="1"
          max="5"
          {...register('importance_legerete', { valueAsNumber: true })}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>Peu important</span>
          <span>Très important</span>
        </div>
      </FormField>

      <FormField name="cout_serveur_max" label="Coût serveur maximum acceptable" required>
        <select
          {...register('cout_serveur_max')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {coutServeurList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
