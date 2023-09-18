"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import Header from './components/Header'
import Footer from './components/Footer'
import { Head } from 'next/document'

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
      <body>
          <Providers>
            <Header/>
            <div
              style={{
                minHeight: 'calc(100vh - 64px - 53px)'
              }}  
            >
              {children}
            </div>
            <Footer/>
          </Providers>
      </body>
    </html>
  )
}
