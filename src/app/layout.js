import './globals.css'
import Navbar from "../components/Navbar"
import Provider from '../components/Provider'
export const metadata = {
  title: 'Furniture',
  description: 'You can shop home furniture from this website',
  keywords: ["furniture", "bed", "sofa", "almirah", "decor"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-r from-cyan-200 to-blue-200'>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
