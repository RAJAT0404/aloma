'use client'

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { Star, Heart, Share2, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  colors: string[];
  sizes: string[];
  images: string[];
  features: string[];
}

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const product: Product = {
    id: 1,
    name: "Premium Cotton T-Shirt",
    description: "Our best-selling premium cotton t-shirt featuring a classic fit, reinforced stitching, and double-needle hem for durability. Made from 100% ring-spun cotton for superior softness and comfort.",
    price: 24.99,
    originalPrice: 34.99,
    discount: 30,
    rating: 4.8,
    reviews: 142,
    colors: ["#000000", "#ffffff", "#1e40af", "#dc2626", "#22c55e"],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1583744949094-8d1d3b5a179a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    ],
    features: [
      "100% ring-spun cotton",
      "Classic fit",
      "Double-needle hem",
      "Reinforced stitching",
      "Pre-shrunk fabric"
    ]
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating) 
                ? "text-yellow-400 fill-current" 
                : "text-muted-foreground"
            }`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-1">
          ({product.reviews} reviews)
        </span>
      </div>
    );
  };

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity));
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden">
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Product Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{product.name}</CardTitle>
              {renderStars(product.rating)}
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 my-4">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                {product.discount && (
                  <Badge variant="destructive">
                    {product.discount}% OFF
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground mb-6">{product.description}</p>

              <div className="space-y-6">
                {/* Color Selection */}
                <div>
                  <Label>Color</Label>
                  <div className="flex gap-2 mt-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColor === color ? "border-primary" : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${color}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <Label>Size</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <Label>Quantity</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center border rounded-md w-fit">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange(quantity - 1)}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(Number(e.target.value))}
                        className="w-16 text-center border-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleQuantityChange(quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {quantity > 1 ? `${quantity} items` : `${quantity} item`}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="flex-1">
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Buy Now
                  </Button>
                  <Button variant="ghost" size="lg" className="px-3">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="lg" className="px-3">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                {/* Features */}
                <div>
                  <Separator className="my-6" />
                  <h3 className="font-medium mb-4">Product Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
