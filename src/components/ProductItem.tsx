'use client'

import { Button } from "@/components/ui/button";
import { Star, ChevronLeft ,ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Wallet,Truck, Clock  ,Shield } from "lucide-react";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviews: number;
    colors: Array<{ hex: string; name: string }>;
    sizes: string[];
    images: string[];
    features: string[];
}

const ProductItem = () => {
    const [selectedColor, setSelectedColor] = useState("#000000");
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLDivElement>(null);

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = -Math.sign(e.deltaY) * 0.1;
      setScale(prev => Math.min(Math.max(prev + delta, 1), 3));
    };

    useEffect(() => {
      const ref = imageRef.current;
      if (ref) {
        ref.addEventListener('wheel', handleWheel, { passive: false });
        return () => ref.removeEventListener('wheel', handleWheel);
      }
    }, []);

    const product: Product = {
      id: 1,
      name: "Premium Cotton T-Shirt",
      description: "Our best-selling premium cotton t-shirt featuring a classic fit, reinforced stitching, and double-needle hem for durability. Made from 100% ring-spun cotton for superior softness and comfort.",
      price: 24.99,
      originalPrice: 34.99,
      discount: 30,
      rating: 4.8,
      reviews: 142,
      colors: [
        {hex: "#000000", name: "Black"},
        {hex: "#ffffff", name: "White"},
        {hex: "#1e40af", name: "Navy Blue"},
        {hex: "#dc2626", name: "Red"},
        {hex: "#22c55e", name: "Green"},
        {hex: "#f59e0b", name: "Amber"},
        {hex: "#7c3aed", name: "Violet"},
        {hex: "#ec4899", name: "Pink"},
        {hex: "#0ea5e9", name: "Sky Blue"},
        {hex: "#14b8a6", name: "Teal"},
        {hex: "#f97316", name: "Orange"},
        {hex: "#8b5cf6", name: "Purple"},
        {hex: "#64748b", name: "Slate Gray"},
        {hex: "#ef4444", name: "Crimson"},
        {hex: "#10b981", name: "Emerald"},
        {hex: "#f43f5e", name: "Rose"},
        {hex: "#3b82f6", name: "Cobalt Blue"},
        {hex: "#6366f1", name: "Indigo"},
        {hex: "#d946ef", name: "Fuchsia"},
        {hex: "#facc15", name: "Yellow"},
        
      ],
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
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
  


    const handleImageSelect = (index: number) => {
      setSelectedImageIndex(index);
      setScale(1);
      setPosition({ x: 0, y: 0 });
    };
  
    return (
      <>
      
        <div className="container mx-auto px-4 py-8">
        <div className="flex items-center text-sm text-[#0072BA] mb-6">
          <Link href="/catalog" className="relative hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            All Products
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/tshirts" className="relative hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            T-Shirts
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/tshirts/short-sleeve-tshirt" className="relative hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            Short Sleeve T-Shirts
          </Link>
        </div>
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="w-full">
              <CardContent className="p-4 flex justify-center items-start gap-6 h-[600px]">
                <div className="h-full flex flex-col gap-2">
                  {product?.images.map((image, index) => (
                    <button 
                      key={index} 
                      className={`relative w-[100px] h-[100px] rounded-md overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <Image
                        onClick={() => handleImageSelect(index)}
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                <div 
                  className="relative w-full h-full rounded-lg overflow-hidden"
                  ref={imageRef}
              
                  onMouseDown={(e) => {
                    setIsDragging(true);
                    setStartPos({ 
                      x: e.clientX - position.x, 
                      y: e.clientY - position.y 
                    });
                  }}
                  onMouseMove={(e) => {
                    if (!isDragging) return;
                    setPosition({
                      x: position.x,
                      y: e.clientY - startPos.y
                    });
                  }}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onDoubleClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const y = (e.clientY - rect.top) / rect.height;
                    setPosition({
                      x: (0.5 - x) * 100,
                      y: (0.5 - y) * 100
                    });
                    setScale(prev => prev === 1 ? 2 : 1);
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                      transformOrigin: 'center center',
                      transition: isDragging ? 'none' : 'transform 0.2s ease-in-out',
                    }}
                  >
                    <Image
                      src={product.images[selectedImageIndex]}
                      alt={product.name}
                      fill
                      className="object-cover cursor-move"
                      priority
                    />
                  </div>
                </div>
              </CardContent>
            </div>

            {/* Rest of the component remains the same */}
            {/* Product Details */}
            <div>
              <CardHeader>
                <CardTitle className="text-3xl">{product.name}</CardTitle>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">Style:</span>
                  <span className="px-2 py-1 bg-gray-200 text-black rounded-md text-sm font-medium">G200</span>
                </div>
                {renderStars(product.rating)}
              </CardHeader>
              <CardContent>
            
  
                <p className="text-muted-foreground mt-4 mb-6">{product.description}</p>
  
                <div className="space-y-6">
                  {/* Color Selection */}
                  <div className="space-y-2">
                  <div className="text-lg text-muted-foreground mb-6">
                        Selected: <span className="font-medium" style={{ color: selectedColor.toLowerCase() === '#ffffff' ? '#000000' : selectedColor }}>
                          {product.colors.find(c => c.hex === selectedColor)?.name || selectedColor}
                        </span>
                      </div>
                    <div className="flex items-center justify-between">
                      <Label>Color</Label>
                     
                    </div>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {product.colors.map((color) => (
                        <button
                          key={color.hex}
                          onClick={() => setSelectedColor(color.hex)}
                          className={`w-10 h-10 border-2 transition-all relative flex items-center justify-center ${
                            selectedColor === color.hex 
                              ? "border-primary ring-2 ring-offset-2 ring-primary/30" 
                              : color.hex.toLowerCase() === '#ffffff' 
                                ? "border-gray-200" 
                                : "border-transparent"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          aria-label={`Select color ${color.name}`}
                        >
                          {selectedColor === color.hex && (
                            <svg
                              className={`w-5 h-5 ${
                                color.hex.toLowerCase() === '#ffffff' ? 'text-black' : 'text-white'
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>


                  {/* Decoration & Minimum Order */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-sm sm:text-base">Decoration Method</Label>
                    </div>
                    <select 
                      className="w-full p-2 sm:p-3 border rounded-md bg-muted/50 focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:bg-muted/70 text-sm sm:text-base"
                      defaultValue="Printing"
                    >
                      <option value="Printing" className="text-sm sm:text-base">Printing (No Minimum)</option>
                      <option value="Embroidery" className="text-sm sm:text-base">Embroidery (Min. 12)</option>
                      <option value="ScreenPrinting" className="text-sm sm:text-base">Screen Print (Min. 24)</option>
                      <option value="DTF" className="text-sm sm:text-base">DTF (Min. 6)</option>
                      <option value="Sublimation" className="text-sm sm:text-base">Sublimation (Min. 1)</option>
                    </select>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Select your preferred decoration method
                    </p>
                  </div>
  
                  {/* Size Selection */}
                  {/* <div>
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
                  </div> */}
  
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button
                className="relative bg-gradient-to-r from-[#003C64] to-[#0072BA] text-white px-6 py-6 text-lg font-bold transition-all
                duration-200  active:scale-98 border-2 border-white/20 hover:border-white/40 shadow-md rounded-lg"
                aria-label="Go to Design Lab"
              >
                <span className="relative z-10">Start Designing</span>
                <span className="absolute inset-0 rounded-lg bg-white/0 hover:bg-white/5 transition-all duration-300"></span>
              </Button>
                  </div>
  
                  {/* Features */}
                  <div>
                    <Separator className="my-6" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <Truck className="h-5 w-5 text-primary" />


                        <div>
                          <h4 className="font-medium">Free Delivery</h4>
                          <p className="text-sm text-muted-foreground">As soon as Mon Jul 07</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Rush Delivery

</h4>
                          <p className="text-sm text-muted-foreground">Guaranteed by Tue Jun 24</p>
                        </div>
                      </div>
                    
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">100% Cotton</h4>
                          <p className="text-sm text-muted-foreground">Material</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Wallet className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">Budget</h4>
                          <p className="text-sm text-muted-foreground">Price</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </div>
      </>
    );
  };

export default ProductItem
