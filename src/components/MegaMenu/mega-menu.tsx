"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";


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
        title: "OFFICE WEAR",
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
        title: "OFFICE WEAR2",
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
        title: "OFFICE WEAR3",
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
        title: "OFFICE WEAR4",
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
        title: "OUTER WEAR",
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
    ],
  },
  {
    name: "Accessories",
    menu: [
      {
        title: "HEAD WEAR",
        items: ["Caps", "Hats", "Beanies", "Visors", "Bandannas", "Youth"],
      },
      {
        title: "BOTTOMS",
        items: ["Pants", "Shorts", "Denim", "Skirts", "Youth"],
      },
    ],
  },
  {
    name: "More",
    menu: [
      {
        title: "MORE",
        items: [
          "Sunglasses",
          "Active wear",
          "Aprons",
          "Gloves",
          "Infant wear",
          "Dresses",
          "Watches",
          "Shoes",
        ],
      },
    ],
  },
];

export default function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad && menuCategories.length > 0) {
      setActiveMenu(menuCategories[0].name);
      setFirstLoad(false);
    }
  }, [firstLoad]);

  return (
    <div className="shadow-lg border-t w-full bg-[#F3F4F6] text-[#667085]">
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
                activeMenu === category.name ? "bg-[#003C64] text-white" : ""
              }`}
            >
              {category.name}

              <ChevronDown
                size={16}
                className={`h-4 w-4 ml-2 transition-transform  ${
                  activeMenu === category.name ? "rotate-180 text-white" : ""
                }`}
              />
            </button>

            {activeMenu === category.name && (
              <div className={`absolute left-1/2 -translate-x-1/2 top-full z-50 w-full max-w-[1504px] bg-white border-b border-l border-r shadow-lg flex flex-row flex-wrap items-start p-[16px_32px_32px_32px] rounded-b-[16px] ${
                category.menu.length === 6 ? 'justify-between gap-2' : 'justify-start gap-[150px]'
              }`}>
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
                      <Link href={'#'} >   {item}  </Link>

                     
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
  );
}
