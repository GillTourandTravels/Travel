import Header from "@/components/header";
import Hero from "@/components/hero";
import Categories from "@/components/categories";
import FeaturedDestinations from "@/components/featured-destinations";
import WhyChooseUs from "@/components/why-choose-us";
import WhyTravelWithUs from "@/components/why-travel-with-us";
import TravelTips from "@/components/travel-tips";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import CategoriesPreview from "@/components/categories";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <Categories />

      <FeaturedDestinations />
      <WhyChooseUs />
      <WhyTravelWithUs />
      {/* <TravelTips /> */}
      {/* <ContactForm /> */}
      <Footer />
    </main>
  );
}
