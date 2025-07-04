import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
// import nikeImage from "/Brands/nikebanner.png"

const NikeGearBanner = () => {
    return (
        <div className="relative w-full  rounded-2xl overflow-hidden shadow-2xl mb-10 hidden xl:block"  style={{background: 'linear-gradient(180deg, #0072BA 0%, #C7E3F7 100%)'}}>
            {/* Image positioned absolutely */}
            <div className="hidden lg:block absolute bottom-0 right-0 w-[50%] h-full mt-6">
                <Image
                    src="/Brands/nikebanner.png"
                    alt="Two people wearing custom Nike gear with backpacks"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Content container */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
                <div className="flex-1 text-white mb-8 lg:mb-0 lg:pr-8">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        Custom Nike Gear
                    </h1>
                    <p className="text-lg lg:text-xl mb-8 text-blue-100 max-w-md">
                        Design customized Nike apparel and accessories that show off your logo in style.
                    </p>

                    <Button
                        variant="blue"
                        className="border-2 bg-transparent text-white border-white hover:bg-gradient-to-r hover:from-[#0072BA] hover:via-[#0060A0] hover:to-[#003C64] hover:border-white hover:text-white text-[18px] font-[700] rounded-[12px] px-7 py-4 transition-colors duration-300 min-w-[166px] min-h-[56px] mb-6"
                    >
                        Shop All Nike
                    </Button>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-300" />
                            <span className="text-black">No Minimums</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-300" />
                            <span className="text-black">Fast & Free Shipping</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NikeGearBanner;
