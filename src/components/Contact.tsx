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
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Create Together
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team is ready to bring your custom apparel vision to life. Reach out and let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          {/* Contact Form */}
          <Card className="border-none shadow-xl rounded-2xl overflow-hidden w-full">
            <div className="bg-[#003C64] p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl text-white">Send us a Message</CardTitle>
              </CardHeader>
            </div>
            <CardContent className="p-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              className="bg-muted/20 border-muted-foreground/30 focus-visible:ring-primary"
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
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
                              className="bg-muted/20 border-muted-foreground/30 focus-visible:ring-primary"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your phone number"
                            className="bg-muted/20 border-muted-foreground/30 focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="What is this regarding?"
                            className="bg-muted/20 border-muted-foreground/30 focus-visible:ring-primary"
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
                      <FormItem>
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your inquiry..."
                            className="min-h-[120px] bg-muted/20 border-muted-foreground/30 focus-visible:ring-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      className="w-full max-w-[300px] py-6 text-lg font-medium"
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
          <div className="w-full">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Contact Details
              </h2>
              <p className="text-muted-foreground">
                Whether you have questions about our products or need help with an order, we're here to assist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-[#003C64] p-2 rounded-full">
                        <info.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-foreground mb-1">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Our customer service team is available during business hours to help with urgent inquiries.
                </p>
                <Button variant="blue" size="lg" className="w-full">
                  Call Now: (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-xl shadow-lg divide-y divide-gray-100 overflow-hidden max-w-4xl mx-auto"
          >
            {faqData.map((item, index) => (
              <AccordionItem
                value={item.value}
                key={index}
                className="border-0 px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <AccordionTrigger className="text-lg sm:text-xl font-medium text-gray-800 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base sm:text-lg text-gray-600 pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Contact;
