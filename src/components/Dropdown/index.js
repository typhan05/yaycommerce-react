/* This example requires Tailwind CSS v2.0+ */
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dropdown(props) {
  const renderItem = props.options.map((option) => (
    <Menu.Item key={option.id}>
      <a
        href="#/"
        className={classNames(
          option?.active
            ? "bg-gray-light11 text-black2 font-semibold"
            : "text-gray",
          "block px-4 py-2 text-sm duration-300 hover:bg-gray-light11 hover:text-black2"
        )}
      >
        {option.name}
      </a>
    </Menu.Item>
  ));
  return (
    <Menu as="div" className="relative inline-flex justify-center text-left">
      <div>
        <Menu.Button className="inline-flex items-center text-sm font-medium md:ml-0 ml-5 hover:bg-gray-50 focus:outline-0">
          {props.labelName}
          <svg
            className="ml-2"
            width={10}
            height={6}
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L5 5L1 1"
              stroke="#122940"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 md:w-auto w-full md:top-full md:bottom-none md:mb-0 bottom-full mb-5 mt-1 bg-white focus:outline-none z-20">
          <div className="py-1 bg-white rounded-md shadow-[0_20px_30px_rgba(0,0,0,0.07)] min-w-[70px]">
            {renderItem}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
