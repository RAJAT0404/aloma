import { Footer } from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ShowAllProductsSection from "@/components/ShowAllProductsSection";
import PopularProductsSection from "@/components/PopularProductsSection";
import SatisfiedCustomersSection from "@/components/SatisfiedCustomersSection";
import { TestimonialSection } from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <ShowAllProductsSection />
      <PopularProductsSection />
      <SatisfiedCustomersSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
