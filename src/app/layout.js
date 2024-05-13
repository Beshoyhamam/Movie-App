import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import ContextProvider from '@/components/Context/GlobalContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie App',
  description: 'This My Movie App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="box-style">
          <ContextProvider>
            <Navbar />
            {children}
            <Footer />
          </ContextProvider>
          
        </div>
          
      </body>
    </html>
  )
}
