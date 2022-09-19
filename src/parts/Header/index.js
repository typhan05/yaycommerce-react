import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../assets/images/logo.svg"
import Dropdown from "../../components/Dropdown";
import useHeader from "./useHeader";
import DrawerSearch from "../../components/Drawer/Search";
import useSearch from "../../components/Drawer/Search/useSearch";

const units = [
  {id: 1, active: true, name: 'USD'},
  {id: 2, name: 'EUR'},
  {id: 3, name: 'GBP'},
  {id: 4, name: 'JPY'},
];
const languages = [
  {id: 1, active: true, name: 'English'},
  {id: 2, name: 'Français'},
  {id: 3, name: 'Spanish'},
];

export default function Header(props) {
  const {openMenu, openHandler, scrollDirection} = useHeader();
  const {isSearchShowing, toggleSearch} = useSearch();
  const [showSubMenu, setShowSubMenu] = useState(false);

  const openSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  }

  const onBack = () => {
    setShowSubMenu(false);
  }

  return (
    <header
      className={`${openMenu ? `fixed` : `sticky`} ${scrollDirection === "down" ? "-top-full" : "md:-top-11 top-0"} z-50 left-0 w-full translate-z-0 text-black2 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all duration-500 ease-in-out`}>
      <div className="relative bg-gray-light4 py-3 text-sm md:block hidden z-[2]">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <ul className="grid gap-x-3 grid-cols-3">
            <li>
              <NavLink to='/yaycommerce-react/contact'
                 className={`relative inline-block after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                Contact</NavLink>
            </li>
            <li>
              <NavLink to='/yaycommerce-react/about-us'
                       className={`relative inline-block after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                About us</NavLink>
            </li>
            <li>
              <a href="#/"
                 className={`relative inline-block after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                My account</a>
            </li>
          </ul>
          <p>Get Free delivery from $100</p>
          <div className="flex">
            <Dropdown labelName={"USD"} options={units}/>
            <Dropdown labelName={"English"} options={languages}/>
          </div>
        </div>
      </div>
      <div className="relative py-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="/yaycommerce-react/"><img src={Logo} alt="logo"/></a>
          <div
            className={`md:relative md:top-0 md:w-auto md:translate-x-0 md:py-0 md:px-0 px-5 py-4 z-[1] fixed top-[77px] bottom-0 left-0 border-t border-solid border-gray-light2 md:border-0 md:border-none md:border-transparent bg-white transition-all duration-300 ease-in-out w-full md:overflow-visible max-h-full overflow-y-auto ${openMenu ? `translate-x-0` : `translate-x-full`}`}>
            <ul className="md:flex md:mb-0 mb-4">
              <li className="md:mx-5 relative group">
                <NavLink to='/yaycommerce-react/'
                         className={({isActive}) => (`relative block py-1 after:h-[1px] after:left-0 after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:right-0 ` + (isActive ? `md:after:right-0` : `after:right-full`))}>
                  Home</NavLink>
              </li>
              <li className="md:mx-5 relative group">
                <NavLink to='/yaycommerce-react/shops'
                         className={({isActive}) => (`relative block py-1 after:h-[1px] after:left-0 after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:right-0 pr-4 ` + (isActive ? `md:after:right-0` : `after:right-full`))}>
                  Shops</NavLink>
                <button onClick={openSubMenu}
                        className="absolute right-0 top-2/4 -translate-y-2/4 z-[1] md:block md:rotate-0 -rotate-90 flex items-center justify-center md:ml-[6px] md:w-auto w-4 md:h-auto h-4 md:pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 1L5 5 1 1"
                    ></path>
                  </svg>
                </button>
                <ul
                  className={`opacity-0 py-[15px] md:px-4 md:-ml-4 md:pointer-events-none md:absolute fixed left-0 md:invisible md:top-20 top-0 z-[1] min-w-max bg-white transition-all md:duration-300 duration-700 ease-in-out rounded-md shadow-[0_9px_40px_rgba(0,0,0,0.08)] md:h-auto h-full md:w-auto w-full bg-white group-hover:pointer-events-auto group-hover:md:top-[30px] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 ${showSubMenu ? `visible translate-x-0 opacity-100` : `invisible md:translate-x-0 translate-x-full opacity-0`}`}>
                  <li className="md:hidden block md:px-0 px-4 shadow-[0px_1px_0px_#EBEBEB] mb-4">
                    <button onClick={onBack} className="flex items-center py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="14"
                        fill="none"
                        viewBox="0 0 17 14"
                        className="mr-2"
                      >
                        <path
                          stroke="#202124"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M.999 7h15M7.049 13L.999 7l6.05-6"
                        ></path>
                      </svg>
                      Shops
                    </button>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/categories'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Categories</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/search'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Search</NavLink>
                  </li>
                </ul>
              </li>
              <li className="md:mx-5 relative group">
                <NavLink to='/yaycommerce-react/pages'
                         className={({isActive}) => (`relative block py-1 after:h-[1px] after:left-0 after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:right-0 pr-4 ` + (isActive ? `md:after:right-0` : `after:right-full`))}>
                  Pages</NavLink>
                <button onClick={openSubMenu}
                        className="absolute right-0 top-2/4 -translate-y-2/4 z-[1] md:block md:rotate-0 -rotate-90 flex items-center justify-center md:ml-[6px] md:w-auto w-4 md:h-auto h-4 md:pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="6"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 1L5 5 1 1"
                    ></path>
                  </svg>
                </button>
                <ul
                  className={`opacity-0 py-[15px] md:px-4 md:-ml-4 md:pointer-events-none md:absolute fixed left-0 md:invisible md:top-20 top-0 z-[1] min-w-max bg-white transition-all md:duration-300 duration-700 ease-in-out rounded-md shadow-[0_9px_40px_rgba(0,0,0,0.08)] md:h-auto h-full md:w-auto w-full bg-white group-hover:pointer-events-auto group-hover:md:top-[30px] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 ${showSubMenu ? `visible translate-x-0 opacity-100` : `invisible md:translate-x-0 translate-x-full opacity-0`}`}>
                  <li className="md:hidden block md:px-0 px-4 shadow-[0px_1px_0px_#EBEBEB] mb-4">
                    <button onClick={onBack} className="flex items-center py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="14"
                        fill="none"
                        viewBox="0 0 17 14"
                        className="mr-2"
                      >
                        <path
                          stroke="#202124"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M.999 7h15M7.049 13L.999 7l6.05-6"
                        ></path>
                      </svg>
                      Pages
                    </button>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/cart'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Cart</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/checkout'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Checkout</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/complete'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Complete</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/blog-2-column'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Blog grid 2</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/blog-3-column'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Blog grid 3</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/blog-3-column-no-sidebar'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Blog grid 3 no sidebar</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/blog-4-column-no-sidebar'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Blog grid 4 no sidebar</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/blog-list'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Blog list</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/blog-detail'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Blog detail</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/blog-detail-no-sidebar'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Blog detail no sidebar</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/about-us'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      About us</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/contact'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      Contact</NavLink>
                  </li>
                  <li className="md:px-0 md:pb-1 px-4">
                    <NavLink to='/yaycommerce-react/faqs'
                             className={`relative inline-block md:pt-1 md:pb-0 py-[6px] after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}>
                      FAQs</NavLink>
                  </li>
                </ul>
              </li>
              <li className="md:mx-5 relative group">
                <NavLink to='/yaycommerce-react/products'
                         className={({isActive}) => (`relative block py-1 after:h-[1px] after:left-0 after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:right-0 ` + (isActive ? `md:after:right-0` : `after:right-full`))}>
                  Products</NavLink>
              </li>
              <li className="md:mx-5 relative group">
                <NavLink to='/yaycommerce-react/blog-2-column'
                         className={({isActive}) => (`relative block py-1 after:h-[1px] after:left-0 after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:right-0 ` + (isActive ? `md:after:right-0` : `after:right-full`))}>
                  Blog</NavLink>
              </li>
            </ul>
            <ul className="md:hidden block py-4 border-t border-b border-solid border-gray-light2">
              <li className="md:mx-5 relative group">
                <NavLink to='/yaycommerce-react/pages'
                         className={({isActive}) => (`relative block py-1 after:h-[1px] after:left-0 after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:right-0 ` + (isActive ? `md:after:right-0` : `after:right-full`))}>
                  Contact</NavLink>
              </li>
              <li className="md:mx-5 relative group">
                <NavLink to='/yaycommerce-react/pages'
                         className={({isActive}) => (`relative block py-1 after:h-[1px] after:left-0 after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:right-0 ` + (isActive ? `md:after:right-0` : `after:right-full`))}>
                  About us</NavLink>
              </li>
              <li className="md:mx-5 relative group">
                <NavLink to='/yaycommerce-react/pages'
                         className={({isActive}) => (`relative block py-1 after:h-[1px] after:left-0 after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out group-hover:after:right-0 ` + (isActive ? `md:after:right-0` : `after:right-full`))}>
                  My account</NavLink>
              </li>
            </ul>
            <ul className="md:hidden block pt-[30px]">
              <li className="mb-5">
                <NavLink to='#/' className="inline-flex items-center">
                  <span
                    className="flex items-center justify-center h-[30px] w-[30px] rounded-[15px] bg-gray-light2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#5A6D80"
                        d="M11.14 4.889A3.139 3.139 0 018 8.028v1.5a4.639 4.639 0 004.64-4.639h-1.5zM8 8.028a3.139 3.139 0 01-3.139-3.139h-1.5a4.639 4.639 0 004.64 4.639v-1.5zM4.861 4.889a3.139 3.139 0 013.14-3.139V.25a4.639 4.639 0 00-4.64 4.639h1.5zm3.14-3.139a3.139 3.139 0 013.138 3.139h1.5A4.639 4.639 0 008 .25v1.5zM.284 14.777a.75.75 0 001.432.446l-1.432-.446zm14 .446a.75.75 0 101.432-.446l-1.432.446zm-12.568 0c.313-1.005.835-1.602 1.732-1.987.964-.414 2.396-.597 4.552-.597v-1.5c-2.184 0-3.88.176-5.144.719-1.332.572-2.14 1.53-2.572 2.919l1.432.446zM8 12.639c2.156 0 3.588.183 4.553.597.896.385 1.419.982 1.731 1.987l1.432-.446c-.432-1.388-1.24-2.347-2.571-2.92-1.265-.542-2.96-.718-5.145-.718v1.5z"
                      ></path>
                    </svg>
                  </span>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to='#/' className="inline-flex items-center">
                  <span
                    className="flex items-center justify-center h-[30px] w-[30px] rounded-[15px] bg-gray-light2 mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="14"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        fill="#5A6D80"
                        d="M15.047 2.85l-.647.38.647-.38zm-13.565 0l.647.38-.647-.38zM2.52 7.848l-.548.512.548-.512zm11.491 0l.548.512-.548-.512zM6.669 1.783l-.439.608.439-.608zm3.192 0l.438.608-.438-.608zM6.803 12.435l-.548.512.548-.512zm2.923 0l-.548-.512.548.512zm-2.375-.512L3.068 7.337 1.97 8.36l4.284 4.587 1.096-1.024zm6.11-4.586l-4.283 4.586 1.096 1.024 4.284-4.587-1.096-1.023zm-10.393 0C1.815 5.995 1.36 4.542 2.129 3.229L.835 2.472C-.426 4.627.523 6.81 1.97 8.36l1.097-1.023zM14.4 3.229c.768 1.313.315 2.766-.938 4.108l1.096 1.023c1.448-1.55 2.398-3.733 1.137-5.888l-1.295.757zm-12.27 0c.493-.844 1.155-1.296 1.833-1.433.681-.137 1.476.025 2.267.595l.877-1.217C6.032.4 4.82.094 3.667.326 2.512.558 1.513 1.312.835 2.472l1.294.757zm8.17-.838c.79-.57 1.585-.732 2.266-.595.679.137 1.34.59 1.834 1.433l1.295-.757c-.679-1.16-1.677-1.914-2.833-2.146-1.152-.232-2.365.074-3.44.848l.877 1.217zm-1.318 1.17c.24-.257.73-.747 1.317-1.17l-.877-1.217a11.097 11.097 0 00-1.534 1.36l1.094 1.027zM6.23 2.391a9.604 9.604 0 011.318 1.17L8.64 2.534a11.098 11.098 0 00-1.534-1.36L6.23 2.391zm1.658.143a.515.515 0 01.753 0L7.548 3.561a.985.985 0 001.434 0L7.888 2.534zM6.255 12.947a2.75 2.75 0 004.02 0l-1.097-1.024a1.25 1.25 0 01-1.827 0l-1.096 1.024z"
                      ></path>
                    </svg>
                  </span>
                  Wishlist
                </NavLink>
              </li>
            </ul>
            <div className="md:hidden relative grid grid-cols-2 -mx-5 mt-20 p-5 shadow-[0_-1px_5px_rgba(0,0,0,0.03)]">
              <Dropdown labelName={"USD"} options={units}/>
              <span className="absolute left-2/4 top-3 bottom-3 w-[1px] h-[35px] bg-gray-light2"></span>
              <Dropdown labelName={"English"} options={languages}/>
            </div>
          </div>
          <ul className="grid md:grid-cols-4 gap-x-5 grid-cols-3 items-center">
            <li>
              <button className="relative group block text-black2" type="button" onClick={toggleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                  className="hover:scale-110"
                >
                  <ellipse
                    cx="9.622"
                    cy="9.417"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    rx="8.622"
                    ry="8.417"
                  ></ellipse>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.62 15.709L19 19"
                  ></path>
                </svg>
                <span
                  className="absolute top-10 left-2/4 -translate-x-2/4 z-[1] hidden md:block invisible opacity-0 transition-all ease-in-out duration-300 px-[6px] py-1 min-w-max text-xs text-white bg-black2 rounded-sm after:absolute after:w-0 after:h-0 after:-top-[5px] after:left-2/4 after:-translate-x-2/4 after:border-x-[6px] after:border-b-[6px] after:border-solid after:border-x-transparent after:border-b-black2 group-hover:top-7 group-hover:opacity-100 group-hover:visible">Search</span>
              </button>
            </li>
            <li className="md:block hidden">
              <a href="#/" className="group relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  fill="none"
                  viewBox="0 0 24 20"
                  className="hover:scale-110"
                >
                  <path
                    fill="#122940"
                    d="M21.336 3.562l-.864.503.864-.503zm-18.672 0l.864.503-.864-.503zm1.428 6.92l-.733.68.733-.68zm15.816 0l.733.68-.733-.68zM9.803 2.085l-.587.81.587-.81zm4.394 0l.587.81-.587-.81zm-.731 15.338l.732.68-.732-.68zm-2.199-.68l-6.443-6.94-1.465 1.36 6.443 6.94 1.465-1.36zm7.909-6.94l-6.443 6.94 1.465 1.36 6.443-6.94-1.465-1.36zm-14.352 0C3.096 7.94 2.457 5.907 3.528 4.065L1.799 3.059c-1.721 2.96-.43 5.962 1.56 8.104l1.465-1.36zm15.648-5.737c1.071 1.842.432 3.875-1.296 5.737l1.465 1.36c1.99-2.141 3.281-5.143 1.56-8.103l-1.729 1.006zm-16.944 0c.685-1.177 1.603-1.81 2.546-2 .945-.192 2.047.034 3.142.829l1.174-1.62C8.916.206 7.255-.216 5.677.104 4.095.424 2.728 1.463 1.799 3.06l1.729 1.006zm11.256-1.171c1.095-.795 2.197-1.021 3.143-.83.942.191 1.86.824 2.545 2l1.729-1.005C21.272 1.463 19.905.425 18.323.104c-1.578-.32-3.24.102-4.713 1.17l1.174 1.62zm-1.819 1.623a13.28 13.28 0 011.819-1.623l-1.174-1.62a15.268 15.268 0 00-2.107 1.879l1.462 1.364zM9.216 2.894a13.28 13.28 0 011.819 1.623l1.462-1.364a15.269 15.269 0 00-2.107-1.879l-1.174 1.62zm2.287.259c.27-.29.724-.29.994 0l-1.462 1.364c.52.558 1.41.558 1.93 0l-1.462-1.364zM9.802 18.102a3 3 0 004.396 0l-1.465-1.36a1 1 0 01-1.466 0l-1.465 1.36z"
                  ></path>
                </svg>
                <span
                  className="absolute top-10 left-2/4 -translate-x-2/4 z-[1] hidden md:block invisible opacity-0 transition-all ease-in-out duration-300 px-[6px] py-1 min-w-max text-xs text-white bg-black2 rounded-sm after:absolute after:w-0 after:h-0 after:-top-[5px] after:left-2/4 after:-translate-x-2/4 after:border-x-[6px] after:border-b-[6px] after:border-solid after:border-x-transparent after:border-b-black2 group-hover:top-7 group-hover:opacity-100 group-hover:visible">Wishlist</span>
              </a>
            </li>
            <li>
              <button className="group relative block text-black2" type="button" onClick={props.buttonCart}>
                <span
                  className="absolute -top-[4px] -right-[7px] z-[1] text-[11px] leading-4 flex items-center justify-center text-white font-semibold bg-green w-[18px] h-[18px] rounded-[9px]">7</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  fill="none"
                  viewBox="0 0 19 20"
                  className="hover:scale-110"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.419 19H5.573c-2.883 0-5.094-1.037-4.466-5.211L1.84 8.13c.387-2.082 1.72-2.88 2.89-2.88h9.567c1.188 0 2.444.858 2.891 2.88l.732 5.658C18.452 17.49 16.3 19 13.419 19z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.547 5.046A4.053 4.053 0 009.488 1v0a4.069 4.069 0 00-2.883 1.179A4.038 4.038 0 005.41 5.046h0"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M13.101 9.55h-.044M5.943 9.55H5.9"
                  ></path>
                </svg>
                <span
                  className="absolute top-10 left-2/4 -translate-x-2/4 z-[1] hidden md:block invisible opacity-0 transition-all ease-in-out duration-300 px-[6px] py-1 min-w-max text-xs text-white bg-black2 rounded-sm after:absolute after:w-0 after:h-0 after:-top-[5px] after:left-2/4 after:-translate-x-2/4 after:border-x-[6px] after:border-b-[6px] after:border-solid after:border-x-transparent after:border-b-black2 group-hover:top-7 group-hover:opacity-100 group-hover:visible">My cart</span>
              </button>
            </li>
            <li className="md:block hidden">
              <a href="#/" className="group relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                  className="hover:scale-110"
                >
                  <path
                    fill="#122940"
                    d="M14 6a4 4 0 01-4 4v2a6 6 0 006-6h-2zm-4 4a4 4 0 01-4-4H4a6 6 0 006 6v-2zM6 6a4 4 0 014-4V0a6 6 0 00-6 6h2zm4-4a4 4 0 014 4h2a6 6 0 00-6-6v2zM.045 18.703a1 1 0 101.91.594l-1.91-.594zm18 .594a1 1 0 101.91-.594l-1.91.594zm-16.09 0c.399-1.282 1.064-2.041 2.206-2.532C5.394 16.235 7.23 16 10 16v-2c-2.809 0-4.996.226-6.628.928-1.723.74-2.769 1.98-3.327 3.775l1.91.594zM10 16c2.771 0 4.606.235 5.839.765 1.143.491 1.807 1.25 2.206 2.532l1.91-.594c-.558-1.794-1.604-3.035-3.327-3.775C14.996 14.226 12.81 14 10 14v2z"
                  ></path>
                </svg>
                <span
                  className="absolute top-10 left-2/4 -translate-x-2/4 z-[1] hidden md:block invisible opacity-0 transition-all ease-in-out duration-300 px-[6px] py-1 min-w-max text-xs text-white bg-black2 rounded-sm after:absolute after:w-0 after:h-0 after:-top-[5px] after:left-2/4 after:-translate-x-2/4 after:border-x-[6px] after:border-b-[6px] after:border-solid after:border-x-transparent after:border-b-black2 group-hover:top-7 group-hover:opacity-100 group-hover:visible">My account</span>
              </a>
            </li>
            <li className="md:hidden flex ml-1">
              <button className="relative group" onClick={() => openHandler()}>
                <div
                  className="relative flex overflow-hidden items-center justify-center w-[22px] h-[18px] transform transition-all">
                  <div
                    className="flex flex-col justify-between w-full h-full transform transition-all duration-300 origin-center overflow-hidden">
                    <div
                      className={`bg-black2 h-[2px] w-5 transform transition-all duration-300 origin-left delay-100 ${openMenu && `translate-y-6`}`}></div>
                    <div
                      className={`bg-black2 h-[2px] w-5 rounded transform transition-all duration-300 delay-75 ${openMenu && `translate-y-6`}`}></div>
                    <div
                      className={`bg-black2 h-[2px] w-5 transform transition-all duration-300 origin-left ${openMenu && `translate-y-6`}`}></div>

                    <div
                      className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 flex ${openMenu ? `translate-x-0 w-12` : `-translate-x-10 w-0`}`}>
                      <div
                        className={`absolute bg-black2 h-[2px] w-5 transform transition-all duration-500 delay-300 ${openMenu ? `rotate-45` : `rotate-0`}`}></div>
                      <div
                        className={`absolute bg-black2 h-[2px] w-5 transform transition-all duration-500 delay-300 ${openMenu ? `-rotate-45` : `-rotate-0`}`}></div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </div>
        <DrawerSearch isSearchShowing={isSearchShowing} hide={toggleSearch} />
      </div>
    </header>
  );
}