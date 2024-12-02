import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Bots from '@/components/Bots'
import Integration from '@/components/Integration'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'NeoGrid - Advanced Discord Bots',
  description: 'Empower your Discord server with NeoGrid\'s suite of advanced bots: NeoStaff, Neoshield, and Neo-Desk. Seamless integration for ultimate server management.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
      <Bots />
      <Integration />
      <CTA />
      <Footer />
    </main>
  )
}

