import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./Navbar/./page"
// add the Navabr above the children to repersent


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Personal Project',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
    <Navbar></Navbar>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
