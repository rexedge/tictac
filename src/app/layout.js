import Navbar from '@/components/navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
