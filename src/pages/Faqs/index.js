import React, {useState} from 'react';
import BreadCrumb from "../../components/Breadcrumb";
import PreFooter from "../../blocks/pre-footer";
import Select from "react-select";

const breadcrumbs = [
  {
    'id': 1,
    'text': 'Home',
    'link': '/yaycommerce-react'
  },
  {
    'id': 2,
    'text': 'Faqs',
    'link': ''
  },
]

const review_options = [
  {value: 'recent', label: 'Recent reviews'},
  {value: 'latest', label: 'Latest reviews'},
  {value: 'yesterday', label: 'Yesterday reviews'}
];

const questionLists = [
  {
    'title': 'How will my parcel be delivered?',
    'description': 'We’ll cover duty costs on all orders. Additional taxes may apply according to local legislation. Please note the USA Express Free Shipping service cannot be used for International. If you have any further questions related to your delivery, please contact our Customer Care team.'
  },
  {
    'title': 'How can I return an item?',
    'description': 'We’ll cover duty costs on all orders. Additional taxes may apply according to local legislation. Please note the USA Express Free Shipping service cannot be used for International. If you have any further questions related to your delivery, please contact our Customer Care team.'
  },
  {
    'title': 'Can I check the goods before payment?',
    'description': 'We’ll cover duty costs on all orders. Additional taxes may apply according to local legislation. Please note the USA Express Free Shipping service cannot be used for International. If you have any further questions related to your delivery, please contact our Customer Care team.'
  },
  {
    'title': 'How do I create an online account?',
    'description': 'We’ll cover duty costs on all orders. Additional taxes may apply according to local legislation. Please note the USA Express Free Shipping service cannot be used for International. If you have any further questions related to your delivery, please contact our Customer Care team.'
  },
  {
    'title': 'How long can I receive it from the time I place an order?',
    'description': 'We’ll cover duty costs on all orders. Additional taxes may apply according to local legislation. Please note the USA Express Free Shipping service cannot be used for International. If you have any further questions related to your delivery, please contact our Customer Care team.'
  },
  {
    'title': 'How can I track my order?',
    'description': 'We’ll cover duty costs on all orders. Additional taxes may apply according to local legislation. Please note the USA Express Free Shipping service cannot be used for International. If you have any further questions related to your delivery, please contact our Customer Care team.'
  },
  {
    'title': 'What are the payment methods when I make a direct purchase?',
    'description': 'We’ll cover duty costs on all orders. Additional taxes may apply according to local legislation. Please note the USA Express Free Shipping service cannot be used for International. If you have any further questions related to your delivery, please contact our Customer Care team.'
  },
  {
    'title': 'Can I cancel or change my order?',
    'description': 'We’ll cover duty costs on all orders. Additional taxes may apply according to local legislation. Please note the USA Express Free Shipping service cannot be used for International. If you have any further questions related to your delivery, please contact our Customer Care team.'
  },
]

const customStyles = {
  control: (base) => ({
    ...base,
    height: '40px',
    'min-height': '54px',
    borderRadius: '7px',
    borderColor: '#D3DCE5',
    padding: '0 5px'
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: '#5A6D80',
      opacity: 0.5,
    }
  }
};

