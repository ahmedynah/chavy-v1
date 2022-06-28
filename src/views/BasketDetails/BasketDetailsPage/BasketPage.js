import {
  Button,
  Checkbox,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { basketItems } from "../../../utils/constants/shared";

const BasketItem = (props) => {
  return (
    <div className="w-full h-[80px] flex justify-start gap-4 items-start">
      <div
        className="w-[80px] h-[80px]"
        style={{
          backgroundImage:
            "url(https://image-placeholder.com/images/actual-size/120x240.png)",
        }}
      ></div>
      <div className="h-full flex flex-col justify-start items-start">
        <h3 className="font-semibold text-[14px] text-right line-clamp-2">
          {props.title}
        </h3>
        <span className="mt-auto text-[#148BE7] font-bold text-[14px]">
          {props.price}
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

const Info = () => {
  const [totalPrice, setTotalPrice] = useState(200);
  const [tax, setTax] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTax(20);
    setShipping(20);
    setTotalPrice(200);
    setTotal(totalPrice + tax + shipping);
  }, [totalPrice, shipping, tax]);
  return (
    <>
      <InfoItem
        title="مبلغ إجمالي"
        price={`${totalPrice} ر.س`}
        classes={["", "text-[#707070]", "text-[#707070]"]}
      />
      <InfoItem
        title="شحن"
        price={`${shipping} ر.س`}
        classes={["", "text-[#707070]", "text-[#707070]"]}
      />
      <InfoItem
        title="الضرائب"
        price={`${tax} ر.س`}
        classes={["", "text-[#707070]", "text-[#707070]"]}
      />
      <InfoItem
        title="الاجمالي"
        price={`${total} ر.س`}
        classes={["mt-4", "font-bold text-black", "text-[#148BE7] font-bold"]}
      />
    </>
  );
};

const ShippingInfo = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [checked, setChecked] = useState(true);
  return (
    <>
      <h3 className="md:hidden w-full text-[16px] my-5 font-semibold">
        معلومات الشحن
      </h3>
      <form className="flex flex-col gap-3 justify-start items-start w-full">
        <Input
          className="w-full h-[48px]  outline-none rounded-md border-1 bg-slate-100 focus:bg-white placeholder:text-[14px]"
          type="text"
          placeholder="الاسم بالكامل"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
        <Input
          className="w-full h-[48px]  outline-none rounded-md border-1 bg-slate-100 focus:bg-white placeholder:text-[14px]"
          type="text"
          placeholder="رقم الجوال"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <select
          className="w-full border outline-[#ACCAFB] focus:border-blue-500 focus:border-2 focus:bg-white bg-[#F1F5F9] h-[48px] p-2 rounded-md outline-2"
          label="المدينة"
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
        <Input
          className="w-full h-[63px]  outline-none rounded-md border-1 bg-slate-100 focus:bg-white placeholder:text-[14px]"
          type="text"
          placeholder="العنوان بالكامل"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <h3 className="w-full text-[16px] mt-5 font-semibold">
          الدولة / المنطقة:
        </h3>
        <h3 className="w-full text-[16px] mb-5 font-semibold">
          المملكة العربية السعودية{" "}
        </h3>
        <Input
          className="w-full h-[63px]  outline-none rounded-md border-1 bg-slate-100 focus:bg-white placeholder:text-[14px]"
          type="text"
          placeholder="ملاحظات الطلب ( اختياري)"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
        <h3 className="w-full text-[16px] mt-3 font-semibold">
          اختر طريقة الدفع{" "}
        </h3>
        <div className="w-full my-3 flex gap-8 justify-between items-center">
          <div className="border-2 flex items-center w-full h-[40px] border-black opacity-40">
            <Checkbox
              label="بطاقة ائتمان"
              labelProps={{ class: "text-[12px]" }}
              className="w-[16px]"
              disabled
            />
          </div>
          <div
            className="border-2 flex items-center w-full h-[40px] border-black"
            onClick={(e) => setChecked(!checked)}
          >
            <Checkbox
              onChange={(e) => setChecked(!checked)}
              labelProps={{ class: "text-[12px]" }}
              checked={checked}
              label="الدفع عند الاستلام"
              className="w-[16px]"
            />
          </div>
        </div>

        <Button
          className="w-full md:h-[60px] md:text-[20px] flex justify-center items-center h-[40px] text-[14px] font-semibold bg-[#FF4E00]"
          style={{ borderRadius: "0px" }}
        >
          أكد الطلب
        </Button>
      </form>
    </>
  );
};

const Basket = (props) => {
  return (
    <>
      <h3 className="md:hidden w-full  text-[16px] my-5 font-semibold">طلبك</h3>
      <div className="flex w-full flex-col gap-4 max-h-[380px] justify-start items-center overflow-y-auto">
        {basketItems.map((el) => (
          <BasketItem title={el.title} price={el.price} />
        ))}
      </div>
      <div className="w-full">
        <Coupon />
      </div>
      <div className="bg-[#B2B2B2] w-full h-[2px] my-6"></div>
      <div className="w-full flex-col justify-start mt-auto items-start">
        <Info />
      </div>
    </>
  );
};

const BasketDetails = (props) => {
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
        <div className="md:order-3  w-full flex flex-col mt-6 justify-start items-start">
          <Basket />
        </div>
        <div className="hidden md:block md:order-2 bg-gray-200 w-[2px] h-full mt-6"></div>
        <div className="w-full md:order-1 flex flex-col mt-6 justify-start items-start">
          <ShippingInfo />
        </div>
      </div>
      <div className="bg-gray-200 h-[2px] w-full mt-5 mb-96"></div>
    </div>
  );
};
export default BasketDetails;
