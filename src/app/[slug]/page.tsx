import CategoryFilterPage from "@/components/CategoryFilterPage";
import { notFound } from "next/navigation";

// Define the supported slugs
const validSlugs = ["products", "tshirts", "hoodies", "accessories"] as const;

// Type based on the valid slugs
type ValidSlug = (typeof validSlugs)[number];

// Params type for the route
// type CategoryPageProps = {
//   params: {
//     slug: ValidSlug;
//   };
// };

// Generate static params
export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}



// The actual page component
const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: ValidSlug }>;
}) => {
  const { slug } = await params
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return (
    <div className="container mx-auto">
      <CategoryFilterPage slug={slug} />
    </div>
  );
};

export default CategoryPage;
