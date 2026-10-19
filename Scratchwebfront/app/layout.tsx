import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { ScrollProgress } from "@/components/landing/scroll-progress"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export const metadata: Metadata = {
  title: 'ELVO Technologies | Build • Innovate • Grow',
  description:
    'ELVO Technologies helps businesses establish, improve, and grow their digital presence through modern websites, custom software, business applications, and technology solutions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/elvo-logo.png',
        type: 'image/png',
      },
    ],
    apple: '/elvo-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <ScrollProgress />
        {children}
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
