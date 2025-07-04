'use client'
import React from 'react'
import { Truck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import frontImage from '../../../../public/my-designs/front.jpg';
import backImage from '../../../../public/my-designs/back.jpg';

const productImages = [
  {
    src: frontImage,
    alt: "Black hoodie front view"
  },
  {
    src: backImage,
    alt: "Black hoodie back view"
  }
];

const deliveryOptions = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "As soon as",
    date: "Wed Jul 16"
  },
  {
    icon: Zap,
    title: "Rush Shipping",
    description: "Guaranteed by",
    date: "Thu Jul 03"
  }
];

const OrderingOptions = () => {
  return (
    <div className="bg-gray-50 py-4 sm:py-8 px-2 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-[896px] mx-auto">
          {/* Product Images */}
          <div className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {productImages.map(({src, alt}, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-2 sm:p-4">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image 
                        src={src} 
                        alt={alt}
                        width={400}
                        height={400}
                        className="object-contain"
                        priority
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">Design Name</p>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Summer Vibes</h1>
              <p className="text-xs sm:text-sm text-gray-500">
                Created On: <span className="font-medium">June 25, 2025</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Button variant="blue" className="text-xs sm:text-sm">
                Edit Design
              </Button>
              <Button variant="outline" className="text-[#003C64] border-[#003C64] text-xs sm:text-sm">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="mt-8 sm:mt-12 max-w-4xl mx-auto px-2 sm:px-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
            Delivery Options on Your Deadline
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {deliveryOptions.map(({icon: Icon, title, description, date}) => (
              <Card key={title} className="border-2 hover:border-blue-200 transition-colors">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="p-1 sm:p-2 bg-blue-100 rounded-lg flex items-center justify-center self-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#003C64] hover:text-[#0072BA] transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {description} <span className="font-medium">{date}</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderingOptions