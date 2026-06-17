import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { qualiteConnexionList, appareilsList, coutServeurList, LABELS } from '@/schemas/formulaire'

export function Step7Performance() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        7. Légèreté &amp; performance
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        La plateforme doit fonctionner dans les conditions réelles de votre terrain — connexion limitée, appareils bas de gamme, budget serveur serré.
      </p>

      <FormField
        name="qualite_connexion"
        label="Qualité de la connexion internet sur le terrain"
        description="Quelle est la qualité moyenne de la connexion internet dans les zones où vos observateurs sont déployés ?"
        required
      >
        <select
          {...register('qualite_connexion')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {qualiteConnexionList.map(opt => (
            <option key={opt} value={opt}>{LABELS.qualiteConnexion[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="appareils"
        label="Appareils utilisés par les observateurs"
        description="Quels types d'appareils vos observateurs utilisent-ils pour saisir et envoyer leurs signalements ?"
        required
      >
        <div className="space-y-2">
          {appareilsList.map(appareil => (
            <label key={appareil} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={appareil}
                {...register('appareils')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{appareil}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="importance_legerete"
        label="Importance de la légèreté de l'application (1-5)"
        description="Une application légère consomme peu de données mobiles et fonctionne sur des appareils d'entrée de gamme. Quelle est l'importance de ce critère pour vous ?"
        required
      >
        <input
          type="range"
          min="1"
          max="5"
          {...register('importance_legerete', { valueAsNumber: true })}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500">
          <span>1 — Peu important</span>
          <span>5 — Très important</span>
        </div>
      </FormField>

      <FormField
        name="cout_serveur_max"
        label="Budget mensuel maximum pour l'hébergement"
        description="Quel est le budget mensuel maximum que votre organisation peut allouer à l'hébergement de la plateforme ?"
        required
      >
        <select
          {...register('cout_serveur_max')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {coutServeurList.map(opt => (
            <option key={opt} value={opt}>{LABELS.coutServeur[opt]}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
