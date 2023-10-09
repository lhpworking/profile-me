import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LHP | Frontend Developer',
  description: 'Website portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    children
  )
}
