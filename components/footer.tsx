import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">GT</span>
              </div>
              <span className="font-bold text-lg">Gills Tours & Travels</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Explore Himachal with comfort and safety since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:underline">
                  Destinations
                </a>
              </li>
              <li>
                <a href="#travel-tips" className="hover:underline">
                  Travel Tips
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Local Sightseeing</li>
              <li>Outstation Trips</li>
              <li>Airport Transfers</li>
              <li>Holiday Packages</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {/* <a
                href="#"
                className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
              >
                <Facebook size={20} />
              </a> */}
              <a
                href="https://www.instagram.com/gillholidays0095?igsh=MWkybDMwczM1d3pwZA=="
                className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
              >
                <Instagram size={20} />
              </a>
              {/* <a
                href="#"
                className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
              >
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>© 2025 Gills Tour & Travels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
