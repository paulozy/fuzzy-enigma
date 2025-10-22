"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "5545991490888" // Format: country code + area code + number
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Contribut Contabilidade.")

  const handleClick = () => {
    // Detect if mobile or desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:h-12 md:w-12"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="h-4 w-4 text-white md:h-5 md:w-5" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-accent"></span>
      </span>
    </button>
  )
}
