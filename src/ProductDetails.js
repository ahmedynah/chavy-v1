import { HiOutlineShoppingCart, HiStar, HiOutlineStar } from "react-icons/hi";
import { TbCash } from "react-icons/tb";
import CarouselForImages from "./CarouselForImages";
import CustomerOpinion from "./CustomerOpinion";
import ProductCard from "./ProductCard";
import Ratings from "./RatingStars";
import { data } from "./shared";
import Slider from "./Slider";
// import Slider from "react-slick";

const photos = [
  { id: 1, link: "http://via.placeholder.com/100" },
  { id: 2, link: "http://via.placeholder.com/100" },
  { id: 3, link: "http://via.placeholder.com/100" },
];

// const MainImg = () => {
//   return (
// {photos.map((el) => {
//   return (
//     <div key={el.id}>
//       <img src={el.link} alt="" />
//       <p className="legend">Legend {el.id}</p>
//     </div>
//   );
// })}
//   );
// };

const Reel = () => {
  return (
    <div className="w-4/5 flex mx-auto justify-center p-2 overflow-x-auto gap-2 items-center">
      {data.map((el) => {
        return (
          <div className="relative">
            <img
              key={el.id}
              src={el.image}
              alt=""
              width="150px"
              height="150px"
              className="aspect-square opacity-75 hover:opacity-100 hover:cursor-pointer hover:border-2 hover:rounded-sm hover:border-[#FF5910] hover:scale-[1.1] object-cover"
            ></img>
          </div>
        );
      })}
    </div>
  );
};

const ProductHead = () => {
  return (
    <div className="mt-2 w-full">
      <h1 className="xs:text-lg lg:text-6xl font-bold">Esm El product</h1>
      <h2 className="mt-7 mb-5 xs:text-normal lg:text-4xl font-bold text-red-500">
        200 KSR
      </h2>
    </div>
  );
};

const ProductDes = () => {
  return (
    <div className="w-full">
      <h3 className="mb-3 text-gray-400 font-bold text-xl">General Info</h3>
      <p className="text-justify h-4/5 overflow-auto flex-shrink text-ellipsis xs:text-normal xl:text-lg mb-5">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <hr />
    </div>
  );
};

const PurchaseControls = () => {
  return (
    <div className="my-8 border gap-3 h-20 flex justify-between items-center">
      <div className="px-2 w-full hover:scale-[1.01] hover:cursor-pointer bg-[#FF4E00] h-full flex gap-2 justify-center items-center">
        <HiOutlineShoppingCart className="text-white xs:text-lg lg:text-3xl" />
        <span className="text-white font-semibold lg:text-xl">
          Add to basket
        </span>
      </div>
      <div className="px-2 w-full hover:scale-[1.01] hover:cursor-pointer bg-black h-full flex gap-2 justify-center items-center">
        <TbCash className="text-white text-3xl" />
        <span className="text-white font-bold">Buy Now</span>
      </div>
    </div>
  );
};

const Offer = () => {
  const offers = [
    { qunt: 1, originalPrice: " KSR 200", offer: "KSR 90" },
    { qunt: 2, originalPrice: " KSR 200", offer: "KSR 90" },
    { qunt: 3, originalPrice: " KSR 200", offer: "KSR 90" },
  ];
  return (
    <div className="mt-4">
      <h3 className="mb-3 text-gray-400 font-bold text-xl">
        Buy More, Save More
      </h3>
      <div className="flex justify-start gap-2">
        {offers.map((el) => {
          return (
            <div className="border shadow-sm font-semibold p-3 hover:cursor-pointer hover:bg-[#f8e3dc]">
              <p>{el.qunt} pieces</p>
              <span className="text-[#FF5910]">{el.offer}</span>
              <span className="text-gray-400 line-through text-xs px-2">
                {el.originalPrice}
              </span>
            </div>
          );
        })}
      </div>
      <PurchaseControls />
      <div>
        <span className="font-bold">
          أو قسمها على 4 دفعات شهرية بقيمة 40 ر.س
        </span>
        <p className="underline hover:text-blue-400 font-semibold text-sm my-1 hover: cursor-pointer">
          إعرف المزيد
        </p>
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <div className="w-full overflow-y-auto">
      <h3 className="font-bold xs:text-lg md:text-3xl">شرح التفاصيل</h3>
      <div className="h-0.5 bg-gray-300 w-full my-4"></div>
      <p>
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا ...النص أو العديد من
        النصوص الأخرى هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم
        توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
        العديد من النصوص الأخرى هذا النص هو مثال لنص يمكن أن يستبدل في نفس
        المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد
        مثل هذا النص أو العديد من النصوص الأخرى هذا النص هو مثال لنص يمكن أن
        يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث
        يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
      </p>
    </div>
  );
};

const ProductDetails = () => {
  return (
    <div className="xs:p-3 md-p-0">
      <div className="flex flex-wrap ">
        <div className="xs:w-full md:w-3/5 xs:mb-4 md:mb-0 flex flex-col  gap-4">
          <div className="w-full h-fit">
            <CarouselForImages />
          </div>
          <div className="w-full flex">
            <Reel />
          </div>
        </div>
        <div className="xs:w-full md:w-2/5 ">
          <div className="flex flex-col flex-nowrap gap-2 xs:justify-start md:justify-between">
            <Ratings />
            <ProductHead />
            <ProductDes />
            <Offer />
          </div>
        </div>
      </div>
      <div className="flex mt-10">
        <Details />
      </div>
      <div className="flex flex-col mt-10 w-full">
        <h2 className="mb-4 font-bold xs:text-lg md:text-2xl">منتجات مشابهة</h2>
        <Slider comp={data.map(el => <ProductCard id={el.id} link= {el.image} />)} />
      </div>
      <div className="flex flex-col mt-60  pb-2  w-full">
        <h2 className="mb-4 font-bold xs:text-lg md:text-2xl">أراء العملاء</h2>
        <Slider comp={data.map(el => <CustomerOpinion id={el.id} link= {el.image}/>)} />
      </div>
      <div className="h-96 mt-32 border-t-2"></div>
    </div>
  );
};
export default ProductDetails;
