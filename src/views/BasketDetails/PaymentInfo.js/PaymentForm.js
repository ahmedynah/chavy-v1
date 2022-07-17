import { Button } from "@material-tailwind/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PaymentForm = (props) => {
    const navigate= useNavigate()
  const [info, setInfo] = useState(
    JSON.parse(sessionStorage.getItem("shippingInfo")) || props.info
  );

  return (
    <div className="flex flex-col w-full justify-start h-full">
      <div className="text-[16px] md:text-[25px] w-full flex justify-between">
        <p className="md:hidden font-semibold w-full">معلومات الشحن</p>
        <Link
          className="underline mb-5 text-blue-500 text-left md:text-right"
          to="/basket/info"
        >
          تعديل
        </Link>
      </div>
      <div className="flex text-[12px] md:text-[25px]  flex-col gap-3 px-3 justify-start items-start w-full">
        <div className="flex w-full flex-wrap md:flex-nowrap justify-between border-b pb-3">
          <div className="w-full text-[#707070]">البريد الإلكتروني</div>
          <div className="w-full text-[16px] md:text-[25px] text-black">{info.email}</div>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap justify-between border-b pb-3">
          <div className="w-full text-[#707070]">شحن إلى</div>
          <div className="w-full text-[16px] md:text-[25px]">
            {"مصر,"}
            {info.city} {","} {info.address}
          </div>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap justify-between border-b pb-3">
          <div className="w-full text-[#707070]">عن طريق</div>
          <div className="w-full text-[16px] md:text-[25px]">{"الشحن الدولي 420 دولار"}</div>
        </div>
        <div className="hidden md:flex mt-6 gap-3 w-full text-[14px] md:text-[25px] font-semibold flex-wrap md:flex-nowrap justify-between pb-3">
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
      </div>
    </div>
  );
};

export default PaymentForm;
