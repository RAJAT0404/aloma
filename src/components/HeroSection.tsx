'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Hero from "../../public/Banner.png"

const HeroSection = () => {
  return (
    // <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-10 lg:py-12">
    <section className="relative overflow-hidden" style={{background: 'linear-gradient(180deg, #F0F9FF 0%, #C7E3F7 100%)'}}>
      <div className="container mx-auto px-4 py-10 lg:py-12 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Custom T-Shirts &
                <span className="text-primary"> Apparel</span> on Any Deadline
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Create custom apparel with premium quality materials. Fast turnaround, 
                professional results, unbeatable prices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant='blue' className="text-lg px-8 py-6 transition-all
                duration-500  active:scale-98 border-1 border-white/20">
                Start Designing
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/catalog">
                  Browse All Products
                </Link>
              </Button>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative
            
            ">
              <Image
                src={Hero}
                
                alt="Custom Apparel Lifestyle"
                width={1000}
                height={500}
                className="w-full h-[500px] object-contain"
                priority
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-xs text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;