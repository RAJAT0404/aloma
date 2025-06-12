'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import Image from "next/image";

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("T-Shirts");

  const categories = ["T-Shirts", "Hoodies", "Hats", "Polos", "Promo Products"];

  const products = [
    {
      id: 1,
      name: "RushOrderTees Classic Tee",
      badge: "Top Seller",
      badgeColor: "bg-slate-800",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      colors: [
        "#ffffff", "#000000", "#1e3a8a", "#1e40af", "#dc2626", "#7c2d12", 
        "#581c87", "#facc15", "#22c55e", "#10b981", "#ef4444", "#64748b"
      ],
      moreColors: "+64 colors",
      rating: 4.9,
      reviews: 2930,
      sizes: "S - 5XL",
      minOrder: "No Minimum",
      price: "$10.41",
      bulkPrice: "each for 50 items"
    },
    {
      id: 2,
      name: "Next Level Cotton Blend T-Shirt",
      badge: "Staff Favorite",
      badgeColor: "bg-green-700",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      colors: [
        "#9ca3af", "#6b7280", "#f97316", "#ea580c", "#84cc16", "#22c55e",
        "#000000", "#1f2937", "#059669", "#0891b2", "#dc2626", "#fbbf24"
      ],
      moreColors: "+23 colors",
      rating: 4.8,
      reviews: 537,
      sizes: "XS - 3XL",
      minOrder: "No Minimum", 
      price: "$14.78",
      bulkPrice: "each for 50 items"
    },
    {
      id: 3,
      name: "Bella + Canvas Tri-Blend T-Shirt",
      badge: "Top Seller",
      badgeColor: "bg-slate-800",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      colors: [
        "#f8fafc", "#f1f5f9", "#000000", "#22c55e", "#dc2626", "#581c87",
        "#0891b2", "#6b7280", "#f59e0b", "#84cc16", "#ef4444", "#8b5cf6"
      ],
      moreColors: "+52 colors",
      rating: 4.7,
      reviews: 394,
      sizes: "XS - 3XL",
      minOrder: "No Minimum",
      price: "$17.32", 
      bulkPrice: "each for 50 items"
    },
    {
      id: 4,
      name: "Comfort Colors Heavyweight T-Shirt",
      badge: "Eco-Friendly",
      badgeColor: "bg-green-600",
      image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      colors: [
        "#f1f5f9", "#fbbf24", "#f97316", "#ec4899", "#06b6d4", "#8b5cf6",
        "#dc2626", "#000000", "#f59e0b", "#10b981", "#3b82f6", "#8b5cf6"
      ],
      moreColors: "+54 colors",
      rating: 4.6,
      reviews: 154,
      sizes: "S - 4XL",
      minOrder: "No Minimum",
      price: "$16.68",
      bulkPrice: "each for 50 items"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-3 w-3 ${
              index < Math.floor(rating) 
                ? "text-yellow-400 fill-current" 
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Explore Best Sellers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The most loved products that customers can&apos;t get enough of
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "blue" : "ghost"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer transition-all duration-300 hover:shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover"
                  />
                  <Badge 
                    className={`absolute top-3 right-3 text-white ${product.badgeColor} border-none text-xs`}
                  >
                    {product.badge}
                  </Badge>
                </div>
                
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-sm text-foreground leading-tight">
                    {product.name}
                  </h3>
                  
                  {/* Color Options */}
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                      {product.colors.slice(0, 12).map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-gray-200 cursor-pointer hover:scale-110 transition-transform"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">{product.moreColors}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2">
                    {renderStars(product.rating)}
                    <span className="text-xs text-muted-foreground">
                      {product.reviews} reviews
                    </span>
                  </div>

                  {/* Size and Minimum Order */}
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{product.sizes}</span>
                    <span>{product.minOrder}</span>
                  </div>

                  {/* Price */}
                  <div className="space-y-1">
                    <div className="text-lg font-bold text-foreground">
                      {product.price}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {product.bulkPrice}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6 bg-blue-400 hover:bg-blue-500">
            Shop T-Shirts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;