export default function Faqs() {
  const [activeId, setActiveId] = useState(0);
  const openCollapse = (index) => {
    setActiveId(prevState => prevState === index ? -1 : index)
  }
  return (
    <>
      <BreadCrumb content={breadcrumbs}/>
      <section className="md:mb-[150px] mb-20">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-[120px]">
            <div className="lg:col-span-4">
              <ul className="lg:mb-0 mb-6">
                <li className="group mb-[10px]">
                  <a href="#/"
                     className="flex justify-between items-center rounded-[10px] bg-gray-light2 px-4 py-3 text-lg group-hover:bg-gray-light14">Top
                    9 questions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="14"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="#5A6D80"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M1 1l6 6-6 6"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="group mb-[10px]">
                  <a href="#/"
                     className="flex justify-between items-center rounded-[10px] bg-gray-light13 px-4 py-3 text-lg group-hover:bg-gray-light14">About
                    Remit's delivery
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="14"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="#5A6D80"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M1 1l6 6-6 6"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="group mb-[10px]">
                  <a href="#/"
                     className="flex justify-between items-center rounded-[10px] bg-gray-light13 px-4 py-3 text-lg group-hover:bg-gray-light14">Direct
                    buying experience
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="14"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="#5A6D80"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M1 1l6 6-6 6"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="group mb-[10px]">
                  <a href="#/"
                     className="flex justify-between items-center rounded-[10px] bg-gray-light13 px-4 py-3 text-lg group-hover:bg-gray-light14">Order-related
                    issues
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="14"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="#5A6D80"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M1 1l6 6-6 6"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="group mb-[10px]">
                  <a href="#/"
                     className="flex justify-between items-center rounded-[10px] bg-gray-light13 px-4 py-3 text-lg group-hover:bg-gray-light14">Exchange/return
                    with Remit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="14"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="#5A6D80"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M1 1l6 6-6 6"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="group mb-[10px]">
                  <a href="#/"
                     className="flex justify-between items-center rounded-[10px] bg-gray-light13 px-4 py-3 text-lg group-hover:bg-gray-light14">Payment
                    at Remit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="14"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="#5A6D80"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M1 1l6 6-6 6"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li className="group mb-[10px]">
                  <a href="#/"
                     className="flex justify-between items-center rounded-[10px] bg-gray-light13 px-4 py-3 text-lg group-hover:bg-gray-light14">My
                    account
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="14"
                      fill="none"
                      viewBox="0 0 8 14"
                    >
                      <path
                        stroke="#5A6D80"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.7"
                        d="M1 1l6 6-6 6"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-8">
              <h1 className="md:text-4xl text-[28px] font-bold md:mb-[50px] mb-5">Top 9 questions</h1>
              <div className="md:mb-[90px] mb-10">
                {questionLists.map((item, i) => {
                  return (
                    <div key={`faq-item` + i} className="first:border-t border-b border-gray-light2">
                      <h3 className="cursor-pointer flex items-center justify-between text-lg font-semibold py-[18px]"
                          onClick={() => openCollapse(i)}>{item.title}
                        {
                          activeId === i ? <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="1"
                              fill="none"
                              viewBox="0 0 15 1"
                              className="flex-shrink-0"
                            >
                              <path fill="#122940" d="M0 0H15V1H0z"></path>
                            </svg> :
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="15"
                              height="15"
                              fill="none"
                              viewBox="0 0 15 15"
                              className="flex-shrink-0"
                            >
                              <path
                                fill="#4D4D4D"
                                fillRule="evenodd"
                                d="M8 7V0H7v7H0v1h7v7h1V8h7V7H8z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                        }
                      </h3>
                      <div
                        className={`relative transition-all duration-500 ${activeId === i ? `overflow-visible max-h-50 opacity-100 -top-2` : `overflow-hidden max-h-0 opacity-0 top-4`}`}>
                        <div className="pb-3 text-gray">{item.description}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <h2 className="md:text-4xl text-[28px] font-bold mb-4">Can we help?</h2>
              <div className="mb-8">
                <p className="text-gray">If you have any specific questions please do not hesitate to contact us by completing this form bellow or calling our customer services team on hotline: <a
                  href="tel:+6-146-389-574" className="text-black2">+6-146-389-574</a></p>
              </div>
              <form>
                <div className="md:grid md:grid-cols-2 gap-8">
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="full-name" className="block mb-2 text-sm font-medium">Full name<span
                      className="text-pink">*</span></label>
                    <input type="text" id="full-name"
                           className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                           placeholder="Enter your fullname" required/>
                  </div>
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone number<span
                      className="text-pink">*</span></label>
                    <input type="text" id="phone"
                           className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                           placeholder="Enter phone number" required/>
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 gap-8">
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address<span
                      className="text-pink">*</span></label>
                    <input type="email" id="email"
                           className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                           placeholder="Enter your email" required/>
                  </div>
                  <div className="md:mb-7 mb-6">
                    <label htmlFor="country" className="block mb-2 text-sm font-medium">Subject<span
                      className="text-pink">*</span></label>
                    <Select options={review_options} placeholder={'Select yours season'} styles={customStyles}
                            components={{IndicatorSeparator: () => null}}/>
                  </div>
                </div>
                <div className="md:mb-7 mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">Message<span
                    className="text-pink">*</span></label>
                  <textarea id="message" rows="4"
                            className="bg-white border border-gray-light9 placeholder:text-gray placeholder:opacity-50 text-base rounded-[9px] p-[14px] block w-full"
                            placeholder="Enter your message"></textarea>
                </div>
                <div>
                  <button type="submit"
                     className="flex items-center justify-center rounded-xl border border-transparent shadow-[0_7px_25px_rgba(55,126,98,0.2)] bg-green px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-700 hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1) min-w-[160px]">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <PreFooter/>
    </>
  )
}