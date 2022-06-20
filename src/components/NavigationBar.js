/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@material-tailwind/react';
import {

  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,

  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from '@material-tailwind/react'
import { MdOutlineShoppingCart } from "react-icons/md";
const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
]




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavigationBar() {
  return (
    <Popover className=" relative bg-white">
      <div className=" mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="-mr-2 -my-2 lg:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="flex lg:w-4/5 2xl:w-2/3">
            <a href="/">

              <svg xmlns="http://www.w3.org/2000/svg" width="144.448" height="39.977" viewBox="0 0 154.448 49.977">
                <g id="Group_270" data-name="Group 270" transform="translate(-792.835 -526.781)">
                  <g id="Group_265" data-name="Group 265" transform="translate(792.835 539.418)">
                    <path id="Path_168" data-name="Path 168" d="M801.038,656.225c-1.105-8.474,5.526-12.6,10.194-13.2a17.576,17.576,0,0,0-4.416-.518,12.892,12.892,0,0,0-5.426,1.165,14,14,0,0,0-4.442,3.185,15.478,15.478,0,0,0-3,4.686,14.608,14.608,0,0,0-1.111,5.671,13.284,13.284,0,0,0,1.035,5.2,13.914,13.914,0,0,0,2.8,4.3,13.29,13.29,0,0,0,4.189,2.926,12.433,12.433,0,0,0,5.148,1.087,12.117,12.117,0,0,0,8.252-2.926A12.718,12.718,0,0,1,801.038,656.225Z" transform="translate(-792.835 -642.503)" fill="#ff4e00" />
                    <circle id="Ellipse_6" data-name="Ellipse 6" cx="4.13" cy="4.13" r="4.13" transform="translate(16.558 0.971)" fill="#ff4e00" />
                  </g>
                  <g id="Group_266" data-name="Group 266" transform="translate(855.522 539.367)">
                    <path id="Path_169" data-name="Path 169" d="M1381.614,748.424a24.34,24.34,0,0,0-10.221,2.7,10.25,10.25,0,0,0-3.255,2.9,6.5,6.5,0,0,0-1.262,4.014,7.006,7.006,0,0,0,.555,2.8,6.435,6.435,0,0,0,1.565,2.226,7.328,7.328,0,0,0,2.5,1.476,9.576,9.576,0,0,0,3.306.544,11.556,11.556,0,0,0,2.347-.208,7.675,7.675,0,0,0,1.741-.569,8.374,8.374,0,0,0,1.413-.854q.655-.492,1.312-1.062s-6.555,1.3-6.662-5.645C1374.87,751.464,1381.614,748.424,1381.614,748.424Z" transform="translate(-1366.877 -736.806)" fill="#ff4e00" />
                    <circle id="Ellipse_7" data-name="Ellipse 7" cx="4.13" cy="4.13" r="4.13" transform="translate(2.311 1.022)" fill="#ff4e00" />
                    <path id="Path_170" data-name="Path 170" d="M1462.369,644.026q-2.574-1.993-8.277-1.994a19.26,19.26,0,0,0-4.417.492c5.7,0,7.045,4.607,7.219,6.7.006.16.024.3.024.472v20.095h8.025V649.437A6.483,6.483,0,0,0,1462.369,644.026Z" transform="translate(-1440.633 -642.032)" fill="#ff4e00" />
                  </g>
                  <g id="Group_267" data-name="Group 267" transform="translate(886.273 538.931)">
                    <path id="Path_171" data-name="Path 171" d="M1648.477,642.974l12.819,28.277h3.684l2.459-5.4-10.534-22.881Z" transform="translate(-1648.477 -642.435)" fill="#ff4e00" />
                    <circle id="Ellipse_8" data-name="Ellipse 8" cx="4.13" cy="4.13" r="4.13" transform="translate(18.385 1.242) rotate(-8.645)" fill="#ff4e00" />
                  </g>
                  <g id="Group_268" data-name="Group 268" transform="translate(919.725 539.47)">
                    <path id="Path_172" data-name="Path 172" d="M1954.808,642.974l12.921,25.688-.959,2.176q-.254.621-.606,1.4a14.612,14.612,0,0,1-.757,1.451,7.038,7.038,0,0,1-.833,1.139,1.185,1.185,0,0,1-.833.467,1.593,1.593,0,0,1-.959-.259q-.353-.26-.707-.544a5.985,5.985,0,0,0-.807-.543,2.318,2.318,0,0,0-1.161-.259,4.952,4.952,0,0,0-1.792.284,3.209,3.209,0,0,0-1.161.725,2.54,2.54,0,0,0-.606.958,3.172,3.172,0,0,0-.176,1.036,2.524,2.524,0,0,0,.429,1.424,3.931,3.931,0,0,0,1.136,1.113,6.291,6.291,0,0,0,1.64.751,6.814,6.814,0,0,0,1.993.284,8.861,8.861,0,0,0,2.826-.492,10.649,10.649,0,0,0,2.776-1.424,13.034,13.034,0,0,0,2.423-2.253,12.109,12.109,0,0,0,1.817-2.926l3.39-7.018-11.516-23.177Z" transform="translate(-1954.808 -642.974)" fill="#ff4e00" />
                    <circle id="Ellipse_9" data-name="Ellipse 9" cx="4.13" cy="4.13" r="4.13" transform="translate(19.298 0.035)" fill="#ff4e00" />
                  </g>
                  <g id="Group_269" data-name="Group 269" transform="translate(824.428 526.781)">
                    <path id="Path_173" data-name="Path 173" d="M1090.271,526.781l-8.126,2.279v38.065h8.126V526.781Z" transform="translate(-1082.146 -526.781)" fill="#ff4e00" />
                    <path id="Path_174" data-name="Path 174" d="M1187.4,646.763a8.719,8.719,0,0,0-1.64-2.668,7.508,7.508,0,0,0-2.448-1.787,9.911,9.911,0,0,0-3.837-.689c-3.057.09-5.269.958-5.858,1.584,1.768-.553,4.568-1.032,5.657.416a5.552,5.552,0,0,1,.656,3.21v22.59H1188V650A8.714,8.714,0,0,0,1187.4,646.763Z" transform="translate(-1163.627 -629.076)" fill="#ff4e00" />
                  </g>
                </g>
              </svg>

            </a>
            <div className='hidden lg:flex mr-3 xl:mr-6'>

              <div className=" ml-2 xl:ml-6  md:border-l md:border-gray-200	flex  items-center  justify-center">
                <a href='#' className="ml-4 hover:text-gray-900 text-sm xl:text-lg active:text-blue-600">الرئيسية</a>
              </div>
              <div className=" ml-2 xl:ml-6  md:border-l md:border-gray-200	flex  items-center  justify-center">
                <a href='#' className="ml-4 hover:text-gray-900 text-sm xl:text-lg active:text-blue-600">المدونة</a>
              </div>
              <div className=" ml-2 xl:ml-6 md:border-l md:border-gray-200	flex  items-center  justify-center">
                <a href='#' className="ml-4 hover:text-gray-900 text-sm xl:text-lg active:text-blue-600">تسوق</a>
              </div>
              <div className=" ml-2 xl:ml-6  md:border-l md:border-gray-200	flex  items-center  justify-center">
                <a href='#' className="ml-4 hover:text-gray-900 text-sm xl:text-lg active:text-blue-600">من نحن</a>
              </div>
              <div className=" ml-2 xl:ml-6 flex items-center justify-center">
                <a href='#' className="ml-4 hover:text-gray-900 text-sm xl:text-lg active:text-blue-600">اتصل بنا</a>
              </div>

              <form className="lg:flex items-center hidden">
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                  </div>
                  <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="بحث" required="" />
                </div>
              </form>

            </div>

          </div>
          <div className="flex lg:w-1/5 2xl:w-1/3 items-center justify-end md:flex-1 ">
            <button type="submit" class="lg:hidden p-2.5 ml-2 text-sm font-medium text-gray-400 rounded-lg border"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
            <a
              href="#"
              className="space-x-2 whitespace-nowrap inline-flex items-center justify-center px-1 py-1 md:px-4 md:py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-800 hover:bg-gray-700"
            >
              <i className="fa badge fa-lg" value={5}></i>
              <MdOutlineShoppingCart className="text-lg " />
              <span className=" hidden md:inline">
                السلة
              </span>

            </a>
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
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 z-50 transition transform origin-top-right lg:hidden">
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
                      <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
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
    </Popover >
  )
}
