import { z } from 'zod'

// Libellés affichés (FR/EN) : src/i18n/dictionaries/{fr,en}.ts → dict.options.*
// Les listes ci-dessous ne contiennent que les clés stables — jamais de texte
// affiché — pour que la valeur soumise à NocoDB reste indépendante de la
// langue active dans l'UI.

// Les 15 premiers sont seedés dans NocoDB depuis le 2026-06-17 (IDs 1-16, cf PAYS_IDS).
// Les 39 suivants (issue #3) doivent être seedés via scripts/seed-pays.mjs avant
// d'ajouter leurs IDs ci-dessous — voir le commentaire sur PAYS_IDS.
export const paysList = [
  'senegal', 'cote_ivoire', 'mali', 'burkina_faso', 'niger',
  'guinee', 'benin', 'togo', 'ghana', 'nigeria', 'cameroun',
  'tchad', 'rdc', 'gabon', 'republique_centrafricaine',
  'algerie', 'angola', 'botswana', 'burundi', 'cap_vert', 'comores',
  'congo_brazzaville', 'djibouti', 'egypte', 'guinee_equatoriale',
  'erythree', 'eswatini', 'ethiopie', 'gambie', 'guinee_bissau', 'kenya',
  'lesotho', 'liberia', 'libye', 'madagascar', 'malawi', 'maroc',
  'maurice', 'mauritanie', 'mozambique', 'namibie', 'ouganda', 'rwanda',
  'sao_tome', 'seychelles', 'sierra_leone', 'somalie', 'soudan',
  'soudan_sud', 'tanzanie', 'tunisie', 'zambie', 'zimbabwe',
  'afrique_sud', 'autre'
] as const

// IDs NocoDB table pays (mxvhaff41wxm7ai), clés par slug (indépendant de la
// langue affichée). Les 16 premiers sont seedés (2026-06-17). Les entrées
// ajoutées pour l'issue #3 (54 pays) ne sont PAS encore dans PAYS_IDS :
// exécuter scripts/seed-pays.mjs (nécessite NOCODB_TOKEN) puis compléter cette
// map avec les IDs retournés — voir plan snoopy-waddling-clock.md. Tant que ce
// n'est pas fait, sélectionner un pays hors de cette liste de 16 soumet le
// formulaire sans lien `pays` (FormulaireWizard.tsx ignore silencieusement un
// lookup manquant).
export const PAYS_IDS: Record<string, number> = {
  senegal: 1, cote_ivoire: 2, mali: 3, burkina_faso: 4, niger: 5,
  guinee: 6, benin: 7, togo: 8, ghana: 9, nigeria: 10, cameroun: 11,
  tchad: 12, rdc: 13, gabon: 14, republique_centrafricaine: 15, autre: 16,
}

export const typeOrgList = [
  'osc_nationale',
  'media_citoyen',
  'civic_tech',
  'situation_room',
  'org_jeunesse',
  'mouvement_jeunes',
  'autre'
] as const

// organisations.type_org est un champ NocoDB MultiSelect à options fixes —
// contrairement aux listes stockées en LongText/JSON, il rejette toute
// valeur hors de cette liste. La valeur soumise doit donc rester ce texte
// canonique (déjà configuré côté NocoDB) quelle que soit la langue affichée.
export const TYPE_ORG_NOCODB: Record<string, string> = {
  osc_nationale: 'OSC nationale',
  media_citoyen: 'Média citoyen',
  civic_tech: 'Civic tech',
  situation_room: 'Situation Room',
  org_jeunesse: 'Org jeunesse',
  mouvement_jeunes: 'Mouvement jeunes',
  autre: 'Autre',
}

export const experienceAnneesList = [
  '0', '1-2', '3-4', '5+'
] as const

export const nbObservateursList = [
  '1-10', '11-50', '51-100', '100-150', '200+'
] as const

export const geoTypeList = [
  'auto', 'manuelle', 'non', 'nsp'
] as const

export const niveauGeoList = [
  'bureau_vote', 'commune', 'departement', 'region', 'national'
] as const

export const modeOfflineList = [
  'critique', 'secondaire', 'non', 'nsp'
] as const

export const frequenceSignalementList = [
  'continu', 'quelques_heure', 'quelques_jour', 'une_fois'
] as const

