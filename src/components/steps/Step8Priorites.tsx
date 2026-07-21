import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { fonctionnalitesList } from '@/schemas/formulaire'
import { useLocale } from '@/i18n/LocaleContext'

export function Step8Priorites() {
  const { register, setValue } = useFormContext()
  const { dict } = useLocale()
  const s = dict.step8

  useEffect(() => {
    fonctionnalitesList.forEach((fonc, index) => {
      setValue(`priorisations.${index}.fonctionnalite_id`, fonc.id)
    })
  }, [setValue])

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        {s.heading}
      </h2>
      <p className="text-gray-600 mb-6">
        {s.subheading}
      </p>

      <div className="space-y-4">
        {fonctionnalitesList.map((fonc, index) => (
          <div key={fonc.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{index + 1}. {dict.options.fonctionnalites[fonc.id]}</span>
              <span className="text-xs text-gray-500 uppercase">{fonc.categorie}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">{s.nonUtile}</span>
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
              <span className="text-sm">{s.critique}</span>
            </div>
            <label className="flex items-center mt-2 space-x-2">
              <input
                type="checkbox"
                {...register(`priorisations.${index}.non_negociable` as const)}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{s.nonNegociable}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
