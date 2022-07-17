// import { Link } from "react-router-dom";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }
const BreadCrumb = (props) => {
  const data = props.data;
  // console.log(data)
  return (
    <nav className="bg-grey-light rounded-md w-full">
      <ol className="flex">
        {/* {data.map((el) => {
          return ( */}
            <li key={data[0].title}>
              {/* <Link to={data[0].link} className="text-blue-600 hover:text-blue-700">
                {data[0].title}
              </Link> */}
            </li>
          {/* );
        })} */}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
