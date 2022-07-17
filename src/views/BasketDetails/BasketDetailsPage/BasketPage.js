import {
  Button,
  Checkbox,
  Input,
  // Option,
  // Select,
} from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { basketItems } from "../../../utils/constants/shared";
import { reactLocalStorage } from "reactjs-localstorage";
import AppDataContext from "../../../utils/contexts/AppDataContext";
import BasketContext from "../../../utils/contexts/BasketContext";
import ShippingInfo from "../ShippingInfo.js/ShippingForm";
import { Outlet, useLocation, useNavigate, useOutlet, useRoutes } from "react-router-dom";

const BasketItem = (props) => {
  useEffect(() => {
    console.log(props.image, "iiiiiiiiiiiii")
  },[props])
  return (
    <div className="w-full h-[80px] flex justify-start gap-4 items-start">
      <div
        className="w-[80px] h-[80px]"
        style={{
          backgroundImage:
            `url(${props.image})`,
            backgroundSize: "cover"
        }}
      ></div>
      <div className="h-full flex flex-col justify-start items-start">
        <h3 className="font-semibold text-[14px] text-right line-clamp-2">
          {props.title}
        </h3>
        <span className="mt-auto text-[#148BE7] font-bold text-[14px]">
          {props.price} {props.currency}
        </span>
      </div>
    </div>
  );
};
const Coupon = (props) => {
  const [text, setText] = useState("");

  return (
    <form className="w-full mt-3 flex">
      <Input
        className="w-full h-[48px]  outline-none rounded-r-md border-1 bg-slate-100 focus:bg-white placeholder:text-[14px]"
        type="text"
        placeholder="أدخل الكود او الكوبون"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <Button
        style={{ borderTopRightRadius: "0px", borderBottomRightRadius: "0px" }}
        className="bg-[#148BE7] text-[14px] "
      >
        تطبيق
      </Button>
    </form>
  );
};

const InfoItem = (props) => {
  // {"مبلغ إجمالي"}
  useEffect((e) => {
    console.log(props.classes);
  });
  return (
    <div
      className={`flex justify-between w-full items-center ${props.classes[0]}`}
    >
      <p className={`text-[16px] ${props.classes[1]}`}>{props.title}</p>
      <p className={`text-[16px] ${props.classes[2]}`}>{props.price}</p>
    </div>
  );
};

const Info = ({items}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);
  const {currency, specific_allowed_countries, specific_ship_to_countries} = useContext(AppDataContext)

  useEffect(() => {
    console.log("items = ", items.map(el => el.price).reduce((prev, cur) => {
      console.log("prev",prev, "curr", cur)
      return parseFloat( prev )+ parseFloat( cur )}, 0))
    // setTax();
    setShipping(20);
    setTotalPrice(items.map(el => el.price).reduce((prev, cur) => parseFloat( prev )+ parseFloat( cur ), 0));
    setTotal(totalPrice + tax + shipping);
  }, [totalPrice, shipping, tax]);
  return (
    <>
      <InfoItem
        title="مبلغ إجمالي"
        price={`${totalPrice.toLocaleString("en")} ${currency || "ر.س"}`}
        classes={["", "text-[#707070]", "text-[#707070]"]}
      />
      <InfoItem
        title="شحن"
        price={`${shipping.toLocaleString("en")} ${currency || "ر.س"}`}
        classes={["", "text-[#707070]", "text-[#707070]"]}
      />
      <InfoItem
        title="الضرائب"
        price={`${tax.toLocaleString("en")} ${currency || "ر.س"}`}
        classes={["", "text-[#707070]", "text-[#707070]"]}
      />
      <InfoItem
        title="الاجمالي"
        price={`${total.toLocaleString("en")} ${currency || "ر.س"}`}
        classes={["mt-4", "font-bold text-black", "text-[#148BE7] font-bold"]}
      />
    </>
  );
};


const Basket = () => {
  const {currency} = useContext(AppDataContext)
  const {basket, setBasket, setBasketUpdateFlag} = useContext(BasketContext)
  const [items, setItems] = useState(basket?basket:[]);
  useEffect(() => {
    
    setItems((basket instanceof Array)? basket: null)
    console.log(items, typeof items)
    // console.log(basket)
  }, [])
  return (
    <>
      <h3 className="md:hidden w-full  text-[16px] my-5 font-semibold">طلبك</h3>
      <div className="flex w-full flex-col gap-4 max-h-[380px] justify-start items-center overflow-y-auto">
        {items.length> 0? items.map((el) => (
          // console.log(el)

          // <></>
          <BasketItem currency={currency} image={el.images.length?el.images[0].src:""} title={el.name} price={el.price} />
        )): null}
      </div>
      <div className="w-full">
        <Coupon />
      </div>
      <div className="bg-[#B2B2B2] w-full h-[2px] my-6"></div>
      <div className="w-full flex-col justify-start mt-auto items-start">
        <Info items = {items}/>
      </div>
    </>
  );
};

