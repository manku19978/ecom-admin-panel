import { Roboto_Mono } from 'next/font/google'
import Sidebar from '@/src/components/Sidebar/Sidebar'
import cn from 'classnames'
import '@/src/assets/styles/variables.css'
import '@/src/assets/styles/global.css'
import '@/src/assets/styles/utilities.css'

const roboto = Roboto_Mono({
  subsets: ['latin'],
  weights: [400, 500, 600, 700],
})

export const metadata = {
  title: 'Ecom admin panel',
  description: 'Handle tasks related to your ecom website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(roboto.className, 'mainContainer')}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  )
}
