import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Zap, Clock, Wallet } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: "Professional Drivers",
      description: "Experienced and trained drivers for your safety",
      icon: Users,
    },
    {
      id: 2,
      title: "Clean Cars",
      description: "Well-maintained vehicles for comfortable travel",
      icon: Zap,
    },
    {
      id: 3,
      title: "24/7 Service",
      description: "Round-the-clock support and availability",
      icon: Clock,
    },
    {
      id: 4,
      title: "Transparent Pricing",
      description: "No hidden charges, competitive rates",
      icon: Wallet,
    },
  ]

  return (
    <section id="why-choose" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Why Choose Us</h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={feature.id}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-accent/20 rounded-full">
                      <IconComponent size={32} className="text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
