"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CreditCard,
  Landmark,
  FileText,
  CircleDollarSign,
  ShoppingBag,
} from "lucide-react";

import { FaPaypal } from "react-icons/fa";
import { SiKlarna } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const CheckoutForm = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");

  const paymentMethods = [
    { id: "card", name: "Card", icon: <CreditCard className="w-5 h-5 text-blue-600" /> },
    { id: "paypal", name: "PayPal", icon: <FaPaypal className="w-5 h-5 text-blue-500" /> },
    { id: "google-pay", name: "Google Pay", icon: <FaGooglePay className="w-5 h-5 text-green-600" /> },
    { id: "afterpay", name: "Afterpay", icon: <CircleDollarSign className="w-5 h-5 text-purple-600" /> },
    { id: "klarna", name: "Klarna", icon: <SiKlarna  className="w-5 h-5 text-pink-500" /> },
    { id: "bank", name: "Bank", icon: <Landmark className="w-5 h-5 text-indigo-600" /> },
    { id: "affirm", name: "Affirm", icon: <ShoppingBag className="w-5 h-5 text-sky-600" /> },
    { id: "zip", name: "Zip", icon: <CircleDollarSign className="w-5 h-5 text-yellow-600" /> },
    { id: "purchase-order", name: "Purchase Order", icon: <FileText className="w-5 h-5 text-gray-600" /> },
  ];
  

  return (
    <div className="max-w-[891px] w-full py-8 space-y-6 min-h-screen">
      {/* Contact Info */}
      <Card className="py-6 bg-white shadow-md rounded-xl border border-blue-100">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-800">
            Contact Info
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 w-full">
              <Label>First Name</Label>
              <Input
                placeholder="John"
                className="w-full bg-blue-50 border-blue-200"
              />
            </div>
            <div className="space-y-2 w-full">
              <Label>Last Name</Label>
              <Input
                placeholder="Doe"
                className="w-full bg-blue-50 border-blue-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 w-full">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="example@domain.com"
                className="w-full bg-blue-50 border-blue-200"
              />
            </div>
            <div className="space-y-2 w-full">
              <Label>Phone</Label>
              <Input
                type="tel"
                placeholder="+1 123-456-7890"
                className="w-full bg-blue-50 border-blue-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 w-full">
              <Label>How did you hear about us?</Label>
              <Select>
                <SelectTrigger className="w-full bg-blue-50 border-blue-200 focus:ring-blue-300">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="social">Social Media</SelectItem>
                  <SelectItem value="search">Search Engine</SelectItem>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="ad">Advertisement</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 w-full">
              <Label>Why did you choose our brand?</Label>
              <Select>
                <SelectTrigger className="w-full bg-blue-50 border-blue-200 focus:ring-blue-300">
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="quality">Quality</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="recommendation">
                    Recommendation
                  </SelectItem>
                  <SelectItem value="brand">Brand Trust</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Info */}
      <Card className="py-6 bg-white shadow-md rounded-xl border border-blue-100">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-800">
            Shipping Info
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              className="w-full bg-blue-50 border-blue-200"
              placeholder="First Name"
            />
            <Input
              className="w-full bg-blue-50 border-blue-200"
              placeholder="Last Name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              className="w-full bg-blue-50 border-blue-200"
              placeholder="Company (optional)"
            />
            <Select>
              <SelectTrigger className="w-full bg-blue-50 border-blue-200 focus:ring-blue-300">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usa">USA</SelectItem>
                <SelectItem value="canada">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input
            className="w-full bg-blue-50 border-blue-200"
            placeholder="Address"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              className="w-full bg-blue-50 border-blue-200"
              placeholder="City"
            />
            <Select>
              <SelectTrigger className="w-full bg-blue-50 border-blue-200 focus:ring-blue-300">
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="ca">California</SelectItem>
              </SelectContent>
            </Select>
            <Input
              className="w-full bg-blue-50 border-blue-200"
              placeholder="Zip"
            />
          </div>
        </CardContent>
      </Card>

      {/* Payment Section */}
      <Card className="py-6 bg-white shadow-md rounded-xl border border-blue-100">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-gray-800">
            Payment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RadioGroup
            value={selectedPayment}
            onValueChange={setSelectedPayment}
            className="space-y-1"
          >
            {paymentMethods.map((method, index) => (
              <div key={method.id}>
                <div
                  className={`flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3 p-3 rounded-lg border transition-colors cursor-pointer ${
                    selectedPayment === method.id
                      ? "bg-blue-100 border-blue-400"
                      : "hover:bg-blue-50 border-blue-200"
                  }`}
                >
                  <RadioGroupItem value={method.id} id={method.id} />
                  <div className="flex items-center space-x-3 flex-1">
                    <span className="text-xl">{method.icon}</span>
                    <Label htmlFor={method.id} className="cursor-pointer flex-1">
                      {method.name}
                    </Label>
                    {method.id === "afterpay" && (
                      <span className="text-sm text-gray-500">
                        4 interest-free payments of $83.00
                      </span>
                    )}
                    {method.id === "zip" && (
                      <span className="text-sm text-gray-500">
                        4 interest-free payments of $83.00
                      </span>
                    )}
                    {method.id === "purchase-order" && (
                      <span className="text-sm text-gray-500">
                        Submit a P.O. - Only Pay Business, Gov&apos;t, Legal
                        Corporation
                      </span>
                    )}
                  </div>
                </div>

                {/* Card fields */}
                {method.id === "card" && selectedPayment === "card" && (
                  <div className="space-y-4 p-4 bg-blue-50 rounded-lg mt-2 border border-blue-200">
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="relative">
                        <Input
                          id="cardNumber"
                          placeholder="1234 1234 1234 1234"
                          className="w-full bg-white border-blue-200"
                        />
                        <div className="absolute right-3 top-3 flex space-x-1">
                          <FaCcVisa className=" text-blue-600" />
                          <FaCcMastercard />
                          <SiAmericanexpress />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        placeholder="MM / YY"
                        className="w-full bg-white border-blue-200"
                      />
                      <Input
                        placeholder="CVC"
                        className="w-full bg-white border-blue-200"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Select>
                        <SelectTrigger className="w-full bg-white border-blue-200">
                          <SelectValue placeholder="United States" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        placeholder="ZIP code"
                        className="w-full bg-white border-blue-200"
                      />
                    </div>
                  </div>
                )}
                {index < paymentMethods.length - 1 && (
                  <Separator className="my-2" />
                )}
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Pay Now Button */}
      <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 mt-6">
        <Button
          variant="blue"
          className="w-full sm:w-auto sm:min-w-[200px] py-3 text-lg rounded-md"
        >
          PAY NOW
        </Button>
      </div>
    </div>
  );
};

export default CheckoutForm;
