import Navbar from './components/navigation/navbar'
import Footer from './components/navigation/footer'
import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import GoogleAnalytics from './components/google-analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dylan',
  description: 'Digital designer and developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
