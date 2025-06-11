'use client'

import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PopularProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 24.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      reviews: 142,
      badge: "Best Seller",
      badgeColor: "bg-green-500"
    },
    {
      id: 2,
      name: "Custom Logo Hoodie",
      price: 45.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.9,
      reviews: 89,
      badge: "Sale",
      badgeColor: "bg-red-500"
    },
    {
      id: 3,
      name: "Embroidered Baseball Cap",
      price: 18.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.7,
      reviews: 76,
      badge: "New",
      badgeColor: "bg-blue-500"
    },
    {
      id: 4,
      name: "Corporate Polo Shirt",
      price: 32.99,
      originalPrice: 42.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.6,
      reviews: 124,
      badge: "Popular",
      badgeColor: "bg-purple-500"
    },
    {
      id: 5,
      name: "Custom Team Jersey",
      price: 39.99,
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.8,
      reviews: 98,
      badge: "Trending",
      badgeColor: "bg-orange-500"
    },
    {
      id: 6,
      name: "Eco-Friendly Tote Bag",
      price: 15.99,
      originalPrice: 22.99,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      rating: 4.5,
      reviews: 67,
      badge: "Eco",
      badgeColor: "bg-green-600"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < Math.floor(rating) 
                ? "text-yellow-400 fill-current" 
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Popular Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our bestselling custom apparel loved by thousands of customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badge */}
                {product.badge && (
                  <Badge 
                    className={`absolute top-3 left-3 text-white ${product.badgeColor} border-none`}
                  >
                    {product.badge}
                  </Badge>
                )}
                
                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-white/90 hover:bg-white">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-black hover:bg-gray-100">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    {renderStars(product.rating)}
                    <span className="text-sm text-muted-foreground">
                      {product.reviews} reviews
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                    {product.originalPrice && (
                      <Badge variant="destructive" className="ml-2">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;