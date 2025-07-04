import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
import { ShoppingCart, X } from 'lucide-react'
import Image from 'next/image'
import front from '../../../../public/my-designs/front.jpg';
import back from '../../../../public/my-designs/back.jpg';
import front2 from '../../../../public/my-designs/front-red.jpg';
import back2 from '../../../../public/my-designs/back-red.jpg';
import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const cartItems = [
  {
    id: 1,
    name: "RushOrderTees RT185B | Black",
    price: 42.66,
    quantity: 5,
    images: [front, back],
    altText: "RushOrderTees RT185B"
  },
  {
    id: 2,
    name: "Premium Polo Shirt | Navy",
    price: 29.99,
    quantity: 3,
    images: [front2, back2],
    altText: "Premium Polo Shirt"
  }
]

const CartHoverCard = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="relative">
      <HoverCard openDelay={200} closeDelay={200}>
        <HoverCardTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative rounded-full"
          >
            <ShoppingCart className="h-5 w-5" />
            <Badge variant="default" className="absolute bg-[#0072BA] -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center">
              {cartItems.length}
            </Badge>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-[400px] p-0" align="end">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
              <CardTitle className="text-lg">Your Cart ({cartItems.length})</CardTitle>
              <Button variant="ghost" size="icon">
                {/* <X className="h-5 w-5" /> */}
              </Button>
            </CardHeader>
            
            <CardContent className="max-h-[400px] overflow-y-auto p-0">
              {cartItems.map((item) => (
                <div key={item.id} className="p-4 border-b hover:bg-accent transition-colors">
                  <div className="flex gap-4">
                    <div className="flex gap-2">
                      {item.images.map((img, index) => (
                        <div key={index} className="h-16 w-16 rounded-md overflow-hidden border relative">
                          <Image 
                            src={img}
                            alt={`${item.altText} - ${index === 0 ? 'Front' : 'Back'}`}
                            className="object-cover"
                            fill
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{item.name}</h4>
                        <Button variant="ghost" size="icon" className="h-4 w-4">
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">${item.price.toFixed(2)} × {item.quantity}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                        <Button variant="link" className="h-auto p-0 text-sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>

            <CardContent className="p-4">
              <div className="flex justify-between mb-4">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <Button variant='blue' className="w-full">
                Proceed to Checkout
              </Button>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                Free shipping on orders over $50
              </p>
            </CardContent>
          </Card>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

export default CartHoverCard