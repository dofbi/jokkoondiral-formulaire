import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { paysList, typeOrgList } from '@/schemas/formulaire'
import { useLocale } from '@/i18n/LocaleContext'

export function Step1Organisation() {
  const { register } = useFormContext()
  const { dict } = useLocale()
  const s = dict.step1

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        {s.heading}
      </h2>

      <FormField name="nom_organisation" label={s.nomOrganisation.label} required>
        <input
          {...register('nom_organisation')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder={s.nomOrganisation.placeholder}
        />
      </FormField>

      <FormField name="pays" label={s.pays.label} required>
        <select
          {...register('pays')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">{dict.common.selectCountry}</option>
          {paysList.map(pays => (
            <option key={pays} value={pays}>{dict.options.pays[pays]}</option>
          ))}
        </select>
      </FormField>

      <FormField name="nom_repondant" label={s.nomRepondant.label} required>
        <input
          {...register('nom_repondant')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder={s.nomRepondant.placeholder}
        />
      </FormField>

      <FormField name="role_repondant" label={s.roleRepondant.label}>
        <input
          {...register('role_repondant')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder={s.roleRepondant.placeholder}
        />
      </FormField>

      <FormField name="email_contact" label={s.emailContact.label} required>
        <input
          type="email"
          {...register('email_contact')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder={s.emailContact.placeholder}
        />
      </FormField>

      <FormField name="type_organisation" label={s.typeOrganisation.label} required>
        <div className="space-y-2">
          {typeOrgList.map(type => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={type}
                {...register('type_organisation')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{dict.options.typeOrg[type]}</span>
            </label>
          ))}
        </div>
      </FormField>
    </div>
  )
}
