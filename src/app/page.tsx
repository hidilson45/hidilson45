import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212]'>
      <Header/>
      <div className='container px-12 py-4 mt-12'>
        <Hero/>
        <About/>
      </div>
    </main>
  )
}
