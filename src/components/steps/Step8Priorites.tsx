import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { fonctionnalitesList } from '@/schemas/formulaire'

export function Step8Priorites() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        8. Priorités des fonctionnalités
      </h2>
      <p className="text-gray-600 mb-6">
        Notez chaque fonctionnalité de 1 (non utile) à 5 (critique MVP)
      </p>

      <div className="space-y-4">
        {fonctionnalitesList.map((fonc, index) => (
          <div key={fonc.id} className="bg-gray-50 p-4 rounded-lg">
            <input type="hidden" defaultValue={fonc.id} {...register(`priorisations.${index}.fonctionnalite_id` as const, { valueAsNumber: true })} />
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{index + 1}. {fonc.nom}</span>
              <span className="text-xs text-gray-500 uppercase">{fonc.categorie}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Non utile</span>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map(note => (
                  <label key={note} className="cursor-pointer">
                    <input
                      type="radio"
                      value={note}
                      {...register(`priorisations.${index}.note` as const)}
                      className="sr-only peer"
                    />
                    <span className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center peer-checked:bg-jokko-primary peer-checked:text-white peer-checked:border-jokko-primary hover:border-jokko-accent transition-colors">
                      {note}
                    </span>
                  </label>
                ))}
              </div>
              <span className="text-sm">Critique</span>
            </div>
            <label className="flex items-center mt-2 space-x-2">
              <input
                type="checkbox"
                {...register(`priorisations.${index}.non_negociable` as const)}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">Non-négociable (top 3)</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
