"use client"

import { Instagram, Mail, Phone } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/logo-contribut-2.png"
              alt="Contribut Contabilidade"
              width={180}
              height={200}
            />
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Contabilidade online desde 2011. Atendimento personalizado, inovador e diferenciado para sua empresa
              crescer com segurança e confiança.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection("servicos")} className="hover:text-primary transition-colors">
                  Área Contábil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("servicos")} className="hover:text-primary transition-colors">
                  Fiscal e Tributária
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("servicos")} className="hover:text-primary transition-colors">
                  Recursos Humanos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("servicos")} className="hover:text-primary transition-colors">
                  Consultoria
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection("compromisso")} className="hover:text-primary transition-colors">
                  Sobre Nós
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("valores")} className="hover:text-primary transition-colors">
                  Missão e Valores
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contato")} className="hover:text-primary transition-colors">
                  Contato
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40">
          <h3 className="font-semibold mb-4">Contato</h3>
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <a href="tel:+5545991490888" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm">(45) 99149-0888</span>
            </a>
            <a
              href="mailto:contato@contributcontabilidade.net.br"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm">contato@contributcontabilidade.net.br</span>
            </a>
            <a
              href="https://www.instagram.com/contribut.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm">@contribut.br</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Contribut Contabilidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
