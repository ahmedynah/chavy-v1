import ReactStars from "react-rating-stars-component";
import "../style.css"
import { HiStar, HiOutlineStar } from "react-icons/hi";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import "../style.css";
const CustomerOpinion = (props) => {
  return (
    <div className="w-full md:h-[560px] xl:h-[670px] border rounded-md  flex flex-col gap-1 md:gap-3 justify-start">
      <div
        className="w-full min-h-[186px] h-1/2 max-h-[360px] overflow-hidden"
        style={{
          backgroundImage: `url(${props.link})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full -my-2">
        <ReactStars
          count={5}
          size={20}
          activeColor="#ffd700"
          // isHalf={true}
          edit={false}
          value={4}
          emptyIcon={<HiOutlineStar />}
          // halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<HiStar />}
        />
      </div>
      <div className="p-2 ">
        <h4 className="font-bold text-[20px] md:text-[28] text-right">
          محمد حمدي
        </h4>
        <div className="w-full flex flex-col gap-2">
          <ImQuotesRight className="block self-start" />
          <p className="text-[16px] md:text-[26px] h-full text-shrinking">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذاهذا النص هو مثال
            لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
            النص العربى، حيث يمكنك أن تولد مثل هذاهذا النص هو مثال لنص يمكن أن
            يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،
            حيث يمكنك أن تولد مثل هذا
          </p>
          <ImQuotesLeft className="block self-end" />
        </div>
      </div>
    </div>
  );
};

export default CustomerOpinion;
