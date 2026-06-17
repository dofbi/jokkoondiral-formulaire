import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { echeanceOutilList, dispoTechCampList } from '@/schemas/formulaire'

export function Step11Timeline() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        11. Prochaines élections & disponibilité
      </h2>

      <FormField name="prochain_scrutin" label="Prochain scrutin / processus">
        <input
          {...register('prochain_scrutin')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Date et type de scrutin"
        />
      </FormField>

      <FormField name="echeance_outil" label="Échéance souhaitée pour l'outil" required>
        <select
          {...register('echeance_outil')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {echeanceOutilList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      <FormField name="dispo_tech_camp" label="Disponibilité pour le Tech Camp" required>
        <select
          {...register('dispo_tech_camp')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {dispoTechCampList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      <FormField name="remarques" label="Remarques complémentaires">
        <textarea
          {...register('remarques')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Toute information complémentaire..."
        />
      </FormField>
    </div>
  )
}
