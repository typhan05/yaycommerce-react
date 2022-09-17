import React, {useState} from 'react';
import Count from "../../components/Count";
import PreFooter from "../../blocks/pre-footer";
import Select from "react-select";

const review_options = [
  {value: 'recent', label: 'Recent reviews'},
  {value: 'latest', label: 'Latest reviews'},
  {value: 'yesterday', label: 'Yesterday reviews'}
];

const products = [
  {
    id: 1,
    name: 'Wide Strap Seamless Sports Bra',
    href: '#',
    color: 'gray',
    size: 'M',
    price: '$75.99',
    quantity: 1,
    imageSrc: 'img-cart-product-1.png',
  },
  {
    id: 2,
    name: 'Wide Strap Seamless Sports Bra',
    href: '#',
    color: 'white',
    size: 'freesize',
    price: '$196.00',
    quantity: 2,
    imageSrc: 'img-cart-product-2.png',
  },
  {
    id: 3,
    name: 'Blue denim long jacket womens',
    href: '#',
    color: 'orange',
    size: 'S',
    price: '$68.50',
    quantity: 1,
    imageSrc: 'img-cart-product-3.png',
  },
  {
    id: 4,
    name: 'Wide Strap Seamless Sports Bra',
    href: '#',
    color: 'white',
    size: 'freesize',
    price: '$196.00',
    quantity: 1,
    imageSrc: 'img-cart-product-1.png',
  },
  {
    id: 5,
    name: 'Blue denim long jacket womens',
    href: '#',
    color: 'orange',
    size: 'S',
    price: '$68.50',
    quantity: 1,
    imageSrc: 'img-cart-product-2.png',
  },
]

const customStyles = {
  control: (base) => ({
    ...base,
    height: '40px',
    'min-height': '54px',
    borderRadius: '7px',
    borderColor: '#D3DCE5',
    padding: '0 5px'
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#5A6D80',
    }
  }
};

