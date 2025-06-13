'use client'
import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Search, ChevronDown, Filter } from "lucide-react";
import Image from "next/image";
import productsData from "@/lib/data.json";




// interface Product {
//     id: number;
//     name: string;
//     description: string;
//     category: string;
//     image: string;
//     colors: string[];
//     sizes: string[];
//     price: number;
//     rating: number;
//     reviews: number;
//     badge?: string;
//     minOrder: string;
//   }
  
//  const productsData: Product[] = [
//     {
//       id: 1,
//       name: "Classic Cotton T-Shirt",
//       description: "Soft, comfortable cotton t-shirt perfect for everyday wear and custom printing.",
//       category: "T-Shirts",
//       image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["White", "Black", "Navy", "Red", "Gray", "Green"],
//       sizes: ["XS", "S", "M", "L", "XL", "2XL"],
//       price: 12.99,
//       rating: 4.8,
//       reviews: 1245,
//       badge: "Best Seller",
//       minOrder: "No minimum"
//     },
//     {
//       id: 2,
//       name: "Premium Polo Shirt",
//       description: "Professional polo shirt with moisture-wicking fabric, ideal for corporate events.",
//       category: "Polos",
//       image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["Navy", "White", "Black", "Red", "Gray"],
//       sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
//       price: 24.99,
//       rating: 4.7,
//       reviews: 892,
//       minOrder: "12 pieces"
//     },
//     {
//       id: 3,
//       name: "Pullover Hoodie",
//       description: "Cozy fleece hoodie with front pocket, perfect for casual wear and team uniforms.",
//       category: "Hoodies",
//       image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["Black", "Gray", "Navy", "Red", "Green", "Purple"],
//       sizes: ["S", "M", "L", "XL", "2XL"],
//       price: 34.99,
//       rating: 4.6,
//       reviews: 567,
//       minOrder: "6 pieces"
//     },
//     {
//       id: 4,
//       name: "Baseball Cap",
//       description: "Adjustable baseball cap with structured crown, great for outdoor events.",
//       category: "Hats",
//       image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["Black", "Navy", "Red", "White", "Green"],
//       sizes: ["One Size"],
//       price: 16.99,
//       rating: 4.5,
//       reviews: 324,
//       minOrder: "No minimum"
//     },
//     {
//       id: 5,
//       name: "Zip-Up Hoodie",
//       description: "Full-zip hoodie with drawstring hood and front pockets.",
//       category: "Hoodies",
//       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["Black", "Gray", "Navy", "Red"],
//       sizes: ["S", "M", "L", "XL", "2XL"],
//       price: 42.99,
//       rating: 4.8,
//       reviews: 445,
//       badge: "Premium",
//       minOrder: "6 pieces"
//     },
//     {
//       id: 6,
//       name: "Performance T-Shirt",
//       description: "Moisture-wicking athletic t-shirt for sports teams and active wear.",
//       category: "T-Shirts",
//       image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["White", "Black", "Navy", "Red", "Blue", "Green"],
//       sizes: ["XS", "S", "M", "L", "XL", "2XL"],
//       price: 18.99,
//       rating: 4.7,
//       reviews: 678,
//       minOrder: "12 pieces"
//     },
//     {
//       id: 7,
//       name: "Trucker Hat",
//       description: "Mesh-back trucker hat with foam front panel for custom designs.",
//       category: "Hats",
//       image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["Black", "White", "Navy", "Red", "Camo"],
//       sizes: ["One Size"],
//       price: 14.99,
//       rating: 4.4,
//       reviews: 298,
//       minOrder: "No minimum"
//     },
//     {
//       id: 8,
//       name: "Long Sleeve Tee",
//       description: "Comfortable long sleeve t-shirt for cooler weather and layering.",
//       category: "T-Shirts",
//       image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["White", "Black", "Gray", "Navy", "Green"],
//       sizes: ["S", "M", "L", "XL", "2XL"],
//       price: 22.99,
//       rating: 4.6,
//       reviews: 456,
//       minOrder: "6 pieces"
//     },
//     {
//       id: 9,
//       name: "Tank Top",
//       description: "Lightweight tank top perfect for summer events and gym wear.",
//       category: "T-Shirts",
//       image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["White", "Black", "Gray", "Navy", "Red"],
//       sizes: ["XS", "S", "M", "L", "XL"],
//       price: 14.99,
//       rating: 4.3,
//       reviews: 234,
//       minOrder: "12 pieces"
//     },
//     {
//       id: 10,
//       name: "Beanie Hat",
//       description: "Warm knit beanie for cold weather, available in multiple colors.",
//       category: "Hats",
//       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["Black", "Gray", "Navy", "Red", "Green", "Purple"],
//       sizes: ["One Size"],
//       price: 12.99,
//       rating: 4.5,
//       reviews: 189,
//       minOrder: "No minimum"
//     },
//     {
//       id: 11,
//       name: "Quarter-Zip Pullover",
//       description: "Stylish quarter-zip pullover for professional and casual occasions.",
//       category: "Jackets",
//       image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["Navy", "Gray", "Black", "Red"],
//       sizes: ["S", "M", "L", "XL", "2XL"],
//       price: 54.99,
//       rating: 4.8,
//       reviews: 367,
//       badge: "Premium",
//       minOrder: "6 pieces"
//     },
//     {
//       id: 12,
//       name: "Promotional Tote Bag",
//       description: "Durable canvas tote bag perfect for trade shows and promotional events.",
//       category: "Bags",
//       image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
//       colors: ["Natural", "Black", "Navy", "Red"],
//       sizes: ["Standard"],
//       price: 8.99,
//       rating: 4.4,
//       reviews: 512,
//       minOrder: "25 pieces"
//     }
//   ];

