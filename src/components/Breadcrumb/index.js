import React, {Component} from 'react';

class BreadCrumb extends Component {
  render() {
    return (
      <nav className="flex overflow-hidden" aria-label="Breadcrumb">
        <div className={`container mx-auto ${this.props.styleProp}`}>
          <ol className="no-scrollbar inline-flex items-center md:my-7 mt-8 my-5 max-w-full overflow-x-auto pb-2">
            {this.props.content.map((item) => (
              <li key={item.id} className="inline-flex whitespace-nowrap">
                {item.id > 1 && <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="9"
                  fill="none"
                  viewBox="0 0 5 9"
                  className="mr-3 mt-[6px]"
                >
                  <path
                    stroke="#5A6D80"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M1 1.5l3 3-3 3"
                  ></path>
                </svg>}
                {item.link ?
                  <a href={item.link}
                     className="inline-flex items-center text-sm text-gray hover:text-black2 mr-3">
                    {item.text}
                  </a> :
                  <span
                    className="inline-flex items-center text-sm text-black2">
                  {item.text}
                </span>}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    );
  }
}

export default BreadCrumb;