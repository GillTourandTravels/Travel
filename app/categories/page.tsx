"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AllCategoriesPage() {
    const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const expandedRef = useRef<HTMLDivElement>(null);

    const categories = [
        {
            id: 1,
            title: "Local Sightseeing",
            image: "/local.jpeg",
            description:
                "Experience Himachal Pradesh like never before. Our curated local sightseeing tours take you through snow-laden peaks, pine-scented valleys, ancient Himalayan temples, and picture-perfect viewpoints.",
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
            title: "One Way & Round Trips",
            image: "/trip.jpeg",
            description:
                "Enjoy seamless one-way and round-trip travel with our reliable cab services designed for comfort and convenience.",
            images: ["/trip1.jpeg", "/trip2.jpeg", "/trip3.jpeg"],
        },
        {
            id: 3,
            title: "Airport/Railway Transfers",
            image: "/airport.jpeg",
            description:
                "Start and end your journey with ease through punctual pickups and hassle-free drop-offs.",
            images: ["/air1.jpeg", "/air2.jpeg", "/air3.jpeg"],
        },
        {
            id: 4,
            title: "Hotel Transfer",
            image: "/hotel.jpeg",
            description:
                "Smooth and welcoming hotel transfers ensuring a safe and effortless ride.",
            images: ["/hotel1.jpeg", "/hotel2.jpeg", "/hotel3.jpeg"],
        },
        {
            id: 5,
            title: "Adventure Tours",
            image: "/adventure.jpeg",
            description:
                "Thrill-seeking adventure tours across Himachal’s breathtaking landscapes.",
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
                "Customized holiday packages with premium stays and guided sightseeing.",
            images: [
                "/holiday1.jpeg",
                "/holiday2.jpeg",
                "/holiday3.jpeg",
                "/holiday4.jpeg",
                "/holiday5.jpeg",
                "/holiday6.jpeg",
            ],
        },
        {
            id: 7,
            title: "Temple Darshan Tours",
            image: "/Badrinath.jpeg",
            description:
                "Spiritually uplifting temple tours across sacred sites in Himachal.",
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
                "Luxury rides, SUVs, premium sedans, and high-capacity vehicles for group travel.",
            images: ["/cab1.jpeg", "/cab2.jpeg", "/cab3.jpeg"],
        },
    ];

    const openCard = (id: number) => {
        setLastScrollY(window.scrollY);
        setExpandedCardId(id);
    };

    const closeCard = () => {
        setExpandedCardId(null);
        setTimeout(() => {
            window.scrollTo({
                top: lastScrollY,
                behavior: "smooth",
            });
        }, 100);
    };

    useEffect(() => {
        if (expandedCardId && expandedRef.current) {
            expandedRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }, [expandedCardId]);

    // =============================
    // EXPANDED VIEW
    // =============================
    if (expandedCardId) {
        const card = categories.find((c) => c.id === expandedCardId);
        if (!card) return null;

        return (
            <>
                <Header />
                <section
                    ref={expandedRef}
                    className="py-16 px-4 bg-background min-h-screen"
                >
                    <div className="max-w-5xl mx-auto">
                        <Card className="p-6 sm:p-10 shadow-2xl rounded-3xl space-y-6">
                            <div
                                className="h-64 sm:h-80 rounded-2xl bg-cover bg-center"
                                style={{ backgroundImage: `url(${card.image})` }}
                            />

                            <div className="space-y-4">
                                <CardTitle className="text-2xl sm:text-3xl text-primary">
                                    {card.title}
                                </CardTitle>

                                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                                    {card.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                                {card.images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt=""
                                        className="h-40 w-full object-cover rounded-2xl"
                                    />
                                ))}
                            </div>

                            <div className="text-center pt-8">
                                <button
                                    onClick={closeCard}
                                    className="px-8 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-primary/90 transition"
                                >
                                    ← Back to Categories
                                </button>
                            </div>
                        </Card>
                    </div>
                </section>
                <Footer />
            </>
        );
    }

    // =============================
    // DEFAULT GRID (ALL CARDS SHOWN)
    // =============================
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <section className="py-16 px-4 bg-background">
                <div className="max-w-7xl mx-auto space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            All Categories
                        </h2>
                        <div className="h-1 w-16 bg-accent mx-auto mt-2 rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat) => (
                            <Card
                                key={cat.id}
                                className="overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div
                                    className="h-48 bg-cover bg-center rounded-t-3xl"
                                    style={{ backgroundImage: `url(${cat.image})` }}
                                />

                                <CardHeader className="space-y-3">
                                    <CardTitle className="text-lg text-primary">
                                        {cat.title}
                                    </CardTitle>

                                    <p className="text-sm line-clamp-3 text-muted-foreground">
                                        {cat.description}
                                    </p>

                                    <button
                                        onClick={() => openCard(cat.id)}
                                        className="self-start mt-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 transition"
                                    >
                                        Read More
                                    </button>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