const ProductPageFilter = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<string>("all");
    const [sortBy, setSortBy] = useState<string>("name");
  
    // Extract unique values for filters
    const categories = Array.from(new Set(productsData.map(product => product.category)));
    const colors = Array.from(new Set(productsData.flatMap(product => product.colors)));
  
    // Filter and sort products
    const filteredProducts = useMemo(() => {
      const filtered = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesCategory = selectedCategories.length === 0 || 
                              selectedCategories.includes(product.category);
        
        const matchesColor = selectedColors.length === 0 ||
                           selectedColors.some(color => product.colors.includes(color));
        
        const matchesPrice = priceRange === "all" || 
                           (priceRange === "under-20" && product.price < 20) ||
                           (priceRange === "20-50" && product.price >= 20 && product.price <= 50) ||
                           (priceRange === "over-50" && product.price > 50);
  
        return matchesSearch && matchesCategory && matchesColor  && matchesPrice;
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
      setSelectedCategories(prev => 
        checked ? [...prev, category] : prev.filter(c => c !== category)
      );
    };
  
    const handleColorChange = (color: string, checked: boolean) => {
      setSelectedColors(prev => 
        checked ? [...prev, color] : prev.filter(c => c !== color)
      );
    };
  
  
    const clearFilters = () => {
      setSelectedCategories([]);
      setSelectedColors([]);
      setPriceRange("all");
      setSearchTerm("");
    };
  
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Custom Apparel & Promo Products</h1>
            <p className="text-muted-foreground">Find the perfect products for your needs</p>
          </div>
  
          <div className="flex gap-8">
            {/* Sidebar Filters */}
            <div className="w-64 flex-shrink-0">
              <div className="sticky top-4 space-y-6">
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
                <div className="space-y-2">
                  <Label>Sort By</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
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
                    {categories.map(category => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                        />
                        <Label htmlFor={category} className="text-sm">{category}</Label>
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
                    {colors.map(color => (
                      <div key={color} className="flex items-center space-x-2">
                        <Checkbox
                          id={color}
                          checked={selectedColors.includes(color)}
                          onCheckedChange={(checked) => handleColorChange(color, checked as boolean)}
                        />
                        <Label htmlFor={color} className="text-sm">{color}</Label>
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
                </Collapsible>
  
                {/* Price Range */}
                <div className="space-y-2">
                  <Label>Price Range</Label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue placeholder="All prices" />
                    </SelectTrigger>
                    <SelectContent>
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
  
            {/* Main Content */}
            <div className="flex-1">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} of {productsData.length} products
                </p>
              </div>
  
              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <Link href="/product/pro1">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={400}
                            height={192}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
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
                            <span className="text-xs text-muted-foreground">+{product.colors.length - 6}</span>
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
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                  <Button variant="outline" onClick={clearFilters} className="mt-4">
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
