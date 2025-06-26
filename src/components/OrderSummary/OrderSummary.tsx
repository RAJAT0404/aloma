"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const orderData = {
  product: {
    name: "Compact Cotton T-shirt",
    color: "Black",
    size: "L",
    quantity: 5,
    pricePerItem: 42.92,
    imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27", // Replace with actual path if needed
  },
  delivery: {
    dateRange: "Jul 10 - Jul 15",
    cost: 0,
  },
  subtotal: 214.6,
  tax: null,
  total: 214.6,
};

export default function OrderSummary() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8">
      <Card className="w-full max-w-md rounded-xl border border-blue-200 shadow-md hover:shadow-blue-100 transition-all bg-white py-5">
        <CardHeader className="border-b pb-4">
          <CardTitle className="text-xl font-semibold text-blue-800">
            Order Summary
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5 text-sm text-gray-700">
          {/* Product Info */}
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start pt-1">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 w-28 h-32 sm:w-32 sm:h-36 shrink-0">
              <Image
                src={orderData.product.imageUrl}
                alt="Product Image"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-semibold text-blue-900">
                {orderData.product.name}
              </p>
              <p className="text-xs text-gray-500">
                {orderData.product.color} · Size {orderData.product.size}
              </p>
              <p className="text-sm text-gray-700">
                {orderData.product.quantity} × $
                {orderData.product.pricePerItem.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Pricing Info */}
          <div className="border-t pt-3 space-y-3">
            <div className="flex justify-between">
              <span>
                Subtotal ({orderData.product.quantity} items)
              </span>
              <span className="font-medium text-blue-900">
                ${orderData.subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Free Delivery - {orderData.delivery.dateRange}
                <button className="ml-1 text-blue-600 text-xs underline hover:text-blue-800 transition">
                  (edit)
                </button>
              </span>
              <span className="text-green-600 font-semibold">FREE</span>
            </div>

            <div className="flex justify-between">
              <span>Tax (Calculated at checkout)</span>
              <span className="text-gray-500">--</span>
            </div>
          </div>

          {/* Total */}
          <div className="border-t pt-3 flex justify-between items-center text-base font-bold text-blue-900">
            <span>Total</span>
            <span>${orderData.total.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>

      {/* Button */}
      <Button
        variant="blue"
        className="w-full max-w-md mt-4 text-base py-3"
      >
        PAY NOW
      </Button>
    </div>
  );
}
