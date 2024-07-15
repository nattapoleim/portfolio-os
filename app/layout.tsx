import ClientComponent from '@/components/ClientComponent'
import Taskbar from '@/components/taskbar/Taskbar'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

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
      <body className={jetBrainsMono.className}>
        <ClientComponent>{children}</ClientComponent>
        <Taskbar />
      </body>
    </html>
  )
}
