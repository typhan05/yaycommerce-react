import React, { useState } from "react";
import Logo from "../../assets/images/logo.svg";

const menuLists = [
  {
    title: "Account",
    lists: [
      {
        href: "#/",
        text: "Login/register",
      },
      {
        href: "#/",
        text: "View cart",
      },
      {
        href: "#/",
        text: "My wishlist",
      },
      {
        href: "#/",
        text: "Check out",
      },
      {
        href: "#/",
        text: "Order tracking",
      },
    ],
  },
  {
    title: "Services",
    lists: [
      {
        href: "#/",
        text: "About us",
      },
      {
        href: "#/",
        text: "FAQ’s",
      },
      {
        href: "#/",
        text: "Returns & refund",
      },
      {
        href: "#/",
        text: "Free shipping",
      },
      {
        href: "#/",
        text: "Careers",
      },
    ],
  },
  {
    title: "Newsletter",
    description:
      "Enter your email below to be the first to know about new collections and product launches.",
    form: {
      input: {
        placeholder: "Enter your email",
      },
      button: {
        text: "Submit",
      },
    },
    info: "We promise not send spam to you!",
  },
];

export default function Footer() {
  const [activeId, setActiveId] = useState(0);
  const openMenu = (index) => {
    setActiveId((prevState) => (prevState === index ? -1 : index));
  };

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <footer className="md:pt-[100px] pt-[75px]">
      <div className="flex flex-wrap justify-center">
        <div className="container mx-auto">
          <div className="flex flex-wrap md:mb-4 w-full md:pb-[100px] pb-[10px]">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <a href="#/" className="inline-flex mb-5">
                <img src={Logo} alt="logo-footer" />
              </a>
              <p className="mb-2">
                102 Washington Square South <br />
                New York, NY 10012
              </p>
              <p className="mb-2">
                <a
                  href="tel:+91-80-6156-1999"
                  className={`relative inline-block after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}
                >
                  +91-80-6156-1999
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="mailto:support@remitstore.com"
                  className={`relative inline-block after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}
                >
                  support@remitstore.com
                </a>
              </p>
              <div className="hidden xl:flex items-center w-full space-x-5 mt-[18px]">
                <a className="max-w-max" target="_blank" href="#/">
                  <title>Facebook icon</title>
                  <div className="text-gray hover:text-black2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="16"
                      fill="none"
                      viewBox="0 0 9 16"
                    >
                      <path
                        fill="currentColor"
                        d="M5.393 16V8.703h2.449l.367-2.845H5.393V4.042c0-.824.228-1.385 1.41-1.385h1.505V.111A20.41 20.41 0 006.114 0C3.943 0 2.456 1.326 2.456 3.76v2.098H0v2.845h2.456V16h2.937z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a className="max-w-max" target="_blank" href="#/">
                  <title>Youtobe icon</title>
                  <div className="text-gray hover:text-black2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      fill="none"
                      viewBox="0 0 20 14"
                    >
                      <path
                        fill="currentColor"
                        d="M19.558 2l.024.162A2.52 2.52 0 0017.86.423l-.017-.004C16.282 0 10.009 0 10.009 0S3.75-.008 2.175.42A2.522 2.522 0 00.44 2.145l-.004.017c-.582 3.007-.586 6.62.026 9.839l-.026-.163a2.52 2.52 0 001.724 1.74l.017.003c1.558.42 7.833.42 7.833.42s6.258 0 7.834-.42a2.521 2.521 0 001.736-1.726l.004-.017C19.848 10.44 20 8.83 20 7.187v-.182-.19c0-1.644-.152-3.254-.442-4.814zM8.007 10.008V4.001l5.221 3.008-5.221 2.998z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a className="max-w-max" target="_blank" href="#/">
                  <title>Instagram icon</title>
                  <div className="text-gray hover:text-black2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M11.585 0h-7.17A4.42 4.42 0 000 4.416v7.17A4.42 4.42 0 004.415 16h7.17A4.42 4.42 0 0016 11.585v-7.17A4.42 4.42 0 0011.585 0zm2.995 11.585a3 3 0 01-2.995 2.996h-7.17a3 3 0 01-2.995-2.996v-7.17A3 3 0 014.415 1.42h7.17a3 3 0 012.995 2.996v7.17zM8 3.878A4.127 4.127 0 003.877 8 4.127 4.127 0 008 12.123a4.127 4.127 0 004.123-4.122A4.127 4.127 0 008 3.878zm0 6.825A2.706 2.706 0 015.297 8 2.706 2.706 0 018 5.297 2.706 2.706 0 0110.703 8 2.706 2.706 0 018 10.704zm3.56-7.724a1.045 1.045 0 011.472 0 1.046 1.046 0 010 1.472 1.051 1.051 0 01-.736.305c-.274 0-.543-.111-.736-.305a1.05 1.05 0 01-.305-.736c0-.274.111-.543.305-.736z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a className="max-w-max" target="_blank" href="#/">
                  <title>Twitter icon</title>
                  <div className="text-gray hover:text-black2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="14"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        fill="currentColor"
                        d="M15.27 3.475A7.456 7.456 0 0017 1.653a6.475 6.475 0 01-1.996.54 3.453 3.453 0 001.53-1.956 7.32 7.32 0 01-2.195.877A3.47 3.47 0 0011.777 0c-1.93 0-3.493 1.586-3.493 3.543 0 .27.033.54.1.81A10.089 10.089 0 011.164.64 3.483 3.483 0 00.7 2.43c0 1.215.598 2.294 1.563 2.935-.565-.033-1.13-.168-1.597-.438v.034A3.535 3.535 0 003.46 8.434a3.85 3.85 0 01-.898.135c-.233 0-.433-.034-.666-.067a3.483 3.483 0 003.26 2.462 6.962 6.962 0 01-4.324 1.518c-.3 0-.566-.033-.832-.067C1.53 13.427 3.36 14 5.356 14c6.42 0 9.914-5.364 9.914-10.054v-.472z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            {menuLists.map((item, index) => {
              return (
                <div
                  key={`menu-item` + index}
                  className="w-full md:pt-0 pt-[30px] md:mb-0 md:mt-0 mt-[10px] md:border-0 border-t border-solid border-gray-light2 sm:w-1/2 md:w-1/2 lg:w-1/4"
                >
                  <h3
                    onClick={() => openMenu(index)}
                    className={`md:text-[22px] flex justify-between items-center text-lg font-semibold mb-4`}
                  >
                    {item.title}
                    <span
                      className={`md:hidden block transition-all duration-300 ${
                        activeId === index ? `-rotate-180` : `rotate-0`
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="7"
                        fill="none"
                        viewBox="0 0 12 7"
                      >
                        <path
                          stroke="#5A6D80"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 1L6 6 1 1"
                        ></path>
                      </svg>
                    </span>
                  </h3>
                  <ul
                    className={`md:overflow-visible overflow-hidden transition-all duration-500 ${
                      activeId === index ? `max-h-40` : `max-h-0`
                    }`}
                  >
                    {item?.lists?.map((li, idx) => {
                      return (
                        <li key={`li-` + idx} className="mb-2">
                          <a
                            href={li.href}
                            className={`relative inline-block after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0`}
                          >
                            {li.text}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                  <div
                    className={`md:overflow-visible overflow-hidden transition-all duration-500 ${
                      activeId === index ? `max-h-40` : `md:max-h-40 max-h-0`
                    }`}
                  >
                    {item?.description && (
                      <p className="mb-5 text-gray">{item?.description}</p>
                    )}
                    {item?.form && (
                      <form action="#">
                        <div
                          className={`flex items-center bg-gray-light6 rounded-xl border p-1 pl-5 ${
                            focused
                              ? "shadow-[0_5px_25px_rgba(0,0,0,0.07)] border-black2"
                              : "border-transparent"
                          }`}
                        >
                          <label htmlFor="inline-full-name">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="20"
                              fill="none"
                              viewBox="0 0 22 20"
                            >
                              <path
                                stroke="#5A6D80"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16.902 6.851l-4.443 3.613c-.84.666-2.02.666-2.86 0l-4.48-3.613"
                              ></path>
                              <path
                                stroke="#5A6D80"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.909 19C18.95 19.008 21 16.51 21 13.438V6.57C21 3.499 18.95 1 15.909 1H6.09C3.05 1 1 3.499 1 6.57v6.868C1 16.51 3.05 19.008 6.091 19h9.818z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </label>
                          <input
                            className="bg-gray-light6 appearance-none w-full py-2 px-[15px] text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
                            id="inline-full-name"
                            type="text"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            placeholder={item?.form?.input?.placeholder}
                          />
                          <button
                            className="flex-shrink-0 bg-black2 border-2 border-solid border-black2 text-white font-medium py-2 px-4 rounded-[10px] transition-all duration-300 hover:bg-white hover:text-black2"
                            type="submit"
                          >
                            {item?.form?.button?.text}
                          </button>
                        </div>
                        <small className="inline-block my-3 text-gray italic">
                          We promise not send spam to you!
                        </small>
                      </form>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center py-[30px] shadow-[0_-1px_0px_#E9EFF5]">
            <p className="text-gray text-center md:text-base text-sm">
              Copyright © 2022 <span className="text-black2">RemitStore</span>.
              All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
