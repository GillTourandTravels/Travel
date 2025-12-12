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

          {/* SERVICES SECTION 1 */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <div className="grid grid-cols-2 gap-2 text-xs leading-relaxed">
              <span>Himachal Tour Packages</span>
              <span>Shimla Tour</span>
              <span>Manali Tour</span>
              <span>Kullu Manali Package</span>

              <span>Spiti Valley Tour</span>
              <span>Kasol Tour</span>
              <span>Dharamshala Tour</span>
              <span>Dalhousie Tour</span>

              <span>Honeymoon Packages</span>
              <span>Family Packages</span>
              <span>Adventure Tours</span>
              <span>Paragliding Tour</span>

              <span>River Rafting</span>
              <span>Trekking Packages</span>
            </div>
          </div>

          {/* SERVICES SECTION 2 */}
          <div>
            <h3 className="font-bold mb-4">More Services</h3>
            <div className="grid grid-cols-2 gap-2 text-xs leading-relaxed">
              <span>Local Sightseeing</span>
              <span>Outstation Taxi</span>
              <span>Airport Transfers</span>
              <span>Railway Transfers</span>

              <span>Chandigarh to Manali Cab</span>
              <span>Delhi to Shimla Taxi</span>
              <span>Ahmedabad to Himachal Tour</span>
              <span>Mumbai to Himachal Tour</span>

              <span>Bangalore to Himachal Trip</span>
              <span>Hyderabad to Manali Tour</span>
              <span>Kolkata to Himachal Tour</span>
              <span>Rajasthan to Himachal Package</span>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gillholidays0095?igsh=MWkybDMwczM1d3pwZA=="
                className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
              >
                <Instagram size={20} />
              </a>
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
