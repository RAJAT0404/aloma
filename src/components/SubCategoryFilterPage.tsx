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
    id: 101,
    name: "Port & Company® Core Cotton Ringer Tee",
    brand: "PortCompany",
    description: "Clean white crew-neck short sleeve tee, perfect basics.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/LightBlueTshirt.jpg",
    colors: ["White"],
    sizes: ["S–XL"],
    price: 14.99,
    rating: 4.2,
    reviews: 250,
    minOrder: "No minimum",
    bgColor: "bg-gray-100",
    slug: "portcompany/core-cotton-ringer-tee",
  },
  {
    id: 102,
    name: "District ® Women’s Perfect Tri ® Rocker Tank",
    brand: "District",
    description: "Black crew-neck tee laid flat — casual essential.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/RacerbackTank.jpg",
    colors: ["Black"],
    sizes: ["S–2XL"],
    price: 15.99,
    rating: 4.3,
    reviews: 180,
    minOrder: "6 pieces",
    bgColor: "bg-blue-100",
    slug: "district/womens-perfect-tri-rocker-tank",
  },
  {
    id: 103,
    name: "District ® Perfect Weight ® Tee",
    brand: "District",
    description: "Bright white tee in studio lighting — premium look.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/WhiteTshirt.jpg",
    colors: ["White"],
    sizes: ["M–2XL"],
    price: 16.49,
    rating: 4.1,
    reviews: 305,
    badge: "Premium",
    minOrder: "12 pieces",
    bgColor: "bg-white",
    slug: "district/perfect-weight-tee",
  },
  {
    id: 104,
    name: "Sport-Tek® Women's PosiCharge® Replica Jersey",
    brand: "SportTek",
    description: "Black & white mockup for designs — versatile base.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/HoodedCardigan.jpg",
    colors: ["Black", "White"],
    sizes: ["S–XL"],
    price: 17.99,
    rating: 4.0,
    reviews: 120,
    minOrder: "No minimum",
    bgColor: "bg-gray-100",
    slug: "sporttek/womens-posicharge-replica-jersey",
  },
  {
    id: 105,
    name: "BELLA+CANVAS® Women’s Jersey Crop Tee",
    brand: "BellaCanvas",
    description: "Soft heather gray tee — neutral and comfy.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/NeckTee.jpg",
    colors: ["Heather Gray"],
    sizes: ["S–XL"],
    price: 15.49,
    rating: 4.2,
    reviews: 210,
    minOrder: "No minimum",
    bgColor: "bg-blue-100",
    slug: "bellacanvas/womens-jersey-crop-tee",
  },
  {
    id: 106,
    name: "District® Women’s Perfect Tri® Midi Long Sleeve Tee",
    brand: "District",
    description: "Pre-washed olive tee — relaxed vintage fit.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/Huddy.jpg",
    colors: ["Olive"],
    sizes: ["M–2XL"],
    price: 19.99,
    rating: 4.3,
    reviews: 201,
    badge: "Trending",
    minOrder: "12 pieces",
    bgColor: "bg-orange-100",
    slug: "district/womens-perfect-tri-midi-long-sleeve-tee",
  },
  {
    id: 107,
    name: "Sport-Tek® Tall Long Sleeve PosiCharge® Competitor™ Tee",
    brand: "SportTek",
    description: "Bright blue tee for a pop of color.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/RedShirt.jpg",
    colors: ["Royal Blue"],
    sizes: ["S–XL"],
    price: 16.49,
    rating: 4.1,
    reviews: 145,
    minOrder: "6 pieces",
    bgColor: "bg-gray-100",
    slug: "sporttek/tall-long-sleeve-posicharge-competitor-tee",
  },
  {
    id: 108,
    name: "Port & Company® Core Cotton Tank Top",
    brand: "PortCompany",
    description: "Slim fit charcoal tee — polished look.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/SandooBlue.jpg",
    colors: ["Charcoal"],
    sizes: ["S–2XL"],
    price: 18.99,
    rating: 4.2,
    reviews: 154,
    minOrder: "10 pieces",
    bgColor: "bg-gray-100",
    slug: "portcompany/core-cotton-tank-top",
  },
  {
    id: 109,
    name: "District ® Women’s Perfect Weight ® V-Neck Tee",
    brand: "District",
    description: "Vibrant orange tee for summer vibes.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/Black.jpg",
    colors: ["Orange"],
    sizes: ["S–XL"],
    price: 17.99,
    rating: 4.3,
    reviews: 132,
    minOrder: "No minimum",
    bgColor: "bg-orange-100",
    slug: "district/womens-perfect-weight-v-neck-tee",
  },
  {
    id: 110,
    name: "Sport-Tek® Sleeveless PosiCharge® Competitor™ Tee",
    brand: "SportTek",
    description: "Deep green tee perfect for outdoor activities.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/Sando.jpg",
    colors: ["Forest Green"],
    sizes: ["M–2XL"],
    price: 16.99,
    rating: 4.1,
    reviews: 178,
    minOrder: "6 pieces",
    bgColor: "bg-green-100",
    slug: "sporttek/sleeveless-posicharge-competitor-tee",
  },
  {
    id: 111,
    name: "Gildan® Ultra Cotton® 100% US Cotton Long Sleeve T-Shirt with Pocket",
    brand: "Gildan",
    description: "Earthy red tee — timeless and warm.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/GrayShirt.jpg",
    colors: ["Brick Red"],
    sizes: ["S–XL"],
    price: 17.49,
    rating: 4.2,
    reviews: 120,
    minOrder: "No minimum",
    bgColor: "bg-red-100",
    slug: "gildan/ultra-cotton-long-sleeve-t-shirt-pocket",
  },
  {
    id: 112,
    name: "Sport-Tek® PosiCharge® Tough Mesh Full-Button Jersey",
    brand: "SportTek",
    description: "Soft pastel pink tee — subtle and stylish.",
    category: "short-sleeve-tshirts",
    image: "/TopPicks/Buttonjersey.jpg",
    colors: ["Pastel Pink"],
    sizes: ["S–XL"],
    price: 16.99,
    rating: 4.3,
    reviews: 140,
    minOrder: "No minimum",
    bgColor: "bg-pink-100",
    slug: "sporttek/posicharge-tough-mesh-full-button-jersey",
  }
];


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
    productsData
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
                      <Link href={`/catalog/${product.slug}`}>
                        <Image
                          src={product.image ? product.image : placeholder}
                          alt={product.name}
                          width={285}
                          height={220}
                          className="w-full h-[220px] object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rounded-t-[20px] rounded-t-[20px]"
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
            <div className="flex justify-center mt-10">
              <Button
                variant="blue"
                className="mt-4 text-[18px] py-4 px-8"
              >
                View More
              </Button>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
};

export default SubCategoryFilterPage;
