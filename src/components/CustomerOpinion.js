import ReactStars from "react-rating-stars-component";
import { HiStar, HiOutlineStar } from "react-icons/hi";
import {ImQuotesLeft, ImQuotesRight} from "react-icons/im"
import '../style.css'
const CustomerOpinion = (props) => {
  return (
    <div className="w-full border rounded-md shadow-md p-2 flex flex-col gap-4 justify-center">
      <div
      className="w-full xs:h-32 md:h-56 overflow-hidden"
      style={{
        backgroundImage: `url(${props.link})`,
        backgroundSize: "cover",
      }}>
        
      </div>
      <div className="w-full">
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
      <h4 className="font-bold xs:text-normal md:text-lg text-right">محمد حمدي</h4>
      <div className="w-full flex flex-col gap-2">
        <ImQuotesRight className="block self-start"/>
        <p className="text-sm text-ellipsis--3">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذاهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذاهذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا</p>
        <ImQuotesLeft className="block self-end"/>
        </div>
    </div>
  );
};

export default CustomerOpinion;
