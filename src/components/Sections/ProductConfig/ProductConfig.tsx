'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, ChevronRight } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from 'next/link'

const ProductConfig = () => {
    const [quantities, setQuantities] = useState<Record<string, number>>({
        XS: 0,
        S: 0,
        M: 0,
        L: 0,
        XL: 0
    })

    const sizes = ['XS', 'S', 'M', 'L', 'XL']
    const productName = "Premium Cotton T-Shirt"
    const color = "Black"
    const price = 24.99
    const minimumOrder = 12

    const totalQuantity = Object.values(quantities).reduce((sum, qty) => sum + qty, 0)
    const subtotal = (totalQuantity * price).toFixed(2)
    const meetsMinimum = totalQuantity >= minimumOrder

    const handleQuantityChange = (size: string, value: number) => {
        setQuantities(prev => ({
            ...prev,
            [size]: Math.max(0, prev[size] + value)
        }))
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="container mx-auto flex items-center text-sm text-[#0072BA] py-2 pb-6">
          <Link href="/" className="relative hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link href="/cart" className="relative hover:text-primary after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            Cart
          </Link>
        
        </div>
            <div className="flex flex-col gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Customize Your Order</h2>
                <p className="text-gray-600">Select quantities for each available size</p>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary">${price}</span>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="text-sm">
                                View Size Chart
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                            <DialogHeader>
                                <DialogTitle>Size Chart</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="font-semibold">Size</div>
                                    <div className="font-semibold">Measurements (inches)</div>
                                    <div>XS</div><div>32-34</div>
                                    <div>S</div><div>35-37</div>
                                    <div>M</div><div>38-40</div>
                                    <div>L</div><div>41-43</div>
                                    <div>XL</div><div>44-46</div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                {!meetsMinimum && totalQuantity > 0 && (
                    <Alert variant="destructive" className="animate-pulse bg-red-50">
                        <AlertCircle className="h-5 w-5" />
                        <AlertTitle>Minimum Order Required</AlertTitle>
                        <AlertDescription className="flex items-center gap-2">
                            <span className="font-bold">{totalQuantity}</span>
                            <span>/</span>
                            <span className="font-bold">{minimumOrder}</span>
                            <span>units</span>
                            <span className="ml-2">Please add {minimumOrder - totalQuantity} more items</span>
                        </AlertDescription>
                    </Alert>
                )}
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-1/2">
                    <Card className="p-0 h-full rounded-xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-0 relative group h-full">
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-md z-10 flex items-center gap-2 border border-gray-200">
                                <span className="font-medium">Total Items:</span>
                                <span className="font-bold text-primary">{totalQuantity}</span>
                            </div>
                            <div className="relative w-full h-full min-h-[300px]  flex items-center justify-center p-1">
                                <div className="relative w-full h-full max-w-md mx-auto">
                                    <Image
                                        src="/my-designs/front.jpg"
                                        alt="Product"
                                        fill
                                        className="object-contain transition-transform duration-300 group-hover:scale-101"
                                        priority
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="w-full lg:w-1/2">
                    <Card className="border border-gray-100 shadow-lg rounded-xl h-full hover:shadow-xl transition-shadow duration-300">
                        <CardHeader className="pb-0 px-6 pt-6">
                            <div className="space-y-3">
                                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{productName}</h1>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-600">Color:</span>
                                    <span className="font-medium px-3 py-1 bg-gray-100 rounded-md border border-gray-200">{color}</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4 px-6 pt-4 pb-6">
                            {sizes.map((size) => (
                                <div key={size} className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <Label className="font-semibold text-gray-800">{size}</Label>
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-8 h-8 rounded-full border-gray-300 hover:bg-gray-50 transition-colors"
                                                onClick={() => handleQuantityChange(size, -1)}
                                                disabled={quantities[size] <= 0}
                                            >
                                                -
                                            </Button>
                                            <Input
                                                type="number"
                                                min="0"
                                                value={quantities[size]}
                                                onChange={(e) =>
                                                    setQuantities(prev => ({
                                                        ...prev,
                                                        [size]: Math.max(0, parseInt(e.target.value) || 0)
                                                    }))
                                                }
                                                className="w-14 text-center font-medium border-gray-300 focus-visible:ring-primary focus:border-primary transition-colors"
                                            />
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-8 h-8 rounded-full border-gray-300 hover:bg-gray-50 transition-colors"
                                                onClick={() => handleQuantityChange(size, 1)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </div>
                                    <Separator className="bg-gray-200" />
                                </div>
                            ))}

                            <div className="pt-6 space-y-4">
                                <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                                    <span className="text-gray-600 font-semibold">Subtotal:</span>
                                    <span className="font-bold text-gray-900 text-xl">${subtotal}</span>
                                </div>
                                <Button
                                    className="w-full py-4 font-bold transition-all hover:scale-[1.02] shadow-md hover:shadow-lg active:scale-100"
                                    size="lg"
                                    variant='blue'
                                    disabled={totalQuantity === 0 || !meetsMinimum}
                                >
                                    {meetsMinimum ? `Add to Cart (${totalQuantity})` : `Minimum ${minimumOrder} units required`}
                                </Button>
                                <div className="text-center text-xs text-gray-500">
                                    Free shipping on orders over $50
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ProductConfig