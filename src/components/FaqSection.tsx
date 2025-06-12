'use client'

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: "What materials are your t-shirts made from?",
      answer: "Our t-shirts are made from 100% premium ring-spun cotton for superior softness and durability. We use double-stitched seams and reinforced collars for long-lasting wear."
    },
    {
      id: 2,
      question: "How do I choose the right size?",
      answer: "We provide detailed size charts for each product. If you're between sizes, we recommend sizing up for a looser fit or down for a more fitted look. Our customer service team can also help with sizing recommendations."
    },
    {
      id: 3,
      question: "What's your return policy?",
      answer: "We offer a 30-day return policy for unworn, unwashed items with tags attached. Custom printed items are final sale unless there's a manufacturing defect."
    },
    {
      id: 4,
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within the US. We also offer expedited shipping options at checkout. International shipping times vary by destination."
    },
    {
      id: 5,
      question: "Do you offer bulk discounts?",
      answer: "Yes! We offer quantity discounts for orders of 12+ items. Contact our sales team for custom quotes on large orders."
    },
    {
      id: 6,
      question: "How do I care for my custom apparel?",
      answer: "We recommend washing inside out in cold water and tumble drying on low. Avoid bleach and ironing directly on prints to preserve your design."
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader className="px-6 py-4 sm:px-8 sm:py-6">
            <CardTitle className="text-xl sm:text-2xl">Product & Order Information</CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="p-0">
            <div className="divide-y">
              {faqs.map((faq, index) => (
                <div key={faq.id} className="p-4 sm:p-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <h3 className="text-base sm:text-lg font-medium">{faq.question}</h3>
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {activeIndex === index && (
                    <p className="mt-3 sm:mt-4 text-muted-foreground">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 md:mt-12 lg:mt-16">
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
            Still have questions? Our team is happy to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" variant="blue" className="text-primary-foreground">
              Contact Support
            </Button>
            <Button variant="outline" size="lg">
              Live Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
