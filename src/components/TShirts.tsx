'use client'
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const TShirts = () => {
  const router = useRouter();

  const tShirtCategories = [
    {
      id: 1,
      name: "Short Sleeve T-Shirts",
      description: "Classic short sleeve tees for everyday comfort",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "150+ Items"
    },
    {
      id: 2,
      name: "Tops & Sleeveless",
      description: "Tank tops and sleeveless shirts for active wear",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "80+ Items"
    },
    {
      id: 3,
      name: "Performance Shirts",
      description: "Athletic performance tees with moisture-wicking technology",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "95+ Items"
    },
    {
      id: 4,
      name: "Soft Tri-Blend T-Shirts",
      description: "Ultra-soft tri-blend fabric for premium comfort",
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "120+ Items"
    },
    {
      id: 5,
      name: "Dyed T-Shirts",
      description: "Tie-dye and custom dyed shirts with unique patterns",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "60+ Items"
    },
    {
      id: 6,
      name: "Long S sleeve T-Shirts",
      description: "Long sleeve tees for cooler weather and layering",
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "90+ Items"
    },
    {
      id: 7,
      name: "Kids&apos; T-Shirts",
      description: "Comfortable and fun t-shirts designed for children",
      image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "110+ Items"
    },
    {
      id: 8,
      name: "Women&apos;s T-Shirts",
      description: "Stylish and comfortable tees designed specifically for women",
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "140+ Items"
    }
  ];

  const handleCategoryClick = (categoryName: string) => {
    router.push(`/products?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            T-Shirts Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our complete range of high-quality t-shirts for every occasion, 
            style, and preference. From classic cuts to performance wear.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {tShirtCategories.map((category) => (
            <Card 
              key={category.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
              onClick={() => handleCategoryClick(category.name)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button variant='blue'
                      className="bg-white text-black hover:bg-gray-100 font-semibold"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {category.count}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      View Collection →
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our complete product collection or contact our team for custom design options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => router.push('/products')}
                className="px-8"
                variant='blue'
              >
                <Link href="/product">View All Products</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirts;