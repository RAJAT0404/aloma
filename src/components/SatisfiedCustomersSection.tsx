'use client'
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Social1 from "../../public/social/social1.jpg"
import Social2 from "../../public/social/social2.jpg"
import Social3 from "../../public/social/social3.jpg"
import Social4 from "../../public/social/social4.jpg"
import Social5 from "../../public/social/social5.jpg"
import Social6 from "../../public/social/social6.jpg"
import Social7 from "../../public/social/social7.jpg"
import Social8 from "../../public/social/social8.jpg"
import Social9 from "../../public/social/social9.jpg"
import Social10 from "../../public/social/social10.jpg"
import Social11 from "../../public/social/social11.jpg"
import Social12 from "../../public/social/social12.jpg"

const SatisfiedCustomersSection = () => {
  const customerImages = [
    {
      id: 1,
      image: Social1,
      name: "Alex Johnson",
      product: "Custom Team Jersey"
    },
    {
      id: 2,
      image: Social2,
      name: "Sarah Wilson",
      product: "Personalized Hoodie"
    },
    {
      id: 3,
      image: Social3,
      name: "Mike Chen",
      product: "Corporate Polo"
    },
    {
      id: 4,
      image: Social4,
      name: "Emma Davis",
      product: "Custom T-Shirt"
    },
    {
      id: 5,
      image: Social5,
      name: "James Rodriguez",
      product: "Event Sweatshirt"
    },
    {
      id: 6,
      image: Social6,
      name: "Lisa Thompson",
      product: "Branded Cap"
    },
    {
      id: 7,
      image: Social7,
      name: "David Kim",
      product: "Custom Jacket"
    },
    {
      id: 8,
      image: Social8,
      name: "Maria Garcia",
      product: "Team Uniform"
    },
    {
      id: 9,
      image: Social9,
      name: "Ryan Miller",
      product: "Custom Hoodie"
    },
    {
      id: 10,
      image: Social10,
      name: "Nina Patel",
      product: "Promotional Shirt"
    },
    {
      id: 11,
      image: Social11,
      name: "Tom Anderson",
      product: "Sport Jersey"
    },
    {
      id: 12,
      image: Social12,
      name: "Sophie Brown",
      product: "Custom Tote"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Over 1,000,000+ Satisfied Customers</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get inspired by our happy customers showing off their custom apparel
          </p>
        </div>

        {/* Creative Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 auto-rows-[200px]">
          {customerImages.map((customer, index) => (
            <div
              key={customer.id}
              className={`
                relative overflow-hidden rounded-xl group cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10
                ${index % 7 === 0 ? 'row-span-2' : ''}
                ${index % 5 === 0 ? 'col-span-2' : ''}
                ${index % 3 === 0 && index % 5 !== 0 ? 'row-span-1' : ''}
              `}
            >
              <Image
                src={customer.image}
                alt={`${customer.name} wearing ${customer.product}`}
                width={500}
                height={500}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                <div className="flex justify-end space-x-2">
            
                </div>
                
                <div className="text-white">
                  {/* <p className="font-semibold text-sm mb-1">{customer.name}</p>
                  <p className="text-xs text-white/80 mb-3">{customer.product}</p> */}
                  <Button variant="secondary" size="sm" className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/30">
                    <Eye className="h-4 w-4 mr-2" />
                   View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Join our community of satisfied customers and share your story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant='blue' className=" text-primary-foreground ">
              Share Your Photo
            </Button>
            <Button variant="outline" size="lg">
              View More Stories
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SatisfiedCustomersSection;