import React from "react";
import Layout from "@/components/layout";
import { notFound } from "next/navigation";
import ProductConfig from "@/components/Sections/ProductConfig/ProductConfig";

// Define the supported slugs
const validSlugs = ["edit-size"] as const;

// Type based on the valid slugs
type ValidSlug = (typeof validSlugs)[number];


// Generate static params
export async function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

// The actual page component
const Checkout = async ({
  params,
}: {
  params: Promise<{ slug: ValidSlug }>;
}) => {
  const { slug } = await params;
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return (
    <Layout>
      <ProductConfig />
    </Layout>
  );
};

export default Checkout;

