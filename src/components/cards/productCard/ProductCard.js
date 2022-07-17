import { Component, useContext, useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { reactLocalStorage } from "reactjs-localstorage";
import BasketContext from "../../../utils/contexts/BasketContext";

const ProductCard = (props) => {
  const {basket, setBasket, setBasketUpdateFlag} = useContext(BasketContext)
  const [filled, filledSet] = useState(false);
  const { id, name, price_html, price, link, product } = { ...props };

  return (
    <div className="flex w-full  h-[290px] md:h-[500px] border rounded-md  flex-col  justify-between">
      <Link
        to={`/details/${id}`}
        className="w-full h-full overflow-hidden"
        style={{
          backgroundImage: `url(${link})`,
          backgroundSize: "cover",
        }}
        
      ></Link>
      <div className="flex flex-wrap w-full p-2 md:pt-4 md:pb-0 md:pl-0  space-y-5">
        <div className="w-full flex items-center justify-between  ">
          <h3 className="font-bold w-full text-lg lg:text-xl text-right">
            {name}
          </h3>
          <div className="rounded-full relative pl-4 -top-16 md:top-0 bg-white h-[40px] w-[40px] flex justify-center items-center ">
            {product.filled || filled ? (
              <AiFillHeart
                className="text-red-600 text-[24px] relative -left-2 hover:scale-[1.2] transition-transform duration-200 ease-in-out cursor-pointer"
                onClick={() => filledSet(!filled)}
              />
            ) : (
              <AiOutlineHeart
                className="text-red-600 text-[24px] relative -left-2 hover:scale-[1.2] transition-transform duration-200 ease-in-out cursor-pointer"
                onClick={() => filledSet(!filled)}
              />
            )}
          </div>
        </div>
        <div className="w-full flex md:justify-between  md:items-center md:mt-auto flex-col md:flex-row items-start ">
          <div
            className="font-semibold self flex flex-col gap-2 xl:flex-row justify-start items-center w-full text-[14px] lg:text-[16px] text-plain-gray"
            dangerouslySetInnerHTML={{ __html: price_html, price }}
          ></div>
          <Button
            className="flex m-2 items-center justify-center bg-orange-600 w-full mt-2 shadow-none rounded-none"
            onClick={() => {
              if (!(basket instanceof Array)) setBasket([product]);
              else {
                setBasket([...basket, product]);
              }
              console.log(typeof basket, basket);
              setBasketUpdateFlag(true);
            }}
          >
            <HiOutlineShoppingCart className="text-white w-[20px] h-[20px] md:w-[40px] md:h-[40px] ml-2" />
            <span className="text-[16px] md:te">أضف للعربة</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
