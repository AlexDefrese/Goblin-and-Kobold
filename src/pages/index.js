import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Head>
        <title>The Goblin and Kobold</title>
      </Head>
      <div className='flex flex-row cols-4 gap-4'>
      Home Page
        </div>
    </main>
  )
}
