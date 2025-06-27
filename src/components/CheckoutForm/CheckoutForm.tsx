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

import { SiAfterpay } from "react-icons/si";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

const CheckoutForm = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");

  const paymentMethods = [
    { id: "card", name: "Card", icon: <CreditCard className="w-5 h-5" /> },
    { id: "paypal", name: "PayPal", icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48"><path fill="#1565C0" d="M18.7,13.767l0.005,0.002C18.809,13.326,19.187,13,19.66,13h13.472c0.017,0,0.034-0.007,0.051-0.006C32.896,8.215,28.887,6,25.35,6H11.878c-0.474,0-0.852,0.335-0.955,0.777l-0.005-0.002L5.029,33.813l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,0.991,1,0.991h8.071L18.7,13.767z"></path><path fill="#039BE5" d="M33.183,12.994c0.053,0.876-0.005,1.829-0.229,2.882c-1.281,5.995-5.912,9.115-11.635,9.115c0,0-3.47,0-4.313,0c-0.521,0-0.767,0.306-0.88,0.54l-1.74,8.049l-0.305,1.429h-0.006l-1.263,5.796l0.013,0.001c-0.014,0.064-0.039,0.125-0.039,0.194c0,0.553,0.447,1,1,1h7.333l0.013-0.01c0.472-0.007,0.847-0.344,0.945-0.788l0.018-0.015l1.812-8.416c0,0,0.126-0.803,0.97-0.803s4.178,0,4.178,0c5.723,0,10.401-3.106,11.683-9.102C42.18,16.106,37.358,13.019,33.183,12.994z"></path><path fill="#283593" d="M19.66,13c-0.474,0-0.852,0.326-0.955,0.769L18.7,13.767l-2.575,11.765c0.113-0.234,0.359-0.54,0.88-0.54c0.844,0,4.235,0,4.235,0c5.723,0,10.432-3.12,11.713-9.115c0.225-1.053,0.282-2.006,0.229-2.882C33.166,12.993,33.148,13,33.132,13H19.66z"></path></svg> },
    { id: "google-pay", name: "Google Pay", icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48"><path fill="#e64a19" d="M42.858,11.975c-4.546-2.624-10.359-1.065-12.985,3.481L23.25,26.927	c-1.916,3.312,0.551,4.47,3.301,6.119l6.372,3.678c2.158,1.245,4.914,0.506,6.158-1.649l6.807-11.789	C48.176,19.325,46.819,14.262,42.858,11.975z"></path><path fill="#fbc02d" d="M35.365,16.723l-6.372-3.678c-3.517-1.953-5.509-2.082-6.954,0.214l-9.398,16.275	c-2.624,4.543-1.062,10.353,3.481,12.971c3.961,2.287,9.024,0.93,11.311-3.031l9.578-16.59	C38.261,20.727,37.523,17.968,35.365,16.723z"></path><path fill="#43a047" d="M36.591,8.356l-4.476-2.585c-4.95-2.857-11.28-1.163-14.137,3.787L9.457,24.317	c-1.259,2.177-0.511,4.964,1.666,6.22l5.012,2.894c2.475,1.43,5.639,0.582,7.069-1.894l9.735-16.86	c2.017-3.492,6.481-4.689,9.974-2.672L36.591,8.356z"></path><path fill="#1e88e5" d="M19.189,13.781l-4.838-2.787c-2.158-1.242-4.914-0.506-6.158,1.646l-5.804,10.03	c-2.857,4.936-1.163,11.252,3.787,14.101l3.683,2.121l4.467,2.573l1.939,1.115c-3.442-2.304-4.535-6.92-2.43-10.555l1.503-2.596	l5.504-9.51C22.083,17.774,21.344,15.023,19.189,13.781z"></path></svg> },
    { id: "afterpay", name: "Afterpay", icon: <SiAfterpay className="w-5 h-5" /> },
    { id: "bank", name: "Bank", icon: <Landmark className="w-5 h-5 text-indigo-600" /> },
    { id: "affirm", name: "Affirm", icon: <ShoppingBag className="w-5 h-5 text-sky-600" /> },
    { id: "zip", name: "Zip", icon: <CircleDollarSign className="w-5 h-5 text-yellow-600" /> },
    { id: "purchase-order", name: "Purchase Order", icon: <FileText className="w-5 h-5 text-gray-600" /> },
  ];


  return (
    <div className="max-w-[1000px] w-full py-8 space-y-6 min-h-screen">
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
                  className={`flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-3 p-3 rounded-lg border transition-colors cursor-pointer ${selectedPayment === method.id
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
                        <div className="absolute right-3 top-1 flex space-x-1">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#1565C0" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"></path><path fill="#FFF" d="M15.186 19l-2.626 7.832c0 0-.667-3.313-.733-3.729-1.495-3.411-3.701-3.221-3.701-3.221L10.726 30v-.002h3.161L18.258 19H15.186zM17.689 30L20.56 30 22.296 19 19.389 19zM38.008 19h-3.021l-4.71 11h2.852l.588-1.571h3.596L37.619 30h2.613L38.008 19zM34.513 26.328l1.563-4.157.818 4.157H34.513zM26.369 22.206c0-.606.498-1.057 1.926-1.057.928 0 1.991.674 1.991.674l.466-2.309c0 0-1.358-.515-2.691-.515-3.019 0-4.576 1.444-4.576 3.272 0 3.306 3.979 2.853 3.979 4.551 0 .291-.231.964-1.888.964-1.662 0-2.759-.609-2.759-.609l-.495 2.216c0 0 1.063.606 3.117.606 2.059 0 4.915-1.54 4.915-3.752C30.354 23.586 26.369 23.394 26.369 22.206z"></path><path fill="#FFC107" d="M12.212,24.945l-0.966-4.748c0,0-0.437-1.029-1.573-1.029c-1.136,0-4.44,0-4.44,0S10.894,20.84,12.212,24.945z"></path>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 32">
                            <rect width="48" height="32" rx="4" fill="black"></rect>
                            <circle cx="19" cy="16" r="10" fill="#EB001B"></circle>
                            <circle cx="29" cy="16" r="10" fill="#F79E1B"></circle>
                            <path d="M24 6a10 10 0 0 0 0 20 10 10 0 0 0 0-20z" fill="#FF5F00"></path>
                          </svg>
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
