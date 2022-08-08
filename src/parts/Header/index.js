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

export default function Header() {
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
            <li className="px-5"><NavLink to='/yaycommerce-react/' className={({isActive}) =>
              isActive ? 'border-b border-solid border-black2 py-2' : 'py-2'
            }>Home</NavLink></li>
            <li className="px-5"><NavLink to='/yaycommerce-react/shops' className={({isActive}) =>
              isActive ? 'border-b border-solid border-black2 py-2' : 'py-2'
            }>Shops</NavLink></li>
            <li className="px-5"><NavLink to='/yaycommerce-react/products' className={({isActive}) =>
              isActive ? 'border-b border-solid border-black2 py-2' : 'py-2'
            }>Products</NavLink></li>
            <li className="px-5"><NavLink to='/yaycommerce-react/blog' className={({isActive}) =>
              isActive ? 'border-b border-solid border-black2 py-2' : 'py-2'
            }>Blog</NavLink></li>
            <li className="px-5"><NavLink to='/yaycommerce-react/pages' className={({isActive}) =>
              isActive ? 'border-b border-solid border-black2 py-2' : 'py-2'
            }>Pages</NavLink></li>
          </ul>
          <ul className="grid gap-x-5 grid-cols-4">
            <li>
              <a href="#/">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="9.62244" cy="9.41714" rx="8.62244" ry="8.41714" stroke="#122940" stroke-width="2"
                           stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M15.6198 15.7086L19.0002 19" stroke="#122940" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#/">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.3364 3.56201L20.472 4.06482L21.3364 3.56201ZM2.66364 3.56201L3.52804 4.06482L2.66364 3.56201ZM4.09156 10.4825L3.35874 11.1629H3.35874L4.09156 10.4825ZM19.9084 10.4825L20.6413 11.1629L19.9084 10.4825ZM9.80327 2.08397L9.21631 2.89358L9.80327 2.08397ZM14.1967 2.08397L14.7837 2.89358L14.1967 2.08397ZM13.4656 17.4215L14.1985 18.1019L13.4656 17.4215ZM11.2672 16.7411L4.82438 9.80207L3.35874 11.1629L9.80153 18.1019L11.2672 16.7411ZM19.1756 9.80207L12.7328 16.7411L14.1985 18.1019L20.6413 11.1629L19.1756 9.80207ZM4.82438 9.80207C3.09569 7.94025 2.45659 5.90676 3.52804 4.06482L1.79924 3.05919C0.0776278 6.01886 1.36979 9.02079 3.35874 11.1629L4.82438 9.80207ZM20.472 4.06482C21.5434 5.90676 20.9043 7.94025 19.1756 9.80207L20.6413 11.1629C22.6302 9.02079 23.9224 6.01886 22.2008 3.05919L20.472 4.06482ZM3.52804 4.06482C4.21283 2.88757 5.13102 2.25526 6.07354 2.06436C7.01933 1.87279 8.1208 2.09935 9.21631 2.89358L10.3902 1.27435C8.9164 0.205837 7.25481 -0.215516 5.67651 0.104163C4.09493 0.424504 2.72798 1.46259 1.79924 3.05919L3.52804 4.06482ZM14.7837 2.89358C15.8792 2.09935 16.9807 1.87279 17.9265 2.06436C18.869 2.25526 19.7872 2.88757 20.472 4.06482L22.2008 3.05919C21.272 1.46259 19.9051 0.424504 18.3235 0.104163C16.7452 -0.215516 15.0836 0.205837 13.6098 1.27435L14.7837 2.89358ZM12.9652 4.51749C13.298 4.16087 13.9736 3.4809 14.7837 2.89358L13.6098 1.27435C12.6531 1.96791 11.8784 2.75066 11.503 3.15296L12.9652 4.51749ZM9.21631 2.89358C10.0264 3.4809 10.702 4.16087 11.0348 4.51749L12.497 3.15296C12.1216 2.75066 11.3469 1.96792 10.3902 1.27435L9.21631 2.89358ZM11.503 3.15296C11.7732 2.86337 12.2268 2.86337 12.497 3.15296L11.0348 4.51749C11.5552 5.07519 12.4448 5.07519 12.9652 4.51749L11.503 3.15296ZM9.80153 18.1019C10.9884 19.3802 13.0116 19.3802 14.1985 18.1019L12.7328 16.7411C12.3372 17.1672 11.6628 17.1672 11.2672 16.7411L9.80153 18.1019Z"
                    fill="#122940"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#/">
                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M13.4189 19H5.57253C2.69037 19 0.479285 17.9629 1.10734 13.7886L1.83863 8.13146C2.22578 6.04861 3.55932 5.25146 4.72939 5.25146H14.2964C15.4837 5.25146 16.7398 6.10861 17.1872 8.13146L17.9185 13.7886C18.4519 17.4914 16.301 19 13.4189 19Z"
                        stroke="#122940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                    d="M13.5475 5.04574C13.5475 2.81136 11.7294 1.00004 9.48666 1.00004V1.00004C8.40669 0.995477 7.36937 1.41971 6.6041 2.17892C5.83882 2.93813 5.40862 3.96978 5.40863 5.04574H5.40863"
                    stroke="#122940" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.1015 9.54998H13.0568" stroke="#122940" stroke-width="2.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M5.94343 9.54998H5.89869" stroke="#122940" stroke-width="2.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#/">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.9999 6C13.9999 8.20914 12.2091 10 9.99994 10V12C13.3136 12 15.9999 9.31371 15.9999 6H13.9999ZM9.99994 10C7.7908 10 5.99994 8.20914 5.99994 6H3.99994C3.99994 9.31371 6.68623 12 9.99994 12V10ZM5.99994 6C5.99994 3.79086 7.7908 2 9.99994 2V0C6.68623 0 3.99994 2.68629 3.99994 6H5.99994ZM9.99994 2C12.2091 2 13.9999 3.79086 13.9999 6H15.9999C15.9999 2.68629 13.3136 0 9.99994 0V2Z"
                    fill="#122940"/>
                  <path
                    d="M0.0451629 18.7029C-0.118937 19.2302 0.175528 19.7907 0.70287 19.9548C1.23021 20.1189 1.79074 19.8245 1.95484 19.2971L0.0451629 18.7029ZM18.0452 19.2971C18.2093 19.8245 18.7698 20.1189 19.2971 19.9548C19.8245 19.7907 20.1189 19.2302 19.9548 18.7029L18.0452 19.2971ZM1.95484 19.2971C2.35386 18.0149 3.01855 17.256 4.16115 16.7652C5.39434 16.2355 7.22894 16 10 16V14C7.19104 14 5.00428 14.2264 3.3718 14.9276C1.64872 15.6677 0.603427 16.9089 0.0451629 18.7029L1.95484 19.2971ZM10 16C12.7711 16 14.6057 16.2355 15.8389 16.7652C16.9815 17.256 17.6461 18.0149 18.0452 19.2971L19.9548 18.7029C19.3966 16.9089 18.3513 15.6677 16.6282 14.9276C14.9957 14.2264 12.809 14 10 14V16Z"
                    fill="#122940"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}