export default function Cart() {
  const [activeId, setActiveId] = useState(false);
  const openAddress = () => {
    setActiveId(!activeId)
  }
  return (
    <>
      <section className="md:mb-[100px] mb-20">
        <div className="container mx-auto">
          <div
            className="relative py-[30px] max-w-[550px] mx-auto after:inset-x-0 after:h-0.5 after:absolute after:md:top-1/2 after:top-[60px] af after:-translate-y-1/2 after:block after:rounded-lg after:bg-[rgba(211,220,229,0.5)]"
          >
            <ol
              className="relative z-10 flex justify-between md:text-lg text-xs md:font-bold font-semibold text-gray"
            >
              <li className="flex md:flex-row flex-col items-center justify-center p-3 bg-white">
                <span
                  className="flex justify-center w-[30px] h-[30px] leading-[30px] text-white bg-green text-center rounded-full">1</span>
                <span className="md:ml-2 md:mt-0 mt-1 text-black2"> My cart </span>
              </li>

              <li className="flex md:flex-row flex-col items-center justify-center p-3 bg-white">
                <span
                  className="flex justify-center w-[30px] h-[30px] leading-[30px] text-center bg-gray-light12 rounded-full">2</span>
                <span className="md:ml-2 md:mt-0 mt-1"> Shipping detail </span>
              </li>

              <li className="flex md:flex-row flex-col items-center justify-center p-3 bg-white">
                <span
                  className="flex justify-center w-[30px] h-[30px] leading-[30px] text-center bg-gray-light12 rounded-full">3</span>
                <span className="md:ml-2 md:mt-0 mt-1"> Completed </span>
              </li>
            </ol>
          </div>
          <h1 className="md:text-4xl text-2xl md:font-bold font-semibold md:mb-9 mb-5">Shopping cart</h1>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-[90px]">
            <div className="lg:col-span-8">
              <table className="table-auto w-full">
                <thead>
                <tr className="md:table-row hidden">
                  <th colSpan={2} className="text-left px-2 py-4 border-b border-gray-light2">Product</th>
                  <th className="px-2 py-4 border-b border-gray-light2">Price</th>
                  <th className="px-2 py-4 border-b border-gray-light2">Quality</th>
                  <th className="px-2 py-4 border-b border-gray-light2">Subtotal</th>
                  <th className="px-2 py-4 border-b border-gray-light2"></th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                  <tr key={`tr-cart` + product.id} className="md:table-row grid grid-cols-6">
                    <td className="px-2 md:py-4 pt-4 pb-1 md:border-b border-0 border-gray-light2 col-span-2">
                      <div
                        className="h-[100px] md:w-[75px] w-[80px] bg-gray-light5 flex-shrink-0 overflow-hidden rounded-lg">
                        <img src={require('../../assets/images/' + product.imageSrc)}
                             alt={product.name}
                             className="h-full w-full object-cover object-center"/>
                      </div>
                    </td>
                    <td className="px-2 md:py-4 pt-4 pb-1 md:border-b border-0 border-gray-light2 col-span-4">
                      <h3 className="text-black2">
                        <a className='group transition-all duration-300 ease-in-out' href={product.href}>
                                      <span
                                        className='bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out'>
                                        {product.name}
                                      </span>
                        </a>
                      </h3>
                      <p className="mt-2 text-sm text-gray">Color: {product.color} <span
                        className="mx-1">{'//'}</span> Size: {product.size}</p>
                      <button className="md:hidden text-sm mt-2">Remove</button>
                    </td>
                    <td
                      className="text-center px-2 md:py-4 pt-1 pb-4 border-b border-gray-light2 md:table-cell flex items-center col-span-2">
                      <p className="text-base text-black2 mx-5">{product.price}</p>
                    </td>
                    <td
                      className="text-center px-2 md:py-4 pt-1 pb-4 border-b border-gray-light2 md:w-[140px] col-span-2">
                      <Count number={product.quantity}/>
                    </td>
                    <td
                      className="text-center px-2 md:py-4 pt-1 pb-4 border-b border-gray-light2 md:table-cell flex items-center col-span-2">
                      <p className="text-base text-black2 mx-5">{product.price}</p>
                    </td>
                    <td className="md:table-cell hidden text-center px-2 py-4 border-b border-gray-light2">
                      <button
                        type="button"
                        className="font-medium text-gray opacity-50 hover:text-black2 hover:opacity-100"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="18"
                          fill="none"
                          viewBox="0 0 16 18"
                        >
                          <g
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.7"
                          >
                            <path
                              d="M13.721 6.92c0 6.942 1 10.08-5.73 10.08s-5.71-3.138-5.71-10.08M15 4.26H1M10.97 4.26S11.43 1 8 1C4.575 1 5.033 4.26 5.033 4.26"></path>
                          </g>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              <div className="flex items-center justify-between py-[30px]">
                <a href="#/"
                   className="relative inline-flex items-center after:h-[1px] after:left-5 after:bottom-0 after:absolute md:after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0 after:right-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    fill="none"
                    viewBox="0 0 7 12"
                    className="mr-3"
                  >
                    <path
                      stroke="#122940"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 11L1 6l5-5"
                    ></path>
                  </svg>
                  Continue shopping</a>
                <button type="button"
                        className="md:text-base text-sm font-semibold hover:text-white border-2 border-black2 hover:bg-black2 rounded-xl duration-300 px-5 py-2.5 text-center">Update
                  Cart
                </button>
              </div>
            </div>
            <div className="md:mt-0 mt-10 bg-gray-light12 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-4">
              <h3 className="text-lg font-semibold mb-[14px]">Order summary</h3>
              <div className="pb-5 mb-5 border-b border-gray-light2">
                <p className="flex justify-between mb-2"><span>Your cart</span> $425.18</p>
                <p className="flex justify-between">
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
              </div>
              <div className="text-gray pb-5 mb-5 border-b border-gray-light2">
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
                <div className="flex items-center justify-between mb-4">
                  <input id="radio3" type="radio" name="radio_new" className="hidden" value="3"/>
                  <label htmlFor="radio3" className="flex items-center cursor-pointer">
                    <span className="w-[18px] h-[18px] inline-block mr-2 rounded-full border border-grey"></span>
                    Flat rate shipping
                    to <strong>&nbsp;CA.</strong></label>
                  <span>$16.75</span>
                </div>
                <button className="text-sm text-green mb-3 relative inline-block after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute after:bg-green after:transition-all after:duration-300 after:ease-in-out hover:after:right-0" onClick={openAddress}>Change Address</button>
                <div className={`rounded-[9px] shadow-[0_1px_2px_rgba(0,0,0,0.12)] bg-white py-5 px-6 mb-6 ${activeId ? `block` : `hidden`}`}>
                  <div className="mb-5">
                    <label htmlFor="city" className="block mb-2 text-sm font-medium">Town/City<span
                      className="text-pink">*</span></label>
                    <Select options={review_options} defaultValue={review_options[0]} styles={customStyles}
                            components={{IndicatorSeparator: () => null}}/>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="city" className="block mb-2 text-sm font-medium">State/Province<span
                      className="text-pink">*</span></label>
                    <Select options={review_options} defaultValue={review_options[0]} styles={customStyles}
                            components={{IndicatorSeparator: () => null}}/>
                  </div>
                  <div className="mb-5">
                    <label htmlFor="city" className="block mb-2 text-sm font-medium">Zip code<span
                      className="text-pink">*</span></label>
                    <input type="text" id="first-name"
                           className="bg-white border border-gray-light9 placeholder:text-gray text-base rounded-[9px] p-[14px] block w-full"
                           defaultValue="91214" placeholder="Enter zip code"/>
                  </div>
                  <div>
                    <button
                      className="flex-shrink-0 bg-black2 border-2 border-solid border-black2 text-white font-medium py-2 px-4 rounded-[10px] transition-all duration-300 hover:bg-white hover:text-black2"
                      type="submit">Submit
                    </button>
                  </div>
                </div>
                <div className="flex items-center bg-white rounded-[9px] p-1 shadow-[0_1px_2px_rgba(0,0,0,0.12)] mb-4">
                  <input className="bg-bg-white appearance-none w-full py-2 px-[15px] text-gray-700 leading-tight focus:outline-none focus:border-purple-500"
                  id="inline-full-name" defaultValue="Happy20" type="text" placeholder="Enter your code" />
                  <button
                    className="flex-shrink-0 bg-black2 border-2 border-solid border-black2 text-white font-medium py-2 px-4 rounded-[10px] transition-all duration-300 hover:bg-white hover:text-black2"
                    type="submit">Apply
                  </button>
                </div>
                <div className="text-sm">
                  <p className="flex items-center text-green mb-1"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                    className="mr-2"
                  >
                    <path
                      stroke="#377E62"
                      strokeWidth="1.5"
                      d="M1.274 5.628a5.842 5.842 0 014.354-4.354 10.386 10.386 0 014.744 0 5.842 5.842 0 014.354 4.354c.365 1.56.365 3.184 0 4.744a5.842 5.842 0 01-4.354 4.354c-1.56.365-3.184.365-4.744 0a5.842 5.842 0 01-4.354-4.354 10.386 10.386 0 010-4.744z"
                    ></path>
                    <path
                      stroke="#377E62"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5.277 8.26l1.98 2.073 3.465-3.889"
                    ></path>
                  </svg><span className="font-semibold">HAPPY20&nbsp;</span> has been applied to your order!</p>
                  <button className="text-gray relative inline-block after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute after:bg-gray after:transition-all after:duration-300 after:ease-in-out hover:after:right-0">Remove</button>
                </div>
              </div>
              <div>
                <p className="flex justify-between mb-3">
                  <strong>Order total</strong>
                  <strong>$340.15</strong>
                </p>
                <p>
                  <a href="#/"
                     className="flex items-center justify-center rounded-xl border border-transparent shadow-[0_7px_25px_rgba(55,126,98,0.2)] bg-green px-6 py-3 text-lg font-semibold text-white duration-300 hover:bg-indigo-700 hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)">Proceed
                    to Checkout</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PreFooter/>
    </>
  );
}