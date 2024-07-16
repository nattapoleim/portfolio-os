import ClientComponent from '@/components/ClientComponent'
import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const ibm = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Portfolio OS',
  description: "Nattapol's Portfolio.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <ClientComponent>{children}</ClientComponent>
      </body>
    </html>
  )
}
