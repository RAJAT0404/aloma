import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import SatisfiedCustomersSection from "@/components/SatisfiedCustomersSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import BrandsSection from "@/components/BrandsSection";
import BrandSection2 from "@/components/BrandSection2";
import ProductShowcase from "@/components/ProductShowcase";
import Layout from "@/components/layout";


export default async function Home() {

  return (
    <Layout >
      <HeroSection />
      <BrandSection2/>
      <CategoriesSection />
      <BrandsSection/>
      <ProductShowcase/>
      <SatisfiedCustomersSection />
      <TestimonialSection />
    </Layout>
  );
}
