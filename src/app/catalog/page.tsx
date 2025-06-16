import BrandsSlider from "@/components/BrandSlider";
import Tshirts from "@/components/TShirts";

const CategoryPage = () => {
  return (
    <>
  
      <div className="py-[100px] container mx-auto px-4">
      <Tshirts />
      <BrandsSlider />
   
    </div>
   
    </>
  );
};

export default CategoryPage;
