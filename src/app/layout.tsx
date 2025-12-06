import clsx from 'clsx'
import { type Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'

import { CalendlyWrapper } from '@/components/CalendlyWrapper'
import { CalendlyProvider } from '@/contexts/CalendlyContext'
import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Saturn',
    default: 'Saturn - Automate insurance compliance during loan servicing',
  },
  description:
    'Saturn automates insurance compliance during loan servicing: it tracks policy requirements per loan, ingests/reads certificates, validates them against rules, and runs AI-driven outreach to brokers and borrowers until compliant.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={clsx('h-full bg-white antialiased', inter.variable, instrumentSerif.variable)}>
      <body suppressHydrationWarning className="flex min-h-full">
        <CalendlyProvider>
          <div className="flex w-full flex-col">{children}</div>
          <CalendlyWrapper />
        </CalendlyProvider>
      </body>
    </html>
  )
}
