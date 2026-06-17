import { useFormContext } from 'react-hook-form'
import { FormField } from '../FormField'
import { paysList, typeOrgList } from '@/schemas/formulaire'

export function Step1Organisation() {
  const { register, formState: { errors } } = useFormContext()

  return (
    <div>
      <h2 className="text-2xl font-bold text-jokko-primary mb-6">
        1. Informations sur l'organisation
      </h2>

      <FormField name="nom_organisation" label="Nom de l'organisation" required>
        <input
          {...register('nom_organisation')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Nom de votre organisation"
        />
      </FormField>

      <FormField name="pays" label="Pays" required>
        <select
          {...register('pays')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
        >
          <option value="">Sélectionnez un pays</option>
          {paysList.map(pays => (
            <option key={pays} value={pays}>{pays}</option>
          ))}
        </select>
      </FormField>

      <FormField name="nom_repondant" label="Nom et prénom du répondant" required>
        <input
          {...register('nom_repondant')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Votre nom complet"
        />
      </FormField>

      <FormField name="role_repondant" label="Rôle / Poste">
        <input
          {...register('role_repondant')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="Votre fonction"
        />
      </FormField>

      <FormField name="email_contact" label="Email de contact" required>
        <input
          type="email"
          {...register('email_contact')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-jokko-primary focus:border-transparent"
          placeholder="email@exemple.com"
        />
      </FormField>

      <FormField name="type_organisation" label="Type d'organisation" required>
        <div className="space-y-2">
          {typeOrgList.map(type => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={type}
                {...register('type_organisation')}
                className="rounded text-jokko-primary focus:ring-jokko-primary"
              />
              <span className="text-sm">{type}</span>
            </label>
          ))}
        </div>
      </FormField>
    </div>
  )
}
