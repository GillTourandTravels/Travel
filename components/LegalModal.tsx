"use client";

export default function LegalModal({
  type,
  onClose,
}: {
  type: "privacy" | "terms";
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {type === "privacy" ? "Privacy Policy" : "Terms & Guidelines"}
          </h2>
          <button
            onClick={onClose}
            className="text-sm underline text-gray-600 hover:text-gray-900"
          >
            Close
          </button>
        </div>

        {type === "privacy" ? <PrivacyContent /> : <TermsContent />}
      </div>
    </div>
  );
}

/* ===========================
   PRIVACY POLICY CONTENT
=========================== */

function PrivacyContent() {
  return (
    <div className="text-sm leading-relaxed text-gray-700 space-y-6">

      <p>
        <strong>Effective Date:</strong> 1 January 2025
      </p>

      <p>
        Gills Tours & Travels ("we", "our", "us") operates the website{" "}
        <strong>www.gillstourandtravel.com</strong>. This Privacy Policy explains
        how we collect, use, disclose, and protect your information when you
        visit or use our website or services.
      </p>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">1. Information We Collect</h3>
        <p className="font-medium">Personal Information:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Full name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Travel requirements and preferences</li>
          <li>Pickup and drop locations</li>
        </ul>

        <p className="font-medium mt-4">Non-Personal Information:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>IP address</li>
          <li>Pages visited and time spent on the website</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">2. How We Use Your Information</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide and manage taxi and tour services</li>
          <li>Respond to inquiries and booking requests</li>
          <li>Improve website performance and user experience</li>
          <li>Send service-related updates and confirmations</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">3. Cookies and Tracking Technologies</h3>
        <p>
          Our website may use cookies to enhance browsing experience, analyze
          traffic, and remember user preferences. You may disable cookies in
          your browser settings.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">4. Information Sharing and Disclosure</h3>
        <p>
          We do <strong>not</strong> sell, rent, or trade your personal
          information. Data may be shared only:
        </p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>With service partners strictly for booking fulfillment</li>
          <li>When required by law or government authorities</li>
          <li>To protect legal rights or prevent fraud</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">5. Data Security</h3>
        <p>
          We implement reasonable security measures; however, no online
          transmission is completely secure.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">6. Third-Party Links</h3>
        <p>
          We are not responsible for the privacy practices or content of
          third-party websites.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">7. Your Rights</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Request access to personal data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw marketing consent</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">8. Policy Updates</h3>
        <p>
          Updates will be posted on this page as needed.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">9. Contact Information</h3>
        <p>
          <strong>Gills Tour & Travels</strong><br />
          Shimla, Himachal Pradesh, India<br />
          Email: lalitgillshimla@gmail.com<br />
          Phone: +91-9218921595
        </p>
      </section>

    </div>
  );
}

/* ===========================
   TERMS & GUIDELINES CONTENT
=========================== */

function TermsContent() {
  return (
    <div className="text-sm leading-relaxed text-gray-700 space-y-6">

      <p>
        <strong>Effective Date:</strong> 1 January 2025
      </p>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">1. Services Offered</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Taxi and cab services</li>
          <li>Local sightseeing tours</li>
          <li>Outstation and intercity travel</li>
          <li>Customized Himachal tour packages</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">2. Booking and Payment</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Bookings confirmed after advance payment or confirmation</li>
          <li>Prices may vary by season and route</li>
          <li>Tolls, parking, permits paid by customer unless stated</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">3. Cancellation and Refund Policy</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Charges depend on cancellation timing</li>
          <li>No refund for no-shows or last-minute cancellations</li>
          <li>Refunds processed within 7–10 working days</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">4. Customer Responsibilities</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Provide accurate booking details</li>
          <li>Follow local laws and safety guidelines</li>
          <li>Maintain respectful behavior</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">5. Vehicle and Driver Policy</h3>
        <p>
          Vehicles are maintained for safety. Vehicle type may vary based on
          availability.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">6. Liability Disclaimer</h3>
        <p>
          We are not responsible for delays, personal belongings, or
          third-party service issues.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">7. Website Usage Guidelines</h3>
        <p>
          Users must not misuse content, attempt unauthorized access, or post
          misleading information.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">8. Intellectual Property</h3>
        <p>
          All website content belongs to Gills Tours & Travels.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">9. Governing Law</h3>
        <p>
          Governed by the laws of India with jurisdiction in Himachal Pradesh.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-gray-900 mb-2">10. Contact Us</h3>
        <p>
          <strong>Gills Tour & Travels</strong><br />
          Shimla, Himachal Pradesh, India<br />
          Email: lalitgillshimla@gmail.com<br />
          Phone: +91-9218921595
        </p>
      </section>

    </div>
  );
}
