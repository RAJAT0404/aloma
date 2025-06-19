'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import productsData from '@/lib/data.json';
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";


const RelatedProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const itemsPerView = 3;
  const maxIndex = Math.max(0, productsData?.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Related Products
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12 -ml-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-12 h-12 -mr-6"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Products Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="w-1/3 flex-shrink-0 px-3"
                >
                   <Card
                  key={product.id}
                  className="group rounded-t-[20px] overflow-hidden cursor-pointer mt-4 transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-0 rounded-t-[20px] overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Link href="/product/pro1">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={220}
                          className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105 group-hover:rounded-t-[20px] rounded-t-[20px]"
                       />
                      </Link>
                      {product.badge && (
                        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                          {product.badge}
                        </Badge>
                      )}
                    </div>

                    <div className="p-4 space-y-3">
                      <h3 className="font-semibold text-sm text-foreground leading-tight line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>

                      {/* Colors */}
                      <div className="flex flex-wrap gap-1">
                        {product.colors.slice(0, 6).map((color, index) => (
                          <div
                            key={index}
                            className="w-4 h-4 rounded-full border border-gray-200"
                            style={{ backgroundColor: color.toLowerCase() }}
                            title={color}
                          />
                        ))}
                        {product.colors.length > 6 && (
                          <span className="text-xs text-muted-foreground">
                            +{product.colors.length - 6}
                          </span>
                        )}
                      </div>

                      {/* Sizes
                      <div className="text-xs text-muted-foreground">
                        Sizes: {product.sizes.join(", ")}
                      </div> */}

                      {/* Rating */}
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, index) => (
                            <span
                              key={index}
                              className={`text-xs ${
                                index < Math.floor(product.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-foreground">
                          ${product.price.toFixed(2)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {product.minOrder}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2 md:hidden">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;