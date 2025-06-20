import { Button } from "@/components/ui/button";

const BestSellersSection = () => {
  // bg-gradient-to-r from-[#0072BA] via-[#0060A0] to-[#003C64]
  return (
    <section className="py-12 px-12.5 bg-gray-50 rounded-[20px] mb-10.5 " style={{background: 'linear-gradient(180deg, #0072BA 0%, #C7E3F7 100%)'}}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="max-w-2xl text-gray-900">
          <h1 className="text-[60px] font-lato font-bold text-white  mb-4 leading-[100%] ">
            Best Sellers
          </h1>
          <p className="text-lg  mb-8 text-white">
          Personalize custom gear with free & fast shipping
          </p>
          <Button 
            variant="blue" 
            className="border-2  bg-transparent text-white border-white  hover:bg-gradient-to-r hover:from-[#0072BA] hover:via-[#0060A0] hover:to-[#003C64] hover:border-white hover:text-white text-[18px] font-[700] rounded-[12px] px-7 py-4 transition-colors duration-300 min-w-[166px] min-h-[56px]"
          >
            View All
          </Button>
        </div>
        <div className="hidden md:block">
          <img 
            src="https://plus.unsplash.com/premium_photo-1690820318702-06867bb1405e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU3fHxtZW4lMjB3ZWFyaW5nJTIwd2hpdGUlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D" 
            alt="Best Sellers" 
            className="w-[304px] h-[304px] object-cover rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
