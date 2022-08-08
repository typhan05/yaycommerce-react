import React from 'react';
import Logo from "../../assets/images/logo.svg"

export default function Footer() {
  return (
    <footer className="pt-[100px]">
      <div className="flex flex-wrap justify-center">
        <div className="container mx-auto">
          <div className="flex flex-wrap mb-4 w-full text-black2 pb-[100px]">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <a href="#/" className="inline-flex mb-3"><img src={Logo} alt="logo-footer"/></a>
              <p className="mb-2">102 Washington Square South <br/>New York, NY 10012</p>
              <p className="mb-2"><a href="tel:+91-80-6156-1999">+91-80-6156-1999</a></p>
              <p><a href="mailto:support@remitstore.com">support@remitstore.com</a></p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 pl-8">
              <h3 className="text-[22px] font-semibold mb-4">Account</h3>
              <ul>
                <li><a href="#/">Login/register</a></li>
                <li><a href="#/">View cart</a></li>
                <li><a href="#/">My wishlist</a></li>
                <li><a href="#/">Check out</a></li>
                <li><a href="#/">Order tracking</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 ">
              <h3 className="text-[22px] font-semibolds mb-4">Services</h3>
              <ul>
                <li><a href="#/">About us</a></li>
                <li><a href="#/">FAQ’s</a></li>
                <li><a href="#/">Returns & refund</a></li>
                <li><a href="#/">Free shipping</a></li>
                <li><a href="#/">Careers</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4">
              <h3 className="text-[22px] font-semibolds mb-4">Newsletter</h3>
              <p className="mb-5">Enter your email below to be the first to know about new collections and product
                launches.</p>
              <form action="#">
                <div className="flex items-center">
                  <input
                    className="bg-gray-light6 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
                    id="inline-full-name" type="text" placeholder="Enter your email"/>
                  <button className="flex-shrink-0 bg-green text-white font-bold py-2 px-4 rounded"
                          type="submit">Submit
                  </button>
                </div>
                <small>We promise not send spam to you!</small>
              </form>
            </div>
          </div>
          <div className="flex justify-center py-3 shadow-[0_-1px_0px_#E9EFF5]">
            <p className="text-gray">Copyright © 2022 RemitStore. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}