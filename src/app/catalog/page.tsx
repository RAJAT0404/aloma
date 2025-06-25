import React from "react";
import CatalogPage from '@/components/CatalogPage/CatalogPage'
import Layout from "@/components/layout";
import SatisfiedCustomersSection from "@/components/SatisfiedCustomersSection";
import FaqSection from "@/components/FaqSection";
import CustomerReview from "@/components/CustomerReview/CustomerReview";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Products = () => {
  return (
    <Layout> <div className="min-h-screen bg-background">
      <CatalogPage />
      <SatisfiedCustomersSection />
      <CustomerReview />
      <FaqSection />
    </div></Layout>
  );
};

export default Products;