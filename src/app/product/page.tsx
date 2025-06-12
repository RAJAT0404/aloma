import React from "react";
import ProductPageFilter from "@/components/ProductPageFilter";
import { TestimonialSection } from "@/components/TestimonialSection";
import SatisfiedCustomersSection from "@/components/SatisfiedCustomersSection";
  const Products = () => {
    
  
    return (
      <div className="min-h-screen bg-background">
        <ProductPageFilter/>
        <SatisfiedCustomersSection/>
        <TestimonialSection/>
      </div>
    );
  };
  
  export default Products;