import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { geoTypeList, niveauGeoList, visualisationsCartoList, LABELS } from '@/schemas/formulaire'

export function Step3Geolocalisation() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        3. Géolocalisation &amp; cartographie
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        La géolocalisation permet de situer chaque incident sur une carte et de visualiser les zones à risque en temps réel.
      </p>

      <FormField
        name="geo_type"
        label="Géolocalisation des incidents"
        description="Souhaitez-vous que la position géographique d'un incident soit détectée automatiquement via GPS, saisie manuellement par l'observateur, ou non nécessaire ?"
        required
      >
        <select
          {...register('geo_type')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {geoTypeList.map(opt => (
            <option key={opt} value={opt}>{LABELS.geoType[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="visualisations_carto"
        label="Types de visualisation cartographique souhaités"
        description="Sélectionnez tous les types de cartes utiles pour votre organisation."
      >
        <div className="space-y-2">
          {visualisationsCartoList.map(type => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={type}
                {...register('visualisations_carto')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="niveau_geo"
        label="Niveau géographique le plus fin nécessaire"
        description="Quel est le niveau de précision géographique minimum dont vous avez besoin pour analyser et afficher les données ?"
        required
      >
        <select
          {...register('niveau_geo')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {niveauGeoList.map(opt => (
            <option key={opt} value={opt}>{LABELS.niveauGeo[opt]}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
