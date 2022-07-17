/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { MdOutlineShoppingCart } from "react-icons/md";
import { reactLocalStorage } from "reactjs-localstorage";
import { Link } from "react-router-dom";
import BasketContext from "../../utils/contexts/BasketContext";

const solutions = [
  {
    name: "الرئيسية",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "المدونة",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "تسوق",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "من نحن",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "اتصل بنا",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function NavBar() {
  const {basket} = useContext(BasketContext)
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(
      basket instanceof Array ? basket.length : 0
    );
  }, [basket]);
  return (
    <Popover className=" relative bg-white">
      <div className=" mx-auto">
        <div className="flex w-full justify-between items-center border-b-2 border-gray-100 py-6  md:space-x-6 h-[100px]">
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="flex w-full">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="144.448"
                height="39.977"
                viewBox="0 0 154.448 49.977"
              >
                <g
                  id="Group_270"
                  data-name="Group 270"
                  transform="translate(-792.835 -526.781)"
                >
                  <g
                    id="Group_265"
                    data-name="Group 265"
                    transform="translate(792.835 539.418)"
                  >
                    <path
                      id="Path_168"
                      data-name="Path 168"
                      d="M801.038,656.225c-1.105-8.474,5.526-12.6,10.194-13.2a17.576,17.576,0,0,0-4.416-.518,12.892,12.892,0,0,0-5.426,1.165,14,14,0,0,0-4.442,3.185,15.478,15.478,0,0,0-3,4.686,14.608,14.608,0,0,0-1.111,5.671,13.284,13.284,0,0,0,1.035,5.2,13.914,13.914,0,0,0,2.8,4.3,13.29,13.29,0,0,0,4.189,2.926,12.433,12.433,0,0,0,5.148,1.087,12.117,12.117,0,0,0,8.252-2.926A12.718,12.718,0,0,1,801.038,656.225Z"
                      transform="translate(-792.835 -642.503)"
                      fill="#ff4e00"
                    />
                    <circle
                      id="Ellipse_6"
                      data-name="Ellipse 6"
                      cx="4.13"
                      cy="4.13"
                      r="4.13"
                      transform="translate(16.558 0.971)"
                      fill="#ff4e00"
                    />
                  </g>
                  <g
                    id="Group_266"
                    data-name="Group 266"
                    transform="translate(855.522 539.367)"
                  >
                    <path
                      id="Path_169"
                      data-name="Path 169"
                      d="M1381.614,748.424a24.34,24.34,0,0,0-10.221,2.7,10.25,10.25,0,0,0-3.255,2.9,6.5,6.5,0,0,0-1.262,4.014,7.006,7.006,0,0,0,.555,2.8,6.435,6.435,0,0,0,1.565,2.226,7.328,7.328,0,0,0,2.5,1.476,9.576,9.576,0,0,0,3.306.544,11.556,11.556,0,0,0,2.347-.208,7.675,7.675,0,0,0,1.741-.569,8.374,8.374,0,0,0,1.413-.854q.655-.492,1.312-1.062s-6.555,1.3-6.662-5.645C1374.87,751.464,1381.614,748.424,1381.614,748.424Z"
                      transform="translate(-1366.877 -736.806)"
                      fill="#ff4e00"
                    />
                    <circle
                      id="Ellipse_7"
                      data-name="Ellipse 7"
                      cx="4.13"
                      cy="4.13"
                      r="4.13"
                      transform="translate(2.311 1.022)"
                      fill="#ff4e00"
                    />
                    <path
                      id="Path_170"
                      data-name="Path 170"
                      d="M1462.369,644.026q-2.574-1.993-8.277-1.994a19.26,19.26,0,0,0-4.417.492c5.7,0,7.045,4.607,7.219,6.7.006.16.024.3.024.472v20.095h8.025V649.437A6.483,6.483,0,0,0,1462.369,644.026Z"
                      transform="translate(-1440.633 -642.032)"
                      fill="#ff4e00"
                    />
                  </g>
                  <g
                    id="Group_267"
                    data-name="Group 267"
                    transform="translate(886.273 538.931)"
                  >
                    <path
                      id="Path_171"
                      data-name="Path 171"
                      d="M1648.477,642.974l12.819,28.277h3.684l2.459-5.4-10.534-22.881Z"
                      transform="translate(-1648.477 -642.435)"
                      fill="#ff4e00"
                    />
                    <circle
                      id="Ellipse_8"
                      data-name="Ellipse 8"
                      cx="4.13"
                      cy="4.13"
                      r="4.13"
                      transform="translate(18.385 1.242) rotate(-8.645)"
                      fill="#ff4e00"
                    />
                  </g>
                  <g
                    id="Group_268"
                    data-name="Group 268"
                    transform="translate(919.725 539.47)"
                  >
                    <path
                      id="Path_172"
                      data-name="Path 172"
                      d="M1954.808,642.974l12.921,25.688-.959,2.176q-.254.621-.606,1.4a14.612,14.612,0,0,1-.757,1.451,7.038,7.038,0,0,1-.833,1.139,1.185,1.185,0,0,1-.833.467,1.593,1.593,0,0,1-.959-.259q-.353-.26-.707-.544a5.985,5.985,0,0,0-.807-.543,2.318,2.318,0,0,0-1.161-.259,4.952,4.952,0,0,0-1.792.284,3.209,3.209,0,0,0-1.161.725,2.54,2.54,0,0,0-.606.958,3.172,3.172,0,0,0-.176,1.036,2.524,2.524,0,0,0,.429,1.424,3.931,3.931,0,0,0,1.136,1.113,6.291,6.291,0,0,0,1.64.751,6.814,6.814,0,0,0,1.993.284,8.861,8.861,0,0,0,2.826-.492,10.649,10.649,0,0,0,2.776-1.424,13.034,13.034,0,0,0,2.423-2.253,12.109,12.109,0,0,0,1.817-2.926l3.39-7.018-11.516-23.177Z"
                      transform="translate(-1954.808 -642.974)"
                      fill="#ff4e00"
                    />
                    <circle
                      id="Ellipse_9"
                      data-name="Ellipse 9"
                      cx="4.13"
                      cy="4.13"
                      r="4.13"
                      transform="translate(19.298 0.035)"
                      fill="#ff4e00"
                    />
                  </g>
                  <g
                    id="Group_269"
                    data-name="Group 269"
                    transform="translate(824.428 526.781)"
                  >
                    <path
                      id="Path_173"
                      data-name="Path 173"
                      d="M1090.271,526.781l-8.126,2.279v38.065h8.126V526.781Z"
                      transform="translate(-1082.146 -526.781)"
                      fill="#ff4e00"
                    />
                    <path
                      id="Path_174"
                      data-name="Path 174"
                      d="M1187.4,646.763a8.719,8.719,0,0,0-1.64-2.668,7.508,7.508,0,0,0-2.448-1.787,9.911,9.911,0,0,0-3.837-.689c-3.057.09-5.269.958-5.858,1.584,1.768-.553,4.568-1.032,5.657.416a5.552,5.552,0,0,1,.656,3.21v22.59H1188V650A8.714,8.714,0,0,0,1187.4,646.763Z"
                      transform="translate(-1163.627 -629.076)"
                      fill="#ff4e00"
                    />
                  </g>
                </g>
              </svg>
            </Link>
            <div className="hidden  lg:flex md:w-full md:justify-between mr-3 md:mr-auto ">
              <div className="w-full flex justify-between mr-auto">
                <div className=" w-full   md:border-l md:border-gray-200	flex  items-center  justify-start ">
                  <a
                    href="#"
                    className="mx-auto hover:text-gray-900 text-sm md:text-[21px] px-3 xl:px-0 active:text-blue-600"
                  >
                    الرئيسية
                  </a>
                </div>
                <div className="  w-full  md:border-l md:border-gray-200	flex  items-center  justify-start ">
                  <a
                    href="#"
                    className="mx-auto hover:text-gray-900 text-sm md:text-[21px] px-3 xl:px-0 active:text-blue-600"
                  >
                    المدونة
                  </a>
                </div>
                <div className="  w-full  md:border-l md:border-gray-200	flex  items-center  justify-start ">
                  <a
                    href="#"
                    className="mx-auto hover:text-gray-900 text-sm md:text-[21px] px-3 xl:px-0 active:text-blue-600"
                  >
                    تسوق
                  </a>
                </div>
                <div className="  w-full  md:border-l md:border-gray-200	flex  items-center  justify-start ">
                  <a
                    href="#"
                    className="mx-auto hover:text-gray-900 text-sm md:text-[21px] px-3 xl:px-0 active:text-blue-600"
                  >
                    من نحن
                  </a>
                </div>
                <div className=" w-full flex items-center justify-center">
                  <a
                    href="#"
                    className=" hover:text-gray-900 text-sm md:text-[21px] px-3 xl:px-0 active:text-blue-600"
                  >
                    اتصل بنا
                  </a>
                </div>
              </div>

              <form className="lg:flex  items-center hidden border-red-500">
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[290px] h-[48px]  p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="بحث"
                    required=""
                  />
                </div>
                <div className="flex items-center pr-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29.15"
                    height="29.15"
                    viewBox="0 0 29.15 29.15"
                  >
                    <path
                      id="Path_5"
                      data-name="Path 5"
                      d="M25.833,23.333H24.517l-.467-.45a10.85,10.85,0,1,0-1.167,1.167l.45.467v1.317l8.333,8.317,2.483-2.483Zm-10,0a7.5,7.5,0,1,1,7.5-7.5A7.49,7.49,0,0,1,15.833,23.333Z"
                      transform="translate(-5 -5)"
                      fill="#787878"
                    />
                  </svg>
                </div>
              </form>
            </div>
          </div>
          <div className="flex h-full max-w-fit items-center justify-end md:flex-1">
            <button
              type="submit"
              className="lg:hidden p-2.5 h-full ml-2 text-sm font-medium text-gray-400 rounded-lg border"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <Link
              to="basket/info"
              className="whitespace-nowrap inline-flex w-[40px] h-[46px] rounded-md md:rounded-none  md:w-[210px] md:h-[85px] items-center justify-start  py-1 md:px-4  shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-700"
            >
              <i className="fa badge md:fa-lg text-[10px] md:text-[14px] relative" value={count}></i>
              <MdOutlineShoppingCart className="w-[28px] mx-auto md:mx-0 h-[28px] md:w-[40px] md:h-[40px]"/>
              {/* <svg
              className="w-[18.415px] h-[18.415px] md:w-[40px] md:h-[40px]"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                // width="40"
                // height="40"
                viewBox="0 0 40 40"
              >
                <defs>
                  <clipPath id="clip-path">
                    <rect
                      id="Rectangle_2"
                      data-name="Rectangle 2"
                      width="40"
                      height="40"
                      transform="translate(1665 39)"
                      fill="#fff"
                    />
                  </clipPath>
                </defs>
                <g
                  id="Mask_Group_1"
                  data-name="Mask Group 1"
                  transform="translate(-1665 -39)"
                  clip-path="url(#clip-path)"
                >
                  <g id="shopping_cart-24px" transform="translate(1665 39)">
                    <path
                      id="Path_1"
                      data-name="Path 1"
                      d="M0,0H40V40H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M25.917,21.667a3.318,3.318,0,0,0,2.917-1.717L34.8,9.133a1.66,1.66,0,0,0-1.45-2.467H8.683L7.117,3.333H1.667V6.667H5l6,12.65L8.75,23.383a3.339,3.339,0,0,0,2.917,4.95h20V25h-20L13.5,21.667ZM10.267,10h20.25l-4.6,8.333h-11.7Zm1.4,20A3.333,3.333,0,1,0,15,33.333,3.329,3.329,0,0,0,11.667,30Zm16.667,0a3.333,3.333,0,1,0,3.333,3.333A3.329,3.329,0,0,0,28.333,30Z"
                      fill="#fff"
                    />
                  </g>
                </g>
              </svg> */}

              <span className=" hidden md:inline text-[21px]">السلة</span>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 z-50 transition transform origin-top-right lg:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <item.icon
                        className="flex-shrink-0 h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="#"
                  className="w-full space-x-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-700"
                >
                  <i className="fa badge fa-lg" value={5}></i>
                  <MdOutlineShoppingCart className="text-lg" />
                  السلة
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
