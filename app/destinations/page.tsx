import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Destinations() {
    const destinations = [
        { id: 1, title: "Shimla", description: "Experience the Queen of Hills", image: "/shimla-hill-station.jpg" },
        { id: 2, title: "Manali", description: "Adventure and nature combined", image: "/manali-mountain-destination.jpg" },
        { id: 3, title: "Dharamshala", description: "Serenity amidst the Himalayas", image: "/dharamshala-scenic-view.jpg" },
        { id: 4, title: "Kullu Valley", description: "Breathtaking landscapes and adventure", image: "/kullu-valley-travel.jpg" },
        { id: 5, title: "Spiti Valley", description: "Cold desert mountain paradise", image: "/spiti.jpeg" },
        { id: 6, title: "Dalhousie", description: "Colonial charm in the mountains", image: "/dalhousie.jpeg" },
        { id: 7, title: "Chamba", description: "Temples & Himalayan culture", image: "/Chamba.jpeg" },
        { id: 8, title: "Bir Billing", description: "India's top paragliding destination", image: "/bir.jpeg" },
        { id: 9, title: "Kasol", description: "Peaceful riverside & nature vibes", image: "/kas.jpeg" },
        { id: 10, title: "Khajjiar", description: "Mini Switzerland of India", image: "/khaj.jpeg" },
        { id: 11, title: "Kinnaur", description: "Apple orchards & valleys", image: "/kin.jpeg" },
        { id: 12, title: "Narkanda", description: "Snow slopes & amazing views", image: "/Narkanda.jpeg" },
        { id: 13, title: "Sarahan", description: "Temple town in the mountains", image: "/sarahan.jpeg" },
        { id: 14, title: "Solang Valley", description: "Skiing & adventure hub", image: "/solang.jpeg" },
        { id: 15, title: "Tirthan Valley", description: "Peace & untouched nature", image: "/Tirthan.jpeg" },
        { id: 16, title: "Barot", description: "Hidden mountain gem", image: "/Barot.jpeg" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <section id="destinations" className="py-16 px-4 bg-muted">
                <div className="max-w-7xl mx-auto">

                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                            Featured Destinations
                        </h2>
                        <div className="h-1 w-16 bg-accent mx-auto rounded-full" />
                    </div>

                    {/* Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {destinations.map((destination) => (
                            <Card
                                key={destination.id}
                                className="overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                            >
                                <div
                                    className="h-48 bg-cover bg-center rounded-t-3xl"
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
                                    <a href="tel:+919218921595" className="inline-block">
                                        <Badge className="bg-accent text-accent-foreground text-sm font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition">
                                            Call For Enquiry
                                        </Badge>
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}
