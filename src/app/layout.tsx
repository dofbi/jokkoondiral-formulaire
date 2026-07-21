import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jokkondiral — Formulaire OSC',
  description: 'Plateforme d\'observation électorale citoyenne',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/logo-icon.svg" />
      </head>
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
}
