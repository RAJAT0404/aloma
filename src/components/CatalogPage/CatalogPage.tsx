"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import Image from "next/image";
import BestSellersSection from "@/components/BestSeller/BestSellersSection";

import { Shirt, HardHat, Watch, Briefcase ,Dumbbell ,Ambulance  , Volleyball , Tent , Layers2 ,TextCursorInput} from "lucide-react";
import Cup from "../../../public/cup.jpg";
import Hoodie from "../../../public/hoodie.png";
import Tshirt from "../../../public/tshirt.png";
import { ChevronRight } from "lucide-react";

const ProductPageFilter = () => {

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  console.info(selectedCategory)

  const categoriess = [
    {
      id: 1,
      name: "T-Shirts",
      icon: Shirt,
      count: "120+ items",
      image: Tshirt,
    },
    {
      id: 2,
      name: "Hoodies",
      icon: HardHat,
      count: "85+ items",
      image: Hoodie,
    },
    {
      id: 3,
      name: "Accessories",
      icon: Watch,
      count: "200+ items",
      image: Cup,
    },
    {
      id: 4,
      name: "Caps",
      icon: Briefcase,
      count: "60+ items",
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      name: "jackets",
      icon: Shirt,
      count: "120+ items",
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 6,
      name: "safety",
      icon: Ambulance,
      count: "85+ items",
      image: "https://images.unsplash.com/photo-1662309376159-b95fb193d96b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FmZXR5JTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      name: "Activewear",
      icon:Dumbbell,
      count: "200+ items",
      image: "https://media.istockphoto.com/id/155601795/photo/mannequin-at-fashion-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=WC81EWI2QELadA3ZYw-4PC49mFGF0kzyGsCn3qyZ0D4=",
    },
    {
      id: 8,
      name: "Golf wear",
      icon: Volleyball,
      count: "60+ items",
      image:
        "https://media.istockphoto.com/id/1952590974/photo/four-golf-players-walking-and-laughing-after-the-game.jpg?s=612x612&w=0&k=20&c=tJ8Hkoa5gpRUNWUchMaM9KmDMGncpgxb3oEEZUv1Bh4=",
    },
    {
      id: 9,
      name: "Made in the USA",
      icon:Tent,
      count: "120+ items",
      image: "https://images.unsplash.com/photo-1610384466709-9b83df910cc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNhJTIwd2VhcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 10,
      name: "Pants & Shorts",
      icon: Layers2,
      count: "85+ items",
      image:"https://media.istockphoto.com/id/1310810791/photo/blue-short-pants-with-clipping-path.jpg?s=612x612&w=0&k=20&c=0QRny4tnOraxzv-JPsz4prWIGbYWo91TF3NkUi_Tte4=",
    },
    {
      id: 11,
      name: "Embroidered",
      icon: TextCursorInput,
      count: "200+ items",
      image: "https://images.unsplash.com/photo-1725285336920-c3a04fd4e58e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RW1icm9pZGVyZWQlMjBTd2VhdHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 12,
      name: "Kids wear",
      icon: Briefcase,
      count: "60+ items",
      image:
        "https://images.unsplash.com/photo-1601925240970-98447486fcdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZHMlMjB3ZWFyfGVufDB8fDB8fHww",
    },
  ];

  // Define main categories with subcategories
  const mainCategories = [
    {
      name: "T-Shirts",
      subcategories: [
        "V-Neck T-Shirts",
        "Pocket T-Shirts",
        "Tie Dye Shirts",
        "Baseball Tees",
        "Shirts Made in the USA",
        "Sustainable T-Shirts",
        "Crop Tops",
        "Ringer Tees",
        "Long Sleeve T-Shirts",
        "Heavyweight T-Shirts",
        "Safety Shirts",
        "Budget-Friendly T-Shirts",
        "Premium T-Shirts",
        "New T-Shirts",
        "All T-Shirts",
      ],
    },
    { name: "Sweatshirts & Hoodies", subcategories: [
      "Lightweight Sweatshirts",
      "Performance Sweatshirts",
      "Premium Sweatshirts",
      "Short Sleeve Hoodies",
      "Embroidered Sweatshirts",
      "Cropped Hoodies",
      "Safety Hoodies",
      "Heavyweight Sweatshirts",
      "Budget-Friendly Sweatshirts & Hoodies",
      "New Sweatshirts & Hoodies",
      "All Sweatshirts & Hoodies",
      "Women's Sweatshirts",
      "Kids Sweatshirts",
      "Tall Hoodies & Sweatshirts",
      "View All Sweatshirts & Hoodies"
    ] },
    { name: "Polo Shirts", subcategories: [
      "Printed Polo Shirts",
      "Sustainable Polos",
      "New Polos",
      "Budget-Friendly Polos",
      "Premium Polos",
      "All Polo Shirts",
      "Women's Polo Shirts",
      "Kids Polo Shirts",
      "Tall Polos"
    ]},
    { name: "Caps", subcategories: [
      "Snapback Hats",
      "Dad Hats",
      "5-Panel Hats",
      "Performance Hats",
      "Visors",
      "Rope Hats",
      "Budget-Friendly Hats",
      "Premium Hats",
      "Golf Hats",
      "Kids Hats",
      "Embroidered Hats",
      "Fitted Hats",
      "Flat Bill Hats",
      "Safety Hats",
      "Camouflage Hats",
      "Buckle Hats",
      "Headbands",
      "Bandanas",
      "New Hats",
      "All Hats"
    ]},
    { name: "Promotional Products", subcategories: [] },
    { name: "Jackets", subcategories: [
      "Fleece Jackets",
      "Soft Shell Jackets",
      "Track Jackets",
      "Bomber Jackets",
      "Work Jackets",
      "Safety Jackets",
      "Insulated & Down Jackets",
      "Puffer Jackets",
      "Letterman Jackets",
      "New Jackets",
      "Budget-Friendly Jackets",
      "Premium Jackets",
      "All Jackets",
      "Women's Jackets",
      "Kids Jackets",
      "Tall Jackets"
    ] },
    { name: "Bags", subcategories: [] },
    { name: "Golf Wear", subcategories: [] },
    { name: "Accessories", subcategories: [] },
    { name: "New Products", subcategories: [] },
    { name: "Activewear", subcategories: [] },
    { name: "Pant & shorts", subcategories: [] },
    { name: "Athleisure Wear", subcategories: [] },
    { name: "Safety", subcategories: [] },
    { name: "Kids wear", subcategories: [] },
  ];





  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName.toLowerCase());
  };



  return (
    <div className="min-h-screen bg-background relative">
           <div className="container mx-auto flex items-center px-5 text-sm text-[#0072BA] py-6 pb-2">
          <Link href="/" className="relative hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
         
          <span className="text-black">
          All Products
          </span>
        </div>
      <div className="container mx-auto px-4 pt-[24px] lg:pt-[29px] pb-[120px] relative">
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
              <div className="space-y-2">
                <h3 className="font-bold text-[20px] leading-[20px] mb-8">All Products</h3>
                <div className="space-y-1">
                  {mainCategories?.map((category) => (
                    <Collapsible key={category.name} className="space-y-1">
                      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 px-3 text-left text-sm font-medium hover:bg-muted rounded-md">
                        <span
                          className="text-primary cursor-pointer text-[18px] font-[600] leading-[24px]"
                          onClick={() => handleCategoryClick(category.name)}
                        >
                          {category.name}
                        </span>
                        {category.subcategories.length > 0 && (
                          <ChevronRight className="h-4 w-4 transition-transform data-[state=open]:rotate-90" />
                        )}
                      </CollapsibleTrigger>
                      {category.subcategories.length > 0 && (
                        <CollapsibleContent className="ml-4 space-y-1">
                          {category.subcategories?.map((sub) => (
                            <div key={sub} className="py-1">
                                <span className="text-sm text-primary cursor-pointer text-[16px] font-[400] leading-[20px] hover:text-[#0072BA] relative group">
                                  {sub}
                                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#0072BA] transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </div>
                          ))}
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <BestSellersSection />

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
              {categoriess.map((category) => {
                const Icon = category.icon;
                return (
                    <Link   key={category.id} href="/tshirts">
                  <Card
                    className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 group-hover:from-black/70 group-hover:to-black/40 transition-all duration-300 ease-in-out" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                          <Icon className="h-8 w-8 mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110" />
                          <h3 className="text-xl font-semibold mb-1 transition-transform duration-300 ease-in-out group-hover:scale-100">
                            {category.name}
                          </h3>
                          <p className="text-sm opacity-90 transition-transform duration-300 ease-in-out group-hover:scale-100">
                            {category.count}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  </Link>
                );
              })}
            </div>

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageFilter;
