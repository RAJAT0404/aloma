"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Monitor, Package, Truck, Share2 } from "lucide-react";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { login } from '@/Store/slices/authSlice';
import { useRouter } from 'next/navigation';
import Image from "next/image";

const Login = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) {
          setError("Please enter an email address");
          return; 
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          setError("Please enter a valid email address");
          return;
      }
  
      setError("");
      dispatch(login({ email })); // ✅ Pass email to Redux
      router.push("/my-account/profile");
  };

    return (
        <div className="bg-gray-50 flex items-center justify-center py-16 sm:py-20 px-4 sm:px-8">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left side - Login Form */}
                <div className="w-full max-w-md mx-auto order-1 lg:order-none">
                    <Card className="shadow-lg border-0 p-4 sm:p-4 md:p-6">
                        <CardHeader className="text-center pb-6 md:pb-8">
                            {/* Logo */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-38 md:h-38 rounded-full p-5 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-[#003C64] to-[#0072BA] transform transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/alogo.svg" 
                                    alt="Company Logo" 
                                    width={30} 
                                    height={30} 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            
                            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">
                                Sign In to Your Account
                            </h1>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md mx-auto">
                                Enter your email address to access your saved designs, track your orders, and place a reorder!
                            </p>
                        </CardHeader>
                        
                        <CardContent className="space-y-4 sm:space-y-6">
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-3 sm:space-y-4">
                                    <Input
                                        type="email"
                                        placeholder="Please enter your email address..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-12 sm:h-14 text-sm sm:text-base md:text-lg px-4 hover:border-[#0072BA] focus:border-[#0072BA] focus-visible:ring-[#0072BA]"
                                    />
                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                </div>
                                
                                <Button 
                                    variant="blue"
                                    className="w-full h-12 sm:h-14 mt-4"
                                    type="submit"
                                >
                                    Sign In
                                </Button>
                            </form>
                            
                            <p className="text-xs sm:text-sm text-gray-500 text-center mt-0 sm:mt-0">
                                Your email is safe and secure. Read our{" "}
                                <Link href="#" className="text-blue-500 hover:underline">
                                    Privacy Policy
                                </Link>
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Right side - Features - Hidden on mobile */}
                <div className="hidden lg:block space-y-10 pl-0 lg:pl-12">
                    <div className="mb-10 md:mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 bg-gradient-to-r from-[#003C64] to-[#0072BA] bg-clip-text text-transparent">
                            Unlock Your Account Benefits
                        </h2>
                        <div className="relative">
                            <p className="text-gray-600 text-lg sm:text-xl font-medium mb-6 sm:mb-8 pl-4 border-l-4 border-[#0072BA]">
                                Your account gives you access to:
                            </p>
                            <div className="absolute -left-1 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
                        </div>
                    </div>

                    <div className="space-y-6 sm:space-y-7">
                        {[
                            { icon: Monitor, text: "View Saved Designs" },
                            { icon: Package, text: "Place A Reorder" },
                            { icon: Truck, text: "Track an Existing Order" },
                            { icon: Share2, text: "Share Your Designs" }
                        ]?.map((item, index) => (
                            <div key={index} className="flex items-center space-x-5 sm:space-x-6 group">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#0072BA] group-hover:shadow-md">
                                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-600 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                                </div>
                                <span className="text-gray-800 font-semibold text-lg sm:text-xl group-hover:text-[#0072BA] transition-colors duration-300">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;