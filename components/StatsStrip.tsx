"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
    label: string;
    value: number;
    suffix?: string;
};

const stats: StatItem[] = [
    { label: "Happy Customers", value: 1000, suffix: "+" },
    { label: "Tours Completed", value: 500, suffix: "+" },
    { label: "Own Vehicles", value: 15, suffix: "+" },
    { label: "Years of Experience", value: 15, suffix: "+" },
];

export default function StatsStrip() {
    const [start, setStart] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="bg-primary text-primary-foreground py-12"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <Stat
                            key={index}
                            label={stat.label}
                            value={stat.value}
                            suffix={stat.suffix}
                            start={start}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Stat({
    label,
    value,
    suffix = "",
    start,
}: {
    label: string;
    value: number;
    suffix?: string;
    start: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const increment = Math.ceil(value / 60);

        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                current = value;
                clearInterval(timer);
            }
            setCount(current);
        }, 20);

        return () => clearInterval(timer);
    }, [start, value]);

    return (
        <div>
            <div className="text-3xl sm:text-4xl font-bold">
                {count}
                {count === value && suffix}
            </div>
            <p className="mt-1 text-sm sm:text-base text-primary-foreground/80">
                {label}
            </p>
        </div>
    );
}
