import CategoryComponent from "@/components/CategoryComponent.tsx/CategoryComponent";
import CustomerReview from "@/components/CustomerReview/CustomerReview";
import FaqSection from "@/components/FaqSection";
import Layout from "@/components/layout";
import SatisfiedCustomersSection from "@/components/SatisfiedCustomersSection";
import { notFound } from "next/navigation";
import { Star, ChevronLeft ,ChevronRight } from "lucide-react";
import Link from "next/link";

// Define the supported slugs
const validSlugs = ["tshirts", "hoodies", "accessories"] as const;

// Type based on the valid slugs
type ValidSlug = (typeof validSlugs)[number];


// Generate static params
export async function generateStaticParams() {
  return validSlugs.map((category) => ({ category }));
}



// The actual page component
const CategoryPage = async ({
  params,
}: {
  params: Promise<{ category: ValidSlug }>;
}) => {
  const {category } = await params
  if (!validSlugs.includes(category)) {
    notFound();
  }

  return (
    <Layout>
        <div className="container mx-auto flex items-center text-sm text-[#0072BA] py-6">
          <Link href="/catalog" className="relative hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            All Products
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-black">
            T-Shirts
          </span>
        </div>
      <CategoryComponent />
      <SatisfiedCustomersSection/>
      <CustomerReview/>
      <FaqSection/>

    </Layout>
 
  );
};

export default CategoryPage;
