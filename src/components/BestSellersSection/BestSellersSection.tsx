import { Button } from "@/components/ui/button";
import Image from "next/image";

const BestSellersSection = () => {
  // bg-gradient-to-r from-[#0072BA] via-[#0060A0] to-[#003C64]
  return (
    <section className="py-12 px-12.5 bg-gray-50 rounded-[20px] mb-10.5  rounded-2xl overflow-hidden shadow-2xl mb-10 hidden xl:block " style={{background: 'linear-gradient(180deg, #0072BA 0%, #C7E3F7 100%)'}}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Best Sellers
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
            Personalize custom gear with free & fast shipping
          </p>
          <Button 
            variant="blue" 
            className="border-2  bg-transparent text-white border-white  hover:bg-gradient-to-r hover:from-[#0072BA] hover:via-[#0060A0] hover:to-[#003C64] hover:border-white hover:text-white text-[18px] font-[700] rounded-[12px] px-7 py-4 transition-colors duration-300 min-w-[166px] min-h-[56px]"
          >
            View All
          </Button>
        </div>
        <div className="hidden md:block relative w-full max-w-md aspect-square">
          <Image
            src="https://plus.unsplash.com/premium_photo-1690820318702-06867bb1405e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxtZW4lMjB3ZWFyaW5nJTIwd2hpdGUlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D"
            alt="Best Sellers"
            fill
            className="object-cover rounded-2xl shadow-xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
