"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

export function CTASection() {
  const handleWhatsAppClick = () => {
    const phone = "5545991490888"
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para serviços contábeis.")
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phone}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6 text-balance">
              Vamos Conversar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer com soluções contábeis
              inteligentes e personalizadas.
            </p>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contato@contributcontabilidade.net.br"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      contato@contributcontabilidade.net.br
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <a href="tel:+5545991490888" className="text-muted-foreground hover:text-primary transition-colors">
                      (45) 99149-0888
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Atendimento</h3>
                    <p className="text-muted-foreground">100% Online - Estamos onde você precisa</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-8 lg:p-12 flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-6">
              <MessageCircle className="h-10 w-10 text-primary" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-balance">
              Pronto para Transformar sua Contabilidade?
            </h3>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
              Fale diretamente com nossos especialistas pelo WhatsApp e receba um atendimento personalizado para as
              necessidades da sua empresa.
            </p>

            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Solicitar Orçamento no WhatsApp
            </Button>

            <p className="text-sm text-muted-foreground mt-6">Resposta rápida e sem compromisso</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
