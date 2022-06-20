import { HiOutlineShoppingCart, HiStar, HiOutlineStar } from "react-icons/hi";
import { TbCash } from "react-icons/tb";
import CarouselForImages from "../components/CarouselForImages";
import { Carousel } from "react-carousel-minimal";
import CustomerOpinion from "../components/CustomerOpinion";
import ProductCard from "../components/ProductCard";
import Ratings from "../components/RatingStars";
import { data } from "../components/shared";
import Slider from "../components/Slider";
import { useEffect, useState } from "react";

// import Slider from "react-slick";

const photos = [
  { id: 1, link: "http://via.placeholder.com/100" },
  { id: 2, link: "http://via.placeholder.com/100" },
  { id: 3, link: "http://via.placeholder.com/100" },
];

const productPhotos = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
  },
  {
    image:
      "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
  },
  {
    image:
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
  },
  {
    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
  },
];

const ProductHead = () => {
  return (
    <div className="mt-2 w-full">
      <h1 className="xs:text-lg lg:text-4xl font-bold">
        نموذج لاسم المنتج في هذه المساحة
      </h1>
      <h2 className="mt-7 mb-5 xs:text-normal lg:text-3xl font-bold text-red-500">
        200 ر.س
      </h2>
    </div>
  );
};

const ProductDes = () => {
  return (
    <div className="w-full">
      <h3 className="mb-3 text-gray-400 font-semibold text-xl">معلومات عامة</h3>
      <p className="text-justify h-4/5 flex-shrink text-ellipsis xs:text-base xl:text-lg mb-5">
        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
        النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
        النصوص الأخرى ...
      </p>
      <hr />
    </div>
  );
};

const PurchaseControls = () => {
  return (
    <div className="my-8 gap-3 h-28 flex flex-col md:flex-row justify-between items-center">
      <div className="px-2 w-full md:max-h-[90px] hover:scale-[1.01] hover:cursor-pointer bg-[#FF4E00] h-full flex gap-2 justify-center items-center">
        <HiOutlineShoppingCart className="text-white w-[20px] md:w-[30px]  lg:w-[40px] h-[20px] md:h-[30px] lg:h-[40px]" />
        <span className="text-white font-semibold text-[14px] md:text-[22px] lg:text[25px]">
          أضف للسلة
        </span>
      </div>
      <div className="px-2 w-full hover:scale-[1.01] md:max-h-[90px] hover:cursor-pointer bg-gray-900 h-full flex gap-2 justify-center items-center">
        <TbCash className="text-white w-[20px] md:w-[30px]  lg:w-[40px] h-[20px] md:h-[30px] lg:h-[40px]" />
        <span className="text-white text-[14px] md:text-[22px] lg:text[25px] font-semibold">
          شراء الان
        </span>
      </div>
    </div>
  );
};

const Offer = () => {
  const offers = [
    { qunt: 1, originalPrice: " ر.س 200", offer: "ر.س 90" },
    { qunt: 2, originalPrice: " ر.س 200", offer: "ر.س 90" },
    { qunt: 3, originalPrice: " ر.س 200", offer: "ر.س 90" },
  ];
  return (
    <div className="mt-4">
      <h3 className="mb-3 text-gray-400 font-bold text-xl">
        اشتري كمية اكبر ووفر اكثر
      </h3>
      <div className="flex justify-start gap-2">
        {offers.map((el) => {
          return (
            <div className="border shadow-sm font-semibold p-3 hover:cursor-pointer hover:bg-[#f8e3dc]">
              <p>{el.qunt} قطعة</p>
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
        <div className="flex w-full flex-col md:flex-row md:flex-wrap justify-between items-start gap-3 md:items-center">
          <div className="w-full flex flex-col md:flex-row gap-5 justify-between">
            <span className="font-bold">
              أو قسمها على 4 دفعات شهرية بقيمة 40 ر.س
            </span>
            <img
              width="70px"
              src={require("../assets/images/tabby.png")}
              alt="taddy"
            />
          </div>
          <p className="underline hover:text-blue-400 font-semibold text-sm my-1 hover: cursor-pointer">
            إعرف المزيد
          </p>
        </div>
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <div className="w-full">
      <h3 className="font-bold xs:text-lg md:text-3xl">شرح التفاصيل</h3>
      <div className="h-0.5 bg-gray-300 w-full my-4"></div>
      <p className="text-justify line-clamp-3 text-ellipsis md:line-clamp-4">
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

const ProductsGrid = () => {
  return (
    <>
      {data.slice(0, 4).map((el) => {
        return <ProductCard id={el.id} link={el.image} />;
      })}
    </>
  );
};

const ProductDetails = () => {
  const [dims, setDims] = useState(window.innerHeight);
  const [rows, rowsSet] = useState(1);
  useEffect(() => {
    window.addEventListener("resize", (e) => setDims(window.innerWidth));
    dims > 560 ? rowsSet(1) : rowsSet(2);
    console.log("dims= ", dims);
    return (_) => {
      window.removeEventListener("resize", (e) => setDims(window.innerWidth));
    };
  });

  return (
    <div className="container mx-auto py-3 px-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div dir="ltr" className=" h-fit">
          <Carousel
            data={productPhotos}
            // time={2000}
            width="750px"
            height="500px"
            // captionStyle={captionStyle}
            radius="10px"
            // slideNumber={true}
            // slideNumberStyle={slideNumberStyle}
            // captionPosition="bottom"
            // automatic={true}
            dots={true}
            // pauseIconColor="white"
            // pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "750px",
              maxHeight: "550px",
            }}
          />
        </div>
        <div>
          <div className="flex flex-col flex-nowrap gap-2 xs:justify-start md:justify-between ">
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
        <h2 className="mb-4 w-full text-center md:text-right font-bold text-[24px] md:text-[45px]">
          منتجات مشابهة
        </h2>
        <div className="hidden md:block">
          <Slider
            rows={1}
            slides={dims > 1150? 3 : 2}
            autoPlay={false}
            comp={data.map((el) => (
              <ProductCard id={el.id} link={el.image} />
            ))}
          />
        </div>
        <div className="md:hidden grid gap-4  grid-cols-2  grid-rows-2 grid-flow-row-dense w-full mx-auto">
          <ProductsGrid />
        </div>
      </div>
      <div className="flex flex-col mt-24  pb-2  w-full">
        <h2 className="mb-4 w-full text-center md:text-right font-bold text-[24px] md:text-[45px]">
          أراء العملاء
        </h2>
        <Slider
          type="opinion"
          slides={dims > 768 ? 3 : 1}
          autoPlay={true}
          comp={data.map((el) => (
            <CustomerOpinion id={el.id} link={el.image} />
          ))}
        />
      </div>
      <div className="h-96 mt-32 border-t-2"></div>
    </div>
  );
};
export default ProductDetails;
