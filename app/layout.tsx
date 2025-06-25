import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Safe Zone',
  description: 'Created by SentryLabs',
  generator: 'Safe Zone',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
