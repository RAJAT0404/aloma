"use client";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Phone,
  Mail,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MegaMenu from "../MegaMenu/mega-menu";
import { useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const [megaMenu, setMegaMenu] = useState(false);
  const [activeTab ,setActiveTab]=useState('')

  const menus = [
    { name: "Home", url: "/" },
    {
      name: "Products",
      url: "/product",
      submenu: [
        { name: "T-Shirts", url: "/product" },
        { name: "Hoodies & Sweatshirts", url: "/hoodies" },
        { name: "Hats & Caps", url: "/hats" },
        { name: "Promotional Products", url: "/promotional" },
        { name: "Accessories", url: "/accessories" },
      ],
    },
    { name: "Categories", url: "/categories", submenu: [] },
    { name: "Contact", url: "/contact" },
    {
      name: "Templates",
      url: "/templates",
      submenu: [
        { name: "T-Shirtsss", url: "/product" },
        { name: "Hoodies & Sweatshirts", url: "/hoodies" },
        { name: "Hats & Caps", url: "/hats" },
        { name: "Promotional Products", url: "/promotional" },
        { name: "Accessories", url: "/accessories" },
      ],
    },
  ];


  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <header className="w-full">
        {/* Notice Banner */}
        {!isBannerHidden && (
          <div className="bg-gradient-to-r from-[#003C64] to-[#0072BA]  text-white py-1.5 px-10 text-center relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex items-center justify-center">
              <div className="animate-pulse flex space-x-1.5">
                <div className="h-1.5 w-1.5 bg-white rounded-full hidden sm:block"></div>
                <div className="h-1.5 w-1.5 bg-white rounded-full hidden sm:block"></div>
                <div className="h-1.5 w-1.5 bg-white rounded-full hidden sm:block"></div>
              </div>
              <p className="text-[12px] md:text-[12px] font-medium tracking-wide mx-3">
                <span className="font-md">PREMIUM QUALITY:</span> In-House
                Artists, State-of-the-Art Screen Printing, Embroidery & Digital
                Printing
              </p>
              <div className="animate-pulse flex space-x-1.5">
                <div className="h-1.5 w-1.5 bg-white rounded-full hidden sm:block"></div>
                <div className="h-1.5 w-1.5 bg-white rounded-full hidden sm:block"></div>
                <div className="h-1.5 w-1.5 bg-white rounded-full hidden sm:block"></div>
              </div>
            </div>
            <button
              onClick={() => setIsBannerHidden(true)}
              className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-125 transition-transform duration-200 text-base font-bold"
              aria-label="Close banner"
            >
              ×
            </button>
            <div className="absolute inset-0 bg-white/10  pointer-events-none"></div>
          </div>
        )}

        {/* Main Header */}
        <div className="bg-white border-b border-gray-200 py-3 ">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
              {/* Logo and Mobile Menu */}
              <div className="flex items-center justify-between w-full md:w-auto">
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <div className="flex items-center">
                    <Image
                      src={Logo}
                      alt="Alamo Tees Logo"
                      width={250}
                      height={60}
                      className="w-[250px] h-[30px] object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Mobile Menu Button */}

                <div >
                <Sheet > 
                  <SheetTrigger asChild className="md:hidden ">
                    <Button variant="ghost" size="icon">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="w-[300px] sm:w-[400px] p-6 overflow-y-scroll"
                  >
                    <div className="mt-8 space-y-8">
                      <div className="relative">
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
                      </div>

                      <nav className="flex flex-col space-y-6">
                        {menus?.map((item) => {
                          return item.submenu ? (
                            <div>
                              <div key={item.name} className="space-y-2">
                                {!item.name.includes("Categories") ? (
                                  <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex items-center justify-between w-full text-lg font-medium  text-gray-700 hover:text-[#0072BA] py-2"
                                  >
                                    <span>{item.name}</span>
                                    <ChevronDown
                                      className={`h-4 w-4 ml-2 transition-transform ${
                                        isOpen ? "rotate-180" : ""
                                      }`}
                                    />
                                  </button>

                                ) : (
                                <div>
                                    <button
                                    onClick={() => setMegaMenu(!megaMenu)}
                                    className="flex items-center justify-between w-full text-lg font-medium  text-gray-700 hover:text-[#0072BA] py-2"
                                  >
                                    <span>{item.name}</span>
                                    <ChevronDown
                                      className={`h-4 w-4 ml-2 transition-transform ${
                                        megaMenu ? "rotate-180" : ""
                                      }`}
                                    />
                                  </button>
                                       {megaMenu &&    <MegaMenu  megaMenu={megaMenu} setMegaMenu={setMegaMenu}  />}
                                </div>
                                )}
                                {isOpen && (
                                  <div className="pl-4 space-y-2">
                                    {item.submenu.map((subItem) => (
                                      <a
                                        key={subItem.name}
                                        href={subItem.url}
                                        className="block text-gray-700 hover:text-[#0072BA] py-1"
                                      >
                                        {subItem.name}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                      
                            </div>
                          ) : (
                            <a
                              key={item.name}
                              href={item.url}
                              className="text-lg font-medium text-gray-700 hover:text-[#0072BA] py-2"
                            >
                              {item.name}
                            </a>
                          );
                        })}
                      </nav>

                      <div className="pt-6 border-t border-gray-200 space-y-6">
                        <Link
                          href="tel:888-618-6870"
                          className="flex items-center space-x-4 cursor-pointer"
                        >
                          <Phone className="h-5 w-5 text-[#003C64] pr-[5px]" />
                          <div>
                            <div className="text-[#003C64] font-semibold">
                              NEED HELP?
                            </div>
                            <div className="text-gray-600">888-618-6870</div>
                          </div>
                        </Link>
                        <Link
                          href="mailto:sales@alamotees.com"
                          className="flex items-center space-x-4 cursor-pointer"
                        >
                          <Mail className="h-5 w-5 text-[#003C64] pr-[5px]" />
                          <div>
                            <div className="text-[#003C64] font-semibold ">
                              EMAIL US
                            </div>
                            <div className="text-gray-600">
                              sales@alamotees.com
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
                </div>
              
              </div>

              {/* Search Bar - Hidden on mobile */}
              <div className="hidden md:block flex-1 max-w-md mx-2">
                <div className="relative w-full max-w-md rounded-full">
                  <Input
                    placeholder="Search for products, brands, and more..."
                    className="pl-4 pr-12 h-8 rounded-full bg-gray-100 border-none  focus:bg-white focus:shadow-sm transition-all"
                    onFocus={(e) => {
                      e.target.placeholder = "What are you looking for?";
                      e.target.parentElement?.classList.add(
                        "ring-2",
                        "ring-blue-500",
                        "bg-white",
                        "shadow-md"
                      );
                    }}
                    onBlur={(e) => {
                      e.target.placeholder =
                        "Search for products, brands, and more...";
                      e.target.parentElement?.classList.remove(
                        "ring-2",
                        "ring-blue-500",
                        "bg-white",
                        "shadow-md"
                      );
                    }}
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-1 top-1 h-6 w-6 p-0 text-gray-500 hover:text-[#003C64] hover:bg-transparent"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                  {/* Suggestions dropdown - appears on focus */}
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 hidden peer-focus:block">
                    <div className="p-2 text-sm text-gray-500">
                      Recent searches
                    </div>
                    <div className="divide-y divide-gray-100">
                      {[
                        "T-Shirts",
                        "Hoodies",
                        "Summer Collection",
                        "New Arrivals",
                      ].map((item) => (
                        <div
                          key={item}
                          className="p-3 hover:bg-gray-50 cursor-pointer flex items-center"
                        >
                          <Search className="h-4 w-4 mr-2 text-gray-400" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info & Actions - Hidden on mobile */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 lg:gap-6  whitespace-nowrap w-full max-w-max md-max-w-[500px] ">
                {/* Phone Contact - Visible on md+ */}
                <Link
                  href="tel:888-618-6870"
                  className="hidden lg:flex items-start  text-sm cursor-pointer"
                >
                  <Phone className="h-6 w-6 mt-[0px] pr-[5px] text-[#003C64]" />
                  <div>
                    <div className="text-[#003C64] font-semibold">
                      NEED HELP?
                    </div>
                    <div className="text-gray-600">888-618-6870</div>
                  </div>
                </Link>

                {/* Email Contact - Visible on lg+ */}
                <Link
                  href="mailto:sales@alamotees.com"
                  className="hidden lg:flex items-start text-sm cursor-pointer"
                >
                  <Mail className="h-6 w-6 mt-[0px] pr-[5px] text-[#003C64]" />
                  <div>
                    <div className="text-[#003C64] font-semibold">EMAIL US</div>
                    <div className="text-gray-600">sales@alamotees.com</div>
                  </div>
                </Link>

                {/* Account and Cart - Always visible but stacked on small screens */}
                <div className="hidden md:flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="flex w-full max-w-max items-center hover:bg-transparent  text-[#003C64] font-semibold text-sm cursor-pointer gap-1"
                  >
                    <User className="h-6 w-6" />
                    <span className="hidden lg:inline ">My Account</span>
                  </Button>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative w-full max-w-max hover:bg-transparent  flex items-center text-[#003C64] font-semibold text-sm cursor-pointer gap-1"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span className="hidden lg:inline">Cart</span>
                    <span className="absolute -top-[5px] -left-[10px] h-4 w-4 rounded-full bg-[#003C64] text-[8px] text-white flex items-center justify-center">
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
            <div className="flex items-center justify-between h-14">
              <nav className="flex items-center space-x-4 lg:space-x-8">
                {menus.map((item) => {
                  return item.submenu ? (
                    <div key={item.name} className="relative">
                      {item.name.includes("Categories") ? (
                        <Button
                          variant="ghost"
                          className={`text-sm font-medium text-gray-700 transition-colors flex items-center gap-1 hover:bg-transparent hover:text-[#0072BA] ${
                            megaMenu ? "text-[#0072BA]" : ""
                          }`}
                          onClick={() => {
                            setMegaMenu(!megaMenu);
                          }}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${
                              megaMenu ? "rotate-180" : ""
                            }`}
                          />
                        </Button>
                      ) : (
                        <div 
                          className="relative"
                          onMouseEnter={() => {
                            setMegaMenu(false); // Close mega menu if open
                            setIsOpen(true);
                            setActiveTab(item.name); // Track which menu is open by its name
                          }}
                          onMouseLeave={() => {
                            setIsOpen(false);
                            setActiveTab('');
                          }}
                        >
                          <Button
                            variant="ghost"
                            className={`text-sm font-medium text-gray-700 transition-colors flex items-center gap-1 hover:bg-transparent hover:text-[#0072BA] ${
                              activeTab === item.name ? "text-[#0072BA]" : ""
                            }`}
                          >
                            {item.name}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                activeTab  === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </Button>

                          {activeTab  === item.name && (
                            <div className="absolute w-64 bg-white border border-gray-100 shadow-xl z-50 rounded-lg overflow-hidden">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.url}
                                  className="w-full px-6 py-3 text-gray-700 hover:bg-[#0072BA]/5 hover:text-[#0072BA] transition-colors duration-200 border-b border-gray-100 last:border-b-0 flex items-center"
                                >
                                  <span className="w-2 h-2 rounded-full bg-[#0072BA] mr-3"></span>
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.url}
                      className="relative text-sm font-medium text-gray-700 transition-colors hover:text-[#0072BA] 
                             before:content-[''] before:absolute before:bottom-0 before:left-0 
                             before:h-[2px] before:w-0 before:bg-[#0072BA] 
                             before:transition-all before:duration-300 
                             hover:before:w-full"
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <Button
                // variant="secondary"
                className="relative text-[#003C64] px-5 py-2 text-[14px] leading-[100%] font-medium bg-white
  transition-all duration-300 ease-in-out active:scale-98 
  border border-[#003C64]  rounded-[12px] hover:border-[#003C64] hover:bg-[#003C64] hover:text-white my-2"
                aria-label="Go to Design Lab"
              >
                <span className="relative z-10">DESIGN LAB</span>
                <span className="absolute inset-0 rounded-[12px] bg-transparent hover:bg-[#003C64]/5 transition-all duration-300 ease-in-out"></span>
              </Button>
            </div>
            {megaMenu && (
              <div
                id="Megamenu"
                className="w-full max-w-[1504px] mx-auto absolute top-35 z-[12] bg-white left-1/2 -translate-x-1/2"
                ref={menuRef}
              >
                <MegaMenu megaMenu={megaMenu} setMegaMenu={setMegaMenu} />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
