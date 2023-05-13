import { Inter, Fredoka, Mali } from 'next/font/google';
import styles from './globals.css';

const inter = Inter({ subsets: ['latin'] })
const fredoka = Fredoka({ subsets: ['latin'], weight: ['400'] })
const mali = Mali({ subsets: ['latin'], weight: ['700'] })

export const metadata = {
  title: 'Flora',
  description: 'Your homegardening solution',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>{children}</body>
    </html>
  )
}
