'use client'
import { Search, ShoppingCart, User, ChevronDown, Phone, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/alamo-tees-logo.png"
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const productCategories = [
    { name: "T-Shirts", href: "/tshirts" },
    { name: "Hoodies & Sweatshirts", href: "#" },
    { name: "Hats & Caps", href: "#" },
    { name: "Promotional Products", href: "#" },
    { name: "Accessories", href: "#" }
  ];

  const [isBannerHidden, setIsBannerHidden] = useState(false);

  return (
    <header className="w-full">
      {/* Notice Banner */}
      {!isBannerHidden && (
        <div className="bg-[#003C64] text-white py-4 px-8 text-sm text-center relative">
          In-House Artists, State of the Art Screen Printing, Embroidery & Digital Printing
          <button 
            onClick={() => setIsBannerHidden(true)}
            className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer"
            aria-label="Close banner"
          >
            ×
          </button>
        </div>
      )}

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Logo and Mobile Menu */}
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="flex items-center">
                  <Image
                    src={Logo}
                    alt="Alamo Tees Logo"
                    width={120}
                    height={48}
                    className="h-10 w-auto md:h-24"
                  />
                </div>
              </div>

              {/* Mobile Menu Button */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px] p-6">
                  <div className="mt-8 space-y-8">
                    {/* <div className="relative">
                      <Input
                        placeholder="Search Products"
                        className="pl-4 pr-12 h-10 border-gray-300"
                      />
                      <Button 
                        size="sm" 
                        className="absolute right-1 top-1 h-8 w-8 p-0 bg-[#003C64] hover:bg-black"
                      >
                        <Search className="h-4 w-4" />
                      </Button>
                    </div> */}

                    <nav className="flex flex-col space-y-6">
                      {['Home', 'Product', 'Category', 'Contact', 'Templates', 'Design Lab'].map((item) => (
                        <a
                          key={item}
                          href={`/${item.toLowerCase().replace(' ', '-')}`}
                          className="text-lg font-medium text-gray-700 hover:text-[#0072BA] py-2"
                        >
                          {item}
                        </a>
                      ))}
                    </nav>

                    <div className="pt-6 border-t border-gray-200 space-y-6">
                      <Link href="tel:888-618-6870" className="flex items-center space-x-4 cursor-pointer">
                        <Phone className="h-5 w-5 text-[#003C64]" />
                        <div>
                          <div className="text-[#003C64] font-semibold">NEED HELP?</div>
                          <div className="text-gray-600">888-618-6870</div>
                        </div>
                      </Link>
                      <Link href="mailto:sales@alamotees.com" className="flex items-center space-x-4 cursor-pointer">
                        <Mail className="h-5 w-5 text-[#003C64]" />
                        <div>
                          <div className="text-[#003C64] font-semibold">EMAIL US</div>
                          <div className="text-gray-600">sales@alamotees.com</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:block flex-1 max-w-md mx-4">
              <div className="relative w-full max-w-md rounded-full">
                <Input
                  placeholder="Search for products, brands, and more..."
                  className="pl-4 pr-12 h-10 rounded-full bg-gray-100 border-none focus-visible:ring-2 focus-visible:ring-blue-500 focus:bg-white focus:shadow-md transition-all"
                  onFocus={(e) => {
                    e.target.placeholder = "What are you looking for?";
                    e.target.parentElement?.classList.add('ring-2', 'ring-blue-500', 'bg-white', 'shadow-md');
                  }}
                  onBlur={(e) => {
                    e.target.placeholder = "Search for products, brands, and more...";
                    e.target.parentElement?.classList.remove('ring-2', 'ring-blue-500', 'bg-white', 'shadow-md');
                  }}
                />
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="absolute right-1 top-1 h-8 w-8 p-0 text-gray-500 hover:text-blue-500 hover:bg-transparent"
                >
                  <Search className="h-4 w-4" />
                </Button>
                {/* Suggestions dropdown - appears on focus */}
                <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 hidden peer-focus:block">
                  <div className="p-2 text-sm text-gray-500">Recent searches</div>
                  <div className="divide-y divide-gray-100">
                    {['T-Shirts', 'Hoodies', 'Summer Collection', 'New Arrivals'].map((item) => (
                      <div key={item} className="p-3 hover:bg-gray-50 cursor-pointer flex items-center">
                        <Search className="h-4 w-4 mr-2 text-gray-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info & Actions - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <Link href="tel:888-618-6870" className="hidden lg:flex items-center space-x-2 text-sm cursor-pointer">
                <Phone className="h-4 w-4 text-[#003C64]" />
                <div>
                  <div className="text-[#003C64] font-semibold">NEED HELP?</div>
                  <div className="text-gray-600">888-618-6870</div>
                </div>
              </Link>

              <Link href="mailto:sales@alamotees.com" className="hidden lg:flex items-center space-x-2 text-sm cursor-pointer">
                <Mail className="h-4 w-4 text-[#003C64]" />
                <div>
                  <div className="text-[#003C64] font-semibold">EMAIL US</div>
                  <div className="text-gray-600">sales@alamotees.com</div>
                </div>
              </Link>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-[#003C64] text-xs text-white flex items-center justify-center">
                    0
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Hidden on mobile */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <nav className="flex items-center space-x-4 lg:space-x-8">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-[#0072BA] transition-colors">
                Home
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors group">
                    <span>Products</span>
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56 bg-white border shadow-lg">
                  {productCategories.map((category) => (
                    <DropdownMenuItem key={category.name} asChild>
                      <a href={category.href} className="w-full cursor-pointer hover:bg-gray-50">
                        {category.name}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {['Categories', 'Contact', 'Templates', 'Design Lab'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm font-medium text-gray-700 hover:text-[#0072BA] transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <Button 
              className=" lg:block bg-[#003C64] hover:bg-blue-500 flex items-center space-x-2 text-white px-8 py-6 font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95"
              onClick={() => window.location.href = '/design-lab'}
              aria-label="Go to Design Lab"
            >
              DESIGN LAB
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;