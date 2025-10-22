import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CompromissoSection } from "@/components/compromisso-section"
import { ValoresSection } from "@/components/valores-section"
import { ServicosSection } from "@/components/servicos-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CompromissoSection />
      <ValoresSection />
      <ServicosSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
