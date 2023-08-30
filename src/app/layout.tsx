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
    <html lang="vi">
      <body className=''>
          <Providers>
            <Header/>
            <div>
              {children}
            </div>
            <Footer/>
          </Providers>
      </body>
    </html>
  )
}
