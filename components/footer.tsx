// "use client"

// import { Instagram } from "lucide-react"
// import { useState } from "react"
// import LegalModal from "./LegalModal"

// export default function Footer() {
//   const [openModal, setOpenModal] = useState<"privacy" | "terms" | null>(null)
//   const [showMoreServices, setShowMoreServices] = useState(false)

//   return (
//     <>
//       <footer className="bg-primary text-primary-foreground">
//         <div className="max-w-7xl mx-auto px-4 py-14">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

//             {/* BRAND */}
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
//                   <span className="text-primary font-bold">GT</span>
//                 </div>
//                 <span className="font-bold text-lg">
//                   Gills Tour & Travels Shimla Taxi                </span>
//               </div>
//               <p className="text-sm text-primary-foreground/80 leading-relaxed">
//                 Trusted travel experts since 2000.
//                 Luxury, adventure, and spiritual journeys across Himachal
//                 and India—crafted with comfort, safety, and local expertise.
//               </p>
//             </div>

//             {/* QUICK LINKS */}
//             <div>
//               <h3 className="font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2 text-sm text-primary-foreground/90">
//                 <li><a href="#home" className="hover:underline">Home</a></li>
//                 <li><a href="#destinations" className="hover:underline">Destinations</a></li>
//                 <li><a href="#categories" className="hover:underline">Categories</a></li>
//                 <li><a href="#contact" className="hover:underline">Contact</a></li>
//               </ul>
//             </div>

//             {/* CONTACT & LEGAL */}
//             <div>
//               <h3 className="font-semibold mb-4">Connect With Us</h3>

//               <div className="flex gap-4 mb-4">
//                 <a
//                   href="https://www.instagram.com/gillholidays0095"
//                   className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition"
//                 >
//                   <Instagram size={18} />
//                 </a>
//               </div>

//               <p className="text-sm text-primary-foreground/90">
//                 Call: +91 9218921595<br />
//                 +91 8894261663
//               </p>

//               <p className="text-sm text-primary-foreground/80 mt-2">
//                 Shimla, Himachal Pradesh, India
//               </p>

//               <div className="mt-4 space-y-2 text-sm">
//                 <button onClick={() => setOpenModal("privacy")} className="hover:underline">
//                   Privacy Policy
//                 </button>
//                 <br />
//                 <button onClick={() => setOpenModal("terms")} className="hover:underline">
//                   Terms & Conditions
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* SERVICES */}
//           <div>
//             <h3 className="font-semibold mb-4">Travel Services</h3>

//             <ul className="grid grid-cols-2 gap-2 text-sm text-primary-foreground/90">
//               <li>Himachal Tour Packages</li>
//               <li>Shimla Tour</li>
//               <li>Manali Tour</li>
//               <li>Kullu Manali Package</li>
//               <li>Spiti Valley Tour</li>
//               <li>Kasol & Dharamshala</li>
//               <li>Honeymoon Packages</li>
//               <li>Adventure Tours</li>
//               <li>Paragliding & Rafting</li>
//               <li>Local Sightseeing</li>
//               <li>Airport Transfers</li>
//               <li>Outstation Taxi</li>
//             </ul>

//             {/* EXPANDABLE SEO CONTENT */}
//             {showMoreServices && (
//               <div className="mt-6 space-y-5 text-xs text-primary-foreground/80 leading-relaxed">

//                 <div>
//                   <p className="font-medium text-primary-foreground mb-1">
//                     Europe to India Travel
//                   </p>
//                   <ul className="grid grid-cols-2 gap-2">
//                     <li>Iceland to India travel</li>
//                     <li>India trip from Reykjavik</li>
//                     <li>Scandinavia to India travel</li>
//                     <li>India tours from Stockholm</li>
//                     <li>Belgium to India flights</li>
//                     <li>Indien Reiseführer</li>
//                     <li>Indien Rundreise ab Deutschland</li>
//                     <li>Yoga Retreat Indien</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <p className="font-medium text-primary-foreground mb-1">
//                     USA to India Tours
//                   </p>
//                   <ul className="grid grid-cols-2 gap-2">
//                     <li>USA to India travel packages</li>
//                     <li>India luxury tours for Americans</li>
//                     <li>India family tours from USA</li>
//                     <li>India solo female travel safety</li>
//                     <li>Best India itinerary from New York</li>
//                     <li>Winter sun destinations from USA</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <p className="font-medium text-primary-foreground mb-1">
//                     Asia Travel to India
//                   </p>
//                   <ul className="grid grid-cols-2 gap-2">
//                     <li>India travel for Japanese</li>
//                     <li>India safe food Japanese traveler</li>
//                     <li>India tour with Japanese guide</li>
//                     <li>India Buddhism pilgrimage sites</li>
//                     <li>印度旅游指南</li>
//                     <li>印度佛教圣地</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <p className="font-medium text-primary-foreground mb-1">
//                     Russia & Middle East
//                   </p>
//                   <ul className="grid grid-cols-2 gap-2">
//                     <li>Индия туры из России</li>
//                     <li>Индия зимой</li>
//                     <li>Гоа из Москвы</li>
//                     <li>Аюрведа Индия</li>
//                     <li>India vacation from Riyadh</li>
//                     <li>India family tours Saudi</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <p className="font-medium text-primary-foreground mb-1">
//                     Latin America
//                   </p>
//                   <ul className="grid grid-cols-2 gap-2">
//                     <li>India desde Argentina</li>
//                     <li>Viaje a India argentinos</li>
//                     <li>India espiritual</li>
//                   </ul>
//                 </div>
//               </div>
//             )}

