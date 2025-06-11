import { Card, CardContent } from "@/components/ui/card";

const CategoriesSection = () => {
  const categories = [
    {
      name: "T-Shirts",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "250+ Items"
    },
    {
      name: "Hoodies & Sweatshirts",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "180+ Items"
    },
    {
      name: "Hats & Caps",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "95+ Items"
    },
    {
      name: "Promotional Products",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      count: "120+ Items"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Shop Top Categories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular product categories and find exactly what you&apos;re looking for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-0 relative h-80">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6">
                  <h3 className="text-lg font-semibold mb-2 text-white">{category.name}</h3>
                  <p className="text-sm text-white/90">{category.count}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;