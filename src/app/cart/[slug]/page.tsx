import React from "react";
import OrderSummary from "@/components/OrderSummary/OrderSummary";
import CheckoutForm from "@/components/CheckoutForm/CheckoutForm";
import Layout from "@/components/layout";
import { notFound } from "next/navigation";

// Define the supported slugs
const validSlugs = ["checkoutffffffffffffffff"] as const;

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
}) =>{
  const { slug } = await params;
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return (
    <Layout>
      <div className="min-h-screen container mx-auto bg-background">
        <div className="flex flex-col-reverse md:flex-row justify-center gap-4 md:gap-8 items-center md:items-start px-4 sm:px-6 lg:px-8 py-8">
          <CheckoutForm/>
          <OrderSummary />
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;

