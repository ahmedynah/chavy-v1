import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
const ProductCard = (props) => {
  const filled = true;
  return (
    <div className="w-full border p-2 rounded-md  flex flex-col gap-3 justify-center">
      <div
        className="w-full xs:h-32 md:h-56 overflow-hidden"
        style={{
          backgroundImage: `url(${props.link})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full flex justify-between px-1">
        <h3 className="font-bold xs:text- md:text-xl text-right">
          مثال لاسم المنتج
        </h3>
        {filled ? (
          <AiFillHeart className="text-red-600 text-2xl hover:scale-[1.2] cursor-pointer" />
        ) : (
          <AiOutlineHeart className="text-2xl hover:scale-[1.2] cursor-pointer" />
        )}
      </div>
      <div className="w-full flex xs:flex-col md:flex-row justify-between items-center mt-3">
        <p className="font-semibold xs:text-sm md:text-lg text-gray-400">200.00 ر.س</p>
        <div className="px-2 xs:w-full my-2 md:w-2/5 h-16 hover:scale-[1.01] hover:cursor-pointer bg-[#FF4E00] flex gap-2 justify-center items-center">
          <HiOutlineShoppingCart className="text-white  xs:text-6xl lg:text-3xl" />
          <span className="text-white font-semibold xs:text-sm lg:text-xl">
            Add to basket
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
