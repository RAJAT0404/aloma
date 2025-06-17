'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import armour from "../../public/Brands/Under-Armour-Logo.svg"
import Nike from "../../public/Brands/Nike-Logo.svg"
import Adidas from "../../public/Brands/Adidas-Logo.svg"
import Img3 from "../../public/Brands/image 3.svg"
import Img4 from "../../public/Brands/image 4.svg"
import Img5 from "../../public/Brands/image 5.svg"

const BrandsSection2 = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const brands = [
    {
      name: "Nike",
      logo: Nike,
    },
    {
      name: "Adidas",
      logo:Adidas,
    },
    {
      name: "Under Armour",
      logo: armour,
    },
    {
      name: "Bella Canvas",
      logo:Img3,
    },
    {
      name: "Comfort",
      logo: Img4,
    },
    {
      name: "Travis",
      logo: Img5,
    },
    {
      name: "Gildan",
      logo:Adidas
    }
  ];

  // Duplicate brands for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.9;

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
    <section className="py-7 bg-[#F0F9FF]">
      <div className="max-w-[1392px] mx-auto px-4">
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
                  className="max-w-full max-h-full object-contain"
                  height={64}
                  width={100}
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

export default BrandsSection2;