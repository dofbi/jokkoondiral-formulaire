// One-off seed script for GitHub issue #3 (liste des pays incomplète).
// Adds the 39 African countries missing from the NocoDB `pays` table
// (table mxvhaff41wxm7ai already has 15 countries + 'Autre' seeded 2026-06-17,
// IDs 1-16 — see PAYS_IDS in src/schemas/formulaire.ts).
//
// Usage:
//   NOCODB_TOKEN=xxx node scripts/seed-pays.mjs
//
// After running, the script prints the new records' `Id` values in insertion
// order. Because `pays.id` is an AutoNumber PK, inserting sequentially against
// an empty tail should yield IDs 17-55 — but paste back whatever the script
// prints (don't assume) so PAYS_IDS in src/schemas/formulaire.ts can be
// completed accurately.

const NOCODB_URL = process.env.NOCODB_URL || 'https://app.nocodb.com'
const NOCODB_BASE_ID = process.env.NOCODB_BASE_ID || 'p8vtu38vizdrman'
const PAYS_TABLE_ID = 'mxvhaff41wxm7ai'
const NOCODB_TOKEN = process.env.NOCODB_TOKEN

// Must match the order of the 39 new entries appended to `paysList` in
// src/schemas/formulaire.ts (everything after 'République Centrafricaine',
// before 'Autre').
const NOUVEAUX_PAYS = [
  'Algérie', 'Angola', 'Botswana', 'Burundi', 'Cap-Vert', 'Comores',
  'Congo-Brazzaville', 'Djibouti', 'Égypte', 'Guinée équatoriale',
  'Érythrée', 'Eswatini', 'Éthiopie', 'Gambie', 'Guinée-Bissau', 'Kenya',
  'Lesotho', 'Libéria', 'Libye', 'Madagascar', 'Malawi', 'Maroc',
  'Maurice', 'Mauritanie', 'Mozambique', 'Namibie', 'Ouganda', 'Rwanda',
  'Sao Tomé-et-Principe', 'Seychelles', 'Sierra Leone', 'Somalie', 'Soudan',
  'Soudan du Sud', 'Tanzanie', 'Tunisie', 'Zambie', 'Zimbabwe',
  'Afrique du Sud',
]

async function main() {
  if (!NOCODB_TOKEN) {
    console.error('NOCODB_TOKEN manquant. Usage: NOCODB_TOKEN=xxx node scripts/seed-pays.mjs')
    process.exit(1)
  }

  const url = `${NOCODB_URL}/api/v1/db/data/bulk/noco/${NOCODB_BASE_ID}/${PAYS_TABLE_ID}`
  const body = NOUVEAUX_PAYS.map(nom => ({ nom }))

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'xc-token': NOCODB_TOKEN,
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    console.error(`Échec (${response.status}):`, await response.text())
    process.exit(1)
  }

  const result = await response.json()
  console.log('Réponse NocoDB brute:', JSON.stringify(result, null, 2))
  console.log('\nSi la réponse contient les Ids, mets à jour PAYS_IDS dans src/schemas/formulaire.ts avec:')
  NOUVEAUX_PAYS.forEach((nom, i) => {
    console.log(`  '${nom}': <id_retourné[${i}]>,`)
  })
}

main()
