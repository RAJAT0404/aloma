import { Footer } from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ShowAllProductsSection from "@/components/ShowAllProductsSection";
import SatisfiedCustomersSection from "@/components/SatisfiedCustomersSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import BrandsSection from "@/components/BrandsSection";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <ShowAllProductsSection />
      <BrandsSection/>
      <ProductShowcase/>
      <SatisfiedCustomersSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