export const alternativeVideoList = [
  'audio_photo', 'photo_texte', 'formulaire', 'video_indispensable', 'sans_objet'
] as const

export const horodatageList = [
  'obligatoire', 'modifiable', 'non'
] as const

export const canalCoordinateursList = [
  'smartphone', 'ordinateur', 'les_deux', 'nsp'
] as const

export const qualiteConnexionList = [
  'bonne', 'variable', 'faible', 'tres_faible'
] as const

export const coutServeurList = [
  'lt10eur', 'lt30eur', 'non_contraint', 'nsp'
] as const

export const prioriteControleList = [
  'critique_auto', 'important', 'neutre'
] as const

export const capaciteHebergementList = [
  'equipe_interne', 'vps_cloud', 'non', 'nsp'
] as const

export const delaiModerationList = [
  'lt1h', 'lt6h', 'lt24h', 'non_defini'
] as const

export const volumeSignalementsList = [
  'lt100', '100-500', '500-2000', '2000+'
] as const

export const frequenceRapportsList = [
  'quotidien', 'hebdo', 'par_election'
] as const

export const echeanceOutilList = [
  'lt3mois', 'lt6mois', 'lt1an', 'pas_urgent'
] as const

export const dispoTechCampList = [
  'dakar', 'en_ligne', 'les_deux', 'non'
] as const

export const outilsList = [
  'whatsapp', 'sms', 'telegram', 'ushahidi',
  'kobotoolbox', 'google_sheets', 'app_maison', 'aucun', 'autre'
] as const

// outils_actuels.outil est un champ NocoDB SingleSelect à options fixes —
// même contrainte que TYPE_ORG_NOCODB ci-dessus.
export const OUTILS_NOCODB: Record<string, string> = {
  whatsapp: 'WhatsApp',
  sms: 'SMS',
  telegram: 'Telegram',
  ushahidi: 'Ushahidi',
  kobotoolbox: 'KoBoToolbox',
  google_sheets: 'Google Sheets',
  app_maison: 'App maison',
  aucun: 'Aucun',
  autre: 'Autre',
}

export const usageList = [
  'principal', 'occasionnel', 'jamais'
] as const

export const menacesList = [
  'piratage', 'coupures_internet', 'desinformation',
  'intimidation_arrestation', 'surveillance', 'aucune'
] as const

export const appareilsList = [
  'android_bas_gamme', 'android_milieu_haut',
  'iphone', 'telephones_basiques'
] as const

export const typesAlertesList = [
  'push_mobile', 'sms_sortant', 'email',
  'dashboard_badge_son', 'whatsapp_telegram', 'pas_alertes'
] as const

export const evenementsAlertesList = [
  'incident_critique', 'cluster_geographique',
  'signalement_preuve', 'moderation_attente',
  'seuil_incidents_depasse', 'tentative_intrusion'
] as const

export const typesPreuvesList = [
  'texte', 'photo', 'audio', 'video',
  'document_scanne', 'gps_seul', 'temoignage_structure'
] as const

export const visualisationsCartoList = [
  'carte_incidents_temps_reel', 'heatmap_densite',
  'carte_circo_bureau', 'carte_filtrable',
  'carte_publique', 'carte_interne', 'dashboard_stats'
] as const

export const canauxSignalementList = [
  'whatsapp', 'telegram', 'sms', 'formulaire_web',
  'app_mobile_android', 'email', 'ussd', 'appel_telephonique'
] as const

// `nom` affiché vient de dict.options.fonctionnalites[id] (fr.ts/en.ts) — seul
// `id` est soumis à NocoDB (fonctionnalite_id), donc cette liste ne porte plus
// de texte affiché, uniquement l'id stable et la catégorie (badge technique,
// non traduit).
export const fonctionnalitesList = [
  { id: 1, categorie: 'multi_canal' },
  { id: 2, categorie: 'geo' },
  { id: 3, categorie: 'carte' },
  { id: 4, categorie: 'moderation' },
  { id: 5, categorie: 'formulaire' },
  { id: 6, categorie: 'preuves' },
  { id: 7, categorie: 'offline' },
  { id: 8, categorie: 'alertes' },
  { id: 9, categorie: 'dashboard' },
  { id: 10, categorie: 'export' },
  { id: 11, categorie: 'multilingual' },
  { id: 12, categorie: 'ussd' },
  { id: 13, categorie: 'app_mobile' },
  { id: 14, categorie: 'adaptabilite' },
  { id: 15, categorie: 'multi_org' },
  { id: 16, categorie: 'securite' },
] as const

