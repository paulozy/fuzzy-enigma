import { Card } from "@/components/ui/card"
import { Calculator, FileText, Users2, Check } from "lucide-react"

export function ServicosSection() {
  return (
    <section id="servicos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4 text-balance">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Soluções completas para todas as necessidades contábeis, fiscais e trabalhistas da sua empresa
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Área Contábil */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Calculator className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Área Contábil</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Escrituração e registros contábeis</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">
                  Elaboração de Balanço, DRE e demais relatórios
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Planejamento e controle financeiro</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Auditoria e perícia</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Gestão das obrigações contábeis ECF e ECD</span>
              </li>
            </ul>
          </Card>

          {/* Fiscal e Tributária */}
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <FileText className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Fiscal e Tributária</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">
                  Escrituração das notas fiscais de entrada, saída e prestação de serviços
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">
                  Apuração dos impostos Federais, Estaduais e Municipais
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">
                  Elaboração e entrega das obrigações fiscais mensais e anuais
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Assessoria Fiscal</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Consultoria Tributária</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Gestão em Sistema Fiscal</span>
              </li>
            </ul>
          </Card>

          {/* Recursos Humanos */}
          <Card className="p-8 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1">
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Users2 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Recursos Humanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Admissão e Demissão de colaboradores</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">
                  Elaboração de folha de pagamento e pró-labore
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Controle de férias</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Cálculos trabalhistas e rescisórios</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Elaboração e entrega do e-Social</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Consultoria na área trabalhista</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Consultoria previdenciária</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">Sistema de Gestão de RH</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
