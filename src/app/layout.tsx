import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ZZAFWR | Yazılım & Teknoloji',
  description: 'Modern, premium ve performans odaklı yazılım geliştirici portföyü',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="min-h-screen bg-black text-white antialiased selection:bg-blue-600/60 selection:text-white">
        {/* GLOBAL BACKGROUND WRAPPER */}
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  )
}
