import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
const ProductCard = (props) => {
  const [filled, filledSet] = useState(true);
  return (
    <div
      
      className="w-full h-[290px] md:h-[560px] xl:h-[670px] border rounded-md  flex flex-col gap-3 justify-between"
    >
      <Link
      to="/details/5"
        className="w-full h-full overflow-hidden"
        style={{
          backgroundImage: `url(${props.link})`,
          backgroundSize: "cover",
        }}
      ></Link>
      <div className="w-full flex items-center justify-between px-1">
        <h3 className="font-bold text-[14px] lg:text-[28px] text-right">
          مثال لاسم المنتج
        </h3>
        <div className="rounded-full relative bottom-16 md:bottom-0 mx-4 bg-white flex justify-center items-center h-[40px] w-[40px]">
          {filled ? (
            <AiFillHeart
              className="text-red-600 text-2xl hover:scale-[1.2] cursor-pointer"
              onClick={(e) => filledSet(!filled)}
            />
          ) : (
            <AiOutlineHeart
              className="text-2xl hover:scale-[1.2] cursor-pointer"
              onClick={(e) => filledSet(!filled)}
            />
          )}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between  lg:items-center md:mt-auto items-end">
        <p className="font-semibold flex justify-start items-center w-full mb-2 pr-3 text-[12px] md:text-[20px] xl:text-[28px] text-plain-gray">
          200.00 ر.س
        </p>
        <div className="w-full md:mt-2 h-[48px] lg:h-[64px] hover:scale-[1.01] hover:cursor-pointer bg-[#FF4E00] flex gap-2 justify-center items-center">
          <HiOutlineShoppingCart className="text-white  lg:h-[40px] lg:w-[40px]" />
          <span className="text-white font-semibold text-[12px] lg:text-[16px]">
            أضف للعربة{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
