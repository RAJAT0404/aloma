import React from "react";
import Layout from "@/components/layout";
import { notFound } from "next/navigation";
import CustomerReview from "@/components/CustomerReview/CustomerReview";
import OrderingOptions from "@/components/Sections/OrderingOptions/OrderingOptions";

// Define the supported slugs
const validSlugs = ["RGVzaWduOjEwOTI2MzM2"] as const;

// Type based on the valid slugs
type ValidSlug = (typeof validSlugs)[number];

// Generate static params
export async function generateStaticParams() {
  return validSlugs.map((designs) => ({ designs }));
}

// The actual page component
const YourDesigns = async ({
  params,
}: {
  params: Promise<{ designs: ValidSlug }>;
}) => {
  const { designs } = await params;
  if (!validSlugs.includes(designs)) {
    notFound();
  }

  return (
    <Layout>
      <OrderingOptions />
      <CustomerReview />
    </Layout>
  );
};

export default YourDesigns;
