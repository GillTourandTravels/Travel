"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const navItems = ["Home", "Categories", "Destinations", "Contact", "Map"];

  useEffect(() => {
    if (!showThankYou) return;
    const timer = setTimeout(() => setShowThankYou(false), 8000);
    return () => clearTimeout(timer);
  }, [showThankYou]);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* BRAND */}
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setShowThankYou(true)}
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center active:scale-95 transition"
                aria-label="Gills Tour & Travels"
              >
                <span className="text-white font-bold text-lg">GT</span>
              </button>

              <div className="min-w-0">
                <p className="font-bold text-primary text-sm sm:text-base truncate">
                  Gills Tour & Travels Cabs Shimla
                </p>
                <p className="hidden sm:block text-xs text-muted-foreground line-clamp-1">
                  Shimla Taxi Service • Cabs in Shimla • Affordable Travel • Taxi Service in Shimla • Shimla Cabs
                </p>
              </div>
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-foreground hover:text-primary transition"
                >
                  {item}
                </a>
              ))}

              <a href="https://blog.gillstourandtravel.com/">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Blog
                </Button>
              </a>
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* MOBILE NAV */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
              ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <nav className="py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg text-sm hover:bg-muted transition"
                >
                  {item}
                </a>
              ))}

              <div className="px-4 pt-2">
                <a
                  href="https://blog.gillstourandtravel.com/"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Visit Blog
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* THANK YOU MODAL */}
      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center bg-black/50 transition-opacity
          ${showThankYou ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setShowThankYou(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-2xl shadow-2xl px-6 py-5 max-w-sm w-[90%] text-center
            transform transition-all duration-300
            ${showThankYou ? "scale-100 translate-y-0" : "scale-95 translate-y-2"}
          `}
        >
          <h3 className="text-lg font-bold text-primary mb-2">
            Thank You
          </h3>

          <p className="text-sm text-muted-foreground">
            Thank you for travelling with us.
            We look forward to serving you again.
          </p>

          <button
            onClick={() => setShowThankYou(false)}
            className="mt-4 text-sm font-medium text-primary underline"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
