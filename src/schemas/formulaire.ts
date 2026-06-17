import { z } from 'zod'

// Label maps: valeur interne → libellé affiché
export const LABELS = {
  experienceAnnees: {
    '0': 'Non — première fois',
    '1-2': '1 à 2 ans',
    '3-4': '3 à 4 ans',
    '5+': '5 ans et plus',
  },
  geoType: {
    'auto': 'Oui — géolocalisation automatique',
    'manuelle': 'Oui — saisie manuelle de la position',
    'non': 'Non, pas nécessaire',
    'nsp': 'Je ne sais pas',
  },
  niveauGeo: {
    'bureau_vote': 'Bureau de vote',
    'commune': 'Commune',
    'departement': 'Département',
    'region': 'Région',
    'national': 'National',
  },
  modeOffline: {
    'critique': 'Oui — critique (zones sans connexion)',
    'secondaire': 'Oui — secondaire (utile mais pas bloquant)',
    'non': 'Non',
    'nsp': 'Je ne sais pas',
  },
  frequenceSignalement: {
    'continu': 'En continu (flux temps réel)',
    'quelques_heure': 'Quelques fois par heure',
    'quelques_jour': 'Quelques fois par jour',
    'une_fois': 'Une fois par session / tour',
  },
  alternativeVideo: {
    'audio_photo': 'Audio + photo',
    'photo_texte': 'Photo + description texte',
    'formulaire': 'Formulaire structuré',
    'video_indispensable': 'La vidéo est indispensable',
    'sans_objet': 'Sans objet pour nous',
  },
  horodatage: {
    'obligatoire': 'Oui — obligatoire et non modifiable',
    'modifiable': 'Oui — mais modifiable par l\'observateur',
    'non': 'Non, pas nécessaire',
  },
  canalCoordinateurs: {
    'smartphone': 'Smartphone uniquement',
    'ordinateur': 'Ordinateur uniquement',
    'les_deux': 'Les deux',
    'nsp': 'Je ne sais pas',
  },
  qualiteConnexion: {
    'bonne': 'Bonne (4G/fibre disponible)',
    'variable': 'Variable selon les zones',
    'faible': 'Faible (2G/3G instable)',
    'tres_faible': 'Très faible (SMS seulement)',
  },
  coutServeur: {
    'lt10eur': 'Moins de 10 €/mois',
    'lt30eur': 'Moins de 30 €/mois',
    'non_contraint': 'Pas de contrainte de coût',
    'nsp': 'Je ne sais pas',
  },
  prioriteControle: {
    'critique_auto': 'Critique — auto-hébergement obligatoire',
    'important': 'Important — préférons contrôler nos données',
    'neutre': 'Neutre — cloud tiers acceptable',
  },
  capaciteHebergement: {
    'equipe_interne': 'Oui — équipe technique interne',
    'vps_cloud': 'Oui — via VPS / cloud',
    'non': 'Non',
    'nsp': 'Je ne sais pas',
  },
  delaiModeration: {
    'lt1h': 'Moins d\'1 heure',
    'lt6h': 'Moins de 6 heures',
    'lt24h': 'Moins de 24 heures',
    'non_defini': 'Pas encore défini',
  },
  volumeSignalements: {
    'lt100': 'Moins de 100',
    '100-500': '100 à 500',
    '500-2000': '500 à 2 000',
    '2000+': 'Plus de 2 000',
  },
  frequenceRapports: {
    'quotidien': 'Quotidien',
    'hebdo': 'Hebdomadaire',
    'par_election': 'Un rapport par scrutin',
  },
  echeanceOutil: {
    'lt3mois': 'Dans moins de 3 mois',
    'lt6mois': 'Dans moins de 6 mois',
    'lt1an': 'Dans moins d\'1 an',
    'pas_urgent': 'Pas urgent',
  },
  dispoTechCamp: {
    'dakar': 'En présentiel à Dakar',
    'en_ligne': 'En ligne uniquement',
    'les_deux': 'Les deux',
    'non': 'Pas disponible',
  },
}

export const paysList = [
  'Sénégal', 'Côte d\'Ivoire', 'Mali', 'Burkina Faso', 'Niger',
  'Guinée', 'Bénin', 'Togo', 'Ghana', 'Nigéria', 'Cameroun',
  'Tchad', 'RDC', 'Gabon', 'République Centrafricaine', 'Autre'
] as const

// IDs NocoDB table pays — ordre identique à paysList (seedé le 2026-06-17)
export const PAYS_IDS: Record<string, number> = {
  'Sénégal': 1, 'Côte d\'Ivoire': 2, 'Mali': 3, 'Burkina Faso': 4, 'Niger': 5,
  'Guinée': 6, 'Bénin': 7, 'Togo': 8, 'Ghana': 9, 'Nigéria': 10, 'Cameroun': 11,
  'Tchad': 12, 'RDC': 13, 'Gabon': 14, 'République Centrafricaine': 15, 'Autre': 16,
}

