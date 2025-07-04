import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import CustomerReview from "@/components/CustomerReview/CustomerReview";
import Layout from "@/components/layout";
import ProductItem from "@/components/ProductItem";
import React from "react";
import FaqSection from "@/components/FaqSection";
import CustomerFeedbackBlock from "@/components/CustomerFeedbackBlock/CustomerFeedbackBlock";
import ProductDetailsPanel from "@/components/ProductDetailsPanel/ProductDetailsPanel";
import ProductsData from "@/lib/products.json";
import { notFound } from "next/navigation";

// Valid slugs for type safety
const validSlugs = ProductsData.map((product) => product.slug);
type ValidSlug = (typeof validSlugs)[number];

export async function generateStaticParams() {
  return ProductsData.map((product) => ({
    slug: product.slug.split("/"),
  }));
}

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  // Join slug array to match JSON slugs
  const productSlug = slug.join("/");

  // Find product
  const product = ProductsData.find((p) => p.slug === productSlug);

  if (!product) {
    notFound();
  }

  return (
    <Layout>
      <ProductItem product={product} />
      <ProductDetailsPanel product={product} />
      <RelatedProducts />
      <CustomerFeedbackBlock />
      <CustomerReview />
      <FaqSection />
    </Layout>
  );
};

export default SingleProductPage;
