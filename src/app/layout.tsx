import '../index.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Davy de Haas',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000044" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