const BasketDetails = (props) => {
  const navigate= useNavigate()
  return (
    <div className="container mx-auto mt-6">
      <h1 className="w-full text-[24px] md:text-[38px] my-4 font-bold">
        السلة
      </h1>
      <div className="hidden h-[90px] md:bg-[#F1F1F1] gap-16 md:flex justify-between items-center ">
        <h3 className="w-full text-[16px] md:text-[25px] my-5 font-semibold">
          معلومات الشحن
        </h3>
        <h3 className="w-full text-[16px] md:text-[25px] my-5 font-semibold">
          طلبك
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-7">
        <div className={`${useLocation().pathname === "/basket/payment"? "order-3": "md:order-3"}  w-full flex flex-col mt-6 justify-start items-start`}>
          <Basket />
        </div>
        <div className="hidden md:block md:order-2 bg-gray-200 w-[2px] h-full mt-6"></div>
        <div className={`w-full ${useLocation().pathname === "/basket/payment"? "order-1": "md:order-1"} flex flex-col mt-6 justify-start items-start`}>
          <Outlet/>
        </div>
        {useLocation().pathname === "/basket/payment"?
        <div className="md:hidden order-4 flex gap-3 w-full text-[14px] md:text-[25px] font-semibold flex-wrap md:flex-nowrap justify-between pb-3">
        <Button ocClick= {()=>{
                  navigate("/basket/info")
        }} className="w-full md:h-[60px] rounded-none md:text-[20px] flex justify-center items-center h-[40px] text-[14px] font-semibold bg-transparent outline-black border-2 border-black">
          <span className="text-black">العودة إلى السلة{" "}</span>
          <span className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.565"
              height="16.559"
              viewBox="0 0 16.565 16.559"
            >
              <path
                id="Path_48"
                data-name="Path 48"
                d="M13.713,12.441a1.648,1.648,0,0,0,1.449-.853l2.964-5.373a.825.825,0,0,0-.72-1.225H5.152L4.374,3.333H1.667V4.989H3.323L6.3,11.273l-1.118,2.02a1.659,1.659,0,0,0,1.449,2.459H16.57V14.1H6.634l.911-1.656Zm-7.774-5.8H16l-2.285,4.14H7.9Zm.7,9.935A1.656,1.656,0,1,0,8.29,18.236,1.654,1.654,0,0,0,6.634,16.58Zm8.279,0a1.656,1.656,0,1,0,1.656,1.656A1.654,1.654,0,0,0,14.914,16.58Z"
                transform="translate(-1.667 -3.333)"
                fill="#262626"
              />
            </svg>
          </span>
          <span className="hidden md:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.346"
              height="33.333"
              viewBox="0 0 33.346 33.333"
            >
              <path
                id="Path_2"
                data-name="Path 2"
                d="M25.917,21.667a3.318,3.318,0,0,0,2.917-1.717L34.8,9.133a1.66,1.66,0,0,0-1.45-2.467H8.683L7.117,3.333H1.667V6.667H5l6,12.65L8.75,23.383a3.339,3.339,0,0,0,2.917,4.95h20V25h-20L13.5,21.667ZM10.267,10h20.25l-4.6,8.333h-11.7Zm1.4,20A3.333,3.333,0,1,0,15,33.333,3.329,3.329,0,0,0,11.667,30Zm16.667,0a3.333,3.333,0,1,0,3.333,3.333A3.329,3.329,0,0,0,28.333,30Z"
                transform="translate(-1.667 -3.333)"
                fill="#262626"
              />
            </svg>
          </span>
        </Button>
        <Button className="w-full md:h-[60px] rounded-none md:text-[20px] flex justify-center items-center h-[40px] text-[14px] font-semibold bg-[#FF4E00]">
          ادفع الآن
        </Button>
      </div>
        :null}
      </div>
      <div className="bg-gray-200 h-[2px] w-full mt-5 mb-96"></div>
    </div>
  );
};
export default BasketDetails;
