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
      {({ active }) => (
        <a
          href="#/"
          className={classNames(
            active ? 'bg-gray-light11 text-black2 font-semibold' : 'text-gray',
            'block px-4 py-2 text-sm hover:bg-gray-light11 hover:text-black2 hover:font-semibold'
          )}
        >
          {option.name}
        </a>
      )}
    </Menu.Item>
  );
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
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
        <Menu.Items className="absolute left-1/2 -translate-x-2/4 top-full mt-2 -ml-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20">
          <div className="py-1 bg-white">
            {renderItem}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}