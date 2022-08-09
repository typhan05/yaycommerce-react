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
                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.39328 16.0005V8.70267H7.84187L8.20924 5.85774H5.39328V4.04166C5.39328 3.21825 5.621 2.6571 6.80312 2.6571L8.30835 2.65648V0.111872C8.04804 0.0780445 7.15449 0.000488281 6.1145 0.000488281C3.94282 0.000488281 2.45605 1.32606 2.45605 3.7599V5.85774H3.05176e-05V8.70267H2.45605V16.0005H5.39328Z" fill="#5A6D80"/>
                    </svg>
                  </div>
                </a>
                <a className="max-w-max" target="_blank" href="#/">
                  <title>Youtobe icon</title>
                  <div className="social_icon">
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.5575 2.00085L19.5825 2.16226C19.3409 1.31485 18.6884 0.66097 17.8592 0.42297L17.8417 0.418852C16.2826 0.000499571 10.0085 0.000499662 10.0085 0.000499662C10.0085 0.000499662 3.75023 -0.00773571 2.17525 0.418852C1.33026 0.66097 0.676934 1.31485 0.439437 2.14497L0.43527 2.16226C-0.147222 5.16897 -0.151389 8.78179 0.461103 12.001L0.43527 11.8379C0.676934 12.6853 1.32943 13.3392 2.15858 13.5772L2.17608 13.5813C3.73356 14.0005 10.0093 14.0005 10.0093 14.0005C10.0093 14.0005 16.2667 14.0005 17.8426 13.5813C18.6884 13.3392 19.3417 12.6853 19.5792 11.8552L19.5834 11.8379C19.8484 10.4396 20 8.83037 20 7.18661C20 7.12649 20 7.06555 19.9992 7.00461C20 6.94861 20 6.88191 20 6.8152C20 5.17061 19.8484 3.56144 19.5575 2.00085ZM8.00684 10.0072V4.0012L13.2284 7.00873L8.00684 10.0072Z" fill="#5A6D80"/>
                    </svg>
                  </div>
                </a>
                <a className="max-w-max" target="_blank" href="#/">
                  <title>Instagram icon</title>
                  <div className="social_icon">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5845 0.000488281H4.41536C1.98075 0.000488281 3.05176e-05 1.9813 3.05176e-05 4.41591V11.5851C3.05176e-05 14.0198 1.98075 16.0005 4.41536 16.0005H11.5845C14.0193 16.0005 16 14.0197 16 11.5851V4.41591C16.0001 1.9813 14.0193 0.000488281 11.5845 0.000488281ZM14.5805 11.5851C14.5805 13.237 13.2365 14.5809 11.5846 14.5809H4.41536C2.76351 14.581 1.41963 13.237 1.41963 11.5851V4.41591C1.41963 2.76407 2.76351 1.42009 4.41536 1.42009H11.5845C13.2365 1.42009 14.5804 2.76407 14.5804 4.41591V11.5851H14.5805ZM8.00003 3.87776C5.72668 3.87776 3.87723 5.72721 3.87723 8.00056C3.87723 10.2738 5.72668 12.1232 8.00003 12.1232C10.2734 12.1232 12.1228 10.2738 12.1228 8.00056C12.1228 5.72721 10.2734 3.87776 8.00003 3.87776ZM8.00003 10.7035C6.50955 10.7035 5.29683 9.49094 5.29683 8.00046C5.29683 6.50988 6.50945 5.29726 8.00003 5.29726C9.49061 5.29726 10.7032 6.50988 10.7032 8.00046C10.7032 9.49094 9.49051 10.7035 8.00003 10.7035ZM11.5604 2.9789C11.7535 2.78488 12.0222 2.67416 12.2957 2.67416C12.5702 2.67416 12.839 2.78488 13.032 2.9789C13.226 3.17196 13.3368 3.44074 13.3368 3.71519C13.3368 3.9887 13.226 4.25748 13.032 4.45149C12.838 4.64456 12.5702 4.75623 12.2957 4.75623C12.0222 4.75623 11.7534 4.64456 11.5604 4.45149C11.3664 4.25748 11.2547 3.9888 11.2547 3.71519C11.2547 3.44074 11.3663 3.17196 11.5604 2.9789Z" fill="#5A6D80"/>
                    </svg>
                  </div>
                </a>
                <a className="max-w-max" target="_blank" href="#/">
                  <title>Twitter icon</title>
                  <div className="social_icon">
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.2701 3.47519C15.9355 2.96916 16.5343 2.36193 17 1.6535C16.4012 1.92338 15.7026 2.12579 15.0039 2.19326C15.7358 1.75471 16.2681 1.08001 16.5343 0.236633C15.8689 0.641452 15.1037 0.945067 14.3386 1.11374C13.6732 0.405308 12.775 0.000488281 11.7769 0.000488281C9.84739 0.000488281 8.28379 1.58603 8.28379 3.54266C8.28379 3.81254 8.31706 4.08242 8.38359 4.3523C5.48927 4.18362 2.89436 2.76675 1.16441 0.641452C0.865001 1.14748 0.698661 1.75471 0.698661 2.4294C0.698661 3.64386 1.29749 4.72338 2.26226 5.36434C1.6967 5.33061 1.13115 5.19567 0.665393 4.92579V4.95952C0.665393 6.68001 1.86304 8.09687 3.45991 8.43422C3.19377 8.50169 2.86109 8.56916 2.56167 8.56916C2.3288 8.56916 2.12919 8.53543 1.89631 8.50169C2.3288 9.91856 3.62625 10.9306 5.15659 10.9643C3.95893 11.9089 2.46187 12.4824 0.831733 12.4824C0.53232 12.4824 0.266175 12.4487 3.05176e-05 12.4149C1.53036 13.427 3.36011 14.0005 5.35619 14.0005C11.7769 14.0005 15.2701 8.63663 15.2701 3.94748C15.2701 3.7788 15.2701 3.64386 15.2701 3.47519Z" fill="#5A6D80"/>
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