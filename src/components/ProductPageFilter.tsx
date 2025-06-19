"use client";
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import productsData from "@/lib/data.json";
import BestSellersSection from "@/components/BestSellersSection/BestSellersSection";


import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  } from "@/components/ui/drawer"

const ProductPageFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  // const [showFilters, setShowFilters] = useState(false);

  // Extract unique values for filters
  const categories = Array.from(
    new Set(productsData.map((product) => product.category))
  );
  const colors = Array.from(
    new Set(productsData.flatMap((product) => product.colors))
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

      const matchesPrice =
        priceRange === "all" ||
        (priceRange === "under-20" && product.price < 20) ||
        (priceRange === "20-50" &&
          product.price >= 20 &&
          product.price <= 50) ||
        (priceRange === "over-50" && product.price > 50);

      return matchesSearch && matchesCategory && matchesColor && matchesPrice;
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
  }, [searchTerm, selectedCategories, selectedColors, priceRange, sortBy]);

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

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setPriceRange("all");
    setSearchTerm("");
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
                <h2 className="text-[24px] leading-[32px] font-[700] text-foreground mb-2">
                  Custom Apparel & Promo Products
                </h2>
                <p className="text-muted-foreground">
                  Find the perfect products for your needs
                </p>
              </div>
              {/* Search */}
              <div className="space-y-2">
                <Label>Search Products</Label>
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
                <Label>Sort By</Label>
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

              {/* Categories */}
              <Collapsible defaultOpen>
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
                  Categories
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pt-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) =>
                          handleCategoryChange(category, checked as boolean)
                        }
                      />
                      <Label htmlFor={category} className="text-sm">
                        {category}
                      </Label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {/* Colors */}
              <Collapsible defaultOpen>
                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
                  Colors
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 pt-2">
                  {colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
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
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
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
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) =>
                      handleCategoryChange(category, checked as boolean)
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
                <div key={color} className="flex items-center space-x-2">
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
            <BestSellersSection />
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {productsData.length}{" "}
                products
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts?.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer transition-all duration-300 hover:shadow-lg rounded-[20px]"
                >
                  <CardContent className="p-0 rounded-t-[20px] overflow-hidden" >
                    <div className="relative overflow-hidden">
                      <Link href="/product/pro1">
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

                      {/* Sizes */}
                      <div className="text-xs text-muted-foreground">
                        Sizes: {product.sizes.join(", ")}
                      </div>

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

export default ProductPageFilter;
