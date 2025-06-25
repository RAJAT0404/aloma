"use client";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import placeholder from "../../public/placeholder.svg"
import { Star, ChevronLeft ,ChevronRight } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Search, ChevronDown, Filter } from "lucide-react";
import Image from "next/image";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import BestSellersSection from "./BestSeller/BestSellersSection";



const ProductsData=[
  {
    "id": 101,
    "name": "A White Crew-Neck Classic",
    "description": "Clean white crew-neck short sleeve tee, perfect basics.",
    "category": "short-sleeve-tshirts",
    "image": "https://media.istockphoto.com/id/1278597419/photo/blank-white-polo-shirt-mockup-front-view.jpg?s=612x612&w=0&k=20&c=aADmF6oWcCMfx1gl2-LU42AWjzMb53uModdEF7XKJGE=",
    "colors": ["White"],
    "sizes": ["S","M","L","XL"],
    "price": 14.99,
    "rating": 4.7,
    "reviews": 250,
    "minOrder": "No minimum",
    "bgColor": "bg-gray-100"
  },
  {
    "id": 102,
    "name": "Black Crew-Neck Essential",
    "description": "Black crew-neck tee laid flat — casual essential.",
    "category": "short-sleeve-tshirts",
 "image": "https://media.istockphoto.com/id/1358422711/photo/navy%093d-hq-rendered-t-shirt-with-detailed-and-texture-color.webp?a=1&b=1&s=612x612&w=0&k=20&c=__sz02cstVXoWggJGjxbBIifzDE7xy0CKusTfTxgYdE=",
     
    "colors": ["Black"],
    "sizes": ["S","M","L","XL","2XL"],
    "price": 15.99,
    "rating": 4.6,
    "reviews": 180,
    "minOrder": "6 pieces",
    "bgColor": "bg-blue-100"
  },
  {
    "id": 103,
    "name": "A Studio White Tee",
    "description": "Bright white tee in studio lighting — premium look.",
    "category": "short-sleeve-tshirts",
    "image": "https://media.istockphoto.com/id/1288582636/photo/white-mens-polo-template-with-buttons-and-collar-3d-rendering-isolated-on-background-front.jpg?s=612x612&w=0&k=20&c=kKBJlKckC3krJZXJGad37GviRbckMcy17BTwaEJKMSQ=",
   
    "colors": ["White"],
    "sizes": ["M","L","XL","2XL"],
    "price": 16.49,
    "rating": 4.8,
    "reviews": 305,
    "badge": "Premium",
    "minOrder": "12 pieces",
    "bgColor": "bg-white"
  },
  {
    "id": 104,
    "name": "Flat Lay Mockup Tee",
    "description": "Black & white mockup for designs — versatile base.",
    "category": "short-sleeve-tshirts",
    "image": "https://images.unsplash.com/photo-1666358084687-14347fbf364c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEZpdHRlZCUyMFQlMjBTaGlydHN8ZW58MHx8MHx8fDA%3D",
    
    "colors": ["Black","White"],
    "sizes": ["S","M","L","XL"],
    "price": 17.99,
    "rating": 4.5,
    "reviews": 120,
    "minOrder": "No minimum",
    "bgColor": "bg-gray-100"
  },
  {
    "id": 105,
    "name": "Heather Gray Essential",
    "description": "Soft heather gray tee — neutral and comfy.",
    "category": "short-sleeve-tshirts",
    "image": "https://images.unsplash.com/photo-1719710844666-956ea4834e0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEhlYXRoZXIlMjBHcmF5JTIwRXNzZW50aWFsJTIwVCUyMHNoaXJ0fGVufDB8fDB8fHww",
    "colors": ["Heather Gray"],
    "sizes": ["S","M","L","XL"],
    "price": 15.49,
    "rating": 4.6,
    "reviews": 210,
    "minOrder": "No minimum",
    "bgColor": "bg-blue-100"
  },
  {
    "id": 106,
    "name": "Olive Vintage Tee",
    "description": "Pre-washed olive tee — relaxed vintage fit.",
    "category": "short-sleeve-tshirts",
    "image": "https://media.istockphoto.com/id/471947494/photo/camouflage-tshirt.webp?a=1&b=1&s=612x612&w=0&k=20&c=vU1fyYP-bJj6yc5QRtmqgfdahMdYMq8wRlOw1pxwHaw=",
      
    "colors": ["Olive"],
    "sizes": ["M","L","XL","2XL"],
    "price": 19.99,
    "rating": 4.4,
    "reviews": 201,
    "badge": "Trending",
    "minOrder": "12 pieces",
    "bgColor": "bg-orange-100"
  },
  {
    "id": 107,
    "name": "Royal Blue Essential",
    "description": "Bright blue tee for a pop of color.",
    "category": "short-sleeve-tshirts",
    "image":"https://images.unsplash.com/photo-1654432007491-8c97c473a7b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJveWFsJTIwQmx1ZSUyMEVzc2VudGlhbCUyMFQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    "colors": ["Royal Blue"],
    "sizes": ["S","M","L","XL"],
    "price": 16.49,
    "rating": 4.5,
    "reviews": 145,
    "minOrder": "6 pieces",
    "bgColor": "bg-gray-100"
  },
  {
    "id": 108,
    "name": "Charcoal Slim Tee",
    "description": "Slim fit charcoal tee — polished look.",
    "category": "short-sleeve-tshirts",
    "image": "https://images.unsplash.com/photo-1734834933418-97049d256943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxZb3V0aCUyMFQlMjBTaGlydHN8ZW58MHx8MHx8fDA%3D",
      
    "colors": ["Charcoal"],
    "sizes": ["S","M","L","XL","2XL"],
    "price": 18.99,
    "rating": 4.7,
    "reviews": 154,
    "minOrder": "10 pieces",
    "bgColor": "bg-gray-100"
  },
  {
    "id": 109,
    "name": "Sunset Orange Tee",
    "description": "Vibrant orange tee for summer vibes.",
    "category": "short-sleeve-tshirts",
    "image":"https://images.unsplash.com/photo-1637905298405-a36397f549c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3Vuc2V0JTIwT3JhbmdlJTIwVGVlJTIwVCUyMHNoaXJ0fGVufDB8fDB8fHww",
    "colors": ["Orange"],
    "sizes": ["S","M","L","XL"],
    "price": 17.99,
    "rating": 4.5,
    "reviews": 132,
    "minOrder": "No minimum",
    "bgColor": "bg-orange-100"
  },
  {
    "id": 110,
    "name": "Forest Green Tee",
    "description": "Deep green tee perfect for outdoor activities.",
    "category": "short-sleeve-tshirts",
    "image":"https://images.unsplash.com/photo-1671851552775-7755ff4dee57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEZvcmVzdCUyMEdyZWVuJTIwVCUyMHNoaXJ0fGVufDB8fDB8fHww",
    "colors": ["Forest Green"],
    "sizes": ["M","L","XL","2XL"],
    "price": 16.99,
    "rating": 4.6,
    "reviews": 178,
    "minOrder": "6 pieces",
    "bgColor": "bg-green-100"
  },
  {
    "id": 111,
    "name": "Brick Red Tee",
    "description": "Earthy red tee — timeless and warm.",
    "category": "short-sleeve-tshirts",
    "image":"https://images.unsplash.com/photo-1741892600273-ba7df5a60dd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJyaWNrJTIwUmVkJTIwVCUyMHNoaXJ0fGVufDB8fDB8fHww",
    "colors": ["Brick Red"],
    "sizes": ["S","M","L","XL"],
    "price": 17.49,
    "rating": 4.4,
    "reviews": 120,
    "minOrder": "No minimum",
    "bgColor": "bg-red-100"
  },
  {
    "id": 112,
    "name": "Pastel Pink Tee",
    "description": "Soft pastel pink tee — subtle and stylish.",
    "category": "short-sleeve-tshirts",
    "image":"https://images.unsplash.com/photo-1634116590564-2d1fd8ca81c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFzdGVsJTIwUGluayUyMFQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
    "colors": ["Pastel Pink"],
    "sizes": ["S","M","L","XL"],
    "price": 16.99,
    "rating": 4.5,
    "reviews": 140,
    "minOrder": "No minimum",
    "bgColor": "bg-pink-100"
  }
  , {
    "id": 301,
    "name": "A White Beach Hoodie",
    "description": "Lightweight white hoodie perfect for beach evenings.",
    "category": "imported-hoodies",
    "image": "",
    "colors": ["White"],
    "sizes": ["S", "M", "L", "XL"],
    "price": 29.99,
    "rating": 4.6,
    "reviews": 150,
    "minOrder": "No minimum",
    "bgColor": "bg-blue-100"
  },
  {
    "id": 302,
    "name": "Urban White Street Hoodie",
    "description": "Casual streetwear hoodie with a relaxed fit.",
    "category": "imported-hoodies",
    "image":"",
    "colors": ["White", "Gray"],
    "sizes": ["S", "M", "L", "XL", "2XL"],
    "price": 32.99,
    "rating": 4.7,
    "reviews": 210,
    "minOrder": "6 pieces",
    "bgColor": "bg-gray-100"
  },
  {
    "id": 303,
    "name": "Studio White Hoodie",
    "description": "Clean studio shot short sleeve hoodie, premium look.",
    "category": "imported-hoodies",
    "image": "",
    "colors": ["White"],
    "sizes": ["M", "L", "XL", "2XL"],
    "price": 35.49,
    "rating": 4.8,
    "reviews": 300,
    "minOrder": "12 pieces",
    "bgColor": "bg-white"
  },
  {
    "id": 304,
    "name": "Blank Scenery Hoodie",
    "description": "Blank hoodie filmed against scenic backdrop.",
    "category": "imported-hoodies",
    "image":"",
    "colors": ["Gray"],
    "sizes": ["S", "M", "L", "XL"],
    "price": 27.99,
    "rating": 4.5,
    "reviews": 180,
    "minOrder": "No minimum",
    "bgColor": "bg-gray-200"
  },
  {
    "id": 305,
    "name": "Minimal White Hoodie",
    "description": "Sleek minimal hoodie—ideal for layering.",
    "category": "imported-hoodies",
    "image":"",
    "colors": ["White"],
    "sizes": ["S", "M", "L", "XL"],
    "price": 28.99,
    "rating": 4.4,
    "reviews": 140,
    "minOrder": "No minimum",
    "bgColor": "bg-white"
  },
  {
    "id": 306,
    "name": "Elegant Gray Hoodie",
    "description": "Soft gray short sleeve hoodie for daily wear.",
    "category": "imported-hoodies",
    "image":"",
    "colors": ["Gray"],
    "sizes": ["S", "M", "L", "XL"],
    "price": 30.99,
    "rating": 4.6,
    "reviews": 220,
    "minOrder": "6 pieces",
    "bgColor": "bg-gray-50"
  },
  {
    "id": 307,
    "name": "Street Black & White Hoodie",
    "description": "Conceptual streetwear hoodie in monochrome.",
    "category": "imported-hoodies",
    "image":"",
    "colors": ["Black", "White"],
    "sizes": ["S", "M", "L", "XL", "2XL"],
    "price": 33.49,
    "rating": 4.7,
    "reviews": 195,
    "minOrder": "No minimum",
    "bgColor": "bg-black"
  },
  {
    "id": 308,
    "name": "Blank Template Hoodie",
    "description": "Blank hoodie laid flat—ideal for mockups.",
    "category": "imported-hoodies",
    "image":"",
    "colors": ["White"],
    "sizes": ["S", "M", "L", "XL"],
    "price": 29.49,
    "rating": 4.5,
    "reviews": 160,
    "minOrder": "No minimum",
    "bgColor": "bg-white"
  },
  {
    "id": 309,
    "name": "Chill Street Hoodie",
    "description": "Relaxed fit hoodie for casual street style.",
    "category": "imported-hoodies",
    "image":"",
    "colors": ["White", "Light Gray"],
    "sizes": ["S", "M", "L", "XL", "2XL"],
    "price": 31.99,
    "rating": 4.7,
    "reviews": 207,
    "minOrder": "6 pieces",
    "bgColor": "bg-gray-100"
  },
  {
    "id": 310,
    "name": "Nighttime White Hoodie",
    "description": "White hoodie shot at night—moody aesthetic.",
    "category": "imported-hoodies",
    "image":"",
    "colors": ["White"],
    "sizes": ["S", "M", "L", "XL"],
    "price": 32.49,
    "rating": 4.8,
    "reviews": 240,
    "minOrder": "No minimum",
    "bgColor": "bg-gray-800"
  },
  {
    "id": 311,
    "name": "Casual White Hoodie",
    "description": "Casual everyday white hoodie with easy fit.",
    "category": "imported-hoodies",
    "image":"",
    "colors": ["White"],
    "sizes": ["S", "M", "L", "XL"],
    "price": 30.99,
    "rating": 4.6,
    "reviews": 210,
    "minOrder": "6 pieces",
    "bgColor": "bg-gray-50"
  },
  {
    "id": 312,
    "name": "Blended Linen Hoodie",
    "description": "Premium linen-blend hoodie with breathable fabric.",
    "category": "imported-hoodies",
    "image":"",
    "colors": ["White", "Olive"],
    "sizes": ["S", "M", "L", "XL"],
    "price": 37.99,
    "rating": 4.9,
    "reviews": 285,
    "badge": "Premium",
    "minOrder": "12 pieces",
    "bgColor": "bg-green-50"
  }
]








