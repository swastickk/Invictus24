import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Invictus\'24',
  description: 'Website for Invictus`24',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className="absolute top-10" />
        {children}
        <Footer />
      </body>
    </html>
  )
}
