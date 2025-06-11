
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BrandsSection = () => {
  const brands = [
    {
      name: "Nike",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo.png"
    },
    {
      name: "Carhartt",
      logo: "https://1000logos.net/wp-content/uploads/2020/09/Carhartt-Logo.png"
    },
    {
      name: "Under Armour",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Under-Armour-Logo.png"
    },
    {
      name: "Champion",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Champion-Logo.png"
    },
    {
      name: "Stanley",
      logo: "https://1000logos.net/wp-content/uploads/2020/09/Stanley-Logo.png"
    },
    {
      name: "Travis Mathew",
      logo: "https://cdn.freebiesupply.com/logos/large/2x/travis-mathew-logo-png-transparent.png"
    },
    {
      name: "Adidas",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png"
    },
    {
      name: "New Era",
      logo: "https://1000logos.net/wp-content/uploads/2017/05/New-Era-Logo.png"
    },
    {
      name: "OGIO",
      logo: "https://logos-world.net/wp-content/uploads/2020/12/OGIO-Logo.png"
    },
    {
      name: "Richardson",
      logo: "https://www.richardsonsports.com/wp-content/uploads/2019/07/richardson-logo-red.png"
    }
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
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Shop All Brands
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;