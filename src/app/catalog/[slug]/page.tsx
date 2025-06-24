import RelatedProducts from "@/components/BestSeller/RelatedProducts/RelatedProducts";
import CustomerReview from "@/components/CustomerReview/CustomerReview";
import Layout from "@/components/layout";
import ProductItem from "@/components/ProductItem";
import React from "react";
import FaqSection from "@/components/FaqSection";

const SingleProductPage = () => {
  return (
    <Layout>
      <ProductItem />
      <RelatedProducts />
      <CustomerReview/>
      <FaqSection/>
    </Layout>
  );
};

export default SingleProductPage;
