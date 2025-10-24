import { CompromissoSection } from "@/components/about-section"
import { ValoresSection } from "@/components/company-values-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicosSection } from "@/components/jobs"
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
