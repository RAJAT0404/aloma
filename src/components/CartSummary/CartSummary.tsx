'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Plus, Edit3,Heart,PlusCircle ,ChevronRight, FileText,Pencil,Trash2, Minus } from "lucide-react";
import Image from "next/image";
import AffirmIcon from "../../../public/paymenticons/logo-affirm.webp";
import SezzleIcon from "../../../public/paymenticons/logo-sezzle.webp";
import AfterpayIcon from "../../../public/paymenticons/logo-afterpay-2.webp";
import KlarnaIcon from "../../../public/paymenticons/logo-klarna.webp";

const CartSummary = () => {
  const [selectedDelivery, setSelectedDelivery] = useState("free");
  const [quantity, setQuantity] = useState(5);
  
  const cartItem = {
    id: 1,
    name: "Compact Cotton t shirt",
    color: "Black",
    size: "L-5",
    priceEach: 42.92,
    image: "/lovable-uploads/fdd8745e-0605-4f6e-a1e5-4ef7b245f061.png",
    quantity:'5'
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const deliveryOptions = [
    {
      id: "free",
      label: "Free Delivery Jul 10 - Jul 15",
      sublabel: "9 - 12 Business Days",
      price: 0,
      selected: true
    },
    {
      id: "june27",
      label: "June 27, Fri",
      sublabel: "Guaranteed 1 Business Days",
      price: 18.02
    },
    {
      id: "june30",
      label: "June 30, Mon", 
      sublabel: "Guaranteed 2 Business Days",
      price: 16.73
    },
    {
      id: "july1",
      label: "July 1, Tue",
      sublabel: "Guaranteed 3 Business Days", 
      price: 15.02
    },
    {
      id: "july2",
      label: "July 2, Wed",
      sublabel: "Guaranteed 4 Business Days",
      price: 14.16
    }
  ];

  const selectedDeliveryOption = deliveryOptions.find(option => option.id === selectedDelivery);
  const deliveryPrice = selectedDeliveryOption?.price || 0;
  const subtotal = quantity * cartItem.priceEach;
  const total = subtotal + deliveryPrice;

  return (
    <div className="min-h-screen bg-gray-50">
   
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-left py-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Design Header */}
            <div className="flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200 gap-3 sm:gap-0">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  className="text-blue-600 hover:text-blue-700 border-blue-200 hover:bg-blue-50 w-full sm:w-auto"
                >
                  <Pencil className="w-4 h-4 mr-2" />
                  Edit Design
                </Button>
                <Button 
                  variant="outline" 
                  className="text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50 w-full sm:w-auto"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Remove Design
                </Button>
              </div>
              <Button variant="ghost" className="text-gray-500 hover:text-gray-700 w-full sm:w-auto">
                <Heart className="w-4 h-4 mr-2" />
                Save for Later
              </Button>
            </div>

            {/* Cart Item */}
            <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <div className="flex-shrink-0 relative self-center sm:self-start">
                    <Image
                      src="https://images.unsplash.com/photo-1576566588028-4147f3842f27"
                      alt={cartItem.name}
                      width={128}
                      height={144}
                      className="object-cover rounded-lg border border-gray-200 w-24 h-auto sm:w-32 sm:h-36"
                    />
                    <div className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-sm border border-gray-200">
                      <span className="text-xs font-medium bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center">
                        {quantity}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                      <div>
                        <h3 className="font-semibold text-base sm:text-lg">{cartItem.name}</h3>
                        <p className="text-gray-600 text-xs sm:text-sm">{cartItem.color}</p>
                      </div>
                      <span className="font-bold text-base sm:text-lg">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
                      <span className="px-2 py-1 bg-gray-100 rounded-md">{cartItem.size}</span>
                      <span className="text-gray-500 hidden sm:block">|</span>
                      <span className="text-gray-600">
                        ${cartItem.priceEach.toFixed(2)} each
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-4 pt-1 sm:pt-2">
                      <div className="flex items-center border border-gray-200 rounded-md">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-gray-600 hover:bg-gray-100 h-8 w-8 p-0"
                          onClick={handleDecrease}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="px-2 text-sm">{quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-gray-600 hover:bg-gray-100 h-8 w-8 p-0"
                          onClick={handleIncrease}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-blue-600 border-blue-200 hover:bg-blue-50 text-xs sm:text-sm"
                      >
                        <Pencil className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Edit Size
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-blue-600 border-blue-200 hover:bg-blue-50 text-xs sm:text-sm"
                      >
                        <PlusCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Add Color
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Add Another Product */}
            <Card className="border-dashed border-2 border-gray-300 hover:border-blue-400 transition-colors">
              <CardContent className="p-6">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  <span className="font-medium">Add Another Product</span>
                </Button>
              </CardContent>
            </Card>

            {/* Additional Options */}
            <div className="space-y-4">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Edit3 className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-blue-600 hover:text-blue-700 transition-colors">
                        Add Another Design to Cart
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Add more designs to your order (max 5 per order)
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-blue-600 hover:text-blue-700 transition-colors">
                        Add Order Notes
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Special instructions, gift messages, etc.
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 ml-auto text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="space-y-6">
            {/* Delivery Options */}
            <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden gap-0">
              <CardHeader className="border-b border-gray-200 bg-gray-50 px-6 py-4">
                <CardTitle className="text-lg font-bold text-gray-800">Delivery Options</CardTitle>
              </CardHeader>
              <CardContent className="p-0 gap-0">
                <RadioGroup value={selectedDelivery} onValueChange={setSelectedDelivery} className="space-y-1 gap-0">
                  {deliveryOptions.map((option) => (
                    <div 
                      key={option.id} 
                      className={`flex items-center px-6 py-4 transition-all gap-6 ${
                        selectedDelivery === option.id 
                          ? "bg-blue-50 border-l-4 border-blue-500" 
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <RadioGroupItem 
                        value={option.id} 
                        id={option.id} 
                        className="h-5 w-5 text-blue-600 border-2 border-gray-300"
                      />
                      <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-start gap-8">
                          <div className="space-y-1">
                            <p className="font-semibold text-gray-900">{option.label}</p>
                            <p className="text-sm text-gray-500">{option.sublabel}</p>
                          </div>
                          {option.price > 0 ? (
                            <span className="font-medium text-gray-900 bg-blue-100 px-2 py-1 rounded-md text-sm whitespace-nowrap">
                              +${option.price.toFixed(2)}
                            </span>
                          ) : (
                            <span className="font-medium text-green-600 bg-green-100 px-2 py-1 rounded-md text-sm whitespace-nowrap">
                              FREE
                            </span>
                          )}
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                
                <div className="px-6 py-4 border-t border-gray-200">
                  <Button 
                    variant="ghost" 
                    className="text-blue-600 hover:text-blue-700 p-0 text-sm font-medium flex items-center gap-1"
                  >
                    Show More Delivery Options
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="border border-gray-200 rounded-lg shadow-sm gap-0">
              <CardHeader className="border-b border-gray-200 px-6 py-4 gap-0">
                <CardTitle className="text-xl font-bold text-gray-900">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal ({cartItem.quantity} items)</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-gray-700">
                  <span>Delivery</span>
                  <span className={deliveryPrice === 0 ? "text-green-600 font-medium" : "font-medium"}>
                    {deliveryPrice === 0 ? "FREE" : `+$${deliveryPrice.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between text-gray-500">
                  <span>Tax (Calculated at checkout)</span>
                  <span>—</span>
                </div>
                
                <Separator className="my-2" />
                
                <div className="flex justify-between text-lg font-bold text-gray-900 py-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                
                <div className="bg-blue-50 rounded-md p-3 text-center">
                  <p className="text-sm text-gray-700">
                    or 4 interest-free payments of <span className="font-semibold">${(total / 4).toFixed(2)}</span> with
                  </p>
                  <div className="flex justify-center items-center gap-3 mt-2">
                  <div className="flex justify-center items-center gap-4 mt-2 flex-wrap">
                            <Image src={SezzleIcon} alt="Sezzle" width={60} height={46} className="object-contain" />
                            <Image src={AffirmIcon} alt="Affirm" width={60} height={46} className="object-contain" />
                            <Image src={AfterpayIcon} alt="Afterpay" width={60} height={46} className="object-contain" />
                            <Image src={KlarnaIcon} alt="Klarna" width={60} height={46} className="object-contain" />
                        </div>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center gap-1 border border-gray-200 py-2"
                >
                  <PlusCircle className="w-4 h-4" />
                  Add Voucher or Promo Code
                </Button>
                
                <div className="space-y-3 pt-2">
                  <Button variant='blue' className="w-full">
                   CHECKOUT
                  </Button>
                
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;