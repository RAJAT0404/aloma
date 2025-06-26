"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AffirmIcon from "../../../public/paymenticons/logo-affirm.webp";
import SezzleIcon from "../../../public/paymenticons/logo-sezzle.webp";
import AfterpayIcon from "../../../public/paymenticons/logo-afterpay-2.webp";
import KlarnaIcon from "../../../public/paymenticons/logo-klarna.webp";
import Image from "next/image";
import Link from "next/link";




const ProductDetailsPanel = () => {
    const [quantity, setQuantity] = useState([50]);
    const [emailQuote, setEmailQuote] = useState(false);
    const [frontColor, setFrontColor] = useState("1 Color");
    const [backColor, setBackColor] = useState("0 Colors");
    const [decoration, setDecoration] = useState("Printing");

    const basePrice = 29.27;
    const baseDiscountedPrice = 10.83;

    // Calculate price adjustments based on selections
    const priceAdjustments = useMemo(() => {
        let adjustment = 0;

        // Front color adjustments
        const frontColorCount = parseInt(frontColor.split(' ')[0]);
        adjustment += frontColorCount * 2.5; // $2.5 per color

        // Back color adjustments
        const backColorCount = parseInt(backColor.split(' ')[0]);
        adjustment += backColorCount * 2.5; // $2.5 per color

        // Decoration method adjustments
        if (decoration === "Embroidery") {
            adjustment += 5;
        } else if (decoration === "Heat Press") {
            adjustment += 3;
        }

        return adjustment;
    }, [frontColor, backColor, decoration]);

    const adjustedPrice = baseDiscountedPrice + priceAdjustments;
    const totalPrice = adjustedPrice * quantity[0];

    return (
        <div className="bg-[#f4f8fc] py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Product Description */}
                <div className="lg:col-span-1 space-y-6 pt-5">
                    <h3 className="text-xl font-semibold">Product Description</h3>
                    <p className="text-[16px] text-muted-foreground">
                        The Gildan Heavy Cotton T-Shirt is a durable, high-quality essential made from 100% preshrunk USA cotton, ensuring a comfortable fit that holds up through repeated wear and washing. With its midweight feel and smooth surface, this tee is perfect for screen printing, HD printing, and other customizations, making it ideal for events, branding, or everyday use. Reinforced with double-needle stitching for added durability and designed with a classic fit for all-day comfort, it&apos;s available in a wide range of colors and sizes. Need youth sizes? Check out the G5000B for the same premium quality in a kid-friendly fit.
                    </p>

                    <div>
                        <h4 className="font-medium text-xl mb-3 ">Available Sizes</h4>
                        <ul className="space-y-2 text-[15px] leading-6">
                            <li>
                                <strong>Adult:</strong> S - 5XL{" "}
                                <Button variant="link" className="text-sm font-semibold text-blue-600 p-0 h-auto">
                                    Sizing Details
                                </Button>
                            </li>
                            <li>
                                <strong>Youth:</strong> YXS - YXL{" "}
                                <Button variant="link" className="text-sm font-semibold text-blue-600 p-0 h-auto">
                                    Sizing Details
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Product Details */}
                <div className="lg:col-span-1 space-y-6 pt-5">
                    <h3 className="text-xl font-semibold mb-4">Product Details</h3>
                    <ul className="list-disc list-inside text-[16px] leading-[20px] space-y-2.5 text-black pl-2 [&>li::marker]:text-black font-regular">
                        <li className="py-1">3.5 oz.</li>
                        <li className="py-1">100% polyester interlock</li>
                        <li className="py-1">Moisture-wicking and UV protection performance</li>
                        <li className="py-1">Dyed-to-match buttons</li>
                        <li className="py-1">Team fit</li>
                        <li className="py-1">Three-button placket</li>
                        <li className="py-1">Cationic dyes for superior brightness and excellent </li>
                    </ul>
                </div>

                {/* Pricing Calculator */}
                <div className="lg:col-span-1 pt-5 space-y-6">
                    <Card className="rounded-md pt-6 pb-3">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Pricing Calculator</CardTitle>
                        </CardHeader>
                        <Separator />
                        <CardContent className="space-y-6 space-x-3.5">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Quantity</span>
                                    <span className="text-xs text-muted-foreground">(No Min)</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="text-xl font-semibold">{quantity[0]}</span>
                                    <span className="text-sm text-muted-foreground">items</span>
                                    <Slider value={quantity} onValueChange={setQuantity} max={1000} min={1} step={1} className="flex-1" />
                                </div>
                            </div>

                            {/* Dropdowns */}
                            <div className="text-sm flex flex-wrap sm:flex-row justify-between flex-col gap-2">
                                <div className="flex-1 min-w-[30%]">
                                    <label className="block mb-1 text-[12px]">Front Colors</label>
                                    <select
                                        value={frontColor}
                                        onChange={(e) => setFrontColor(e.target.value)}
                                        className="w-full border text-[12px] rounded px-2 py-1 bg-white hover:bg-blue-50 focus:bg-blue-50 focus:ring-2 focus:ring-blue-200 transition-colors"
                                    >
                                        <option>1 Color</option>
                                        <option>2 Colors</option>
                                        <option>3 Colors</option>
                                    </select>
                                </div>
                                <div className="flex-1 min-w-[30%]">
                                    <label className="block mb-1 text-[12px]">Back Colors</label>
                                    <select
                                        value={backColor}
                                        onChange={(e) => setBackColor(e.target.value)}
                                        className="w-full text-[12px] border rounded px-2 py-1 bg-white hover:bg-blue-50 focus:bg-blue-50 focus:ring-2 focus:ring-blue-200 transition-colors"
                                    >
                                        <option>0 Colors</option>
                                        <option>1 Color</option>
                                        <option>2 Colors</option>
                                    </select>
                                </div>
                                <div className="flex-1 min-w-[30%]">
                                    <label className="block mb-1 md:text-nowrap text-wrap text-[12px]">Decoration Method</label>
                                    <select
                                        value={decoration}
                                        onChange={(e) => setDecoration(e.target.value)}
                                        className="w-full text-[12px] border border-blue-200 rounded px-2 py-1 bg-white hover:bg-blue-50 focus:bg-blue-50 focus:ring-2 focus:ring-blue-200 transition-colors"
                                    >
                                        <option>Printing</option>
                                        <option>Embroidery</option>
                                        <option>Heat Press</option>
                                    </select>
                                </div>
                            </div>

                            <Separator />

                            <div className="text-sm space-y-3">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col gap-1.5">
                                        <p className="text-muted-foreground">Price Per Unit:</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl font-bold ">${adjustedPrice.toFixed(2)}</span>
                                            <span className="line-through text-muted-foreground">${basePrice.toFixed(2)}</span>
                                        </div>
                                        <Badge className="bg-green-100 text-green-800 text-xs">
                                            {Math.round(100 - (adjustedPrice / basePrice * 100))}% bulk discount
                                        </Badge>
                                    </div>
                                    <div className="">
                                        <p className="text-black sm:text-base mb-2 font-medium">Your price includes:</p>
                                        <ul className="text-xs text-muted-foreground space-y-2">
                                            <li><span className="text-green-500">✓</span> Free shipping</li>
                                            <li><span className="text-green-500">✓</span> 100% satisfaction guarantee</li>
                                            <li><span className="text-green-500">✓</span> Fast turnaround</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="font-medium mb-1.5">Total Price:</p>
                                        <div className="flex flex-col justify-between ">
                                            <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
                                            <span className="text-xs text-muted-foreground">for {quantity[0]} items</span>
                                        </div>
                                    </div>
                                    <Link href="/cart">
                                        <Button
                                            className="relative text-[#003C64] px-4 py-2.25 text-[14px] leading-[18px] font-medium bg-white
                                   transition-all duration-300 ease-in-out active:scale-98 
                                        border border-[#003C64]  rounded-[8px] hover:border-[#003C64] hover:bg-[#003C64] hover:text-white my-2"
                                            aria-label="Go to Design Lab"
                                        >
                                            <span className="relative z-10">Add to Cart</span>
                                            <span className="absolute inset-0 rounded-[12px] bg-transparent hover:bg-[#003C64]/5 transition-all duration-300 ease-in-out"></span>
                                        </Button>
                                    </Link>
                                </div>


                                <Separator className="w-full" />

                                <div className="flex items-center gap-2">
                                    <Checkbox id="email-quote" checked={emailQuote} />
                                    <label htmlFor="email-quote" className="text-sm text-muted-foreground">
                                        Email me this quote
                                    </label>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Flexible Payment Options - moved outside card */}
                    <div className="border-none rounded-lg space-y-3">
                        <h4 className="text-md font-medium text-center">Flexible Payment Options</h4>
                        <p className="text-sm text-muted-foreground text-center">
                            Split your purchase into easy monthly payments with our trusted partners
                        </p>
                        <div className="flex justify-center items-center gap-4 mt-2 flex-wrap">
                            <Image src={AffirmIcon} alt="Affirm" width={80} height={56} className="object-contain" />
                            <Image src={SezzleIcon} alt="Sezzle" width={80} height={56} className="object-contain" />
                            <Image src={AfterpayIcon} alt="Afterpay" width={80} height={56} className="object-contain" />
                            <Image src={KlarnaIcon} alt="Klarna" width={80} height={56} className="object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPanel;
