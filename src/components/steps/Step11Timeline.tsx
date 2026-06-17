import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { echeanceOutilList, dispoTechCampList, LABELS } from '@/schemas/formulaire'

export function Step11Timeline() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        11. Prochaines élections &amp; disponibilité
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Ces informations nous aident à prioriser le développement et à planifier les sessions d'accompagnement avec votre organisation.
      </p>

      <FormField
        name="prochain_scrutin"
        label="Prochain scrutin / processus électoral"
        description="Quel est le prochain processus électoral pour lequel vous avez besoin de cet outil ? (ex : Élections législatives Sénégal, Novembre 2026)"
      >
        <input
          {...register('prochain_scrutin')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Type de scrutin et date approximative"
        />
      </FormField>

      <FormField
        name="echeance_outil"
        label="Échéance souhaitée pour disposer de l'outil"
        description="Dans quel délai avez-vous besoin que la plateforme soit opérationnelle pour votre prochain déploiement ?"
        required
      >
        <select
          {...register('echeance_outil')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {echeanceOutilList.map(opt => (
            <option key={opt} value={opt}>{LABELS.echeanceOutil[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="langues_terrain"
        label="Langues utilisées par vos observateurs terrain"
        description="Listez les langues parlées par vos observateurs. Cela nous permettra de prioriser les traductions dans la plateforme. (ex : Wolof, Pulaar, Sérère, Bambara…)"
      >
        <div className="space-y-2">
          <input
            {...register('langues_terrain.0.langue')}
            placeholder="Langue principale (ex : Wolof)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          />
          <input type="hidden" value={1} {...register('langues_terrain.0.priorite', { valueAsNumber: true })} />
          <input
            {...register('langues_terrain.1.langue')}
            placeholder="2ème langue (ex : Pulaar)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          />
          <input type="hidden" value={2} {...register('langues_terrain.1.priorite', { valueAsNumber: true })} />
          <input
            {...register('langues_terrain.2.langue')}
            placeholder="3ème langue (optionnel)"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          />
          <input type="hidden" value={3} {...register('langues_terrain.2.priorite', { valueAsNumber: true })} />
        </div>
      </FormField>

      <FormField
        name="dispo_tech_camp"
        label="Disponibilité pour le Tech Camp"
        description="Un Tech Camp de formation et co-construction sera organisé avec les OSC participantes. Pouvez-vous y participer ?"
        required
      >
        <select
          {...register('dispo_tech_camp')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {dispoTechCampList.map(opt => (
            <option key={opt} value={opt}>{LABELS.dispoTechCamp[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="remarques"
        label="Remarques ou suggestions complémentaires"
        description="Y a-t-il des besoins spécifiques à votre contexte national que nous n'avons pas couverts dans ce formulaire ?"
      >
        <textarea
          {...register('remarques')}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Toute information complémentaire utile pour adapter la plateforme à votre contexte..."
        />
      </FormField>
    </div>
  )
}
