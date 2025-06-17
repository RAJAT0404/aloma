import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
// import ShowAllProductsSection from "@/components/ShowAllProductsSection";
import SatisfiedCustomersSection from "@/components/SatisfiedCustomersSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import BrandsSection from "@/components/BrandsSection";
import BrandSection2 from "@/components/BrandSection2";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandSection2/>
      <CategoriesSection />
      <BrandsSection/>
      {/* <ShowAllProductsSection /> */}
      <ProductShowcase/>
      <SatisfiedCustomersSection />
      <TestimonialSection />
    </div>
  );
}
