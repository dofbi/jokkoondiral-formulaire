import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { geoTypeList, niveauGeoList, visualisationsCartoList } from '@/schemas/formulaire'
import { useLocale } from '@/i18n/LocaleContext'

export function Step3Geolocalisation() {
  const { register } = useFormContext()
  const { dict } = useLocale()
  const s = dict.step3

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-2">
        {s.heading}
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        {s.subheading}
      </p>

      <FormField
        name="geo_type"
        label={s.geoType.label}
        description={s.geoType.description}
        required
      >
        <select
          {...register('geo_type')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {geoTypeList.map(opt => (
            <option key={opt} value={opt}>{dict.options.geoType[opt]}</option>
          ))}
        </select>
      </FormField>

      <FormField
        name="visualisations_carto"
        label={s.visualisationsCarto.label}
        description={s.visualisationsCarto.description}
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
              <span className="text-sm">{dict.options.visualisationsCarto[type]}</span>
            </label>
          ))}
        </div>
      </FormField>

      <FormField
        name="niveau_geo"
        label={s.niveauGeo.label}
        description={s.niveauGeo.description}
        required
      >
        <select
          {...register('niveau_geo')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.select}</option>
          {niveauGeoList.map(opt => (
            <option key={opt} value={opt}>{dict.options.niveauGeo[opt]}</option>
          ))}
        </select>
      </FormField>
    </div>
  )
}
