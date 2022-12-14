/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown(props) {
  const renderItem = props.options.map((option) =>
    <Menu.Item key={option.id}>
      <a
        href="#/"
        className={classNames(
          option?.active ? 'bg-gray-light11 text-black2 font-semibold' : 'text-gray',
          'block px-4 py-2 text-sm duration-300 hover:bg-gray-light11 hover:text-black2'
        )}
      >
        {option.name}
      </a>
    </Menu.Item>
  );
  return (
    <Menu as="div" className="relative inline-flex justify-center text-left md:ml-5">
      <div>
        <Menu.Button className="inline-flex text-sm font-medium md:pl-4 md:ml-0 ml-5 hover:bg-gray-50 focus:outline-0">
          {props.labelName}
          <ChevronDownIcon className="ml-1 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="absolute left-0 md:w-auto w-full text-center md:top-full md:bottom-none md:mb-0 bottom-full mb-5 mt-1 rounded-md shadow-lg bg-white focus:outline-none z-20">
          <div className="py-1 bg-white min-w-[70px]">
            {renderItem}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}