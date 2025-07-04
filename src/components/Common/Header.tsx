"use client";
import {
  Search,
  ChevronDown,
  Phone,
  Mail,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/footerlogo.png";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MegaMenu from "../MegaMenu/mega-menu";
import { useRef } from "react";
import type HeaderProps from "@/Types/header";

import { PortableText } from "@portabletext/react";
import CartHoverCard from "../Sections/HoverCards/CartHoverCard";
import MyAccountCard from "../Sections/HoverCards/MyAccountCard";




const Header = ({ ctaButton, logo, navLinks, topBar, utilityLinks }: HeaderProps) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  const [megaMenu, setMegaMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('')

  const menuRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <header className="w-full">
        {/* Notice Banner */}
        {!isBannerHidden && (
          <div className="bg-gradient-to-r from-[#003C64] to-[#0072BA] text-white py-1.5 px-10 text-center relative overflow-hidden min-h-[30px] flex items-center justify-center">
            <div className="max-w-6xl mx-auto flex items-center justify-center">
              <div className="animate-pulse flex space-x-1.5">
                <div className="h-1.5 w-1.5 bg-white rounded-full hidden sm:block"></div>
                <div className="h-1.5 w-1.5 bg-white rounded-full hidden sm:block"></div>
                <div className="h-1.5 w-1.5 bg-white rounded-full hidden sm:block"></div>
              </div>
              <div className="text-[12px] md:text-[12px] font-medium tracking-wide mx-3">
                <span className="font-md">

                  PREMIUM QUALITY: In-House Artists, State-of-the-Art Screen Printing, Embroidery & Digital Printing

                  {/* {topBar?.message && <PortableText value={""} />} */}
                </span>
              </div>
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
            <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
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
                      src={logo?.asset?.url || Logo}
                      alt={logo?.alt || "Alamo Tees Logo"}
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
                          {navLinks?.map((item) => {
                            return item.SubMenu ? (
                              <div key={item.title}>
                                <div className="space-y-2">
                                  <button
                                    onClick={() => {
                                      if (activeTab === item.title) {
                                        setActiveTab('');
                                      } else {
                                        setActiveTab(item.title);
                                      }
                                    }}
                                    className="flex items-center justify-between w-full text-lg font-medium  text-gray-700 hover:text-[#0072BA] py-2"
                                  >
                                    <span>{item.title}</span>
                                    <ChevronDown
                                      className={`h-4 w-4 ml-2 transition-transform ${activeTab === item.title ? "rotate-180" : ""
                                        }`}
                                    />
                                  </button>
                                  {activeTab === item.title && (
                                    <div className="pl-4 space-y-2">
                                      {item?.SubMenu?.map((subItem) => (
                                        <a
                                          key={subItem.title}
                                          href={'/'}
                                          className="block text-gray-700 hover:text-[#0072BA] py-1"
                                        >
                                          {subItem.title}
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            ) : item.isMegaMenu ? <div key={item.title}>
                              <div className="space-y-2">
                                {!item.title.includes("Categories") ? (
                                  <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="flex items-center justify-between w-full text-lg font-medium  text-gray-700 hover:text-[#0072BA] py-2"
                                  >
                                    <span>{item.title}</span>
                                    <ChevronDown
                                      className={`h-4 w-4 ml-2 transition-transform ${isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                  </button>

                                ) : (
                                  <div>
                                    <button
                                      onClick={() => setMegaMenu(!megaMenu)}
                                      className="flex items-center justify-between w-full text-lg font-medium  text-gray-700 hover:text-[#0072BA] py-2"
                                    >
                                      <span>{item.title}</span>
                                      <ChevronDown
                                        className={`h-4 w-4 ml-2 transition-transform ${megaMenu ? "rotate-180" : ""
                                          }`}
                                      />
                                    </button>
                                    {megaMenu && <MegaMenu megaMenu={megaMenu} setMegaMenu={setMegaMenu} />}
                                  </div>
                                )}

                              </div>

                            </div> : (
                              <Link
                                key={item.title}
                                href={'/'}
                                className="text-lg font-medium text-gray-700 hover:text-[#0072BA] py-2"
                              >
                                {item.title}
                              </Link>
                            );
                          })}
                        </nav>

                        <div className="pt-6 border-t border-gray-200 space-y-6">

                          {topBar?.contactLinks?.map((item, index) => (
                            <Link
                              key={index}
                              href={item.type === 'phone' ? `tel:${item.value}` : item.type === 'email' ? `mailto:${item.value}` : item.value}
                              className="flex items-center space-x-4 cursor-pointer"
                            >
                              {item.type === 'phone' ? (
                                <Phone className="h-5 w-5 text-[#003C64] pr-[5px]" />
                              ) : item.type === 'email' ? (
                                <Mail className="h-5 w-5 text-[#003C64] pr-[5px]" />
                              ) : null}
                              <div>
                                <div className="text-[#003C64] font-semibold">
                                  {item.label}
                                </div>
                                <div className="text-gray-600">{item.value}</div>
                              </div>
                            </Link>
                          ))}

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

                {topBar?.contactLinks?.map((item) => {
                  const href = item.type === 'phone'
                    ? `tel:${item.value}`
                    : `mailto:${item.value}`;
                  const Icon = item.type === 'phone' ? Phone : Mail;

                  return (
                    <Link
                      key={item.label}
                      href={href}
                      className="hidden lg:flex items-start text-sm cursor-pointer"
                    >
                      <Icon className="h-6 w-6 pr-1.5 text-[#003C64]" />
                      <div>
                        <div className="text-[#003C64] font-semibold">
                          {item.label}
                        </div>
                        <div className="text-gray-600">{item.value}</div>
                      </div>
                    </Link>
                  );
                })}


                {/* Account and Cart - Always visible but stacked on small screens */}
                <div className="hidden md:flex items-center gap-4">


                  <MyAccountCard />
                  <CartHoverCard />
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
                {navLinks && navLinks?.map((item, index) => {
                  return item?.SubMenu && item.SubMenu?.length > 1 && !item?.isMegaMenu ? (
                    <div key={index} className="relative">
                      {item?.isMegaMenu && item?.SubMenu && item.SubMenu?.length == 0 ? (
                        <Button
                          variant="ghost"
                          className={`text-sm font-medium text-gray-700 transition-colors flex items-center gap-1 hover:bg-transparent hover:text-[#0072BA] ${megaMenu ? "text-[#0072BA]" : ""
                            }`}
                          onMouseEnter={() => (setMegaMenu(true))}
                        >
                          {item.title}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${megaMenu ? "rotate-180" : ""
                              }`}
                          />
                        </Button>
                      ) : (
                        <div
                          className="relative"
                          onMouseEnter={() => {
                            setMegaMenu(false); // Close mega menu if open
                            setIsOpen(true);
                            setActiveTab(item.title); // Track which menu is open by its name
                          }}
                          onMouseLeave={() => {
                            setIsOpen(false);
                            setActiveTab('');
                          }}
                        >
                          <Button
                            variant="ghost"
                            className={`text-sm font-medium text-gray-700 transition-colors flex items-center gap-1 hover:bg-transparent hover:text-[#0072BA] ${activeTab === item.title ? "text-[#0072BA]" : ""
                              }`}
                          >
                            {item.title}
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${activeTab === item.title ? "rotate-180" : ""
                                }`}
                            />
                          </Button>

                          {activeTab === item.title && (
                            <div className="absolute w-64 bg-white border border-gray-100 shadow-xl z-50 rounded-lg overflow-hidden">
                              {item?.SubMenu?.map((subItem) => (
                                <Link
                                  key={subItem?.title}
                                  href={'/'}
                                  className="w-full px-6 py-3 text-gray-700 hover:bg-[#0072BA]/5 hover:text-[#0072BA] transition-colors duration-200 border-b border-gray-100 last:border-b-0 flex items-center"
                                >
                                  <span className="w-2 h-2 rounded-full bg-[#0072BA] mr-3"></span>
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                    </div>
                  ) : item?.isMegaMenu ?
                    <div key={index} className="relative">
                      <Button
                        variant="ghost"
                        className={`text-sm font-medium text-gray-700 transition-colors py-4 flex items-center gap-1 hover:bg-transparent hover:text-[#0072BA] ${megaMenu ? "text-[#0072BA]" : ""
                          }`}
                        onMouseEnter={() => (setMegaMenu(true))}
                      >
                        {item.title}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${megaMenu ? "rotate-180" : ""
                            }`}
                        />
                      </Button>

                    </div>

                    : (
                      <Link
                        key={index}
                        href={item.link?.internalLink?.slug || '/'}
                        className="relative text-sm font-medium text-gray-700 transition-colors hover:text-[#0072BA] 
                             before:content-[''] before:absolute before:bottom-0 before:left-0 
                             before:h-[2px] before:w-0 before:bg-[#0072BA] 
                             before:transition-all before:duration-300 
                             hover:before:w-full"
                      >
                        {item.title}
                      </Link>
                    );
                })}
              </nav>

              {ctaButton && ctaButton?.label &&

                <Link href={ctaButton?.link?.isExternal ? "#" : ctaButton?.link?.internalLink?.slug || "#"} target={!ctaButton?.link?.isTargetBlank ? "_blank" : undefined}>
                  <Button
                    className="relative text-[#003C64] px-5 py-2 text-[14px] leading-[100%] font-medium bg-white
                transition-all duration-300 ease-in-out active:scale-98 
                border border-[#003C64] rounded-[12px] hover:border-[#003C64] hover:bg-[#003C64] hover:text-white my-2"
                    aria-label="Go to Design Lab"
                  >
                    <span className="relative z-10">{ctaButton?.label}</span>
                    <span className="absolute inset-0 rounded-[12px] bg-transparent hover:bg-[#003C64]/5 transition-all duration-300 ease-in-out"></span>
                  </Button>
                </Link>

              }
            </div>
            {megaMenu && (
              <div
                id="Megamenu"
                className={`w-full max-w-[1504px] mx-auto absolute ${isBannerHidden ? 'top-30' : 'top-36 lg:top-38'} z-[12] bg-white left-1/2 -translate-x-1/2`}
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
