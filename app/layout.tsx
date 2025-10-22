import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Contribut Contabilidade - Contabilidade Online e Parceira desde 2011",
  description:
    "Contabilidade online desde 2011. Atendimento personalizado, inovador e diferenciado. Serviços contábeis, fiscais e de RH para sua empresa. Assessoria especializada com ética e transparência.",
  keywords: [
    "contabilidade online",
    "escritório contábil",
    "serviços contábeis",
    "contabilidade empresarial",
    "assessoria fiscal",
    "consultoria tributária",
    "departamento pessoal",
    "folha de pagamento",
    "abertura de empresa",
    "contabilidade digital",
    "contador online",
    "contribut contabilidade",
  ],
  authors: [{ name: "Contribut Contabilidade" }],
  creator: "Contribut Contabilidade",
  publisher: "Contribut Contabilidade",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://contributcontabilidade.net.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Contribut Contabilidade - Contabilidade Online e Parceira",
    description:
      "Contabilidade online desde 2011. Atendimento personalizado para sua empresa com serviços contábeis, fiscais e de RH.",
    url: "https://contributcontabilidade.net.br",
    siteName: "Contribut Contabilidade",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo-contribut.png",
        width: 1200,
        height: 630,
        alt: "Contribut Contabilidade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contribut Contabilidade - Contabilidade Online e Parceira",
    description: "Contabilidade online desde 2011. Atendimento personalizado para sua empresa.",
    images: ["/logo-contribut.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // User should replace with actual code
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Contribut Contabilidade",
              image: "https://contributcontabilidade.net.br/logo-contribut.png",
              description:
                "Escritório de contabilidade online desde 2011, oferecendo serviços contábeis, fiscais e de recursos humanos com atendimento personalizado.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "BR",
                addressRegion: "PR",
              },
              telephone: "+55-45-99149-0888",
              email: "contato@contributcontabilidade.net.br",
              url: "https://contributcontabilidade.net.br",
              priceRange: "$$",
              openingHours: "Mo-Fr 08:00-18:00",
              foundingDate: "2011",
              areaServed: {
                "@type": "Country",
                name: "Brasil",
              },
              serviceType: [
                "Contabilidade",
                "Assessoria Fiscal",
                "Consultoria Tributária",
                "Departamento Pessoal",
                "Recursos Humanos",
              ],
              slogan: "Contabilidade Online e Parceira",
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
