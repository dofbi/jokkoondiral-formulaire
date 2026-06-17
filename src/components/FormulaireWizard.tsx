'use client'

import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { formulaireSchema, type FormulaireData, PAYS_IDS } from '@/schemas/formulaire'
import { ProgressBar } from './ProgressBar'
import { Step1Organisation } from './steps/Step1Organisation'
import { Step2Experience } from './steps/Step2Experience'
import { Step3Geolocalisation } from './steps/Step3Geolocalisation'
import { Step4Canaux } from './steps/Step4Canaux'
import { Step5Preuves } from './steps/Step5Preuves'
import { Step6Alertes } from './steps/Step6Alertes'
import { Step7Performance } from './steps/Step7Performance'
import { Step8Priorites } from './steps/Step8Priorites'
import { Step9Securite } from './steps/Step9Securite'
import { Step10OutilIdeal } from './steps/Step10OutilIdeal'
import { Step11Timeline } from './steps/Step11Timeline'
import { createRecord } from '@/lib/nocodb'

const steps = [
  'Organisation',
  'Expérience',
  'Géolocalisation',
  'Canaux',
  'Preuves',
  'Alertes',
  'Performance',
  'Priorités',
  'Sécurité',
  'Outil idéal',
  'Timeline',
]

export default function FormulaireWizard() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const methods = useForm<FormulaireData>({
    resolver: zodResolver(formulaireSchema),
    mode: 'onBlur',
    defaultValues: {
      priorisations: [],
    },
  })

  const { handleSubmit, trigger, watch } = methods

  // Efface l'erreur dès que l'utilisateur modifie un champ
  watch(() => { if (submitError) setSubmitError('') })

  const validateStep = async () => {
    const stepFields = getStepFields(currentStep)
    const isValid = await trigger(stepFields as any)
    return isValid
  }

  const nextStep = async () => {
    const isValid = await validateStep()
    if (isValid && currentStep < steps.length - 1) {
      setSubmitError('')
      setCurrentStep(prev => prev + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setSubmitError('')
      setCurrentStep(prev => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  const onSubmit = async (data: FormulaireData) => {
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // 1. Créer l'organisation avec le lien pays
      const paysId = PAYS_IDS[data.pays]
      const orgResult = await createRecord('mffdpajfcqrlhyb', {
        nom: data.nom_organisation,
        pays: paysId ? [{ Id: paysId }] : undefined,
        type_org: Array.isArray(data.type_organisation)
          ? data.type_organisation.join(',')
          : data.type_organisation,
        nom_repondant: data.nom_repondant,
        role_repondant: data.role_repondant,
        email_contact: data.email_contact,
      })

      // 2. Extraire les champs reponses_osc
      const {
        nom_organisation: _n, pays: _p, nom_repondant: _nr,
        role_repondant: _rr, email_contact: _e, type_organisation: _to,
        outils_actuels, priorisations, langues_terrain,
        visualisations_carto, canaux_signalement, types_preuves,
        types_alertes, evenements_alertes, appareils, menaces,
        ...reponseFields
      } = data

      // 3. Créer la réponse liée à l'organisation
      const reponseResult = await createRecord('ma6viztihufbutq', {
        statut: 'SOUMIS',
        organisation: [{ Id: orgResult.Id }],
        ...reponseFields,
        visualisations_carto: JSON.stringify(visualisations_carto ?? []),
        canaux_signalement: JSON.stringify(canaux_signalement ?? []),
        types_preuves: JSON.stringify(types_preuves ?? []),
        types_alertes: JSON.stringify(types_alertes ?? []),
        evenements_alertes: JSON.stringify(evenements_alertes ?? []),
        appareils: JSON.stringify(appareils ?? []),
        menaces: JSON.stringify(menaces ?? []),
      })

      // 4. Outils actuels liés à la réponse
      if (outils_actuels) {
        for (const outil of outils_actuels) {
          await createRecord('ml9hjjzm1aoredu', {
            outil: outil.outil,
            usage: outil.usage,
            reponse: [{ Id: reponseResult.Id }],
          })
        }
      }

      // 5. Langues terrain liées à la réponse (priorité = position 1/2/3)
      if (langues_terrain) {
        const languesFilled = langues_terrain.filter(l => l.langue)
        for (let i = 0; i < languesFilled.length; i++) {
          await createRecord('msu6yxyfrbye0xg', {
            langue: languesFilled[i].langue,
            priorite: i + 1,
            reponse: [{ Id: reponseResult.Id }],
          })
        }
      }

      // 6. Priorisations liées à la réponse et à la fonctionnalité
      if (priorisations) {
        for (const prio of priorisations) {
          const fonctId = Number(prio.fonctionnalite_id)
          if (!fonctId || isNaN(fonctId)) continue
          await createRecord('mtf25mgvrzw82gu', {
            note: prio.note,
            non_negociable: prio.non_negociable ?? false,
            reponse: [{ Id: reponseResult.Id }],
            fonctionnalite: [{ Id: fonctId }],
          })
        }
      }

      setSubmitSuccess(true)
    } catch (error) {
      const msg = error instanceof Error ? error.message : String(error)
      setSubmitError(`Erreur lors de l'envoi : ${msg}`)
      console.error('Submit error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-8 text-center">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            ✅ Formulaire envoyé avec succès !
          </h2>
          <p className="text-green-700">
            Merci pour votre participation. Votre réponse a été enregistrée.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <ProgressBar 
          steps={steps} 
          currentStep={currentStep} 
        />

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit, (errors) => {
              const fields = Object.keys(errors).join(', ')
              setSubmitError(`Certains champs obligatoires sont manquants. Vérifiez les étapes précédentes. (${fields})`)
            })}>
            <div className="mt-8">
              {currentStep === 0 && <Step1Organisation />}
              {currentStep === 1 && <Step2Experience />}
              {currentStep === 2 && <Step3Geolocalisation />}
              {currentStep === 3 && <Step4Canaux />}
              {currentStep === 4 && <Step5Preuves />}
              {currentStep === 5 && <Step6Alertes />}
              {currentStep === 6 && <Step7Performance />}
              {currentStep === 7 && <Step8Priorites />}
              {currentStep === 8 && <Step9Securite />}
              {currentStep === 9 && <Step10OutilIdeal />}
              {currentStep === 10 && <Step11Timeline />}
            </div>

            {submitError && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {submitError}
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Précédent
              </button>

              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-jokko-primary text-white rounded-lg hover:bg-jokko-secondary"
                >
                  Suivant →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-jokko-primary text-white rounded-lg hover:bg-jokko-secondary disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le formulaire'}
                </button>
              )}
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

function getStepFields(step: number): string[] {
  switch (step) {
    case 0: return ['nom_organisation', 'pays', 'nom_repondant', 'email_contact', 'type_organisation']
    case 1: return ['experience_annees', 'nb_observateurs']
    case 2: return ['geo_type', 'niveau_geo']
    case 3: return ['canaux_signalement', 'mode_offline', 'frequence_signalement']
    case 4: return ['types_preuves', 'alternative_video', 'horodatage']
    case 5: return ['canal_coordinateurs']
    case 6: return ['qualite_connexion', 'appareils', 'importance_legerete', 'cout_serveur_max']
    case 7: return [] // Priorisations optionnelles
    case 8: return ['priorite_controle', 'capacite_hebergement']
    case 9: return ['outil_ideal']
    case 10: return ['echeance_outil', 'dispo_tech_camp']
    default: return []
  }
}
