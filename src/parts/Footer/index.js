import React from 'react';
import Logo from "../../assets/images/logo.svg"

export default function Footer() {
  return (
    <footer className="pt-[100px]">
      <div className="flex flex-wrap justify-center">
        <div className="container mx-auto">
          <div className="flex flex-wrap mb-4 w-full text-black2 pb-[100px]">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <a href="#/" className="inline-flex mb-5"><img src={Logo} alt="logo-footer"/></a>
              <p className="mb-2">102 Washington Square South <br/>New York, NY 10012</p>
              <p className="mb-2"><a href="tel:+91-80-6156-1999">+91-80-6156-1999</a></p>
              <p><a href="mailto:support@remitstore.com">support@remitstore.com</a></p>
              <div className="hidden xl:flex items-start w-full space-x-5 mt-[18px]">
                <a className="max-w-max" target="_blank" href="#/">
                  <title>Facebook icon</title>
                  <div className="social_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="9"
                      height="16"
                      fill="none"
                      viewBox="0 0 9 16"
                    >
                      <path
                        fill="#5A6D80"
                        d="M5.393 16V8.703h2.449l.367-2.845H5.393V4.042c0-.824.228-1.385 1.41-1.385h1.505V.111A20.41 20.41 0 006.114 0C3.943 0 2.456 1.326 2.456 3.76v2.098H0v2.845h2.456V16h2.937z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a className="max-w-max" target="_blank" href="#/">
                  <title>Youtobe icon</title>
                  <div className="social_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="14"
                      fill="none"
                      viewBox="0 0 20 14"
                    >
                      <path
                        fill="#5A6D80"
                        d="M19.558 2l.024.162A2.52 2.52 0 0017.86.423l-.017-.004C16.282 0 10.009 0 10.009 0S3.75-.008 2.175.42A2.522 2.522 0 00.44 2.145l-.004.017c-.582 3.007-.586 6.62.026 9.839l-.026-.163a2.52 2.52 0 001.724 1.74l.017.003c1.558.42 7.833.42 7.833.42s6.258 0 7.834-.42a2.521 2.521 0 001.736-1.726l.004-.017C19.848 10.44 20 8.83 20 7.187v-.182-.19c0-1.644-.152-3.254-.442-4.814zM8.007 10.008V4.001l5.221 3.008-5.221 2.998z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a className="max-w-max" target="_blank" href="#/">
                  <title>Instagram icon</title>
                  <div className="social_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="#5A6D80"
                        fillRule="evenodd"
                        d="M11.585 0h-7.17A4.42 4.42 0 000 4.416v7.17A4.42 4.42 0 004.415 16h7.17A4.42 4.42 0 0016 11.585v-7.17A4.42 4.42 0 0011.585 0zm2.995 11.585a3 3 0 01-2.995 2.996h-7.17a3 3 0 01-2.995-2.996v-7.17A3 3 0 014.415 1.42h7.17a3 3 0 012.995 2.996v7.17zM8 3.878A4.127 4.127 0 003.877 8 4.127 4.127 0 008 12.123a4.127 4.127 0 004.123-4.122A4.127 4.127 0 008 3.878zm0 6.825A2.706 2.706 0 015.297 8 2.706 2.706 0 018 5.297 2.706 2.706 0 0110.703 8 2.706 2.706 0 018 10.704zm3.56-7.724a1.045 1.045 0 011.472 0 1.046 1.046 0 010 1.472 1.051 1.051 0 01-.736.305c-.274 0-.543-.111-.736-.305a1.05 1.05 0 01-.305-.736c0-.274.111-.543.305-.736z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a className="max-w-max" target="_blank" href="#/">
                  <title>Twitter icon</title>
                  <div className="social_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="14"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        fill="#5A6D80"
                        d="M15.27 3.475A7.456 7.456 0 0017 1.653a6.475 6.475 0 01-1.996.54 3.453 3.453 0 001.53-1.956 7.32 7.32 0 01-2.195.877A3.47 3.47 0 0011.777 0c-1.93 0-3.493 1.586-3.493 3.543 0 .27.033.54.1.81A10.089 10.089 0 011.164.64 3.483 3.483 0 00.7 2.43c0 1.215.598 2.294 1.563 2.935-.565-.033-1.13-.168-1.597-.438v.034A3.535 3.535 0 003.46 8.434a3.85 3.85 0 01-.898.135c-.233 0-.433-.034-.666-.067a3.483 3.483 0 003.26 2.462 6.962 6.962 0 01-4.324 1.518c-.3 0-.566-.033-.832-.067C1.53 13.427 3.36 14 5.356 14c6.42 0 9.914-5.364 9.914-10.054v-.472z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8">
              <h3 className="text-[22px] font-semibold mb-4">Account</h3>
              <ul>
                <li className="mb-2"><a href="#/">Login/register</a></li>
                <li className="mb-2"><a href="#/">View cart</a></li>
                <li className="mb-2"><a href="#/">My wishlist</a></li>
                <li className="mb-2"><a href="#/">Check out</a></li>
                <li className="mb-2"><a href="#/">Order tracking</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
              <h3 className="text-[22px] font-semibold mb-4">Services</h3>
              <ul>
                <li className="mb-2"><a href="#/">About us</a></li>
                <li className="mb-2"><a href="#/">FAQ’s</a></li>
                <li className="mb-2"><a href="#/">Returns & refund</a></li>
                <li className="mb-2"><a href="#/">Free shipping</a></li>
                <li className="mb-2"><a href="#/">Careers</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <h3 className="text-[22px] font-semibold mb-4">Newsletter</h3>
              <p className="mb-5 text-gray">Enter your email below to be the first to know about new collections and product
                launches.</p>
              <form action="#">
                <div className="flex items-center bg-gray-light6 rounded-xl p-1">
                  <input
                    className="bg-gray-light6 appearance-none w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
                    id="inline-full-name" type="text" placeholder="Enter your email"/>
                  <button className="flex-shrink-0 bg-green text-white font-medium py-2 px-4 rounded-[10px]"
                          type="submit">Submit
                  </button>
                </div>
                <small className="inline-block mt-3 text-gray">We promise not send spam to you!</small>
              </form>
            </div>
          </div>
          <div className="flex justify-center py-3 shadow-[0_-1px_0px_#E9EFF5]">
            <p className="text-gray">Copyright © 2022 <span className="text-black2">RemitStore</span>. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}