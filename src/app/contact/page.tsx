import Contact from "@/components/Contact";
import FaqSection from "@/components/FaqSection";
import Layout from "@/components/layout";

export default async function ContactPage() {
  return (
    <Layout >
      <Contact />  
      <FaqSection/>
    </Layout>
  );
};
