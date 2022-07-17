import ReactStars from "react-rating-stars-component";
import "@fortawesome/fontawesome-free/css/all.css"
// import { HiStar, HiOutlineStar } from "react-icons/hi";
// import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
// import "../../../style.css";
const CustomerOpinion = (props) => {
  // const stars = {
  //   size: 33,
  //   count: 5,
  //   color: "black",
  //   activeColor: "red",
  //   value: 4.2,
  //   a11y: true,
  //   isHalf: true,
  //   emptyIcon: <i className="far fa-star" />,
  //   halfIcon: <i className="fa fa-star-half-alt" />,
  //   filledIcon: <i className="fa fa-star" />,
  // };
  return (
    <div className="w-full  border rounded-md  flex flex-col gap-1 md:gap-3 justify-start">
      <div
        className="w-full min-h-[186px] h-1/2 max-h-[360px] overflow-hidden"
        style={{
          backgroundImage: `url(${props.link})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex justify-end items-start  h-[33px] w-full px-4  -scale-x-100">
        <ReactStars
        classNames="flex items-center py-0 absolute -top-2"
          size={33}
          count={5}
          color="gold"
          value={3}
          emptyIcon={<i class="fa fa-regular fa-star"></i>}
          halfIcon={<i class="fa fa-star-half-alt"></i>}
          fullIcon={<i class="fa fa-star"></i>}
        />
      </div>
      <div className="px-4 ">
        <h4 className="font-bold text-[20px] md:text-[28] text-right">
          محمد حمدي
        </h4>
        
      </div>
      <div className="w-full px-4 pb-4 max-h-[160px] flex flex-col gap-2">
        <div className="flex gap-[2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.205"
            height="17.604"
            viewBox="0 0 9.205 17.604"
          >
            <path
              id="Path_188"
              data-name="Path 188"
              d="M4.905,11.6h4.7c-.1-4.7-1-5.4-3.9-7.1a.751.751,0,0,1-.2-1,.751.751,0,0,1,1-.2c3.4,2,4.6,3.2,4.6,9v5.4a3.116,3.116,0,0,1-3.1,3.1h-3a2.994,2.994,0,0,1-3.1-3.1v-3A2.912,2.912,0,0,1,4.905,11.6Z"
              transform="translate(-1.9 -3.196)"
              fill="#707070"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.205"
            height="17.604"
            viewBox="0 0 9.205 17.604"
          >
            <path
              id="Path_188"
              data-name="Path 188"
              d="M4.905,11.6h4.7c-.1-4.7-1-5.4-3.9-7.1a.751.751,0,0,1-.2-1,.751.751,0,0,1,1-.2c3.4,2,4.6,3.2,4.6,9v5.4a3.116,3.116,0,0,1-3.1,3.1h-3a2.994,2.994,0,0,1-3.1-3.1v-3A2.912,2.912,0,0,1,4.905,11.6Z"
              transform="translate(-1.9 -3.196)"
              fill="#707070"
            />
          </svg>
        </div>

        <p className="text-[14px]  md:text-[16px] line-clamp-2  md:line-clamp-3 text-ellipsis">
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذاهذا النص هو مثال
          لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
          العربى، حيث يمكنك أن تولد مثل هذاهذا النص هو مثال لنص يمكن أن يستبدل
          في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك
          أن تولد مثل هذا
        </p>
        <div className="flex gap-[2px] w-full justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.205"
            height="17.604"
            viewBox="0 0 9.205 17.604"
          >
            <path
              id="Path_189"
              data-name="Path 189"
              d="M18.9,11.6H14.2c.1-4.7,1-5.4,3.9-7.1a.751.751,0,0,0,.2-1,.751.751,0,0,0-1-.2c-3.4,2-4.6,3.2-4.6,9v5.4a3.116,3.116,0,0,0,3.1,3.1h3a2.994,2.994,0,0,0,3.1-3.1v-3a2.912,2.912,0,0,0-3-3.1Z"
              transform="translate(-12.7 -3.196)"
              fill="#707070"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9.205"
            height="17.604"
            viewBox="0 0 9.205 17.604"
          >
            <path
              id="Path_189"
              data-name="Path 189"
              d="M18.9,11.6H14.2c.1-4.7,1-5.4,3.9-7.1a.751.751,0,0,0,.2-1,.751.751,0,0,0-1-.2c-3.4,2-4.6,3.2-4.6,9v5.4a3.116,3.116,0,0,0,3.1,3.1h3a2.994,2.994,0,0,0,3.1-3.1v-3a2.912,2.912,0,0,0-3-3.1Z"
              transform="translate(-12.7 -3.196)"
              fill="#707070"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomerOpinion;
