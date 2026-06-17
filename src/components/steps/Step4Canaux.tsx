import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { canauxSignalementList, modeOfflineList, frequenceSignalementList, LABELS } from '@/schemas/formulaire'

export function Step4Canaux() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        4. Remontée des données terrain
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Comment vos observateurs envoient-ils leurs signalements depuis le terrain ? Pensez aux contraintes de connectivité et aux appareils disponibles.
      </p>

      <FormField
        name="canaux_signalement"
        label="Canaux de signalement utilisés par vos observateurs"
        description="Sélectionnez tous les canaux que vos observateurs pourraient utiliser pour remonter un incident."
        required
      >
        <div className="space-y-2">
          {canauxSignalementList.map(canal => (
            <label key={canal} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={canal}
                {...register('canaux_signalement')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{canal}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="mode_offline"
        label="Mode hors-ligne nécessaire"
        description="L'accès à internet peut être coupé le jour du scrutin. Un mode hors-ligne permet de continuer à saisir des données et de les synchroniser dès que la connexion revient."
        required
      >
        <select
          {...register('mode_offline')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {modeOfflineList.map(opt => (
            <option key={opt} value={opt}>{LABELS.modeOffline[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="frequence_signalement"
        label="Fréquence des signalements"
        description="À quelle fréquence vos observateurs envoient-ils des signalements pendant une journée d'élection ?"
        required
      >
        <select
          {...register('frequence_signalement')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {frequenceSignalementList.map(opt => (
            <option key={opt} value={opt}>{LABELS.frequenceSignalement[opt]}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
