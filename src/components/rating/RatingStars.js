import ReactStars from "react-rating-stars-component";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import StarRatings from 'react-star-ratings';
import { useState } from "react";
import { useEffect } from "react";

const Ratings = (props) => {
  const { rate, number } = { rate: 4.5, number: 15010 };
  const [raters, setRaters] = useState(props.raters !== undefined? props.raters : 0)
  const [rating, setRating] = useState(props.rating !== undefined? props.rating: 0)
  return (
    <div
      className="w-full flex justify-start items-center gap-2 "
    >
      <div >
      {/* <ReactStars
        count={5}
        size={24}
        activeColor="#ffd700"
        // isHalf={true}
        edit={false}
        value={rate}
        emptyIcon={<HiOutlineStar />}
        // halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<HiStar />}
        /> */}
        <StarRatings
          rating={rating}
          starRatedColor="gold"
          numberOfStars={5}
          name='rating'
          starDimension="33px"
          starSpacing="2px"
          isSelectable={false}
          starHoverColor="gold"
        />
        </div>
      <span className="-mb-1 underline-offset-1 underline cursor-pointer">
        {raters} مقيم للمنتج
      </span>
    </div>
  );
};
export default Ratings;
