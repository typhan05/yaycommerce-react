/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";

const listProducts = [
  {
    id: 1,
    name: "Wide Strap Seamless Sports Bra",
    href: "#",
    color: "gray",
    size: "M",
    price: "$75.99",
    quantity: 1,
    imageSrc: "img-cart-product-1.png",
  },
  {
    id: 2,
    name: "Wide Strap Seamless Sports Bra",
    href: "#",
    color: "white",
    size: "freesize",
    price: "$196.00",
    quantity: 2,
    imageSrc: "img-cart-product-2.png",
  },
];

export default function DrawerWishList({ isShowing, hide }) {
  const [products, setProducts] = useState(listProducts);
  const [activeItem, setActiveItem] = useState(-1);
  const [loading, setLoading] = useState(false);

  const removeWishList = (index) => {
    const productNew = products.filter(function (_, id) {
      return index !== id;
    });
    setActiveItem(index);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setProducts(productNew);
    }, 1000);
  };
  return (
    <Transition.Root show={isShowing} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={hide}>
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
                        <Dialog.Title className="text-2xl font-semibold text-black2">
                          {" "}
                          Your Wishlist ({products.length}){" "}
                        </Dialog.Title>
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
                            {products.map((product, index) => (
                              <li
                                key={product.id}
                                className={`flex gap-2 py-5 ${
                                  activeItem === index && loading
                                    ? "opacity-40"
                                    : ""
                                }`}
                              >
                                <div className="h-[100px] w-[75px] bg-gray-light5 flex-shrink-0 overflow-hidden rounded-lg">
                                  <img
                                    src={require("../../../assets/images/" +
                                      product.imageSrc)}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col">
                                  <h3 className="text-black2">
                                    <a
                                      className="group transition-all duration-300 ease-in-out"
                                      href={product.href}
                                    >
                                      <span className="bg-left-bottom bg-gradient-to-r from-black2 to-black2 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-300 ease-out">
                                        {product.name}
                                      </span>
                                    </a>
                                  </h3>
                                  <div className="mt-3 flex flex-1 items-center justify-between text-sm">
                                    <div className="flex items-center">
                                      <p className="text-base font-semibold text-black2">
                                        {product.price}
                                      </p>
                                    </div>
                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-gray opacity-50 hover:text-black2 hover:opacity-100"
                                        onClick={() => removeWishList(index)}
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
                                  <div className="flex mt-3">
                                    <button
                                      type="button"
                                      className="inline-flex justify-center rounded-xl md:text-md text-sm font-semibold py-[10px] md:px-6 px-5 text-white bg-blue shadow-[0_7px_25px_rgba(47,112,179,0.2)] hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)]"
                                    >
                                      Add to cart
                                    </button>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
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
  );
}
