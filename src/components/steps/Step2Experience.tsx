import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { experienceAnneesList, nbObservateursList, outilsList, usageList, LABELS } from '@/schemas/formulaire'

export function Step2Experience() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        2. Expérience &amp; outils actuels
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Ces informations nous aident à adapter la plateforme à votre niveau d'expérience et aux outils que vous utilisez déjà.
      </p>

      <FormField
        name="experience_annees"
        label="Expérience en déploiement d'observateurs électoraux"
        description="Depuis combien d'années votre organisation déploie-t-elle des observateurs lors d'élections ?"
        required
      >
        <select
          {...register('experience_annees')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {experienceAnneesList.map(opt => (
            <option key={opt} value={opt}>{LABELS.experienceAnnees[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="nb_observateurs"
        label="Nombre d'observateurs mobilisés lors d'une élection"
        description="Estimation du nombre total d'observateurs terrain que vous déployez lors d'un scrutin."
        required
      >
        <select
          {...register('nb_observateurs')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {nbObservateursList.map(opt => (
            <option key={opt} value={opt}>{opt} observateurs</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="outils_actuels"
        label="Outils numériques actuellement utilisés"
        description="Pour chaque outil, indiquez s'il est votre outil principal, utilisé occasionnellement, ou jamais utilisé par votre organisation."
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-jokko-light">
                <th className="text-left py-2 px-3 font-medium text-gray-700">Outil</th>
                <th className="py-2 px-3 font-medium text-gray-700">Principal</th>
                <th className="py-2 px-3 font-medium text-gray-700">Occasionnel</th>
                <th className="py-2 px-3 font-medium text-gray-700">Jamais</th>
              </tr>
            </thead>
            <tbody>
              {outilsList.map((outil, i) => (
                <tr key={outil} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="py-2 px-3 font-medium">{outil}</td>
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
        label="Top 3 des problèmes avec vos outils actuels"
        description="Quels sont vos 3 principaux problèmes ? (ex : données dispersées, pas de cartographie, pas de vérification, mauvaise connectivité, trop complexe, pas sécurisé…)"
      >
        <textarea
          {...register('problemes_top3')}
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="1. …&#10;2. …&#10;3. …"
        />
      </FormField>
    </div>
  )
}
