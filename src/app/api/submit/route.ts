import { NextRequest, NextResponse } from 'next/server'

const NOCODB_URL = process.env.NOCODB_URL || 'https://app.nocodb.com'
const NOCODB_TOKEN = process.env.NOCODB_TOKEN
const NOCODB_BASE_ID = process.env.NOCODB_BASE_ID || 'p8vtu38vizdrman'

export async function POST(request: NextRequest) {
  try {
    const { tableId, data } = await request.json()

    if (!NOCODB_TOKEN) {
      return NextResponse.json(
        { error: 'Token NocoDB non configuré' },
        { status: 500 }
      )
    }

    const response = await fetch(
      `${NOCODB_URL}/api/v1/db/data/noco/${NOCODB_BASE_ID}/${tableId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xc-token': NOCODB_TOKEN,
        },
        body: JSON.stringify(data),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      return NextResponse.json(
        { error: `Erreur NocoDB: ${error}` },
        { status: response.status }
      )
    }

    const result = await response.json()
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: `Erreur serveur: ${error}` },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const tableId = searchParams.get('tableId')

    if (!tableId) {
      return NextResponse.json(
        { error: 'tableId requis' },
        { status: 400 }
      )
    }

    if (!NOCODB_TOKEN) {
      return NextResponse.json(
        { error: 'Token NocoDB non configuré' },
        { status: 500 }
      )
    }

    const response = await fetch(
      `${NOCODB_URL}/api/v1/db/data/noco/${NOCODB_BASE_ID}/${tableId}`,
      {
        method: 'GET',
        headers: {
          'xc-token': NOCODB_TOKEN,
        },
      }
    )

    if (!response.ok) {
      const error = await response.text()
      return NextResponse.json(
        { error: `Erreur NocoDB: ${error}` },
        { status: response.status }
      )
    }

    const result = await response.json()
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: `Erreur serveur: ${error}` },
      { status: 500 }
    )
  }
}