export const formulaireSchema = z.object({
  // Section 1: Organisation
  nom_organisation: z.string().min(2, 'nom_requis'),
  pays: z.enum(paysList),
  nom_repondant: z.string().min(2, 'nom_requis'),
  role_repondant: z.string().optional(),
  email_contact: z.string().email('email_invalide'),
  type_organisation: z.array(z.enum(typeOrgList)).min(1, 'selectionnez_type'),

  // Section 2: Expérience
  experience_annees: z.enum(experienceAnneesList),
  nb_observateurs: z.enum(nbObservateursList),
  outils_actuels: z.preprocess(
    (val) => Array.isArray(val) ? val.filter((o: any) => o?.usage) : undefined,
    z.array(z.object({
      outil: z.string(),
      usage: z.string(),
    })).optional()
  ),
  problemes_top3: z.string().optional(),

  // Section 3: Géolocalisation
  geo_type: z.enum(geoTypeList),
  visualisations_carto: z.array(z.enum(visualisationsCartoList)).optional(),
  niveau_geo: z.enum(niveauGeoList),

  // Section 4: Canaux
  canaux_signalement: z.array(z.enum(canauxSignalementList)).min(1, 'selectionnez_canal'),
  mode_offline: z.enum(modeOfflineList),
  frequence_signalement: z.enum(frequenceSignalementList),

  // Section 5: Preuves
  types_preuves: z.array(z.enum(typesPreuvesList)).min(1, 'selectionnez_type'),
  alternative_video: z.enum(alternativeVideoList),
  horodatage: z.enum(horodatageList),

  // Section 6: Alertes
  types_alertes: z.array(z.enum(typesAlertesList)).optional(),
  evenements_alertes: z.array(z.enum(evenementsAlertesList)).optional(),
  canal_coordinateurs: z.enum(canalCoordinateursList),

  // Section 7: Performance
  qualite_connexion: z.enum(qualiteConnexionList),
  appareils: z.array(z.enum(appareilsList)).min(1, 'selectionnez_appareil'),
  importance_legerete: z.number().min(1).max(5),
  cout_serveur_max: z.enum(coutServeurList),

  // Section 8: Priorités
  priorisations: z.preprocess(
    (val) => Array.isArray(val) ? val.filter((o: any) => o?.note || o?.non_negociable) : undefined,
    z.array(z.object({
      fonctionnalite_id: z.union([z.number(), z.string()]).optional(),
      note: z.preprocess(
        v => !v || v === '' ? undefined : Number(v),
        z.number().min(1).max(5).optional()
      ),
      non_negociable: z.boolean().optional(),
    })).optional()
  ),

  // Section 9: Sécurité
  priorite_controle: z.enum(prioriteControleList),
  menaces: z.array(z.enum(menacesList)).optional(),
  capacite_hebergement: z.enum(capaciteHebergementList),
  niveau_maturite_num: z.number().min(1).max(5).optional(),
  besoins_cybersecurite: z.string().optional(),
  volume_signalements: z.enum(volumeSignalementsList).optional(),
  nb_moderateurs: z.number().optional(),
  frequence_rapports: z.enum(frequenceRapportsList).optional(),
  processus_validation: z.string().optional(),
  qui_valide: z.string().optional(),
  delai_moderation: z.enum(delaiModerationList).optional(),
  fonctionnalites_non_negociables: z.string().optional(),

  // Section 10: Outil idéal
  outil_ideal: z.string().min(10, 'description_requise'),
  besoins_critiques: z.string().optional(),
  contraintes_nationales: z.string().optional(),

  // Section 11: Timeline
  prochain_scrutin: z.string().optional(),
  echeance_outil: z.enum(echeanceOutilList),
  dispo_tech_camp: z.enum(dispoTechCampList),
  remarques: z.string().optional(),

  // Langues terrain
  langues_terrain: z.array(z.object({
    langue: z.string(),
    priorite: z.number().min(1).max(3).optional(),
  })).optional(),
})

export type FormulaireData = z.infer<typeof formulaireSchema>
