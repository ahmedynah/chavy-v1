import AdsBlocks from "../components/AdsBlocks";
import CarouselForImages from "../components/CarouselForImages";
import { bannerColData } from "../components/shared";
import VerticalSlider from "../components/VerticalSlider";
import { RiCustomerService2Line } from "react-icons/ri";
import { data } from "../components/shared";
import ProductCard from "../components/ProductCard";
const BannerColumns = () => {
  return bannerColData.map((el) => {
    return (
      <div className="flex justify-center items-center border p-10 max-h-48 border-gray-300 text-gray-500">
        <RiCustomerService2Line className="m-7 text-gray-300  w-[120px] h-[120px]" />
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-black text-[16px] md:text-[20]">
            {el.title}
          </h3>
          <p className="text-[12px] md:text-[14px] text-[#404040]">{el.des}</p>
        </div>
      </div>
    );
  });
};

const CatNav = () => {
  const cats = ["رجالي", "حريمي", "زوجي", "مخفض"];
  return cats.map((el) => {
    return (
      <li key={el} className="hover:text-[#FF4E00] text-plain-gray">
        <p className="text-xl font-bold cursor-pointer ">{el}</p>
      </li>
    );
  });
};

const ItemsGrid = () => {
  return (
      data.map((el, index) => {
        if ( index < 6)
        return (
            <ProductCard link={el.image} />
        )
        else 
        return (<></>)
        
      })
  );
};

const HomePage = () => {
  return (
    <div className="w-full flex items-center flex-col h-screen">
      <div className="flex w-full h-4/6 border-2">
        <VerticalSlider />
      </div>
      <div className="container">
        <div className="flex mx-auto my-6">
          <AdsBlocks />
        </div>
        <div className="items-center flex flex-col lg:flex-row w-full  lg:flex-nowrap gap-5 justify-between my-16 ">
          <BannerColumns />
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-4 ">
          <h3 className="text-[24px] md:text-[60px] text-plain-gray font-bold mb-10">
            افضل المبيعات
          </h3>
          <ul className="flex w-full list-none justify-center items-center gap-16 border-b-2 pb-6">
            <CatNav />
          </ul>

          <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 grid-rows-2 grid-flow-row  w-full mx-auto">
            {/* <MultiRowSwiper data={data}/> */}
            <ItemsGrid />
          </div>

          <div className="h-52 md:h-72 w-full flex flex-col justify-center items-center bg-[#B2B2B2] my-16">
            <p className="text-white text-[20px] md:text-[60px] text-center w-full">
              انضم إلى النشرة الإخبارية لدينا الآن.
            </p>
            <p className="text-white text-2xl text-[20px] md:text-[60px] leading-relaxed font-bold text-center w-full">
              بحد أقصى 70. كل المبيعات نهائية!
            </p>
          </div>
          <h3 className="text-[24px] md:text-[60px] text-plain-gray font-bold mb-10">
            افضل المبيعات
          </h3>
          <ul className="flex w-full list-none justify-center items-center gap-16 border-b-2 pb-6">
            <CatNav />
          </ul>
          <div className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3 grid-rows-2 grid-flow-row-dense w-full mx-auto">
            {/* <MultiRowSwiper data={data}/> */}
            <ItemsGrid />
          </div>
          <div className="h-96 mt-32 w-full border-t-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
