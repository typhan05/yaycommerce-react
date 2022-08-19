import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from "../../assets/images/logo.svg"
import Dropdown from "../../components/Dropdown";

const units = [
  {id: 1, name: 'USD'},
  {id: 2, name: 'EUR'},
  {id: 3, name: 'GBP'},
  {id: 4, name: 'JPY'},
];
const languages = [
  {id: 1, name: 'English'},
  {id: 2, name: 'Français'},
  {id: 3, name: 'Spanish'},
];

export default function Header(props) {
  return (
    <header className="text-black2">
      <div className="bg-gray-light4 py-3 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <ul className="grid gap-x-3 grid-cols-3">
            <li><a href="#/">Contact</a></li>
            <li><a href="#/">About us</a></li>
            <li><a href="#/">My account</a></li>
          </ul>
          <p>Get Free delivery from $100</p>
          <div className="grid gap-x-3 grid-cols-2">
            <Dropdown labelName={"USD"} options={units}/>
            <Dropdown labelName={"English"} options={languages}/>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <a href="/yaycommerce-react/"><img src={Logo} alt="logo"/></a>
          <ul className={"flex"}>
            <li className="px-5">
              <NavLink to='/yaycommerce-react/' className="group transition-all duration-300 ease-in-out">
                {({ isActive }) => (
                  <span className={ isActive ? 'bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-no-repeat bg-[length:100%_2px] pb-2' : 'bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-2'}>Home</span>
                )}
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to='/yaycommerce-react/shops' className="group transition-all duration-300 ease-in-out">
                {({ isActive }) => (
                  <span className={ isActive ? 'bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-no-repeat bg-[length:100%_2px] pb-2' : 'bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-2'}>Shops</span>
                )}
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to='/yaycommerce-react/products' className="group transition-all duration-300 ease-in-out">
                {({ isActive }) => (
                  <span className={ isActive ? 'bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-no-repeat bg-[length:100%_2px] pb-2' : 'bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-2'}>Products</span>
                )}
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to='/yaycommerce-react/blog' className="group transition-all duration-300 ease-in-out">
                {({ isActive }) => (
                  <span className={ isActive ? 'bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-no-repeat bg-[length:100%_2px] pb-2' : 'bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-2'}>Blog</span>
                )}
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink to='/yaycommerce-react/pages' className="group transition-all duration-300 ease-in-out">
                {({ isActive }) => (
                  <span className={ isActive ? 'bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-no-repeat bg-[length:100%_2px] pb-2' : 'bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out pb-2'}>Pages</span>
                )}
              </NavLink>
            </li>
          </ul>
          <ul className="grid gap-x-5 grid-cols-4 items-center">
            <li>
              <button className="block text-black2" type="button" onClick={props.buttonSearch}>
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
              </button>
            </li>
            <li>
              <a href="#/">
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
              </a>
            </li>
            <li>
              <button className="block text-black2" type="button" onClick={props.buttonCart}>
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
              </button>
            </li>
            <li>
              <a href="#/">
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
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}