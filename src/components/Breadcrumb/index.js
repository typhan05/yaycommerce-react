import React, {Component} from 'react';

class BreadCrumb extends Component {
  render() {
    return (
      <nav className="flex" aria-label="Breadcrumb">
        <div className="container mx-auto">
          <ol className="inline-flex items-center my-7">
            {this.props.content.map((item) => (
              <li key={item.id} className="inline-flex items-center">
                {item.id > 1 && <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="9"
                  fill="none"
                  viewBox="0 0 5 9"
                  className="mx-3"
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
                     className="inline-flex items-center text-sm text-gray hover:text-black2">
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