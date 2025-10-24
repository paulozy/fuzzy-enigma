import { Card } from "@/components/ui/card"
import { Target, Users, Shield, Award } from "lucide-react"

export function CompromissoSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4 text-balance">
            Nosso Compromisso
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma empresa especializada, capaz de lhe dar um atendimento personalizado
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Desde 2011</h3>
            <p className="text-muted-foreground leading-relaxed">
              Atuando no ramo com objetivo de oferecer um atendimento diferenciado e inovador
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Profissionais Qualificados</h3>
            <p className="text-muted-foreground leading-relaxed">
              Rigorosamente selecionados e aptos para atuar em serviços, indústrias, comércio e tecnologia
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Segurança</h3>
            <p className="text-muted-foreground leading-relaxed">
              Organização, responsabilidade e supervisão completa dos nossos serviços
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Qualidade</h3>
            <p className="text-muted-foreground leading-relaxed">
              Soluções práticas e inteligentes com qualidade e confiabilidade
            </p>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-foreground/90">
              Estamos no mercado com a finalidade de lhe oferecer soluções práticas e inteligentes, com qualidade e
              confiabilidade. Na certeza de lhe oferecermos organização, responsabilidade, segurança e supervisão dos
              nossos serviços, nos colocamos a sua disposição para quaisquer dúvidas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
