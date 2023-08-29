"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'IOT website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className='h-full'>
      <body className='bg-slate-300 h-full'>
          <Providers>
            <Header/>
            <main className='relative h-5/6'>
              {children}
            </main>
            <Footer/>
          </Providers>
      </body>
    </html>
  )
}
