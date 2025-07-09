import CustomerReview from "@/components/CustomerReview/CustomerReview";
import FaqSection from "@/components/FaqSection";
import Layout from "@/components/layout";
import BrandSection from "@/components/Sections/Brands/BrandSection";
// import SubBrandSection from "@/components/Sections/Brands/SubBrandSection";
import { notFound } from "next/navigation";

// Define the supported sub-brands
const validSubBrands = ["tshirts"] as const;

// Type based on the valid sub-brands
type ValidSubBrand = (typeof validSubBrands)[number];

// Generate static params
export async function generateStaticParams() {
  return validSubBrands.map((subBrand) => ({ subBrand }));
}

// The actual page component
const SubBrandPage = async ({
  params,
}: {
  params: Promise<{subBrand: ValidSubBrand }>;
}) => {
  const {subBrand } = await params;
  
  if (!validSubBrands.includes(subBrand)) {
    notFound();
  }

  return (
    <Layout>
       <BrandSection slug={'nike'} subProduct={subBrand} />
      <CustomerReview />
      <FaqSection />
    </Layout>
  );
};

export default SubBrandPage;
