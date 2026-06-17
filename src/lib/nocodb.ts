// Client NocoDB API
const NOCODB_URL = process.env.NEXT_PUBLIC_NOCODB_URL || 'https://app.nocodb.com'
const NOCODB_BASE_ID = process.env.NEXT_PUBLIC_NOCODB_BASE_ID || 'p8vtu38vizdrman'

export async function createRecord(tableId: string, data: Record<string, unknown>) {
  const response = await fetch(`/api/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ tableId, data }),
  })

  if (!response.ok) {
    throw new Error(`Erreur API: ${response.statusText}`)
  }

  return response.json()
}

export async function getRecords(tableId: string) {
  const response = await fetch(`/api/submit?tableId=${tableId}`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error(`Erreur API: ${response.statusText}`)
  }

  return response.json()
}
