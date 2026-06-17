import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { prioriteControleList, capaciteHebergementList } from '@/schemas/formulaire'

export function Step9Securite() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        9. Sécurité & souveraineté
      </h2>

      <FormField name="priorite_controle" label="Priorité du contrôle des données" required>
        <select
          {...register('priorite_controle')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {prioriteControleList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      <FormField name="capacite_hebergement" label="Capacité d'auto-hébergement" required>
        <select
          {...register('capacite_hebergement')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {capaciteHebergementList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      <FormField name="niveau_maturite_num" label="Niveau de maturité numérique (1-5)">
        <input
          type="range"
          min="1"
          max="5"
          {...register('niveau_maturite_num', { valueAsNumber: true })}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>Débutant</span>
          <span>Expert</span>
        </div>
      </FormField>

      <FormField name="besoins_cybersecurite" label="Besoins en cybersécurité">
        <textarea
          {...register('besoins_cybersecurite')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Décrivez vos besoins spécifiques..."
        />
      </FormField>
    </div>
  )
}
