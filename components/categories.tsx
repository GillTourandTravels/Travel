"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function AllCategoriesPage() {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const categories = [
    {
      id: 1,
      title: "Local Sightseeing",
      image: "/local.jpeg",
      description:
        "Experience Himachal Pradesh like never before. Our curated local sightseeing tours take you through snow-laden peaks, pine-scented valleys, ancient Himalayan temples, and picture-perfect viewpoints. Discover hidden trails, vibrant local markets, serene monasteries, and iconic landmarks that define Himachal’s charm. Every stop is designed to give you the perfect blend of nature, culture, and unforgettable mountain moments",
      images: [
        "/local1.jpeg",
        "/local2.jpeg",
        "/local3.jpeg",
        "/local4.jpeg",
        "/local5.jpeg",
        "/local6.jpeg",
      ],
    },
    {
      id: 2,
      title: "One Way & Round Trips ",
      image: "/trip.jpeg",
      description:
        "Enjoy seamless one-way and round-trip travel with our reliable cab services. Designed for comfort and convenience, our rides ensure timely pickups, smooth journeys, and professional drivers who make every kilometer stress-free. Perfect for daily travel, weekend plans, or quick intercity transfers.",
      images: ["/trip1.jpeg", "/trip2.jpeg", "/trip3.jpeg"],
    },
    {
      id: 3,
      title: "Airport/Railway Transfers",
      image: "/airport.jpeg",
      description:
        "Start and end your journey with ease. Our airport and railway transfers provide punctual pickups, real-time tracking, and hassle-free drop-offs. Travel relaxed and confident, knowing your ride is ready the moment you arrive.",
      images: ["/air1.jpeg", "/air2.jpeg", "/air3.jpeg"],
    },
    {
      id: 4,
      title: "Hotel Transfer",
      image: "/hotel.jpeg",
      description:
        "Experience smooth and welcoming hotel transfers designed for your comfort. Whether checking in or heading out for the day, our professional drivers ensure a safe and effortless ride from doorstep to destination.",
      images: ["/hotel1.jpeg", "/hotel2.jpeg", "/hotel3.jpeg"],
    },
    {
      id: 5,
      title: "Adventure Tours",
      image: "/adventure.jpeg",
      description:
        "Unleash your thrill-seeking spirit with our curated adventure tours across Himachal’s breathtaking landscapes. From trekking and river rafting to paragliding and off-road trails, enjoy adrenaline-packed experiences backed by expert guides and safety-first planning.",
      images: [
        "/adventure1.jpeg",
        "/adventure2.jpeg",
        "/adventure3.jpeg",
        "/adventure4.jpeg",
        "/adventure5.jpeg",
        "/adventure6.jpeg",
      ],
    },
    {
      id: 6,
      title: "Holiday Packages",
      image: "/holiday.jpeg",
      description:
        "Make your vacation unforgettable with our customized holiday packages. Discover handpicked destinations, premium stays, guided sightseeing, and a perfect balance of relaxation and exploration—all crafted to deliver a seamless travel experience.",
      images: [
        "/holiday1.jpeg",
        "holiday2.jpeg",
        "holiday3.jpeg",
        "holiday4.jpeg",
        "holiday5.jpeg",
        "holiday6.jpeg",
      ],
    },
    {
      id: 7,
      title: "Temple Darshan Tours",
      image: "/Badrinath.jpeg",
      description:
        "Embark on peaceful and spiritually uplifting temple tours across Himachal’s sacred sites. From ancient shrines to mountain-top temples, our tours blend comfort, safety, and rich cultural discovery for a divine travel experience.",
      images: [
        "/temple1.jpeg",
        "/temple2.jpeg",
        "/temple3.jpeg",
        "/temple4.jpeg",
        "/temple5.jpeg",
        "/temple6.jpeg",
      ],
    },
    {
      id: 8,
      title: "Special Cab Services",
      image: "/cab.jpeg",
      description:
        "Choose from our range of special cabs tailored to your needs—luxury rides, spacious SUVs, premium sedans, and high-capacity vehicles for group travel. Ideal for special occasions, long journeys, or travelers seeking extra comfort and style.",
      images: ["/cab1.jpeg", "/cab2.jpeg", "/cab3.jpeg"],
    },
  ];

  const visibleCategories = showAll ? categories : categories.slice(0, 4);

  // AUTO COLLAPSE DESKTOP ONLY
  useEffect(() => {
    const isMobile = window.innerWidth < 640;

    if (isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowAll(false);
          setExpandedCardId(null);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // EXPANDED CARD VIEW
  if (expandedCardId) {
    const card = categories.find((c) => c.id === expandedCardId);
    if (!card) return null;

    return (
      <section ref={sectionRef} className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <Card className="w-full p-6 shadow-xl">
            <div
              className="h-64 bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${card.image})` }}
            />

            <CardHeader className="mt-6">
              <CardTitle className="text-3xl text-primary">
                {card.title}
              </CardTitle>
              <p className="text-lg mt-4">{card.description}</p>
            </CardHeader>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
              {card.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="extra"
                  className="w-full h-40 object-cover rounded-lg"
                />
              ))}
            </div>

            <div className="text-center mt-10">
              <button
                onClick={() => setExpandedCardId(null)}
                className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700 transition-all"
              >
                Back to Categories
              </button>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  // DEFAULT GRID
  return (
    <section
      ref={sectionRef}
      id="categories"
      className="py-16 px-4 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            All Categories
          </h2>
          <div className="h-1 w-16 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCategories.map((cat) => (
            <Card
              key={cat.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="h-44 bg-cover bg-center"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              <CardHeader>
                <CardTitle className="text-lg text-primary">
                  {cat.title}
                </CardTitle>

                <p className="text-sm mt-1 line-clamp-3">{cat.description}</p>

                <button
                  onClick={() => setExpandedCardId(cat.id)}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-all"
                >
                  Read More
                </button>
              </CardHeader>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/80 transition-all"
            >
              Know More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
