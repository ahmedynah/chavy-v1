import ReactStars from "react-rating-stars-component";
import { HiStar, HiOutlineStar } from "react-icons/hi";

const Ratings = () => {
    const { rate, number } = { rate: 4.5, number: 15010 };
    return (
      <div className="w-full flex justify-start items-center gap-2 ">
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          // isHalf={true}
          edit={false}
          value={rate}
          emptyIcon={<HiOutlineStar />}
          // halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<HiStar />}
        />
        <span className="-mb-1 underline-offset-1 underline cursor-pointer">{number} مقيم للمنتج</span>
      </div>
    );
  };
  export default Ratings;