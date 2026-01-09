"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const navItems = ["Home", "Categories", "Destinations", "Contact"];

  const handleLogoClick = () => {
    setShowThankYou(true);
  };

  useEffect(() => {
    if (!showThankYou) return;

    const timer = setTimeout(() => {
      setShowThankYou(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [showThankYou]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div
                onClick={handleLogoClick}
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center cursor-pointer transition-transform active:scale-95"
              >
                <span className="text-white font-bold text-lg">GT</span>
              </div>

              <span className="font-bold text-primary text-base sm:text-lg whitespace-nowrap">
                Gills Tour & Travels Shimla Taxi
              </span>
              <span className="hidden sm:inline font-light text-primary text-sm">
                Taxi Service in Shimla | Cabs in Shimla | Best Affordable Taxi
              </span>

            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground hover:text-primary transition-colors font-medium text-sm"
                >
                  {item}
                </a>
              ))}
              <a href="https://blog.gillstourandtravel.com/">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 font-medium text-xs px-3 py-1 h-8"
                >
                  Blog
                </Button>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {item}
                </a>
              ))}
              <a href="https://blog.gillstourandtravel.com/">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm px-4"
                >
                  Blog
                </Button>
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* THANK YOU POP CARD */}
      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center bg-black/50 transition-opacity duration-300 ${showThankYou ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setShowThankYou(false)}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-xl shadow-xl px-6 py-5 max-w-sm w-full text-center transform transition-all duration-300 ${showThankYou ? "scale-100 translate-y-0" : "scale-95 translate-y-2"
            }`}
        >
          <h3 className="text-lg font-bold text-primary mb-2">
            Thank You 🙏
          </h3>

          <p className="text-sm text-slate-600">
            Thank you for travelling with us.
            We look forward to serving you againn.
          </p>

          <button
            onClick={() => setShowThankYou(false)}
            className="mt-4 text-sm text-primary underline"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
