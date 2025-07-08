'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, Globe2, Home, Printer, PrinterIcon, PrinterCheckIcon } from "lucide-react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqSection from "./FaqSection";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const faqData = [
  {
    value: "item-1",
    question: "What's your minimum order quantity?",
    answer: "Our minimum order is typically 12 pieces, but this can vary depending on the product and customization.",
  },
  {
    value: "item-2",
    question: "How long does production take?",
    answer: "Standard production time is 7-14 business days after artwork approval, depending on order size.",
  },
  {
    value: "item-3",
    question: "Do you offer design services?",
    answer: "Yes! Our design team can help create custom artwork or modify existing designs for your project.",
  },
  {
    value: "item-4",
    question: "What file formats do you accept?",
    answer: "We accept AI, EPS, PDF, and high-resolution PNG files. Vector formats work best for screen printing.",
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.info("Contact form submitted:", data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Business Street", "Suite 100", "City, State 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@company.com", "support@company.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <div className="min-h-max bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 py-12 max-w-[1400px]">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Create Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team is ready to bring your custom apparel vision to life. Reach out and let&apos;s start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 w-full mx-auto items-start">
          {/* Contact Form */}

          <div className="border-nonebg-transparent">
            <Card className="border-none rounded-2xl shadow-2xl overflow-hidden h-full">
              <div className="bg-[#003C64] p-4">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl text-white text-center">Get In Touch With Alamo Tees</CardTitle>
                </CardHeader>
              </div>
              <CardContent className="p-6 h-full">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 h-full flex flex-col gap-4">

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name <span className="text-red-500 mb-2">*</span></FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              className="bg-blue-50 border border-blue-200 focus-visible:ring-[#003C64] focus-visible:ring-1 h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email <span className="text-red-500 mb-2">*</span></FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="bg-blue-50 border border-blue-200 focus-visible:ring-[#003C64] focus-visible:ring-1 h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="mb-2">Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your phone number"
                              className="bg-blue-50 border border-blue-200 focus-visible:ring-[#003C64] focus-visible:ring-1  h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="flex-grow">
                          <FormLabel>Message <span className="text-red-500 mb-2">*</span></FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your inquiry..."
                              className="min-h-[120px] h-full bg-blue-50 border border-blue-200 focus-visible:ring-[#003C64] focus-visible:ring-1  h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex justify-center pt-4">
                      <Button
                        type="submit"
                        className="max-w-[200px] w-full py-6 text-lg font-medium"
                        disabled={isSubmitting}
                        variant="blue"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Details */}
            {/* <div className="w-full mt-10">
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 mt-10 mb-10">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Our customer service team is available during business hours to help with urgent inquiries.
                </p>
                <Button variant="blue" size="lg" className="px-8">
                  Call Now: (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div> */}


          </div>

          <div>

            <Card className="border-none shadow-xl max-w-2xl rounded-2xl overflow-hidden bg-[#003C64] ">
              <CardContent className="p-4 sm:p-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.306497368821!2d-98.60175452392895!3d29.56568424109452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c66e67a340d3b%3A0xa66b1975a42ece1e!2s12814%20Cogburn%20Ave%2C%20San%20Antonio%2C%20TX%2078249%2C%20USA!5e0!3m2!1sen!2sin!4v1751969985348!5m2!1sen!2sin"
                  width="100%"
                  height="320"
                  className="rounded-lg"
                  style={{ border: '0' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="mt-6 space-y-4 text-white">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5" />
                    <div>
                      <p>12814 Cogburn Ave San Antonio, TX 78249</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <p>Toll Free: 888-562-3800</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Printer className="h-5 w-5" />
                    <p>Fax: 210-699-1963</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <p>sales@alamotees.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="w-full mt-6">
              <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 mt-8 mb-0">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Our customer service team is available during business hours to help with urgent inquiries.
                  </p>
                  <Button variant="blue" size="lg" className="px-8">
                    Call Now: (555) 123-4567
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

         </div>


      </div>
      
    </div>

  );
}

export default Contact;











//     {/* FAQ Section */}
//     <div className="mt-20">
//     <h2 className="text-3xl font-bold text-center text-foreground mb-10">
//       Frequently Asked Questions
//     </h2>
//     <Accordion
//       type="single"
//       collapsible
//       className="bg-white rounded-xl shadow-lg divide-y divide-gray-100 overflow-hidden max-w-4xl mx-auto"
//     >
//       {faqData.map((item, index) => (
//         <AccordionItem
//           value={item.value}
//           key={index}
//           className="border-0 px-6 py-4 hover:bg-gray-50 transition-colors"
//         >
//           <AccordionTrigger className="text-lg sm:text-xl font-medium text-gray-800 hover:no-underline">
//             {item.question}
//           </AccordionTrigger>
//           <AccordionContent className="text-base sm:text-lg text-gray-600 pt-2 pb-4">
//             {item.answer}
//           </AccordionContent>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   </div>
// </div>
