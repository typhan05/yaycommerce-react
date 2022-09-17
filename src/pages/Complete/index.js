import React from 'react';
import PreFooter from "../../blocks/pre-footer";

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

export default function Complete() {
  return (
    <>
      <section className="md:mb-[100px] mb-20">
        <div className="container mx-auto !max-w-[1195px]">
          <div
            className="relative py-[30px] max-w-[550px] mx-auto after:inset-x-0 after:h-0.5 after:absolute after:top-1/2 after:-translate-y-1/2 after:block after:rounded-lg after:bg-[rgba(211,220,229,0.5)]"
          >
            <ol
              className="relative z-10 flex justify-between md:text-lg text-base md:font-bold font-semibold text-gray"
            >
              <li className="flex items-center justify-center p-3 bg-white">
                <span
                  className="flex justify-center items-center w-[30px] h-[30px] leading-[30px] md:bg-green bg-black2 text-center rounded-full">
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
                <span className="ml-2 md:text-lg text-green text-[0px]"> My cart </span>
              </li>

              <li className="flex items-center justify-center p-3 bg-white">
                <span
                  className="flex justify-center items-center w-[30px] h-[30px] leading-[30px] text-white md:bg-green bg-black2 text-center rounded-full">
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
                <span className="ml-2 md:text-lg text-green text-[0px]"> Shipping detail </span>
              </li>

              <li className="flex items-center justify-center p-3 bg-white">
                <span
                  className="flex justify-center items-center w-[30px] h-[30px] leading-[30px] text-center text-white bg-green rounded-full">
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
                <span className="ml-2 text-green"> Completed </span>
              </li>
            </ol>
          </div>
          <h1 className="md:text-lg s text-base md:font-bold text-center font-semibold mb-5">Thank you! Your order has been received.</h1>
          <div className="rounded-xl shadow-[0_5px_25px_rgba(0,0,0,0.03)] py-5 md:flex justify-between mb-10">
            <div className="px-5 md:py-0 py-2">
              <p className="text-sm text-gray mb-2 uppercase">Order Number</p>
              <p><span className="font-semibold">#19518</span></p>
            </div>
            <div className="px-5 md:py-0 py-2">
              <p className="text-sm text-gray mb-2 uppercase">Date</p>
              <p><span className="font-semibold">Jun 28, 2022</span></p>
            </div>
            <div className="px-5 md:py-0 py-2">
              <p className="text-sm text-gray mb-2 uppercase">Email</p>
              <p><span className="font-semibold">hi.yayecommercelong@gmail.com</span></p>
            </div>
            <div className="px-5 md:py-0 py-2">
              <p className="text-sm text-gray mb-2 uppercase">Total</p>
              <p><span className="font-semibold">$347.74</span></p>
            </div>
            <div className="px-5 md:py-0 py-2">
              <p className="text-sm text-gray mb-2 uppercase">payment Menthod</p>
              <p><span className="font-semibold">Direct bank transfer</span></p>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Product items</h3>
            <table className="table-auto w-full">
              <tbody>
              {products.map((product) => (
                <tr key={`tr-cart` + product.id} className="md:table-row grid grid-cols-6">
                  <td className="px-2 md:py-4 pt-4 pb-1 md:border-b border-0 border-gray-light2 col-span-2 md:w-[75px] w-[80px]">
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
                  <td className="border-b border-gray-light2 col-span-2"></td>
                  <td
                    className="text-right px-2 md:py-4 pt-1 pb-4 border-b border-gray-light2 md:table-cell flex items-center col-span-2">
                    <p className="text-base text-black2 md:mx-5 mx-2">x1</p>
                  </td>
                  <td
                    className="text-right px-2 md:py-4 pt-1 pb-4 border-b border-gray-light2 md:table-cell flex items-center col-span-2">
                    <p className="text-base text-black2 mx-5">{product.price}</p>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <div className="bg-gray-light12 rounded-lg px-[30px] py-6 mt-[50px] mb-[30px]">
            <h3 className="text-lg font-semibold mb-4">Order detail</h3>
            <div className="pb-5 mb-5 border-b border-gray-light2">
              <p className="flex justify-between mb-2"><span>Subtotal</span> $425.18</p>
              <p className="flex justify-between mb-2">
                    <span>Discount
                      <strong className="inline-flex items-center ml-3">HAPPY20</strong>
                    </span> -$85.03
              </p>
              <p className="flex justify-between mb-2"><span>Taxes (estimated)</span> $7.59</p>
              <p className="flex justify-between mb-2"><span>Shipping</span> $0.00</p>
            </div>
            <div>
              <p className="flex justify-between">
                <strong>Order total</strong>
                <strong>$340.15</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <PreFooter/>
    </>
  );
}