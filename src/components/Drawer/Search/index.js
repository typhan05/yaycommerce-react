import {Fragment, useEffect, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XIcon} from '@heroicons/react/outline'
import {useNavigate} from "react-router-dom";

const trends = [
  {id: 1, name: 'T-shirt'},
  {id: 2, name: 'Dresses'},
  {id: 3, name: 'Coat'},
  {id: 4, name: 'Jacket'},
  {id: 5, name: 'Activewear'},
];

export default function DrawerSearch({isSearchShowing, hide}) {
  const [name, setName] = useState('');
  const [itemActive, setItemActive] = useState(null);
  const [countSearch, setCountSearch] = useState(false);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = trends.find((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase())
      });
      setItemActive(results?.id);
    } else {
      setItemActive(null);
    }
    setName(keyword);
  };

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();

    // 👇️ redirect to /search
    navigate('/yaycommerce-react/search');
  };
  let counter = 0;

  useEffect(() => {
    if(isSearchShowing) {
      counter++;
    }
  }, [isSearchShowing]);

  return (
    <Transition.Root show={isSearchShowing} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={hide}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 md:mt-12 mt-[77px] bg-black2 bg-opacity-50 transition-opacity"/>
        </Transition.Child>

        <div className="fixed inset-0 md:mt-[44px] mt-[77px] overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="-translate-y-full"
              enterTo="translate-y-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-full"
            >
              <Dialog.Panel className="pointer-events-auto relative w-screen bg-white md:px-0 px-5 py-[15px]">
                {countSearch ? (
                    <div className="max-w-[950px] mx-auto py-[15px]">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-1 flex-col">
                          <div className="relative">
                            <form onSubmit={handleSubmit}>
                              <div
                                className="flex items-center relative mx-auto w-full">
                                <input
                                  className="pl-5 pr-12 py-3 w-full text-base text-black2 border border-gray-light9 bg-white rounded-[9px] h-[55px] placeholder:text-gray placeholder:opacity-50 focus:outline-none focus:border-black2 focus:shadow-[0_5px_25px_rgba(0,0,0,0.07)]"
                                  type="search"
                                  value={name}
                                  onChange={filter} name="search" placeholder="Search"/>
                                <button type="submit" onClick={hide}
                                        className="absolute right-[4px] top-[17px] text-gray mr-4 hover:text-black2">
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
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      rx="8.622"
                                      ry="8.417"
                                    ></ellipse>
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15.62 15.709L19 19"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </form>
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
                      <div className="flex items-center justify-center w-full mt-5">
                        <p className="mr-4 text-gray font-medium">Search trend:</p>
                        <div>
                          {trends.map((user) => (
                            <button key={user.id}
                                    className={`px-4 py-[5px] font-medium border border-solid border-transparent rounded-[7px] duration-300 hover:bg-white hover:border-black hover:shadow-[0_5px_15px_rgba(0,0,0,0.07)] mx-1 ${itemActive === user.id ? `bg-white border-black shadow-[0_5px_15px_rgba(0,0,0,0.07)]` : `bg-gray-light5`}`}>{user.name}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) :
                  (
                    <div className="max-w-[705px] mx-auto">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-1 flex-col">
                          <div className="relative">
                            <form onSubmit={handleSubmit}>
                              <div
                                className="flex items-center relative mx-auto w-full">
                                <input
                                  className="pl-5 pr-12 py-3 w-full text-base text-black2 border border-gray-light9 bg-white rounded-[9px] h-[50px] placeholder:text-gray placeholder:opacity-50 focus:outline-none focus:border-black2 focus:shadow-[0_5px_25px_rgba(0,0,0,0.07)]"
                                  type="search"
                                  value={name}
                                  onChange={filter} name="search" placeholder="Search"/>
                                <button type="submit" onClick={hide}
                                        className="absolute right-[4px] top-[14px] text-gray mr-4 hover:text-black2">
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
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      rx="8.622"
                                      ry="8.417"
                                    ></ellipse>
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15.62 15.709L19 19"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </form>
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
                    </div>
                  )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}