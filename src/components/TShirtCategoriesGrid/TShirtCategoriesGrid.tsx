"use client";
import { Card, CardContent } from "@/components/ui/card";
import TshirtsData from "@/lib/category.json";
import Image from "next/image";
import Link from "next/link";

const removeQuotes = (className: string): string => {
  return className.replace(/"/g, "");
};

const TShirtCategoriesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {TshirtsData?.map((category) => (
        <Link href={'/tshirts/short-sleeve-tshirts'} key={category?.id}>
          <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <CardContent className={`p-0 ${removeQuotes(category.bgColor)} h-[300px] flex flex-col lg:flex-row p-4 group-hover:bg-opacity-80 transition-colors duration-300`}>
              {/* Left section for text */}
              <div className="w-full flex items-end p-4">
                <h2 className="text-lg font-semibold text-gray-800 transition-all duration-300 transform group-hover:translate-x-2 group-hover:scale-105 group-hover:text-blue-600">
                  {category.name}
                </h2>
              </div>

              {/* Right section for image */}
              <div className="w-full h-full overflow-hidden flex items-center justify-center p-4">
                <Image
                  src={category.image}
                  alt={category.name}
                  height={230}
                  width={350}
                  className="w-[300px] h-[230px] mb-4 transition-transform duration-300 object-scale-down group-hover:scale-105 mix-blend-multiply"
                />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default TShirtCategoriesGrid;
