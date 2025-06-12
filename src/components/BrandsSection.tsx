import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const BrandsSection = () => {
  const brands = [
    {
      name: "Nike",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png"
    },
    {
      name: "Adidas",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png"
    },
    {
      name: "Under Armour",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
    },
    {
      name: "Nike",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png"
    },
    {
      name: "Adidas",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png"
    },
    {
      name: "Under Armour",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
    },
    {
      name: "Nike",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png"
    },
    {
      name: "Adidas",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png"
    },
    {
      name: "Under Armour",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
    },
    {
      name: "Nike",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png"
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Brands You Love</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from popular brands like Nike, Carhartt, Under Armour and much more
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {brands.map((brand, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 bg-background border-border"
            >
              <CardContent className="p-8 flex items-center justify-center h-32">
                <Image
                  src={brand?.logo}
                  alt={brand.name}
                  width={120}
                  height={80}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant='blue'
          >
            Shop All Brands
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;