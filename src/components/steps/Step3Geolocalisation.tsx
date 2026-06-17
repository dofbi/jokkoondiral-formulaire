import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { geoTypeList, niveauGeoList } from '@/schemas/formulaire'

export function Step3Geolocalisation() {
  const { register } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        3. Géolocalisation & cartographie
      </h2>

      <FormField name="geo_type" label="Type de géolocalisation nécessaire" required>
        <select
          {...register('geo_type')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {geoTypeList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>

      <FormField name="niveau_geo" label="Niveau géographique de couverture" required>
        <select
          {...register('niveau_geo')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez</option>
          {niveauGeoList.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
