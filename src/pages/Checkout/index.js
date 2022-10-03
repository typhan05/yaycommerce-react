import React, {useState} from 'react';
import PreFooter from "../../blocks/pre-footer";
import Select from "react-select";

const review_options = [
  {value: 'recent', label: 'Recent reviews'},
  {value: 'latest', label: 'Latest reviews'},
  {value: 'yesterday', label: 'Yesterday reviews'}
];

const optionPayments = [
  {text: 'Credit/debit card'},
  {text: 'Direct bank transfer'},
  {text: 'Cash on delivery'},
  {text: 'Paypal'},
]

const customStyles = {
  control: (base, state) => ({
    ...base,
    height: '54px',
    'min-height': '54px',
    borderRadius: '7px',
    boxShadow: state.isFocused ? '0px 5px 15px rgba(0, 0, 0, 0.07)' : 0,
    borderColor: state.isFocused
      ? '#122940'
      : '#D3DCE5',
    '&:hover': {
      borderColor: state.isFocused
        ? '#122940'
        : '#D3DCE5',
    },
    padding: '0 5px'
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#5A6D80',
      opacity: 0.5,
    }
  },
  option: (base, { isFocused }) => {
    return {
      ...base,
      backgroundColor: isFocused ? '#F2F2F2' : '#FFFFFF',
      color: '#122940'
    };
  }
};

