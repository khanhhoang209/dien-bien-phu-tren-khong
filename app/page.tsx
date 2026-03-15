import { Tabs } from '@/components/tabs'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen flex flex-col">
      <Tabs />
      <Footer />
    </main>
  )
}
