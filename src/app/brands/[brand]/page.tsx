import CustomerReview from "@/components/CustomerReview/CustomerReview";
import FaqSection from "@/components/FaqSection";
import Layout from "@/components/layout";
import { notFound } from "next/navigation";
import SatisfiedCustomersSection from "@/components/SatisfiedCustomersSection";
import BrandCatalog from "@/components/Sections/Brands/BrandCatalog";

// Define the supported slugs
const validSlugs = ["nike" ] as const;

// Type based on the valid slugs
type ValidSlug = (typeof validSlugs)[number];


// Generate static params
export async function generateStaticParams() {
  return validSlugs.map((brand) => ({ brand }));
}

// The actual page component
const BrandPage = async ({
  params,
}: {
  params: Promise<{ brand: ValidSlug }>;
}) =>{
  const { brand } = await params;
  if (!validSlugs.includes(brand)) {
    notFound();
  }

  return (
   <Layout>
      <BrandCatalog />
      <SatisfiedCustomersSection />
      <CustomerReview />
      <FaqSection />
   </Layout>
  );
};

export default BrandPage;
