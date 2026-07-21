import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { experienceAnneesList, nbObservateursList, outilsList, usageList } from '@/schemas/formulaire'
import { useLocale } from '@/i18n/LocaleContext'

export function Step2Experience() {
  const { register } = useFormContext()
  const { dict } = useLocale()
  const s = dict.step2

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        {s.heading}
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        {s.subheading}
      </p>

      <FormField
        name="experience_annees"
        label={s.experienceAnnees.label}
        description={s.experienceAnnees.description}
        required
      >
        <select
          {...register('experience_annees')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {experienceAnneesList.map(opt => (
            <option key={opt} value={opt}>{dict.options.experienceAnnees[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="nb_observateurs"
        label={s.nbObservateurs.label}
        description={s.nbObservateurs.description}
        required
      >
        <select
          {...register('nb_observateurs')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {nbObservateursList.map(opt => (
            <option key={opt} value={opt}>{opt} {s.nbObservateurs.suffix}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="outils_actuels"
        label={s.outilsActuels.label}
        description={s.outilsActuels.description}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-jokko-light">
                <th className="text-left py-2 px-3 font-medium text-gray-700">{s.outilsActuels.colOutil}</th>
                <th className="py-2 px-3 font-medium text-gray-700">{s.outilsActuels.colPrincipal}</th>
                <th className="py-2 px-3 font-medium text-gray-700">{s.outilsActuels.colOccasionnel}</th>
                <th className="py-2 px-3 font-medium text-gray-700">{s.outilsActuels.colJamais}</th>
              </tr>
            </thead>
            <tbody>
              {outilsList.map((outil, i) => (
                <tr key={outil} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-2 px-3 font-medium">{dict.options.outils[outil]}</td>
                  {usageList.map(usage => (
                    <td key={usage} className="py-2 px-3 text-center">
                      <input
                        type="radio"
                        value={usage}
                        {...register(`outils_actuels.${i}.usage` as const)}
                        className="text-jokko-primary focus:ring-jokko-primary"
                      />
                      <input type="hidden" value={outil} {...register(`outils_actuels.${i}.outil` as const)} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FormField>

      <FormField
        name="problemes_top3"
        label={s.problemesTop3.label}
        description={s.problemesTop3.description}
      >
        <textarea
          {...register('problemes_top3')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder={s.problemesTop3.placeholder}
        />
      </FormField>
    </div>
  )
}
