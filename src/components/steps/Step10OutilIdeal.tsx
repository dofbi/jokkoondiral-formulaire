import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'

export function Step10OutilIdeal() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        10. Outil idéal
      </h2>

      <FormField name="outil_ideal" label="Description de l'outil idéal" required>
        <textarea
          {...register('outil_ideal')}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Décrivez l'outil idéal pour votre organisation..."
        />
      </FormField>

      <FormField name="besoins_critiques" label="3 besoins technologiques les plus critiques">
        <textarea
          {...register('besoins_critiques')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Listez vos 3 besoins les plus importants..."
        />
      </FormField>

      <FormField name="contraintes_nationales" label="Contraintes spécifiques au contexte national">
        <textarea
          {...register('contraintes_nationales')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Décrivez les contraintes spécifiques..."
        />
      </FormField>
    </div>
  )
}