export default function Checkout() {
  const [activeId, setActiveId] = useState(0);
  const openPayment = (index) => {
    setActiveId(index)
  }
  return (
    <>
      <section className="md:mb-[100px] mb-20">
        <div className="container mx-auto">
          <div
            className="relative py-[30px] max-w-[550px] mx-auto after:inset-x-0 after:h-0.5 after:absolute after:top-1/2 after:-translate-y-1/2 after:block after:rounded-lg after:bg-[rgba(211,220,229,0.5)]"
          >
            <ol
              className="relative z-10 flex justify-between md:text-lg text-base md:font-bold font-semibold text-gray"
            >
              <li className="flex items-center justify-center p-3 bg-white">
                <span
                  className="flex justify-center items-center w-[30px] h-[30px] leading-[30px] bg-black2 text-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                    fill="none"
                    viewBox="0 0 15 12"
                    className="md:max-w-full max-w-[12px]"
                  >
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M2 6l3.668 4L13 2"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 md:text-lg text-[0px] text-black2"> My cart </span>
              </li>

              <li className="flex items-center justify-center p-3 bg-white">
                <span
                  className="flex justify-center items-center w-[30px] h-[30px] leading-[30px] text-white bg-green text-center rounded-full">2</span>
                <span className="ml-2 text-green"> Shipping detail </span>
              </li>

              <li className="flex items-center justify-center p-3 bg-white">
                <span
                  className="flex justify-center items-center w-[30px] h-[30px] leading-[30px] text-center bg-gray-light12 rounded-full">3</span>
                <span className="ml-2 md:text-lg text-[0px]"> Completed </span>
              </li>
            </ol>
          </div>
          <h1 className="md:text-4xl text-2xl md:font-bold font-semibold md:mb-9 mb-4">Checkout</h1>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-[90px]">
            <div className="lg:col-span-7">
              <div className="flex px-5 py-4 bg-gray-light4 rounded-[9px] mb-7">
                <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
                  <path
                    d="M11.7634 7.76135L11.8704 7.59794C11.9261 7.51289 11.8651 7.4 11.7634 7.4H7.5C7.38165 7.4 7.28571 7.30406 7.28571 7.18571V1.23047V1.21257C7.28571 1.14957 7.20378 1.12513 7.16927 1.17784L1.18868 10.3118L1.10336 10.4421C1.05895 10.51 1.10761 10.6 1.18868 10.6H5.44878H5.50273C5.61957 10.6 5.71429 10.6947 5.71429 10.8116V16.6027C5.71429 16.7205 5.86833 16.7647 5.93283 16.6662L11.7634 7.76135Z"
                    stroke="#5A6D80"
                    stroke-width="2"
                    stroke-linejoin="round"/>
                </svg>
                <p className="text-sm">Have a coupon? <a href="#/" className="font-medium hover:underline">Click here to enter your code</a>
                </p>
              </div>
              <form>
                <div className="md:grid md:grid-cols-2 gap-8">
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="first-name" className="block mb-2 text-sm font-medium">First Name<span
                      className="text-pink">*</span></label>
                    <input type="text" id="first-name"
                           className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                           placeholder="Enter first name" required/>
                  </div>
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="last-name" className="block mb-2 text-sm font-medium">Email Address<span
                      className="text-pink">*</span></label>
                    <input type="text" id="last-name"
                           className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                           placeholder="Enter last name" required/>
                  </div>
                </div>
                <div className="md:mb-7 mb-6">
                  <label htmlFor="company" className="block mb-2 text-sm font-medium">Company (Optional)</label>
                  <input type="text" id="company"
                         className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                         placeholder="Enter your company" required/>
                </div>
                <div className="md:grid md:grid-cols-2 gap-8">
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="country" className="block mb-2 text-sm font-medium">Country/Region<span
                      className="text-pink">*</span></label>
                    <Select options={review_options} defaultValue={review_options[0]} styles={customStyles}
                            components={{IndicatorSeparator: () => null}}/>
                  </div>
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="state" className="block mb-2 text-sm font-medium">State/Province<span
                      className="text-pink">*</span></label>
                    <Select options={review_options} defaultValue={review_options[0]} styles={customStyles}
                            components={{IndicatorSeparator: () => null}}/>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 gap-8">
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="city" className="block mb-2 text-sm font-medium">Town/City<span
                      className="text-pink">*</span></label>
                    <Select options={review_options} defaultValue={review_options[0]} styles={customStyles}
                            components={{IndicatorSeparator: () => null}}/>
                  </div>
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="zip" className="block mb-2 text-sm font-medium">Zip/Postal code<span
                      className="text-pink">*</span></label>
                    <Select options={review_options} defaultValue={review_options[0]} styles={customStyles}
                            components={{IndicatorSeparator: () => null}}/>
                  </div>
                </div>
                <div className="md:mb-7 mb-6">
                  <label htmlFor="street" className="block mb-2 text-sm font-medium">Street address<span
                    className="text-pink">*</span></label>
                  <input type="text" id="street"
                         className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                         placeholder="House number and street name" required/>
                </div>
                <div className="md:mb-7 mb-6">
                  <input type="text" id="apartment"
                         className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                         placeholder="Apartment, suite, unit, etc. (optional)" required/>
                </div>
                <div className="md:grid md:grid-cols-2 gap-8">
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone number<span
                      className="text-pink">*</span></label>
                    <input type="text" id="phone"
                           className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                           placeholder="Enter your fullname" required/>
                  </div>
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address<span
                      className="text-pink">*</span></label>
                    <input type="email" id="email"
                           className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                           placeholder="Enter your email" required/>
                  </div>
                </div>
                <div className="md:mb-7 mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Order notes (Optional)</label>
                  <textarea id="message" rows="4"
                            className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                            placeholder="Note about your order, e.g. special notes for delivery..."></textarea>
                </div>
                <div className="mb-4">
                  <input id="check1" type="checkbox" name="checkbox_new" className="hidden" value="3"/>
                  <label htmlFor="check1" className="inline-flex items-center cursor-pointer">
                    <span className="w-5 h-5 inline-block mr-2 rounded-[5px] border border-gray-light9"></span>
                    Create an account?</label>
                </div>
                <div>
                  <input id="check2" type="checkbox" name="checkbox_new" className="hidden" value="3"/>
                  <label htmlFor="check2" className="inline-flex items-center cursor-pointer">
                    <span className="w-5 h-5 inline-block mr-2 rounded-[5px] border border-gray-light9"></span>
                    Ship to a different address?</label>
                </div>
              </form>
            </div>
            <div className="mt-[30px] mt-10 lg:mt-0 lg:col-span-5">
              <div className="bg-gray-light12 rounded-lg md:px-[30px] md:py-6 p-5 mb-[30px]">
                <h3 className="text-lg font-semibold mb-4">Your order</h3>
                <div className="pb-5 mb-5 border-b border-gray-light2">
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <p className="font-medium">Wide Strap Seamless Sports Bra</p>
                      <p className="text-gray">$75.99 x 1</p>
                    </div>
                    <p>$75.99</p>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <p className="font-medium">Balo Mini Alex</p>
                      <p className="text-gray">$98.00 x 2</p>
                    </div>
                    <p>$196.00</p>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <p className="font-medium">Blue Denim Long Jacket Women</p>
                      <p className="text-gray">68.50 x 1</p>
                    </div>
                    <p>$68.50</p>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <p className="font-medium">Swift Mesh Racer Bra in Cisp</p>
                      <p className="text-gray">34.70 x 1</p>
                    </div>
                    <p>$34.70</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="font-medium">Glider Tee in Tango Pink</p>
                      <p className="text-gray">49.99 x 1</p>
                    </div>
                    <p>$49.99</p>
                  </div>
                </div>
                <div className="pb-5 mb-5 border-b border-gray-light2">
                  <p className="flex justify-between mb-2"><span>Subtotal</span> $425.18</p>
                  <p className="flex justify-between mb-2">
                    <span>Discount
                      <strong className="inline-flex items-center ml-3">HAPPY20
                        <button className="ml-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                        <rect
                          width="18"
                          height="18"
                          fill="#D3DCE5"
                          fillOpacity="0.5"
                          rx="9"
                        ></rect>
                        <path
                          fill="#122940"
                          fillRule="evenodd"
                          d="M12.803 5.197a.672.672 0 00-.95 0L9 8.049 6.148 5.197a.672.672 0 00-.951.95L8.049 9l-2.852 2.852a.672.672 0 00.95.951L9 9.951l2.852 2.852a.672.672 0 10.951-.95L9.951 9l2.852-2.852a.672.672 0 000-.951z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          fill="#122940"
                          d="M11.852 5.197l.071.07-.07-.07zm.951 0l-.07.07.07-.07zM9 8.049l-.07.07.07.072.07-.071L9 8.05zM6.148 5.197l.07-.07-.07.07zm-.951 0l.07.07-.07-.07zm0 .95l-.07.071.07-.07zM8.049 9l.071.07.07-.07-.07-.07-.07.07zm-2.852 2.852l-.07-.07.07.07zm0 .951l.07-.07-.07.07zm.95 0l-.07-.07.07.07zM9 9.951l.07-.071L9 9.81l-.07.07.07.07zm2.852 2.852l.071-.07-.07.07zm.951-.95l-.07.07.07-.07zM9.951 9l-.07-.07-.072.07.071.07.07-.07zm2.852-2.852l-.07-.071.07.07zm-.88-.88a.572.572 0 01.81 0l.14-.142a.772.772 0 00-1.091 0l.141.142zM9.071 8.12l2.852-2.852-.141-.142-2.853 2.852.142.142zM6.077 5.268L8.93 8.12l.142-.142-2.852-2.852-.142.142zm-.81 0a.572.572 0 01.81 0l.142-.142a.772.772 0 00-1.093 0l.142.142zm0 .809a.572.572 0 010-.81l-.14-.14a.772.772 0 000 1.091l.14-.141zM8.12 8.929L5.268 6.077l-.142.141L7.98 9.071l.141-.142zm-2.852 2.994L8.12 9.071l-.141-.142-2.853 2.853.142.141zm0 .81a.572.572 0 010-.81l-.142-.141a.772.772 0 000 1.092l.142-.142zm.809 0a.572.572 0 01-.81 0l-.14.14a.772.772 0 001.091 0l-.141-.14zM8.929 9.88l-2.852 2.852.141.142 2.853-2.853-.142-.141zm2.994 2.852L9.071 9.88l-.142.141 2.853 2.853.141-.142zm.81 0a.572.572 0 01-.81 0l-.141.142a.772.772 0 001.092 0l-.142-.142zm0-.809a.572.572 0 010 .81l.14.14a.772.772 0 000-1.091l-.14.141zM9.88 9.071l2.852 2.852.142-.141-2.853-2.853-.14.142zm2.852-2.994L9.88 8.929l.141.142 2.853-2.853-.142-.141zm0-.81a.572.572 0 010 .81l.142.141a.772.772 0 000-1.092l-.142.142z"
                        ></path>
                      </svg>
                    </button>
                      </strong>
                    </span> -$85.03
                  </p>
                  <p className="flex justify-between mb-2"><span>Taxes (estimated)</span> $7.59</p>
                  <p className="flex justify-between mb-2"><span>Shipping</span> $0.00</p>
                </div>
                <div className="pb-5 mb-5 border-b border-gray-light2">
                  <div className="flex items-center justify-between mb-4">
                    <input id="radio1" type="radio" name="radio_new" className="hidden" defaultChecked value="1"/>
                    <label htmlFor="radio1" className="flex items-center cursor-pointer">
                      <span className="w-[18px] h-[18px] inline-block mr-2 rounded-full border border-grey"></span>
                      Free shipping</label>
                    <span>$0.00</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <input id="radio2" type="radio" name="radio_new" className="hidden" value="2"/>
                    <label htmlFor="radio2" className="flex items-center cursor-pointer">
                      <span className="w-[18px] h-[18px] inline-block mr-2 rounded-full border border-grey"></span>
                      Local pickup</label>
                    <span>$0.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <input id="radio3" type="radio" name="radio_new" className="hidden" value="3"/>
                    <label htmlFor="radio3" className="flex items-center cursor-pointer">
                      <span className="w-[18px] h-[18px] inline-block mr-2 rounded-full border border-grey"></span>
                      Flat rate shipping
                      to <strong>&nbsp;CA.</strong></label>
                    <span>$16.75</span>
                  </div>
                </div>
                <div>
                  <p className="flex justify-between">
                    <strong>Order total</strong>
                    <strong>$340.15</strong>
                  </p>
                </div>
              </div>
              <div className="border border-gray-light9 rounded-xl">
                {optionPayments.map((e, i) => {
                  return (
                    <div key={`card-pay` + i} className="md:px-[30px] md:py-6 p-5 border-b border-gray-light9 last:border-b-0">
                      <input id={`radioCredit+${i}`} type="radio" name="payment" className="hidden" value={i} defaultChecked={i === 0 && true }/>
                      <label htmlFor={`radioCredit+${i}`} className="flex items-center cursor-pointer"
                             onClick={() => openPayment(i)}>
                        <span className="w-[18px] h-[18px] inline-block mr-2 rounded-full border border-grey"></span>
                        {e.text}</label>
                      <div className={`${activeId === i ? `block` : 'hidden'}`}>
                        <p className="mt-2 mb-3">Your card information is secure! The card's data is only for processing
                          your order. Remit will not have access to your card information.</p>
                        <div className="md:mb-6 mb-5">
                          <label htmlFor="card-number" className="block mb-2 text-sm font-medium bg-red">Card number
                            <span className="text-pink">*</span>
                          </label>
                          <input type="text" id="card-number"
                                 className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                                 placeholder="Enter card number" required/>
                        </div>
                        <div className="md:mb-6 mb-5">
                          <label htmlFor="name-card" className="block mb-2 text-sm font-medium">Name on card
                            <span className="text-pink">*</span>
                          </label>
                          <input type="text" id="name-card"
                                 className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                                 placeholder="Enter name on card" required/>
                        </div>
                        <div className="md:grid md:grid-cols-2 gap-7">
                          <div className="md:mb-0 mb-5">
                            <label htmlFor="exp-date" className="block mb-2 text-sm font-medium">Phone
                              number<span className="text-pink">*</span>
                            </label><input type="text" id="exp-date"
                                           className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                                           placeholder="MM/YY" required/>
                          </div>
                          <div className="md:mb-0 mb-5">
                            <label htmlFor="cvv" className="block mb-2 text-sm font-medium">CVV
                              Address<span className="text-pink">*</span>
                            </label>
                            <input type="text" id="cvv"
                                   className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                                   placeholder="CVV" required/>
                          </div>
                        </div>
                      </div>
                    </div>)
                })}
              </div>
              <div className="mt-[30px]">
                <a href="#/"
                   className="flex items-center justify-center rounded-xl border border-transparent shadow-[0_7px_25px_rgba(55,126,98,0.2)] bg-green px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-700 hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)">Place
                  Order</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PreFooter/>
    </>
  );
}