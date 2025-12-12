import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeaturedDestinations() {
  const destinations = [
    {
      id: 1,
      title: "Shimla",
      description: "Experience the charm of the Queen of Hills",
      price: "",
      image: "/shimla-hill-station.jpg",
    },
    {
      id: 2,
      title: "Manali",
      description: "Adventure and nature combined",
      price: "",
      image: "/manali-mountain-destination.jpg",
    },
    {
      id: 3,
      title: "Dharamshala",
      description: "Serenity amidst the Himalayas",
      price: "",
      image: "/dharamshala-scenic-view.jpg",
    },
    {
      id: 4,
      title: "Kullu Valley",
      description: "Breathtaking landscapes and adventure",
      price: "",
      image: "/kullu-valley-travel.jpg",
    },
    {
      id: 5,
      title: "Spiti Valley",
      description: "Cold desert mountain paradise",
      price: "",
      image: "/spiti.jpeg",
    },
    {
      id: 6,
      title: "Dalhousie",
      description: "Colonial charm in the mountains",
      price: "",
      image: "/dalhousie.jpeg",
    },
    {
      id: 7,
      title: "Chamba",
      description: "Temples & Himalayan culture",
      price: "",
      image: "/Chamba.jpeg",
    },
    {
      id: 8,
      title: "Bir Billing",
      description: "India's top paragliding destination",
      price: "",
      image: "/bir.jpeg",
    },
    {
      id: 9,
      title: "Kasol",
      description: "Peaceful riverside & nature vibes",
      price: "",
      image: "/kas.jpeg",
    },
    {
      id: 10,
      title: "Khajjiar",
      description: "Mini Switzerland of India",
      price: "",
      image: "/khaj.jpeg",
    },
    {
      id: 11,
      title: "Kinnaur",
      description: "Apple orchards & valleys",
      price: "",
      image: "/kin.jpeg",
    },
    {
      id: 12,
      title: "Narkanda",
      description: "Snow slopes & amazing views",
      price: "",
      image: "/Narkanda.jpeg",
    },
    {
      id: 13,
      title: "Sarahan",
      description: "Temple town in the mountains",
      price: "",
      image: "/sarahan.jpeg",
    },
    {
      id: 14,
      title: "Solang Valley",
      description: "Skiing & adventure hub",
      price: "",
      image: "/solang.jpeg",
    },
    {
      id: 15,
      title: "Tirthan Valley",
      description: "Peace & untouched nature",
      price: "",
      image: "/Tirthan.jpeg",
    },
    {
      id: 16,
      title: "Barot",
      description: "Hidden mountain gem",
      price: "",
      image: "/Barot.jpeg",
    },
  ];

  return (
    <section id="destinations" className="py-16 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Featured Destinations
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        {/* Horizontal Scroll */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 w-max px-2">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className="min-w-[280px] max-w-[280px] overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    {destination.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {destination.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-accent text-accent-foreground text-sm font-semibold">
                    Call For Enquiry {destination.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
