import {Fragment} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'

export default function DrawerSearch({isSearchShowing, hide}) {
  return (
    <Transition.Root show={isSearchShowing} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={hide}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 mt-12 bg-black2 bg-opacity-50 transition-opacity"/>
        </Transition.Child>

        <div className="fixed inset-0 mt-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-out duration-300 sm:duration-500"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transform transition ease-out duration-300 sm:duration-500"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <Dialog.Panel className="pointer-events-auto relative w-screen bg-white py-7">
                <div className="flex items-center justify-between w-full max-w-[990px] mx-auto mb-5">
                  <div className="flex flex-1 flex-col">
                    <div className="relative">
                      <div
                        className="flex items-center relative mx-auto text-gray-600 border border-gray-light9 bg-white rounded-[9px] overflow-hidden w-full h-[55px]">
                        <input
                          className="px-5 w-full text-base focus:outline-none"
                          type="search" name="search" placeholder="Search"/>
                        <button type="submit" className="mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <ellipse
                              cx="9.622"
                              cy="9.417"
                              stroke="#5A6D80"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              rx="8.622"
                              ry="8.417"
                            ></ellipse>
                            <path
                              stroke="#5A6D80"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15.62 15.709L19 19"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 w-10">
                    <button
                      type="button"
                      className="ml-5 rounded-md text-gray hover:text-black2 focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={hide}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center max-w-[990px] mx-auto">
                  <p className="mr-4 text-gray font-medium">Search trend:</p>
                  <div>
                    <button className="px-4 py-[5px] text-black2 font-medium bg-gray-light5 rounded-[7px] hover:bg-black2 hover:text-white mx-1">T-shirt</button>
                    <button className="px-4 py-[5px] text-black2 font-medium bg-gray-light5 rounded-[7px] hover:bg-black2 hover:text-white mx-1">Dresses</button>
                    <button className="px-4 py-[5px] text-black2 font-medium bg-gray-light5 rounded-[7px] hover:bg-black2 hover:text-white mx-1">Coat</button>
                    <button className="px-4 py-[5px] text-black2 font-medium bg-gray-light5 rounded-[7px] hover:bg-black2 hover:text-white mx-1">Jacket</button>
                    <button className="px-4 py-[5px] text-black2 font-medium bg-gray-light5 rounded-[7px] hover:bg-black2 hover:text-white mx-1">Activewear</button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}