//             <button
//               onClick={() => setShowMoreServices(!showMoreServices)}
//               className="mt-4 text-sm font-medium text-accent hover:underline"
//             >
//               {showMoreServices ? "Show Less" : "Know More"}
//             </button>
//           </div>


//           {/* FOOTER BOTTOM */}
//           <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/80">
//             © 2025 Gills Tour & Travels. All Rights Reserved.
//           </div>
//         </div>
//       </footer>

//       {openModal && (
//         <LegalModal
//           type={openModal}
//           onClose={() => setOpenModal(null)}
//         />
//       )}
//     </>
//   )
// }

"use client"

import { Instagram } from "lucide-react"
import { useState } from "react"
import LegalModal from "./LegalModal"

export default function Footer() {
  const [openModal, setOpenModal] = useState<"privacy" | "terms" | null>(null)
  const [showMoreServices, setShowMoreServices] = useState(false)

  return (
    <>
      <footer className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 py-14">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* BRAND */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">GT</span>
                </div>
                <span className="font-bold text-lg">
                  Gills Tour & Travels Shimla Taxi
                </span>
              </div>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                Trusted travel experts since 2000.
                Premium taxi services, tour packages, and local travel solutions
                across Himachal Pradesh and India.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:underline">Home</a></li>
                <li><a href="#destinations" className="hover:underline">Destinations</a></li>
                <li><a href="#categories" className="hover:underline">Categories</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>

              <div className="flex gap-4 mb-4">
                <a
                  href="https://www.instagram.com/gillholidays0095"
                  className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition"
                >
                  <Instagram size={18} />
                </a>
              </div>

              <p className="text-sm">
                Call: +91 9218921595<br />
                +91 8894261663
              </p>

              <p className="text-sm mt-2">
                Shimla, Himachal Pradesh, India
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <button onClick={() => setOpenModal("privacy")} className="hover:underline">
                  Privacy Policy
                </button><br />
                <button onClick={() => setOpenModal("terms")} className="hover:underline">
                  Terms & Conditions
                </button>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold mb-4">Travel Services</h3>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              <li>Shimla Taxi Service</li>
              <li>Cabs in Shimla</li>
              <li>Shimla to Manali Taxi</li>
              <li>Chandigarh to Shimla Cab</li>
              <li>Delhi to Shimla Taxi</li>
              <li>Kullu Manali Tour</li>
              <li>Spiti Valley Tour</li>
              <li>Kasol & Dharamshala Trip</li>
              <li>Dalhousie & Khajjiar Tour</li>
              <li>Himachal Honeymoon Packages</li>
              <li>Local Sightseeing Shimla</li>
              <li>Airport & Railway Transfers</li>
            </ul>

            {/* EXPANDABLE INDIA-ONLY SEO */}
            {showMoreServices && (
              <div className="mt-6 space-y-5 text-xs leading-relaxed">

                <div>
                  <p className="font-medium mb-1">Himachal Pradesh Destinations</p>
                  <ul className="grid grid-cols-2 gap-2">
                    <li>Shimla sightseeing taxi</li>
                    <li>Manali local cab</li>
                    <li>Kufri & Naldehra tour</li>
                    <li>Chitkul & Kalpa trip</li>
                    <li>Tirthan Valley tour</li>
                    <li>Barot Valley travel</li>
                    <li>Best Cab Service in Shimla</li>
                    <li>Local Taxi Service in Shimla</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-1">Popular India Tour Routes</p>
                  <ul className="grid grid-cols-2 gap-2">
                    <li>Delhi to Manali tour</li>
                    <li>Chandigarh to Himachal taxi</li>
                    <li>Amritsar to Dharamshala</li>
                    <li>Haridwar to Shimla trip</li>
                    <li>Jaipur to Himachal tour</li>
                    <li>Punjab to Himachal taxi</li>

                  </ul>
                </div>

                <div>
                  <p className="font-medium mb-1">Spiritual & Leisure Travel</p>
                  <ul className="grid grid-cols-2 gap-2">
                    <li>Char Dham Yatra</li>
                    <li>Vaishno Devi trip</li>
                    <li>Manikaran Sahib tour</li>
                    <li>Dharamshala monastery visit</li>
                    <li>Yoga & wellness retreats</li>
                    <li>Temple tours in Himachal</li>
                    <li>Taxi Service in Shimla</li>
                    <li>Shimla Cabs</li>
                  </ul>
                </div>

                {/*
                =============================
                FOREIGN COUNTRY SEO (DISABLED)
                =============================

                Europe / USA / Asia / Middle East /
                Russia / Latin America SEO removed
                to avoid Google Business suspension.

                This content can be reused later
                on a separate international landing page.
                */}
              </div>
            )}

            <button
              onClick={() => setShowMoreServices(!showMoreServices)}
              className="mt-4 text-sm font-medium text-accent hover:underline"
            >
              {showMoreServices ? "Show Less" : "Know More"}
            </button>
          </div>

          {/* FOOTER BOTTOM */}
          <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm">
            © 2025 Gills Tour & Travels. All Rights Reserved.
          </div>

        </div>
      </footer>

      {openModal && (
        <LegalModal
          type={openModal}
          onClose={() => setOpenModal(null)}
        />
      )}
    </>
  )
}
