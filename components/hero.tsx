import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-gradient-to-b from-primary via-primary/90 to-primary/80 flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-90">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
          Explore Himachal With Comfort & Safety
        </h1>
        <p className="text-lg sm:text-xl text-shadow-black/90 mb-8 text-pretty">
          Trusted for 25 years by Happy Customers
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Call Now Button */}
          <a href="tel:+919218921595">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8"
            >
              Call Now
            </Button>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919218921595"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8 bg-transparent"
            >
              <MessageCircle className="mr-2" size={20} />
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
