import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const ProductCard = (props) => {
  const [filled, filledSet] = useState(true);
  return (
    <div
      className="flex w-full md:w-5/6 mx-auto h-[290px] md:h-[500px] border rounded-md  flex-col  justify-between"
    >

      <Link
        to="/details/5"
        className="w-full h-full overflow-hidden"
        style={{
          backgroundImage: `url(${props.link})`,
          backgroundSize: "cover",
        }}
      ></Link>
      <div className="flex flex-wrap w-full p-2 md:p-4 space-y-5">

        <div className="w-full flex items-center justify-between  ">
          <h3 className="font-bold w-full text-lg lg:text-xl text-right">
            مثال لاسم المنتج
          </h3>
          <div className="rounded-full flex justify-center items-center ">
            {filled ? (
              <AiFillHeart
                className="text-red-600 text-2xl hover:scale-[1.2] transition-transform duration-200 ease-in-out cursor-pointer"
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
        <div className="w-full flex justify-between  lg:items-center md:mt-auto items-end ">
          <p className="font-semibold flex justify-start items-center w-1/2  text-lg lg:text-xl text-plain-gray">
            200.00 ر.س
          </p>
          <Button className="flex items-center justify-center bg-orange-600 w-1/2 shadow-none rounded-none" >
            <HiOutlineShoppingCart className="text-white  text-lg lg:text-xl ml-2" />
            <span>
              أضف للعربة
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
