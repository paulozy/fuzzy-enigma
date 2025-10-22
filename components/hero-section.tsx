"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary w-fit">
              <CheckCircle2 className="h-4 w-4" />
              Atuando desde 2011
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
              Contabilidade Online e Parceira
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Atendimento personalizado e inovador, estando onde você precisa, sempre que for solicitado. Soluções
              práticas e inteligentes com qualidade e confiabilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={scrollToContact}
              >
                Solicitar Contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("servicos")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Conheça Nossos Serviços
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border/40">
              <div>
                <div className="text-3xl font-bold text-primary">13+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Online</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
              <div className="h-full w-full rounded-xl bg-card shadow-2xl overflow-hidden">
                <img
                  src="/professional-accountant.jpg"
                  alt="Profissional de Contabilidade"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
