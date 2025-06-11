'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ShowAllProductsSection = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Custom Cotton T-Shirt",
      price: "$19.99",
      originalPrice: "$24.99",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Premium Hoodie",
      price: "$39.99",
      originalPrice: "$49.99",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "New"
    },
    {
      id: 3,
      name: "Baseball Cap",
      price: "$15.99",
      originalPrice: "$19.99",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Sale"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Explore Best Sellers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The most loved products by our customers. Quality tested and customer approved.
            </p>
          </div>
          
          <Button size="lg" className="text-lg px-8 py-6">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group cursor-pointer transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={256}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowAllProductsSection;