import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedDestinations() {
  const destinations = [
    {
      id: 1,
      title: "Shimla",
      description: "Experience the charm of the Queen of Hills",
      price: "₹1,499",
      image: "/shimla-hill-station.jpg",
    },
    {
      id: 2,
      title: "Manali",
      description: "Adventure and nature combined",
      price: "₹1,799",
      image: "/manali-mountain-destination.jpg",
    },
    {
      id: 3,
      title: "Dharamshala",
      description: "Serenity amidst the Himalayas",
      price: "₹1,299",
      image: "/dharamshala-scenic-view.jpg",
    },
    {
      id: 4,
      title: "Kullu Valley",
      description: "Breathtaking landscapes and adventure",
      price: "₹1,599",
      image: "/kullu-valley-travel.jpg",
    },
  ]

  return (
    <section id="destinations" className="py-16 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Featured Destinations</h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${destination.image})` }} />
              <CardHeader>
                <CardTitle className="text-lg text-primary">{destination.title}</CardTitle>
                <CardDescription className="text-sm">{destination.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent text-accent-foreground text-sm font-semibold">
                  Starting from {destination.price}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
