import CategoryComponent from "@/components/CategoryComponent.tsx/CategoryComponent";
import { notFound } from "next/navigation";

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
    <div className="container mx-auto">
      <CategoryComponent />
    </div>
  );
};

export default CategoryPage;
