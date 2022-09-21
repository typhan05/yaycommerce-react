import {useEffect, useRef, useState} from 'react'
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
  const [searchTrend, setSearchTrend] = useState(false);
  const inputRef = useRef(isSearchShowing);

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

  const onCloseSearch = () => {
    hide()

    //change option search
    setTimeout(() => {
      setSearchTrend(!searchTrend)
    }, "800")
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchShowing]);

  return (
    <>
      <div className={`absolute left-0 top-0 py-[15px] md:px-0 px-[15px] w-full bg-white z-[10] transition-all duration-300 ${isSearchShowing ? `translate-y-0 opacity-100` : `-translate-y-full opacity-0`}`}>
        {
          searchTrend ? (
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
                            ref={inputRef}
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
                      onClick={onCloseSearch}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center md:justify-center w-full mt-5">
                  <p className="mr-4 md:mb-0 mb-1 text-gray font-medium">Search trend:</p>
                  <div>
                    {trends.map((user) => (
                      <button key={user.id}
                              className={`px-4 py-[5px] font-medium border border-solid border-transparent rounded-[7px] duration-300 hover:bg-white hover:border-black hover:shadow-[0_5px_15px_rgba(0,0,0,0.07)] mr-2 md:my-0 my-1 ${itemActive === user.id ? `bg-white border-black shadow-[0_5px_15px_rgba(0,0,0,0.07)]` : `bg-gray-light5`}`}>{user.name}</button>
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
                            ref={inputRef}
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
                      onClick={onCloseSearch}
                    >
                      <span className="sr-only">Close panel</span>
                      <XIcon className="h-6 w-6" aria-hidden="true"/>
                    </button>
                  </div>
                </div>
              </div>
            )
        }
      </div>
      <div onClick={hide} className={`absolute top-full left-0 w-full h-[100vh] bg-[rgba(18,41,64,0.8)] z-[9] transition-all duration-500 ${isSearchShowing ? `pointer-events-auto opacity-100` : `pointer-events-none opacity-0`}`}></div>
    </>
  )
}