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
        <Link href={'/tshirts/short-sleeve'} key={category?.id}>
  <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <CardContent className={`p-0 ${removeQuotes(category.bgColor)} h-[300px] flex`}>
      {/* Left section for text */}
      <div className="w-1/3 flex items-end p-4">
        <h2 className="text-md font-semibold text-gray-800">{category.name}</h2>
      </div>

      {/* Right section for image */}
      <div className="w-full h-full overflow-hidden flex items-center justify-center">
        <Image
          src={category.image}
          alt={category.name}
          height={230}
          width={300}
          className="w-[200px] h-[230px] object-cover transition-transform duration-300 group-hover:scale-105"
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
