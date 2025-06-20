import CategoryFilterPage from "@/components/CategoryFilterPage";
import { notFound } from "next/navigation";

// Define the supported slugs
const validSlugs = ["short-sleeve"] as const;

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
    <div className="container mx-auto">
      <CategoryFilterPage slug={'tshirts'}/>
    </div>
  );
};

export default ProductPage;
