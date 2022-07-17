import { bannerColData } from "../../utils/constants/shared";
import { RiCustomerService2Line } from "react-icons/ri";
import {
  ProductCard,
  VerticalSlider,
  CarouselForImages,
  AdsBlocks,
} from "../../components";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import ProductContext from "../../utils/contexts/ProductsContext";
import { WooCommerce } from "../../config/woocommerce-rest-api/woocommerce.config";
import { Link } from "react-router-dom";
import { useFetch } from "../../utils/index";
import AppDataContext from "../../utils/contexts/AppDataContext";

const BannerColumns = () => {
  return bannerColData.map((el) => {
    return (
      <div
        key={el.title}
        className="flex justify-center items-center border p-10 max-h-48 border-gray-300 text-gray-500"
      >
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

const tabsData = [
  {
    label: "رجالي",
    value: 1,
  },
  {
    label: "حريمي",
    value: 2,
  },

  {
    label: "زوجي",
    value: 3,
  },

  {
    label: "مخفض",
    value: 4,
  },
];

const ItemsGrid = () => {
  const { products } = useContext(ProductContext);

  return !products ? (
    <></>
  ) : (
    products.map((el, index) => {
      if (index < 6)
        return (
          <ProductCard
            key={el.id}
            id={el.id}
            name={el.name}
            price_html={el.price_html}
            price={el.price}
            link={el.images.length === 0 ? "" : el.images[0].src}
            product={el}
          />
        );
      else return <></>;
    })
  );
};

const HomePage = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [selectedTab, setSelectedTab] = useState(1);
  const { appData } = useContext(AppDataContext);
  const [appCurrency, setAppCurrency] = useState("ر.س");

  useEffect(() => {}, [appData, products]);
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
          <Tabs value={1}>
            <TabsHeader className="my-5 py-2 w-2/3 mx-auto border-b border-gray-300 rounded-none">
              {tabsData.map(({ label, value }) => (
                <Tab
                  onClick={() => setSelectedTab(value)}
                  className={
                    selectedTab === value
                      ? "font-semibold text-orange-600"
                      : "font-semibold"
                  }
                  key={value}
                  value={value}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {tabsData.map(({ value }) => (
                <TabPanel key={value} value={value}>
                  <div className="grid gap-4 md:gap-y-6 md:gap-x-3 grid-cols-2 md:grid-cols-3 grid-rows-2 grid-flow-row  w-full mx-auto">
                    <ItemsGrid />
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>

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
          <Tabs value={1}>
            <TabsHeader className="my-5 py-2 w-2/3 mx-auto border-b border-gray-300 rounded-none">
              {tabsData.map(({ label, value }) => (
                <Tab
                  onClick={() => setSelectedTab(value)}
                  className={
                    selectedTab === value
                      ? "font-semibold text-orange-600"
                      : "font-semibold"
                  }
                  key={value}
                  value={value}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody>
              {tabsData.map(({ value }) => (
                <TabPanel key={value} value={value}>
                  <div className="grid gap-4 md:gap-y-6 md:gap-3 grid-cols-2 md:grid-cols-3 grid-rows-2 grid-flow-row  w-full mx-auto">
                    <ItemsGrid />
                  </div>
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
          <div className="h-96 mt-32 w-full border-t-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
