import { Card } from "@/components/ui/card"
import { Eye, Compass, Heart } from "lucide-react"

export function ValoresSection() {
  return (
    <section id="valores" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <Card className="p-8 hover:shadow-xl transition-shadow bg-card">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Compass className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Missão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Assessorar a tomada de decisões, garantir a conformidade legal, promover o crescimento, atuar com ética e
              transparência.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-shadow bg-card">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência na Área Contábil, sendo parceiro estratégico de confiança aos clientes e referência pela
              excelência, qualidade, ética e inovação indo além do simples processamento de dados.
            </p>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-shadow bg-card">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Valores</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Ética
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Transparência
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Excelência
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Inovação
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Competência
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Confiança
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
