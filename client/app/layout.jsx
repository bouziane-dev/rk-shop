import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RK shopping',
  description: 'RK shopping landing page'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Link the Inter font */}

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&family=Poppins:ital,wght@0,200;0,400;0,500;0,700;1,200;1,400;1,500;1,700&family=Reem+Kufi:wght@400;500;600;700&display=swap'
        />
      </head>
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
