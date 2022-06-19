import AdsBlocks from "./AdsBlocks";
import CarouselForImages from "./CarouselForImages";
import { bannerColData } from "./shared";
import VerticalSlider from "./VerticalSlider";
import { RiCustomerService2Line } from "react-icons/ri";
import MultiRowSwiper from "./MultiRowSwiper";
import {data} from './shared'
import Gallery from "./MultiRowSwiper";
const BannerColumns = () => {
  return bannerColData.map((el) => {
    return (
      <div className="flex justify-center items-center border p-10 max-h-48 border-gray-300 text-gray-500">
        <RiCustomerService2Line className="m-7 text-gray-400 text-9xl" />
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-black text-lg md:text-xl">
            {el.title}
          </h3>
          <p>{el.des}</p>
        </div>
      </div>
    );
  });
};

const CatNav = () => {
  const cats = ["رجالي", "حريمي", "زوجي", "مخفض"];
  return cats.map((el) => {
    return (
      <li key={el}>
        <p className="text-xl font-bold">{el}</p>
      </li>
    );
  });
};

const HomePage = () => {
  return (
    <div className="w-full flex items-center flex-col h-screen">
      <div className="flex w-full h-1/2 border-2">
        <VerticalSlider />
      </div>
      <div className="container">
        <div className="flex mx-auto my-6">
          <AdsBlocks />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-5 justify-between my-16 ">
          <BannerColumns />
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-4 ">
          <h3 className="text-4xl text-gray-500">افضل المبيعات</h3>
          <ul className="flex w-full list-none justify-center items-center gap-16">
            <CatNav />
          </ul>
          <div className="flex w-full mx-auto border">
            {/* <MultiRowSwiper data={data}/> */}
            <Gallery/>
          </div>
          <div className="h-52 md:h-72 w-full flex flex-col justify-center items-center bg-gray-300 my-16">
            <p className="text-white text-2xl text-center w-full">انضم إلى النشرة الإخبارية لدينا الآن.</p>
            <p className="text-white text-2xl md:text-6xl font-bold text-center w-full">بحد أقصى 70. كل المبيعات نهائية!</p>
          </div>
          <div className="flex w-full mx-auto border">
            {/* <MultiRowSwiper data={data}/> */}
            <Gallery/>
          </div>
          <div className="h-96 mt-32 w-full border-t-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
