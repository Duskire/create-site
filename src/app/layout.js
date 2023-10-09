import '/styles/globals.css'
import { Pixelify_Sans } from 'next/font/google'

const pixelify = Pixelify_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Duskire',
  description: 'Duskire Projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pixelify.className}>{children}</body>
    </html>
  )
}
