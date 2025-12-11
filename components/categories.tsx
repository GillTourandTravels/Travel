import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function AllCategoriesPage() {
  const categories = [
    {
      id: 1,
      title: "Local Sightseeing",
      image: "/local-sightseeing-tour.jpg",
      description: "Half-day and full-day local packages.",
    },
    {
      id: 2,
      title: "Outstation Trips",
      image: "/outstation-road-trip.jpg",
      description: "One-way and round-trip outstation transfers.",
    },
    {
      id: 3,
      title: "Airport/Railway Transfers",
      image: "/car-transfer-service.jpg",
      description: "Reliable pickups & drop-offs.",
    },
    {
      id: 4,
      title: "Holiday Packages",
      image: "/holiday-vacation-package.jpg",
      description: "Customized holiday itineraries.",
    },
    {
      id: 5,
      title: "Adventure Tours",
      image: "/adventure.jpeg",
      description: "Trekking, rafting & adventure add-ons.",
    },
    {
      id: 6,
      title: "Corporate Travel",
      image: "/Business.jpeg",
      description: "Corporate & employee travel solutions.",
    },
    {
      id: 7,
      title: "Temple Darshan Tours",
      image: "/Badrinath.jpeg",
      description: "Pilgrimage-friendly packages.",
    },
    {
      id: 8,
      title: "Special Cab Services",
      image: "/cabs.jpeg",
      description: "Tempo, SUV, luxury on request.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            All Categories
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div
                className="h-44 bg-cover bg-center"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  {cat.title}
                </CardTitle>
                <p className="text-sm text-muted mt-1">{cat.description}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
