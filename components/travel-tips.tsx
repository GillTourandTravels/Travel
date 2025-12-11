import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TravelTips() {
  const tips = [
    {
      id: 1,
      title: "Best Time to Visit Himachal",
      description: "October to June is ideal for visiting Himachal Pradesh with pleasant weather and clear skies.",
      image: "/himachal-weather-season.jpg",
    },
    {
      id: 2,
      title: "Packing Essentials",
      description: "Bring warm clothes, comfortable shoes, sunscreen, and water bottles for a comfortable journey.",
      image: "/travel-packing-items.jpg",
    },
    {
      id: 3,
      title: "Local Culture Tips",
      description: "Respect local customs, try traditional cuisines, and interact with local communities respectfully.",
      image: "/local-culture-traditions.jpg",
    },
    {
      id: 4,
      title: "Food Recommendations",
      description: "Don't miss Himachali Thali, Momos, Trout fish, and local tea in the region.",
      image: "/himachali-local-food.jpg",
    },
  ]

  return (
    <section id="travel-tips" className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Travel Tips</h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip) => (
            <Card
              key={tip.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${tip.image})` }} />
              <CardHeader>
                <CardTitle className="text-lg text-primary">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
