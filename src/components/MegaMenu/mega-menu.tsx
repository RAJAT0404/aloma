"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { useIsMobile } from "@/hooks/use-mobile";

const menuCategories = [
  {
    name: "Apparel",
    menu: [
      {
        title: "T-SHIRTS",
        items: [
          "Short Sleeve T-Shirts",
          "Long Sleeve T-Shirts",
          "Tank Tops",
          "Fitted T-Shirts",
          "Camo T-Shirts",
          "Youth T-Shirts",
        ],
      },
      {
        title: "OFFICEWEAR",
        items: [
          "Short Sleeve Polos",
          "Long Sleeve Polos",
          "Youth Polos",
          "Short Sleeve Dress Shirts",
          "Long Sleeve Dress Shirts",
          "Denim Shirts",
          "Twill Shirts",
          "Youth Dress Shirts",
        ],
      },
      {
        title: "OUTERWEAR",
        items: [
          "Jackets / Coats",
          "Hoodies",
          "Fleece",
          "Pullovers",
          "Sweats",
          "Sweaters",
          "Vests",
          "Youth",
        ],
      },
      {
        title: "BOTTOMS",
        items: [
          "Pants",
          "Shorts",
          "Denim",
          "Skirts",
          "Youth",
        ],
      },
      {
        title: "HEADWEAR",
        items: [
          "Caps",
          "Hats",
          "Beanies",
          "Visors",
          "Bandannas",
          "Youth",
        ],
      },
      {
        title: "MORE",
        items: [
          "Sunglasses",
          "Activewear",
          "Aprons",
          "Gloves",
          "Infantwear",
          "Dresses",
          "Watches",
          "Shoes",
        ],
      },
    ],
  },
  {
  name: "Awards",
  menu: [
    {
      title: "TROPHIES",
      items: [
        "Acrylic Trophies",
        "Crystal Trophies",
        "Glass Trophies",
        "Marble Trophies",
        "Metal Trophies",
        "Wood Trophies",
      ],
    },
    {
      title: "PLAQUES",
      items: [
        "Acrylic Plaques",
        "Crystal Plaques",
        "Glass Plaques",
        "Marble Plaques",
        "Metal Plaques",
        "Wood Plaques",
      ],
    },
    {
      title: "EMBLEMS, PINS, & MEDALS",
      items: [
        "Emblems",
        "Medals",
        "Pins",
        "Ribbons",
      ],
    },
    {
      title: "PAPER WEIGHTS",
      items: [
        "Acrylic Paper Weights",
        "Crystal Paper Weights",
        "Glass Paper Weights",
        "Marble Paper Weights",
        "Metal Paper Weights",
        "Wood Paper Weights",
      ],
    },
    {
      title: "VASES",
      items: [
        "Crystal Vases",
        "Glass Vases",
        "Marble Vases",
        "Metal Vases",
      ],
    },
    {
      title: "GOLF",
      items: [
        "Acrylic",
        "Crystal",
        "Glass",
        "Marble",
        "Metal",
        "Wood",
      ],
    },
  ],
},
{
  name: "Bags",
  menu: [
    {
      title: "TOTE BAGS",
      items: [
        "Shopping",
        "Trade Shows",
        "Cotton",
        "Fashion",
      ],
    },
    {
      title: "BACKPACKS",
      items: [
        "Zipper Closure",
        "Drawstring",
        "Sling",
        "Button Closure",
      ],
    },
    {
      title: "OFFICE & SCHOOL",
      items: [
        "Backpacks",
        "Computer Bags",
        "Lunch Bags",
        "Messenger Bags",
        "Briefcases & Attaches",
      ],
    },
    {
      title: "OUTDOOR & FITNESS",
      items: [
        "Coolers",
        "Gym Bags",
        "Duffle Bags",
        "Picnic Baskets",
      ],
    },
    {
      title: "TRAVEL",
      items: [
        "Carryon Bags",
        "TSA Approved",
        "Suitcases",
        "Toiletries",
        "Garment Bags",
        "Fanny Packs",
      ],
    },
    {
      title: "SHOP BY MATERIAL",
      items: [
        "Paper Bags",
        "Plastic Bags",
        "Recycled Material",
      ],
    },
    
  ],
  
},
{
  "name": "Drinkware",
  "menu": [
      {
          "title": "TRAVEL",
          "items": [
              "Travel Mugs",
              "Tumblers",
              "Thermos",
              "Beverage Insulators",
              "BPA Free Bottles",
              "Water Bottles"
          ]
      },
      {
          "title": "HOME & OFFICE",
          "items": [
              "Mugs",
              "Tumblers",
              "Paper Cups",
              "Plastic Cups",
              "Thermos",
              "Tea Cups",
              "Coasters",
              "Caraffes"
          ]
      },
      {
          "title": "BEER & WINE",
          "items": [
              "Wine Glasses",
              "Beer Steins",
              "Shot Glasses",
              "Beverage Insulators",
              "Openers"
          ]
      },
      {
          "title": "RESTAURANT/BAR",
          "items": [
              "Plastic Cups",
              "Glasses",
              "Wine Glasses",
              "Beer Steins",
              "Shot Glasses",
              "Coasters",
              "Caraffes",
              "Openers"
          ]
      },
      {
          "title": "SPORTS & OUTDOORS",
          "items": [
              "Plastic Cups",
              "Styrofoam Cups",
              "Beverage Insulators",
              "BPA Free Bottles",
              "Thermos",
              "Tumblers",
              "Water Bottles"
          ]
      },
      {
          "title": "STRAWS",
          "items": [
              "Plastic",
              "Paper",
              "Reusable"
          ]
      }
  ]
}
];

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (firstLoad && menuCategories.length > 0) {
      setActiveMenu(menuCategories[0].name);
      setFirstLoad(false);
    }
  }, [firstLoad]);

  return (
    <>
      {!isMobile ? (
        <div className=" w-full bg-[#F3F4F6] text-[#667085]">
          <div className="flex items-center w-full max-w-[1504px] border-b">
            {menuCategories.map((category) => (
              <div key={category.name} className="">
                <button
                  onClick={() => {
                    if (firstLoad) setFirstLoad(false);
                    setActiveMenu(
                      activeMenu === category.name ? null : category.name
                    );
                  }}
                  className={`flex cursor-pointer items-center gap-1 font-medium text-[16px] leading-[20px] hover:bg-[#003C74] hover:text-white transition-colors duration-300 py-[18px] px-[32px] ${
                    activeMenu === category.name
                      ? "bg-[#003C64] text-white"
                      : ""
                  }`}
                >
                  {category.name}

                  <ChevronDown
                    size={16}
                    className={`h-4 w-4 ml-2 transition-transform  ${
                      activeMenu === category.name
                        ? "rotate-180 text-white"
                        : ""
                    }`}
                  />
                </button>

                {activeMenu === category.name && (
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-full z-50 w-full max-w-[1504px] bg-white border-b border-l border-r shadow-lg flex flex-row flex-wrap items-start p-[16px_32px_32px_32px] rounded-b-[16px] ${
                      category.menu.length === 6
                        ? "justify-between gap-2"
                        : "justify-start gap-[150px]"
                    }`}
                  >
                    {category.menu.map((section, index) => (
                      <div key={index} className="max-w-max ">
                        <h4 className="font-semibold  text-[14px] lg:text-[16px] leading-[20px]  py-[14px] text-[#000D16] mb-2 pb-1 uppercase mb-8px relative inline-block">
                          {section.title}
                          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#000D16]"></span>
                        </h4>

                        <ul className="space-y-1 text-sm text-gray-700">
                          {section.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="mt-4 text-[14px] lg:text-[16px] leading-[20px] text-[#000D16] hover:text-blue-600 hover:underline cursor-pointer"
                            >
                              <Link href={"#"}> {item} </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="border-t w-full  text-[#667085]">
          <div className="flex items-center flex-col w-full border-b">
            {menuCategories?.map((category) => (
              <div key={category.name} className="w-full">
                <button
                  onClick={() => {
                    setActiveMenu(
                      activeMenu === category.name ? null : category.name
                    );
                  }}
                  className={`w-full flex cursor-pointer justify-between items-center gap-1 font-medium text-[14px] leading-[16px] hover:bg-[#003C74] hover:text-white transition-colors duration-300 py-2 px-2 ${
                    activeMenu === category.name
                      ? "bg-[#003C64] text-white"
                      : " border-b "
                  }`}
                >
                  {category.name}

                  <ChevronDown
                    size={16}
                    className={`h-4 w-4 ml-2 transition-transform  ${
                      activeMenu === category.name
                        ? "rotate-180 text-white"
                        : ""
                    }`}
                  />
                </button>

                {activeMenu === category.name && (
                  <div
                    className={`  w-full  bg-white flex flex-row flex-wrap items-start p-4  ${
                      category.menu.length === 6
                        ? "justify-between gap-2"
                        : "justify-start gap-[150px]"
                    }`}
                  >
                    {category.menu.map((section, index) => (
                      <div key={index} className="max-w-max ">
                        <h4 className="font-semibold  text-[12px]  leading-[16px]  py-2 text-[#000D16] pb-1 uppercase mb-8px relative inline-block">
                          {section.title}
                          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#000D16]"></span>
                        </h4>

                        <ul className="space-y-1 text-sm text-gray-700">
                          {section.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="mt-2 text-[12px] leading-[16px] text-[#000D16] hover:text-blue-600 hover:underline cursor-pointer"
                            >
                              <Link href={"/"}> {item} </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
