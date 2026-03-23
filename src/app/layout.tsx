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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} theme-bg theme-text min-h-screen overflow-x-hidden overscroll-y-none`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        <div className="max-w-2xl mx-auto relative select-none" style={{ zIndex: 1 }}>
          {/* Left border line */}
          <div className="absolute left-0 top-0 bottom-0 w-px theme-sidebar-line" />
          {/* Right border line */}
          <div className="absolute right-0 top-0 bottom-0 w-px theme-sidebar-line" />
          {/* Content */}
          <div className="px-8 md:px-12 pb-12 md:pb-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
