"use client"

import { Button } from "@/components/ui/button"
import { Mail, Menu, Phone, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="border-b border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 py-2">
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-6 text-sm">
            <a
              href="tel:+5545991490888"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(45) 99149-0888</span>
            </a>
            <a
              href="mailto:contato@contributcontabilidade.net.br"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">contato@contributcontabilidade.net.br</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-contribut-s-escrita.png"
            alt="Contribut Contabilidade"
            width={180}
            height={60}
            className="h-25 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("sobre")}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("servicos")}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection("valores")}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Missão
          </button>
          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Pedir Orçamento
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("valores")}
              className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Missão
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              Pedir Orçamento
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
