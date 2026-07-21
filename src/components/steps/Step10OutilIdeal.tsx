import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { useLocale } from '@/i18n/LocaleContext'

export function Step10OutilIdeal() {
  const { register } = useFormContext()
  const { dict } = useLocale()
  const s = dict.step10

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        {s.heading}
      </h2>

      <FormField name="outil_ideal" label={s.outilIdeal.label} required>
        <textarea
          {...register('outil_ideal')}
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder={s.outilIdeal.placeholder}
        />
      </FormField>

      <FormField name="besoins_critiques" label={s.besoinsCritiques.label}>
        <textarea
          {...register('besoins_critiques')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder={s.besoinsCritiques.placeholder}
        />
      </FormField>

      <FormField name="contraintes_nationales" label={s.contraintesNationales.label}>
        <textarea
          {...register('contraintes_nationales')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder={s.contraintesNationales.placeholder}
        />
      </FormField>
    </div>
  )
}
