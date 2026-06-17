import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { typesAlertesList, evenementsAlertesList, canalCoordinateursList, LABELS } from '@/schemas/formulaire'

export function Step6Alertes() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        6. Alertes &amp; notifications
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Un système d'alertes permet à vos coordinateurs d'être informés immédiatement des incidents critiques sans avoir à surveiller le tableau de bord en permanence.
      </p>

      <FormField
        name="types_alertes"
        label="Types d'alertes nécessaires"
        description="Sur quel(s) canal(aux) souhaitez-vous recevoir les alertes ? Pensez aux canaux les plus fiables dans votre contexte."
      >
        <div className="space-y-2">
          {typesAlertesList.map(type => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={type}
                {...register('types_alertes')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="evenements_alertes"
        label="Événements déclenchant une alerte prioritaire"
        description="Quels types d'événements doivent déclencher une alerte immédiate pour votre équipe de coordination ?"
      >
        <div className="space-y-2">
          {evenementsAlertesList.map(evt => (
            <label key={evt} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={evt}
                {...register('evenements_alertes')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{evt}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="canal_coordinateurs"
        label="Canal principal de réception des alertes coordinateurs"
        description="Sur quel appareil vos coordinateurs travaillent-ils principalement le jour de l'élection ?"
        required
      >
        <select
          {...register('canal_coordinateurs')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {canalCoordinateursList.map(opt => (
            <option key={opt} value={opt}>{LABELS.canalCoordinateurs[opt]}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
