/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import Count from "../../Count";

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

export default function DrawerCart({isShowing, hide}) {
  return (
    <Transition.Root show={isShowing} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={hide}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black2 bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-white">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-2xl font-semibold text-black2"> Your cart (6) </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 w-9 h-9 flex items-center justify-center rounded-[18px] bg-gray-light8 text-gray hover:text-black2"
                            onClick={hide}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="divide-y divide-gray-light2 border-y border-gray-light2">
                            {products.map((product) => (
                              <li key={product.id} className="flex py-5">
                                <div className="h-[100px] w-[75px] bg-gray-light5 flex-shrink-0 overflow-hidden rounded-lg">
                                  <img src={require('../../../assets/images/' + product.imageSrc)}
                                       alt={product.name}
                                       className="h-full w-full object-cover object-center"/>
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <h3 className="text-black2">
                                    <a href={product.href}> {product.name} </a>
                                  </h3>
                                  <p className="mt-2 text-sm text-gray">Color: {product.color} <span className="mx-1">{'//'}</span> Size: {product.size}</p>
                                  <div className="mt-3 flex flex-1 items-center justify-between text-sm">
                                    <div className="flex items-center">
                                      <Count number={product.quantity}/>
                                      <p className="ml-5 text-base text-black2">{product.price}</p>
                                    </div>
                                    <div className="flex">
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
                                            <path d="M13.721 6.92c0 6.942 1 10.08-5.73 10.08s-5.71-3.138-5.71-10.08M15 4.26H1M10.97 4.26S11.43 1 8 1C4.575 1 5.033 4.26 5.033 4.26"></path>
                                          </g>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="shadow-[0_-1px_0px_#EDF3F9,_0_-5px_12px_rgba(0,0,0,0.03)] py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-semibold text-black2">
                        <p>Subtotal</p>
                        <p>$425.18</p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#/"
                          className="flex items-center justify-center rounded-xl border border-transparent shadow-[0_7px_25px_rgba(55,126,98,0.2)] bg-green px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <button
                          type="button"
                          className="link-underline-show link-underline-black text-base"
                          onClick={isShowing}
                        >
                          View Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}