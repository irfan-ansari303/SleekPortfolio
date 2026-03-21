import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Irfan Ansari - Portfolio',
  description: 'Full Stack Developer & Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0a0a0f] text-slate-200 min-h-screen selection:bg-indigo-500/30`}>
        <div className="max-w-2xl mx-auto relative select-none">
          {/* Left border line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
          {/* Right border line */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
          {/* Content */}
          <div className="px-8 md:px-12 py-12 md:py-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
