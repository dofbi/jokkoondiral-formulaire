import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { echeanceOutilList, dispoTechCampList } from '@/schemas/formulaire'
import { useLocale } from '@/i18n/LocaleContext'

export function Step11Timeline() {
  const { register } = useFormContext()
  const { dict } = useLocale()
  const s = dict.step11

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        {s.heading}
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        {s.subheading}
      </p>

      <FormField
        name="prochain_scrutin"
        label={s.prochainScrutin.label}
        description={s.prochainScrutin.description}
      >
        <input
          {...register('prochain_scrutin')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder={s.prochainScrutin.placeholder}
        />
      </FormField>

      <FormField
        name="echeance_outil"
        label={s.echeanceOutil.label}
        description={s.echeanceOutil.description}
        required
      >
        <select
          {...register('echeance_outil')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {echeanceOutilList.map(opt => (
            <option key={opt} value={opt}>{dict.options.echeanceOutil[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="langues_terrain"
        label={s.languesTerrain.label}
        description={s.languesTerrain.description}
      >
        <div className="space-y-2">
          <input
            {...register('langues_terrain.0.langue')}
            placeholder={s.languesTerrain.placeholder1}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          />
          <input
            {...register('langues_terrain.1.langue')}
            placeholder={s.languesTerrain.placeholder2}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          />
          <input
            {...register('langues_terrain.2.langue')}
            placeholder={s.languesTerrain.placeholder3}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          />
        </div>
      </FormField>

      <FormField
        name="dispo_tech_camp"
        label={s.dispoTechCamp.label}
        description={s.dispoTechCamp.description}
        required
      >
        <select
          {...register('dispo_tech_camp')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {dispoTechCampList.map(opt => (
            <option key={opt} value={opt}>{dict.options.dispoTechCamp[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="remarques"
        label={s.remarques.label}
        description={s.remarques.description}
      >
        <textarea
          {...register('remarques')}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder={s.remarques.placeholder}
        />
      </FormField>
    </div>
  )
}
