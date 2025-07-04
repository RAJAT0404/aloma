"use client";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import productData from "@/lib/topdata.json";
import BestSellersSection from "@/components/BestSeller/BestSellersSection";
import TShirtCategoriesGrid from "../TShirtCategoriesGrid/TShirtCategoriesGrid";

const SIDEBAR_SECTIONS = [
  {
    title: "Shop By Style",
    items: [
      "Short Sleeve T-Shirts",
      "Tank Tops & Sleeveless",
      "Soft Tri Blend T-Shirts",
      "Performance Shirts"
    ]
  },
  {
    title: "Popular Brands",
    items: [
      "Gildan", "Bella + Canvas", "Hanes", "Nike", "Comfort Colors",
      "Next Level", "Carhartt", "Under Armour", "New Era", "American Apparel"
    ]
  },
  {
    title: "Shop By Category",
    items: [
      "V-Necks", "Pocket T-Shirts", "Tie Dye Shirts", "Baseball Tees",
      "Shirts Made in the USA", "Sustainable T-Shirts", "Crop Tops",
      "Ringer Tees", "Long Sleeve", "Heavyweight T-Shirts", "Safety Shirts",
      "Budget-Friendly T-Shirts", "Premium T-Shirts", "All T-Shirts"
    ]
  }
];

const CategoryComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const productsData = useMemo(() => productData?.slice(0, 4), []);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName.toLowerCase());
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-xs ${index < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-6 lg:pt-7 pb-30">
        <div className="flex gap-8 flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="hidden lg:flex w-64 flex-shrink-0">
            <div className="sticky top-4 space-y-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Custom T-shirts
                </h2>
                <p className="text-sm text-muted-foreground">
                  Find the perfect products for your needs
                </p>
              </div>

              {SIDEBAR_SECTIONS.map((section) => (
                <div key={section.title} className="space-y-2">
                  <h3 className="font-semibold text-gray-800 mb-3">{section.title}</h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <div 
                        key={item}
                        className="py-1 cursor-pointer"
                        onClick={() => handleCategoryClick(item)}
                      >
                        <span className="text-sm text-blue-600 relative group hover:underline">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <BestSellersSection />
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">Top Picks</h2>
              <p className="text-sm text-muted-foreground">
                Popular options to fit any budget
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {productsData?.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer transition-all hover:shadow-lg rounded-xl"
                >
                  <CardContent className="p-0 rounded-t-xl overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Link href={`/catalog/${product.slug}`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={285}
                          height={220}
                          className="w-full h-55 object-contain transition-transform group-hover:scale-105 rounded-t-xl"
                        />
                      </Link>
                      {product.badge && (
                        <Badge className="absolute top-2 right-2 bg-primary">
                          {product.badge}
                        </Badge>
                      )}
                    </div>

                    <div className="p-4 space-y-3">
                      <h3 className="font-bold text-lg line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {product.description}
                      </p>

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

                      <div className="text-xs font-bold">
                        Sizes: {product.sizes.join(", ")}
                      </div>

                      <div className="flex items-center space-x-3.5">
                        <div className="flex">{renderStars(product.rating)}</div>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>

                      <div className="text-xl font-bold mt-2.5">
                        ${product.price.toFixed(2)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="my-8">
              <div className="mb-2">
                <h2 className="text-2xl font-bold mb-2">Shop By Style</h2>
                <p className="text-sm text-muted-foreground mb-8">
                  Find the perfect shirt to customize
                </p>
              </div>
              <TShirtCategoriesGrid/>

              <div className="flex justify-center mt-10">
                <Button variant="blue" className="mt-4 text-lg py-4 px-8">
                  View More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
