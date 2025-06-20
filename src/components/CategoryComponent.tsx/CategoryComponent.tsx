"use client";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { Label } from "@/components/ui/label";
import Link from "next/link";
// import { Search, ChevronDown, Filter } from "lucide-react";
import Image from "next/image";
import productData from "@/lib/category.json";
import BestSellersSection from "@/components/BestSeller/BestSellersSection";

// import {
//   Drawer,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
import TShirtCategoriesGrid from "../TShirtCategoriesGrid/TShirtCategoriesGrid";
import FaqSection from "../FaqSection";

const CategoryComponent = () => {

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  console.log(selectedColors )

    // Sidebar categories matching the image
    const sidebarSections = [
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
            "Gildan",
            "Bella + Canvas",
            "Hanes",
            "Nike",
            "Comfort Colors",
            "Next Level",
            "Carhartt",
            "Under Armour",
            "New Era",
            "American Apparel"
          ]
        },
        {
          title: "Shop By Category",
          items: [
            "V-Necks",
            "Pocket T-Shirts",
            "Tie Dye Shirts",
            "Baseball Tees",
            "Shirts Made in the USA",
            "Sustainable T-Shirts",
            "Crop Tops",
            "Ringer Tees",
            "Long Sleeve",
            "Heavyweight T-Shirts",
            "Safety Shirts",
            "Budget-Friendly T-Shirts",
            "Premium T-Shirts",
            "All T-Shirts"
          ]
        }
      ];


        // Main categories for the top section
  const mainCategories = [
    { name: "T-Shirts", count: 245 },
    { name: "Sweatshirts & Hoodies", count: 89 },
    { name: "Polo Shirts", count: 67 },
    { name: "Hats", count: 123 },
    { name: "Promotional Products", count: 345 },
    { name: "Jackets", count: 78 },
    { name: "Bags", count: 156 },
    { name: "New Products", count: 23 },
    { name: "Activewear", count: 234 },
    { name: "Athleisure Wear", count: 145 },
    { name: "Safety", count: 67 }
  ];



  const productsData= productData?.slice(0,4)


    // Filter products based on search and selected category
    // const filteredProducts = useMemo(() => {
    //     let filtered = productsData.filter(product => {
    //       const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
          
    //       const matchesCategory = selectedCategory === "all" || 
    //                             product.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    //       return matchesSearch && matchesCategory;
    //     });
    
    //     return filtered;
    //   }, [searchTerm, selectedCategory]);
    
      const handleCategoryClick = (categoryName: string) => {
        setSelectedCategory(categoryName.toLowerCase());
      };



  const handleColorChange = (color: string, checked: boolean) => {
    setSelectedColors((prev) =>
      checked ? [...prev, color] : prev.filter((c) => c !== color)
    );
  };



  return (
    <div className="min-h-screen bg-background relative">
      <div className="container mx-auto px-4 pt-[24px] lg:pt-[59px] pb-[120px] relative">
        <div className="flex gap-8 flex-col lg:flex-row">
          {/* Sidebar Filters */}
          <div className="hidden lg:flex w-64 flex-shrink-0">
            <div className="sticky top-4 space-y-6">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-[24px] leading-[32px] font-[700] text-foreground mb-2.25">
                  Custom Apparel & Promo Products
                </h2>
                <p className="font-lato font-normal text-[14px] leading-[100%] mb-8 text-muted-foreground">
                  Find the perfect products for your needs
                </p>
              </div>

              {sidebarSections.map((section) => (
                    <div key={section.title} className="space-y-2">
                      <h3 className="font-semibold text-sm text-gray-800 mb-3">{section.title}</h3>
                      <div className="space-y-1">
                        {section.items.map((item) => (
                          <div 
                            key={item}
                            className="py-1 cursor-pointer"
                            onClick={() => handleCategoryClick(item)}
                          >
                            <span className="text-sm text-blue-600 hover:underline">
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
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
      
               <div className="mb-2">
                <h2 className="text-[24px] leading-[32px] font-[700] text-foreground mb-2.25">
                Top Picks
                </h2>
                <p className="font-lato font-normal text-[14px] leading-[100%] mb-2 text-muted-foreground">
                Popular options to fit any budget
                </p>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {productsData?.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg rounded-[20px]"
                >
                  <CardContent className="p-0 rounded-t-[20px] overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Link href="/">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={285}
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
                      <h3 className="font-bold text-[18px] leading-[24px] text-foreground mb-[14px] line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="font-normal text-[12px] leading-[16px] mb-[20px] text-[#737373] line-clamp-2">
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

                      {/* Sizes */}
                      <div className="font-bold text-[12px] leading-[18px]  text-[#000000]">
                        Sizes: {product.sizes.join(", ")}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-3.5 ">
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
                      <div className="-space-y-4 flex flex-row justify-between items-start">
                        <div className="font-bold flex flex-row justify-between items-center text-[20px] leading-[28px] text-foreground mt-2.5">
                          ${product.price.toFixed(2)}
                        </div>
                      </div>

                   
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

        <div className="my-8">
 
      
        <div className="mb-2">
                <h2 className="text-[24px] leading-[32px] font-[700] text-foreground mb-2.25">
                Shop By Style
                </h2>
                <p className="font-lato font-normal text-[14px] leading-[100%] mb-8 text-muted-foreground">
                Find the perfect shirt to customize
                </p>
              </div>
        <TShirtCategoriesGrid/>
     
        </div>

          </div>
          
        </div>
        <FaqSection/>
      </div>
    </div>
  );
};

export default CategoryComponent;
