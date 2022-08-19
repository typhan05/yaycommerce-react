import React, {Component} from 'react';

class Pagination extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a href="#/"
               className="py-2 px-3 mr-[10px] flex items-center justify-center w-10 h-10 text-gray rounded-xl bg-gray-light8 hover:text-white hover:bg-black2">1</a>
          </li>
          <li>
            <a href="#/"
               className="py-2 px-3 mr-[10px] flex items-center justify-center w-10 h-10 text-gray rounded-xl bg-gray-light8 hover:text-white hover:bg-black2">2</a>
          </li>
          <li>
            <a href="#/" aria-current="page"
               className="py-2 px-3 mr-[10px] flex items-center justify-center w-10 h-10 rounded-xl text-white bg-black2 hover:text-white hover:bg-black2">3</a>
          </li>
          <li>
            <a href="#/"
               className="py-2 px-3 mr-[10px] flex items-center justify-center w-10 h-10 text-gray rounded-xl bg-gray-light8 hover:text-white hover:bg-black2">4</a>
          </li>
          <li>
            <a href="#/"
               className="py-2 px-3 mr-[10px] flex items-center justify-center w-10 h-10 text-gray rounded-xl bg-gray-light8 hover:text-white hover:bg-black2">5</a>
          </li>
          <li>
            <a href="#/"
               className="py-2 px-3 mr-[10px] flex items-center justify-center w-10 h-10 text-gray rounded-xl bg-gray-light8 hover:text-white hover:bg-black2">
              <span className="sr-only">Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="14"
                fill="none"
                viewBox="0 0 8 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6-6 6"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;