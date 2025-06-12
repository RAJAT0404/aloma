'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";

const BrandsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const brands = [
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
      }
  ];

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when we've scrolled through one set of brands
      if (scrollPosition >= scrollContainer.scrollWidth / 3) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    // Start the animation
    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-16 bg-background border-2 border-primary/20 rounded-3xl mx-4 lg:mx-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Trusted Brands
          </h2>
        </div>

        <div 
          ref={scrollRef}
          className="overflow-hidden whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <div className="inline-flex items-center space-x-16">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-16 w-32 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={128}
                  height={64}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSlider;