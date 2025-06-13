import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shirt, HardHat, Watch, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Cup from "../../public/cup.jpg"
import Hoodie from "../../public/hoodie.png"
import Tshirt from "../../public/tshirt.png"


const categories = [
  {
    id: 1,
    name: "T-Shirts",
    icon: Shirt,
    count: "120+ items",
    image: Tshirt
  },
  {
    id: 2,
    name: "Hoodies",
    icon: HardHat,
    count: "85+ items",
    image: Hoodie
  },
  {
    id: 3,
    name: "Accessories",
    icon: Watch,
    count: "200+ items",
    image: Cup
  },
  {
    id: 4,
    name: "Caps",
    icon: Briefcase,
    count: "60+ items",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export default function CategoriesSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated categories to find exactly what you&apos;re looking for
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <Icon className="h-8 w-8 mb-2" />
                      <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="blue" size="lg">
            <Link href="/category">View All Categories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};