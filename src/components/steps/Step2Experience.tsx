import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { experienceAnneesList, nbObservateursList } from '@/schemas/formulaire'

export function Step2Experience() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        2. Expérience & outils actuels
      </h2>

      <FormField name="experience_annees" label="Années d'expérience en observation électorale" required>
        <select
          {...register('experience_annees')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {experienceAnneesList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      <FormField name="nb_observateurs" label="Nombre d'observateurs mobilisés" required>
        <select
          {...register('nb_observateurs')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {nbObservateursList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
