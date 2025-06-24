import CustomerReview from "@/components/CustomerReview/CustomerReview";
import FaqSection from "@/components/FaqSection";
import Layout from "@/components/layout";
import SubCategoryFilterPage from "@/components/SubCategoryFilterPage";
import { notFound } from "next/navigation";

// Define the supported slugs
const validSlugs = ["short-sleeve-tshirts" ,"imported-hoodies"] as const;

// Type based on the valid slugs
type ValidSlug = (typeof validSlugs)[number];


// Generate static params
export async function generateStaticParams() {
  return validSlugs.map((product) => ({ product }));
}

// The actual page component
const ProductPage = async ({
  params,
}: {
  params: Promise<{ product: ValidSlug }>;
}) =>{
  const { product } = await params;
  if (!validSlugs.includes(product)) {
    notFound();
  }

  return (
   <Layout>
      <SubCategoryFilterPage slug={product}/>
      <CustomerReview/>
      <FaqSection/>
   </Layout>
  );
};

export default ProductPage;