const SubCategoryFilterPage = ({ slug }: { slug: string }) => {


  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name"); 

  const productsData = ProductsData.filter((product) => 
    product.category.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase().replace(/\s+/g, '-')
  );

  

  // Extract unique values for filters
  const categories = Array.from(
    new Set(productsData.map((product) => product.category))
  );
  const colors = Array.from(
    new Set(productsData.flatMap((product) => product.colors))
  );
  const sizes = Array.from(
    new Set(productsData.flatMap((product) => product.sizes))
  );

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const filtered = productsData.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchesColor =
        selectedColors.length === 0 ||
        selectedColors.some((color) => product.colors.includes(color));

      const matchesSize =
        selectedSizes.length === 0 ||
        selectedSizes.some((size) => product.sizes.includes(size));

      const matchesPrice =
        priceRange === "all" ||
        (priceRange === "under-20" && product.price < 20) ||
        (priceRange === "20-50" &&
          product.price >= 20 &&
          product.price <= 50) ||
        (priceRange === "over-50" && product.price > 50);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesColor &&
        matchesSize &&
        matchesPrice
      );
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [
    searchTerm,
    selectedCategories,
    selectedColors,
    selectedSizes,
    priceRange,
    sortBy,
  ]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories((prev) =>
      checked ? [...prev, category] : prev.filter((c) => c !== category)
    );
  };

  const handleColorChange = (color: string, checked: boolean) => {
    setSelectedColors((prev) =>
      checked ? [...prev, color] : prev.filter((c) => c !== color)
    );
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    setSelectedSizes((prev) =>
      checked ? [...prev, size] : prev.filter((s) => s !== size)
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setPriceRange("all");
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-background relative">
        <div className="container mx-auto flex items-center text-sm text-[#0072BA] py-6">
          <Link href="/catalog" className="relative hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            All Products
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/tshirts" className="relative hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            T-Shirts
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
           <span className="text-black">
            Short Sleeve T-Shirts
          </span>
        </div>
      <div className="container mx-auto px-4 pt-[24px] lg:pt-[29px] pb-[120px] relative">
        <div className="flex gap-8 flex-col lg:flex-row">
          {/* Sidebar Filters */}
          <div className="hidden lg:flex w-64 flex-shrink-0">
            <div className="sticky top-4 space-y-6">
              {/* Header */}
              <div className="mb-8">
          <h2 className="text-[28px] leading-[32px] font-[700] text-foreground mb-5 capitalize">
            {slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}
          </h2>
                <p className="font-lato font-normal text-[14px] leading-[100%] mb-8 text-muted-foreground">
                  Find the perfect products for your needs
                </p>
              </div>
              {/* Search */}
              <div className="space-y-2">
                <Label className="font-semibold text-[16px] leading-[100%] mb-[14px]">
                  Search Products
                </Label>

                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              {/* Sort */}
              <div className="space-y-2 w-full">
             
                <Label className="font-semibold text-[16px] leading-[100%] mb-[14px]">
                  Sort By
                </Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>



              {/* Colors */}
              <Collapsible defaultOpen>
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2  font-semibold text-[16px] leading-[100%] mb-[14px]">
                  Colors
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pt-2">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className="flex items-center space-x-3.5 mb-3"
                    >
                      <Checkbox
                        id={color}
                        checked={selectedColors.includes(color)}
                        onCheckedChange={(checked) =>
                          handleColorChange(color, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={color}
                        className="font-lato font-normal text-[14px] leading-[100%] text-black/80"
                      >
                        {color}
                      </Label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Sizes */}
              <Collapsible defaultOpen>
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
                  Sizes
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pt-2">
                  {sizes.map((size) => (
                    <div
                      key={size}
                      className="flex items-center space-x-3.5 mb-3"
                    >
                      <Checkbox
                        id={size}
                        checked={selectedSizes.includes(size)}
                        onCheckedChange={(checked) =>
                          handleSizeChange(size, checked as boolean)
                        }
                      />
                      <Label
                        htmlFor={size}
                        className="font-lato font-normal text-[14px] leading-[100%] text-black/80"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Price Range */}
              <div className="space-y-2 w-full">
                <Label>Price Range</Label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="All prices" />
                  </SelectTrigger>
                  <SelectContent className="w-full">
                    <SelectItem value="all">All prices</SelectItem>
                    <SelectItem value="under-20">Under $20</SelectItem>
                    <SelectItem value="20-50">$20 - $50</SelectItem>
                    <SelectItem value="over-50">Over $50</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Clear Filters */}
              <Button
                variant="outline"
                onClick={clearFilters}
                className="w-full"
              >
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>

          <Drawer>
            <DrawerTrigger asChild>
              <Button className="lg:hidden fixed bottom-4 right-4 z-50 shadow-md bg-primary text-white px-4 py-2 rounded-full">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </DrawerTrigger>

            <DrawerContent className="p-4 pt-6 max-h-[90vh] overflow-y-auto">
              <DrawerHeader>
                <DrawerTitle className="text-lg font-semibold">
                  Filter Products
                </DrawerTitle>
              </DrawerHeader>

              {/* Filter Panel */}
              <div className="space-y-4">
                {/* Header */}
                <div>
                  <h2 className="text-[18px] leading-[26px] font-[700] text-foreground mb-1">
                    Custom Apparel & Promo Products
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Find the perfect products
                  </p>
                </div>

                {/* Filter Items */}
                <div className="flex flex-row gap-4 overflow-x-auto snap-x">
                  {/* Sort */}
                  <div className="min-w-[200px] flex-shrink-0 space-y-1 snap-start">
                    <Label className="text-sm">Sort By</Label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full py-2 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="w-full text-sm">
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="price-low">
                          Price: Low to High
                        </SelectItem>
                        <SelectItem value="price-high">
                          Price: High to Low
                        </SelectItem>
                        <SelectItem value="rating">Highest Rated</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Categories */}
                  <div className="min-w-[200px] flex-shrink-0 snap-start">
                    <Label className="text-sm font-medium">Categories</Label>
                    <Collapsible defaultOpen>
                      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium text-sm">
                        Categories
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 pt-1">
                        {categories.map((category) => (
                          <div
                            key={category}
                            className="flex items-center space-x-3.5 mb-3"
                          >
                            <Checkbox
                              id={category}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={(checked) =>
                                handleCategoryChange(
                                  category,
                                  checked as boolean
                                )
                              }
                            />
                            <Label htmlFor={category} className="text-sm">
                              {category}
                            </Label>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  {/* Colors */}
                  <div className="min-w-[200px] flex-shrink-0 snap-start">
                    <Label className="text-sm font-medium">Colors</Label>
                    <Collapsible defaultOpen>
                      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium text-sm">
                        Colors
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 pt-1">
                        {colors.map((color) => (
                          <div
                            key={color}
                            className="flex items-center space-x-3.5 mb-3"
                          >
                            <Checkbox
                              id={color}
                              checked={selectedColors.includes(color)}
                              onCheckedChange={(checked) =>
                                handleColorChange(color, checked as boolean)
                              }
                            />
                            <Label htmlFor={color} className="text-sm">
                              {color}
                            </Label>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  {/* Price Range */}
                  <div className="min-w-[200px] flex-shrink-0 space-y-1 snap-start">
                    <Label className="text-sm">Price Range</Label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger className="w-full py-2 text-sm">
                        <SelectValue placeholder="All prices" />
                      </SelectTrigger>
                      <SelectContent className="w-full text-sm">
                        <SelectItem value="all">All prices</SelectItem>
                        <SelectItem value="under-20">Under $20</SelectItem>
                        <SelectItem value="20-50">$20 - $50</SelectItem>
                        <SelectItem value="over-50">Over $50</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Clear Filters */}
                <div className="pt-4">
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="w-full py-2 text-sm"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>

          {/* Main Content */}
          <div className="flex-1">
     { slug == "products" ?  <BestSellersSection/> : ''}
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-black font-lato font-semibold text-[20px] leading-none">
                Showing {filteredProducts.length} of {productsData?.length}{" "}
                products
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filteredProducts?.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg rounded-[20px]"
                >
                  <CardContent className="p-0 rounded-t-[20px] overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Link href="/catalog/gilden/premium-Cotton-T-Shirt?color=01">
                        <Image
                          src={product.image ? product.image : placeholder}
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
                      <h3 className="font-bold text-[18px] text-[#000D16] leading-[24px] line-clamp-2 mb-3">
                        {product.name}
                      </h3>

                      {/* <p className="text-xs text-muted-foreground line-clamp-2">
                        {product.description}
                      </p> */}

                      {/* Sizes */}
                      <div className="text-[12px] font-[700] leading-[18px] text-black mb-3">
                        Sizes: {product.sizes.join(", ")}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-3.5 mb-4">
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
                      <div className="space-y-1 flex flex-row justify-between items-center">
                        <div
                          className="font-bold text-[24px] leading-[30px] text-foreground"
                          style={{ fontWeight: 700 }}
                        >
                          ${product.price.toFixed(2)}
                        </div>
                        <Button
                          className="relative text-[#003C64] px-4 py-2.25 text-[14px] leading-[18px] font-medium bg-white
                               transition-all duration-300 ease-in-out active:scale-98 
                                    border border-[#003C64]  rounded-[8px] hover:border-[#003C64] hover:bg-[#003C64] hover:text-white my-2"
                          aria-label="Go to Design Lab"
                        >
                          <span className="relative z-10">Add to Cart</span>
                          <span className="absolute inset-0 rounded-[12px] bg-transparent hover:bg-[#003C64]/5 transition-all duration-300 ease-in-out"></span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No products found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="mt-4"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryFilterPage;
