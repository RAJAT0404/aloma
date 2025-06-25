import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import CustomerReview from "@/components/CustomerReview/CustomerReview";
import Layout from "@/components/layout";
import ProductItem from "@/components/ProductItem";
import React from "react";
import FaqSection from "@/components/FaqSection";
import CustomerFeedbackBlock from "@/components/CustomerFeedbackBlock/CustomerFeedbackBlock";
import ProductDetailsPanel from "@/components/ProductDetailsPanel/ProductDetailsPanel";

const SingleProductPage = () => {
  return (
    <Layout>
      <ProductItem />
      <ProductDetailsPanel/>
      <RelatedProducts />
      <CustomerFeedbackBlock/>
      <CustomerReview/>
      <FaqSection/>
    </Layout>
  );
};

export default SingleProductPage;