export const typeOrgList = [
  'OSC nationale',
  'Média citoyen',
  'Civic tech',
  'Situation Room',
  'Org jeunesse',
  'Mouvement jeunes',
  'Autre'
] as const

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
  'WhatsApp', 'SMS', 'Telegram', 'Ushahidi',
  'KoBoToolbox', 'Google Sheets', 'App maison', 'Aucun', 'Autre'
] as const

export const usageList = [
  'principal', 'occasionnel', 'jamais'
] as const

export const menacesList = [
  'Piratage', 'Coupures internet', 'Désinformation',
  'Intimidation/arrestation', 'Surveillance', 'Aucune'
] as const

export const appareilsList = [
  'Android bas de gamme', 'Android milieu/haut',
  'iPhone', 'Téléphones basiques'
] as const

export const typesAlertesList = [
  'Push mobile', 'SMS sortant', 'Email',
  'Dashboard badge/son', 'WhatsApp/Telegram', 'Pas d\'alertes'
] as const

export const evenementsAlertesList = [
  'Incident critique', 'Cluster géographique',
  'Signalement avec preuve', 'Modération en attente',
  'Seuil incidents dépassé', 'Tentative intrusion'
] as const

export const typesPreuvesList = [
  'Texte', 'Photo', 'Audio', 'Vidéo',
  'Document scanné', 'GPS seul', 'Témoignage structuré'
] as const

export const visualisationsCartoList = [
  'Carte incidents temps réel', 'Heatmap densité',
  'Carte par circo/bureau', 'Carte filtrable',
  'Carte publique', 'Carte interne', 'Dashboard stats'
] as const

export const canauxSignalementList = [
  'WhatsApp', 'Telegram', 'SMS', 'Formulaire web',
  'App mobile Android', 'Email', 'USSD', 'Appel téléphonique'
] as const

export const fonctionnalitesList = [
  { id: 1, nom: 'Signalement multi-canal', categorie: 'multi_canal' },
  { id: 2, nom: 'Géolocalisation automatique', categorie: 'geo' },
  { id: 3, nom: 'Carte interactive publique', categorie: 'carte' },
  { id: 4, nom: 'Espace modération privé', categorie: 'moderation' },
  { id: 5, nom: 'Formulaire web observateurs', categorie: 'formulaire' },
  { id: 6, nom: 'Support preuves texte/photo/audio', categorie: 'preuves' },
  { id: 7, nom: 'Mode hors-ligne', categorie: 'offline' },
  { id: 8, nom: 'Alertes temps réel', categorie: 'alertes' },
  { id: 9, nom: 'Dashboard statistiques', categorie: 'dashboard' },
  { id: 10, nom: 'Export données', categorie: 'export' },
  { id: 11, nom: 'Multilingue', categorie: 'multilingual' },
  { id: 12, nom: 'Support USSD/SMS', categorie: 'ussd' },
  { id: 13, nom: 'App mobile Android', categorie: 'app_mobile' },
  { id: 14, nom: 'Adaptabilité autres contextes', categorie: 'adaptabilite' },
  { id: 15, nom: 'Multi-organisations', categorie: 'multi_org' },
  { id: 16, nom: 'Sécurité renforcée', categorie: 'securite' },
] as const

export const formulaireSchema = z.object({
  // Section 1: Organisation
  nom_organisation: z.string().min(2, 'Nom requis'),
  pays: z.enum(paysList),
  nom_repondant: z.string().min(2, 'Nom requis'),
  role_repondant: z.string().optional(),
  email_contact: z.string().email('Email invalide'),
  type_organisation: z.array(z.enum(typeOrgList)).min(1, 'Sélectionnez au moins un type'),

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
  canaux_signalement: z.array(z.enum(canauxSignalementList)).min(1, 'Sélectionnez au moins un canal'),
  mode_offline: z.enum(modeOfflineList),
  frequence_signalement: z.enum(frequenceSignalementList),

  // Section 5: Preuves
  types_preuves: z.array(z.enum(typesPreuvesList)).min(1, 'Sélectionnez au moins un type'),
  alternative_video: z.enum(alternativeVideoList),
  horodatage: z.enum(horodatageList),

  // Section 6: Alertes
  types_alertes: z.array(z.enum(typesAlertesList)).optional(),
  evenements_alertes: z.array(z.enum(evenementsAlertesList)).optional(),
  canal_coordinateurs: z.enum(canalCoordinateursList),

  // Section 7: Performance
  qualite_connexion: z.enum(qualiteConnexionList),
  appareils: z.array(z.enum(appareilsList)).min(1, 'Sélectionnez au moins un appareil'),
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
  outil_ideal: z.string().min(10, 'Description requise'),
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
    priorite: z.number().min(1).max(3),
  })).optional(),
})

export type FormulaireData = z.infer<typeof formulaireSchema>
