import React, {useState} from 'react';
import BreadCrumb from "../../components/Breadcrumb";
import PreFooter from "../../blocks/pre-footer";

const breadcrumbs = [
  {
    'id': 1,
    'text': 'Home',
    'link': '/yaycommerce-react'
  },
  {
    'id': 2,
    'text': 'About us',
    'link': ''
  },
]

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
]

export default function About() {
  const [activeId, setActiveId] = useState(0);
  const openCollapse = (index) => {
    setActiveId(prevState => prevState === index ? -1 : index)
  }
  return (
    <>
      <BreadCrumb content={breadcrumbs}/>
      <section className="lg:mb-[150px] md:mb-[80px] mb-10">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-center xl:gap-x-[120px]">
            <div className="lg:col-span-8 max-w-[735px] lg:mb-0 lg:text-left text-center mb-8">
              <h1 className="lg:text-[40px] text-[28px] font-bold lg:mb-[30px] mb-5">The Place for<br/>
                Creativity Minimalism</h1>
              <p className="mb-5">Whether you’re more of a casual girl I feeling you, give me joggers all day every day
                or
                are looking to
                spice things up for your next date night.</p>
              <p className="mb-5">We have been designing and producing our products in New York since 2012. We put all
                our
                passion into our
                craft and don’t think about stopping. That is why we own have many unique products with a minimalist
                style.</p>
              <div className="mt-8">
                <a href="#/"
                   className="inline-flex items-center justify-center rounded-xl border border-transparent shadow-[0_7px_25px_rgba(55,126,98,0.2)] bg-green px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-700 hover:bg-black2 hover:shadow-[0_7px_35px_rgba(0,0,0,0.1)">Explore
                  our Products</a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <img src={require('../../assets/images/image-about-us.jpg')}
                   alt='img-about'
                   className="object-cover object-center lg:ml-0 mx-auto"/>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mb-[150px] md:mb-[80px] mb-10">
        <div className="container mx-auto !max-w-[1195px]">
          <h2 className="lg:text-[40px] text-[28px] font-bold lg:mb-10 mb-5 text-center max-w-[900px] mx-auto">We
            get it. Getting dressed
            can be hard and we have everything to bring a fashion minimalism revolution for your life.</h2>
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-5">
            <div className="text-center">
              <h3 className="font-semibold lg:text-[64px] text-[30px] lg:mb-0 mb-2 text-green leading-none">20.5K</h3>
              <p className="text-gray uppercase">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold lg:text-[64px] text-[30px] lg:mb-0 mb-2 text-green leading-none">10+</h3>
              <p className="text-gray uppercase">Years Business</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold lg:text-[64px] text-[30px] lg:mb-0 mb-2 text-green leading-none">34.9M</h3>
              <p className="text-gray uppercase">Products Sold</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold lg:text-[64px] text-[30px] lg:mb-0 mb-2 text-green leading-none">50+</h3>
              <p className="text-gray uppercase">Team Members</p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:mb-[80px] mb-10">
        <div className="container mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-[120px] lg:mb-[70px] mb-6">
            <div
              className="lg:col-span-8 h-full xl:ml-[calc((-1)*(100vw-1500px)/2-30px)] lg:mb-0 mb-8 lg:rounded-l-0 rounded-xl overflow-hidden group">
              <a href="#/"><img src={require('../../assets/images/photo-about-lg.png')}
                                alt='thumb-about-lg'
                                className="object-cover object-center h-full w-full transition-all ease-in-out duration-300 group-hover:scale-105"/></a>
            </div>
            <div className="lg:col-span-4 h-full rounded-xl overflow-hidden group">
              <a href="#/"><img src={require('../../assets/images/photo-about-sm.png')}
                                alt='thumb-about-lg'
                                className="object-cover object-center h-full w-full transition-all ease-in-out duration-300 group-hover:scale-105"/></a>
            </div>
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-[120px]">
            <div className="lg:col-span-8 lg:mb-0 mb-6">
              <div className="md:grid grid-cols-2 lg:gap-x-12 xl:gap-x-[120px]">
                <div className="lg:mb-0 mb-6">
                  <h3 className="text-2xl font-bold mb-[15px]"><a href="#/"
                                                                  className="relative inline-block after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0">Our
                    mission</a></h3>
                  <p>We help women change their appearance in a simple but elegant way, modern to improve life as well
                    as meet friends.</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-[15px]"><a href="#/"
                                                                  className="relative inline-block after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0">Our
                    vision</a></h3>
                  <p>With the motto is simple. We exist to help clients accelerate their transformation with simple
                    yet modern, luxurious designs.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div>
                <h3 className="text-2xl font-bold mb-[15px]"><a href="#/"
                                                                className="relative inline-block after:h-[1px] after:left-0 after:right-full after:bottom-0 after:absolute after:bg-black2 after:transition-all after:duration-300 after:ease-in-out hover:after:right-0">Our
                  vision</a></h3>
                <p>With the motto is simple. We exist to help clients accelerate their transformation with simple yet
                  modern, luxurious designs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mb-[100px] md:mb-[80px] mb-10">
        <div className="container mx-auto">
          <h2 className="lg:text-[40px] text-[28px] font-bold lg:mb-[55px] mb-5 text-center max-w-[900px] mx-auto">We
            believe that people are essential.</h2>
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-[30px] gap-5">
            {Array.from(Array(4), (e, i) => {
              return (
                <div key={`believe` + i} className="relative group text-center">
                  <div
                    className="relative mb-2 flex justify-center items-center bg-gray-light15 transition-all duration-300 rounded-xl overflow-hidden pt-3 group-hover:bg-[rgba(18,41,64,0.1)] group-hover:shadow-[0_25px_36px_rgba(18,41,64,0.1)]">
                    <img src={require('../../assets/images/men-picture.png')}
                         alt='thumb-about'
                         className="object-cover object-center lg:max-h-full max-h-[180px]"/>
                    <ul className="absolute bottom-0 right-3 z-20 h-0 invisible transition-all duration-300 group-hover:visible group-hover:h-auto group-hover:bottom-3">
                      <li className="mb-4">
                        <a href="#/" className="flex items-center justify-center h-9 w-9 rounded-[18px] text-gray bg-white transition-all duration-300 hover:bg-green hover:text-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="18"
                            fill="none"
                            viewBox="0 0 10 18"
                          >
                            <path
                              fill="currentColor"
                              d="M6.178 10.464V18H2.803v-7.536H0V7.41h2.803V6.297C2.803 2.17 4.484 0 8.04 0 9.13 0 9.403.18 10 .326v3.022c-.668-.12-.857-.186-1.55-.186-.825 0-1.266.24-1.669.712-.402.473-.603 1.292-.603 2.463v1.079H10L8.975 10.47H6.178v-.007z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#/" className="flex items-center justify-center h-9 w-9 rounded-[18px] text-gray bg-white transition-all duration-300 hover:bg-green hover:text-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            fill="none"
                            viewBox="0 0 17 16"
                          >
                            <path
                              fill="currentColor"
                              d="M3.623 5.262H.279v10.661h3.344V5.262zM12.658 5.03c-.123-.015-.254-.023-.385-.03a3.901 3.901 0 00-3.297 1.51c-.1.13-.146.207-.146.207V5.292H5.633v10.662h3.343v-3.251-1.756c0-.725-.054-1.495.308-2.157.308-.555.863-.832 1.487-.832 1.849 0 1.887 1.671 1.887 1.825V16h3.344V9.044c0-2.38-1.21-3.783-3.344-4.014zM1.941 3.883a1.941 1.941 0 100-3.883 1.941 1.941 0 000 3.883z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#/" className="flex items-center justify-center h-9 w-9 rounded-[18px] text-gray bg-white transition-all duration-300 hover:bg-green hover:text-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                          <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="13"
                          fill="none"
                          viewBox="0 0 18 13"
                          >
                          <path
                            fill="currentColor"
                            d="M17.82 2.805s-.175-1.274-.716-1.834C16.418.235 15.652.231 15.3.188 12.783 0 9.004 0 9.004 0h-.008S5.217 0 2.7.188C2.348.23 1.582.235.896.97c-.54.56-.713 1.834-.713 1.834S0 4.303 0 5.798v1.4c0 1.495.18 2.993.18 2.993s.175 1.275.713 1.834c.686.737 1.586.711 1.986.79C4.321 12.958 9 13 9 13s3.783-.007 6.3-.191c.352-.044 1.118-.047 1.803-.784.542-.56.718-1.834.718-1.834S18 8.697 18 7.2V5.798c0-1.495-.18-2.993-.18-2.993zM7.14 8.9V3.704l4.862 2.606L7.14 8.9z"
                          ></path>
                        </svg>
                        </a>
                      </li>
                      <li className="last:mb-0 mb-4">
                        <a href="#/" className="flex items-center justify-center h-9 w-9 rounded-[18px] text-gray bg-white transition-all duration-300 hover:bg-green hover:text-white hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="18"
                            fill="none"
                            viewBox="0 0 16 18"
                          >
                            <path
                              fill="currentColor"
                              d="M11.279.685L10.852 0H8.267v6.167l-.01 6.024c.005.045.01.094.01.139 0 1.508-1.207 2.739-2.696 2.739-1.488 0-2.695-1.227-2.695-2.74 0-1.508 1.207-2.738 2.695-2.738.309 0 .608.058.885.156V6.74a5.214 5.214 0 00-.885-.076C2.501 6.668 0 9.21 0 12.334S2.502 18 5.576 18s5.575-2.542 5.575-5.666V5.17c1.114 1.132 2.555 2.238 4.149 2.591V4.686c-1.73-.779-3.453-3.08-4.021-4.001z"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h4 className="lg:text-lg text-base uppercase font-semibold">
                    <a href="#/">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Jenny Mathew
                    </a>
                  </h4>
                  <p className="text-gray">Founder</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="lg:mb-[150px] mb-[80px]">
        <div className="container mx-auto">
          <div className="md:mb-[50px] mb-5 rounded-xl overflow-hidden">
            <img src={require('../../assets/images/img-full-about.jpg')}
                 alt='thumb-about'
                 className="object-cover object-center"/>
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-[120px]">
            <div className="lg:col-span-5">
              <h2
                className="lg:text-[40px] text-[28px] font-bold lg:mb-[55px] max-w-[520px] md:ml-0 mx-auto lg:mb-0 mb-5">We
                believe that creating quality products is the key to our success.
                We’re Remit!
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div>
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
            </div>
          </div>
        </div>
      </section>
      <PreFooter/>
    </>
  )
}