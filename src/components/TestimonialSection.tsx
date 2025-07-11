'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    rating: 5,
    quote: "Absolutely love the quality and style! The fabric feels premium and the fit is perfect. I&apos;ve ordered multiple times and they never disappoint.",
 avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Graphic Designer",
    rating: 5,
    quote: "The attention to detail is incredible. Fast shipping, excellent customer service, and the products exceed expectations every time.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    rating: 5,
    quote: "I&apos;m impressed by the sustainable practices and ethical manufacturing. Great quality products that align with my values.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    name: "David Park",
    role: "Fitness Trainer",
    rating: 5,
    quote: "Perfect for my active lifestyle. The materials are breathable, durable, and stylish. Highly recommend to everyone!",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export const TestimonialSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">What Our Customers Say</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full  mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center mb-2 sm:mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                        
                        <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 italic">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Image
                            src={testimonial?.avatar}
                            alt={testimonial?.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm sm:text-base font-semibold">{testimonial.name}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};