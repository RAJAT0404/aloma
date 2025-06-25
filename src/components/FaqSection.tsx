import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const accordianData = {
  title: "Frequently Asked Questions",
  FaqData: [
    {
      value: "item-1",
      question: "How much do custom shirts cost?",
      answer:
        "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      value: "item-2",
      question: "Is there a minimum quantity for custom shirts?",
      answer:
        "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      value: "item-3",
      question: "How quickly can I get personalized t-shirts delivered?",
      answer:
        "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      value: "item-4",
      question: "What size options are available for custom T-shirts?",
      answer:
        "text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ],
};

function FaqSection() {
  const {title,FaqData } = accordianData;
  return (
    <section className="bg-[#f4f8fc] w-full py-16 px-4 sm:px-8">
      <div className="container mx-auto max-w-4xl w-full flex flex-col gap-8">
        <h2 className="font-bold text-[36px]  text-center mb-0 text-gray-900">{title}</h2>
        <Accordion
          type="single"
          collapsible
          className="bg-white rounded-xl shadow-lg divide-y divide-gray-100 overflow-hidden"
        >
          {FaqData.map((Item, id) => {
            return (
              <AccordionItem 
                value={Item.value} 
                key={id}
                className="border-0 px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <AccordionTrigger className="text-lg sm:text-xl font-medium text-gray-800 hover:no-underline">
                  {Item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base sm:text-lg text-gray-600 pt-2 pb-4">
                  {Item.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
export default FaqSection;