'use client';

import { Button } from "@/components/ui/button";
import { Star, ChevronRight, Truck, Clock, Shield, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import products from "@/lib/products.json";
import { Products } from "@/Types/products";



const ProductItem = ({ product }: { product: Products }) => {
  // Find product by id or slug


  const [selectedColor, setSelectedColor] = useState(product.colors[0].hex);
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
      ref.addEventListener("wheel", handleWheel, { passive: false });
      return () => ref.removeEventListener("wheel", handleWheel);
    }
  }, []);

  const renderStars = (rating: number) => (
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
      <span className="text-sm text-muted-foreground ml-1">({product.reviews} reviews)</span>
    </div>
  );

  const handleImageSelect = (index: number) => {
    setSelectedImageIndex(index);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
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
        <span className="text-primary">Short Sleeve T-Shirts</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images */}
        <div className="w-full">
          <CardContent className="p-4 flex justify-center items-start gap-6 h-[600px]">
            <div className="h-full flex flex-col gap-2">
              {product?.images?.map((image: string, index: number) => (
                <button 
                  key={index} 
                  className={`relative w-[100px] h-[100px] rounded-md overflow-hidden border-2 transition-all ${selectedImageIndex === index ? "border-primary" : "border-transparent"
                    }`}
                >
                  <Image
                    onClick={() => handleImageSelect(index)}
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>

            <div
              className="relative w-full h-full rounded-lg overflow-hidden"
              ref={imageRef}
              onMouseDown={(e) => {
                setIsDragging(true);
                setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
              }}
              onMouseMove={(e) => {
                if (!isDragging) return;
                setPosition({ x: position.x, y: e.clientY - startPos.y });
              }}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onDoubleClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                setPosition({ x: (0.5 - x) * 100, y: (0.5 - y) * 100 });
                setScale((prev) => (prev === 1 ? 2 : 1));
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                  transformOrigin: "center center",
                  transition: isDragging ? "none" : "transform 0.2s ease-in-out"
                }}
              >
                <Image
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  fill
                  className="object-contain cursor-move"
                  priority
                />
              </div>
            </div>
          </CardContent>
        </div>

        {/* Details */}
        <div>
          <CardHeader>
            {/* <CardTitle className="text-md text-muted-foreground">{product.productCode}</CardTitle> */}
            <CardTitle className="text-3xl">{product.name}</CardTitle>
            <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">Style:</span>
                  <span className="px-2 py-1 bg-gray-200 text-black rounded-md text-sm font-medium">{product.productCode}</span>
                </div>
            {renderStars(product.rating)}
          </CardHeader>


          <CardContent>
            <p className="text-muted-foreground mt-4 mb-6">
              {product.description.split(' ').slice(0, 20).join(' ') + (product.description.split(' ').length > 20 ? '...' : '')}
            </p>

            {/* Price shown immediately below description */}
            <div className="text-xl font-bold text-primary mb-6">
              Price: ${product.price}
            </div>
            <div className="space-y-6">
              {/* Colors */}
              <div className="space-y-2">
                <div className="text-lg text-muted-foreground mb-2">
                  Color Selected: <span className="font-medium" style={{ color: selectedColor.toLowerCase() === "#ffffff" ? "#000000" : selectedColor }}>
                    {product.colors.find((c) => c.hex === selectedColor)?.name}
                  </span>
                </div>
                {/* Sizes */}
                <div className="text-lg text-muted-foreground mb-5">
                  Sizes: <span className="font-medium">{product.sizes.join(', ')}</span>
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.hex}
                      onClick={() => setSelectedColor(color.hex)}
                      className={`w-10 h-10 border-2 transition-all relative flex items-center justify-center ${selectedColor === color.hex ? "border-primary ring-2 ring-offset-2 ring-primary/30" : color.hex.toLowerCase() === "#ffffff" ? "border-gray-200" : "border-transparent"
                        }`}
                      style={{ backgroundColor: color.hex }}
                      aria-label={`Select color ${color.name}`}
                    >
                      {selectedColor === color.hex && (
                        <svg className={`w-5 h-5 ${color.hex.toLowerCase() === "#ffffff" ? "text-black" : "text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="relative bg-gradient-to-r from-[#003C64] to-[#0072BA] text-white px-6 py-6 text-lg font-bold transition-all duration-200 active:scale-98 border-2 border-white/20 hover:border-white/40 shadow-md rounded-lg">
                <span className="relative z-10">Start Designing</span>
                <span className="absolute inset-0 rounded-lg bg-white/0 hover:bg-white/5 transition-all duration-300"></span>
              </Button>

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
                    <h4 className="font-medium">Rush Delivery</h4>
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
          </CardContent>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
